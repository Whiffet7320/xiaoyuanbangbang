<template>
	<view class="comdetail">
		<view class="uinfo">
			<image :src="info.avatar_url" mode="aspectFill" class="img"></image>
			<view class="info">
				<view class="name" v-if="info.is_anonymous==0">{{info.nickname}}</view>
				<view class="name" v-if="info.is_anonymous==1">*****</view>
				<view class="desc">
					<text v-if="type=='pinche'">#帮帮拼车</text>
					<text v-if="type=='pindan'">#帮帮拼单</text>
					<text v-if="type=='shougou' && stype==1">#帮帮寻物</text>
					<text v-if="type=='shougou' && stype==2">#帮帮寻主</text>
					<text v-if="type=='jishi' && stype==1">#帮帮收购</text>
					<text v-if="type=='jishi' && stype==2">#帮帮转卖</text>
					<text v-if="type=='baoxiu'">#帮帮报修</text>
					<text class="text">{{info.device==null?"":'来自'+info.device.charAt(0).toUpperCase() + info.device.slice(1)}}</text>
				</view>
			</view>
		</view>
		<view class="fncont">
			<template v-if="type=='pinche'">
				<view class="fnitem">
					<view class="label">【<image src="/static/images/icon_car.png" mode="aspectFit" style="width: 36rpx;height: 32rpx;"></image>时间】：</view>
					<view class="text">{{info.pinche_time}}</view>
				</view>
				<view class="fnitem">
					<view class="label">【<image src="/static/images/icon_car.png" mode="aspectFit" style="width: 36rpx;height: 32rpx;"></image>起点】：</view>
					<view class="text">{{info.start_location}}</view>
				</view>
				<view class="fnitem">
					<view class="label">【<image src="/static/images/icon_car.png" mode="aspectFit" style="width: 36rpx;height: 32rpx;"></image>终点】：</view>
					<view class="text">{{info.end_location}}</view>
				</view>
				<view class="fnitem" v-if="info.description">
					<view class="label">【<image src="/static/images/icon_car.png" mode="aspectFit" style="width: 36rpx;height: 32rpx;"></image>描述】：</view>
					<view class="text">{{info.description}}</view>
				</view>
				<view class="fnitem" v-if="info.remark">
					<view class="label">【<image src="/static/images/icon_car.png" mode="aspectFit" style="width: 36rpx;height: 32rpx;"></image>备注】：</view>
					<view class="text">{{info.remark}}</view>
				</view>
			</template>
			<template v-if="type=='pindan'">
				<view class="fnitem">
					<view class="label">【<image src="/static/images/icon_gift.png" mode="aspectFit" style="width: 34rpx;height: 34rpx;"></image>商品】：</view>
					<view class="text">{{info.product_name}}</view>
				</view>
				<view class="fnitem">
					<view class="label">【<image src="/static/images/icon_gift.png" mode="aspectFit" style="width: 34rpx;height: 34rpx;"></image>人数】：</view>
					<view class="text">{{info.people||0}}</view>
				</view>
				<view class="fnitem">
					<view class="label">【<image src="/static/images/icon_gift.png" mode="aspectFit" style="width: 34rpx;height: 34rpx;"></image>价格】：</view>
					<view class="text">{{info.price||0}}</view>
				</view>
				<view class="fnitem" v-if="info.description">
					<view class="label">【<image src="/static/images/icon_gift.png" mode="aspectFit" style="width: 34rpx;height: 34rpx;"></image>描述】：</view>
					<view class="text">{{info.description}}</view>
				</view>
				<view class="fnitem" v-if="info.remark">
					<view class="label">【<image src="/static/images/icon_gift.png" mode="aspectFit" style="width: 34rpx;height: 34rpx;"></image>备注】：</view>
					<view class="text">{{info.remark}}</view>
				</view>
			</template>
			<template v-if="type=='shougou' && stype==1">
				<view class="fnitem">
					<view class="label">【<image src="/static/images/icon_shiwu.png" mode="aspectFit" style="width: 35rpx;height: 35rpx;"></image>失物】：</view>
					<view class="text">{{info.product_name}}</view>
				</view>
				<view class="fnitem" v-if="info.description">
					<view class="label">【<image src="/static/images/icon_shiwu.png" mode="aspectFit" style="width: 35rpx;height: 35rpx;"></image>描述】：</view>
					<view class="text">{{info.description}}</view>
				</view>
				<view class="fnitem" v-if="info.remark">
					<view class="label">【<image src="/static/images/icon_shiwu.png" mode="aspectFit" style="width: 35rpx;height: 35rpx;"></image>备注】：</view>
					<view class="text">{{info.remark}}</view>
				</view>
			</template>
			<template v-if="type=='shougou' && stype==2">
				<view class="fnitem">
					<view class="label">【<image src="/static/images/icon_shiw.png" mode="aspectFit" style="width: 31rpx;height: 31rpx;"></image>拾物】：</view>
					<view class="text">{{info.product_name}}</view>
				</view>
				<view class="fnitem" v-if="info.description">
					<view class="label">【<image src="/static/images/icon_shiw.png" mode="aspectFit" style="width: 31rpx;height: 31rpx;"></image>描述】：</view>
					<view class="text">{{info.description}}</view>
				</view>
				<view class="fnitem" v-if="info.remark">
					<view class="label">【<image src="/static/images/icon_shiw.png" mode="aspectFit" style="width: 31rpx;height: 31rpx;"></image>备注】：</view>
					<view class="text">{{info.remark}}</view>
				</view>
			</template>
			<template v-if="type=='jishi' && stype==1">
				<view class="fnitem">
					<view class="label">【<image src="/static/images/icon_sg.png" mode="aspectFit" style="width: 34rpx;height: 32rpx;"></image>收物】：</view>
					<view class="text">{{info.product_name}}</view>
				</view>
				<view class="fnitem">
					<view class="label">【<image src="/static/images/icon_sg.png" mode="aspectFit" style="width: 34rpx;height: 32rpx;"></image>收价】：</view>
					<view class="text">{{info.price}}</view>
				</view>
				<view class="fnitem" v-if="info.description">
					<view class="label">【<image src="/static/images/icon_sg.png" mode="aspectFit" style="width: 34rpx;height: 32rpx;"></image>描述】：</view>
					<view class="text">{{info.description}}</view>
				</view>
				<view class="fnitem" v-if="info.remark">
					<view class="label">【<image src="/static/images/icon_sg.png" mode="aspectFit" style="width: 34rpx;height: 32rpx;"></image>备注】：</view>
					<view class="text">{{info.remark}}</view>
				</view>
			</template>
			<template v-if="type=='jishi' && stype==2">
				<view class="fnitem">
					<view class="label">【<image src="/static/images/icon_zm.png" mode="aspectFit" style="width: 34rpx;height: 31rpx;"></image>出售】：</view>
					<view class="text">{{info.product_name}}</view>
				</view>
				<view class="fnitem">
					<view class="label">【<image src="/static/images/icon_zm.png" mode="aspectFit" style="width: 34rpx;height: 31rpx;"></image>售价】：</view>
					<view class="text">{{info.price}}</view>
				</view>
				<view class="fnitem" v-if="info.description">
					<view class="label">【<image src="/static/images/icon_zm.png" mode="aspectFit" style="width: 34rpx;height: 31rpx;"></image>描述】：</view>
					<view class="text">{{info.description}}</view>
				</view>
				<view class="fnitem" v-if="info.remark">
					<view class="label">【<image src="/static/images/icon_zm.png" mode="aspectFit" style="width: 34rpx;height: 31rpx;"></image>备注】：</view>
					<view class="text">{{info.remark}}</view>
				</view>
			</template>
			<template v-if="type=='baoxiu'">
				<view class="fnitem">
					<view class="label">【<image src="/static/images/icon_gifts.png" mode="aspectFit" style="width: 32rpx;height: 32rpx;"></image>物品】：</view>
					<view class="text">{{info.product_name}}</view>
				</view>
				<view class="fnitem" v-if="info.description">
					<view class="label">【<image src="/static/images/icon_ends.png" mode="aspectFit" style="width: 32rpx;height: 32rpx;"></image>描述】：</view>
					<view class="text">{{info.description}}</view>
				</view>
				<view class="fnitem" v-if="info.remark">
					<view class="label">【<image src="/static/images/icon_bz.png" mode="aspectFit" style="width: 32rpx;height: 32rpx;"></image>备注】：</view>
					<view class="text">{{info.remark}}</view>
				</view>
			</template>
			<view class="tip">【请告知在校园帮帮平台上看到的】</view>
			<view class="tip call">
				<text class="text" v-if="type=='pinche'">想拼车的同学请点我</text>
				<text class="text" v-if="type=='pindan'">想拼单的同学请点我</text>
				<text class="text" v-if="type=='shougou' && stype==1">拾到的同学请点我</text>
				<text class="text" v-if="type=='shougou' && stype==2">失主请点我</text>
				<text class="text" v-if="type=='jishi' && stype==1">想收购的同学请点我</text>
				<text class="text" v-if="type=='jishi' && stype==2">想出的同学请点我</text>
				<text class="text" v-if="type=='baoxiu'">维修师傅请点我</text>
				<view class="triangle-up"></view>
				<view class="triangle-up"></view>
				<view class="triangle-up"></view>
			</view>
			<view class="imglist" v-if="info.imgPath">
				<image :src="pitem" mode="aspectFill" class="img" v-for="(pitem,indexa) in info.imgPath" :key="indexa" @click="previewImage([info.imgPath,indexa])"></image>
			</view>
		</view>
		<view class="wxcont">
			<view class="sitem" v-if="info.mobile!==null && info.mobile!==''">
				<view class="left">
					<u-icon name="phone-fill" size="35" color="#848484"></u-icon>
					<text class="texts">电话：</text>
				</view>
				<view class="text">{{info.mobile}}</view>
				<view class="btn" @click.stop="onTel(info.mobile)">立即呼叫</view>
			</view>
			<view class="sitem" v-if="info.wx!==null && info.wx!==''">
				<view class="left">
					<u-icon name="weixin-fill" size="35" color="#848484"></u-icon>
					<text class="texts">微信：</text>
				</view>
				<view class="text">{{info.wx}}</view>
				<view class="btn" @click.stop="onCopy(info.wx)">复制</view>
			</view>
			<view class="sitem" v-if="info.qq!==null && info.qq!==''">
				<view class="left">
					<u-icon name="qq-fill" size="35" color="#848484"></u-icon>
					<text class="texts">QQ:</text>
				</view>
				<view class="text">{{info.qq}}</view>
				<view class="btn" @click.stop="onCopy(info.qq)">复制</view>
			</view>
		</view>
		<view class="comment_wrap">
			<view class="total">共{{total}}条评论</view>
			<view class="commlist" v-if="jlist.length>0">
				<view class="commitem" v-for="(item,index) in jlist" :key="index" @click="onSubreplay(item)">
					<image :src="item.avatar_url" mode="aspectFill" class="img"></image>
					<view class="info">
						<view class="hd">
							<view class="name">{{item.nickname}}</view>
							<view class="toolicon">
								<view class="zan" :class="[item.is_zan==1?'on':'']" @click.stop="onZan(item)">
									<u-icon name="heart" size="26" color="#FE694F" v-if="item.is_zan==1"></u-icon>
									<u-icon name="heart" size="26" color="#848484" v-if="item.is_zan==0"></u-icon>
									<text class="text">{{item.zan_count}}</text>
								</view>
								<view class="zan">
									<u-icon name="chat" size="26" color="#848484"></u-icon>
									<text class="text">{{item.comment_reply_list.length}}</text>
								</view>
							</view>
						</view>
						<view class="desc">{{item.content}}</view>
						<view class="feedback" @click.stop="onSubreplay(item)">回复</view>
						<view class="replaylist" v-if="item.comment_reply_list.length">
							<view class="replay_item" v-for="(pitem,indexz) in item.comment_reply_list" :key="indexz">
								<image :src="pitem.avatar_url" mode="aspectFill" class="img"></image>
								<view class="info">
									<view class="hd">
										<view class="name">{{pitem.nickname}}</view>
									</view>
									<view class="desc">{{pitem.content}}</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="empty" v-if="jlist.length==0">暂时没有评论</view>
		</view>
		<page-ftcomment :list="info" @change="onChange" @reply="onReply"></page-ftcomment>
		<u-popup v-model="popShow" mode="bottom" :closeable="false" :safe-area-inset-bottom="true" border-radius="0">
			<view class="commentModal">
				<view class="utext" :class="{'on':comments==''}">
					<textarea v-model="comments" class="replytext" />
				</view>
				<view class="comtbtn">
					<view class="btns" @click.stop="onSubmit">提交</view>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	import { mapState } from 'vuex';
	import pageFtcomment from "@/components/page-foot/page-ftcomment";
	export default{
		components:{
			pageFtcomment
		},
		computed: {
			...mapState({
				detail:state => state.detail
			})
		},
		data(){
			return{
				isOnShow:true,
				sid:0,
				id:0,
				info:{},
				total:0,
				type:"",
				stype:"",
				popShow:false,
				comments:"",
				isZan:false,
				jlist:[],
				// 加载
				reload: false, //判断是否上拉
				current_page:1,
				last_page:1,
				status: 'loading',
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
			onTel(number){
				uni.makePhoneCall({
				    phoneNumber: number
				});
			},
			onCopy(text){
				uni.setClipboardData({
					data: text,
					success: () => {
						uni.showToast({
							title:"复制成功",
							icon:"none"
						});
					}
				});
			},
			getcomtlist(){
				this.$api.comment_list({id:this.id,type:this.type}).then((res)=>{
					if(res.code==200){
						uni.stopPullDownRefresh();
						this.jlist = this.reload ? res.data.data : this.jlist.concat(res.data.data);
						this.current_page = res.data.current_page; //当前页码
						this.last_page = res.data.last_page; //总页码
						this.status = res.data.total == 0 ? 'nomore' : 'more';
						this.total = res.data.total;
					}
				})
			},
			async onZan(item){
				if (item.is_zan == 0) {
					item.is_zan = true;
					item.zan_count++;
					this.isZan = item.is_zan;
				}else{
					item.is_zan = false;
					item.zan_count--;
					this.isZan = item.is_zan;
				}
				this.$api.comment_zan({id:item.id,type:this.type}).then((res)=>{
					if(res.code==200){
						if(this.isZan){
							uni.showToast({
								title:"点赞成功",
								icon:"none"
							})
						}else{
							uni.showToast({
								title:"取消点赞",
								icon:"none"
							})
						}
					}else{
						uni.showToast({
							title:res.message,
							icon:"none"
						})
					}
				})
			},
			onChange(id){
				if (this.info.is_zan == 0) {
					this.info.is_zan = true;
					this.info.zan_count++;
				}else{
					this.info.is_zan = false;
					this.info.zan_count--;
				}
				this.$api.zan({id:id,type:this.type}).then((res)=>{
					if(res.code==200){
						uni.showToast({
							title:res.message,
							icon:"none"
						})
					}else{
						uni.showToast({
							title:res.message,
							icon:"none"
						})
					}
				})
			},
			onSubreplay(val){
				this.sid = val.id;
				this.popShow = true;
			},
			onReply(val){
				this.sid = 0;
				this.popShow = true;
			},
			onSubmit(){
				if(this.comments==""){
					uni.showToast({
						title:"请写下您的想法",
						icon:"none"
					})
				}else{
					if(this.sid>0){
						this.$api.comment_reply({id:this.sid,type:this.type,content:this.comments}).then((res)=>{
							if(res.code==200){
								uni.showToast({
									title:"评论成功",
									icon:"none"
								})
								this.comments = "";
								this.popShow = false;
								this.reload = true;
								this.current_page = 1;
								this.getDetail();
							}else{
								uni.showToast({
									title:res.message,
									icon:"none"
								})
							}
						})
					}else{
						this.$api.comment({id:this.id,type:this.type,content:this.comments}).then((res)=>{
							if(res.code==200){
								uni.showToast({
									title:"评论成功",
									icon:"none"
								})
								this.comments = "";
								this.popShow = false;
								this.reload = true;
								this.current_page = 1;
								this.getDetail();
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
			setTitle(){
				let nickname = "";
				if(this.info.is_anonymous==0){
					nickname = this.info.nickname;
				}else if(this.info.is_anonymous==1){
					nickname = "*****";
				}
				uni.setNavigationBarTitle({
					title:nickname+"发布的信息"
				})
				this.getcomtlist();
			},
			getDetail(){
				if(this.type=="baoxiu"){
					this.$api.getbxDetail(this.id).then((res)=>{
						if(res.code==200){
							let data = res.data;
							if(data.img_paths){
								data.imgPath = data.img_paths.split(",");
								data.imgPath.forEach((img, i) => {
									this.$set(data.imgPath, i, this.$tools.imgUrl(img))
								})
							}
							this.info = data;
							this.setTitle();
						}
					})
				}else if(this.type=='shougou'){
					this.$api.getsgDetail(this.id).then((res)=>{
						if(res.code==200){
							let data = res.data;
							if(data.img_paths){
								data.imgPath = data.img_paths.split(",");
								data.imgPath.forEach((img, i) => {
									this.$set(data.imgPath, i, this.$tools.imgUrl(img))
								})
							}
							this.info = data;
							this.setTitle();
						}
					})
				}else if(this.type=='jishi'){
					this.$api.getjshiDetail(this.id).then((res)=>{
						if(res.code==200){
							let data = res.data;
							if(data.img_paths){
								data.imgPath = data.img_paths.split(",");
								data.imgPath.forEach((img, i) => {
									this.$set(data.imgPath, i, this.$tools.imgUrl(img))
								})
							}
							this.info = data;
							this.setTitle();
						}
					})
				}else if(this.type=='pinche'){
					this.$api.getpcheDetail(this.id).then((res)=>{
						if(res.code==200){
							let data = res.data;
							if(data.img_paths){
								data.imgPath = data.img_paths.split(",");
								data.imgPath.forEach((img, i) => {
									this.$set(data.imgPath, i, this.$tools.imgUrl(img))
								})
							}
							this.info = data;
							this.setTitle();
						}
					})
				}else if(this.type=='pindan'){
					this.$api.getpdanDetail(this.id).then((res)=>{
						if(res.code==200){
							let data = res.data;
							if(data.img_paths){
								data.imgPath = data.img_paths.split(",");
								data.imgPath.forEach((img, i) => {
									this.$set(data.imgPath, i, this.$tools.imgUrl(img))
								})
							}
							this.info = data;
							this.setTitle();
						}
					})
				}
			}
		},
		onLoad(options){
			if(options.id){
				this.id = options.id;
			}
			if(options.stype){
				this.stype = options.stype;
			}
			if(options.type){
				this.type = options.type;
			}
		},
		onShow(){
			if(!this.isOnShow){
				return;
			}
			this.getDetail();
		}
	}
</script>

<style>
	page{
		background-color: #F7F8FA;
	}
</style>
<style lang="scss" scoped>
	.comdetail{
		.uinfo{
			margin-top: 20rpx;
			background-color: #FFFFFF;
			padding: 30rpx 40rpx 16rpx 40rpx;
			display: flex;
			align-items: center;
			.img{
				width: 60rpx;
				height: 60rpx;
				background-color: #eee;
				border-radius: 50%;
			}
			.info{
				padding-left: 16rpx;
				.name{
					font-size: 28rpx;
					font-family: PingFang SC, PingFang SC-Medium;
					font-weight: 500;
					color: #010101;
				}
				.desc{
					margin-top: 8rpx;
					font-size: 20rpx;
					font-family: PingFang SC, PingFang SC-Medium;
					color: #c4c4c4;
					.text{
						margin-left: 10rpx;
					}
				}
			}
		}
		.fncont{
			background-color: #FFFFFF;
			padding: 0 40rpx 10rpx;
			.fnitem{
				padding-top: 8rpx;
				font-size: 24rpx;
				font-family: PingFang SC, PingFang SC-Medium;
				font-weight: 500;
				color: #000000;
				display: flex;
				.label{
					font-family: PingFang SC, PingFang SC-Bold;
					font-weight: 700;
					display: flex;
				}
				.text{
					flex:1;
				}
			}
			.tip{
				padding-top: 12rpx;
				font-size: 20rpx;
				font-family: PingFang SC, PingFang SC-Regular;
				font-weight: 400;
				color: #000000;
			}
			.call{
				display: flex;
				align-items: center;
				.text{
					margin-right: 12rpx;
				}
				.triangle-up {
					margin-right: 5rpx;
				    width: 0;
				    height: 0;
				    border-left: 7rpx solid transparent;
				    border-right: 7rpx solid transparent;
				    border-bottom: 14rpx solid #FE694F;
				}
			}
			.imglist{
				padding-top: 16rpx;
				display: flex;
				flex-wrap: wrap;
				.img{
					width: 200rpx;
					height: 200rpx;
					margin-right: 26rpx;
					margin-bottom: 14rpx;
					background-color: #eee;
					&:nth-child(3n){
						margin-right: 0;
					}
				}
			}
		}
		.wxcont{
			background-color: #FFFFFF;
			margin-top: 20rpx;
			padding:0 60rpx 20rpx 60rpx;
			.sitem{
				padding-top: 20rpx;
				display: flex;
				align-items: center;
				.left{
					display: flex;
					align-items: center;
					font-size: 28rpx;
					font-family: PingFang SC, PingFang SC-Medium;
					font-weight: 500;
					color: #000000;
					.texts{
						margin-left: 19rpx;
					}
				}
				.text{
					padding-left: 40rpx;
					flex:1;
					font-size: 24rpx;
					font-family: PingFang SC, PingFang SC-Medium;
					font-weight: 500;
					color: #000000;
				}
				.btn{
					width: 146rpx;
					height: 40rpx;
					line-height: 40rpx;
					background: #fe694f;
					border-radius: 20rpx;
					font-size: 24rpx;
					font-family: PingFang SC, PingFang SC-Medium;
					font-weight: 500;
					text-align: center;
					color: #ffffff;
				}
			}
		}
		.comment_wrap{
			margin-top: 20rpx;
			background-color: #FFFFFF;
			padding:20rpx 26rpx;
			.total{
				display: inline-block;
				background-color: #fed1c9;
				padding: 0 20rpx;
				border-radius:0 60rpx 60rpx 0;
				height: 60rpx;
				line-height: 60rpx;
				font-size: 24rpx;
				font-family: PingFang SC, PingFang SC-Medium;
				font-weight: 500;
				text-align: center;
				color: #000000;
			}
			.commlist{
				padding-top:12rpx;
				padding-left: 22rpx;
				.commitem{
					padding:28rpx 0;
					display: flex;
					border-bottom: 2rpx solid #f6f6f6;
					&:last-child{
						border-bottom: 0;
					}
					.img{
						width: 54rpx;
						height: 54rpx;
						background-color: #eee;
						border-radius: 50%;
					}
					.info{
						padding-left: 20rpx;
						flex:1;
						.hd{
							display: flex;
							align-items: center;
							.name{
								flex:1;
								font-size: 28rpx;
								font-family: PingFang SC, PingFang SC-Bold;
								font-weight: 700;
								color: #000000;
							}
						}
						.desc{
							margin-top: 26rpx;
							font-size: 24rpx;
							font-family: PingFang SC, PingFang SC-Medium;
							font-weight: 500;
							color: #000000;
						}
						.feedback{
							margin-top: 10rpx;
							font-size: 20rpx;
							font-family: PingFang SC, PingFang SC-Medium;
							font-weight: 500;
							color: #999;
						}
						.toolicon{
							display: flex;
							align-items: flex-start;
							.zan{
								display: flex;
								align-items: center;
								color: #848484;
								margin-left:10rpx;
								.text{
									font-size: 20rpx;
									font-family: PingFang SC, PingFang SC-Regular;
									font-weight: 400;
									margin-left: 7rpx;
								}
								&.on{
									color:#FE694F;
								}
							}
						}
						.replaylist{
							margin-top: 20rpx;
							.replay_item{
								display: flex;
								margin-bottom: 20rpx;
								.info{
									.hd{
										justify-content: flex-start;
									}
								}
							}
						}
					}
				}
			}
		}
		.empty{
			font-size: 24rpx;
			font-family: PingFang SC, PingFang SC-Medium;
			font-weight: 500;
			color: #000000;
			display: flex;
			align-items: center;
			justify-content: center;
			width: 100%;
			height: 300rpx;
		}
	}
	.commentModal{
		width: 100%;
		padding: 20rpx;
		.utext{
			width: 100%;
			padding: 20rpx;
			height: 200rpx;
			background: #f1f1f1;
			border-radius: 10rpx;
			.replytext{
				width: 100%;
				height: 100%;
				font-size: 24rpx;
				font-family: PingFang SC, PingFang SC-Regular;
				font-weight: 400;
				color: #000000;
				text-align: justify;
			}
			&.on{
				.replytext::after{
					content:"禁止发布内容和分类不符、营销推广类等内容，平台已引入AI智能机器人对您发布的信息进行自动检测，同时平台将加强巡查力度，整治不合规信息。";
					font-size: 24rpx;
					color:#8f8f8f;
				}
			}
		}
		.comtbtn{
			display: flex;
			justify-content: flex-end;
			margin-top: 20rpx;
			.btns{
				font-size: 24rpx;
				color:#FFFFFF;
				width: 160rpx;
				height: 60rpx;
				line-height: 60rpx;
				background-color: #FE694F;
				border-radius: 12rpx;
				text-align: center;
			}
		}
	}
</style>