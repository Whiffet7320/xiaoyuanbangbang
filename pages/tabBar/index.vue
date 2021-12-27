<template>
	<view class="index">
		<view class="nav1">
			<view class="nav1-left" @click="toQiuzhizhaopin">
				<u-icon name="map-fill" color="#FFA900" size="34"></u-icon>
				<view class="txt1">洛科</view>
			</view>
			<view class="nav1-right">
				<u-icon name="search" color="#848484" size="28"></u-icon>
				<u-input v-model="search" type="text" :border="false" :disabled="true" placeholder="搜索" @click="onSearch" />
			</view>
		</view>
		<!-- 轮播图 -->
		<view class="nav2">
			<u-swiper height='296' :list="bannerList3" indicator-pos='bottomRight'></u-swiper>
		</view>
		<view class="nav3">
			<image src="/static/images/zu1501.png" class="pic3-1" mode=""></image>
			<view class="tit3-1">提前预祝全校师生假期愉快～</view>
		</view>
		<view class="nav4">
			<view class="items">
				<view class="item" @click="toXiaoyuanbiaobai">
					<image src="/static/images/zu2381.png" class="item-pic" mode=""></image>
					<view class="item-txt">校园表白</view>
				</view>
				<view class="item" @click="toXiaoyuanjishi">
					<image src="/static/images/zu2382.png" class="item-pic" mode=""></image>
					<view class="item-txt">校园集市</view>
				</view>
				<view class="item" @click="toXiaoyuanshudong">
					<image src="/static/images/zu2383.png" class="item-pic" mode=""></image>
					<view class="item-txt">校园树洞</view>
				</view>
				<view class="item" @click="toXiaoyuanyijiao">
					<image src="/static/images/zu2384.png" class="item-pic" mode=""></image>
					<view class="item-txt">校园一角</view>
				</view>
				<view class="item"  @click="toQiuzhizhaopin">
					<image src="/static/images/zu2385.png" class="item-pic" mode=""></image>
					<view class="item-txt">校园跑腿</view>
				</view>
				<view class="item" @click="toShiwuzhaoling">
					<image src="/static/images/zu2386.png" class="item-pic" mode=""></image>
					<view class="item-txt">失物招领</view>
				</view>
				<view class="item" @click="toQiuzhizhaopin">
					<image src="/static/images/zu2387.png" class="item-pic" mode=""></image>
					<view class="item-txt">求职招聘</view>
				</view>
				<view class="item" @click="toBangbangpindan">
					<image src="/static/images/zu2388.png" class="item-pic" mode=""></image>
					<view class="item-txt">帮帮拼单</view>
				</view>
				<view class="item" @click="toQiuzhizhaopin">
					<image src="/static/images/zu2389.png" class="item-pic" mode=""></image>
					<view class="item-txt">教务系统</view>
				</view>
				<!-- <view class="item" @click="toQiuzhizhaopin">
					<image src="/static/images/zu2390.png" class="item-pic" mode=""></image>
					<view class="item-txt">校园外卖</view>
				</view> -->
			</view>
		</view>
		<view class="indexcon">
			<view class="tit">更多介绍</view>
			<view class="about">
				<!-- <image src="https://bjxinzeyuan.oss-cn-zhangjiakou.aliyuncs.com/article/20211221/881ba0f651230c2964822dc24c48f45d.png" mode="widthFix"></image> -->
				<!-- <image src="https://bjxinzeyuan.oss-cn-zhangjiakou.aliyuncs.com/article/20211221/d050b28ffe6259ef26ced04a9a393503.png" mode="widthFix"></image> -->
				<image src="https://bjxinzeyuan.oss-cn-zhangjiakou.aliyuncs.com/article/20211221/1fb7ea186b56ebf9b1d2a7c620ade8d7.png" mode="widthFix"></image>
				<!-- <image src="https://bjxinzeyuan.oss-cn-zhangjiakou.aliyuncs.com/article/20211221/9d3e46184ecce9657950d7684a068340.png" mode="widthFix"></image> -->
				<!-- <image src="https://bjxinzeyuan.oss-cn-zhangjiakou.aliyuncs.com/article/20211221/11ba7c75d040ae6d99044cf8e8e9d27a.png" mode="widthFix"></image> -->
			</view>
		</view>
		<!-- 校园表白 -->
		<u-popup mode='center' border-radius="10" v-model="itemShow1" width="448rpx" height="366rpx">
			<view class="pop1">
				<view class="txt1">校园表白</view>
				<image class="pic1" src="/static/images/zu11111.png" mode=""></image>
				<view class="btns">
					<view @click="toWoyaobiaobai" class="btn1">我要表白</view>
					<view @click="toBiaobaiqiang" class="btn2">查看表白墙</view>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				itemShow1:false,
				search: '',
				count:0,
				bannerList: [
					{
						image: 'https://bjxinzeyuan.oss-cn-zhangjiakou.aliyuncs.com/article/20211221/caa056abe0f73e6608c768f1db59ea49.png'
					},
					{
						image: 'https://bjxinzeyuan.oss-cn-zhangjiakou.aliyuncs.com/article/20211221/33bc86ea2810af9219254d58aa193757.png'
					},
					{
						image: 'https://bjxinzeyuan.oss-cn-zhangjiakou.aliyuncs.com/article/20211221/60f6a91b5f783f399eae1a0a82dc0e57.png'
					}
				],
				bannerList2: [
					{
						image: 'https://bjxinzeyuan.oss-cn-zhangjiakou.aliyuncs.com/article/20211221/caa056abe0f73e6608c768f1db59ea49.png'
					},
					{
						image: 'https://bjxinzeyuan.oss-cn-zhangjiakou.aliyuncs.com/article/20211221/e366ec5d435554819532156a610a71b6.png'
					},
					{
						image: 'https://bjxinzeyuan.oss-cn-zhangjiakou.aliyuncs.com/article/20211221/efce4dffaf616f59a5b85a7938268a95.png'
					}
				],
				bannerList3: [
					{
						image: 'https://bjxinzeyuan.oss-cn-zhangjiakou.aliyuncs.com/article/20211221/caa056abe0f73e6608c768f1db59ea49.png'
					},
					{
						image: 'https://bjxinzeyuan.oss-cn-zhangjiakou.aliyuncs.com/article/20211221/716b72b5fb98f3fad036920f485db71b.png'
					},
					{
						image: 'https://bjxinzeyuan.oss-cn-zhangjiakou.aliyuncs.com/article/20211221/3518b62967de838758cfdf11fd49f4e7.png'
					}
				],
				bannerList4: [
					{
						image: 'https://bjxinzeyuan.oss-cn-zhangjiakou.aliyuncs.com/article/20211221/caa056abe0f73e6608c768f1db59ea49.png'
					},
					{
						image: 'https://bjxinzeyuan.oss-cn-zhangjiakou.aliyuncs.com/article/20211221/bc877c8d8ffe92f0bb100e73a1cfe258.png'
					},
					{
						image: 'https://bjxinzeyuan.oss-cn-zhangjiakou.aliyuncs.com/article/20211221/da7cab2900a76ac4505184c45eaff0c5.png'
					}
				],
				bannerList5: [
					{
						image: 'https://bjxinzeyuan.oss-cn-zhangjiakou.aliyuncs.com/article/20211221/caa056abe0f73e6608c768f1db59ea49.png'
					},
					{
						image: 'https://bjxinzeyuan.oss-cn-zhangjiakou.aliyuncs.com/article/20211221/5b011ccc40c8fbc0e72a3eeeb69a4e8e.png'
					},
					{
						image: 'https://bjxinzeyuan.oss-cn-zhangjiakou.aliyuncs.com/article/20211221/db5b48cf292600477a455a1539bb94cb.png'
					}
				]
			}
		},
		onShow() {
			this.itemShow1 = false;
			this.$store.commit('isShudong',false);
			this.$store.commit('firstMusicTime',true);
			this.$innerAudioContext.stop()
			if (uni.getStorageSync('token')) {
				this.getMsg();
			}
		},
		methods: {
			onSearch(){
				uni.navigateTo({
					url:"/pages/search/index?from=market"
				})
			},
			getMsg() {
				let token = uni.getStorageSync("token");
				if (token) {
					this.$api.wait_read_num().then((res) => {
						if (res.code == 200) {
							this.count = res.data.count;
							if(this.count>0){
								uni.setTabBarBadge({
									index:2,
									text:this.count>99?"99+":this.count.toString()
								})
							}else{
								uni.removeTabBarBadge({index:2});
							}
						}
					})
				}
			},
			toXiaoyuanshudong() {
				uni.navigateTo({
					url: '/pages/index/shudong/xiaoyuanshudong'
				})
			},
			toXiaoyuanbiaobai() {
				// uni.navigateTo({
				// 	url:'/pages/index/shudong/xiaoyuanshudong'
				// })
				this.itemShow1 = true;
			},
			toWoyaobiaobai(){
				uni.navigateTo({
					url:'/pages/index/xiaoyuanbiaobai/xiaoyuanbiaobai'
				})
			},
			toBiaobaiqiang(){
				uni.navigateTo({
					url:'/pages/index/xiaoyuanbiaobai/biaobaiqiang'
				})
			},
			toXiaoyuanjishi(){
				uni.navigateTo({
					url:'/pages/market/index'
				})
			},
			toXiaoyuanyijiao(){
				uni.navigateTo({
					url:'/pages/campus/index'
				})
			},
			toXiaoyuanpaotui(){
				// uni.navigateTo({
				// 	url:'/pages/lost/index'
				// })
			},
			toShiwuzhaoling(){
				uni.navigateTo({
					url:'/pages/lost/index'
				})
			},
			toBangbangpindan(){
				uni.navigateTo({
					url:'/pages/spell/index'
				})
			},
			// 开发中
			toQiuzhizhaopin(){
				this.$u.toast("即将开放，敬请期待");
				// uni.navigateTo({
				// 	url:'/pages/index/kfing/kfing'
				// })
			},
		}
	}
