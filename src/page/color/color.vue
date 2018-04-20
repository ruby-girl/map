<template>
	<div class="color container">
		
		<!--简介-->
		<div>
			<div class="color-img">
				<div>
					<img style="width:100%" src="http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/color/se.png" alt="">
				</div>
				<div>
					<img style="width:100%" src="http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/color/1.1.png" alt="">
				</div>
			</div>
			<div class="color-text">
				幸运数与忌讳数是人生中至关重要的部分，它的重要性大过幸运色，它决定了人生的起落点，世界上很多奇怪之事都与数字相关。幸运数主要用于电话号码尾号、车牌号码尾号和你住宅楼层。
			</div>
			<div class="color-text">
				幸运色主要用于你的家具、汽车、学生考试期间所作装，以及一切常用色，不包括工作服装、生活服装、若你所有的生活服装都是忌讳色，那么就有关系了。
			</div>
			<div>
				<div class="testText">测试以后你将看到以下内容</div>
				<ul class="colorUl">
					<!--<li class="colorLi" v-for="item in colorLists">
	          <img :src="item.url" alt="">
	          <span>{{item.text}}</span>
	        </li>-->
					<li class="colorLi" style="width:25%;text-align:center">
						<img src="http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/color/2.png" alt="">
						<span>幸运色</span>
					</li>
					<li class="colorLi" style="width:25%;text-align:center">
						<img src="http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/color/3.png" alt="">
						<span>忌讳色</span>
					</li>
					<li class="colorLi" style="width:25%;text-align:center">
						<img src="http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/color/4.png" alt="">
						<span>幸运数</span>
					</li>
					<li class="colorLi" style="width:22%;text-align:center">
						<img src="http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/color/5.png" alt="">
						<span>忌讳数</span>
					</li>
					<li class="colorLi" style="width:50%;">
						<img src="http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/color/6.png" alt="">
						<span>幸运色/数的使用</span>
					</li>
					<li class="colorLi">
						<img src="http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/color/7.png" alt="">
						<span>忌讳色/数的使用</span>
					</li>
					<li class="colorLi">
						<img src="http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/color/8.png" alt="">
						<span>化解汽车五行颜色相克法</span>
					</li>
	
				</ul>
			</div>
		</div>
		<!--性别出生日期选择-->
		<div class="ks-cai-form">
			<div class="ks-cai-input ks-flex">
				<div class="ks-cai-date">个人性别：</div>
				<div class="ks-first">
					<div>
						<label style="display: flex;" class="ks-cai-label">
							<div>
								男
							</div>
							<div>
								<input type="radio" name="" id="" value="1" v-model="sex" />
								<span>
									<i></i>
								</span>
							</div>
							<div style="padding-top:4px;">
								<img :src="img1" alt="" width="30px" />
							</div>
						</label>
					</div>
					<div>
						<label style="display: flex; margin-left:10px;" class="ks-cai-label">
							<div>
								女
							</div>
							<div>
								<input type="radio" name="" id="" value="0" v-model="sex" />
								<span>
									<i></i>
								</span>
							</div>
							<div style="padding-top:4px;">
								<img :src="img2" alt="" width="30px" />
							</div>
						</label>
					</div>
				</div>
			</div>
			<div class="ks-cai-input">
				<label for="" class="ks-cai-da">
					<div class="ks-cai-date">出生日期：</div>
					<div >
						<div @click="show3=true;" class="t-input"> {{birth}}</div>
						<input type="text" name="" id="" value="" placeholder="出生地点" v-model="birth" />
					</div>
				</label>
			</div>
			<div class="ks-cai-input">
				<label for="" class="ks-cai-da">
					<div class="ks-cai-date">出生地点：</div>
					<div>
						<div @click="show2=true;" class="t-input"> {{place}}</div>
						<input type="text" name="" id="" value="" placeholder="出生地点" v-model="place" />
					</div>
				</label>
			</div>
			<div class="ks-cai-input">
				<Btn btnMsg='开始测算' @click.native="toResult()"></Btn>
			</div>
		</div>
	
		<yd-popup v-model="show3" position="center" width="80%">
			<calendar @getDate="getD" @can="getC"></calendar>
		</yd-popup>
	
		<yd-popup v-model="show2" position="center" width="80%">
			<addr @getVal='getAddr' @cancel='getCancel'></addr>
		</yd-popup>
	<div class="share" @click='toShare()' v-if="sCode==-1">
			<img :src="share" alt="" width="100%"/>
		</div>
	</div>
