<template>
    <div class="loginWrapper">
      <el-dialog
        :show-close="false"
        :close-on-press-escape="false"
        :close-on-click-modal="false"
        title="孤鹿后台管理系统"
        :visible.sync="centerDialogVisible"
        width="30%"
        center>
        <el-form :model="form">
          <el-form-item label="帐号" :label-width="formLabelWidth">
            <el-input v-model="form.accounts" auto-complete="off" clearable></el-input>
          </el-form-item>
          <el-form-item style="position: relative;" label="密码" :label-width="formLabelWidth">
            <el-input @focus="isShowPswIcon = true" v-model="form.psw" :type="isPsw" auto-complete="off"></el-input>
            <i v-show="isShowPswIcon"
               @click="showPsw()"
               :class="{ orangeRed: isActive }"
               style="position: absolute; top: 50%; right: 10px;
               -webkit-transform: translateY(-50%);-moz-transform: translateY(-50%);
               -ms-transform: translateY(-50%);-o-transform: translateY(-50%);transform: translateY(-50%);"
               class="el-icon-view"></i>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click.native="signIn" type="success" @click="centerDialogVisible = false" plain>登录</el-button>
        </span>
      </el-dialog>
      <div class="container">
        <div v-show="slidingVerification" id="captcha" style="position: relative"></div>
        <div v-show="slidingVerification" id="msg"></div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "login",
        data(){
          return {
            slidingVerification: false,
            centerDialogVisible: true,
            form: {
              accounts: 'admin',
              psw: 'admin',
            },
            formLabelWidth: '80px',
            isPsw: 'password',
            isActive: false,
            isShowPswIcon: false,
            fullscreenLoading: false
          }
        },
        mounted(){
          let that = this;
          setTimeout( () => {
            jigsaw.init(document.getElementById('captcha'), function () {
              const loading = that.$loading({
                lock: true,
                text: 'Loading',
                spinner: 'el-icon-loading',
                background: 'rgba(0, 0, 0, 0.7)'
              });
              setTimeout( () => {
                document.getElementById('msg').innerHTML = '登录成功！';
                localStorage.setItem('token', document.getElementById('msg').innerHTML);
                window.open('/', '_self');
                loading.close();
              }, 500)
            })
          }, 1000)
        },
        methods: {
          signIn(){
            this.slidingVerification = true;
            const loading = this.$loading({
              lock: true,
              text: 'Loading',
              spinner: 'el-icon-loading',
              background: 'rgba(0, 0, 0, 0.7)'
            });
            setTimeout(() => {
              loading.close();
            }, 300);
          },
          showPsw(){
            this.isActive ? this.isPsw = 'password' : this.isPsw = '';
            this.isActive = true;
            this.isPsw = 'password' ? this.isActive = false : this.isActive = true;
            this.isPsw = ''
          }
        }
    }
</script>

<style>
  .el-icon-view {
    cursor: pointer;
    color: #c0c4cc;
  }
  .orangeRed {
    color: orangered;
  }
</style>
<style scoped lang="less">

  #msg {
    width: 100%;
    line-height: 40px;
    font-size: 14px;
    text-align: center;
  }
  a:link,a:visited,a:hover,a:active {
    margin-left: 100px;
    color: #0366D6;
  }
  .loginWrapper {
    width: 100%;
    height: 100%;
    .container {
      width: 310px;
      /*#captcha {*/
        position: relative;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        -moz-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        -o-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
      /*}*/
    }
  }
</style>
