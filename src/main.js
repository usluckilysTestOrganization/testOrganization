// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'

Vue.config.productionTip = false

Vue.use(Vuex)

// router.beforeEach(function(to,from,next){
//
//   next();
// })

const store = new Vuex.Store({
  state: {
    sliderLoadFirst:true,
    sliderShow:true //创建一个相对全局变量控制sliderbar状态，
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store:store,
  template: '<App/>',
  components: { App }
})
