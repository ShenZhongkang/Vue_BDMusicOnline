<template lang="html">
  <div class="home">
    <TodayRecommend />
    <NewsMusic />
    <SwiperBanner />
    <MusicListNav />
    <transition name="fade">
      <keep-alive>
          <router-view></router-view>
      </keep-alive>
    </transition>
    <HotSongList />
  </div>
</template>

<script>
// 新歌速递
import NewsMusic from "../components/News_Music"
import TodayRecommend from "../components/Today_Recommend"
import SwiperBanner from "../components/Swiper_Banner"
import MusicListNav from "../pages/musiclistcate/Music_ListNav"
import HotSongList from "../components/Hot_SongList"

export default {
  name:"home",
  data(){
    return{

    }
  },
  components:{
    NewsMusic,
    TodayRecommend,
    SwiperBanner,
    MusicListNav,
    HotSongList
  }
}
</script>

<style scoped>

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
