<template>
	<div class="container">

		<div style="padding: 15px;">
			<div style="border:1px solid #ccc;border-radius:15px;">
				<div class="ks-test-tab ks-test-sex">
					<div class="ks-fir">性别</div>
					<div class="ks-sc" style="padding: 0 15px;">{{obj.sex}}</div>
				</div>
				<div class="ks-test-tab ks-test-sex">
					<div class="ks-fir">八字</div>
					<div class="ks-sc" style="padding: 0 15px;">
						{{obj.horoscope}}
					</div>
				</div>
				<div class="ks-test-tab">
					<div class="ks-fir ks-test-chen">生辰</div>
					<div class="ks-sc">
						<div class="ks-test-he" style="border-bottom: 1px solid #ccc;line-height: 40px;">
							(农历){{obj.lunarBirthday}}
						</div>
						<div class="ks-test-he" style="line-height: 40px;">
							(公历){{obj.birthday}}
						</div>
					</div>
				</div>
				<div class="ks-test-tab ks-test-sex">
					<div class="ks-fir">出生地</div>
					<div class="ks-sc" style="padding: 0 15px;">
						{{obj.areaName}}
					</div>
				</div>
				<div class="ks-test-tab" style="border:none">
					<div class="ks-fir" style="line-height: 110px;">命中的星宿</div>
					<div class="ks-sc" style="">
						<div class="ks-test-he" style="border-bottom: 1px solid #ccc;display: flex;padding: 0;text-align: center;">
							<div class="ks-he-div">
								命中吉神
							</div>
							<div class="ks-he-div" style="border-left:1px solid #ccc;border-right:1px solid #ccc;">
								吉凶参半
							</div>
							<div class="ks-he-div">
								命中凶星
							</div>
						</div>
						<div class="ks-test-he" style="border-bottom: 1px solid #ccc;display: flex;padding: 0;text-align: center;color:#E4393C">
							<div class="ks-he-div">
								<!--{{star.mZJS==''?'无':star.mZJS}}-->
								{{obj.userLevel==-2?'下载APP查看':(obj.userLevel==-1||obj.userLevel==0?'成为付费会员查看':(obj.userLevel==1||obj.userLevel==2?(star.mZJS==''?'无':star.mZJS):''))}}
							</div>
							<div class="ks-he-div" style="border-left:1px solid #ccc;border-right:1px solid #ccc;">
								<!--{{star.jXCB==''?'无':star.jXCB}}-->
								{{obj.userLevel==-2?'下载APP查看':(obj.userLevel==-1||obj.userLevel==0?'成为付费会员查看':(obj.userLevel==1||obj.userLevel==2?(star.jXCB==''?'无':star.jXCB):''))}}
							</div>
							<div class="ks-he-div">
								<!--{{star.mZXX==''?'无':star.mZXX}}-->
								{{obj.userLevel==-2?'下载APP查看':(obj.userLevel==-1||obj.userLevel==0?'成为付费会员查看':(obj.userLevel==1||obj.userLevel==2?(star.mZXX==''?'无':star.mZXX):''))}}
							</div>
						</div>
						<div class="ks-test-he" style="text-align: center;padding: 0;line-height: 40px;">
							<button @click='goLook()' style="outline: none;border:none;background: #E4393C;padding: 5px;font-size: 13px;color:white;border-radius:10px;width: 80%;">
								<!--<router-link :to="'/laky?stars='+star.mZJS+' '+star.jXCB+' '+star.mZXX">-->
								查看详情
								<!--{{obj.userLevel==-2?'下载APP查看':(obj.userLevel==-1||obj.userLevel==0?'成为会员后查看':(obj.userLevel==1||obj.userLevel==2?'点击查看':''))}}-->
								<!--</router-link>-->
							</button>
						</div>
					</div>
				</div>
			</div>
			<div class="ks-test-info">
				<div class="ks-test-common">
					<div class="ks-test-title">[属相]</div>
					<div class="ks-test-ce">{{arr.zodiac}}</div>
				</div>
				<div class="ks-test-common">
					<div class="ks-test-title">[五行]</div>
					<div class="ks-test-ce">{{arr.wX}}</div>
				</div>
				<div class="ks-test-content">
					<div class="ks-test-title">[同年共性]</div>
					<div class="ks-test-think">
						{{arr.similaritiesInSameYear}}
					</div>
				</div>
				<div class="ks-test-content">
					<div class="ks-test-title">[个人性格]</div>
					<div class="ks-test-think">
						{{arr.localCharacterFeatures}}
					</div>
				</div>
				<div class="ks-test-common">
					<div class="ks-test-title">[命理特性]</div>
					<div class="ks-test-ce">{{arr.peopleOfDetrimental}}</div>
				</div>
				<div class="ks-test-common">
					<div class="ks-test-title">[最佳合作属相]</div>
					<div class="ks-test-ce">{{arr.localSuitJob}}</div>
				</div>
				<div class="ks-test-common">
					<div class="ks-test-title">[不易共事属相]</div>
					<div class="ks-test-ce">{{arr.unsuitedJob}}</div>
				</div>
				<div class="ks-test-content">
					<div class="ks-test-title">[简单命理归纳]</div>
					<div class="ks-test-think">
						{{arr.luckAnalysis}}
					</div>
				</div>
				<div class="ks-test-content">
					<div class="ks-test-title">[简单命理走向]</div>
					<div class="ks-test-think">
						{{arr.fortuneTrend}}
					</div>
				</div>
			</div>

		</div>
		<div class="ks-fen-tou">
			<div>
				<span class="ks-fen-span"></span>
			</div>
			<div style="padding-left:10px;font-size: 15px;">
				个人姻缘
			</div>
		</div>
		<div style="padding: 15px;">
			<div class="ks-test-common">
				<div class="ks-test-title">[婚姻命格]</div>
				<div class="ks-test-ce">{{list.induce}}</div>
			</div>
			<div class="ks-test-common">
				<div class="ks-test-title">[最佳配偶]</div>
				<div class="ks-test-ce">{{list.suit}}</div>
			</div>
			<div class="ks-test-common">
				<div class="ks-test-title">[最差配偶]</div>
				<div class="ks-test-ce">{{list.unsuit}}</div>
			</div>
			<div class="ks-test-common">
				<div class="ks-test-title">[最佳结婚时间]</div>
				<div class="ks-test-ce">{{list.notice}}</div>
			</div>
			<div class="ks-test-content">
				<div class="ks-test-title">[婚姻提示]</div>
				<div class="ks-test-think">
					{{list.explaint}}
				</div>
			</div>
		</div>
		<div class="ks-fen-tou">
			<div>
				<span class="ks-fen-span"></span>
			</div>
			<div style="padding-left:10px;font-size: 15px;">
				称骨算命
			</div>
		</div>
		<div class="ks-test-shi" style="padding: 15px;">
			<div class="ks-test-tou">
				命重{{liang}}两{{qian}}钱
			</div>
			<div class="ks-test-s">
				{{js}}
			</div>
			<div class="ks-test-s">
				{{jr}}
			</div>
		</div>
		<div style="padding: 20px 15px;">
			<div class="ks-test-title">[此八字命中注定以下几点]
			</div>
			<div v-if="bot.academic != '无'" style="padding:3px 0;	display: flex;
	align-items: center;"> <div class="testDian"></div> {{bot.academic}}</div>
			<div v-if="bot.disease != '无'" style="padding:3px 0;	display: flex;
	align-items: center;"><div class="testDian"></div>{{bot.disease}}</div>
			<div v-if="bot.marriage != '无'" style="padding:3px 0;	display: flex;
	align-items: center;"><div class="testDian"></div>{{bot.marriage}}</div>
			<div v-if="bot.body != '无'" style="padding:3px 0;	display: flex;
	align-items: center;"><div style="width:15px;" class="testDian"></div>{{bot.body}}</div>
			<div v-if="bot.offspring!='无'" style="padding:3px 0;	display: flex;
	align-items: center;"><div class="testDian"></div>{{bot.offspring}}</div>
			<div v-if="bot.feeling!='无'" style="padding:3px 0;	display: flex;
	align-items: center;"><div class="testDian"></div>{{bot.feeling}}</div>
		</div>
		<div class="share" @click='toShare()' v-if="sCode==-1">
			<img :src="share" alt="" width="100%" />
		</div>
	</div>
