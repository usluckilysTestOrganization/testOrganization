import Vue from 'vue'
import Router from 'vue-router'
import hello from '@/components/Hello'
import index from '@/components/index'
import homepage from '@/components/homepage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {path:'/homepage',name:'homepage',component:homepage},
    {path:'/details',name:'details',component:hello}
  ]
})
