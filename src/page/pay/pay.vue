<template>
	<div class="container pay">
	
		<div class="ks-pay-ch">
	  		<div>需支付</div>
	  		<div class="ks-pay-mo">{{m}}元</div>
	  	</div>
	  	<div style="height: 8px;background: #f5f5f5;"></div>
	  	<div class="ks-pay-a">
	  		<div class="ks-pay-c">
	  			<div>会员类型</div>
	  			<div style="text-align: right;">{{txt}}</div>
	  		</div>
	  	
	  	</div>
	  	<div style="height: 8px;background: #f5f5f5;"></div>
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
<script type="text/javascript">
	import navbar from '../../components/nav';
	import btn from '../../components/button';
	import share from '../../share';
import httputil from '../../httputil'
	export default{
		components:{
			navbar,btn
		},
		data(){
			return{
				m:this.$route.query.m,
				sId:this.$route.query.sId,
				pay:'',
				value:1,
				wx:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/cesuan/wx.png',
				yd:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/cesuan/yd.png',
				zf:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/cesuan/zf.png',
				txt:this.$route.query.txt,
				num:null
			
			}
		},
		created(){
      document.title='支付'
		},	
			mounted: function () {
  	     this.$nextTick(()=>{
  	     	httputil.doRequest('/MySelf/memberPoint',null,1,this.onSuccess,this.onError,true) 
  	     })
  	   },
		methods:{
			goTo(){
			
				if(this.value){
            if(this.value==4&&this.m>this.num){
            this.$dialog.confirm({
                    mes: '您的易道币余额不足，是否跳转到充值界面？',
                    opts: () => {
                       this.$router.push('/yihome?ref=http://h5.lanbobo.cn/#/xufei')
                    }
                });
							}else{
										share.pay(this.value,1,this.m,this.sId,'')
							}			 
				}else{
          this.$dialog.alert({mes:'请选择一种支付方式'})
				}
			
		},
		onSuccess(res){
			this.num=res
		},
		onError(res){
			 this.$dialog.alert({
          mes: res,
					callback:()=>{
						this.$router.go(-1)
					}
			})
		}
		},
	
		watch:{
			value(val){
				if(val==2){
					this.pay='微信'
				}else if(val==4){
					this.pay='易道币'
				}else if(val==1){
					this.pay='支付宝'
				}else{
					this.pay=''
				}
			}
		}
	}
</script>
<style type="text/css">
	.ks-pay-a{
		padding: 5px 15px;
	}
	.ks-pay-c{
		display: flex;
		font-size: 15px;
	}
	.ks-pay-c>div{
		flex:1;
	}
	.ks-pay-d{
		padding: 5px 0;
		color:#ccc;
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