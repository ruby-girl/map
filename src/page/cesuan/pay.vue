<template>
	<div class="container pay">
		
		<div class="ks-pay-cell">
			<div>需支付</div>
			<div style="text-align: right;color:#E4393C;">{{price/100}}</div>
		</div>
		
		<div style="height:8px;background: #f5f5f5;"></div>
		
		<div class="ks-pay-cell">
			<div>咨询项目</div>
			<div style="text-align: right;white-space:nowrap;text-overflow: ellipsis;overflow:hidden;">{{txt}}</div>
		</div>
		
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
		 <div style="padding: 8px 15px;background: #f5f5f5;">
        	注：100易道币=1元人民币
        </div>
		<div style="padding: 15px;">
			<btn btnMsg='确认支付' @click.native='goTo()'></btn>
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
				pay:'',
				value:1,
				wx:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/cesuan/wx.png',
				yd:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/cesuan/yd.png',
				zf:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/cesuan/zf.png',
				price:'',
				txt:'',
				sId:null,
				num:null,
				ref:null
			}
		},
		created(){	
			document.title='支付'	
		  	let r=window.location.href.split('ref=')
				this.ref=r[1]
			this.price=this.$route.query.num
			this.txt=this.$route.query.txt
			this.sId=this.$route.query.sId

		},
			mounted: function () {
  	     this.$nextTick(()=>{
  	     	httputil.doRequest('/MySelf/memberPoint',null,1,this.onSuccess,this.onError,true) 
  	     })
  	   },
		methods:{
			goTo(){	
          if(this.value==4&&this.price>this.num){
            this.$dialog.confirm({
                    mes: '您的易道币余额不足，是否跳转到充值界面？',
                    opts: () => {
                       this.$router.push('/yihome?ref=http://h5.lanbobo.cn/#/masterDetail?mid='+this.$route.query.masterId)
                    }
                });
							}else{
										share.pay(this.value,1,this.price,this.sId,this.ref)
							}

			},
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
		back(){
         this.$router.push('/masterDetail?mid='+this.$route.query.masterId)
		}
		},
		watch:{
			value(val){
				if(val==1){
					this.pay='支付宝'
				}else if(val==4){
					this.pay='易道币'
				}else{
					this.pay='微信'
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
	}
	.ks-pay-cell>div{
		flex:1;
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
	.ks-header{
		height: 50px;
		line-height: 50px;
		background: #e4393c;
		padding:0 20px;
		display: flex;
		
	}
	.ks-header>div{
		flex:1;
	}
	.ks-header-left{
		width: 15px;
		height: 15px;
		border-left:2px solid #aaa;
		border-top:2px solid #aaa;
		margin-top:17px;
		transform: rotate(-45deg);
	}
	.ks-header-right{
		width: 15px;
		height: 15px;
	}
	.ks-header-title{
		flex:1;
		text-align: center;
		color:white;
		white-space:nowrap; 
	}
</style>