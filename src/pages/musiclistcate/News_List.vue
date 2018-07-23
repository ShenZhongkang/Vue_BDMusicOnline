<template lang="html">
  <div class="news">
      <MusicList :url="newsMusicUrl" />
  </div>
</template>

<script>

import MusicList from "../../components/Music_List"

export default {
  name:"news",
  data(){
    return{
      newsMusicUrl:"/v1/restserver/ting?method=baidu.ting.billboard.billList&type=1&size=5&offset=0"
    }
  },
  components:{
    MusicList
  }
}
</script>

<style scoped>
</style>
