import Vue from 'vue'
import Router from 'vue-router'

import Con1 from "../pages/detail/1"
import Con2 from "../pages/detail/2"
import Con3 from "../pages/detail/3"
import Con4 from "../pages/detail/4"
import Con5 from "../pages/detail/5"

import Shop1 from "../pages/shop/shop1"
import Shop2 from "../pages/shop/shop2"
import Shop3 from "../pages/shop/shop3"
import Shop4 from "../pages/shop/shop4"
import Shop5 from "../pages/shop/shop5"
import Shop6 from "../pages/shop/shop6"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Con1
    },
    {
      path: '/detail/1',
      component: Con1
    },
    {
      path: '/detail/2',
      component: Con2,
      children:[
      	{path: 'shop1',component: Shop1},
      	{path: 'shop2',component: Shop2},
      	{path: 'shop3',component: Shop3},
      	{path: 'shop4',component: Shop4},
      	{path: 'shop5',component: Shop5},
      	{path: 'shop6',component: Shop6},
      ]
    },
    {
      path: '/detail/3',
      component: Con3
    },
    {
      path: '/detail/4',
      component: Con4
    },
    {
      path: '/detail/5',
      component: Con5
    },
  ]
})
