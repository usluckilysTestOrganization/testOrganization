<template>
  <transition name="loader"
    v-if="test"
  >
    <div class="loader-box">
      <div class="loader-pic" @click="picAni()">
        <img :src="headPic"/>
      </div>
    </div>
  </transition>
</template>
<script>
    export default({
        name:'loader',
        data () {
            return {
              headPic:require('../../assets/img/11.png'),
              test:false
            }
        },
      methods:{
        picAni () {
          this.test = !this.test;
          this.$router.push({path:'/homepage'})
        }
      },
      mounted () {
        let _this = this;
        _this.test = !_this.test;
      }
    })
</script>
<style scoped>
  .loader-box{position:fixed;width:100%;height:100%;top:0;left:0;display:flex;align-items:center;justify-content:center;}
  .loader-pic{position:relative;top: -6rem;}
  .loader-enter-active{
    transition:opacity 0.5s ease;
    opacity:1
  }
  .loader-leave-active{
    transition:opacity 0.3s ease;
    opacity:0
  }
  .loader-enter{
    opacity:0;
  }
  .loader-leave{
    opacity:1;
  }
</style>
