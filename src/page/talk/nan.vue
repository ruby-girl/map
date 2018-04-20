<template>
	<div style="padding: 5px 15px;">
		<load v-show='show'></load>
		<div v-show='!show'>
		<!--最新最热按钮-->
		 <div class="talkTit">
			 <div style="width:25%;" :class="{'talkLeft':true,'talkBC':num==1}" @click="getArr(1)">最新</div>
			 <div style="width:25%;" :class="{'talkLeft':true,'talkBC':num==2}" @click="getArr(2)">未采纳</div>
			 <div style="width:25%;" :class="{'talkLeft':true,'talkBC':num==3}" @click="getArr(3)">进行中</div>
			 <div style="width:25%;" :class="{'talkLeft':true,'talkBC':num==4}" @click="getArr(4)">已完成</div>
		 </div>
		 <div v-show="!showList" style="text-align:center;margin-top:40px;color:#e4393c;font-size:14px;">
			 空的！也许，你可以试试点击其他的地方！
		 </div>
			<div v-show="showList">
				<div style="padding:10px;box-shadow: 0 0 8px #ccc;margin-bottom:10px;border-radius:8px;position:relative;" v-for='it in arr'>
					<div  @click="toTalkInfor(it.qId,it.qType,it.qState)"   v-if="it.qState==1">
						<div style="height:25px;padding:0 10px;" v-show="it.qType==1">
										<div style="float:right;line-height: 20px;color:#E4393C">
											￥{{it.balanceMoney/100}}
										</div>
										<div style="float:right;line-height: 25px;">
										
											<div class="nanSheng">剩余</div>
										</div>
										<div style="float:right;line-height: 20px;color:#E4393C">
											￥{{it.rewardMoney/100}}
										</div>
										<div style="float:right;line-height: 25px;">
											<div class="nanSheng nanShang">悬赏</div>
										</div>
									</div>
						<div style="display: flex;padding:0 10px;">
							<div style="width:20%">
								<img :src="it.headURL" width="100%"  alt="" style="border-radius:50%;"/>
							</div>
							<div style="flex:1;padding-left:10px ;line-height: 25px;font-size:15px;position: relative;">
								<div style="display: flex;">
									<div style="font-weight: 800;">{{it.uName}}</div>
									<!--<div style="flex:1;" v-show="it.qType==1">
										<div style="float:right;line-height: 20px;color:#E4393C">
											￥{{it.balanceMoney/100}}
										</div>
										<div style="float:right;line-height: 25px;">
										
											<div class="nanSheng">剩余</div>
										</div>
										<div style="float:right;line-height: 20px;color:#E4393C">
											￥{{it.rewardMoney/100}}
										</div>
										<div style="float:right;line-height: 25px;">
											<div class="nanSheng nanShang">悬赏</div>
										</div>
									</div>-->
									<img v-show="it.qType==0" width="50px" :src="m" alt="" style="position: absolute;right:-10px;top:-10px" />
								</div>
								<div class="ks-nav">{{it.content}}</div>
							</div>
						</div>
						<div style="padding-top: 8px;font-size:14px;display: flex;color:#ccc">
							<div>{{it.answerCount}}人回答 |</div>
							<div>{{it.createTime}}</div>
							<div style="flex:1;text-align: right;">

								<div style="float:right;color:#E4393C;line-height: 18px;">
									{{it.peekCount}}
								</div>
								<div style="float:right;">
									<img :src="s1" alt="" width="15" style="display: inline-block;margin:3px 5px" />
								</div>

							</div>
						</div>
						</div>
						<div  @click="toTalkInfor(it.qId,it.qType,it.qState)"  v-if="it.qState==0" style="position:relative">
						 <img width="100%" src="http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/talk/shadow.png" alt="">
						 <img style="width:20%;position:absolute;bottom:0;left:20%;" src="http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/talk/mimi.png" alt="">
						</div>
						<!--已完结-->
						<div style="position:absolute;width:20%;bottom:0;left:20%;" v-if="num==4">
							<img width="100%" src="http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/test/wanjie.png" alt="">
						</div>
					</div>
				</div>
				<div class="ks-ce-all" style="margin:50px 0;">
					<button class="ks-all-btn" @click='getMore()'>加载更多</button>
				</div>
			</div>
  
			<div @click="toTalkUser()"  class="write">
				<img :src="s3" alt="" style="width:100%;height:100%;">
				<div>发<br>布<br>问<br>题</div>
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
      Hotarr:[],
			yu: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/talk/1.5.png',
			s: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/talk/1.4.png',
			s1: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/talk/1.6.png',
			s3: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/talk/1.2.png',
			m: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/talk/m.png',
			js: '',
			arr: [],
			page: 1,
			show: true,
		 num:1,
		 Hpage:1,
		 showList:true,
		 ind:null,
		 pType:null
		}
	},
	created() {
		this.getList();

	},
	methods: {
		toTalkInfor(i,p,s){
			this.ind=i
			this.pType=p
      	httputil.doRequest('/Quiz/rewardCheckLimit', { 'qState':s}, 1, this.onStateSuccess, null, false) 
		},
		onStateSuccess(res){
			if(res.code==200){
         this.$router.push('/talkInfor?id='+this.ind+'&type='+this.pType)
			}else{
				 this.$dialog.alert({ mes:res.message})
			}    
		},
		getList() {
			httputil.doRequest('/Quiz/rewardList', { 'sta': this.page }, 1, this.onSuccess, null, false)  
		},
		get(type){
       httputil.doRequest('/Quiz/rewardListHot', { 'sta':this.Hpage,'type':type}, 1, this.onSuccess, null, false)
		},
		onSuccess(res) {
			this.show = false;
			if (res.list.length > 0) {
				this.arr = res.list;
				this.showList=true
			}else{
        this.showList=false
			}
		},
		getArr(n){
			if(n==1){
				this.num=1
				this.getList()
			}else if(n==2){
				this.num=2
       this.get(0)
			}else if(n==3){
				this.num=3
				this.get(1)
			}else if(n==4){
				this.num=4
				this.get(2)
			}
		},
		getMore() {
			this.page++;
			this.$dialog.loading.open('努力加载中...');
			httputil.doRequest('/Quiz/rewardList', { 'sta': this.page }, 1, this.onMoreSuccess, null, false)
		},
		onMoreSuccess(res) {
			this.$dialog.loading.close()
			if (res.list.length > 0) {
				this.arr = this.arr.concat(res.list);
			} else {
				if (this.page > 1) {
					this.page--;
				}
				this.$dialog.toast({
					mes: '你看完了，没有了！',
					timeout: 1500
				});
			}
		},
		toTalkUser(){
			console.log('111')
				let type = navigator.userAgent.toLowerCase(); 
			 if (/iphone|ipad|ipod/.test(type)) {
			   	   if(window.getJSessionId()){
								console.log('222')
			   		  this.$router.push('/talkTitle')
			   	}else{
			   		window.webkit.messageHandlers.iOS.postMessage({4:{'windowID':10000}})	
					
			   		}
			   }else if(/android/.test(type)){
			   	if(window.YiDao.getJSessionId()){
						 console.log('333')
			   		this.$router.push('/talkTitle')
			   	}else{
			   		window.YiDao.bussinessDistribute(4,"{'windowID':10000}")
			   		}
			   	 
			   }else{
			   	 window.location="https://www.kushanbaoli.com";
			   }

		}
	}
}
</script>
<style type="text/css">

.ks-nav{
		font-size: 14px;
	overflow: hidden;
  height:50px;
	text-align: justify;
	word-break:break-all;
}
.write {
	position: fixed;
	bottom: 30px;
	right: 15px;
	width: 40px;
	border-radius: 4px;
	padding-bottom: 5px;
	text-align: center;
	color:#fff;
	font-size: 15px;
	background: #f74240;
}
.talkTit{
	display: flex;
	justify-content:center;
	margin:5px 0 10px 0;
}
.talkLeft{
	height:33px;
	line-height: 33px;
	padding: 0 13px;
	font-size:14px;
}
.talkBC{

	color:#e4393c;
}
</style>