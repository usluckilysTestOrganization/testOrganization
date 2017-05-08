<template>
  <transition name="">
    <div class="pagebox all" style="position:relative;z-index:1">
      <slider_bar :parentData="obj.list" ></slider_bar>
    </div>
  </transition>
</template>
<script>
  import sliderbar from '@/components/anicomp/sliderbar'

  export default({
    name:'homepage',
    data () {
      return {
        obj:{
          list:[{msg:'安静是打算',id:'1'},{msg:'非得分',id:'2'},{msg:'个风格',id:'3'},{msg:'阿斯顿',id:'4'},{msg:'更大阿迪',id:'5'},{msg:'规范化风格',id:'6'},{msg:'非郭德纲的',id:'7'}]
        }
      }
    },
    methods:{
      test(){
        this.obj.list.splice(Math.random()*this.obj.list.length,1)
      }
    },
    components:{
      slider_bar:sliderbar
    }
  })
</script>
<style>
  .pagebox{position:relative;}

</style>
