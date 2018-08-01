import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../layout'
import Login from '../components/login/login'

Vue.use(Router);

const router = new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/work',
      name: '',
      component: Layout,
      children: [
        {
          path: '/work',
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
    },
    {
      path: '/login',
      name: '',
      component: Login,
    }
  ]
})

// 全局路由守卫
// router.beforeEach( ({meta, path}, from, next) => {
//   if (path !== '/login') {
//     return next({ path: '/login' })
//   }
//   next();
// });

export default router
