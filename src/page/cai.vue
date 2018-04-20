<template>
	<div class="container">

		<div class="ks-cai-form ">
			<div class="y-flex">
				<div style="width:55%;">
					<img style="width:90%;" src="http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/caiyunfenxi/13.png" />
					<div class="cai-text">
						测试后你将看到以下内容
					</div>
				</div>
				<img style="width:45%;" src="http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/caiyunfenxi/12.png" />
			</div>
			<div class="cai-be-flex">
				<div class="cai-c-flex">
					<img src="http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/caiyunfenxi/10.png" />
					<div>您的一生财运数</div>
				</div>
				<div class="cai-c-flex">
					<img src="http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/caiyunfenxi/11.png" />
					<div>人的财运数取决于几个方面</div>
				</div>
			</div>
		</div>
		<div class="ks-cai-form" style="padding-top: 0;">

			<div class="ks-cai-input ks-flex">
				<div class="ks-cai-date">选择性别：</div>
				<div class="ks-first">
					<div>
						<label style="display: flex;" class="ks-cai-label">
							<div>
								男
							</div>
							<div>
								<input type="radio" name="" id="" value="1" v-model="sex" />
								<span class="cell-checkbox-icon">
									<i></i>
								</span>
							</div>
							<div style="margin-top:5px;">
								<img :src="img1" alt="" width="30px" />
							</div>
						</label>
					</div>
					<div>
						<label style="display: flex;" class="ks-cai-label">
							<div>
								女
							</div>
							<div>
								<input type="radio" name="" id="" value="0" v-model="sex" />
								<span class="cell-checkbox-icon">
									<i></i>
								</span>
							</div>
							<div style="margin-top:5px;">
								<img :src="img2" alt="" width="30px" />
							</div>
						</label>
					</div>
				</div>
			</div>
			<div class="ks-cai-input">
				<label for="" class="ks-cai-da">
					<div class="ks-cai-date">出生日期：</div>
					<div style="" class="ks-cai-div" @click='show3 = true'>
						<div style="font-size:15px;padding:0 5px;">{{birth}}</div>
						<input type="text" name="" id="" disabled value="" v-model='birth' placeholder="出生日期" />
					</div>
				</label>
			</div>

			<div class="ks-cai-input">
				<label for="" class="ks-cai-da">
					<div class="ks-cai-date">出生地点：</div>
					<div class="ks-cai-div" @click='show2 = true'>
						<div style="font-size:15px;padding:0 5px;">{{place}}</div>
						<input type="text" name="" id="" value="" v-model='place' disabled/>
					</div>
				</label>
			</div>
			<div class="ks-cai-input">
				<Btn btnMsg='开始测算' @click.native='fenxi()'></Btn>
			</div>

		</div>
		<div style="height: 10px;background: #f5f5f5;"></div>
		<div class="ks-cai-why">
			<div class="ks-cai-big">
				测试后你将看到一下内容
			</div>
			<div style="font-size:14px;">
				<span class="ks-cai-shot"></span>
				<span class="ks-cai-j">您一生的财运</span>

			</div>
			<div style="font-size:14px;padding: 5px 0;">
				<span class="ks-cai-shot"></span>
				<span class="ks-cai-j">人的财运数取决于哪几个方面</span>
			</div>
		</div>
		<yd-popup v-model="show3" position="center" width="85%" style='overflow: auto;'>
			<div class="ks-cai-city" style="font-size:15px;">
				<calendar @getDate='getD' @can='show3=false'></calendar>
			</div>
		</yd-popup>
		<yd-popup v-model="show2" position="center" width="85%" style='overflow: auto;'>
			<div class="ks-cai-city" style="font-size:15px;">
				<addr @getVal='getV' @cancel='show2=false'></addr>
			</div>
		</yd-popup>
		<div class="share" @click='toShare()' v-if="sCode==-1">
			<img :src="share" alt="" width="100%" />
		</div>
	</div>
</template>
<script>
import Navs from '../components/nav';
import Btn from '../components/button';
import Calendar from '../components/calendar';
import addr from '../components/addr';
import httputil from '../httputil'
import share from '../share';

