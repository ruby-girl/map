<template>
	<div class="container">
	
		<div >
			<div class="ks-bazi-head" style="padding: 15px;">
				<div style="padding-top: 15px;margin-right:10px;">
					<img :src="img1" alt="" width="100%"/>
					<div style="margin-top:30px ;font-size: 18px;color:#E4393C;font-weight: 800;">
						看看您的手机号码多少分:
					</div>
				</div>
				<div>
					<img :src="img2" alt="" width="100%" height="100%"/>
				</div>
			</div>
			<div style="color:#332c2b;padding-top:15px;font-size: 14px;text-align: justify;padding: 15px;">
				<div class="ks-phone-panel">
					<div v-for='i in score'>{{i}}</div>
				</div>
			</div>
		</div>
		<div style="height: 10px;background: #f5f5f5;"></div>
		<div class="ks-cai-form">
			<div class="ks-cai-input">
				<label for="" class="ks-cai-da">
					<div class="ks-cai-date">电话号码：</div>
					<div style="" class="ks-cai-s">
						<input type="text" name="" id="" value="" v-model='phone' placeholder="输入您的手机号码" />
					</div>
				</label>
			</div>
			<div class="ks-cai-input ks-flex">
				
				<div class="ks-cai-date">选择性别：</div>
				<div class="ks-first">
					<div>
						<label style="display: flex;" class="ks-cai-label">
							<div>
								男
							</div>
							<div>
								<input type="radio" name="" id="" value="1" v-model="sex"/>
								<span class="cell-checkbox-icon">
									<i ></i>
								</span>
							</div>
							<div style="margin-top:5px;">
								<img :src="img3" alt="" width="30px"/>
							</div>
						</label>
					</div>
					<div>
						<label style="display: flex;" class="ks-cai-label">
							<div>
								女
							</div>
							<div>
								<input type="radio" name="" id="" value="0" v-model="sex"/>
								<span class="cell-checkbox-icon">
									<i ></i>
								</span>
							</div>
							<div style="margin-top:5px;">
								<img :src="img4" alt="" width="30px"/>
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
						<input type="text" name="" id="" disabled value="" v-model='birth'  placeholder="选择出生日期" />
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
			
			<div >
				<div style="font-size: 15px;color:#E4393C;padding: 5px 0;">
					测试后你将看到以下内容：
				</div>
				<div style="display: flex;">
					<div style="padding: 5px 0;display: flex;line-height: 20px;">
						<div>
							<img :src="img5" alt="" width="20px"/>
						</div>
						<div style="margin:0 10px;">
							手机号码吉凶
						</div>
					</div>
					<div style="padding: 5px 0;display: flex;line-height: 20px;">
						<div>
							<img :src="img6" alt="" width="20px"/>
						</div>
						<div style="margin:0 10px;">
							手机号码总体评分
						</div>
					</div>
				</div>
			</div>
			
		</div>
		<div style="height: 10px;background: #f5f5f5;"></div>
		
		<yd-popup v-model="show3" position="center" width="85%" style='overflow: auto;'>
			<div class="ks-cai-city">
				<calendar @getDate='getD' @can='show3=false'></calendar>
			</div>
		</yd-popup>
		<yd-popup v-model="show2" position="center" width="85%" style='overflow: auto;'>
			<addr @getVal='getV' @cancel='show2=false'></addr>
        </yd-popup>
      <div class="share" @click='toShare()' v-if="sCode==-1">
			<img :src="share" alt="" width="100%"/>
		</div>   
	</div>
