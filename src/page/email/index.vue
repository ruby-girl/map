<template>
	<div class="container">
    	<div v-show='show' >
    		
    	<div class="ks-ce-dong" v-for="(item,i) in list" @click="toEmail(item.id)">
	        	<div class="ks-ce-head">
	        		<img :src="sc" alt="" width="100%" height="65px" style="border-radius:50%;"/>
	        	</div>
	        	<div class="ks-ce-tou" >
					<div style="height: 30px;line-height: 30px;display: flex;" class="ks-lu-p">
						<div style="flex:1;">
							小易
						</div>
						<div class="ks-mek" >
							<span></span>
						</div>
					</div>
					<div class="ks-mes-b">
						<div class="ks-mes-c">
							{{item.messaaage}}
						
						</div>
						<div class="ks-mes-a">
							{{item.createTime}}
             
						</div>
					</div>
	        	</div>
	    </div>
	    </div>
	    <!--<div v-show='!show' class="ks-none">
	    	{{msg}}
			
	    </div>-->
	</div>
</template>
<script type="text/javascript">
	import navbar from '../../components/nav';
	import httputil from '../../httputil';
	export default{
		components:{
			navbar
		},
		data(){
			return{
				sc:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/pay/email.png',
				show:true,
				// msg:'还没有邮件哦！',
				list:[],
				type:null
			}
		},
		created(){
      document.title='我的邮件'
		
		},
		mounted: function () {
  	     this.$nextTick(()=>{
  		   httputil.doRequest('/Myself/emailList',null,1,this.onSuccess,this.onError,true) 
  	    })
  	  },
  	  methods:{
  	  	onSuccess(res){
  	  		this.show=true;
	        this.list=res		
  	  	},
  	  	onError(res){
  	  		this.show=false;
					this.$dialog.alert({
						mes: res,
						callback:()=>{
							 this.type=navigator.userAgent.toLowerCase(); 
			   if (/iphone|ipad|ipod/.test(this.type)) {
			   	  window.webkit.messageHandlers.iOS.postMessage({4:{'windowID':10004}})
          
			   }else if(/android/.test(this.type)){
			   	  window.YiDao.bussinessDistribute(4,"{'windowID':10004}")
			   }else{
			   	 window.location="https://www.kushanbaoli.com";
			   }
						}
					})
	        
  	  	},
				toEmail(ind){
					this.$router.push('/eresult?eId='+ind)
				}
  	  }
}
</script>
<style type="text/css">
	.ks-mek{
		text-align: center;
	}
	.ks-none{
		padding: 30px 15px;
		text-align: center;
		font-size:20px;
		color:#E4393C;
	}
	.ks-mek>span{
		display: block;
		width: 15px;
		height: 15px;
		background: #E4393C;
		margin-left: 80%;
		border-radius:50%;
		margin-top:7px;
	}
</style>