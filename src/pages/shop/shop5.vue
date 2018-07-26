<template>
	<div class="shop5Wrap">
		<div class="iphone">
			<img class="weixin" src="../../assets/images/bg_weixin_view.jpg" width="300px"/>
			<h4>小程序海报查看</h4>
			<div class="haibao">
				<img src="../../assets/images/applet.jpg" width="300px"/>
			</div>
		</div>
	</div>
</template>

<script>
	
</script>

<style>
	.shop5Wrap {
		padding: 30px;
	}
	.iphone {
		width: 300px;
		height: 440px;
		overflow: hidden;
		position: relative;
		z-index: 98;
		overflow-y: scroll;
	}
	.iphone h4 {
		color: #fff;
		position: fixed;
		z-index: 99;
		top: 265px;
		left: 310px;
		font-weight: normal;
		font-size: 14px;
	}
	.haibao {
		position: absolute;
		top: 50px;
		z-index: 99;
	}
</style>