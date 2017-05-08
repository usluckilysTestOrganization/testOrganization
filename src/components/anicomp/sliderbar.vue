<template>
  <!--<div style="position:relative;z-index:1">-->
    <!--<input v-model="query" key="query">-->
    <transition-group tag="ul"
                      name="slider-left"
                      v-bind:css="false"
                      v-on:before-enter="beforeEnter"
                      v-on:enter="enter"
                      v-on:after-enter="afterEnter"
                      v-on:enter-cancelled="enterCancelled"

                      v-on:before-leave="beforeLeave"
                      v-on:leave="leave"
                      v-on:after-leave="afterLeave"
                      v-on:leave-cancelled="leaveCancelled"
    >

      <li class="slider-bar" v-for="(item, index) in computedList"
          v-bind:key="item.id"
          v-bind:data-index="index"
          @click="test($event,index)"
          :style="'background-color:rgb(48,'+(index*3+150)+', 247)'"
          v-if="$store.state.sliderShow"
      >

        <div class="slider-bar-inner" >{{ item.msg }} {{ $store.state.sliderShow }}</div>

      </li>

      <!--<li v-bind:key="deleteData"><button @click="deleteData" >delete</button></li>-->
    </transition-group>
  <!--</div>-->

</template>
<script>
import  Velocity from 'velocity-animate'
import touch from '../../assets/js/touch'
import $ from 'jquery'

  export default({
    name:'sliderbar',
    props:['parentData'],
    data () {
      return {
        obj:this.parentData || [{msg:'安静是打算',id:'1'},{msg:'非得分',id:'2'},{msg:'个风格',id:'3'},{msg:'阿斯顿',id:'4'},{msg:'更大阿迪',id:'5'},{msg:'规范化风格',id:'6'},{msg:'非郭德纲的',id:'7'}],
        query: '',
        list:[],
        show:this.$store.state.sliderShow
      }
    },
    computed:{
      computedList: function () {
        var vm = this
        return this.list.filter(function (item) {
          return item.msg.toLowerCase().indexOf(vm.query.toLowerCase()) !== -1
        })
      }
    },
    methods:{
      beforeEnter(el,done){
        el.style.left = '-100%'
      },
//      leave(el,done){
//        alert('leave')
//        el.style.left = '-100%'
//      },
      enter(el,done){
        var delay = el.dataset.index * 200;
        setTimeout(function () {
          Velocity(
            el,
            { left: 0},
            { complete: done }
          )
        }, delay)
      },
      afterEnter (el,done) {
        // ...

      },
      enterCancelled(el){

      },
      beforeLeave(el){

      },
      leave(el,done){
        console.log('leave')
        var len = this.computedList.length;
        var delay = (len-el.dataset.index) * 200
        setTimeout(function () {
          Velocity(
            el,
            { left: '100%'},
            { complete: done }
          )
        }, delay)
      },
      afterLeave(el){

      },
      leaveCancelled(el){

      },
      test(el,index,done){
        var delay = 100 , _this = this;
        $(el.currentTarget).siblings().css({zIndex:'0',boxShadow:"0 0 0",})
        $(el.currentTarget).siblings().find('.slider-bar-inner').css({transform:'translateZ(0px)'})
        $(el.currentTarget).css ({ boxShadow:"0 2px 16px rgba(0,0,0,0.25)" ,zIndex:'1'})
        $(el.currentTarget).find('.slider-bar-inner').css({transform:'translateZ(30px)'})
//        Velocity(
//          el.currentTarget,
//          { left:'-100%' },
//          { complete: function(){
//            //do something
//          } }
//        )
//        this.list.splice(index,1)
        _this.$router.push({path:'/details'})

      },

      deleteData(){
        this.list.splice(Math.random()*this.list.length,1)
      }
    },
    created(){
      touch.init(window);
      let _this = this
      _this.$store.state.sliderShow = true // 改变store中sliderbar的状态

      if(_this.$store.state.sliderLoadFirst){//判断是否为第一次创建sliderbar

        _this.$router.beforeEach(function(to,from,next){
          let len = _this.computedList.length //获取列表长度

          if(from.path == '/homepage'){
            _this.$store.state.sliderShow = false //销毁sliderbar
            setTimeout(function(){
              _this.$store.state.sliderLoadFirst = false //更改sliderLoadFirst（第一次创建sliderbar）状态为false
              next() //继续执行下去
            },200*len);//计算下个路由前的总延时
          }else{
            next()
          }

        })

      }

    },
    mounted(){
      console.log('mounted')
      let _this = this
      for(var i in _this.obj){
        _this.list.push(_this.obj[i])
      }

    },
    beforeDestroy(){
      console.log('beforeDestroy')
    },
    watch:{
      '$route' :function(to, from){

//        })
      }
    },
    components:{

    }
  })
</script>
<style>
  .slider-bar{width:100%;padding:1rem;position:relative;color:#fff;border-bottom: 1px solid rgba(0, 0, 0, 0.1);border-top: 1px solid rgba(255, 255, 255, 0.07);perspective: 500px}
  .slider-bar-inner{width:100%;height:100%;transition:all 0.3s ease;transform: translateZ(0px);}

</style>
