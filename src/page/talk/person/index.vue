<template>
	<div style="padding:0 15px;">
	<div class="ks-person-form person">
			<div class="ks-person-c">
				<div>
					<img :src="hd" alt="" width="25px" />
				</div>
				<div style="margin-left:12px;">真实姓名</div>
			</div>	
		</div>
		<input type="text"  class="nameInput"  placeholder="填写姓名" v-model="name" />

		<div class="ks-person-form person">
			<div class="ks-person-c">
				<div>
					<img :src="hd1" alt="" width="25px" />
				</div>
				<div style="margin-left:12px;">性别</div>
			</div>
			<div class="ks-person-d">
				<yd-radio-group v-model="sex" color="#F00">
					<yd-radio val="1"></yd-radio>男
					<yd-radio val="0"></yd-radio>女
				</yd-radio-group>
			</div>
		</div>
		<div class="ks-person-form person">
			<div class="ks-person-c">
				<div>
					<img :src="hd2" alt="" width="25px" />
				</div>
				<div style="margin-left:12px;">出生时辰</div>
			</div>
			<div class="ks-person-d" @click='show3=true' style="line-height: 25px;">
				{{birth}}
			</div>
		</div>
		<div class="ks-person-form person">
			<div class="ks-person-c">
				<div>
					<img :src="hd3" alt="" width="25px" />
				</div>
				<div style="margin-left:12px;">出生地点</div>
			</div>
			<div class="ks-person-d" style="line-height: 25px;" @click="show2=true">
				{{place}}
			</div>
		</div>
		<div style="padding: 40px 15px;">
			<btn btnMsg='下一步' @click.native='goo()'></btn>
		</div>

		<yd-popup v-model="show3" position="center" width="85%" style='overflow: auto;'>
			<div class="ks-cai-city" style="font-size:15px;">
				<calendar @getDate='getD' @can='show3=false'></calendar>
			</div>
		</yd-popup>
		<yd-popup v-model="show2" position="center" width="80%">
			<addr @getVal='getAddr' @cancel='show2=false'></addr>
		</yd-popup>
	</div>
</template>
<script type="text/javascript">
import navbar from '../../../components/nav';
import btn from '../../../components/button';
import calendar from '../../../components/calendar';
import addr from '../../../components/addr'
import httputil from '../../../httputil';
export default {
	components: {
		navbar, calendar, btn, addr
	},
	props: {
		a: {
			default:''
		}
	},
	data() {
		return {
			name: '',
			place: '北京(110000)',
			show2: false,
			show3: false,
			sex: 1,
			birth: '1991-04-16 00:00:00',
			hd: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/person/4.png',
			hd1: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/person/5.png',
			hd2: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/person/6.png',
			hd3: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/person/7.png',
			hd4: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/person/8.png',
			hd5: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/person/3.png',
		}
	},
	created() {
	 if(this.a){
		 httputil.doRequest('/Quiz/rewardCheckDetails', {'questionId':this.a}, 1, this.onISuccess, this.onIError, true)
	 }else{
     return
	 }
	},
	methods: {
		onIError(res){
      this.$dialog.alert({ mes:res});
		},
		onISuccess(res){
			this.name=res.cName
		  this.place=res.areaString
			this.birth=res.birthString
			this.sex=res.cSex
			
		},
		getD: function(val) {
			this.show3 = false;
			this.birth = val;

		},
		goo() {
			if (this.name) {
				var reg = /^[\u4e00-\u9fa5]+$/;
				if (!this.name.match(reg)) {
					this.$dialog.alert({ mes: '请检查姓名格式是否正确！' });
				} else {
					var text = [this.name,this.sex,this.birth,this.place]
					// this.$router.push('/talkQues?text=' + text)
					this.$emit('toPage2',text)
				}
			} else {
				this.$dialog.toast({
					mes: '请填写姓名！'
				})
			}

		},
		getAddr: function(val) {
			this.show2 = false;
			this.place = val;
		},
		getCancel() {
			this.show2 = false;
		}
	}
}
</script>
<style>
	.ks-p>p {
		font-size: 15px;
		padding: 8px 0;
	}

	.ks-phone-a {
		outline: none;
		line-height: 25px;
	}

	.person .radio-text {
		display: none !important;
	}

	.person .m-radio {
		margin-left: 10px;
	}

	.ks-person-form {
		margin-top:15px;
		display: flex;
		font-size: 15px;
		border: 1px solid #f5f5f5;
		border-radius: 40px;
	}

	.ks-person-c {
		display: flex;
		line-height: 25px;
	}

	.ks-person-form>div {
		flex: 1;
	}

	.ks-person-head {
		display: flex;
		padding: 15px;
	}

	.ks-person-head>div {
		flex: 1;
	}

	.ks-person-a {
		display: flex;
		line-height: 55px;
		font-size: 15px;
	}

	.ks-person-b {
		text-align: right;
	}

	.ks-person-b>img {
		display: inline-block;
	}
	.nameInput{
		outline: none;
	 -webkit-appearance: none;
		border:1px solid #eee;
		height:30px;
		position: absolute;
		top:110px;
		right:10%;
		padding-left: 5px;
		font-size: 15px;
		width:41%;
	}
</style>