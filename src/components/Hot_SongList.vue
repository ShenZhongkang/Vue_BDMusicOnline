<template lang="html">
  <div class="mod-albums">
      <div class="hd log url">
          <h2>热门歌单</h2>
          <router-link tag="div" :to="{name:'MoreList',params:{currenttype:'热门歌单',musictype:'22'}}">更多</router-link>
      </div>
      <div class="container">
          <div class="gallery">
              <div class="scroller">
                  <router-link tag="div" :to="{name:'MusicPlay',params:{songid:item.song_id}}" class="card url" v-for="(item,index) in newsMusicData" :key="index">
                      <div class="album">
                          <img :src="item.pic_big" :alt="item.title">
                          <div class="name">{{ item.title }}</div>
                      </div>
                  </router-link>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name:"hotsonglist",
  data(){
    return{
      newsMusicData:[]
    }
  },
  created(){
    const newsMusicUrl = this.HOST + "/v1/restserver/ting?method=baidu.ting.billboard.billList&type=22&size=6&offset=0";
    this.$axios.get(newsMusicUrl)
      .then(res => {
        this.newsMusicData = res.data.song_list
      })
      .catch(error => {
        console.log(error);
      })
  }
}
</script>

<style scoped>


 .mod-albums {
    background-color: #fff;
    padding: 10px 17px;
    margin-top: 10px;
}

 .hd {
    display: flex;
    margin: 14px 0 18px 0;
}

 .hd h2 {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    margin: 0;
    padding: 0;
    font-size: 20px;
}

.hd div {
    width: 64px;
    font-size: 12px;
    text-align: right;
}

.mod-albums .gallery {
    overflow: hidden;
    margin: 0 -5px;
}

 .mod-albums .gallery .card {
    width: 33.3%;
    float: left;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 0 5px 10px;
}

.mod-albums .gallery .card .album {
  position: relative;
}

.mod-albums .gallery .card img {
    width: 100%;
    height: auto;
    border: 1px solid #eee;
}

.mod-albums .gallery .card .name {
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-top: 4px;
    line-height: 14px;
    max-height: 28px;
    margin-bottom: 2px;
}

</style>
