<template>
	<div class="container pay">
	
		<div class="ks-pay-cell">
			<div>打赏</div> 
			
			<input v-model="money" onkeyup="value=value.replace(/[^\d]/g,'')"  type="text"  placeholder="请输入打赏金额" style="color:red;border:none;border:1px solid #eee;-webkit-appearance:none;paddingLeft:5px;display:block;">
		</div>
		
		<div style="height:8px;background: #f5f5f5;"></div>
		
		
		
		<div style="height:8px;background: #f5f5f5;"></div>
		
		<div class="ks-pay-cell" style="border-bottom: 1px solid #f5f5f5;">
			<div>支付方式</div>
			<div style="text-align: right;">{{pay}}</div>
		</div>
			<label for="zhi" class="payY">
			<div style="display:flex;align-items: center;">
				<img :src="zf" alt="" style="width:45px;height:45px;">
			  <div style="fontSize:16px;paddingLeft:10px;">支付宝</div>
			</div>		
			<div>
				<input type="radio" id="zhi" value="1" v-model="value">
				<div class="payArc">
					<div class="payArcS"></div>
				</div>
			
			</div>
		</label>
	
		<label for="yd" class="payY">
			<div style="display:flex;align-items: center;">
				<img :src="wx" alt="" style="width:45px;height:45px;">
			  <div style="fontSize:16px;paddingLeft:10px;">微信</div>
			</div>		
			<div>
				<input type="radio" id="yd" value="2" v-model="value">
				<div class="payArc">
					<div class="payArcS"></div>
				</div>
			
			</div>
		</label>
			<label for="wei" class="payY">
			<div style="display:flex;align-items: center;">
				<img :src="yd" alt="" style="width:45px;height:45px;">
			  <div style="fontSize:16px;paddingLeft:10px;">易道币<div style="fontSize:13px;color:red;">余额：{{num}}</div></div>
			</div>		
			<div>
				<input type="radio" id="wei" value="4" v-model="value">
				<div class="payArc">
					<div class="payArcS"></div>
				</div>
			
			</div>
		</label>
		
		<div style="padding: 15px;">
			<btn btnMsg='确认支付' @click.native='goTo()'></btn>
		</div>
	</div>
</template>
<script>
	import Navs from '../../components/nav';
	import btn from '../../components/button';
	import httputil from '../../httputil';
  import share from '../../share';

	export default{
		components:{
			Navs,btn
		},
		data(){
			return{
				pay:'支付宝',
				value:1,
				wx:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/cesuan/wx.png',
				yd:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/cesuan/yd.png',
				zf:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/cesuan/zf.png',
				js:'',
				num:null,
				money:null,
				sId:this.$route.query.sId,
				ref:null
			}
		},
		created(){
			document.title='打赏'
		},
		mounted: function () {
  	    this.$nextTick(()=>{
  	   	httputil.doRequest('/MySelf/memberPoint',null,1,this.onSuccess,this.onError,true) 
  	   })
     },
		methods:{
				onSuccess(res){
			this.num=res
		},
		onError(res){
			this.$dialog.toast({
	                    mes: res,
	                    timeout: 1500,
											callback:()=>{
												this.$router.go(-1)
											}
	                });	
		},
			goTo(){
				
				let r=window.location.href.split('ref=')
				this.ref=r[1]
				if(this.value==4&&this.money>this.num){
            this.$dialog.confirm({
                    mes: '您的易道币余额不足，是否跳转到充值界面？',
                    opts: () => {
                       this.$router.push('/yihome?ref='+this.ref)
                    }
                });
				}else if(this.money){
				     
            	share.pay(this.value,2,this.money,this.sId,this.ref)
				}else if(!this.money){
               this.$dialog.alert({
								 mes:'请输入金额'
							 })
				}
			}
		},
		watch:{
			value(val){
				if(val==1){
					this.pay='支付宝'
				}else if(val==2){
					this.pay='微信支付'
				}else{
					this.pay='易道币'
				}
			}
		}
	}
</script>
<style type="text/css">
	.pay .radio-text{
		display: none;
	}
	.ks-pay-way{
		height: 70px;
		display: flex;
		padding: 15px;
		border-bottom: 1px solid #f5f5f5;
	}
	.ks-pay-way img{
		width: 40px;
		height: 40px;
	}
	.ks-pay-way>div{
		flex:1;
	}
	.ks-pay-cell{
		height: 50px;
		line-height: 50px;
		display: flex;
		padding: 0 15px;
		justify-content: space-between;
	}
	.ks-pay-cell>div{
		font-size:15px;
	}
	.payY{
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
	input:checked+.payArc>.payArcS{
      	background: red;
	}
	input{
		display: none;
	}
</style>