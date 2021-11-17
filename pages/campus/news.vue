<template>
	<view class="container">
		<view class="ibg"><image src="/static/images/newsbg.png" class="icon"></image></view>
		<view class="searchbox" @click="onSearch">
			<image src="/static/images/icon_search.png" class="icon"></image>
			<view class="text">请输入你想要搜索的内容</view>
		</view>
		<view class="swiperbox" v-if="tag=='advice'">
			<u-swiper :list="banlist" height="320" :title="true" mode="none" :title-style="{'font-size':'28rpx','background':'none'}"></u-swiper>
		</view>
		<view class="swiperbox" v-if="tag=='news'">
			<u-swiper :list="banlist2" height="320" :title="true" mode="none" :title-style="{'font-size':'28rpx','background':'none'}"></u-swiper>
		</view>
		<view class="midnew" v-if="tag=='advice'">
			<view class="input">
				<image src="/static/images/icon_edit.png" mode="aspectFit" class="icon"></image>
				<input type="text" v-model="question" placeholder="请输入你要发布的内容" class="ipt" placeholder-style="color:#D9D9D9;" />
			</view>
			<view class="input textarea">
				<image src="/static/images/icon_edit.png" mode="aspectFit" class="icon"></image>
				<textarea v-model="content" class="iptext" placeholder="请输入文章内容" placeholder-style="color:#D9D9D9;" @confirm="onConfirm"></textarea>
			</view>
			<view class="light">注意：请简单描述你想要发布的问题，字数受限在1000字以内，需经过平台审核才可发布成功。</view>
		</view>
		<view class="midnew" v-if="tag=='news'">
			<view class="input">
				<image src="/static/images/icon_edit.png" mode="aspectFit" class="icon"></image>
				<input type="text" v-model="question" placeholder="请输入文章标题" class="ipt" placeholder-style="color:#D9D9D9;" />
			</view>
			<view class="input textarea">
				<image src="/static/images/icon_edit.png" mode="aspectFit" class="icon"></image>
				<textarea v-model="content" class="iptext" placeholder="请输入文章内容" placeholder-style="color:#D9D9D9;" @confirm="onConfirm"></textarea>
			</view>
			<view class="light">注意：请简单描述你想要发布的问题，字数受限在1000字以内，需经过平台审核才可发布成功。</view>
		</view>
		<view class="newrap">
			<view class="tit">{{ntitle}}</view>
			<view class="list" v-if="list.length>0">
				<view class="litem" v-for="(item,index) in list" :key="index" @click="goDetail(item)">
					<view class="title">{{item.title}}</view>
					<view class="time">
						<image src="/static/images/icon_time.png" mode="aspectFit" class="icon"></image>
						<text>{{item.add_time}}</text>
					</view>
				</view>
			</view>
		</view>
		<u-loadmore :status="status" bg-color="#ffffff" color="#010101" font-size="20" />
	</view>
</template>

