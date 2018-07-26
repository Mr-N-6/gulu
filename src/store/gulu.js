//1. 引入文件
import Vue from "vue"
import Vuex from "vuex"

// 2. 在vue中使用vuex
Vue.use(Vuex)

// 3. data数据列表
var state = {
	detailLeftMenu: [
	    {
	      name: '工作台',
	      path: '1',
	//    icon: require('../assets/images/1.png'),
	      active: false
	    },
	    {
	      name: '服务商城',
	      path: '2',
	//    icon: require('../assets/images/2.png'),
	      active: false
	    },
	    {
	      name: '活动管理',
	      path: '3',
	//    icon: require('../assets/images/3.png'),
	      active: false
	    },
	    {
	      name: '报名表管理',
	      path: '4',
	//    icon: require('../assets/images/4.png'),
	      active: false
	    },
	    {
	      name: '问卷管理',
	      path: '5',
	//    icon: require('../assets/images/4.png'),
	      active: false
	    },
	    {
	      name: '打赏管理',
	      path: '6',
	//    icon: require('../assets/images/4.png'),
	      active: false
	    },
	    {
	      name: '报名表管理',
	      path: '7',
	//    icon: require('../assets/images/4.png'),
	      active: false
	    },
	    {
	      name: '会员招募',
	      path: '8',
	//    icon: require('../assets/images/4.png'),
	      active: false
	    },
	    {
	      name: '会员管理',
	      path: '9',
	//    icon: require('../assets/images/4.png'),
	      active: false
	    },
	    {
	      name: '群组管理',
	      path: '10',
	//    icon: require('../assets/images/4.png'),
	      active: false
	    },
	    {
	      name: '收入管理',
	      path: '11',
	//    icon: require('../assets/images/4.png'),
	      active: false
	    },
	    {
	      name: '帐号设置',
	      path: '12',
	//    icon: require('../assets/images/4.png'),
	      active: false
	    },
	    {
	      name: '操作日志',
	      path: '13',
	//    icon: require('../assets/images/4.png'),
	      active: false
	    },
  	],
  	shopMenu: [
  		{
  			name: '首页管理',
  			path: 'shop1',
  			active: false
  		},
  		{
  			name: '图片管理',
  			path: 'shop2',
  			active: false
  		},
  		{
  			name: '资讯管理',
  			path: 'shop3',
  			active: false
  		},
  		{
  			name: '评价管理',
  			path: 'shop4',
  			active: false
  		},
  		{
  			name: '小程序',
  			path: 'shop5',
  			active: false
  		},
  		{
  			name: '商家信息',
  			path: 'shop6',
  			active: false
  		},
  	]
}

// 第四步：getter是对象 动态方式获取state
var getters = {
	getName(){
		return state.name
	},
}

// 后一步：声明一个仓库 store
var store = new Vuex.Store({
	state,
	getters,
	
})

// 后二步：导出仓库。只有导出仓库，其他文件才能访问到仓库里面的内容
export default store


