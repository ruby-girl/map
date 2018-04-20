<template>
	<div class="pay">

		<div style="padding: 8px;font-size:15px;display:flex;">
			<div class="shu"></div>
			<div style="padding:0  5px;">个人资料</div>

		</div>
		<div>
			<div class="msg">真实姓名：
				<i style="color:#aaa;">{{name}}</i>
			</div>
			<div class="msg">性别：
				<i style="color:#aaa;">{{sex==1?'男':'女'}}</i>
			</div>
			<div class="msg">出生日期：
				<i style="color:#aaa;">{{birth}}</i>
			</div>
			<div class="msg">出生地点：
				<i style="color:#aaa;">{{areaCode}}</i>
			</div>
		</div>
		<div style="height:8px;background: #f5f5f5;"></div>
		<div style="padding: 15px;">
			<textarea v-model="content" style="color:#555;" name="" rows="10" cols="" class="ks-text" placeholder="请详细的描述你的问题，这样大师才能更准确的解答"></textarea>
		</div>

		<div style="padding: 15px;display: flex;">
			<div style="width:25%;paddingRight:5px;" v-if="res!==''">
				<div>
					<img :src="res" alt="" style="width:100%;height:90px;" @click="res=''" />
				</div>
			</div>
			<div style="width:25%;paddingRight:5px;" v-if="rem!==''">
				<div>
					<img :src="rem" alt="" style="width:100%;height:90px;" @click="rem=''" />
				</div>
			</div>
			<div style="width:25%;paddingRight:5px;" v-if="rea!==''">
				<div>
					<img :src="rea" alt="" style="width:100%;height:90px;" @click="rea=''" />
				</div>
			</div>
			<div style="position:relative">
				<add :type="6" @getURL='getPic' style="position: absolute;left:0;top:0;"></add>
				<div>
					<img :src="add" alt="" width="50px" />
				</div>
				<div style="margin-top:10px;">
					添加图片
					<div>(最多3张)</div>
				</div>

			</div>
		</div>
		<div style="padding: 10px 15px;background: #f5f5f5;fontSize:15px;">
			选择提问方式
		</div>
		<div class="ks-pay-m">
			注：悬赏的金额最少为200易道币
		</div>
		<div class="ks-pay-y">
			<div>
				<yd-radio-group color="#F00" v-model='value'>
					<yd-radio val='1'></yd-radio>
				</yd-radio-group>
			</div>
			<div>
				<span style="font-size:15px;">悬赏金额</span>
				<span style="color:#e4393c;marginLeft:5px;">余额:{{num}}</span>
			</div>
			<div style="font-size:15px;color:gray;text-align: right;">
				<!--<input class="question_y"  type="number" placeholder="金额" v-model="toJavaNum">-->
				<span style="margin-left:20px;" v-if="type==1">+</span>
				<span v-if="type==2||type==3" style="margin-left:20px;"></span><input class="question_y" type="text" name="text1" placeholder="金额" v-model="toJavaNum" onkeyup="value=value.replace(/[^\d]/g,'')">
			</div>
		</div>

		<div class="ks-pay-y" v-if="type==3||type==2">
			<div>
				<yd-radio-group color="#F00" v-model='value'>
					<yd-radio val='2'></yd-radio>
				</yd-radio-group>
			</div>
			<div>
				<span style="font-size:15px;">免费提问</span><br/>
			</div>

		</div>
		<div v-if="value!=1" style="margin-bottom:85px;"></div>
		<div class="ks-pay-y" style="margin-bottom:50px;font-size:15px;color:#666;" v-if="value==1">
			<div>是否仅限大师查看：</div>
			<yd-radio-group color="#F00" v-model='gk'>
				<yd-radio val='1'></yd-radio>
			</yd-radio-group>
			<div>
				<span style="font-size:15px;margin-right:25px;">否</span><br/>
			</div>
			<yd-radio-group color="#F00" v-model='gk'>
				<yd-radio val='0'></yd-radio>
			</yd-radio-group>
			<div>
				<span style="font-size:15px;">是</span><br/>
			</div>
		</div>
		<div style="padding:0 15px;margin-bottom:50px;" @click='postPay()'>
			<btn btnMsg='发布问题'></btn>
		</div>

	</div>
