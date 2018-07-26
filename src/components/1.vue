<template>
	<div class="con1Wrap">
		<div class="">
			<ul class="con1WrapUl">
				<li>
					<div></div>
					<h4>{{txt}}</h4>
					<p>{{p}}</p>
				</li>
				<li>
					<div></div>
					<h4>{{txt}}</h4>
					<p>{{p}}</p>
				</li>
				<li>
					<div></div>
					<h4>{{txt}}</h4>
					<p>{{p}}</p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['txt','p']
	}
</script>

<style>
	.con1Wrap h4 {
		font-size: 14px;
		font-weight: normal;
	}
	.con1Wrap p {
		font-size: 12px;
		color: #999;
		font-weight: normal;
	}
	.con1Wrap ul {
		width: 95%;
		display: flex;
		margin: 0px auto;
		background: #fff;
		padding: 30px;
		box-sizing: border-box;
	}
	.con1Wrap ul li{
		background: #fff;
		flex: 1;
		list-style: none;
		text-align: left;
	}
	.con1Wrap ul li div {
		background: url(../assets/images/sprites2x.png) -538px -304px;
		background-size: 300px;
		width: 60px;
		height: 60px;
		float: left;
		margin-right: 20px;
	}
	
</style>