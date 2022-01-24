<template>
	<view class="midwrap" v-if="midshow">
		<view class="mask"></view>
		<view class="midwrap_con">
			<view class="hd">选择内容</view>
			<view class="miditem" v-for="(item,index) in mlist" :key="index" @click="goMenu(item.path)">{{item.title}}</view>
			<view class="ft" @click="midshow=false">取消发布</view>
			<view class="before"></view>
		</view>
	</view>
</template>

<script>
	export default{
		props:{
			show:{
				type:Boolean,
				default:false
			}
		},
		data(){
			return{
				midshow:false,
				mlist:[
					{
						title:"发布转卖",
						path:"/pages/market/addMarket"
					},
					{
						title:"发布收购",
						path:"/pages/market/addMarketpro"
					},
					{
						title:"发布寻物",
						path:"/pages/lost/addlost"
					},
					{
						title:"发布寻主",
						path:"/pages/lost/addlostpro"
					},
					{
						title:"发布拼车",
						path:"/pages/spell/addSpell"
					},
					{
						title:"发布拼单",
						path:"/pages/spell/addSpellpro"
					},
					{
						title:"发布风景",
						path:"/pages/campus/addScenery"
					},
					{
						title:"发布报修",
						path:"/pages/campus/addRepair"
					}
				]
			}
			
		},
		watch:{
			show:{
				handler(newval){
					this.midshow = !this.midshow;
				},
				immediate:false,
				deep:true
			}
		},
		methods:{
			goMenu(path){
				uni.navigateTo({
					url:path
				})
				this.midshow = false;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.midwrap{
		position: fixed;
		top:0;
		left:0;
		width: 100%;
		height: 100vh;
		z-index: 500;
		.mask{
			position: fixed;
			top:0;
			left:0;
			width: 100%;
			height: 100%;
			z-index: 500;
			background-color: rgba(0,0,0,0.5);
		}
		.midwrap_con{
			width: 236rpx;
			background: #ffffff;
			border-radius: 10rpx;
			padding:0 11rpx;
			position: absolute;
			left:50%;
			bottom: calc((180rpx + env(safe-area-inset-bottom));
			transform: translateX(-50%);
			z-index: 600;
			.before{
				position: absolute;
				bottom:-20rpx;
				left: 50%;
				width: 0;
				height: 0;
				border-left: 26rpx solid transparent;
				border-right: 26rpx solid transparent;
				border-top: 26rpx solid #ffffff;
				transform: translateX(-50%);
			}
			.hd{
				line-height: 66rpx;
				font-size: 20rpx;
				font-family: PingFang SC, PingFang SC-Medium;
				font-weight: 500;
				text-align: center;
				color: #000000;
				border-bottom: 2rpx dashed #cccccc;
			}
			.ft{
				margin-top: 20rpx;
				font-size: 20rpx;
				font-family: PingFang SC, PingFang SC-Medium;
				font-weight: 500;
				text-align: center;
				color: #b3b3b3;
				padding: 20rpx 0;
				border-top: 2rpx dashed #cccccc;
			}
			.miditem{
				font-size: 24rpx;
				font-family: PingFang SC, PingFang SC-Medium;
				font-weight: 500;
				text-align: center;
				color: #030303;
				padding-top: 20rpx;
				&.on{
					color:#FFA900;
				}
			}
		}
	}
</style>
