<template>
	<div class="banner">
		<swiper :options="swiperOption" >
			<swiper-slide v-for="item in imgArr"><img :src="item.src"/></swiper-slide>
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
	</div>	
</template>

<script>
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	const imgArr = [{
		src:'../../static/img/home_bg.jpg'
	},{
		src:'../../static/img/home_bg2.jpg'
	},{
		src:'../../static/img/home_bg3.jpg'
	},{
		src:'../../static/img/home_bg4.jpg'
	}];
	export default {
		name: 'swipe',
		components: {
			swiper,
			swiperSlide
		},
		data() {
			return {
				swiperOption: {
					pagination: '.swiper-pagination',
					paginationClickable: true,
                    autoplay: 5000,
                    height: 911,
                    width: 1920
				},
				imgArr: imgArr
			}
		}
  }
</script>

<style>
	.banner {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 90%;
		overflow: hidden;
		margin: 0;
		padding: 0;
	}
    img {
        left: 0px;
    }
</style>
