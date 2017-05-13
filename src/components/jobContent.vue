<template>
	<div class='content'>
		<div class='banner'>
            <h3 id='jobH3'>一些人等着被世界改变<br>而我们已经在<br>改变世界</h3>
			<img :src='src' />
		</div>
		<div class='jobEmail'>
            <div class='jobContainer'>
                <div class='jobList' v-for='item in docs'>
                    <h3>{{item.title}}</h3>
                    <p>{{item.data1}}</p>
                    <p>{{item.data2}}</p>
                    <p>{{item.data3}}</p>
                </div>
            </div>
            <div class='email'>
                <div>更多职位</div>
                <p>联系方式：hr@ofo.so</p>
            </div>
		</div>
	</div>
</template>
<script>
	const docs = [{
		title: '产品设计',
		data1: '产品经理'
	},{
		title: '技术研发',
		data1: '后端工程师',
		data2: '硬件工程师',
		data3: '嵌入式软件工程师',
	},{
		title: '品牌公关',
		data1: 'PR经理'
	},{
		title: '市场运营',
		data1: '策略运营',
		data2: '用户运营'
	}];
	export default {
		name: 'shareContent',
		data () {
			return {
				src: '/static/img/job.jpg',
				docs: docs
			}
		}
	}
</script>
<style>
    .jobContainer {
        display: flex;
        justify-content: space-around;
    }
    .jobList {
        width:100%;
    }
    .jobEmail {
        margin: 60px 0 100px;
    }
    .email {
        margin-top: 40px;
    }
    .email div{
        width: 134px;
        height: 58px;
        line-height: 58px;
        display: block;
        margin: 0 auto;
        text-align: center;
        border: 1px solid #e5e5e5;
        font-size: 14px;
        color: #333333;
        border-radius: 30px;
        cursor: pointer;
    }
    .email div:hover{
        background-color: #ffc107;
    }
    .email div+p {
        margin-top: 40px;
        cursor: auto;
    }
    @-webkit-keyframes fadeIn{
        0%{opacity:0}
        100%{opacity:1}
    }
    @-moz-keyframes fadeIn{
        0%{opacity:0}
        100%{opacity:1}
    }
    @-ms-keyframes fadeIn{
        0%{opacity:0}
        100%{opacity:1}
    }
    @-o-keyframes fadeIn{
        0%{opacity:0}
        100%{opacity:1}
    }
    @keyframes fadeIn{
        0%{opacity:0}
        100%{opacity:1}
    }
	.content .banner {
		position: relative;
		width: 100%;
		top: -13%;
		left: 0;
		margin: 0;
		padding: 0;
	}
    .jobList h3 {
        font-size: 18px;
        text-align: center;
        color: #585858;
        margin-bottom: 16px;
    }
    .jobEmail p {
        display: block;
        height: 24px;
        line-height: 24px;
        color: #b8b8b8;
        font-size: 14px;
        margin: 0;
        padding: 0;
        cursor: pointer;
    }
    .jobList p:hover{
        color:#585858;
    }
	#jobH3{
        line-height: 86px;
        padding-top: 200px;
        text-align: center;
        font-size: 45px;
        display: table-cell;
        vertical-align: middle;
        animation: fadeIn 2s 0.5s ease both;
        position: absolute;
        font-weight: bold;
        left: 38%;
        z-index: 8;
        color: #ffffff;
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