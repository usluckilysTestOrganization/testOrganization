<template>
  <canvas id="randomCircle" width=""  height=""></canvas>
</template>
<script>
  import $ from 'jquery'

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
          rNum = _this.random(15,5),
          w = $(window).width(),
          h = $(window).height();

        _this.w = w;
        _this.h = h;
        rc.width = w;
        rc.height = h;

        let circles = []//存放圆的数组

        for(let i = 0;i<rNum;i++){
          let x = _this.random(w,0),//坐标x
              y = _this.random(h,0),//坐标y
              radius = _this.random(15,10),//半径
              xa = _this.random(2,-1),//x轴加速度
              ya = _this.random(2,-1);//y轴加速度
          //随机生成圆的各种参数

          circles.push({
            x:x,
            y:y,
            radius:radius,
            xa:xa,
            ya:ya
          })
        }

        for(let i in circles){
          cxt.fillStyle="rgba("+_this.random(255,0)+","+_this.random(255,0)+","+_this.random(255,0)+",40%)";
          cxt.beginPath();
          cxt.arc( circles[i].x , circles[i].y , circles[i].radius ,0,Math.PI*2,true);
          cxt.closePath();
          cxt.fill();
        }
        //根据circles生成圆

      },
      random(x,y){
        return Math.random()*x+y
      }
    },
    mounted(){
      this.init();
    }
  })
</script>
<style>
  #randomCircle{position:fixed;z-index:-1;}
</style>
