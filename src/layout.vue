<template>
    <el-row class="appWrap">
      <el-col id="leftMenu" :span="3" class="left-menu-wrapper">
        <left-menu></left-menu>
      </el-col>
      <!--'width': contentWidth+'px',-->
      <el-col :style="{ 'paddingLeft': positionLift+'px' }" :span="21" class="nav-top-wrapper">
        <el-scrollbar style="height: 100%;">
          <nav-top @checkLeftMenuWidth="checkLeftMenuWidth"></nav-top>
          <content-view></content-view>
        </el-scrollbar>
      </el-col>
    </el-row>
</template>

<script>
    import leftMenu from './components/left-menu/left-menu'
    import contentView from './components/content-view/content-view'
    import navTop from './components/nav-top/nav-top'
    import store from './store/store'
    export default {
        store,
        name: "layout",
        components: {
          leftMenu,
          contentView,
          navTop
        },
        data(){
          return {
            contentWidth: '',
            positionLift: ''
          }
        },
        mounted(){
          this.contentWidth = document.documentElement.clientWidth - document.getElementById('leftMenu').offsetWidth;
          this.positionLift = document.getElementById('leftMenu').offsetWidth;
        },
        methods:{
          checkLeftMenuWidth(val){
            if (val) {
              this.positionLift = 64
            } else {
              this.positionLift = 129
            }
          }
        }
    }
</script>

<style scoped lang="less">
  .appWrap {
    height: 100%;
    .left-menu-wrapper {
      width: auto;
      height: 100%;
      overflow-x: hidden;
      -ms-text-overflow: ellipsis;
      text-overflow: ellipsis;
      white-space: nowrap;
      position: fixed;
      left: 0;
      top: 0;
    }
    .nav-top-wrapper {
      transition: .38s;
      width: 100%;
      height: 100%;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      min-width: 1000px;
    }
  }
</style>
