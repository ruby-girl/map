<template>
	<div class="container" style="fontSize:14px;paddingBottom:80px;">
		<!--1-->
		<div class="m_d_tit" style="padding-top:30px;">
			<div style="padding-left:85%;"> <img src="http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/DSpersonl/fx.png" alt="" class="d_m_f" @click="toShare()"></div>
			<div class="flex_col" @click="toHeadURL()">
				<!--<img :src="list.headURL" alt="" class="tit_img">-->
				
             
              <img :src="headURL" alt="" class="tit_img">
							
           
				<div class="leve">{{level}}</div>
			</div>
			<div style="textAlign:center;margin:17px 0;">
				<i style="fontSize:19px;color:#fff;">{{list.mName}}</i>
				<i v-if="list.busyState!=5" style="color:rgb(0,255,0);fontSize:14px">(在线)</i>
				<i v-if="list.busyState==5" style="color:#e4393c;fontSize:14px">(忙碌中)</i>
			</div>
			<div class="flex m_d_bfb">

				<div>总成交：{{list.orderTotal}}</div>
				<div class="d_m_border">好评率：{{list.favorabe}}</div>
				<div>30天成交：{{list.monthOrder}}</div>

			</div>
		</div>
		<!--2-->
		<div class="flex_start m_content_tit">
			<div class="m_dian"></div>
			<div>大师详情</div>
			<div style="flex:1;text-align:right;padding-right:20px;color:#feb407" @click="toDetail()">编辑大师详情</div>
		</div>
		<div class="m_content">
			<div>
				{{list.masterDesc}}

			</div>
			<div class="flex_start" style="marginTop:15px;">

				<img :src="list.list[0]" alt="" class="d_m_content_img" v-if="list.list.length>0">
				<img :src="list.list[1]" alt="" style=" margin:0 1%;" class="d_m_content_img" v-if="list.list.length>1">
				<img :src="list.list[2]" alt="" class="d_m_content_img" v-if="list.list.length>2">

			</div>
				<div style="marginTop:10px;">
				<img :src="list.coverPath" alt="" class="d_m_ship">
			</div>
		</div>
		<!--3-->
		<div class="flex" style="height:40px;borderBottom:1px solid #eee;lineHeight:40px;">
			<div :class="{'d_m_f_tit':true,'borderB':cssNum==1}" @click="tosever()">我的服务</div>
			<div :class="{'d_m_f_tit':true,'borderB':cssNum==2}" @click="toUserList()">我的动态</div>
			<div :class="{'d_m_f_tit':true,'borderB':cssNum==3}" @click="touserHome()">我的评论</div>

		</div>
		<!--view-->
		<div v-show="cssNum==1">
			<div style="fontSize；14px;color:#757475">
				<!--1购买服务-->
				<div v-show="!showServe">
					<div style="textAlign:center;color:#e4393c;;margin:30px 0 60px 0;fontSize:15px;">该大师还没有添加服务呢！</div>
				</div>
				<div class="flex_be sever_list_DS" v-for="(item,i) in serve" v-show="showServe">
					<div>
						<div class="sever_list_name">{{item.serviceName}}</div>
						<div style="color:#332c2b;">
							<i style="color:#f95549;marginRight:3px;">{{item.price*item.discount}}</i>易道币</div>
					</div>
					<div class="flex" style="height:100%;">
						<div @click.stop="serveDel(item.sId)" style="width:40px;">删除</div>
						<div class="serve_e" @click="toEdit(item.sId)">编辑</div>
					</div>
				</div>
				<div v-show="showServe" @click="moreServe()" style="color:#f95549;textAlign:center;marginBottom:50px;"> 点击加载更多</div>
			</div>
		</div>

	
		<div style="padding: 20px 0;" v-show="cssNum==2">
			<div v-show='showc' class="ks-none" style="marginBottom:30px;fontSize:15px;">
				{{msgs}}
			</div>

			<router-link v-show='!showc' style="marginBottom:30px;" class="ks-ce-dong" key='0' v-for='it in art' :to="'/dong?aId='+it.aId">
				<div class="ks-ce-head">
					<img :src="it.thumbpails" alt="" width="100%" height="55px" />
				</div>
				<div class="ks-ce-tou">
					<div style="height: 30px;line-height: 30px;" class="ks-lu-p">
						{{it.title}}
					</div>
					<div style="display: flex;line-height: 30px;color:#888" class="ks-ce-icon">
						<div style="display: flex;text-align: center;">
							<div>
								<img :src="yj" alt="" width="16px" style="margin-top:8px;margin-right:5px;" />
							</div>
							<div>
								{{it.peekCount}}
							</div>
						</div>
						<div style="flex:1;text-align: center;">
							{{it.createTime}}
						</div>
						<div style="display: flex;text-align: center;">
							<div>
								<img :src="c1" alt="" width="16px" style="margin-top:7px;margin-right:5px;" />
							</div>
							<div>
								{{it.commentCount}}
							</div>
						</div>
					</div>
				</div>
				
			</router-link>
       <div v-show='!showc' style="text-align:center;color:red" @click="toMoreDong()">点击加载更多</div>
		</div>
		<!--3-->
		<div v-show="cssNum==3">
				<div>
					<div style="padding: 15px;font-size:15px;">
						总好评率：
						<span style="font-size:20px;color:#E4393C;">{{bfb.faverote}}</span>
						<span>共{{bfb.totalComment}}次评价</span>
					</div>
					<div class="ks-ce-p" style="padding:10px 15px;">
						<button :class="{isbtn:num==4?true:false}" @click='getComment(4)'>所有</button>
						<button :class="{isbtn:num==3?true:false}" @click='getComment(3)'>好评</button>
						<button :class="{isbtn:num==2?true:false}" @click='getComment(2)'>中评</button>
						<button :class="{isbtn:num==1?true:false}" @click='getComment(1)'>差评</button>
					</div>
				</div>
				<div v-if="comment.length>0" class="ks-ce-comment" v-for='it in comment' style="padding: 10px 0;border-bottom:1px solid #f5f5f5;" :key="">
					<div class="ks-ce-person" style="display: flex;">
						<div style="line-height: 25px;color:deepskyblue;">
							{{it.uName}}
						</div>
						<!--下面是星星-->
						<!--<div style="flex:1;line-height: 25px;padding-left:10px ;">
							<img style="display: inline-block;width: 16px;" :src='star' v-for='i in it.ocScore' :key="">
						</div>-->
						<div style="flex:1;line-height: 25px;text-align: right;">
							{{it.createTime}}
						</div>
					</div>
					<div class="ks-comment-content">
						{{it.content}}
					</div>
				</div>
				<div v-if="comment.length==0"  style="text-align:center;fontSize:15px;padding:10px 0;color:red;margin:40px 0;">
			暂无评价
			</div>
				<div class="ks-ce-all" v-if="comment.length>0" style="marginBottom:30px;" @click="toMoreCom()">
					<button class="ks-all-btn">查看更多</button>
				</div>
		
		</div>
		<!--4-->

		<!--4-->
		<div class="flex_fixed" style="height:40px;borderTop:1px solid #eee" v-if="cssNum==1">

			<div class="flex" style="width:100%;" @click="addServe()">
				<img src="http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/DSpersonl/lvJia.png" alt="" class="d_m_f">
				<div>添加服务</div>
			</div>
			</div>
			<div class="flex_fixed" style="height:40px;borderTop:1px solid #eee" v-if="cssNum==2">
				<div class="flex" style="width:100%;" @click="dong()"  >
				<img src="http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/DSpersonl/lvJia.png" alt="" class="d_m_f">
				<div>添加动态</div>
			</div>
			</div>
	</div>
