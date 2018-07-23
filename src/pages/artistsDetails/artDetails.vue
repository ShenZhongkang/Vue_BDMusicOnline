<template lang="html">
  <div class="artdetails">
    <ArtTitle :tingid="this.$route.params.tingid" />
    <ArtList :tingid="this.$route.params.tingid" />
  </div>
</template>

<script>

import ArtList from "../../components/artists/Art_List"
import ArtTitle from "../../components/artists/Art_Title"

export default {
  name:"artdetails",
  data(){
    return{

    }
  },
  components:{
    ArtList,
    ArtTitle
  }
}
</script>

<style scoped>
</style>
