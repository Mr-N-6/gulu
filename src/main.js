// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUi from 'element-ui'
import '../node_modules/element-ui/lib/theme-chalk/index.css'
import axios from "axios";
import AMap from 'vue-amap';

Vue.config.productionTip = false
Vue.use(ElementUi)
Vue.prototype.$axios = axios;
Vue.use(AMap);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

AMap.initAMapApiLoader({
  // 申请的高德key
  key: 'YOUR_KEY',
  // 插件集合
  plugin: ['AMap.PlaceSearch', 'AMap.Geolocation']
});
