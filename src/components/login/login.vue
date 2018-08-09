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
      <canvas class="canvas"></canvas>
      <div class="help">?</div>
      <div class="ui">
        <input class="ui-input" type="text" />
        <span class="ui-return">↵</span>
      </div>
      <div class="overlay">
        <div class="tabs">
          <div class="tabs-labels">
            <span class="tabs-label">Commands</span>
            <span class="tabs-label">Info</span>
            <span class="tabs-label">Share</span>
          </div>
          <div class="tabs-panels">
            <ul class="tabs-panel commands">
              <li class="commands-item"><span class="commands-item-title">Text</span><span class="commands-item-info" data-demo="Hello :)">Type anything</span><span class="commands-item-action">Demo</span></li>
              <li class="commands-item"><span class="commands-item-title">Countdown</span><span class="commands-item-info" data-demo="#countdown 10">#countdown<span class="commands-item-mode">number</span></span><span class="commands-item-action">Demo</span></li>
              <li class="commands-item"><span class="commands-item-title">Time</span><span class="commands-item-info" data-demo="#time">#time</span><span class="commands-item-action">Demo</span></li>
              <li class="commands-item"><span class="commands-item-title">Rectangle</span><span class="commands-item-info" data-demo="#rectangle 30x15">#rectangle<span class="commands-item-mode">width x height</span></span><span class="commands-item-action">Demo</span></li>
              <li class="commands-item"><span class="commands-item-title">Circle</span><span class="commands-item-info" data-demo="#circle 25">#circle<span class="commands-item-mode">diameter</span></span><span class="commands-item-action">Demo</span></li>
              <li class="commands-item commands-item--gap"><span class="commands-item-title">Animate</span><span class="commands-item-info" data-demo="The time is|#time|#countdown 3|#icon thumbs-up"><span class="commands-item-mode">command1</span>&nbsp;|<span class="commands-item-mode">command2</span></span><span class="commands-item-action">Demo</span></li>
            </ul>
            <div class="tabs-panel ui-details">
              <div class="ui-details-content">
                <h1>Shape Shifter</h1>
                <p>
                  An experiment by Kenneth Cachia.<br />
                  Font Awesome</a> is being used to render all #icons.
                </p>
                <br /><p>Visit Shape Shifter to use icons.</p>
              </div>
            </div>
            <div class="tabs-panel ui-share">
              <div class="ui-share-content">
                <h1>Sharing</h1>
                <p>Simply add <em>?a=</em> to the current URL to share any static or animated text. Examples:</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    // import '../../../static/particle/index'
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
<style scoped lang="less">  #msg {
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
    overflow: hidden;
    width: 100%;
    height: 100%;
    .container {
      width: 310px;
      position: absolute;
      top: 50%;
      left: 50%;
      -webkit-transform: translate(-50%, -50%);
      -moz-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      -o-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
    }
  }
</style>
