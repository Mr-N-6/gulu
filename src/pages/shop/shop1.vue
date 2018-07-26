<template>
	<div class="shop1">
		<div class="shopHomeLeft">
			<ul>
				<li>
					<div class="muban">
						<h5>选择模板</h5>
						<p>H5页面和小程序页面同步更新</p>
					</div>
					<div class="default">
						<ul class="defaultUl">
							<li><p>默认</p></li>
							<li><p>亲子</p></li>
							<li><p>培训教育</p></li>
						</ul>
					</div>
					<div class="btn">
						<button>保存并刷新</button>
					</div>
				</li>
				<li>
					<div class="muban">
						<h5>轮播</h5>
						<p>最多可设置5个轮播图</p>
					</div>
					<div class="add">
						+
					</div>
				</li>
				<li>
					<div class="muban">
						<h5>热门</h5>
						<p>推荐最多可设置10个推荐</p>
					</div>
					<div class="add">
						+
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	
</script>

<style>
	.shop1 .shopHomeLeft {
		width: 65%;
		text-align: left;
	}
	.shop1 .shopHomeLeft li {
		list-style: none;
		border-bottom: 1px solid #e7e7eb;
	}
	.shop1 .shopHomeLeft li p {
		float: left;
		font-size: 12px;
		color: #999;
	}
	.shop1 .shopHomeLeft li h5 {
		float: left;
		font-weight: normal;
		font-size: 13px;
		margin: 0 10px;
		position: relative;
	}
	.shop1 .shopHomeLeft li h5:before {
		content: "";
		width: 4px;
		height: 14px;
		background: #14cc76;
		display: inline-block;
		margin-right: 10px;
		position: absolute;
		top: 2px;
		left: -11px;
	}
	.shop1 .shopHomeLeft ul li div.muban {
		padding: 20px;
		margin-bottom: 20px;
	}
	.shop1 .shopHomeLeft ul li div.default {
		width: 520px;
		height: 130px;
		margin-left: 20px;
	}
	.shop1 .shopHomeLeft ul.defaultUl li {
		float: left;
		list-style: none;
		width: 49px;
		height: 74px;
		margin: 0 10px;
		background: url(../../assets/images/bg_stencil.jpg);
		text-align: center;
		position: relative;
	}
	.shop1 .shopHomeLeft ul.defaultUl li p {
		position: absolute;
		bottom: -20px;
		font-size: 10px;
	}
	.shop1 .shopHomeLeft ul li div.btn {
		width: 100%;
		height: 50px;
		line-height: 50px;
	}
	.shop1 .shopHomeLeft ul li div.btn button {
		float: right;
		line-height: 28px;
	    width: 121px;
	    height: 29px;
	    border: 1px dashed #14cc76;
	    background: #14cc76;
	    color: #fff;
	    display: block;
	    margin-right: 10px;
	    position: relative;
	    text-align: center;
	    border-radius: 30px;
	    font-size: 12px;
	}
	.shop1 .shopHomeLeft ul li div.add {
		width: 123px;
		height: 31px;
		line-height: 31px;
		font-size: 24px;
		text-align: center;
		border: 1px dashed #e7e7eb;
		margin: 20px;
		color: #999;
	}
</style>