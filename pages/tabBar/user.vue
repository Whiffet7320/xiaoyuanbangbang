<template>
	<view class="user">
		<view class="Header">
			<view class="TopImg">
				<image src="/static/user/user-back.png" mode=""></image>
			</view>
			<view class="userInfo">
				<view class="avaUrl">
					<image :src="user.avatar?user.avatar:''" mode=""></image>
				</view>
				<view class="subject">
					<view class="Content">
						<view class="Name">
							{{user.nickname?user.nickname:''}}
						</view>
						<view class="userPhone">
							{{user.phone?user.phone:''}}
						</view>
					</view>
					<view class="InfoTips">
						<view class="Set_up" @click="GoInfo">
							<image src="/static/user/shezhi.png" mode=""></image>
						</view>
						<view class="Notice" @click="GoNotice">
							<image src="/static/user/tongzhi.png" mode=""></image>
						</view>
					</view>
				</view>
			</view>
		</view>

		<view class="ZiChan">
			<view class="Title">
				我的资产
			</view>
			<view class="BanList">
				<view class="StausList" @click="ZiChanNav(0)">
					<view class="OneSele">
						<view class="Pic">
							<image src="/static/user/yue.png" mode=""></image>
						</view>
						<view class="Name">余额</view>
					</view>
					<view class="TwoSele">{{user.now_money||0}}元</view>
				</view>
				<view class="StausList" @click="ZiChanNav(1)">
					<view class="OneSele">
						<view class="Pic">
							<image src="/static/user/hongbao.png" mode=""></image>
						</view>
						<view class="Name">红包</view>
					</view>
					<view class="TwoSele">{{user.red_bag_count||0}}张未使用</view>
				</view>
				<view class="StausList" @click="ZiChanNav(2)">
					<view class="OneSele">
						<view class="Pic">
							<image src="/static/user/youhuijuan.png" mode=""></image>
						</view>
						<view class="Name">优惠券</view>
					</view>
					<view class="TwoSele">{{user.coupon_count||0}}张未使用</view>
				</view>
			</view>
		</view>

		<view class="MyFunc">
			<view class="Title">
				我的功能
			</view>
			<view class="subject">
				<view class="FuncList" v-for="(item,index) in MyFuncList" :key="index" @click="MyFuncSelect(index)">
					<view class="Pic">
						<image :src="item.pic" mode=""></image>
					</view>
					<view class="Name">
						{{item.name}}
					</view>
				</view>
			</view>
		</view>

		<view class="OtherFunc">
			<view class="Title">
				其他功能
			</view>
			<view class="subject">
				<view class="FuncList" v-for="(item,index) in OtherFuncList" :key="index" @click="OtherSelect(index)">
					<view class="Pic">
						<image :src="item.pic" mode=""></image>
					</view>
					<view class="Name">
						{{item.name}}
					</view>
				</view>
			</view>
		</view>

		<view @click="outLogin" class="ExitLogin">
			退出登陆
		</view>

		<view class="Mask" v-if="Service"></view>
		<view class="Tips" v-if="Service">
			<view class="Tes">
				{{ServicePhone}}
			</view>
			<view class="Cont" @click="CallPhone(ServicePhone)">
				呼叫
			</view>
			<view class="NoChak" @click="NoChak">
				取消
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		onShow() {
			this.getData();
		},
		data() {
			return {
				user: {},
				userAvaurl: '/static/user/touxiang.png', //用户头像
				userName: '', //用户名称
				userPhone: '', //用户手机号码
				ZiChanList: [{
						name: '余额',
						amount: 0,
						pic: '/static/user/yue.png'
					},
					{
						name: '红包',
						amount: 0,
						pic: '/static/user/hongbao.png'
					},
					{
						name: '优惠券',
						amount: 0,
						pic: '/static/user/youhuijuan.png'
					}
				],
				MyFuncList: [{
					name: '收货地址',
					pic: '/static/user/shouhuodizhi.png'
				}, ],
				OtherFuncList: [{
						name: '商家入驻',
						pic: '/static/user/shangjiaruzhu.png'
					},
					{
						name: '联系客服',
						pic: '/static/user/lianxikefu.png'
					},
					{
						name: '关于我们',
						pic: '/static/user/guanyuwomen.png'
					},
					{
						name: '用户协议',
						pic: '/static/user/yonghuxieyi.png'
					},
					{
						name: '隐私政策',
						pic: '/static/user/yinsizhengce.png'
					},
					{
						name: '相关条款',
						pic: '/static/user/xiangguantiaokuan.png'
					},
				],
				Service: false, //联系客服
				ServicePhone: '0577-89898989'
			}
		},
		methods: {
			async getData() {
				const res = await this.$api.userInfo()
				console.log(res)
				this.user = res.data;
			},
			outLogin() {
				uni.setStorageSync("token", null);
				this.getData()
			},
			//我的资产
			ZiChanNav(index) {
				switch (index) {
					case 0:
						// 开发中
						uni.navigateTo({
							url: '/pages/index/kfing/kfing'
						})
						// uni.navigateTo({
						// 	url: '/pages/user/BalancePage'
						// })
						break;
					case 1:
						// 开发中
						uni.navigateTo({
							url: '/pages/index/kfing/kfing'
						})
						// uni.navigateTo({
						// 	url: '/pages/user/RedPacketPage'
						// })
						break;
					case 2:
						// 开发中
						uni.navigateTo({
							url: '/pages/index/kfing/kfing'
						})
						// uni.navigateTo({
						// 	url: '/pages/user/couponPage'
						// })
						break;
				}
			},
			//我的功能
			MyFuncSelect(index) {
				switch (index) {
					case 0:
						uni.navigateTo({
							url: '/pages/user/ReceivingAddress'
						})
						break;

				}
			},
			//其他功能
			OtherSelect(index) {
				switch (index) {
					case 0:
						// 开发中
						uni.navigateTo({
							url: '/pages/index/kfing/kfing'
						})
						// uni.navigateTo({
						// 	url:'/pages/user/MerchantSettlement'
						// })
						break;
					case 1:
						// uni.hideTabBar({})
						// this.Service = !this.Service
						this.CallPhone(this.ServicePhone)
						break;
					case 2:
						uni.navigateTo({
							url: '/pages/user/Aboutuser'
						})
						break;
					case 3:
						uni.navigateTo({
							url: '/pages/user/UserAgreement'
						})
						break;
					case 4:
						uni.navigateTo({
							url: '/pages/user/PrivacyAgreement'
						})
						break;
					case 5:
						// 开发中
						uni.navigateTo({
							url: '/pages/index/kfing/kfing'
						})
						// uni.navigateTo({
						// 	url:'/pages/user/RelevantProvisions'
						// })
						break;
				}
			},
			//取消联系客服遮罩层
			NoChak() {
				uni.showTabBar({})
				this.Service = !this.Service
			},
			//呼叫
			CallPhone(value) {
				uni.makePhoneCall({
					phoneNumber: value,
					success: (res) => {
						console.log(res)
					}
				})
			},
			//个人信息
			GoInfo() {
				uni.navigateTo({
					url: '/pages/user/PersonalInfo'
				})
			},
			//通知
			GoNotice() {
				uni.navigateTo({
					url: '/pages/user/NotifyMessage'
				})
			},
		}
	}
