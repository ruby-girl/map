<template>
	<div class="container">
		
				<div  style="text-align: right;font-size: 14px;color:deepskyblue;marginTop:10px;" @click='goDele()'>
				删除
			</div>	
	
   <div style="border:1px solid #e9e9e9;borderTop:none;">
		 <div class="eTit">微易道致：</div>
		 <div class="eTitTime">{{content.createTime}}</div>
	 </div>
	 <div style="padding:10px 15px;fontSize:15px;">
     <div>{{content.message}}</div>
		 <div v-if="content.url!=''" style="text-align:center;margin-top:20px;">
       <div @click="toTZ(content.url)" style="color:deepskyblue;">我要去看看</div>
		 </div>
		 
	 </div>
	</div>
</template>
<script type="text/javascript">
	import navbar from '../../components/nav';
	import httputil from '../../httputil'
	export default{
		data(){
			return{
         id:this.$route.query.eId,
				 content:null
			}
		},
		components:{
			navbar
		},
		created(){
			console.log(this.id)
      document.title='邮件'
				httputil.doRequest('/Myself/peekUserEmail',{'eId':this.id},1,this.onSuccess,this.onError,true) 
		},	
		methods:{
			onError(res){
        	this.$dialog.alert({
						mes: res})
			},
			onSuccess(res){
        this.content=res
			},
			goDele(){  
						httputil.doRequest('/Myself/deleteUserEmail',{'eId':this.id},1,this.onDSuccess,this.onError,true) 
  	     },
				 onDSuccess(res){
					this.$dialog.alert({
                    mes: '成功删除邮件',
                    callback: () => {
                        this.$router.go(-1)
                    }
                });
			
	},
	toTZ(u){
		this.$router.push(u)
	}
}
}
	
	
</script>
<style scoped>
.eTit{
	font-weight: bold;
	font-size: 16px;
	padding: 10px 0 10px 10px;
  color:#333;
}
.eTitTime{
	color:#aaa;
	text-align: right;
	padding-right: 15px;
	padding-bottom: 10px;
}
</style>
