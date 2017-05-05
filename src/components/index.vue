<template>
    <my_loader></my_loader>
</template>
<script>
    import loader from '@/components/loader/showpersonhead'

    export default({
        name:'index',
        data () {
            return {

            }
        },
        components:{
            my_loader:loader
        }
    })
</script>