</script>

<style lang="scss">
	page {
		height: 100%;
		background: #f7f8fa;
	}

	.user {
		width: 100%;
		height: 100%;

		.Header {
			width: 100%;
			display: flex;
			flex-direction: column;

			.TopImg {
				position: absolute;
				z-index: -1;

				image {
					width: 750rpx;
					height: 350rpx;
				}
			}

			.Navtop {
				display: flex;
				align-items: center;
				justify-content: center;
				height: 176rpx;

				.Title {
					margin-top: 88rpx;
					font-size: 34rpx;
					font-weight: 700;
					color: #ffffff;
				}
			}

			.userInfo {
				height: 184rpx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				margin: 40rpx 50rpx 32rpx 32rpx;

				.avaUrl {
					display: flex;
					align-items: center;

					image {
						width: 184rpx;
						height: 184rpx;
						border-radius: 50%;
						background-color: #eee;
					}
				}

				.subject {
					width: 464rpx;
					height: 184rpx;
					display: flex;
					justify-content: space-between;

					.Content {
						display: flex;
						flex-direction: column;
						justify-content: center;

						.Name {
							font-size: 44rpx;
							font-weight: 700;
							color: #ffffff;
						}

						.userPhone {
							font-size: 28rpx;
							font-weight: 400;
							color: #ffffff;
						}
					}

					.InfoTips {
						display: flex;

						.Set_up {
							display: flex;

							image {
								width: 42rpx;
								height: 40rpx;
							}
						}

						.Notice {
							display: flex;
							margin-left: 46rpx;

							image {
								width: 40rpx;
								height: 40rpx;
							}
						}
					}
				}

			}
		}

		.ZiChan {
			width: 702rpx;
			height: 220rpx;
			margin: 0 auto;
			background: #ffffff;
			border-radius: 10rpx;
			display: flex;
			flex-direction: column;

			.Title {
				margin: 28rpx 0 0 34rpx;
				font-size: 28rpx;
				font-weight: 700;
				color: #000000;
			}

			.BanList {
				width: 100%;
				display: flex;
				align-items: center;
				justify-content: space-evenly;
				margin: 25rpx auto 0;

				.StausList {
					display: flex;
					flex-direction: column;
					align-items: center;

					.OneSele {
						display: flex;
						align-items: center;

						.Pic {
							display: flex;
							align-items: center;

							image {
								width: 52rpx;
								height: 54rpx;
							}
						}

						.Name {
							margin-left: 16rpx;
							font-size: 24rpx;
							font-weight: 700;
							color: #000000;
						}
					}

					.TwoSele {
						margin-top: 16rpx;
						font-size: 24rpx;
						font-weight: 500;
						color: #000000;
					}
				}
			}
		}

		.MyFunc {
			width: 702rpx;
			height: 220rpx;
			margin: 20rpx auto;
			background: #ffffff;
			border-radius: 10rpx;
			display: flex;
			flex-direction: column;

			.Title {
				margin: 28rpx 0 0 34rpx;
				font-size: 28rpx;
				font-weight: 700;
				color: #000000;
			}

			.subject {
				width: 100%;
				display: flex;
				align-items: center;
				margin: 25rpx auto 0;

				.FuncList {
					display: flex;
					align-items: center;
					flex-direction: column;
					margin-left: 72rpx;

					.Pic {
						display: flex;
						align-items: center;

						image {
							width: 44rpx;
							height: 54rpx;
						}
					}

					.Name {
						margin-top: 12rpx;
						font-size: 24rpx;
						font-weight: 500;
						color: #000000;
					}
				}
			}
		}

		.OtherFunc {
			width: 702rpx;
			height: 332rpx;
			margin: 0 auto 88rpx;
			background: #ffffff;
			border-radius: 10rpx;
			display: flex;
			flex-direction: column;

			.Title {
				margin: 28rpx 0 0 34rpx;
				font-size: 28rpx;
				font-weight: 700;
				color: #000000;
			}

			.subject {
				width: 660rpx;
				// margin: 38rpx 59rpx 0 54rpx;
				margin: 36rpx 54rpx;
				display: flex;
				align-items: center;
				flex-wrap: wrap;

				.FuncList {
					margin-right: 68rpx;
					margin-bottom: 32rpx;
					display: flex;
					align-items: center;
					flex-direction: column;

					.Pic {
						display: flex;
						align-items: center;

						image {
							width: 38rpx;
							height: 42rpx;
						}
					}

					.Name {
						margin-top: 12rpx;
						font-size: 24rpx;
						font-weight: 500;
						color: #000000;
					}
				}
			}
		}

		.ExitLogin {
			width: 522rpx;
			height: 80rpx;
			margin: 0 auto 91rpx;
			background: #fe694f;
			border-radius: 10rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 28rpx;
			font-weight: 500;
			color: #ffffff;
		}

		.Mask {
			position: fixed;
			z-index: 1;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			height: 100%;
			width: 100%;
			background-color: #000;
			opacity: .3;
		}

		.Tips {
			position: fixed;
			z-index: 2;
			bottom: 0;
			display: flex;
			align-items: center;
			flex-direction: column;
			justify-content: space-evenly;
			width: 100%;
			height: 434rpx;
			background: #ffffff;
			border-radius: 40rpx 40rpx 0rpx 0rpx;

			.Tes {
				font-size: 28rpx;
				font-weight: 700;
				color: #ffa900;
			}

			.Cont {
				font-size: 28rpx;
				font-weight: 500;
				color: #000000;
			}

			.NoChak {
				width: 100%;
				border-top: 8rpx solid #f7f8fa;
				height: 162rpx;
				font-size: 28rpx;
				font-weight: 500;
				color: #c4c4c4;
				display: flex;
				align-items: center;
				justify-content: center;
			}
		}


	}
</style>