</template>
<script>
import navbar from '../components/nav';
import btn from '../components/button';
import httputil from '../httputil'
import share from '../share';

export default {
	components: {
		navbar, btn
	},
	data() {
		return {
			send:null,
			sCode:null,
			obj: {},
			arr: {},
			list: {},
			song: {},
			boss: {},
			star: {},
			js: '',
			jr: '',
			weight: '',
			up: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'],
			liang: '',
			qian: '',
			bot: null,
			share: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/cesuan/4.png',
		}
	},
	created() {
		document.title = '八字测算'
	},
	methods: {
		goLook() {
			if (this.obj.userLevel == 1 || this.obj.userLevel == 2) {
				this.$router.push('/laky?stars=' + this.star.mZJS + ' ' + this.star.jXCB + ' ' + this.star.mZXX)
			} else if (this.obj.userLevel == -1 || this.obj.userLevel == 0) {
				this.$dialog.confirm({
					mes: '成为会员后查看，是否跳转到充值界面？',
					opts: () => {
						this.$router.push('/xufei')
					}
				});
			} else {
				this.$dialog.alert({
					mes: '下载APP后查看'
				})
			}
		},
		onSuccess(res) {
			
			this.obj = res.measureCondition;
			this.bot = res.horoscopeNotice
			this.star = res.stars;
			this.arr = res.personalLuck;
			this.list = res.personalMarriage;
			this.song = res.boneWeight;
			this.js = this.song.explaint.substr(0, 16);
			this.jr = this.song.explaint.substr(16, 32);
			this.weight = this.song = res.boneWeight.weight;
			var p = this.weight / 10;
			this.liang = this.up[parseInt(p) - 1];
			if (this.weight % 10 == 0) {
				this.qian = '零'
			} else {
				this.qian = this.up[this.weight % 10 - 1];
			}
		},
		onError(res) {
		this.$dialog.confirm({            
                    mes: res+'，是否跳转到充值界面？',
                    opts: [
                        {
                            txt: '取消',
                            color: false,
                            callback: () => {
                               this.$router.go(-1)
                            }
                        },
                        {
                            txt: '确定',
                            color: true,
                            callback: () => {
                                this.$router.push('/xufei')
                            }
                        }
                    ]
                });
		},
		oncodeSuccess(res) {
			let code = res.object
		
			share.toShare('八字测算', 'test?code=' + code + '&birthday=' + this.$route.query.birthday + '&sex=' + this.$route.query.sex + '&areaCode=' + this.$route.query.areaCode, 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/static/share/measure_1.png')
		},
		oncodeError(res) {
			this.$dialog.alert({ mes: res })
		},
		toShare() {
			httputil.doRequest('/Common/getShareCode', { 'sType': 2 }, 1, this.oncodeSuccess, this.oncodeError, true)
		},
	GetRequest() {  
     let url=window.location.hash
		 let subStrs=url.split("?")	
		 this.send=subStrs[1]	
		 let li=this.send.split('&')	 
		var i=li[0].lastIndexOf("code")
	   this.sCode=i
	 }
	},
	mounted: function () {
		this.$nextTick(() => {
		 this.GetRequest()
		
			if (this.sCode != -1) {
				
				this.$http.get('http://calendar.lanbobo.cn/Measure/horoscopeMeasure' + '?'+this.send).then(rea => {
					console.log('有code的rea='+rea.body.content)
					let res=rea.body.content
					this.obj = res.measureCondition;
					this.bot = res.horoscopeNotice
					this.star = res.stars;
					this.arr = res.personalLuck;
					this.list = res.personalMarriage;
					this.song = res.boneWeight;
					this.js = this.song.explaint.substr(0, 16);
					this.jr = this.song.explaint.substr(16, 32);
					this.weight = this.song = res.boneWeight.weight;
					var p = this.weight / 10;
					this.liang = this.up[parseInt(p) - 1];
					if (this.weight % 10 == 0) {
						this.qian = '零'
					} else {
						this.qian = this.up[this.weight % 10 - 1];
					}
				})
			
			} else {
				httputil.doRequest('/Measure/horoscopeMeasure', { 'birthday': this.$route.query.birthday, 'sex': this.$route.query.sex, 'areaCode': this.$route.query.areaCode }, 1, this.onSuccess, this.onError, true)
			}


		})
	}
}
</script>
<style>
.ks-test-tou {
	text-align: center;
	font-size: 15px;
	color: #E4393C;
	font-weight: 800;
	padding: 5px 0;
}

.ks-test-s {
	text-align: center;
	font-size: 15px;
}
.testDian{
	height: 6px;
	width:6px;
	margin-right: 5px;
	background: #e4393c;
	border-radius: 50%;
}
.share {
	z-index: 100000;
	width: 45px;
	height: 45px;
	position: fixed;
	top: 85%;
	right: 15px;
}

.ks-test-think {
	font-size: 14px;
}

.ks-test-content {
	padding-top: 10px;
}

.ks-test-common {
	align-items: center;
	display: flex;
	padding: 5px 0;
}

.ks-test-title {
	font-size: 15px;
	color: #E4393C;
	font-weight: 800;
	padding: 6px 0;
	text-align: center;
}

.ks-test-ce {
	margin-left: 10px;
	font-size: 14px;
}

.ks-test-info {
	padding: 10px 0;
}

.ks-he-div {
	flex: 1;
	/*overflow: hidden;*/
	padding: 5px;
}

.ks-test-he {
	/*height: 40px;*/
	/*line-height: 40px;*/
	padding: 0px 15px;
	font-size: 13px;
}

.ks-test-chen {
	height: 80px;
	line-height: 80px;
}

.ks-fir {
	width: 100px;
	text-align: center;
	color: #E4393C;
	font-weight: 800;
	border-right: 1px solid #ccc;
}

.ks-sc {
	flex: 1;
	/*padding: 0 15px;*/
	font-size: 14px;
}

.ks-test-tab:not(last-child) {
	display: flex;
	font-size: 15px;
	border-bottom: 1px solid #ccc;
}

.ks-test-sex {
	height: 45px;
	line-height: 45px;
}

.ks-test-tab>div:nth-child(2) {
	font-size: 15px;
}
</style>