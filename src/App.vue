<template>
  <div id="app">
    <div class="appWrap">
      <div class="appLeft">
        <div class="leftMenu">
          <span class="logo"></span>
          <ul class="appLeftMenu">
            <router-link
              v-for="item in detailLeftMenu"
              :to="{path:'/detail/' +item.path}"
              tag="li"
              :key="item.id"
              active-class="active">{{ item.name }}</router-link>
          </ul>
        </div>
      </div>
      <div class="appTop">
        <div>
          <h3>后台管理系统</h3>
          <ul class="headTop">
            <li>前端开发</li>
            <li>退出</li>
            <li>通知中心</li>
          </ul>
        </div>
      </div>
      <div class="appContainer">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
    import store from './store/gulu'
    import { mapState,mapGetters,mapActions } from 'vuex'
    export default {
      name: 'App',
      store:store,
      computed: {
        detailLeftMenu(){
          return this.$store.state.detailLeftMenu
        },
        productIcon(){
          return this.imgMap[this.$route.path]
        },
      },
      created(){
      	this.$router.push("/detail/1");
      }
    }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #000;
  }
  * {padding:0; margin: 0; }
  .leftMenu span.logo {
    width: 100px;
    height: 33px;
    margin: 15px auto;
    display: block;
    background: url("./assets/images/sprites2x.png") no-repeat 0 -548px;
    background-size: 300px;
  }
  .appLeft {
    width: 160px;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: #312c57;
  }
  .appLeftMenu li{
    list-style-type: none;
    color: #b2b4f7;
    font-size: 12px;
    height: 36px;
    line-height: 36px;
    cursor: pointer;
  }
  .active {
    box-sizing: border-box !important;
    background: #292547;
    border-left: 4px solid #14cc76;
    color: #fff !important;
  }

  .appTop {
    height: 64px;
    background: #fff;
    text-align: left;
    margin-left: 160px;
    text-indent: 1em;
    line-height: 64px;
    border-bottom: 1px solid #e7e7eb;
    padding-right: 30px;
  }
  .appTop div {
    width: 1300px;
    position: fixed;
    top: 0;
		background: #fff;
    border-bottom: 1px solid #e7e7eb;
  }
  .appTop h3 {
    font-weight: normal;
    float: left;
  }
  .headTop li {
    float: right;
    list-style-type: none;
    font-size: 13px;
  }


  .appContainer {
    background: #f6f6f8;
    width: 100%;
    padding-left: 160px;
    box-sizing: border-box;
  }
</style>
