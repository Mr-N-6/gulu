<template>
	<div class="con1Wrap">
		<h5>发布事件</h5>
		<content1 txt="发活动" p="发布活动/课程/训练营"></content1>
		<content1 txt="发活动" p="发布活动/课程/训练营"></content1>
		<h5>用户管理</h5>
		<content1 txt="发活动" p="发布活动/课程/训练营"></content1>
		<h5>收入统计</h5>
		<div class="con1WrapDiv">
			<ul class="con1WrapUl">
				<li>
					<p>总收入(元)</p>
					<h1>0.00</h1>
				</li>
				<li class="con1WrapUl-li">
					<p><a href="">收入管理</a></p>
				</li>
			</ul>
			<ul class="con1WrapUl2">
				<li>
					<p>活动总收入(元)</p>
					<h1>0.00</h1>
				</li>
				<li>
					<p>报名表总收入(元)</p>
					<h1>0.00</h1>
				</li>
				<li>
					<p>打赏总收入(元)</p>
					<h1>0.00</h1>
				</li>
				<li>
					<p>会员总收入(元)</p>
					<h1>0.00</h1>
				</li>
			</ul>
		</div>
		<div style="width: 100%; height: 50px;"></div>
	</div>
</template>

<script>
	import Content1 from "../../components/1"
	export default {
		components: {
			Content1
		}
	}
</script>

<style>
	a {color: #459AE9; text-decoration: none;}
	.con1Wrap h5 {
		font-weight: normal;
		font-size: 12px;
		height: 52px;
		line-height: 52px;
		text-align: left;
		background: #f6f6f8;
		text-indent: 2.8em;
	}
	.con1WrapDiv ul {
		width: 100%;
		height: 112px;
	}
	.con1WrapUl {border-bottom: 1px solid #e7e7eb;}
	.con1WrapUl h1 {color: #14cc76;}
	.con1WrapUl-li {text-align: right !important; line-height: 52px;}
	.con1WrapUl2 h1 {
		color: #666666;
		font-weight: normal;
		margin-top: 5px;
	}
</style>