</template>
<script>
	import navbar from '../../components/nav';
	import Btn from '../../components/button';
	import calendar from '../../components/calendar';
	import addr from '../../components/addr';
	import httputil from '../../httputil'
	import share from '../../share';
	export default{
		components:{
			navbar,Btn,calendar,addr
		},
		created(){		
      document.title='号码吉凶'
			this.GetRequest()
		},
		watch:{
			
				xian(val){
					
				}			
		},
		methods:{
				GetRequest() {
			let url = window.location.hash
			var i = url.lastIndexOf("code")
			this.sCode = i
		},
			fenxi(){
				var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(14[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
				if(!myreg.test(this.phone)){
					this.$dialog.toast({
	                    mes: '请输入正确的手机号码',
	                    timeout: 1500,
                	});
				}else{			
            	this.$router.push('/score?sex='+this.sex+'&areaCode='+this.code+'&birthday='+
				  this.birth+'&tel='+this.phone)
					}
			},
				oncodeSuccess(res){
             let code=res.object
				 share.toShare('手机号测算','phone?code='+code,'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/static/share/measure_5.png')
			},
			oncodeError(res){
				 this.$dialog.alert({mes:res})
			},
			toShare(){
				 httputil.doRequest('/Common/getShareCode',{'sType':6},1,this.oncodeSuccess,this.oncodeError,true) 
			
		},
			getMoney(){
				console.log(0)
			},
			getD:function(val){
				this.show3=false;
				this.birth=val;
				console.log(val)
			},
			getV(val){
				this.place=val;
					var p=val;
					var b=p.indexOf('(');
					var c=p.indexOf(')');
					var t=p.substr(b+1,c-3);
					if(t.indexOf(')')!=-1){
						this.code=t.substr(0,t.indexOf(')'))
					}else{
						
						this.code=t;
					}
				this.show2=false
			}
		},
		data(){
			return{
				jse:'',
				phone:'',
				s:"00",
				f:"00",
				m:"00",
				show4:false,
				show1:false,
				show2:false,
				hide:false,
				pro:[],
				picked:'',
				city:'',
				areas:'',
				list:[],
				xian:'',
				place:'',
				result:'',
				show3:false,
				sex:1,
				birth:'1938-1-1 00:00:00',
				time:'00:00:00',
				place:'北京(110000)',
				code:'110000',
					share:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/cesuan/4.png',
				img1:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/phone/wen.png',
				img2:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/phone/1.png',
				img3:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/color/10.png',
				img4:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/color/11.png',
				img5:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/phone/2.png',
				img6:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/phone/3.png',
				score:['0-30','衰弱无力','30.1-55','平中富贵','55.1-74.9','贵人主事','75-84.9','大吉大昌','85-100','荣华富贵'],
				sCode:null
			}
		}
	}
</script>
<style>
	.ks-phone-panel>div{
		width: 25%;
		text-align: left;
		float: left;
		padding: 5px 0;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.share{
		width: 45px;
		height: 45px;
		position: fixed;
		top:85%;
		right:15px;
	}
	.ks-phone-panel:after{
		content: "";
		display: block;
		clear:both;
	}
	.ks-bazi-pic{
		padding: 5px;
	}
	.ks-cai-div>input{
		position: absolute;
		left:9999px;
	}
	.ks-bazi-zi{
		width: 50%;
		float: left;
		padding: 3px;
	}
	.ks-bazi-master{
		height: 100px;
		background: #E4393C;
		padding: 15px 10px;
		font-size:15px;
		color:white;

	}
	.ks-bazi-ji{
		width: 80%;
		height: 80%;
		position: relative;
		background: white;
		left:10%;
		top:10%;
		border-radius:10px;
		overflow: auto;
	}
	.ks-cai-s{
		border: 1px solid #ccc;
	    padding:0 5px;
	    flex: 1;
	    border-radius: 8px;
	}
	.ks-bazi-wrap{
		width: 100%;
		height: 100%;
		position: fixed;
		top: 0;
		background: rgba(0,0,0,.5);
	}
	.cell-left>span{
		color:#E4393C;
	}
	.cell-arrow:after{
		color:#E4393C !important;
	}
	.ks-bazi-chi{
		float: left;
		width: 50%;
		text-align: center;
		display: flex;
		margin-bottom:15px;
	}
	.ks-bazi-panel{
		padding-top: 15px;
	}
	.ks-bazi-panel:after{
		content: "";
		display: block;
		clear: both;
	}
	.ks-bazi-big{
		font-size:18px;
		color:#E4393C;
		padding: 10PX 0;
		font-weight: 800;
	}
	.ks-bazi-head{
		display: flex;
		margin-top:20px;
	}
	.ks-bazi-head>div{
		flex:1;
	}
</style>