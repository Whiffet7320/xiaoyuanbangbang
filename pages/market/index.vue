<template>
	<view class="container">
		<view class="bgwhite">
			<view class="search">
				<page-search @onSearch="onSearch"></page-search>
			</view>
			<view class="swiperbox">
				<u-swiper :list="banlist" height="296" mode="none"></u-swiper>
			</view>
			<view class="menulist">
				<view class="menu_item" v-for="(item,index) in menulist" :key="index" @click="goMenu(item)">
					<image :src="item.icon" class="img"></image>
					<text>{{item.title}}</text>
				</view>
			</view>
		</view>
		<view class="comment">
			<view class="tabbox">
				<view class="tab_item" :class="{'on':cur===index}" v-for="(item,index) in tablist" :key="index" @click="onTab(item,index)">{{item.title}}</view>
			</view>
			<view class="subtab" v-if="cur==0">
				<view class="subtab_item" @click="onSort(1)">综合<image :src="iszh?'https://schoolhelp.5laoye.com/static/img/images/arrow.png':'https://schoolhelp.5laoye.com/static/img/images/arrow_up.png'" class="img"></image></view>
				<view class="subtab_item" @click="onSort(2)">时间先后<image :src="issj?'https://schoolhelp.5laoye.com/static/img/images/arrow_up.png':'https://schoolhelp.5laoye.com/static/img/images/arrow.png'" class="img"></image></view>
			</view>
			<view class="list">
				<market-list :list="list" @previewImage="previewImage"></market-list>
				<u-loadmore :status="status" bg-color="#ffffff" color="#010101" font-size="20" />
			</view>
		</view>
		<page-foot :cur="3"></page-foot>
	</view>
</template>

<script>
	import marketList from "./components/market-list";
	import pageFoot from "@/components/page-foot/page-foot";
	import pageSearch from "@/components/page-search/page-search";
	export default{
		components:{
			pageSearch,
			marketList,
			pageFoot
		},
		data(){
			return{
				banlist:["https://schoolhelp.5laoye.com/static/img/images/market/banner.png"],
				menulist:[
					{
						icon:"https://schoolhelp.5laoye.com/static/img/images/market/menu1.png",
						path:"/pages/market/addMarket",
						title:"发布转卖"
					},
					{
						icon:"https://schoolhelp.5laoye.com/static/img/images/market/menu2.png",
						path:"/pages/market/addMarketpro",
						title:"发布收购"
					},
					{
						icon:"https://schoolhelp.5laoye.com/static/img/images/market/menu3.png",
						path:"/pages/market/list?type=2",
						title:"帮帮转卖"
					},
					{
						icon:"https://schoolhelp.5laoye.com/static/img/images/market/menu4.png",
						path:"/pages/market/list?type=1",
						title:"帮帮收购"
					},
					{
						icon:"https://schoolhelp.5laoye.com/static/img/images/market/menu5.png",
						path:"/pages/market/memarket?type=2",
						title:"我的转卖"
					},
					{
						icon:"https://schoolhelp.5laoye.com/static/img/images/market/menu6.png",
						path:"/pages/market/memarket?type=1",
						title:"我的收购"
					}
				],
				tablist:[
					{
						type:"id",
						title:"最新"
					},
					{
						type:"read_num",
						title:"热门"
					},
					{
						type:"comment_time",
						title:"新评"
					}
				],
				field:"id",
				cur:0,
				iszh:true,
				issj:true,
				ispl:false,
				list:[],
				isOnShow:true,
				// 加载
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
			previewImage(arr) {
				this.isOnShow = false;
				uni.previewImage({
					urls: arr[0],
					current: arr[1],
					indicator: 'default',
					loop: true,
					fail(err) {
						console.log('previewImage出错', urls, err)
					},
				})
			},
			onSearch(){
				uni.navigateTo({
					url:"/pages/search/index?from=market"
				})
			},
			goMenu(item){
				if(item.path!==''){
					uni.navigateTo({
						url:item.path
					})
				}
			},
			onSort(index){
				if(index===1){
					this.iszh = !this.iszh;
					this.field = this.iszh?"id,desc":"id,asc";
				}else{
					this.issj = !this.issj;
					this.field = this.issj?"add_time,asc":"add_time,desc";
				}
				this.list = [];
				this.current_page = 1;
				this.last_page = 1;
				this.loadData();
			},
			async loadData(){
				this.status = 'loading';
				setTimeout(async () => {
					const res = await this.$api.getjishi({
						field:this.field,
						page: this.current_page,
						limit: 10
					})
					if (res.data.data.length == 0) {
						this.status = 'nomore';
					} else {
						this.status = 'loadmore';
						this.last_page = res.data.last_page;
						this.list = this.list.concat(res.data.data);
						this.list.forEach(ele => {
							if(ele.img_paths){
								ele.imgPath = ele.img_paths.split(",");
								ele.imgPath.forEach((img, i) => {
									this.$set(ele.imgPath, i, this.$tools.imgUrl(img))
								})
							}
						})
					}
				}, 200)
			},
			onTab(item,index){
				this.cur = index;
				this.field = item.type;
				this.list = [];
				this.current_page = 1;
				this.last_page = 1;
				this.loadData();
			}
		},
		onShow(){
			if(!this.isOnShow){
				return;
			}
			this.list = [];
			this.loadData();
		},
		onReachBottom(){
			//判断是否最后一页
			if (this.current_page >= this.last_page) {
				this.status = 'nomore';
			} else {
				this.current_page = this.current_page + 1; //页码+1
				this.status = 'loading';
				this.loadData();
			}
		}
	}
</script>
<style>
	page{
		background-color: #F7F8FA;
	}
</style>
<style lang="scss" scoped>
	@import "@/common/css/spell/index.scss";
	.bgwhite{
		background-color: #FFFFFF;
		padding-top: 22rpx;
	}
	.swiperbox{
		background-color: #eee;
		height: 296rpx;
		margin:28rpx 24rpx 0 24rpx;
	}
	.search{
		margin:0 24rpx 0;
	}
	.list{
		padding: 40rpx 0;
	}
</style>
