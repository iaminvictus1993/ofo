<template>
	<div class='content'>
		<div class='banner'>
			<h1>城市大共享计划</h1>
			<img :src='src' />
		</div>
		<div class='introduce'>
			<div class='text'>
				<p>ofo 共享单车以开放平台和共享精神</p>
				<p>接纳每一颗热衷共享的种子</p>
				<p>一同繁衍它的“城市大共享计划”</p>
			</div>
			<div class='pic'>
				<img :src='src2' />
				<div class='ad'>
					<h3>连接单车<br>但不生产单车</h3>
					<p class='word'>ofo，不断连接更多优秀的单车品牌与生产商，接入</p>
					<p class='word'>更多产品线来满足用户的多元需求，共同提供城市出行服务。</p>
					<p class='word'>同时，ofo 欢迎用户共享自己的单车，加入“城市大共享计划”，</p>
					<p class='word'>以 1 换 N ，提升闲置单车的使用效率。</p>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'shareContent',
		data () {
			return {
				src: '../../static/img/share1.jpg',
				src2: '../../static/img/share2.jpg'
			}
		}
	}
</script>
<style>
	.content {
		position: absolute;
		width: 100%;
		height: 780px;
		top: 0;
		left: 0;
		margin: 0;
		padding: 0;
	}
	.content .banner {
		position: relative;
		width: 100%;
		top: -13%;
		left: 0;
		margin: 0;
		padding: 0;
	}
	.content .banner h1{
		position: absolute;
		width: 100%;
		top: 40%;
		z-index: 10;
		color: white;
		font-size: 66px;
	}
	.introduce {
		position: relative;
		width: 100%;
		height: 100%;
		top: -10%;
	}
	.introduce img{
		width: 400px;
		height: 400px;
	}
	.pic{
		position: relative;
	}		
	.pic img{
		position: absolute;
		top: 50%;
		left: 10%;
	}	
	.ad{
		position: absolute;
		top: 50%;
		left: 50%;
	}	
	.ad h3{
		text-align: left;
		font-size: 36px;
		color: #585858;
		font-weight: 500;
	}
	.ad p{
		font-size: 14px;
		color: #4b4b4b;
		line-height: 22px;
		text-align: left;
		padding-bottom: 160px;
		margin: 0;
		padding: 0;
	}
</style>