<template lang="html">
  <div class="listcate">
    <ListCateList :key="index" v-for="(item,index) in musicTypeJSON" :musicType="item" />
  </div>
</template>

<script>

import ListCateList from "../components/ListCate_List"
import musicTypeJSON from "../assets/data/musictype.json"

export default {
  name:"listcate",
  data(){
    return{
      musicTypeJSON:[]
    }
  },
  components:{
    ListCateList
  },
  created(){
    this.musicTypeJSON = musicTypeJSON.currentType
  }
}
</script>

<style scoped>
</style>