</template>
<script type="text/javascript">
import btn from '../../../components/button';
import upload from '../../../components/upload';
import add from '../../../components/Allimg';
import httputil from '../../../httputil';
export default {
	props: {
		name: {
			default: true
		},
		birth: {
			default: true
		},
		sex: {
			default: true
		},
		areaCode: {
			default: true
		},
		a:{
			default: ''
		}
	},
	components: {
		btn, add
	},
	data() {
		return {
			add: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/pay/add.png',
			uploadUrl: [],
			myFile: 'ks-file',
			value: 1,
			res: '',
			rem: '',
			rea: '',
			toJavaNum: '200',
			num: null,
			content: '',
			toJavaUrl: '',
			questionId: -100,
			type: 3,
			gk: 1
		}
	},
	created() {

		// 有传过来questionId说明是编辑
		if (this.a) {
			this.questionId = this.a
			httputil.doRequest('/Quiz/rewardCheckDetails', {
				'questionId': this.a
			}, 1, this.onquestionSuccess, this.onPayError, true)

		}
	},
	mounted: function() {
		this.$nextTick(() => {
			httputil.doRequest('/MySelf/memberPoint', null, 1, this.onSuccess, this.onPayError, true)
		})
	},

	methods: {
		onquestionSuccess(res) {
			this.content = res.content;
			// this.qId = res.qId;
			if(res.balanceMoney==0){
				this.type=2
			}else if(res.balanceMoney > 0){
				this.type=1
			}
			if (res.flag == 1) {
				this.res = res.thumbpails[0]
				this.rem = res.thumbpails[1]
				this.rea = res.thumbpails[2]
				if (!this.res) {
					this.res = ''
				}
				if (!this.rem) {
					this.rem = ''
				}
				if (!this.rea) {
					this.rea = ''
				}
			}

		},
		onSuccess(res) {
			this.num = res
		},
		getPic(m) {
			if (this.res == '') {
				this.res = m
			} else if (this.rem == '') {
				this.rem = m
			} else if (this.rea == '') {
				this.rea = m
			}
		},
		postPay() {	   
			if (this.content) {

				if (this.value == 1 && this.toJavaNum == '' && this.type != 1) {
					this.$dialog.toast({
						mes: '请填写金额'
					})
					return
				} else if (this.value == 1 && this.toJavaNum < 200 && this.type != 1) {
					this.$dialog.toast({
						mes: '悬赏金额需大于200易道币！'
					})
					return
				} 
				// else if (this.value == 1 && this.num < 200 && this.type != 1) {
				// 	this.$dialog.confirm({
				// 		mes: '您的易道币不足，跳转到充值界面吗？',
				// 		opts: () => {
				// 			this.$router.push('/questionPay?num='+this)
				// 		}
				// 	})
				// 	return
				// }
				else if (this.value == 1 && this.num < this.toJavaNum && this.type != 1){
             	this.$dialog.confirm({
						mes: '您的易道币不足，跳转到充值界面吗？',
						opts: () => {
							this.$router.push('/yihome?ref=http://h5.lanbobo.cn/#/talkTitle') 
						}
					})
					return
				} else if (this.value == 1 && this.toJavaNum > 199.99 && this.type != 1) {
					this.$dialog.confirm({
						mes: '如2天内，无大师解答，悬赏金将退还至您的账户！',
						opts: () => {
							this.toJavaUrl = this.res + ',' + this.rem + ',' + this.rea
							console.log(this.areaCode)
							var p=this.areaCode;
					var b=p.indexOf('(');
					var c=p.indexOf(')');
					var t=p.substr(b+1,c-3);
							httputil.doRequest('/Quiz/userOfferReward', { 'name': this.name, 'sex': this.sex, 'birthTime': this.birth, 'areaCode': t, 'content': this.content, 'qState': this.gk,'rewardMoney': this.toJavaNum, 'payPlatform': 4, 'thumbpails': this.toJavaUrl, 'questionId': this.questionId }, 1, this.onPaySuccess, this.onPayError, true)
						}
					})
				}
				if (this.type == 1) {
					this.$dialog.confirm({
						mes: '如2天内，无大师解答，悬赏金将退还至您的账户！',
						opts: () => {
							this.toJavaUrl = this.res + ',' + this.rem + ',' + this.rea
								var p=this.areaCode;
					var b=p.indexOf('(');
					var c=p.indexOf(')');
					var t=p.substr(b+1,c-3);
			     this.areaCode=t
							httputil.doRequest('/Quiz/userOfferReward', { 'name': this.name, 'sex': this.sex, 'birthTime': this.birth, 'areaCode': this.areaCode, 'content': this.content, 'rewardMoney': this.toJavaNum,'qState': this.gk, 'payPlatform': 4, 'qState': this.gk, 'thumbpails': this.toJavaUrl, 'questionId': this.questionId }, 1, this.onPaySuccess, this.onPayError, true)
						}
					})
				}
				if (this.value == 2) {

					this.toJavaUrl = this.res + ',' + this.rem + ',' + this.rea
						var p=this.areaCode;
					var b=p.indexOf('(');
					var c=p.indexOf(')');
					var t=p.substr(b+1,c-3);
			     this.areaCode=t
					httputil.doRequest('/Quiz/userOfferReward', { 'name': this.name, 'sex': this.sex, 'birthTime': this.birth, 'areaCode': this.areaCode, 'content': this.content, 'rewardMoney': 0, 'payPlatform': 4, 'thumbpails': this.toJavaUrl, 'questionId': this.questionId }, 1, this.onPaySuccess, this.onPayError, true)
				}
			} else {
				this.$dialog.toast({
					mes: '请填写内容！'
				})
			}

		},
		onPaySuccess(res) {
			this.$emit('toPage3')
			this.$dialog.toast({
				mes: '发布问题成功',
				callback: () => {
					this.$router.push('/myIndex')
				}
			})
		},
		onPayError(res) {
			this.$dialog.toast({ mes: res })
		}
	}
}
</script>
<style type="text/css">
.ks-text {
	width: 100%;
	font-size: 15px;
	border: none;
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

.question_y {
	border: none;
	outline: none;
	width: 70px;
	border-bottom: 1px solid #e4393c;
	text-align: center;
	color: #e4393c;
}

.input_m {
	margin-left: 30px;
}

.ks-pay-m {

	padding-left: 15px;
	color: #e4393c;
}

.ks-pay-y {
	display: flex;
	align-items: center;
	margin-top: 15px;
	padding-left: 15px;
}

.shu {
	display: inline-block;
	margin-right: 5px;
	height: 14px;
	width: 4px;
	background: #0475FD;
	border-radius: 2px;
}

.msg {
	font-size: 14px;
	padding-left: 10px;
	height: 30px;
	line-height: 30px;
}
</style>