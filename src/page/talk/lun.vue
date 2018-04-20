<template>
	<div>
		<load v-show='show'></load>
		<div v-show='!show'>
			<div class="talkTit">
				<div :class="{'talkLeft':true,'talkBC':num==1}" @click="num=1">最新</div>
				<div :class="{'talkLeft':true,'talkBC':num==2}" @click="num=2">最热</div>
			</div>
			<div v-show="num==1">
				<router-link :to="'/allInfor?id='+it.dId" v-for='(it,index) in arr' :key="index">
					<div class="ks-ce-dong" style="border:0">
						<div>
							<img :src="it.headURL" alt="" width="55px" height="55px" style="border-radius:50%;" />
						</div>
						<div style="display: flex;font-size:14px;margin-left: 10px;">
							<div style="" class="ks-lu-p">
								<div style="margin-top:3px;font-size:16px;">
									{{it.uName}}
								</div>
								<div style="color:gray">
									{{it.createTime}}
								</div>
							</div>
						</div>
					</div>
					<div style="padding: 0 15px;font-size:15px;">
						{{it.title}}
					</div>
					<div style="padding: 5px 15px;font-size: 14px;">
						{{it.content}}
					</div>
					<div class="ks-c-f" style="padding: 10px 0;border-bottom: 2px solid #eee;">
						<div></div>
						<div style="display: flex;font-size:14px;">
							<div style="display: flex;flex:1;">
								<div>
									<img :src="c" alt="" width="18px" />
								</div>
								<div style="margin-left:10px;">{{it.peekCount}}</div>
							</div>
							<div style="display: flex;flex:1;">
								<div>
									<img :src="d" alt="" width="18px" />
								</div>
								<div style="margin-left:15px;">{{it.commentCount}}</div>
							</div>
						</div>

					</div>
				</router-link>
				<div class="ks-ce-all" style="margin:50px 0;">
					<button class="ks-all-btn" @click='getMore()'>加载更多</button>
				</div>
			</div>
			<!--最热-->
			<div v-show="num==2">
				<router-link :to="'/allInfor?id='+it.dId" v-for='(it,index) in Hotarr' :key="index">
					<div class="ks-ce-dong" style="border:0">
						<div>
							<img :src="it.headURL" alt="" width="55px" height="55px" style="border-radius:50%;" />
						</div>
						<div style="display: flex;font-size:14px;margin-left: 10px;">
							<div style="" class="ks-lu-p">
								<div style="margin-top:3px;font-size:16px;">
									{{it.uName}}
								</div>
								<div style="color:gray">
									{{it.createTime}}
								</div>
							</div>
						</div>
					</div>
					<div style="padding: 0 15px;font-size:15px;">
						{{it.title}}
					</div>
					<div style="padding: 5px 15px;font-size: 14px;">
						{{it.content}}
					</div>
					<div class="ks-c-f" style="padding: 10px 0;border-bottom: 2px solid #eee;">
						<div></div>
						<div style="display: flex;font-size:14px;">
							<div style="display: flex;flex:1;">
								<div>
									<img :src="c" alt="" width="18px" />
								</div>
								<div style="margin-left:10px;">{{it.peekCount}}</div>
							</div>
							<div style="display: flex;flex:1;">
								<div>
									<img :src="d" alt="" width="18px" />
								</div>
								<div style="margin-left:15px;">{{it.commentCount}}</div>
							</div>
						</div>

					</div>
				</router-link>
				<div class="ks-ce-all" style="margin:50px 0;">
					<button class="ks-all-btn" @click='getHotMore()'>加载更多</button>
				</div>
			</div>
		
				<div @click="goClick()"  class="write_lun">
				<img :src="t" alt="" style="width:100%;height:100%;">
				<div>发<br>布<br>讨<br>论</div>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
import httputil from '../../httputil';
import load from '../../components/loading';
export default {
	components: {
		load
	},
	data() {
		return {
			pic: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/talk/3.1.png',
			c: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/talk/1.6.png',
			d: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/cesuan/c.png',
			t: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/talk/tt.png',
			arr: [],
			page: 1,
			show: true,
			js: '',
			num: 1,
			Hpage:1,
			Hotarr:[]
		}
	},
	mounted() {
		this.page = 1
		this.getList()
	},
	methods: {
		goClick() {
				let type = navigator.userAgent.toLowerCase(); 
			 if (/iphone|ipad|ipod/.test(type)) {
			   	   if(window.getJSessionId()){
							
			   		  this.$router.push('/allUser')
			   	}else{
			   		window.webkit.messageHandlers.iOS.postMessage({4:{'windowID':10000}})	
					
			   		}
			   }else if(/android/.test(type)){
			   	if(window.YiDao.getJSessionId()){
						
			   		this.$router.push('/allUser')
			   	}else{
			   		window.YiDao.bussinessDistribute(4,"{'windowID':10000}")
			   		}
			   	 
			   }else{
			   	 window.location="https://www.kushanbaoli.com";
			   }

		},
		getList() {
			httputil.doRequest('/Quiz/allPeopleDicuss', { 'sta': this.page }, 1, this.onSuccess, null, false)
			// 最热
			httputil.doRequest('/Quiz/getAllPeopleDicussHot', { 'sta': this.Hpage }, 1, this.onHotSuccess, null, false)
		},
		onSuccess(res) {
			this.show = false
			this.arr = res.list
		},
		onHotSuccess(res){
      this.show = false
			this.Hotarr = res.list
		},
		getHotMore(res){
			this.Hpage++
			this.$dialog.loading.open('努力加载中...');
			httputil.doRequest('/Quiz/getAllPeopleDicussHot', { 'sta': this.Hpage }, 1, this.onMoreHotSuccess, null, false)
		},
		onMoreHotSuccess(res){
      this.$dialog.loading.close();
			this.show = false
			if (res.list.length > 0) {
				this.Hotarr = this.Hotarr.concat(res.list)
			} else {
				if (this.Hpage > 1) {
					this.Hpage--;
				}
				this.$dialog.toast({
					mes: '被你看完了！',
					timeout: 1500
				});
			}
		},
		getMore() {
			this.page++;
			this.$dialog.loading.open('努力加载中...');
			httputil.doRequest('/Quiz/allPeopleDicuss', { 'sta': this.page }, 1, this.onMoreSuccess, null, false)

		},
		onMoreSuccess(res) {
			this.$dialog.loading.close();
			this.show = false
			if (res.list.length > 0) {
				this.arr = this.arr.concat(res.list)
			} else {
				if (this.page > 1) {
					this.page--;
				}
				this.$dialog.toast({
					mes: '被你看完了！',
					timeout: 1500
				});
			}
		}
	}
}
</script>
<style scoped>
.talkTit {
	display: flex;
	justify-content: center;
	padding: 10px 0 10px 0;
	border-bottom: 4px solid #eee;
}

.talkLeft {
	height: 33px;
	line-height: 33px;
	border: 1px solid #3ec0d0;
	padding: 0 13px;
}

.talkBC {
	background: #3ec0d0;
	color: #fff;
}
.write_lun{
	position: fixed;
	bottom: 30px;
	right: 15px;
	width: 40px;
	border-radius: 4px;
	padding-bottom: 5px;
	text-align: center;
	color:#fff;
	font-size: 15px;
	background: #1A81FB;
}
</style>
