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
            ya = _this.random(2,-1),//y轴加速度
              color = "rgba("+_this.random(255,0)+","+_this.random(255,0)+","+_this.random(255,0)+",40%)";
          //随机生成圆的各种参数

          circles.push({
            x:x,
            y:y,
            radius:radius,
            xa:xa,
            ya:ya,
            color:color
          })
        }

        for(let i in circles){
          cxt.fillStyle = circles[i].color;
          cxt.beginPath();
          cxt.arc( circles[i].x , circles[i].y , circles[i].radius ,0,Math.PI*2,true);
          cxt.closePath();
          cxt.fill();
        }
        //根据circles生成圆

        //每一帧的状态
        let animation = function(){
          cxt.clearRect(0,0,rc.width, rc.height);//清除canvas

          //循环circles数组，改变其中圆的状态参数
          circles.forEach(function(c){
            c.x += c.xa;//改变x轴值
            c.y += c.ya;//改变y轴值

            //判断圆心坐标是否超出边界，是则将加速度乘-1已转换方向
            c.xa *= (c.x > rc.width || c.x <= 0) ? -1 : 1;
            c.ya *= (c.y > rc.height || c.y <= 0) ? -1 : 1;

            //根据状态参数重新绘制圆
            cxt.fillStyle = c.color;
            cxt.beginPath();
            cxt.arc( c.x , c.y , c.radius ,0,Math.PI*2,true);
            cxt.closePath();
            cxt.fill();
          })
        };

        setInterval(function(){
          animation();
        },1000/30);
        //此处时间相当于一秒绘制帧数

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
