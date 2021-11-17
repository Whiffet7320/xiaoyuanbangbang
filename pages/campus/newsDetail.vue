<template>
	<view class="detail">
		<view class="title">{{info.title}}</view>
		<view class="author">
			<view class="name">【校园帮帮平台发布】</view>
			<view class="time">{{info.add_time}}</view>
		</view>
		<view class="u-content">
			<u-parse :html="info.content"></u-parse>
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
			setTitle(type){
				if(type=="advice"){
					uni.setNavigationBarTitle({title:"社团咨询"});
				}else if(type=="news"){
					uni.setNavigationBarTitle({title:"校园新闻"});
				}
				this.getDetail();
			},
			getDetail(){
				this.info = this.newsArticle;
			}
		},
		onLoad(option){
			if(option.type){
				this.id = option.id;
				this.type = option.type;
				this.setTitle(option.type);
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
	}
</style>
