<template lang="html">
  <div class="play">

    <div class="header">
			<div class="title">
				<router-link to="/">
					<i class="iconfont icon-shouye left"></i>
				</router-link>
				<div class="music-info">
					<p>{{ currentUrl.songinfo.title }}</p>
					<p class="author">{{ currentUrl.songinfo.author }}</p>
				</div>
				<router-link to="/search"><i class="iconfont icon-sousuo right"></i></router-link>
			</div>
		</div>

    <div class="song-info">
			<div class="song-info-img">
				<img :src="currentUrl.songinfo.pic_big">
        <!-- 歌词 -->
        <div class="song-lrc">
          <LRC :currentTime="currentTime" :durationTime="durationTime" :musicid="this.$route.params.songid" />
        </div>
			</div>
			<div class="iconbox">
				<i @click="collectHandler" :class={ca:collectAction} class="iconfont icon-shoucang2 left"></i>
				<i class="box"></i>
				<i class="iconfont icon-xiazai right"></i>
			</div>
		</div>
    <div class="song">
      <audio ref="player" :src="currentUrl.bitrate.file_link" controls autoplay></audio>
		</div>
  </div>
</template>

<script>

import Vue from "vue"
import "../assets/font/iconfont.css"
const LRC = Vue.component("lrc",(resolve)=>require(["../components/LRC"],resolve))

export default {
  name:"play",
  data(){
    return{
      collectAction:false,
      currentUrl:{
        songinfo:{
          title:""
        },
        bitrate:{}
      },
      currentTime:null, // 当前播放时间
      durationTime:null // 整体时间
    }
  },
  components:{
    LRC
  },
  created(){
    const playUrl = this.HOST + "/v1/restserver/ting?method=baidu.ting.song.play&songid=" + this.$route.params.songid;
    this.$axios.get(playUrl)
      .then(res => {
        this.currentUrl = res.data;
      })
      .catch(error => {
        console.log(error);
      })
  },
  methods:{
    addEventListeners(){
      // timeupdate监听播放时间
     this.$refs.player.addEventListener('timeupdate', this._currentTime),
     // canplay监听播放的整体时间
     this.$refs.player.addEventListener('canplay', this._durationTime)
    },
    removeEventListeners: function () {
      this.$refs.player.removeEventListener('timeupdate', this._currentTime)
      this.$refs.player.removeEventListener('canplay', this._durationTime)
    },
    _currentTime(){
       this.currentTime = this.$refs.player.currentTime
       // currentTime是audio标签提供的获取当前播放时间的方法
     },
    _durationTime(){
     this.durationTime = this.$refs.player.duration
     // duration是audio标签提供的获得歌曲播放整体时间的方法
   },
   // 收藏
   collectHandler(event){
     // 将数据加入到数据库中
     this.$axios.get("http://localhost:3000/addcollect?musicid="+ this.$route.params.songid +"&musicname="+ this.currentUrl.songinfo.title +"&musicauthor="+this.currentUrl.songinfo.author)
      .then(res => {
        this.$message("收藏成功")
        this.collectAction = true;
        console.log(res.data);
      })
      .catch(error => {
        this.$message("收藏成功")
        console.log(error);
      })
   }
  },
  beforeDestroyed(){
    this.removeEventListeners()
  },
  mounted(){
    this.addEventListeners();
  }
}
</script>

<style scoped>

.header{
	padding:15px;
}

.music-info{
	flex: 1;
	font-size: 20px;
}

.title{
	display: flex;
	text-align: center;
}

.left{
	font-size: 30px;
}

.ca{
  color: red;
}

.right{
	font-size: 30px;
}

.song-info{
	padding: 15px;
}

.song-info-img{
	text-align: center;
}

.song-info-img img{
	width: 50%;
	border-radius: 5px;
	box-shadow: 0 0 10px 0 rgba(50,50,50,.31);
}

.song-lrc{
	margin-top: 10px;
  min-height: 50px;
}

.iconbox{
	display: flex;
	margin-top: 30px;
}

.iconbox .box{
	flex: 1;
}

.song{
	width: 100%;
	text-align: center;
}

.song audio{
	width: 80%;
}

.active{
  color: #222;
}

.author{
  font-size: 12px;
  color: #999;
}

</style>
