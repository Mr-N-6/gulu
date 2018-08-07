<template>
  <div class="appLeft">
    <div class="leftMenu">
      <!-- logo -->
      <div class="logoWrapper">
        <!--<a :style="{ 'width': logoWidth + 'px'}" href="#" class="logo"></a>-->
      </div>
      <!--menu-->
      <!--<el-menu v-for="(item,index) in $router.options.routes[0].children" default-active="1-4-1"
               class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
               :collapse="isCollapse">
        <router-link tag="li" :to="item.path">
          <el-menu-item :index="item.index">
            <i :class="item.icon"></i>
            <span slot="title">{{ item.name }}</span>
          </el-menu-item>
        </router-link>
        &lt;!&ndash;<el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">{{ item.name }}</span>
          </template>
          <el-menu-item-group>
            <span slot="title">分组一</span>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <span slot="title">选项4</span>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>&ndash;&gt;
      </el-menu>-->


      <el-menu default-active="1"
               class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
               :collapse="isCollapse">
        <router-link v-for="(item,index) in $router.options.routes[0].children" tag="li" :to="item.path">
          <el-menu-item :index="item.index">
            <i :class="item.icon"></i>
            <span slot="title">{{ item.name }}</span>
          </el-menu-item>
        </router-link>
      </el-menu>


    </div>
  </div>
</template>

<script>
  import store from '../../store/store'

  export default {
    store,
    name: "left-menu",
    data() {
      return {
        logoWidth: 100,
      }
    },
    computed: {
      isCollapse() {
        return this.$store.state.isOpenLeftMenu;
      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped lang="less">
  .appLeft {
    width: auto;
    height: 100%;
    float: left;
    background: #fff;
    .leftMenu {

      .el-radio-group {
        position: absolute;
        top: 5px;
        z-index: 999;
      }
      /*.el-menu {
        border: 0;
        background: #1468d1;
        span {
          color: #fff;
        }
        .el-menu-item {
          margin: 2px 0;
          i {
            color: #000;
          }
        }
        .el-menu-item:focus, .el-menu-item:hover {
          background: lightseagreen;
        }
      }*/
      .appLeftMenu {
        li {
          list-style-type: none;
          color: #b2b4f7;
          font-size: 12px;
          height: 36px;
          line-height: 36px;
          cursor: pointer;
        }
      }
      .logoWrapper {
        padding: 15px 0;
        background: linear-gradient(to left top, #001C6F, #094897);
        a.logo {
          height: 33px;
          margin: 15px auto;
          display: block;
          background: url("../../assets/images/sprites2x.png") no-repeat 0 -548px;
          background-size: 300px;
        }
      }

    }
  }

</style>
