<template>
  <div class="appContainer">
    <router-view></router-view>
  </div>
</template>

<script>
    export default {
        name: "content-view"
    }
</script>

<style scoped lang="less">
  .appContainer {
    background: #f6f6f8;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    float: left;
  }
</style>
