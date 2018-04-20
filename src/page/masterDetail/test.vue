<template>
	<div class="container" style="fontSize:14px;paddingBottom:80px;">
		<!--1-->
		<div class="m_d_tit">
			<!--<div v-if="sCode==-1" style="text-align: right;font-size: 14px;color:deepskyblue;padding:25px 10px 0 0;" @click='goSu()'>
				投诉
			</div>
			<div class="flex_col">
				<img :src="list.headURL" alt="" class="tit_img">
				<div class="leve">{{level}}</div>
			</div>
			<div style="textAlign:center;margin:17px 0;">
				<i style="fontSize:19px;color:#fff;">{{list.mName}}</i>
				<i v-if="list.state==1" style="color:rgb(0,255,0);fontSize:14px">(在线)</i>
				<i v-if="list.state==0" style="color:rgb(0,255,0);fontSize:14px">(离线)</i>
				<i v-if="list.state==3" style="color:rgb(0,255,0);fontSize:14px">(闭关)</i>
				<i v-if="list.state==2" style="color:#e4393c;fontSize:14px">(忙碌中)</i>
			</div>
			<div class="flex m_d_bfb">

				<div>总成交：{{list.orderTotal}}</div>
				<div class="d_m_border">好评率：{{list.favorabe}}</div>
				<div>30天成交：{{list.monthOrder}}</div>

			</div>-->
      <div>
				<img width="100%" :src="list.coverPath" alt="">
			</div>
			<div style="position:absolute;width:100%;text-align:center;bottom:0;background:rgba(0,0,0,0.3);padding:3px 0;">
        <i style="fontSize:19px;color:#fff;">{{list.mName}}</i>
				<i class="leve">{{level}}</i>
				<i v-if="list.state==1" style="color:rgb(0,255,0);fontSize:14px">(在线)</i>
				<i v-if="list.state==0" style="color:rgb(0,255,0);fontSize:14px">(离线)</i>
				<i v-if="list.state==3" style="color:rgb(0,255,0);fontSize:14px">(闭关)</i>
				<i v-if="list.state==2" style="color:#e4393c;fontSize:14px">(忙碌中)</i>
			</div>
		</div>
		<!--百分比-->
			<div class="flex m_d_bfb">

				<div>总成交：{{list.orderTotal}}</div>
				<div class="d_m_border">好评率：{{list.favorabe}}</div>
				<div>30天成交：{{list.monthOrder}}</div>

			</div>
		<!--2-->
		<div class="flex_start m_content_tit">
			<div class="m_dian"></div>
			<div>大师详情</div>
		</div>
		<div class="m_content">
			<div>
				{{list.masterDesc}}

			</div>
			<div class="flex_start" style="marginTop:15px;">

				<img :src="list.list[0]" alt="" class="d_m_content_img" v-if="list.list.length>0">
				<img :src="list.list[1]" alt="" class="d_m_content_img" style="margin:0 1%;" v-if="list.list.length>1">
				<img :src="list.list[2]" alt="" class="d_m_content_img" v-if="list.list.length>2">

			</div>
			<!--video显示。下个版本-->
			
		</div>
		<!--3-->
		<div class="flex" style="height:40px;borderBottom:1px solid #eee;lineHeight:40px;">
			<div :class="{'d_m_f_tit':true,'borderB':cssNum==1}" @click="tosever()">服务项目</div>
			<div :class="{'d_m_f_tit':true,'borderB':cssNum==2}" @click="toUserList()">大师动态</div>
			<div :class="{'d_m_f_tit':true,'borderB':cssNum==3}" @click="touserHome()">大师评论</div>
			<div :class="{'d_m_f_tit':true,'borderB':cssNum==4}" @click="tosomeQuestion()">常见问题</div>
		</div>
		<!--view-->
		<div v-show="cssNum==1">
			<div style="fontSize；14px;color:#757475">
				<!--1购买服务-->
				<div v-show="!showServe">
					<div style="textAlign:center;color:#e4393c;;margin:30px 0 60px 0;fontSize:15px;">该大师还没有添加服务呢！</div>
				</div>
				<div @click="toserveResult(item.sId)" :class="{'sever_list':true,'bc_0':i==0||i/10==1,'bc_1':i==1||i-10==1||i-20==1,'bc_2':i==2||i-10==2||i-20==2,'bc_3':i==3||i-10==3||i-20==3,'bc_4':i==4||i-10==4||i-20==4,'bc_5':i==5||i-10==5||i-20==5,'bc_6':i==6||i-10==6||i-20==6,'bc_7':i==7||i-10==7||i-20==7,'bc_8':i==8||i-10==8||i-20==8,'bc_9':i==9||i-10==9||i-20==9}" v-for="(item,i) in serve" v-show="showServe" :key="i">
          <div class="flex_be sever_top">
						<span style="font-size:18px;">{{item.serviceName}}</span>
						<div :class="{'serve_money':true,'c_0':i==0||i/10==1,'c_1':i==1||i-10==1||i-20==1,'c_2':i==2||i-10==2||i-20==2,'c_3':i==3||i-10==3||i-20==3,'c_4':i==4||i-10==4||i-20==4,'c_5':i==5||i-10==5||i-20==5,'c_6':i==6||i-10==6||i-20==6,'c_7':i==7||i-10==7||i-20==7,'c_8':i==8||i-10==8||i-20==8,'c_9':i==9||i-10==9||i-20==9}">￥{{item.price*item.discount}}/次</div>
					</div>
          <div class="serve_bottom">{{item.serviceDesc}}</div>
				</div>
				<div v-show="showServe" @click="moreServe()" style="color:#f95549;textAlign:center;margin:30px 0;"> 点击加载更多</div>
			</div>
		</div>

		<!--<sever></sever>-->
		<div style="padding: 20px 0;" v-show="cssNum==2">
			<div v-show='showc' class="ks-none" style="marginBottom:30px;fontSize:15px;">
				{{msgs}}
			</div>

			<router-link v-show='!showc' style="marginBottom:30px;" class="ks-ce-dong" key='0' v-for='it in art' :to="'/dong?aId='+it.aId">
				<div class="ks-ce-head">
					<img :src="d1" alt="" width="100%" height="65px" />
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
		<div style="marginBottom:50px;" v-show="cssNum==4">
			<div style="padding: 15px;">
				<div class="ks-test-content">
					<div class="ks-test-title">如何知道师傅水平的高低？</div>
					<div class="ks-test-think" style="text-indent: 30px;">
						易道服务平台是一个非常专业的玄学服务平台，每一位师傅都是经过严格的筛选。即使通过 申请成为玄学大师，也是需要考试问答通过后，才拥有预测资格，并且会做出相应的评级。
					</div>
				</div>
			</div>
			<div style="padding: 15px;">
				<div class="ks-test-content">
					<div class="ks-test-title">购买服务后能否退款？</div>
					<div class="ks-test-think" style="text-indent: 30px;">
						这是一款特殊服务，一旦建立咨询业务就无法退款，只有在下单24小时后， 师傅没有回复你的情况下，或是下单后没有咨询，才能通过客户申请退款。
					</div>
				</div>
			</div>
		</div>
		<!--4-->
		<div class="flex_fixed" style="height:40px;borderTop:1px solid #eee" v-if="sCode==-1">
			<div class="flex" style="width:50%;borderRight:2px solid #aeaeae;" @click='toastNone()'>
				<img src="../../../static/img/1.png" alt="" class="d_m_f" v-if="list.isCollect=='0'">
				<img src="../../../static/img/3.png" alt="" class="d_m_f" v-if="list.isCollect=='1'">
				<div style="margin-left:10px;">{{list.isCollect=='0'?'收藏TA':'已收藏'}}</div>
			</div>
			<div class="flex" style="width:50%;" @click="toShare()">
				<img src="../../../static/img/2.png" alt="" class="d_m_f">
				<div>分享</div>
			</div>
		</div>
	</div>
