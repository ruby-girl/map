<template>
	<div class="container">

		<div style="padding: 15px;font-size:15px;">
			<div style="border-radius:10px;box-shadow: 0 0 10px #ccc;">
				<div style="display: flex;padding: 10px;align-items: center;">
					<div>
						<img :src="arr.headURL" alt="" style="border-radius:50%" width="55px" height="55px" />
					</div>
					<div style="flex:1;padding-left:10px ;line-height: 25px;">
						<div style="display: flex;">
							<div>{{arr.uName}}</div>
							<div style="flex:1;text-align: right;" v-if="showType==1">
								<div style="float:right;line-height: 20px;">
									￥{{arr.balanceMoney/100}}
								</div>
								<div style="float:right;line-height: 25px;">
								<div class="nanSheng">剩余</div>
								</div>
								<div style="float:right;line-height: 20px;">
									￥{{arr.rewardMoney/100}}
								</div>
								<div style="float:right;line-height: 25px;">
									<div class="nanSheng nanShang">悬赏</div>
								</div>

							</div>
						</div>
           <div>
             	<div class="all_infor">
								<div>{{arr.cName}} {{arr.cSex==1?'男':'女'}} {{area}} {{arr.birthString}}<br>{{arr.horoscope}}</div>
						 </div>
					 </div>
					
					</div>
				</div>

				<div style="font-size:15px;padding:10px;word-break:break-all;">
					{{arr.content}}
				</div>
				<div style="padding: 10px;" class="ks-talk" v-if="arr.flag!=0">
					<div style="float: left;width: 33.33%;" v-for='i in arr.thumbpails'>
						<div style="padding: 10px;">
							<img :src="i" alt="" width="100%" />
						</div>
					</div>

				</div>
			
					<div @click="showBtn=true"  style="width:100%;text-align:center;margin-bottom:10px;height:50px;">
            <div style="text-align: center;width:120px;border-radius:15px;padding:5px;color:deepskyblue;font-size:15px;border:1px solid deepskyblue;margin:10px auto;">我来解答</div>
					</div>
			</div>

		</div>
		<div v-show='show2'>
			<div class="ks-fen-tou" style="background:#f5f5f5;height:30px;">
				<div>
					<span class="ks-fen-span" style="height:30px"></span>
				</div>
				<div style="padding-left:10px;line-height: 30px;font-size:15px;font-weight: 800;">
					大师解答
				</div>
			</div>
			<div v-for='it in list' style="border-bottom:1px solid #f5f5f5;position:relative;">
				<div style="display: flex;padding: 10px;font-size: 15px;">
					<div>
						<img :src="it.answer.headURL" alt="" style="border-radius:50%" width="50px" height="50px" />
					</div>
					<div style="flex:1;padding-left:10px ;line-height: 25px;">
						<div style="display: flex;">
							<div>{{it.answer.uName}}
								<span v-if="it.answer.mLevel==-1"></span>
								<span v-if="it.answer.mLevel==0" style="height:20px;line-height: 20px;margin-left:8px;display: inline-block;background: #E4393C;color:white;border-radius:10px;padding: 0 5px;font-size:14px">爱好者</span>
								<span v-if="it.answer.mLevel==1" style="height:20px;line-height: 20px;margin-left:8px;display: inline-block;background: #E4393C;color:white;border-radius:10px;padding: 0 5px;font-size:14px">初级大师</span>
								<span v-if="it.answer.mLevel==2" style="height:20px;line-height: 20px;margin-left:8px;display: inline-block;background: #E4393C;color:white;border-radius:10px;padding: 0 5px;font-size:14px">中级大师</span>
								<span v-if="it.answer.mLevel==3" style="height:20px;line-height: 20px;margin-left:8px;display: inline-block;background: #E4393C;color:white;border-radius:10px;padding: 0 5px;font-size:14px">高级大师</span>
							</div>
						</div>
						<div style="display:flex;">
							<div style="color:#E4393C" @click="toastNone(it.answer.masterId)" v-if="it.answer.masterId!=0 && it.answer.isCollect==0">
								<button style="border:none;padding:0 8px;">+关注</button>
							</div>
							<div style="color:#E4393C" v-if="it.answer.isCollect==1">
								已关注
							</div>
							<div style="margin-left:5px;color:#666;">{{it.answer.createTime}}</div>
						</div>
					</div>
					<div style="color:#E4393C" v-if="it.answer.isAccepted==1">
						赏金：{{it.answer.rewardMoney/100}}
					</div>
					<div style="color:#0475FD" v-if="it.answer.isAccepted==0&&arr.rewardMoney!=0">
						待打赏
					</div>
          <div v-if="it.answer.isAccepted==1" style="position:absolute;top:0;right:0;"><img width="50%" src="http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/cesuan/ok.png" alt=""></div>
				</div>
				<div style="font-size:15px;padding:15px;">
					{{it.answer.content}}
				</div>
				<div class="ks-c-f" style="padding:8px 15px;">
					<div></div>
					<div style="display: flex;font-size:14px;">
						<div style="flex:1"></div>
						<div style="display: flex;text-align: right;" @click='getPid(it.answer.aId)'>
							<div style="display: inline-block;">
								<img :src="c" alt="" width="18px" />
							</div>
							<!--<div style="margin-left:10px;display: inline-block;">10</div>-->
						</div>

					</div>
				</div>
				<div style="padding: 15px;" v-show="it.answerComments.length>0">
					<div style="padding: 10px;background: #f5f5f5;font-size:14px;">
						<div v-for='ty in it.answerComments' style="padding: 5px 0;" @click='getPid(ty.pId)'>
							<span style="color:lightskyblue">{{ty.uName}}</span>
							:
							<span>{{ty.content}}</span>
						</div>
					</div>
				</div>
			</div>
			<div class="ks-ce-all" style="margin:25px 0;">
				<button class="ks-all-btn" @click='getMore()'>查看更多解答</button>
			</div>
		</div>
		<div class="ks-none" v-show='!show2'>
			还没有大师参与解答
		</div>
		<div class="shoucang" style="top:90%">
			<img :src="s1" alt="" width="100%" v-if='arr.isCollect==1' @click='getColt()'>
			<img :src="s2" alt="" width="100%" v-if='arr.isCollect==0' @click='getColt()'>
		</div>
		<div class="share" @click='toShare()'>
			<img :src="share" alt="" width="100%" />
		</div>
		<yd-popup v-model="showBtn" position="center" width="90%">
			<div style="padding: 20px;">
				<yd-cell-group>
					<yd-cell-item>
						<yd-textarea slot="right" placeholder="输入内容" maxlength="60" v-model="content"></yd-textarea>
					</yd-cell-item>
				</yd-cell-group>
				<div style="text-align: right;margin-top:15px;">
					<div style="color:#e4393c;textAlign:left;" v-show="showJD">内容不能为空！</div>
					<button @click='getC(arr.qId)' style="padding: 0 5px;height: 30px;border:none;outline:none;border:1px solid #ccc;font-size:15px;">
						发表解答
					</button>
				</div>
			</div>
		</yd-popup>
		<yd-popup v-model="show1" position="center" width="90%">
			<div style="padding: 20px;">
					<yd-cell-group>
					<yd-cell-item>
						<yd-textarea slot="right" placeholder="输入内容" maxlength="60" v-model="text"></yd-textarea>
					</yd-cell-item>
				</yd-cell-group>
				<div style="color:#e4393c;textAlign:left;" v-show="showHF">内容不能为空！</div>
				<div style="text-align: right;margin-top:15px;">
					<button @click='getR()' style="padding: 0 5px;height: 30px;border:none;outline:none;border:1px solid #ccc;font-size:15px;">
						发表回复
					</button>
				</div>
			</div>
		</yd-popup>
	</div>
