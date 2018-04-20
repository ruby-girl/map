<template id="1">
	<div class="container">
	
		<loads v-show='show'></loads>
		<div v-show='!show'>
			<div class="ks-meng">
				{{title}}
			</div>
		<div class="ks-meng-panel" @click='open(index)' v-for='(arr,index) in list'>
			<div class="ks-meng-la">
				<div class="ks-meng-text">{{arr.outline}}</div>
				<div :class="['ks-meng-left',{left:isactive=num==index?true:false}]"></div>
			</div>
			<div :class="{open:isactive=num==index?true:false,close:isit=num==index?false:true}">
				<div>
					<span style="display: inline-block;width: 5px;height: 5px;border-radius:50%;background: #E4393C;margin-right:5px;"></span>
					<span style="font-size: 14px;">
						{{arr.explain}}
					</span>
				</div>
				<div v-show="arr.extendExplain==''?false:true">
					<span style="display: inline-block;width: 5px;height: 5px;border-radius:50%;background: #E4393C;margin-right:5px;"></span>
					<span style="font-size: 14px;">
						{{arr.extendExplain}}
					</span>
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
import httputil from '../httputil';
import Navs from '../components/nav.vue';
import loads from '../components/loading'
import share from '../share';
	export default{
		name:'infor',
		data(){
			return{
				isactive:false,
				isit:true,
				num:-1,
				list:[],
				show:true,
				title:'',
				sCode:null,
				 share:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/cesuan/4.png'
			}
		},
		components:{
			Navs:Navs,
			loads
		},
		created(){
			document.title='梦境解析'
			this.title=this.$route.query.word;
			this.GetRequest()
		},
		methods:{
				GetRequest() {
			let url = window.location.hash
			var i = url.lastIndexOf("code")
			this.sCode = i
		
		},
			open(a){
				this.num=a;
				this.isactive=true
				this.isit=false
			},
			onSuccess(res){
				this.list=res;
				this.show=false;
			},
			 oncodeSuccess(res){
             let code=res.object
				 share.toShare('梦境解析','infor?code='+code+'&word='+this.$route.query.word+'&id='+this.$route.query.id,'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/static/share/measure_10.png')
			},
			oncodeError(res){
				 this.$dialog.alert({mes:res})
			},
			toShare(){
				 httputil.doRequest('/Common/getShareCode',{'sType':11},1,this.oncodeSuccess,this.oncodeError,true) 
			
		}
		},
	  mounted: function () {
  	   this.$nextTick(()=>{
  	 	 httputil.doRequest('/DreamExplaint/dreamExplaintByType',{'id':this.$route.query.id},1,this.onSuccess,null,false) 
  	   })
  	 }
	}
</script>
<style>
	.close{
		height: 0;
		transition: .3s linear;
		overflow: hidden;
		padding: 0 15px;
	}
	.ks-meng-la,.ks-meng-yan{
		height: 45px;
		line-height: 45px;
		padding: 0 15px;
		border-top:1px solid #ccc;
		font-size:14px;
	}
	.ks-meng-la{
		display: flex;
	}
	.ks-meng-text{
		font-size: 16px;
		flex:1;
	}
	.ks-meng-left{
		margin-top:17px;
		width: 10px;
		height: 10px;
		border-left:2px solid #ccc;
		border-bottom:2px solid #ccc;
		transform: rotate(-135deg);
		transition: .3s linear;
	}
	.left{
		transform: rotate(-45deg);
		transition: .3s linear;
	}
	.ks-meng-yan{
		height: 0;
		overflow: hidden;
		padding: 0;
	}
	.open{
		transition: .3s linear;
		padding: 10px 15px;
		border-top:1px solid #ccc;
	}
	.ks-meng{
		height:80px;
		font-size:18px;
		color:#E4393C;
		font-weight: 800;
		line-height: 80px;
		padding:0 15% ;
		text-align: center;
	}
	.ks-meng-ri>a{
		color: #E4393C;
	}
	.ks-meng-ri{
		float: left;
		width:33.33%;
		text-align: center;

	}
</style>