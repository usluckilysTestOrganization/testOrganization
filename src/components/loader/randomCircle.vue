<template>
  <canvas id="randomCircle" width=""  height=""></canvas>
</template>
<script>
  import $ from 'jquery'
  import touch from '../../assets/js/touch'

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
          rNum = _this.random(15,550),
          w = $(window).width(),
          h = $(window).height();

        let psI = _this.psI , rd = _this.random;

        _this.w = w;
        _this.h = h;
        rc.width = w;
        rc.height = h;

        let circles = []//存放圆的数组

        for(let i = 0;i<rNum;i++){

          let x = rd(w,0),//坐标x
              y = rd(h,0),//坐标y
              radius = rd(1,1),//半径
              xa = rd(2,-1),//x轴速度
              ya = rd(2,-1),//y轴速度
              color = "rgba("+psI(rd(255,0))+","+psI(rd(255,0))+","+psI(rd(255,0))+",0.4)";
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
        let animation = function(dot,surround){//dot为趋近点坐标
          cxt.clearRect(0,0,rc.width, rc.height);//清除canvas

          //循环circles数组，改变其中圆的状态参数
          circles.forEach(function(c){
            c.x += c.xa;//改变x轴值
            c.y += c.ya;//改变y轴值
            if(dot && dot.x && dot.y && !surround){
              c.xa *= ( (c.x > dot.x && c.xa > 0) || (c.x < dot.x && c.xa < 0) ) ? -1 : 1;
              c.ya *= ( (c.y > dot.y && c.ya > 0) || (c.y < dot.y && c.ya < 0) ) ? -1 : 1;
//              console.log(c.xa.toFixed(2)+","+psI(c.x)+','+psI(dot.x));
            }else if(dot && dot.x && dot.y && surround){
              let dotDistance = _this.countSqrt({x:c.x,y:c.y},dot)
//              console.log(dotDistance)
              if(dotDistance > 50){
                c.xa *= ( (c.x > dot.x && c.xa > 0) || (c.x < dot.x && c.xa < 0) ) ? -1 : 1;
              }else if(dotDistance < 40){
                c.xa *= ( (c.x > dot.x && c.xa > 0) || (c.x < dot.x && c.xa < 0) ) ? 1 : -1;
              }
              if(dotDistance > 50){
                c.ya *= ( (c.y > dot.y && c.ya > 0) || (c.y < dot.y && c.ya < 0) ) ? -1 : 1;
              }else if(dotDistance < 40){
                c.ya *= ( (c.y > dot.y && c.ya > 0) || (c.y < dot.y && c.ya < 0) ) ? 1 : -1;
              }


            }else{
              //判断圆心坐标是否超出边界，是则将速度乘-1以转换方向
              c.xa *= (c.x > rc.width || c.x <= 0) ? -1 : 1;
              c.ya *= (c.y > rc.height || c.y <= 0) ? -1 : 1;
            }

            //根据状态参数重新绘制圆
            cxt.fillStyle = c.color;
            cxt.beginPath();
            cxt.arc( c.x , c.y , c.radius ,0,Math.PI*2,true);
            cxt.closePath();
            cxt.fill();
          })
        };

        //test
        let testDot = {x:100,y:100};
        let testsh = setInterval(function(){
          testDot.x = rd(rc.width,0);
          testDot.y = rd(rc.height,0);
        },100000)
        //test,自动生成趋近点

        setInterval(function(){
          animation(touch.start,true);
        },1000/30);
        //此处时间相当于一秒绘制帧数

      },
      random(x,y){
        return Math.random()*x+y
      },
      psI(x){
        return parseInt(x)//貌似webkit的浏览器rgba前三个颜色值必须为正整数,否则会显示黑色
      },
      countSqrt(dotA,dotB){
        return Math.sqrt((dotA.x-dotB.x)*(dotA.x-dotB.x)+(dotA.y-dotB.y)*(dotA.y-dotB.y))
     }
    },
    mounted(){
      this.init();
      touch.init(document.getElementById('randomCircle'),null,null,function(t){
        t.start.x = NaN;
        t.start.y = NaN
      })
    },
    beforeDestroy(){
      touch.destroy()
    }
  })
</script>
<style>
  #randomCircle{position:fixed;z-index:-1;}
</style>
