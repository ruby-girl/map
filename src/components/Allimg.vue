<template>
	<div @click="get()">
	 <div style="font-size:16px;color:red;width:60px;height:60px;" >
      
    </div>
	</div>
</template>
<script>
	export default{
			props:{
			type:{
				default:true
			}
		},
		data(){
			return{
		   
			}
		},
  	mounted () { 
			 window.h5GetImageUrl = this.h5GetImageUrl
		},
		methods:{
      get(){
        	let ua = navigator.userAgent.toLowerCase(); 
	   	if (/iphone|ipad|ipod/.test(ua)) {
         window.webkit.messageHandlers.iOS.postMessage({17:{'type':this.type}})  
       }else if(/android/.test(ua)){
          window.YiDao.bussinessDistribute(32,JSON.stringify({'type':this.type}));
       }
      },
      h5GetImageUrl(u){    
        this.$emit('getURL',u)
      },
		
				
		
		}
	}
</script>
<style>
 
</style>
