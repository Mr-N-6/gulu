<template>
  <div class="appTop">
    <div>
      <el-button @click.native="isOpen" style="float: left; position: absolute; top: 50%;
                  -webkit-transform: translateY(-50%);-moz-transform: translateY(-50%);-ms-transform: translateY(-50%);
                  -o-transform: translateY(-50%);transform: translateY(-50%);">
        <svg :style="{ 'transform': 'rotate('+degs+'deg)' }" data-v-659089ac="" t="1492500959545"
             viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1691"
             xmlns:xlink="http://www.w3.org/1999/xlink" width="64" height="64" class="hamburger is-active">
          <path data-v-659089ac=""
                d="M966.8023 568.849776 57.196677 568.849776c-31.397081 0-56.850799-25.452695-56.850799-56.850799l0 0c0-31.397081 25.452695-56.849776 56.850799-56.849776l909.605623 0c31.397081 0 56.849776 25.452695 56.849776 56.849776l0 0C1023.653099 543.397081 998.200404 568.849776 966.8023 568.849776z"
                p-id="1692"></path>
          <path data-v-659089ac=""
                d="M966.8023 881.527125 57.196677 881.527125c-31.397081 0-56.850799-25.452695-56.850799-56.849776l0 0c0-31.397081 25.452695-56.849776 56.850799-56.849776l909.605623 0c31.397081 0 56.849776 25.452695 56.849776 56.849776l0 0C1023.653099 856.07443 998.200404 881.527125 966.8023 881.527125z"
                p-id="1693"></path>
          <path data-v-659089ac=""
                d="M966.8023 256.17345 57.196677 256.17345c-31.397081 0-56.850799-25.452695-56.850799-56.849776l0 0c0-31.397081 25.452695-56.850799 56.850799-56.850799l909.605623 0c31.397081 0 56.849776 25.452695 56.849776 56.850799l0 0C1023.653099 230.720755 998.200404 256.17345 966.8023 256.17345z"
                p-id="1694"></path>
        </svg>
      </el-button>
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
  import store from '../../store/store'

  export default {
    store,
    name: "nav-top",
    data() {
      return {
        isCollapse: false,
        degs: ''
      }
    },
    mounted() {

    },
    methods: {
      signOut() {
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
      web() {
        this.$message.success('前端开发');
        this.$axios.get('https://swapi.co/api/people').then(res => {
          console.log(res);
        }).catch(err => {
          this.$message.error(`错误信息：${err}`)
        })
      },
      isOpen() {
        this.$store.state.isOpenLeftMenu = !this.$store.state.isOpenLeftMenu;
        this.$store.state.isOpenLeftMenu ? this.degs = 90 : this.degs = -0;
        this.$emit('checkLeftMenuWidth', this.$store.state.isOpenLeftMenu)
      }
    }
  }
</script>

<style scoped lang="less">
  .hamburger {
    display: inline-block;
    cursor: pointer;
    width: 20px;
    height: 20px;
    transition: .38s;
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
  }

  .appTop {
    width: 100%;
    height: 64px;
    background: #fff;
    text-align: left;
    text-indent: 1em;
    line-height: 64px;
    border-bottom: 1px solid #e7e7eb;
    float: left;
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
        margin-left: 80px;
      }
      .headTop {
        float: right;
        margin-right: 20px;
        button.el-button {
          list-style-type: none;
          font-size: 13px;
        }
      }
    }

  }
</style>
