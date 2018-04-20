<template>
	<div class="container">
		
		<div class="ks-fen-head">
			<div class="ks-fen-img">
				<div style="height: 120px;">
					<img :src="img" alt="" height="100%"/>
				</div>
			</div>
			<div class="ks-fen-text">
				<div>您一生财运数为</div>
				<div class="ks-fen-font">{{list=''?list.message:list}}</div>
			</div>
		</div>
		<div class="ks-fen-content">
			若您目前的经济超过了最小财运的三倍，那么恭喜您，您此生的财运数至少可以达到最小数的十倍。
		</div>
		<div class="ks-fen-tou">
			<div>
				<span class="ks-fen-span"></span>
			</div>
			<div style="padding-left:10px;">
				人生的财运数取决于几个方面
			</div>
		</div>
		<div class="ks-fen-xi">
			<div class="ks-fen-list">
				<div class="ks-fen-title">
					1.风水
				</div>
				<div class="ks-fen-infor">
					分为先天风水和后天风水，又有阴宅与阳宅风水之分。
					什么是风水？简单来说，就是山，水，气的结合，
					形成无形空间；用科学的说法就是磁场，那么你的风水占到多少？
				</div>
			</div>
			<div class="ks-fen-list">
				<div class="ks-fen-title">
					2.命理
				</div>
				<div class="ks-fen-infor">
					即为命，分先天和后天，先天命理是命中注定的，但是后天命理中的“福”，”禄“，”财“，”喜“，”灾“可以通过
					“风水”，“方位”，“灵性吉祥物”，“积阴德”，“道家法事”等来增加或是减少，财运数就是通过你的命理推算来的。
				</div>
			</div>
		
			
		</div>
		<div class="ks-fen-list" style="background: #f5f5f5;padding: 15px;">
				<div class="ks-fen-infor">
					若是拥有极品风水与较好的先天命理，财运数还可以突破最大限制，达到十倍，百倍增长数。
				</div>
			</div>
			 <div class="share" @click='toShare()' v-if="sCode==-1">
			<img :src="share" alt="" width="100%"/>
		</div> 
	</div>
</template>
<script type="text/javascript">
	import Navs from '../components/nav';
	import httputil from '../httputil'
  import share from '../share';

	var img='http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/money.png';
	export default{
		components:{
			Navs
		},
		data(){
			return{
				img:img,
				list:{},
				share:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/cesuan/4.png',
				sCode:null
			}
		},
		created(){
			document.title='财运分析'
			this.GetRequest()
		},
		mounted: function () {
  	     this.$nextTick(()=>{
  	     	httputil.doRequest('/Measure/lifeTimeWealth',{'birthday':this.$route.query.birth,'sex':this.$route.query.sex,'areaCode':this.$route.query.areaCode},1,this.onSuccess,null,false) 
  	     })
  	   },
  	   methods:{
				 	oncodeSuccess(res){
             let code=res.object
				 share.toShare('财运分析','fenxi?code='+code+'&birth='+this.$route.query.birth+'&sex='+this.$route.query.sex+'&areaCode='+this.$route.query.areaCode,'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/static/share/measure_4.png')
			},
			oncodeError(res){
				 this.$dialog.alert({mes:res})
			},
			toShare(){
				 httputil.doRequest('/Common/getShareCode',{'sType':5},1,this.oncodeSuccess,this.oncodeError,true) 
			
		},
  	   	onSuccess(res){
  	   		this.list=res
  	   	},
				 GetRequest() {  
     let url=window.location.hash
		 var i=url.lastIndexOf("code")
	   this.sCode=i
	 }
  	   }
	}
</script>
<style>
	.ks-fen-list{
		padding: 10px 0;
	}
	.ks-fen-infor{
		font-size:15px;
		padding: 5px;
		word-spacing: 2px;
		text-indent: 30px;
		text-align: justify;
	}
	.ks-fen-title{
		font-size:17px;
		color: #E4393C;
	}
	.ks-fen-xi{
		padding: 15px;
	}
	.ks-fen-tou{
		/*padding: 5px 0;*/
		height: 30px;
		line-height: 30px;
		display: flex;
		background: #f5f5f5;
	}
	.ks-fen-tou>div{
		height: 100%;
	}
	.ks-fen-span{
		display: inline-block;
		width: 8px;
		background: dodgerblue;
		height: 30px;
	}
	.ks-fen-head{
		height: 150px;
		background: #E4393C;
	}
	.ks-fen-content{
		padding: 15px;
		font-size:14px;
	}
	.ks-fen-font{
		font-size:20px ;
	}
	.ks-fen-head>div{
		float: left;
		padding: 15px;
	}
	.ks-fen-img{


	}
	.ks-fen-text{
		margin-top:40px;
		color:white;
	}
</style>