<script>
	export default{
		data(){
			return{
				id:0,
				banlist:[
					{
						image: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20170725%2F88c819bb071345cda4074b081411fc55.jpeg',
						title: '2021学校开展秋季招生活动中...'
					},
				],
				banlist2:[
					{
						image: 'https://inews.gtimg.com/newsapp_bt/0/13383356882/1000',
						title: '学校积极开展各种“健康教育”和“心理活动”...'
					}
				],
				question:"",
				content:"",
				ntitle:"",
				tag:"advice",
				list:[],
				// 加载
				reload: false, //判断是否上拉
				current_page:1,
				last_page:1,
				status: 'loadmore',
				loadText: {
					loadmore: '上拉加载更多',
					loading: '正在加载...',
					nomore: '没有更多了'
				}
			}
		},
		methods:{
			onSearch(){
				uni.navigateTo({
					url:"/pages/search/newslist"
				})
			},
			setTitle(id){
				if(id==1){
					this.tag = "advice";
					this.ntitle = "问答列表";
					uni.setNavigationBarTitle({title:"社团咨询"});
				}else if(id==2){
					this.tag = "news";
					this.ntitle = "新闻公告";
					uni.setNavigationBarTitle({title:"校园新闻"});
				}
			},
			onConfirm(){
				if(this.tag == "advice"){
					if(this.question!=='' && this.content!==""){
						this.$api.article({title:this.question,content:this.content}).then((res)=>{
							if(res.code==200){
								this.question = "";
								this.content = "";
								uni.showToast({
									title:"发布成功，请等待客服审核",
									icon:"none"
								})
							}else{
								uni.showToast({
									title:res.message,
									icon:"none"
								})
							}
						})
					}else{
						uni.showToast({
							title:"请填写需要发布的内容",
							icon:"none"
						})
					}
				}else if(this.tag == "news"){
					if(this.question=="" && this.content==""){
						uni.showToast({
							title:"请填写需要发布的内容",
							icon:"none"
						})
					}else{
						this.$api.article({title:this.question,content:this.content}).then((res)=>{
							if(res.code==200){
								this.question = "";
								this.content = "";
								uni.showToast({
									title:"发布成功，请等待客服审核",
									icon:"none"
								})
							}else{
								uni.showToast({
									title:res.message,
									icon:"none"
								})
							}
						})
					}
				}
			},
			async loadData(){
				this.$api.getarticle({tag:this.tag,page:this.current_page,limit:10}).then((res)=>{
					if(res.code==200){
						uni.stopPullDownRefresh();
						this.list = this.reload ? res.data.data : this.list.concat(res.data.data);
						this.current_page = res.data.current_page; //当前页码
						this.last_page = res.data.last_page; //总页码
						this.status = res.data.total == 0 ? 'nomore' : 'more';
					}
				})
			},
			goDetail(item){
				this.$store.commit("setNewsarticle",item);
				uni.navigateTo({
					url:"/pages/campus/newsDetail?id="+item.id+"&type="+item.tag
				})
			}
		},
		onLoad(option){
			if(option.id){
				this.id = option.id;
				this.setTitle(option.id);
			}
		},
		onShow(){
			this.list = [];
			this.current_page = 1;
			this.last_page = 1;
			this.loadData();
		},
		onPullDownRefresh() {
			this.current_page = 1;
			this.reload = true;
			this.loadData();
		},
		onReachBottom() {
			//判断是否最后一页
			if (this.current_page >= this.last_page) {
				this.status = 'nomore';
			} else {
				this.reload = false;
				this.current_page = this.current_page + 1; //页码+1
				this.status = 'loading';
				this.loadData();
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container{
		padding: 0 24rpx;
	}
	.ibg{
		position: absolute;
		top:-88rpx;
		left: 0;
		z-index: -1;
		width: 100%;
		.icon{
			width: 100%;
			height: 436rpx;
		}
	}
	.searchbox{
		width: 100%;
		height: 60rpx;
		background: #FFFFFF;
		border-radius: 30rpx;
		margin: 32rpx 0;
		display: flex;
		align-items: center;
		.icon{
			width: 25rpx;
			height: 25rpx;
			margin-left: 25rpx;
			margin-right: 16rpx;
		}
		.text{
			flex:1;
			font-size: 20rpx;
			font-family: PingFang SC, PingFang SC-Regular;
			font-weight: 400;
			color: #848484;
		}
	}
	.swiperbox{
		width: 100%;
		height: 320rpx;
		margin-bottom: 48rpx;
	}
	.midnew{
		width: 100%;
		margin-bottom: 40rpx;
		.input{
			width: 100%;
			padding:12rpx 0;
			border: 2rpx solid #f2f2f2;
			border-radius: 8rpx;
			display: flex;
			align-items: center;
			.icon{
				width: 17rpx;
				height: 18rpx;
				margin-left: 24rpx;
				margin-right: 17rpx;
			}
			.ipt{
				flex:1;
				width: 100%;
				height: 100%;
				font-size: 20rpx;
				color: #000000;
			}
			&.textarea{
				align-items:start;
				height: 104rpx;
				margin-top: 24rpx;
				.iptext{
					width: 100%;
					height: 100%;
					font-size: 20rpx;
					color: #000000;
				}
			}
		}
		.light{
			margin-top: 24rpx;
			font-size: 20rpx;
			font-family: PingFang SC, PingFang SC-Medium;
			font-weight: 500;
			color: #fe694f;
		}
	}
	.newrap{
		padding-bottom: 40rpx;
		.tit{
			height: 40rpx;
			line-height: 40rpx;
			font-size: 28rpx;
			font-family: PingFang SC, PingFang SC-Bold;
			font-weight: 700;
			color: #000000;
			padding-left: 12rpx;
			position: relative;
			border-left: 8rpx #FE694F solid;
		}
		.list{
			margin-top: 16rpx;
			.litem{
				.title{
					font-size: 24rpx;
					font-family: PingFang SC, PingFang SC-Bold;
					font-weight: 700;
					color: #000000;
				}
				.time{
					padding:26rpx 0;
					display: flex;
					align-items: center;
					font-size: 20rpx;
					font-family: PingFang SC, PingFang SC-Medium;
					font-weight: 500;
					color: #848484;
					.icon{
						width: 20rpx;
						height: 20rpx;
						margin-right: 17rpx;
					}
				}
			}
		}
		.empty{
			display: flex;
			align-items: center;
			justify-content: center;
			width: 100%;
			height: 300rpx;
			font-size: 20rpx;
			font-family: PingFang SC, PingFang SC-Medium;
			color: #000;
		}
	}
</style>
