<template lang="html">
  <div class="king">
    <MusicList :url="kingMusicUrl" />
  </div>
</template>

<script>

import MusicList from "../../components/Music_List"

export default {
  name:"king",
  data(){
    return{
      kingMusicUrl:"/v1/restserver/ting?method=baidu.ting.billboard.billList&type=16&size=5&offset=0"
    }
  },
  components:{
    MusicList
  }
}
</script>

<style scoped>
</style>
