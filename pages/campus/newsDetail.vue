<template>
	<view class="detail">
		<view class="title">{{info.title}}</view>
		<view class="author">
			<view class="name">【洛科帮帮平台发布】</view>
			<view class="time">{{info.add_time}}</view>
		</view>
		<view class="u-content">
			<u-parse :html="info.content"></u-parse>
		</view>
		<view class="imglist" v-if="info.imgPath">
			<view class="item" v-for="(pitem,indexa) in info.imgPath" :key="indexa" @click="previewImage(info.imgPath,indexa)">
				<image :src="pitem" mode="widthFix" class="img"></image>
			</view>
		</view>
	</view>
</template>

<script>
	import { mapState } from 'vuex';
	export default{
		data(){
			return{
				id:0,
				info:{
					title:"",
					add_time:"",
					content:""
				}
			}
		},
		computed: {
			...mapState({
				newsArticle:state => state.newsArticle
			})
		},
		methods:{
			getDetail(){
				let data = this.newsArticle;
				if(data.img_paths){
					data.imgPath = data.img_paths.split(",");
					data.imgPath.forEach((img, i) => {
						this.$set(data.imgPath, i, this.$tools.imgUrl(img))
					})
				}
				this.info = data;
				
			}
		},
		onLoad(option){
			if(option.id){
				this.id = option.id;
				this.getDetail();
			}
		}
	}
</script>
<style>
	page{
		background-color: #FFFFFF;
	}
</style>
<style lang="scss" scoped>
	.detail{
		padding:48rpx 22rpx;
		.title{
			font-size: 32rpx;
			font-family: PingFang SC, PingFang SC-Bold;
			font-weight: 700;
			color: #000000;
		}
		.author{
			display: flex;
			align-items: center;
			margin:32rpx 0 48rpx 0;
			.name{
				font-size: 24rpx;
				font-family: PingFang SC, PingFang SC-Bold;
				font-weight: 700;
				color: #000000;
			}
			.time{
				margin-left: 16rpx;
				font-size: 20rpx;
				font-family: PingFang SC, PingFang SC-Bold;
				font-weight: 700;
				color: #b3b3b3;
			}
		}
		.u-content{
			font-size: 28rpx;
			font-family: PingFang SC, PingFang SC-Medium;
			color: #060606;
		}
		.imglist{
			padding-top: 12rpx;
			display: flex;
			flex-direction: column;
			.item{
				width: 100%;
				min-height: 200rpx;
				text-align: center;
				padding-bottom: 40rpx;
			}
		}
	}
</style>
