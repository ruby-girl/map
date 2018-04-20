<template>
	<div class="container">
		
		<div >
			<div class="ks-bazi-head" style="padding:0 15px;margin-top:0;">
				<div style="padding-top: 20%;margin-right:10px;">
					<img :src="img1" alt="" width="100%"/>
					
				</div>
				<div>
					<img :src="img2" alt="" width="100%" height="100%"/>
				</div>
			</div>
			<div style="color:#332c2b;padding-top:28px;font-size: 14px;text-align: justify;padding: 15px;">
				“陈宗玄”道长结合生辰八字中的天干，地支，纳音，五行，四季天象，五行相生相克的原理，为你测算出真实的，最准确的五行旺弱，
				是目前最权威的软件。
			</div>
			
		</div>
		<div style="height: 10px;background: #f5f5f5;"></div>
		<div style="color:#332c2b;padding-top:28px;font-size: 14px;text-align: justify;padding: 15px;">
				五行强弱代表一个人的智慧和终身易患哪些疾病，若是缺陷过重，有极大可能因某病儿离世。
				然而也有方法可以补充五行，以达到身体与智慧兼并的状态。道家讲究阴阳平衡，太弱不行，
				过盛也不吉，所以补充五行要合理，达到平衡状态为最佳。
			</div>
		<div class="ks-cai-form">

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
						<input type="text" name="" id="" value="" v-model='birth'  placeholder="如19600321" />
					</div>
				</label>
			</div>

			<div class="ks-cai-input">
				<label for="" class="ks-cai-da">
					<div class="ks-cai-date">出生地点：</div>
					<div class="ks-cai-div" @click='show4 = true'>
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
		
		<yd-popup v-model="show3" position="center" width="85%" style='overflow: auto;'>
			<div class="ks-cai-city">
				<calendar @getDate='getD' @can='show3=false'></calendar>
			</div>
		</yd-popup>
		<yd-popup v-model="show4" position="center" width="85%" style='overflow: auto;'>
			<div class="ks-cai-city">
				<addr @getVal='getV' @cancel='show4=false' @close='show4=false'></addr>
			</div>
		</yd-popup>	
     <div class="share" @click='toShare()'  v-if="sCode==-1" >
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
			document.title='五行分析'
			 this.GetRequest()
		},
		methods:{
				GetRequest() {
			let url = window.location.hash
			var i = url.lastIndexOf("code")
			this.sCode = i
		
		},
			oncodeSuccess(res){
             let code=res.object
				 share.toShare('五行分析','wuxing?code='+code,'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/static/share/measure_9.png')
			},
			oncodeError(res){
				 this.$dialog.alert({mes:res})
			},
			toShare(){
				 httputil.doRequest('/Common/getShareCode',{'sType':10},1,this.oncodeSuccess,this.oncodeError,true) 
			
		},
			fenxi(){		
          	this.$router.push('/wresult?birthday='+this.birth+'&sex='+this.sex+
				'&areaCode='+this.code)	
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
					this.show4=false;
			}
		},
		data(){
			return{
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
				sCode:null,
				share:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/cesuan/4.png',
				img1:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/wu/five.png',
				img2:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/wu/4.png',
				img3:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/color/10.png',
				img4:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/color/11.png',
				
			}
		}
	}
</script>
<style>
	.ks-bazi-pic{
		padding: 5px;
	}
	.share{
		width: 45px;
		height: 45px;
		position: fixed;
		top:85%;
		right:15px;
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