</template>
<script>
import Navs from '../../components/nav';
import btn from '../../components/button';
import share from '../../share';
import httputil from '../../httputil'
//  import sever from '../../components/detail/page1';

export default {
	components: {
		Navs, btn
	},
	data() {
		return {
			Dpage:1,
			list: [],
			ac: 4,
			leve: null,
			cssNum: 1,
			level: '',
			busyState: '',
			value: null,
			serve: [],
			showServe: true,
			page: 1,
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
			sCode: null,
			ref:null
		}
	},
	created() {
		document.title = '大师详情'
		this.ref=window.location.href;
	},
	mounted: function() {
		this.$nextTick(() => {
			if (this.$route.query.mid) {
				this.rid = this.$route.query.mid;

				sessionStorage.setItem('rid', this.rid)
			} else {
				this.rid = sessionStorage.getItem('rid')
			}
			this.getInfor()
			this.getServer()
			this.GetRequest()
		})

	},
	methods: {
		getInfor() {

			httputil.doRequest('/FindMaster/masterDetails', { 'masterId': this.rid }, 1, this.onInforSuccess, this.onInforError, false)
		},
		onInforSuccess(res) {
			this.list = res;
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
			document.title = '大师详情-服务项目'
		},
		toUserList() {
			this.cssNum = 2
			this.getAticle()
			document.title = '大师详情-大师动态'
		},
		touserHome() {
			this.cssNum = 3
			document.title = '大师详情-大师评论'
		 	this.getComment(4)
		},
		tosomeQuestion() {
			this.cssNum = 4
			document.title = '大师详情-常见问题'
		},
		//  获取大师信息
		onSuccess(res) {
			this.list = res;
			if (res.mLevel == 1) {
				this.level = '中级'
			} else if (res.mLevel == 2) {
				this.level = '中级'
			} else {
				this.level = '高级'
			}
		},
		toastNone() {
			httputil.doRequest('/FindMaster/userMasterCollect', { 'masterId': this.rid }, 1, this.onNoneSuccess, this.oncodeError, true)
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
			share.toShare('大师介绍', 'masterDetail?code=' + code + '&mid=' + this.$route.query.mid, this.list.headURL)
		},
		oncodeError(res) {
			this.$dialog.alert({ mes: res })
		},
		toShare() {
			httputil.doRequest('/Common/getShareCode', { 'sType': 39 }, 1, this.oncodeSuccess, this.oncodeError, true)

		},
		goSu() {

			this.$router.push('/tousu?mid=' + this.rid)
		},
		getServer() {

			httputil.doRequest('/FindMaster/masterServiceList', { 'masterId': this.rid, 'sta': 1 }, 1, this.onsSuccess, this.onsError, false)
		},
		onsSuccess(res) {
			if (res.list.length == 0) {
				this.showServe = false
			} else {
				this.page++
				this.serve = res.list
				
			}
		},
		onsError(res) {
			this.$dialog.alert({
				mes: res.message
			})
		},
		moreServe() {
			httputil.doRequest('/FindMaster/masterServiceList', { 'masterId': this.rid, 'sta': this.page }, 1, this.onMoreSuccess, this.onError, false)
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
		toserveResult(i) {
			this.$router.push('/serveResult?sId=' + i + '&masterId=' + this.rId + '&busyState=' + this.list.state+'&state='+this.list.state+'&ref='+this.ref)
		},
		toPay(i) {

			console.log(this.code)
			if (this.sCode != -1) {
				this.$dialog.confirm({

					mes: '是否前往官网下载微易道APP',
					opts: () => {
						window.location = "https://www.kushanbaoli.com";
					}
				});
			} else {
				if (this.list.busyState > 5 || this.list.busyState == 5) {
					this.$dialog.toast({

						mes: '这位大师已经爆单啦！稍后再来哦！',
						timeout: 2000
					});
				} else {
					if(this.list.state==0||this.list.state==3){
						this.$dialog.toast({

						mes: '这位大师暂时无法接收订单哦！',
						timeout: 2000
					 });
					}else{
             	var n = this.serve[i]
					this.$router.push('/pay?sId=' + n.sId + '&txt=' + n.serviceName + '&num=' + n.price * n.discount + '&masterId=' + this.rId+'&ref='+this.ref)
					}		
				}

			}

		},
		// 下面是动态
		getAticle(){
			httputil.doRequest('/FindMaster/masterArticleList', { 'masterId': this.rid,'sta':this.Dpage}, 1, this.onAticleSuccess, this.onAticleError, false)
		},
		// 更多动态
		toMoreDong(){
     this.Dpage++
			httputil.doRequest('/FindMaster/masterArticleList', { 'masterId': this.rid,'sta':this.Dpage}, 1, this.onAMoSuccess, this.onAMoError, false)
		},
		onAMoSuccess(res){
       this.art=this.art.concat(res)
		},
		onAMoError(res){
       	this.$dialog.toast({
					mes: '没有更多动态了！',
					timeout: 1500
				});
		},
		onAticleSuccess(res) {		
				this.art = res;
		},
		onAticleError(res) {
			this.showc = true
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
			httputil.doRequest('/FindMaster/userMasterSeeUserComment', { 'masterId': this.rid, 'type': num, 'sta': this.cpage }, 1, this.onAicSuccess, this.onAicError, false)
		},
		toMoreCom() {
			this.cpage++
			httputil.doRequest('/FindMaster/userMasterSeeUserComment', { 'masterId': this.rid, 'type': this.num, 'sta': this.cpage}, 1, this.onAicMoreSuccess, this.onAicMoreError, false)
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
		}
	},
	watch: {

	}
}
</script>
<style type="text/css">
.m_d_tit {
	min-height: 100px;
	color: #5f5d5d;
	position: relative;
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
	padding: 0 5px;
display: inline-block;
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
.serve_bottom{
		overflow:hidden; 
text-overflow:ellipsis;
display:-webkit-box; 
-webkit-box-orient:vertical;
-webkit-line-clamp:3; 
border-top:1px solid #fff;
padding-top: 5px;
}
.m_d_bfb {
	color: #fefefe;
	font-size: 13px;
	background: #0f111d;
	height:26px;
	padding: 3px 0;
	
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
	max-width: 100%;
}

.d_m_f_tit {
	width: 25%;
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

.sever_list {
	background: #5bbcaa;
	padding:15px;
	padding-top:0;
	min-height: 110px;
	margin:20px 20px 0 20px;
	color:#fff;
	border-radius: 8px;
}
.sever_top{
	height:44px;
	line-height: 44px;
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

.sever_pay {
	height: 100%;
	background: #f57767;
	color: #fff;
	line-height: 58px;
	padding: 0 15px;
	margin-left: 25px;
}
.bc_0{
	background: #5bbcaa;
}
.bc_1{
	background: #eb5d69;
}
.bc_2{
	background: #f38365;
}
.bc_3{
	background: #97bc89;
}
.bc_4{
	background: #f96648;
}
.bc_5{
	background: #cd7a5a;
}
.bc_6{
	background: #00904b;
}
.bc_7{
	background: #174e6d;
}
.bc_8{
	background: #5bbcaa;
}
.bc_9{
	background: #eb5d69;
}
.c_0{
	color: #5bbcaa;
}
.c_1{
	color: #eb5d69;
}
.c_2{
	color: #f38365;
}
.c_3{
	color: #97bc89;
}
.c_4{
	color: #f96648;
}
.c_5{
	color: #cd7a5a;
}
.c_6{
	color: #00904b;
}
.c_7{
	color: #174e6d;
}
.c_8{
	color: #5bbcaa;
}
.c_9{
	color: #eb5d69;
}
.serve_money{
	margin-right: 12px;
	background: #fff;
	height:30px;
	width:70px;
	text-align: center;
	line-height: 30px;
	border-radius: 15px;
}
</style>