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
<style lang='scss'>
    .jobContainer {
        display: flex;
        justify-content: space-around;
    }
    .jobEmail {
        margin: 60px 0 100px;
        p {
            display: block;
            height: 24px;
            line-height: 24px;
            color: #b8b8b8;
            font-size: 14px;
            margin: 0;
            padding: 0;
            cursor: pointer;
        }
    }
    .email {
        margin-top: 40px;
        div {
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
            &:hover {
                background-color: #ffc107;
            };
            + p {
                margin-top: 40px;
                cursor: auto;
            }       
        }
    }
    @mixin fade-in {
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
    }
    .jobList {
        width:100%;
        h3 {
            font-size: 18px;
            text-align: center;
            color: #585858;
            margin-bottom: 16px;
        }
        p {
            &:hover{
                color:#585858;
            }
        }
    }
	#jobH3{
        @include fade-in;
        line-height: 86px;
        top: 20%;
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
</style>