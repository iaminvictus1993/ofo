<template>
	<div class='content'>
		<div class='banner'>
			<h3 id='about'>ofo 共享单车首创“单车共享”模式<br>是全球第一个无桩共享单车平台</h3>
			<img :src='src' />
		</div>
		<div>
			<div class='mar' v-for='item in docs'>
				<h3>{{item.h3}}</h3>
				<p class='word'>{{item.p1}}</p>
				<p class='word'>{{item.p2}}</p>
				<p class='word'>{{item.p3}}</p>
				<p class='word'>{{item.p4}}</p>
			</div>
		</div>
	</div>
</template>
<script>
	const docs = [{
		h3: '在校园',
		p1: 'ofo 萌起校园，直至 2016 年 10 月，已来到全国22座城市、200 多所高校，累计提供超过 4000 万次共享单车',
		p2: '出行服务， 目前已成为中国规模最大的校园交通代步解决方案，为广大高校师生提供便捷经济、绿色低碳、',
		p3: '更高效率的校园共享单车服务。',
		p4: ''
	},{
		h3: '在城市',
		p1: '低效率的出行状况已经无法满足快节奏的城市生活，两点一线的生活半径和不断加速的城市改造，',
		p2: '让外来人融不进来，也让原住民忘了城市本来的样子，',
		p3: '正因如此，ofo 共享单车怀揣“随时随地有车骑”的朴素愿景来到城市，试图满足人们短途代步的需求，',
		p4: '更用这辆单车，重新丈量人们经过的每一条路线，找寻与城市的全新连接方式。'
	},{
		h3: '在未来',
		p1: 'ofo 以开放平台和共享精神，欢迎用户共享自己的单车加入 ofo，以互联网创新模式调动城市单车存量市场，',
		p2: '提高自行车使用效率，为城市节约更多空间；',
		p3: '在未来， ofo 希望不生产自行车，只连接自行车，让人们在全世界的每一个角落都可以通过 ofo 解锁自行车，',
		p4: '随时随地有车骑，满足短途代步的需求。'
	}];
	export default {
		name: 'shareContent',
		data () {
			return {
				src: '/static/img/about.jpg',
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
	#about{
		text-align: left;
		position: absolute;
		top: 16%;
		left: 20%;
		z-index: 8;
		color: white;
		font-size: 34px;
        line-height: 130%;
        animation: fadeIn 2s 0.5s ease both;
	}
	.mar h3{
		font-size: 36px;
		padding: 42px 0 26px;
		font-weight: 500;
		color: #666;
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
</style>