</template>
<script type="text/javascript">
import navbar from '../../../components/nav';
import btn from '../../../components/button';
import httputil from '../../../httputil';
import share from '../../../share';
export default {
	components: {
		navbar,
		btn
	},
	data() {
		return {
			showType:this.$route.query.type,
			showJD: false,
			showHF: false,
			level: '大师',
			share: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/cesuan/4.png',
			add: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/pay/add.png',
			c: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/cesuan/c.png',
			s1: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/cesuan/5.png',
			s2: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/cesuan/5-1.png',
			js: '',
			arr: [],
			list: [],
			content: '',
			showBtn: false,
			qId: null,
			pId: null,
			text: '',
			show1: false,
			show2: false,
			page: 1,
			area:null
		}
	},
	created() {
		document.title = '问题详解'
	},
	mounted() { },
	beforeRouteEnter(from, to, next) {
		next(vm => {
			vm.page = 1;
			vm.getList();
			vm.getCom();
		})
	},
	methods: {
		// 收藏大师
		toastNone(ind) {
			httputil.doRequest('/FindMaster/userMasterCollect', { 'masterId': ind }, 1, this.onNoneSuccess, this.onRError, true)
		},
		onNoneSuccess(res) {
			this.getList();
			this.getCom();
			this.$dialog.toast({
				mes: '关注成功！',
				timeout: 1500
			});
		},
		getColt() {
			httputil.doRequest('/Quiz/rewardCollect', {
				'qId': this.$route.query.id
			}, 1, this.onColtSuccess, this.onRError, true)
		},
		onColtSuccess(res) {
			this.getList();
			this.$dialog.toast({
				mes: res.message,
				timeout: 1500
			});
		},
		getPid(id) {
			this.show1 = true;
			this.pId = id;
		},
		getMore() {
			this.page++;
			this.getM();
		},
		getList() {
			httputil.doRequest('/Quiz/rewardCheckDetails', {
				'questionId': this.$route.query.id
			}, 1, this.onSuccess, null, false)
		},
		onSuccess(res) {
			let a=res.areaString
			let b=a.split('(')
			this.area=b[0]
			this.arr = res;
			this.qId = res.qId;
		},
		getC(id) {
			if (this.content != '') {
				httputil.doRequest('/Master/rewarAddAnswer', {
					'qId': id,
					'content': this.content
				}, 1, this.onCSuccess, this.onRError, true)
			} else {
				this.showJD = true
			}
		},
		onCSuccess(res) {
			this.showBtn = false;
			if (res.code == 400) {
				this.$dialog.toast({
					mes: res.message,
					timeout: 1500
				});
			} else if (res.code == 200) {
				this.$dialog.toast({
					mes: '解答成功',
					timeout: 1500
				});
				this.page = 1
				this.getCom();
			}
		},
		getR() {

			if (this.text) {
				httputil.doRequest('/Quiz/rewardComment', {
					'qId': this.qId,
					'content': this.text,
					'pId': this.pId
				}, 1, this.onRSuccess, this.onRError, true)
			} else {
				this.showHF = true
			}
		},
		onRSuccess(res) {
			this.show1 = false;
			if (res.code == 401) {
				this.$dialog.toast({
					mes: res.message,
					timeout: 1500
				});
			} else if (res.code == 200) {
				this.text = ''
				this.$dialog.toast({
					mes: '回复成功',
					timeout: 1500
				});
				this.page = 1
				this.getCom();
			}
		},
		onRError(res) {
			this.$dialog.alert({mes:res})
		},
		getM() {
			this.$dialog.loading.open('很快加载好了');
			httputil.doRequest('/Quiz/rewardCommentSee', {
				'questionId': this.$route.query.id,
				'sta': this.page
			}, 1, this.onMSuccess, this.onRError, true)
		},
		onMSuccess(res) {
			this.$dialog.loading.close()
			if (res.list.length == 0) {
				this.$dialog.toast({
					mes: '被你看完了',
					timeout: 1500
				});
				if (this.page > 1) {
					this.page--;
				}
			} else {
				this.show2 = true;
				this.list = this.list.concat(res.list);
			}
		},
		getCom() {
			httputil.doRequest('/Quiz/rewardCommentSee', {
				'questionId': this.$route.query.id,
				'sta': this.page
			}, 1, this.onComSuccess, null, false)
		},
		onComSuccess(res) {
			if (res.list.length == 0) {
				this.show2 = false
			} else {
				this.show2 = true;
				this.list = res.list;

			}
		},
		oncodeSuccess(res) {
			let code = res.object
			share.toShare('问题详解', 'talkInfor?code=' + code + '&id=' + this.$route.query.id, this.arr.thumbpails[0])
		},
		oncodeError(res) {
			this.$dialog.alert({ mes: res })
		},
		toShare() {
			httputil.doRequest('/Common/getShareCode', { 'sType': 42 }, 1, this.oncodeSuccess, this.oncodeError, true)

		},
	}
}
</script>
<style type="text/css">
.ks-text {
	width: 100%;
	font-size: 15px;
	border: none;
}

.ks-talk:after {
	content: "";
	display: block;
	clear: both;
}

.share {
	z-index: 100000;
	width: 45px;
	height: 45px;
	position: fixed;
	top: 80%;
	right: 15px;
}

.ks-in-a {
	height: 40px;
	border: none;
	outline: none;
	border: 1px solid #ccc;
	border-radius: 5px;
	width: 100%;
	font-size: 15px;
}
.all_infor{
	font-size: 12px;
	color:#666;
	display: flex;
	line-height: 18px;
}
</style>