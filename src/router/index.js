import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../layout'
import Login from '../components/login/login'

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/work',
      meta: {
        requireAuth: true
      },
      name: '',
      component: Layout,
      children: [
        {
          path: '/work',
          component: resolve => require(['@/components/content-view/work'], resolve),
          name: '工作台',
          icon: 'el-icon-menu',
          index: '1',
          meta: {
            requireAuth: true
          },
        },
        {
          path: '/shop',
          component: resolve => require(['@/components/content-view/shop'], resolve),
          name: '服务商城',
          icon: 'el-icon-setting',
          index: '2',
          meta: {
            requireAuth: true
          },
        },
        {
          path: '/map',
          component: resolve => require(['@/components/content-view/map'], resolve),
          name: '高德地图',
          icon: 'el-icon-setting',
          index: '3',
          meta: {
            requireAuth: true
          },
        },
        {
          path: '/tabs',
          component: resolve => require(['@/components/content-view/tabs'], resolve),
          name: 'tabs',
          icon: 'el-icon-setting',
          index: '4',
          meta: {
            requireAuth: true
          },
        },
        {
          path: '/news',
          component: resolve => require(['@/components/content-view/news'], resolve),
          name: '新闻动态',
          icon: 'el-icon-setting',
          index: '5',
          meta: {
            requireAuth: true
          },
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
router.beforeEach( (to, from, next) => {
  if (to.meta.requireAuth) {
    if (localStorage.getItem('token')) {
      next();
    } else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}
      })
    }
  } else {
    next();
  }
});

export default router