</template>
<script>
import Navs from '../../components/nav';
import btn from '../../components/button';
import share from '../../share';
import httputil from '../../httputil'
	import upload from '../../components/upload'; 
//  import sever from '../../components/detail/page1';

export default {
	components: {
		Navs, btn,upload
	},
	data() {
		return {
			list: [],
			ac: 4,
			leve: null,
			cssNum: 1,
			level: '',
			busyState: '',
			value: null,
			serve: [],
			ti:'h',
			head:null,
			headURL:null,
			showServe: true,
			page: 1,
			Dpage:1,
			showc: false,
			msgs: '还没有动态哦！',
			art: [],
			d1: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/cesuan/d1.png',
			c1: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/cesuan/c.png',
			yj: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/cesuan/2.png',
			showCom: false,
			msg: '',
			comment: [],
			num: 4,
			cpage: 1,
			js: '',
			bfb: '',
			star: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/cesuan/star.png',
			sCode: null
		}
	},
	created() {
		document.title = '个人中心'
		window.h5GetImageUrl = this.tohead
	},
	mounted: function() {
		this.$nextTick(() => {

			this.getInfor()
			this.getServer()
		})

	},
	methods: {
    toHeadURL(){
        let ua = navigator.userAgent.toLowerCase();
					 	if (/iphone|ipad|ipod/.test(ua)) {
         window.webkit.messageHandlers.iOS.postMessage({17:{'type':3}})  
        }else if(/android/.test(ua)){			
          window.YiDao.bussinessDistribute(32,JSON.stringify({'type':3})
					);
        }
			
			
		},
		tohead(m){
       if(m){	
				 this.head=m	 
				 httputil.doRequest('/Master/masterUpdateUHead', {'masterHead':m}, 1, this.onHeadSuccess, this.onHeadError, true)			 
			 }else{
         return
			 }
		},
		onHeadError(res){
			this.$dialog.alert({ mes: res })
		},
		onHeadSuccess(res){
			this.headURL=this.head
		},
		getInfor() {

			httputil.doRequest('/FindMaster/masterDetails', null, 1, this.onInforSuccess, this.onInforError, true)
		},
		dong(){
			this.$router.push('/article')
		},
		onInforSuccess(res) {
			this.list = res;
			this.headURL=res.headURL
			if (res.mLevel == 1) {
				this.level = '初级'
			} else if (res.mLevel == 2) {
				this.level = '中级'
			} else {
				this.level = '高级'
			}
		},
		onInforError(res) {
			this.$dialog.toast({
				mes: res.message,
				timeout: 1500
			});
		},
		tosever() {
			this.cssNum = 1
			document.title = '个人中心-服务项目'
      
		},

		toUserList() {
			this.cssNum = 2
			this.getAticle()
			document.title = '个人中心-大师动态'
		},
		touserHome() {
			this.cssNum = 3
			document.title = '个人中心-大师评论'
		this.getComment(4)
		},

		toastNone() {
			httputil.doRequest('/FindMaster/userMasterCollect', null, 1, this.onNoneSuccess, null, flase)
		},
		onNoneSuccess(res) {
			this.getInfor();
			this.$dialog.toast({
				mes: res.message,
				timeout: 1500
			});
		},
		oncodeSuccess(res) {
			let code = res.object
			share.toShare('大师介绍', 'masterDetail?code=' + code + '&mid=' + this.list.masterId, this.list.headURL)
		},
		oncodeError(res) {
			this.$dialog.alert({ mes: res })
		},
		toShare() {
			httputil.doRequest('/Common/getShareCode', { 'sType': 39 }, 1, this.oncodeSuccess, this.oncodeError, true)

		},
		getServer() {
			this.page = 1
			httputil.doRequest('/Master/masterMyselfServiceList', { 'sta': this.page }, 1, this.onsSuccess, this.onsError, true)
		},
		onsSuccess(res) {
			if (res.list.length == 0) {
				this.showServe = false
			} else {
				this.page++
				this.serve = res.list
			}
		},
		onsError() {
			this.$dialog.alert({
				mes: res.message
			})
		},
		moreServe() {
			httputil.doRequest('/Master/masterMyselfServiceList', { 'sta': this.page }, 1, this.onMoreSuccess, this.onError, true)
		},
		onMoreSuccess(res) {
			if (res.list.length == 0) {
				this.$dialog.alert({
					mes: '没有更多了哟！'
				})
			} else {
				this.page++
				this.serve = this.serve.concat(res.list)
			}
		},
		toEdit(i) {
			this.$router.push('addServe?sId=' + i)
		},
		serveDel(i) {
			httputil.doRequest('/Master/masterServiceCancel', { 'sId': i }, 1, this.onSSuccess, null, true)

		},
		onSSuccess(res) {
			this.$dialog.alert({
				mes: '删除成功！', callback: () => {
					this.getServer()
				}
			})
		},
		getAticle() {
			httputil.doRequest('/FindMaster/masterArticleList', {'sta':this.Dpage}, 1, this.onAticleSuccess, this.onAticleError, true)
		},
		onAticleSuccess(res) {
			if (res == 0) {
				this.showc = true;
				this.msg = '暂时无人评价'
			} else {
				this.art = res;
			}
		},
		onAticleError(res) {
			this.showc = true
		},
			toMoreDong(){
     this.Dpage++
			httputil.doRequest('/FindMaster/masterArticleList', {'sta':this.Dpage}, 1, this.onAMoSuccess, this.onAMoError, false)
		},
		onAMoSuccess(res){
       this.art=this.art.concat(res)
		},
		onAMoError(res){
			if(this.Dpage>1){
				this.Dpage--
			}
       	this.$dialog.toast({
					mes: '没有更多动态了！',
					timeout: 1500
				});
		},
		onAicSuccess(res) {
			this.showCom = true;
			this.comment = res.page.list;
			this.bfb = res.extendString

		},
		onAicError(res) {
			this.showCom = false;
		},
		getComment(num) {
			this.num = num;
			httputil.doRequest('/FindMaster/userMasterSeeUserComment', { 'type': num, 'sta': this.cpage }, 1, this.onAicSuccess, this.onAicError, true)
		},
		toMoreCom() {
			this.cpage++
			httputil.doRequest('/FindMaster/userMasterSeeUserComment', { 'type': this.num, 'sta': this.cpage }, 1, this.onAicMoreSuccess, this.onAicMoreError, true)
		},
		onAicMoreSuccess(res) {
			if (res.page.list.length > 0) {
				this.comment = this.comment.concat(res.page.list);
			} else {
				this.cpage--
				this.$dialog.toast({
					mes: '没有更多评价了！',
					timeout: 1500
				});
			}

		},
		onAicMoreError(res) {
			this.$dialog.toast({
				mes: '没有更多评价了！',
				timeout: 1500
			});
		},
		GetRequest() {
			let url = window.location.hash
			let subStrs = url.split("?")

			this.send = subStrs[1]

			let li = this.send.split('&')

			var i = li[0].lastIndexOf("code")
			this.sCode = i
			console.log(i)
		},
		//  增加的编辑功能
		toDetail() {
			this.$router.push('/updateJiesao')
		},
		addServe() {
			this.$router.push('/addServe')
		}
	},
	watch: {

	}
}
</script>
<style type="text/css">
.m_d_tit {
	height: 230px;
	background: #0f111d;
	color: #5f5d5d;
}

