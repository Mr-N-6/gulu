<template>
    <el-row class="appWrap">
      <el-col id="leftMenu" :span="3" class="left-menu-wrapper">
        <left-menu @contentWidth="contentWidths"></left-menu>
      </el-col>
      <el-col :style="{ 'width': contentWidth+'px'}" :span="21" class="nav-top-wrapper">
        <el-scrollbar style="height: 100%;">
          <nav-top></nav-top>
          <content-view></content-view>
        </el-scrollbar>
      </el-col>
    </el-row>
</template>

<script>
  import leftMenu from './components/left-menu/left-menu'
  import contentView from './components/content-view/content-view'
  import navTop from './components/nav-top/nav-top'
    export default {
        name: "layout",
        components: {
          leftMenu,
          contentView,
          navTop
        },
        data(){
          return {
            contentWidth: ''
          }
        },
        mounted(){
          this.contentWidth = document.documentElement.clientWidth - document.getElementById('leftMenu').offsetWidth
        },
        methods:{
          contentWidths(){
            this.contentWidth = document.getElementById('leftMenu').offsetWidth === 129 ? document.documentElement.clientWidth - 84 : document.documentElement.clientWidth - 129
          }
        }
    }
</script>

<style scoped lang="less">
  .appWrap {
    height: 100%;
    .left-menu-wrapper, .nav-top-wrapper {
      float: left;
    }
    .left-menu-wrapper {
      width: auto;
      height: 100%;
      overflow-x: hidden;
      -ms-text-overflow: ellipsis;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .nav-top-wrapper {
      min-width: 1000px;
    }
  }
</style>
