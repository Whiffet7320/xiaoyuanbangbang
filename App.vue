<script>
	import {mapState} from "vuex";
	export default {
		computed: {
			...mapState(['musicPaused', 'isShudong']),
		},
		globalData: {
			count: 0,
		},
		watch: {
			count: function() {
				console.log(this.count)
				if (this.count > 0) {
					uni.setTabBarBadge({
						index: 2,
						text: this.count > 99 ? "99+" : this.count.toString()
					})
				} else {
					uni.removeTabBarBadge({
						index: 2
					});
				}
			}
		},
		onLaunch() {
			console.log("onLaunch");
			this.getMsg();
		},
		onShow() {
			console.log("onShow");
			wx.onAudioInterruptionBegin(() => {
				console.log(this.isShudong, !this.musicPaused, 111)
				if (this.isShudong && !this.musicPaused) {
					console.log('aaaa')
					this.$innerAudioContext.play()
					console.log('bbbb')
				}
			})
		},
		methods: {
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
			}
		}
	}
</script>

<style lang="scss">
	@import "uview-ui/index.scss";
</style>