.flex {
	display: flex;
	justify-content: center;
	align-items: center;
}

.flex_start {
	display: flex;
	justify-content: flex-start;
	align-items: center;
}

.flex_fixed {
	position: fixed;
	background: #fff;
	width: 100%;
	bottom: 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.flex_be {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.flex_col {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

.leve {
	margin-top: -5px;
	width: 50px;

	background: #feb407;
	color: #fff;
	text-align: center;
	border-radius: 3px;
}

.tit_img {

	width: 87px;
	height: 87px;
	border-radius: 50%;
}

.m_d_bfb {
	color: #fefefe;
	font-size: 13px;
}

.d_m_border {
	width: 35%;
	text-align: center;
	padding: 0 1%;
	border-left: 2px solid #fefefe;
	border-right: 2px solid #fefefe;
	margin: 0 3%;
}

.m_content_tit {
	background: #f2f2f2;
	height: 40px;
	padding-left: 5px;
}

.m_dian {
	margin-top: -3px;
	height: 15px;
	width: 3px;
	background: #332c2b;
	margin-right: 10px;
}

.m_dian+div {
	font-size: 17px;
}

.m_content {
	padding: 10px 15px;
	color: #5f5d5d;
	border-bottom: 10px solid #f2f2f2;
}

.d_m_content_img {
	width: 32%;
}

.d_m_ship {
	width: 100%;
	height: 146px;
}

.d_m_f_tit {
	width: 33%;
	text-align: center;
	font-size: 14px;
	color: #5f5d5d;
	border-bottom: 3px solid transparent;
}

.d_m_f {
	width: 20px;
	margin-right: 5px;
}

.d_m_f+div {
	font-size: 16px;
	color: #5f5d5d;
}

.borderB {
	border-bottom: 3px solid #e4393c;
}

.sever_list_DS{
	height: 65px;
	padding: 0 15px;
	margin-bottom: 20px;
	border-bottom: 1px solid #eee;
	border-top: 1px solid #eee;
}

.sever_list_name {
	font-size: 15px;
	margin-bottom: 5px;
	color: #332c2b;
	width: 80px;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
}

.serve_e {
	height: 100%;
	background: #f57767;
	color: #fff;
	line-height: 58px;
	padding: 0 28px;
	margin-left: 25px;
}
</style>