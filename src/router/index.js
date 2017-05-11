import Vue from 'vue'
import Router from 'vue-router'
import details from '@/components/details'
import index from '@/components/index'
import homepage from '@/components/homepage'
import sliderbar from '@/components/anicomp/sliderbar'
import randomcircle from '@/components/loader/randomCircle'
import cm from '@/components/loader/circularMotion'

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
    {path:'/sliderbar',name:'sliderbar',component:sliderbar},
    {path:'/randomcircle',name:'randomcircle',component:randomcircle},
    {path:'/cm',name:'cm',component:cm}
  ]
})
