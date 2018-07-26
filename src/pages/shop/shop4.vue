<template>
	<div class="shop4Wrap">
		<div class="evaluation">
			<ul class="evaluationUl">
				<li>用户</li>
				<li>文字评论</li>
				<li>图片</li>
				<li>评分</li>
				<li>操作</li>
			</ul>
			<p>没有相应的数据</p>
			<p class="jilu">共0条记录，每页显示
				<select>
					<option>10</option>
					<option>15</option>
					<option>20</option>
					<option>30</option>
					<option>50</option>
					<option>80</option>
					<option>100</option>
					<option>200</option>
				</select>
				条</p>
		</div>
	</div>
</template>

<script>
</script>

<style>
	.evaluationUl {display: flex; width: 100%; font-size: 13px; height: 45px; line-height: 45px; border-bottom: 1px solid #e7e7eb;}
	.evaluationUl li {list-style: none; flex: 1;}
	.evaluation p {width: 100%; height: 50px; line-height: 50px; color: #8c8c8c;font-size: 12px; border-bottom: 1px solid #e7e7eb;}
	.evaluation p.jilu {width: 100%; height: 50px; line-height: 50px; color: #8c8c8c;font-size: 12px; border-bottom: none; text-align: left; text-indent: 2em;}
	select {outline: none;}
</style>