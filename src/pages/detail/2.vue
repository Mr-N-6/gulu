<template>
	<div class="con2Wrap">
		<div style="width: 100%; height: 26px;"></div>
		<div class="con2-container">
			<h4>服务商城</h4>
			<p>地址：https://m.grouplus.com/home/27916 <a href="">复制地址</a></p>
			<ul class="con2Ul" >
				<!--<router-link
					v-for="item in shopMenu"	
					:to="{path:'/detail/2/' +item.path}"
					tag="li"
					active-class="active2"
					:key="item.id"
					
					>
					{{ item.name }}
				</router-link>-->
				
				<router-link :to="{path:'/detail/2/shop1'}" active-class="active2" tag="li">首页管理</router-link>
				<router-link :to="{path:'/detail/2/shop2'}" active-class="active2" tag="li">图片管理</router-link>
				<router-link :to="{path:'/detail/2/shop3'}" active-class="active2" tag="li">资讯管理</router-link>
				<router-link :to="{path:'/detail/2/shop4'}" active-class="active2" tag="li">评价管理</router-link>
				<li @click="program('isShowPro')"><router-link :to="{path:'/detail/2/shop5'}" active-class="active2" tag="li">小程序</router-link></li>
				<li @click="program('isShowShop')"><router-link :to="{path:'/detail/2/shop6'}" active-class="active2" tag="li">商家信息</router-link></li>
			</ul>
		</div>
		<div class="shopHomeCon">
			<router-view></router-view>
		</div>
		<thisdialog :isShow="isShowPro" @onClose="isClose('isShowPro')" >
			<popup title="开通小程序提示" p="您还没有开通小程序，请联系客服开通小程序功能">
				
			</popup>
		</thisdialog>
		<thisdialog :isShow="isShowShop" @onClose="isClose('isShowShop')" >
			<popup title="开通会员提示" p="您还没有开通会员，请联系客服开通会员功能，否则更新的商家信息无法在用户端首页显示">
				
			</popup>
		</thisdialog>
	</div>
</template>

<script>
	import store from '../../store/gulu'
    import { mapState,mapGetters,mapActions } from 'vuex'
    import Thisdialog from "../../components/dialog"
    import Popup from "../../components/popup"
    export default {
      	store:store,
      	computed: {
        	shopMenu(){
         	 	return this.$store.state.shopMenu
        	},
        	productIcon(){
        	  	return this.imgMap[this.$route.path]
        	},
     	},
     	data(){
			return {
				isShowPro: false,
				isShowShop: false,
			}
		},
		methods: {
			program(params){
				this[params] = true
			},
			isClose(params){
				this[params] = false
			}
		},
		components: {
			Thisdialog,
			Popup
		},
		created(){
			this.$router.push('/detail/2/shop1')
		}
    }
</script>

<style>
	.con2Wrap .con2-container h4 {font-weight: normal; text-align: left; padding: 20px;}
	.con2-container {width: 95%; background: #fff; margin: 0 auto; }
	.con2-container p {color: #8c8c8c; text-align: left; padding-left: 20px; font-size: 12px;}
	.con2Ul li {list-style: none; font-size: 12px; float: left; width: 116px; height: 40px; line-height: 40px; cursor: pointer; box-sizing: border-box;}
	.con2Ul {width: 95%; border-bottom: 1px solid #e7e7eb; height: 40px;}
	.active2 {border-bottom: 3px solid #14cc76; }
	.shopHomeCon {
		width: 95%;
		margin: 0 auto;
		height: 500px;
		background: #fff;
	}
</style>