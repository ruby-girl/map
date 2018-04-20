<template>
	<div class="container disradio">
		<div>
						<!--循环-->
							<label for="zhi" class="payY" v-for="(item,i) in serve" :key="i" >
								<div>
									<div style="padding: 3px 0;">{{item.serviceName}}</div>
	        			  <div style="font-size:12px;color:#666">{{item.serviceDesc}}</div>
								</div>	
							
								<div @click="goPay(i)" >
									<div class="buy_right">
											<div><i style="color:#e4393c;">¥</i>{{item.price/100*item.discount}}</div>	
											<div class="buy_input_aic">	购买服务</div>
									</div>
								
								
								</div>
							
							</label>
						<!--循环end-->
	        		<div class="ks-ce-all">
				    	<button class="ks-all-btn" @click="moreServe()">全部服务</button>
				    </div>
				
	    </div>
			<div v-show="!showServe">
         <div style="textAlign:center;color:#666;">该大师还没有添加服务呢！</div>
			</div>
	</div>
</template>
<script type="text/javascript">
	import navbar from '../../components/nav';
	import btn from '../../components/button';
    import httputil from '../../httputil';
	export default{
		components:{
			navbar,btn
		},
		data(){
			return{
				value:null,
				serve:[],
				showServe:true,
				page:1
			}
		},
		created(){
			document.title='购买服务'	
			this.getServer()

		},
		methods:{
			goPay(i){
			var n=this.serve[i]
    	this.$router.push('/pay?sId='+n.sId+'&txt='+n.serviceName+'&num='+n.price/100*n.discount )
			},
			getServer(){

			httputil.doRequest('/FindMaster/masterServiceList',{'masterId':this.$route.query.masterId,'sta':1},1,this.onSuccess,this.onError,false)
		},
		onSuccess(res){
			if(res.list.length==0){
          this.showServe=false
			}else{
				this.page++
        	this.serve=res.list
			}	
		},
		onError(){
				this.$dialog.alert({
                    mes: res.message})
		},
		moreServe(){
      	httputil.doRequest('/FindMaster/masterServiceList',{'masterId':this.$route.query.masterId,'sta':this.page},1,this.onMoreSuccess,this.onError,false)
		 },
		 onMoreSuccess(res){
			 	if(res.list.length==0){
          this.$dialog.alert({
                    mes:'没有更多了哟！'})
			}else{
				this.page++
				this.serve=this.serve.concat(res.list)
			}	
		 }
		}
	
	}
</script>
<style scoped>
.payY{
	height:60px;
		display: flex;
		align-items: center;
   justify-content: space-between;
	 padding: 10px 15px;
	}
	.payArc{
		border:1px solid #e9e9e9;
		width:25px;
		height:25px;
		border-radius: 50%;
	}
	.payArcS{
		width:15px;
		height:15px;
	
		border-radius: 50%;
		margin-left: 4px;
		margin-top: 4px;
	}
	.buy_input_aic{
		font-size: 13px;
		color:#fff;
		background: #e4393c;
		padding: 5px 5px;
		border-radius: 3px;
		margin-left: 10px;
	}
	.buy_right{
		display: flex;
		align-items: center;

	}
</style>
