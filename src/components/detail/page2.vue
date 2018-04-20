<template>
	<div class="serve">
	  <!--服务详情-->
     <div class="serveLie">
        <div class="back-hui">
          <div class="shu"></div>
          <div>服务名称</div>
        </div>
        <div style="color:#aaa;font-size:14px">{{serve.serviceName}}&nbsp;&nbsp;&nbsp;&nbsp; <i style="color:#e4393c;">{{serve.price*serve.dicount}}</i>易道币</div>
     </div>
		  <div class="serveLie" >
        <div class="back-hui">
          <div class="shu"></div>
          <div>服务描述</div>
        </div>
        <div style="color:#aaa;font-size:14px">{{serve.serviceDesc}}</div>
     </div>
		 <div style="display:flex">
      <div style="width:32%;height:80px;margin-bottom:15px;margin:10px 1%;" v-for="item in serve.list">
			   <img :src="item" alt="" style="width:100%;height:100%;">
			</div>
		 </div>
		 <div class="serve-bottom" @click="toPay()">
			 <div class="payBotton">购买服务</div>
		 </div>
	</div>
</template>
<script>
	import Navs from '../../components/nav';
	import btn from '../../components/button';
	import share from '../../share';
 import httputil from '../../httputil'
 
	export default{
		components:{
			Navs,btn
		},
		data(){
			return{
			 serve:null,
			 mId:this.$route.query.masterId,
			 ref:null
			}
		},
		created(){
			document.title='服务详情'
				let r=window.location.href.split('ref=')
				this.ref=r[1]
			httputil.doRequest('/Master/masterServiceDetails',{'sId':this.$route.query.sId},1,this.onSuccess,null,false)

		},
			mounted: function () {
  	     this.$nextTick(()=>{
  	     
  	     })
  	   },
		methods:{
			toPay(){
				if(this.$route.query.busyState>4||this.$route.query.state==2){
           	this.$dialog.toast({
			   	mes: '这位大师已经爆单啦！稍后再来哦！',
			   	timeout: 1500
		    	});
				}else{
						if(this.$route.query.state==0){
						this.$dialog.toast({

						mes: '这位大师不在状态，暂时无法接收订单哦！',
						timeout: 2000
					 });
						}else if(this.$route.query.state==3){
               	this.$dialog.toast({
					 	mes: '这位大师闭关中，暂时无法接收订单哦！',
						timeout: 2000
					 });
						}else{
               this.$router.push('/pay?sId='+this.serve.sId+'&txt='+this.serve.serviceName+'&num='+this.serve.price*this.serve.dicount+'&masterId='+this.mId+'&ref='+this.ref)
						}
           
				}
     
			},
	     onSuccess(res){
          this.serve=res
			 }
		},
		watch:{
		
		}
	}
</script>
<style type="text/css">
.serveLie{
  width:100%;
  color:#000;
  font-size: 16px;
  line-height: 25px;
  padding:0  15px 0 15px;
}
.shu{
  display: inline-block;
  margin-right: 5px;
  height:14px;
  width:4px;
  background: #0475FD;
  border-radius: 2px;
	margin-top: -4px;
}
.back-hui{
  padding: 5px 0;
  font-size: 17px;
  display: flex; 
  align-items: center;
	
}
.serve{
font-size:14px;
-webkit-box-orient:vertical;
padding-top:15px;
display: flex;
flex-direction: column;
height:100%;
}
.serve-bottom{
flex: 1;
margin-top: 20px;
text-align: center;
padding: 0 15px;
background: #eee;
}
.payBotton{
	margin-top: 30px;
	border-radius: 4px;
  width:100%;
	height:40px;
	background: #f57767;
	line-height: 40px;
	color:#fff;
}
</style>