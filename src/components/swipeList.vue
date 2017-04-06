<template>
	<div class="list">
		<swiper :options="swiperOption" >
			<swiper-slide v-for="item in imgArr"><img :src="item.src"/></swiper-slide>
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
	</div>	
</template>

<script>
	import { swiper, swiperSlide } from 'vue-awesome-swiper'
	const imgArr = [{
		src:'../../static/img/share_img.png'
	},{
		src:'../../static/img/event_img.png'
	},{
		src:'../../static/img/family_img.png'
	},{
		src:'../../static/img/active_img.jpg'
	}];
	export default {
		name: 'swipeList',
		components: {
			swiper,
			swiperSlide
		},
		data() {
			return {
				swiperOption: {
                    slidesPerView: 4,
                    spaceBetween: 10,
				},
				imgArr: imgArr
			}
		}
  }
</script>

<style>
	.list {
		position: absolute;
		width:100%;
		left: 0;
		top: 790px;
		height: 222px;
		margin: 0;
		padding: 0;
	}
    .list img {
        height: 210px;
        left: 0;
		width: 100%;
    }
</style>
