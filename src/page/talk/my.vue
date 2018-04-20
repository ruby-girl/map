<template>
	<div class="ks-my-one">
		<div  @click="toMyIndex()">
		<div style="padding: 15px;display: flex;border-bottom:1px solid #f5f5f5">
			
			<div style="display: flex;">
				<div>
					<img :src="v" alt="" width="25px"/>
				</div>
				<div style="font-size: 15px;line-height: 25px;margin-left:10px">我的问题</div>
			</div>
			<div style="flex:1;text-align: right;">
				<img :src="a" alt="" height="25px" style="display: inline-block;"/>
			</div>
			
		</div>
		</div>
		<div @click="toComIndex()">
		<div style="padding: 15px;display: flex;border-bottom:1px solid #f5f5f5">
			
			<div style="display: flex;">
				<div>
					<img :src="b" alt="" width="25px"/>
				</div>
				<div style="font-size: 15px;line-height: 25px;margin-left:10px">我的讨论</div>
			</div>
			<div style="flex:1;text-align: right;">
				<img :src="a" alt="" height="25px" style="display: inline-block;"/>
			</div>
			
		</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
				v:"http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/talk/v.png",
				b:"http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/talk/b.png",
				c:"http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/talk/c.png",
				a:"http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/talk/arrow.png",
				type:''
			}
		},
		created(){
			this.type = navigator.userAgent.toLowerCase(); 
		 },
		 methods:{
			 toMyIndex(){
           if (/iphone|ipad|ipod/.test(this.type)) {
			   	   if(window.getJSessionId()){
			   		  this.$router.push('/myIndex')
			   	}else{
			   		window.webkit.messageHandlers.iOS.postMessage({4:{'windowID':10000}})	
					
			   		}
			   }else if(/android/.test(this.type)){
			   	if(window.YiDao.getJSessionId()){
			   		this.$router.push('/myIndex')
			   	}else{
			   		window.YiDao.bussinessDistribute(4,"{'windowID':10000}")
			   		}
			   	 
			   }else{
			   	 window.location="https://www.kushanbaoli.com";
			   }
		 },
		 toComIndex(){
			  if (/iphone|ipad|ipod/.test(this.type)) {
			   	   if(window.getJSessionId()){
			   		  this.$router.push('/comIndex')
			   	}else{
			   		window.webkit.messageHandlers.iOS.postMessage({4:{'windowID':10000}})	
					
			   		}
			   }else if(/android/.test(this.type)){
			   	if(window.YiDao.getJSessionId()){
			   		this.$router.push('/comIndex')
			   	}else{
			   		window.YiDao.bussinessDistribute(4,"{'windowID':10000}")
			   		}
			   	 
			   }else{
			   	 window.location="https://www.kushanbaoli.com";
			   }
			 }
		 }
	}
</script>