// 引入文件
import Vue from 'vue'
import Vuex from 'vuex'

// 注册 在vue中使用vuex
Vue.use(Vuex);

// state data 数据
let state = {
  isOpenLeftMenu: false
}

// getter 动态获取state
let getters = {
  getIsOpenLeftMenu(){
    return state.isOpenLeftMenu = true
  }
}

// 声明store仓库
let store = new Vuex.Store({
  state,
  getters
})

// 导出仓库
export default store
