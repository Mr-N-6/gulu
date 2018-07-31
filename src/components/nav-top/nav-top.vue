<template>
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
</template>

<script>
    export default {
        name: "nav-top",
        data(){
          return {
            isCollapse: false,
          }
        },
        mounted(){

        },
        methods: {

        }
    }
</script>

<style scoped lang="less">
  .appTop {
    height: 64px;
    background: #fff;
    text-align: left;
    text-indent: 1em;
    line-height: 64px;
    border-bottom: 1px solid #e7e7eb;
    padding-right: 30px;
    float: left;
    position: relative;
    top: 0;
    z-index: 99;
    div {
      width: 1300px;
      position: fixed;
      top: 0;
      background: #fff;
      border-bottom: 1px solid #e7e7eb;
      .el-radio-group {
        width: 100px;
        float: left;
        .el-radio-button {
          position: absolute;
          float: left;
        }
      }
      h3 {
        font-weight: normal;
        float: left;
        margin-left: 66px;
      }
      .headTop {
        li {
          float: right;
          list-style-type: none;
          font-size: 13px;
        }
      }
    }

  }
</style>
