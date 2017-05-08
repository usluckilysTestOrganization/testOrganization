import Vue from 'vue'
import Router from 'vue-router'
import details from '@/components/details'
import index from '@/components/index'
import homepage from '@/components/homepage'
import sliderbar from '@/components/anicomp/sliderbar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {path:'/homepage',name:'homepage',component:homepage},
    {path:'/details/:index',name:'details',component:details},
    {path:'/sliderbar',name:'sliderbar',component:sliderbar}
  ]
})
