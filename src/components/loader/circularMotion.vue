<template>
  <canvas id="cm" ></canvas>
</template>
<script>
  import $ from 'jquery'
  import M from'../../assets/js/simpleMath'

  export default({
    name:'cm',
    data(){
      return {

      }
    },
    methods:{
      init(){
        let cm = document.getElementById('cm'),
          _this = this,
          cxt  = cm.getContext('2d'),
          w = $(window).width(),
          h = $(window).height();

        let psI = M.psI , rd = M.random;

        cm.width = w;
        cm.height = h;

        let circles = []

        for(let i = 0;i<100;i++){

          let x = w/2,//坐标x
            y = h/2,//坐标y
            radius = rd(2,3),//半径
            xa = rd(3,-2),//x轴速度
            ya = rd(3,-2),//y轴速度
            angle = rd(2,1),//角度
            angleAdd = rd(6,-4),//角度增加率
            circularR = 100,//圆周半径
            color = "rgba("+psI(rd(255,0))+","+psI(rd(255,0))+","+psI(rd(255,0))+",0.4)";

          circles.push({
            x:x,
            y:y,
            radius:radius,
            xa:xa,
            ya:ya,
            angle:angle,
            angleAdd:angleAdd,
            circularR:circularR,
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
        let num = 0;

        function animation(){
          cxt.clearRect(0,0,cm.width, cm.height);//清除canvas
          let x ,y
          circles.forEach(function(c){
            x = Math.sin( c.angle*Math.PI/180 ) * c.circularR + c.x
            y = Math.cos( c.angle*Math.PI/180 ) * c.circularR + c.y
            cxt.fillStyle = c.color;
            cxt.beginPath();
            cxt.arc( x , y , c.radius ,0,Math.PI*2,true);
            cxt.closePath();
            cxt.fill();
            c.angle+=c.angleAdd
          })

          num+=6
        }

        let timer = setInterval(function(){
          animation()
        },1000/60)



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
