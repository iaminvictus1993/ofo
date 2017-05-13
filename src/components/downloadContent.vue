<template>
	<div class='content'>
		<div class='banner'>
			<h3 id='download'>ofo 共享单车 APP</h3>
			<p>全新 1.8 版本，邀您共享</p>
			<img :src='src' />
		</div>
		<div class='teach'>
			<h3>使用方法</h3>
			<div class='step'>
				<div class='container' v-for='item in docs'>
					<img :src='item.src' />
					<h3 v-html='item.h3'></h3>
					<p v-html='item.p'></p>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	const docs = [{
		src: '/static/img/steps1.jpg',
		h3: '<em>①</em>获取密码',
		p: '点击【马上用车】，<br>输入车牌号即可获得解锁密码'
	},{
		src: '/static/img/steps2.jpg',
		h3: '<em>②</em>拨轮锁开锁',
		p: '拨动密码盘，使密码对准锁身黄色标准线<br>按下圆形按钮，成功'
	},{
		src: '/static/img/steps3.jpg',
		h3: '<em>③</em>如何停放',
		p: '结束使用后，锁车、复位密码<br>将车停放至道路两旁安全、、区域，方便他人取用'
	}];
	export default {
		name: 'shareContent',
		data () {
			return {
				src: '/static/img/download.jpg',
				docs: docs
			}
		}
	}
</script>
<style>
	.content .banner {
		position: relative;
		width: 100%;
		top: -13%;
		left: 0;
		margin: 0;
		padding: 0;
	}
	#download{
		text-align: left;
		position: absolute;
		width: 100%;
		top: 38%;
		left: 29%;
		z-index: 8;
		color: white;
		font-size: 28px;
		color: #e9e7e5;
		font-weight: 300;
		margin: 0;
		padding: 0;
        animation: none;
	}
	.content .banner h3+p{
		font-size: 16px;
		color: #e6e5e3;
		font-weight: 300;
		position: absolute;
		top: 44%;
		left: 29%;	
		z-index: 8;
		margin: 0;
		padding: 0;
	}
	.teach h3{
		padding: 50px 0;
		font-weight: 500;
		font-size: 30px;
		text-align: center;
		color: #333333;
	}
	.teach{
		margin-bottom: 7%;
	}
	.mar{
		margin: 50px 0 50px;
	}
	.mar p {
		line-height: 32px;
		font-size: 14px;
		color: #8d8d8d;
		text-align: center;
	}
	.step{
		display: flex;
		flex-direction: row;
		justify-content: space-around;
	}
	.container {
		width: 300px;
		flex: 0 1 auto;
	}
	.container img{
		width: 300px;
		height: 300px;
	}
	.container h3 {
		margin-bottom: 10px;
		text-align: center;
		font-size: 18px;
		color: #333333;
		font-weight: 500;
		padding: 0;
	}
	.container p{
		line-height: 30px;
		font-size: 14px;
		color: #333333;
		text-align: center;
		opacity: 0.6;
	}
	em{
		font-style: normal;
		font-size: 22px;
		vertical-align: text-bottom;
		line-height: 27px;
	}
</style>