import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../layout'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: '',
      component: Layout,
      children: [
        {
          path: '/',
          component: resolve => require(['@/components/content-view/work'], resolve),
          name: '工作台',
          icon: 'el-icon-menu',
          index: '1'
        },
        {
          path: '/shop',
          component: resolve => require(['@/components/content-view/shop'], resolve),
          name: '服务商城',
          icon: 'el-icon-setting',
          index: '2'
        }
      ]
    }
  ]
})
