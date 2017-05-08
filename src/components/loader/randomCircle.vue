<template>
  <canvas id="randomCircle" width=""  height=""></canvas>
</template>
<script>
  export default({
    name:'randomCircle',
    data(){
      return {
        w:'',
        h:''
      }
    },
    methods:{
      init(){

        let rc = document.getElementById('randomCircle'),
          _this = this,
          cxt  = rc.getContext('2d'),
          rNum = Math.random()*10,
          w = screen.clientWidth,
          h = screen.clientHeight;

        _this.w = w;
        _this.h = h;
        rc.width = w;
        rc.height = h;

        for(let i = 0;i<rNum;i++){
          cxt.fillStyle="rgba(156,234,128,70%)";
          cxt.beginPath();
          cxt.arc( Math.random()*600+60 , Math.random()*1000+100 , Math.random()*40+20 ,0,Math.PI*2,true);
          cxt.closePath();
          cxt.fill();
        }

      }
    },
    mounted(){
      this.init();
    }
  })
</script>
<style>
  #randomCircle{position:fixed;z-index:-1;border:1px solid #000}
</style>
