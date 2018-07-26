<template>
	<div class="popupWrap">
		<img src="../assets/images/tishi.png" width="54px"/>
		<h5>{{ title }}</h5>
		<p>{{p}}</p>
		<div class="btn">
			<button>马上开通</button>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['title','p']
	}
</script>

<style>
	.popupWrap {
		padding-top: 50px;
	}
	.popupWrap h5 {
		font-size: 14px;
		font-weight: normal;
		margin-top: 10px;
	}
	.popupWrap p {
		font-size: 12px;
		color: #999;
		width: 100%;
	}
	.popupWrap div.btn {
		width: 100%;
		height: 60px;
		background: #fafbfc;
		margin-top: 97px;
	}
	.popupWrap button {
		font-size: 12px;
		width: 116px;
		height: 34px;
		border: 1px solid #ccc;
		background: none;
		margin-top: 15px;
		outline: none;
	}
</style>