</template>
<script>
import Tit from '../../components/nav'
import Btn from '../../components/button'
import calendar from '../../components/calendar'
import addr from '../../components/addr'
import httputil from '../../httputil'
import share from '../../share';

var img1 = 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/color/10.png'
var img2 = 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/color/11.png'

export default {
	name: 'color',
	data() {
		return {
			sex: 1,
			show4: false,
			birth: "1937-1-1 00:00:00",
			place: "北京(110000)",
			show2: false,
			result: '',
			show3: false,
			time: null,
			code: 110000,
				share:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/cesuan/4.png',
			img1: img1,
			img2: img2,
			id:'',
			sCode:null
		}
	},
	components: {
		Tit, Btn, calendar, addr
	},
	watch: {
		place(val) {
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
		}
	},
	created(){ 
			document.title='幸运色数'
	  this.GetRequest()
	},
	methods: {
			GetRequest() {
			let url = window.location.hash
			var i = url.lastIndexOf("code")
			this.sCode = i
		
		},
				oncodeSuccess(res){
             let code=res.object
				 share.toShare('幸运色测算','color?code='+code,'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/static/share/measure_6.png')
			},
			oncodeError(res){
				 this.$dialog.alert({mes:res})
			},
			toShare(){
				 httputil.doRequest('/Common/getShareCode',{'sType':7},1,this.oncodeSuccess,this.oncodeError,true) 
			
		},
		toResult() {
        	this.$router.push('/colorResult?birthday=' + this.birth + '&Code=' + this.code + '&sex=' + this.sex)	
			}
			
	},
	getD: function (val) {
		this.show3 = false;
		this.birth = val;
		console.log(val)
	},
	getAddr: function (val) {
		this.show2 = false;
		this.place = val;
		console.log(val)
	},
	getCancel() {
		this.show2 = false;
	},
	getC() {
		this.show3 = false;
	}
}

</script>
<style scoped>
.ks-time-ca {
	display: flex;
	height: 100%;
}
.share{
		width: 45px;
		height: 45px;
		position: fixed;
		top:75%;
		right:15px;
	}
.ks-time-ca>div {
	flex: 1;
	text-align: center
}

.color-img {
	padding: 0 5px;
	display: flex;
	justify-content: row;
	align-items: center;
	color: #e4393c;
	border-top: 1px solid #F2F2F2;
}

.color-text {
	text-indent: 28px;
	font-size: 15px;
	line-height: 21px;
	padding: 0 6px;
}

.colorLi {

	list-style: none;
	font-size: 14px;
	padding: 3px 3px;
	display: flex;
	flex-wrap: nowrap;
}

.colorLi img {
	height: 16px;
	width: 16px;
	margin-right: 4px;
	margin-top:1px;
}

.colorUl {
	padding-left: 5px;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	list-style: none;
}

.testText {
	color: #e4393c;
	padding: 13px 5px 6px 8px;
	font-size: 20px;
}

.colorUl::after {
	content: '';
	display: table;
	width: 100%;
	height: 4px;
	background-color: #F2F2F2;
	margin-top: 5px;
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
	padding: 10px;
}


.ks-cai-input input {
	position: absolute;
	top: -1000px;
}

.t-input {
	padding: 0px 8px;
	height: 40px;
	outline: none;
	flex: 1;
	font-size: 15px;
	border-radius: 8px;
	width: 160px;
	border: 1px solid #ccc;
}
</style>