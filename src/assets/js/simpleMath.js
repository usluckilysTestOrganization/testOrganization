/**
 * Created by Administrator on 2017/5/11.
 */
export default({
  random(x,y){
    return Math.random()*x+y
  },
  psI(x){
    return parseInt(x)//貌似webkit的浏览器rgba前三个颜色值必须为正整数,否则会显示黑色
  },
  countSqrt(dotA,dotB){
    return Math.sqrt((dotA.x-dotB.x)*(dotA.x-dotB.x)+(dotA.y-dotB.y)*(dotA.y-dotB.y))
  }
})
