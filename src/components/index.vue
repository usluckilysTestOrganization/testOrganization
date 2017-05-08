<template>
  <div class="all">
    <my_loader></my_loader>
    <r_c></r_c>
  </div>
</template>
<script>
    import loader from '@/components/loader/showpersonhead'
    import randomCircle from '@/components/loader/randomCircle'

    export default({
        name:'index',
        data () {
            return {

            }
        },
        components:{
          my_loader:loader,
          r_c:randomCircle
        }
    })
</script>
