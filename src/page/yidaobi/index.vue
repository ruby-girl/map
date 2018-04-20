<template>
	<div class="container">
		
			<div slot='right' style="margin:10px 10px 0 0;text-align: right;font-size: 14px;color:deepskyblue;" @click='goSu()'>
				明细
			</div>
	
		<div class="ks-yi-a">
			<div class="ks-yi-b">
				<div class="ks-yi-c">
					<img :src="pic" alt="" width="30px"/>
				</div>
				<div class="ks-yi-d">
					易道币
				</div>
			</div>
			<div class="ks-yi-e">
				{{num}}
			</div>
		</div>
		<div style="height: 8px;background: #f5f5f5;"></div>	
		<yd-cell-item>
            <span slot="left">充值易道币：</span>
            <yd-input slot="right" v-model="val" type='number' placeholder="必须为10的倍数"></yd-input>
        </yd-cell-item>
				
						<div style="fontSize:14px;padding:10px 0 0 15px;color:#E4393C;">请选择支付方式：</div>
				
				<!--支付方式样式-->
       	<label for="zhi" class="payY">
			<div style="display:flex;align-items: center;">
				<img :src="zf" alt="" style="width:45px;height:45px;">
			  <div style="fontSize:16px;paddingLeft:10px;">支付宝</div>
			</div>		
			<div>
				<input type="radio" id="zhi" value="1" v-model="payType">
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
				<input type="radio" id="yd" value="2" v-model="payType">
				<div class="payArc">
					<div class="payArcS"></div>
				</div>
			
			</div>
		</label>

        <div style="padding: 8px 15px;background: #f5f5f5;">
        	注：100易道币=1元人民币
        </div>
        <div style="padding:15px;">
			<btn  btnMsg='充值易道币' @click.native='goBack()'></btn>
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
				pic:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/pay/b.png',
				val:'',
				payType:1,
				num:'',
				wx:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/cesuan/wx.png',		
				zf:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/cesuan/zf.png',
			  ref:null
			}
		},
			created(){		
      document.title='我的易道币'
		 console.log('充值易道币ref'+window.location.href)
		},
   	mounted: function () {
  	     this.$nextTick(()=>{
  	     	httputil.doRequest('/MySelf/memberPoint',null,1,this.onSuccess,this.onError,true) 
  	     })
  	   },
		methods:{
			onError(res){
				this.$dialog.toast({
					mes: res
				})
			},
			onSuccess(res){
          this.num=res
			},
			goBack(){
				console.log(this.val/10)
				if(this.val%10!=0||this.val==0||this.val==''){
					this.$dialog.toast({
	                    mes: '充值数量必须为10的倍数',
	                    timeout: 1500
	                });
				}else{
				  	let r=window.location.href.split('ref=')
				    this.ref=r[1]
            share.pay(this.payType,4,this.val,0,this.ref)	
				}
			},
			goSu(){
				this.$router.push('/yinfor')
			}
		}		
	}
</script>
<style type="text/css">
	.ks-yi-a{
		padding: 15px;
		display: flex;
	}
	.ks-yi-a>div{
		flex:1;
		line-height: 30px;
		font-size: 15px;
	}
	.ks-yi-b{
		display: flex;
	}
	.ks-yi-d{
		margin-left:10px;
	}
	.ks-yi-e{
		text-align: right;
		color:#E4393C;
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