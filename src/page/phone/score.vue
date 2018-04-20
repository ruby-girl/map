<template>
	<div class="container">
		
		<div class="ks-score-cir">
			<div class="ks-cir">
				<div class="ks-cir-c">
					<div class="ks-cir-score">
						{{obj.score}}分
					</div>
					<div class="ks-jie">
						总分100
					</div>
				</div>
			</div>
			<div style="text-align: center;color:white;padding: 10px 0;font-size: 15px;">
				{{obj.desc}}
			</div>
		</div>
		<div class="ks-score-result">
			<div class="ks-score-v">
				测算号码为：{{obj.tel}}
			</div>
			<div class="ks-score-v">
				您的出生日期为：{{obj.date}}
			</div>
			<div class="ks-score-v">
				此号码总分为：{{obj.total}}
			</div>
			
			<div class="ks-score-v">
				号码评语：<span style="color:#E4393C">{{obj.telComment}}</span>
			</div>
			<div class="ks-score-v">
				个人评语：<span style="color:#E4393C">{{obj.personComment}}</span>
			</div>
		</div>
		<div class="share" @click='toShare()' v-if="sCode==-1">
			<img :src="share" alt="" width="100%"/>
		</div>   
	</div>
</template>
<script>
	import navbar from '../../components/nav';
	import httputil from '../../httputil'
	import share from '../../share';
	export default{
		components:{
			navbar
		},
		data(){
			return{
				obj:{},
				js:'',
					share:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/cesuan/4.png',
					sCode:null
			}
		},
		created(){						
      document.title='号码吉凶'
			this.GetRequest()
		},
		mounted: function () {
  	     this.$nextTick(()=>{
  	     	httputil.doRequest('/Measure/telMeasure',{'birthday':this.$route.query.birthday,'sex':this.$route.query.sex,'areaCode':this.$route.query.areaCode,'tel':this.$route.query.tel},1,this.onSuccess,null,false) 
  	     })
  	   },
  	   methods:{
  	   	onSuccess(res){
  	   		this.obj=res
  	   	},
				 		oncodeSuccess(res){
             let code=res.object
				 share.toShare('手机号测算','score?code='+code+'&birthday='+this.$route.query.birthday+'&sex='+this.$route.query.sex+'&areaCode='+this.$route.query.areaCode+'&tel='+this.$route.query.tel,'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/static/share/measure_5.png')
			},
			oncodeError(res){
				 this.$dialog.alert({mes:res})
			},
			toShare(){
				 httputil.doRequest('/Common/getShareCode',{'sType':6},1,this.oncodeSuccess,this.oncodeError,true) 
			
		}, GetRequest() {  
     let url=window.location.hash
		 let subStrs=url.split("?")	
		 this.send=subStrs[1]	
		 let li=this.send.split('&')	 
		var i=li[0].lastIndexOf("code")
	   this.sCode=i
	 }
  	   }
	}
</script>
<style>
	.ks-score-v{
		padding: 5px 0;
		font-size:15px;
	}
	.ks-score-result{
		padding: 15px;
	}
	.ks-jie{
		font-size: 14px;
		color:#E4393C;
	}
	.ks-cir-score{
		font-size: 30px;
		color:#E4393C;
		padding-top: 40px;
	}
	.ks-score-cir{
		height:220px;
		background: #E4393C;
	}
	.ks-cir{
		width: 180px;
		height: 180px;
		background: rgba(209, 220, 208, 0.38);
		padding: 25px;
		margin:auto;
		border-radius:50%;
	}
	.ks-cir-c{
		width: 100%;
		height: 100%;
		border-radius:50%;
		background: white;
		text-align: center;

	}
</style>