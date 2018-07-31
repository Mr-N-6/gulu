<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
    /*import store from './store/gulu'
    import { mapState,mapGetters,mapActions } from 'vuex'*/
    export default {
      name: 'App',
      // store:store,
      // computed: {
      //   detailLeftMenu(){
      //     return this.$store.state.detailLeftMenu
      //   },
      //   productIcon(){
      //     return this.imgMap[this.$route.path]
      //   },
      // },
      // created(){
      // 	this.$router.push("/detail/1");
      // }
    }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #000;
    height: 100%;
  }
  body, html {
    height: 100%;
  }
  * {padding:0; margin: 0; }
  li {
    list-style: none;
  }
</style>
