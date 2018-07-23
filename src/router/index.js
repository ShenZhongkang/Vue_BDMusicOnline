import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import Home from "@/pages/home"
import Artists from "@/pages/artists"
import Listcate from "@/pages/listcate"
import Search from "@/pages/search"
import Ucenter from "@/pages/ucenter"
import HotList from  "@/pages/musiclistcate/Hot_List"
import KingList from  "@/pages/musiclistcate/King_List"
import NewsList from  "@/pages/musiclistcate/News_List"
import MoreList from "@/pages/morelist"
import MusicPlay from "@/pages/musicplay"
import ArtistsDetails from "@/pages/artistsDetails/artDetails"
import ListCateDetails from "@/pages/listcateDetails/licateDetails"

Vue.use(Router)

export default new Router({
  linkActiveClass:"active",
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      redirect:"/home",
      children:[
        {
          path:"home",
          component:Home,
          redirect:"/home/hot",
            children:[
              {
                path:"hot",
                component:HotList
              },
              {
                path:"king",
                component:KingList
              },
              {
                path:"news",
                component:NewsList
              }
            ]
        },
        {
          path:"/home/morelist/:currenttype/:musictype",
          name:"MoreList",
          component:MoreList
        },
        {
          path:"artists",
          component:Artists
        },
        {
          path:"listcate",
          component:Listcate
        },
        {
          path:"search",
          component:Search
        },
        {
          path:"ucenter",
          component:Ucenter
        },
        {
          path:"artdetails/:tingid",
          name:"ArtistsDetails",
          component:ArtistsDetails
        },
        {
          path:"listcatedetails/:musictype",
          name:"ListCateDetails",
          component:ListCateDetails
        }
      ]
    },
    {
      path:"/musicplay/:songid",
      name:"MusicPlay",
      component:MusicPlay
    }
  ]
})
