<template>
  <transition name="fade">
    <div class="all">
      <h4>{{ obj.title }}</h4>
      <div>
        {{ obj.content }}
      </div>
    </div>
  </transition>

</template>
<script>
  export default({
    name:'details',
    data(){
      return {
        obj:{
          title:'asdasdadasdas',
          content:'快接啊话费卡加合法快递费花露水的分类看'
        }
      }
    }
  })
</script>
<style scoped>

</style>
