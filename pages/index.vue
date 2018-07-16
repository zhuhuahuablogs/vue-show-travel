<template>
  <div id="First">
    <header-nav></header-nav>
    <nuxt-child/>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import a from '../components/loading.vue'
  import headerNav from '../components/headerNav.vue'
  export default {
    middleware: 'auth',  //定义页面中间件
    head () {
      return {
        title: '首页'
      }
    },
    methods: {
      getMock(){
        this.getRequest('https://www.easy-mock.com/mock/5ae145ab97d6fe55b5749d5f/deku/testmock').then(resp=>{
          console.log(resp)
        })
      }
    },
    components:{
      headerNav
    }
  }
</script>