</script>

<style>
	page {
		background: #ffffff;
	}
</style>
<style lang="scss" scoped>
	.nav1 {
		margin: 20rpx 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 24rpx;

		.nav1-left {
			display: flex;
			align-items: center;

			.txt1 {
				margin-left: 12rpx;
				font-size: 28rpx;
				font-weight: 500;
				color: #000000;
			}
		}

		.nav1-right {
			width: 196rpx;
			height: 60rpx;
			background: #f1f1f1;
			border-radius: 30rpx;
			display: flex;
			align-items: center;
			padding-left: 24rpx;

			/deep/ .u-input {
				margin-left: 14rpx;

				/deep/ .uni-input-placeholder {
					font-size: 24rpx;
					color: #848484;
				}
			}

		}
	}

	.nav2 {
		padding: 0 24rpx;
	}

	.nav3 {
		padding: 0 24rpx;
		margin-top: 24rpx;
		margin-left: 10rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;

		.pic3-1 {
			width: 28rpx;
			height: 28rpx;
			transform: translateX(16rpx);
		}

		.tit3-1 {
			padding-left: 24rpx;
			width: 632rpx;
			height: 60rpx;
			background: #fff2ee;
			border-radius: 30rpx;
			font-size: 24rpx;
			font-weight: 500;
			color: #FF7C5E;
			line-height: 60rpx;
		}
	}

	.nav4 {
		margin-top: 28rpx;
		padding: 0 28rpx;

		.items {
			display: flex;
			flex-wrap: wrap;

			.item {
				width: 20%;
				display: flex;
				flex-direction: column;
				align-items: center;
				margin-bottom: 20rpx;

				.item-pic {
					width: 100rpx;
					height: 100rpx;
				}

				.item-txt {
					margin-top: 16rpx;
					font-size: 24rpx;
					font-weight: 500;
					color: #000000;
				}
			}
		}

		.items2 {
			margin-top: 20rpx;
		}
	}
	.pop1{
		display: flex;
		flex-direction: column;
		align-items: center;
		.txt1{
			margin-top: 32rpx;
			font-size: 32rpx;
			font-weight: 700;
			text-align: center;
			color: #000000;
		}
		.pic1{
			margin-top: 32rpx;
			width: 160rpx;
			height: 128rpx;
		}
		.btns{
			display: flex;
			align-items: center;
			width: 448rpx;
			height: 92rpx;
			margin-top: 38rpx;
			.btn1{
				width: 50%;
				text-align: center;
				color: #ff451a;
			}
			.btn2{
				width: 50%;
				text-align: center;
				color: #848484;
			}
		}
	}
	.indexcon{
		.tit{
			padding-left: 28rpx;
			height: 72rpx;
			line-height: 72rpx;
			font-size: 28rpx;
			font-family: PingFang SC, PingFang SC-Bold;
			font-weight: 700;
			color: #000000;
			background-color: #F7F8FA;
		}
		.about{
			width: 100%;
			image{
				width: 100%;
			}
		}
	}

</style>
