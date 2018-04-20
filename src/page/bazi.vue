<template>
	<div class="container">
		
		<div >
			
			<div class="ks-bazi-head" style="padding: 15px;">
				<div style="padding-top: 15px;margin-right:10px;">
					<img :src="img1" alt="" width="100%"/>
					<div style="margin-top:30px ;font-size: 18px;color:#E4393C;font-weight: 800;">
						测算前必看:
					</div>
				</div>
				<div>
					<img :src="img2" alt="" width="100%" height="100%"/>
				</div>
			</div>
			<div style="color:#332c2b;padding-top:28px;font-size: 14px;text-align: justify;padding: 15px;">
				测算人的真实生辰与身份证或其他证件上的日期不一致，可测算两次综合查看，以得到最准确的结果。例如您的真实生辰为国历1963年8月21日，农历1963年7月初3；
				身份证上记录的是1963年7月3日或1963年8月21日为稳合，只需要测算一次即可。若身份证上记录的是这两个日期以外的时间，即为修改生辰，实属天意，命理会
				受到修改以后的生辰八字的影响。
			</div>
			<div style="padding: 15px;color:#332c2b;padding-top:15px;font-size: 14px;text-align: justify;">
				<div class="ks-bazi-big">
					测算后你将看到以下内容
				</div>
				<div class="ks-bazi-panel">
					<div v-for='it in imgs' class="ks-bazi-chi">
						<div>
							<img :src="it.img" alt=""  width="20px"/>
						</div>
						<div style="margin-left:8px;font-size:15px;">
							{{it.text}}
						</div>
					</div>
				</div>
			</div>
		</div>
		<div style="height: 10px;background: #f5f5f5;"></div>
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
						<input type="text" name="" id="" value="" disabled v-model='birth' placeholder="出生时辰" />
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
		<yd-cell-item arrow type="label" @click.native='hide=true'>
		    <span slot="left">定能大富大贵的生辰八字</span>
		</yd-cell-item>
		<yd-popup v-model="show3" position="center" width="85%" style='overflow: auto;'>
			<div class="ks-cai-city">
				<calendar @getDate='getD' @can='show3=false'></calendar>
			</div>
			
		</yd-popup>
		<yd-popup v-model="show2" position="center" width="85%" style='overflow: auto;'>
			<addr @getVal='getV' @cancel='show2=false' ></addr>
        </yd-popup>
        
        <div class="ks-bazi-wrap" v-show='hide' @click='hide = false'>
        	<div class="ks-bazi-ji">
        		<div class="ks-bazi-master">
        			以下是我们知名大师级艺人,知名女星和商界巨富的生辰八字与以上生辰八字相似者，定能大富大贵。
        		</div>
        		<div class="ks-bazi-pic">
        			<div class="ks-bazi-zi" v-for='it in pic'>
        				<img :src="it" alt="" width="100%"/>
        			</div>
        		</div>
        	</div>
        </div>
				<div class="share" @click='toShare()' v-if="sCode==-1">
			<img :src="share" alt="" width="100%"/>
		</div>
	</div>
</template>
<script>
	import navbar from '../components/nav';
	import Btn from '../components/button';
	import Calendar from '../components/calendar';
	import addr from '../components/addr';
	import share from '../share';
  import httputil from '../httputil'

	export default{
		components:{
			navbar,Btn,Calendar,addr
		},
		created(){
			document.title='八字测算'
			this.GetRequest()
		},
		
		methods:{
			fenxi(){
				if(this.sCode==-1){
          	this.$router.push('/test?birthday='+this.birth+'&sex='+this.sex+'&areaCode='+this.code);
				}else{
					 this.$dialog.confirm({
                    
                    mes: '是否前往官网下载微易道APP',
                    opts: () => {
                        window.location="https://www.kushanbaoli.com";
                    }
                });
					}			
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
				this.show2 = false
			},
			oncodeSuccess(res){
					let code = res.object
         share.toShare('八字测算','bazi?code='+code,'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/static/share/measure_1.png')
			},
			oncodeError(res){
				this.$dialog.alert({ mes: res})
			},
			toShare(){
				 httputil.doRequest('/Common/getShareCode',{'sType':2},1,this.oncodeSuccess,this.oncodeError,true) 
		},
		GetRequest() {  
     let url=window.location.hash	
		var i=url.lastIndexOf("code")
	   this.sCode=i
		 console.log('这是codei='+i)
	 }
		},
		
		data(){
			return{
				s:'00',
				f:'00',
				m:'00',
				show4:false,
				dat:null,
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
				img1:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/bazi/wenzi.png',
				img2:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/bazi/ce.png',
				img3:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/color/10.png',
				img4:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/color/11.png',
				imgs:[
					{img:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/bazi/4.png',text:'学业·命格'},{img:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/bazi/5.png',text:'五行属性'},{img:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/bazi/6.png',text:'同年共性'},
					{img:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/bazi/7.png',text:'最佳合作属相'},{img:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/bazi/8.png',text:'命理特性'},{img:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/bazi/9.png',text:'个人性格'},
					{img:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/bazi/10.png',text:'命中凶星'},{img:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/bazi/11.png',text:'运势流年走向'},{img:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/bazi/12.png',text:'命中吉神'},
					{img:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/bazi/13.png',text:'称骨算命'},{img:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/bazi/14.png',text:'个人姻缘'},{img:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/bazi/15.png',text:'不宜共事属相'},
					{img:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/bazi/16.png',text:'婚姻命格'},{img:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/bazi/17.png',text:'婚姻提示'},{img:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/bazi/18.png',text:'命理归纳'},
					{img:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/bazi/19.png',text:'最佳最差配偶'},
				],share:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/cesuan/4.png',
				pic:[
					'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/bazi/a.png','http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/bazi/b.png','http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/bazi/c.png',
					'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/bazi/d.png','http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/bazi/e.png','http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/bazi/f.png',
					'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/bazi/g.png'
				],
				sCode:null
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
		top:80%;
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
		padding:0 9%;
	}
	.ks-bazi-panel:after{
		content: "";
		display: block;
		clear: both;
	}
	.ks-bazi-big{
		font-size:18px;
		color:#E4393C;
		padding: 10px 25px;
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