var img1 = "http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/color/10.png"
var img2 = "http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/color/11.png"
export default {
	components: {
		Navs, Btn, Calendar, addr
	},
	data() {
		return {
			show4: false,
			s: '00',
			f: '00',
			m: '00',
			birth: "1938-1-1 00:00:00",
			place: "",
			img1: img1,
			img2: img2,
			sex: '1',
			show1: false,
			show2: false,
			pro: [],
			picked: '',
			city: '',
			areas: '',
			list: [],
			xian: '',
			place: '北京(110000)',
			result: '',
			show3: false,
			time: null,
			code: 110000,
			share: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/cesuan/4.png',
			sCode: null
		}
	},
	created() {
		document.title = '财运分析'
		this.GetRequest()
	},
	watch: {
		xian(val) {

		}
	},
	methods: {
		GetRequest() {
			let url = window.location.hash
			var i = url.lastIndexOf("code")
			this.sCode = i
			console.log('这是codei=' + i)
		},
		fenxi() {
			if (this.place == '' || this.code == null) {
			this.$dialog.alert({ mes: '请选择出生地！'});
			} else {
			  if(this.sCode==-1){
            	this.$router.push('/fenxi?birth=' + this.birth + '&sex=' + this.sex + '&areaCode=' + this.code)
				}else{
          	this.$router.push('/fenxi?code='+1+'&birth=' + this.birth + '&sex=' + this.sex + '&areaCode=' + this.code)
				}
				
			
				}


		},
		oncodeSuccess(res) {
			let code = res.object
			share.toShare('财运分析','cai?code=' + code, 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/static/share/measure_4.png')
		},
		oncodeError(res) {
			this.$dialog.alert({ mes: res })
		},
		toShare() {
			httputil.doRequest('/Common/getShareCode', { 'sType': 5 }, 1, this.oncodeSuccess, this.oncodeError, true)

		},
		getMoney() {
			console.log(0)
		},
		getD: function(val) {
			this.show3 = false;
			this.birth = val;
			console.log(val)
		},
		getV(val) {
			this.place = val;
			var p = val;
			var b = p.indexOf('(');
			var c = p.indexOf(')');
			var t = p.substr(b + 1, c - 3);
			if (t.indexOf(')') != -1) {
				this.code = t.substr(0, t.indexOf(')'))
			} else {

				this.code = t;
			}
			this.show2 = false;
		}
	}
}
</script>
<style>
.cell-right input[type=checkbox]:not(.m-switch)+.cell-radio-icon:after,
.cell-right input[type=radio]+.cell-radio-icon:after {
	content: "\E600";
	color: #E4393C !important;
	display: none;
}

.share {
	width: 45px;
	height: 45px;
	position: fixed;
	top: 85%;
	right: 15px;
}

.ks-cai-city {
	display: flex;
	height: 100%;
}

.ks-cai-city>div {
	flex: 1;
	text-align: center;
	overflow: auto;
}

.ks-flex {
	display: flex;
	line-height: 33px;
}

.ks-first {
	flex: 1;
	display: flex;
	font-size: 14px;
}

.ks-cai-div>input {
	padding: 0 5px;
}

.ks-cai-label {
	display: inline-block;
	line-height: 40px;
}

.ks-cai-label input {
	position: absolute;
	left: -9999px;
}

.ks-cai-label input+span:after {
	content: "    ";
	color: red;
	display: inline-block;
	width: 13px;
	height: 13px;
	border-radius: 50%;
	margin-left: 5px;
	border: 1px solid #ccc;
	line-height: 13px;
}

.ks-cai-label input:checked+span:after {

	background: #E4393C;
	/*line-height: 13px;
		font-size: 13px;*/
}

.ks-cai-shot {
	display: inline-block;
	width: 8px;
	height: 8px;
	border-radius: 50%;
	background-color: #E4393C;
}

.ks-cai-da {
	display: flex;
	line-height: 40px;
}

.ks-cai-big {
	font-size: 18px;
	color: #E4393C;
	font-weight: bold;
	margin-bottom: 10px;
}

.ks-cai-why {
	padding: 15px;
}

.ks-cai-date {
	height: 40px;
	line-height: 40px;
}

.ks-cai-form {
	padding: 15px;
}

.ks-cai-date {
	font-size: 14px;
}

.ks-cai-j {
	font-size: 10px;
	color: #ccc;
}

.ks-cai-input {
	padding: 10px 0;
}

.ks-cai-input input {
	/*padding: 0px 8px;*/
	/*box-sizing: border-box;*/
	height: 35px;
	outline: none;
	flex: 1;
	font-size: 15px;
	border: none;
	border-radius: 8px;
	/*padding: 0;*/
}

.ks-cai-div {
	/*padding:0 5px;*/
	border: 1px solid #ccc;
	flex: 1;
	border-radius: 8px;
}

.y-flex {
	display: flex;
	justify-content: center;
	align-items: flex-end;
}

.cai-text {
	font-size: 17px;
	margin-top: 10px;
	white-space: nowrap;
}

.cai-b-flex {
	display: flex;
	justify-content: center;
	align-items: center;
}

.cai-be-flex {
	font-size: 0.8rem;
	margin-top: 15px;
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.cai-c-flex {
	display: flex;
	justify-content: flex-start;
	align-items: center;
	white-space: nowrap;
}

.cai-c-flex img {
	width: 22px;
	height: 22px;
	margin-right: 6px;
}
</style>