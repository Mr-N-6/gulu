<template>
  <div class="appTop">
    <div>
      <h3>后台管理系统</h3>
      <div class="headTop">
        <el-button @click.native="web" plain>前端开发</el-button>
        <el-button @click.native="signOut" type="danger" plain>退出</el-button>
        <el-button type="primary" plain>通知中心</el-button>
      </div>
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
          signOut(){
            const loading = this.$loading({
              lock: true,
              text: 'Loading',
              spinner: 'el-icon-loading',
              background: 'rgba(0, 0, 0, 0.7)'
            });
            this.$confirm('此操作将退出当前登陆, 是否继续?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              localStorage.removeItem('token');
              this.$message({
                type: 'success',
                message: '删除成功!'
              });
              window.open(' ', '_self');
              loading.close();
            }).catch(() => {
              this.$message({
                type: 'info',
                message: '已取消删除'
              });
              loading.close();
            });
          },
          web(){
            this.$message.success('前端开发');
            this.$axios.get('https://swapi.co/api/people').then( res => {
              console.log(res);
            }).catch( err => {
              this.$message.error(`错误信息：${err}`)
            })
          }
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
    float: right;
    position: relative;
    top: 0;
    z-index: 99;
    div {
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
        float: right;
        button.el-button {
          list-style-type: none;
          font-size: 13px;
        }
      }
    }

  }
</style>
