<template>
	<div class="container">
	
		<load v-show='showA'></load>
		<div v-show='showB' class="ks-none">
	        	网络错误，点击刷新
	    </div>
		<div v-show='show'>
		<div style="padding-bottom:45px ;">
	        <div class="ks-ce-dong" style="padding:5px 15px;">
	        	<div class="ks-ce-head">
	        		<img :src="arr.information.headURL" alt="" width="100%" height="65px" style="border-radius:50%;"/>
	        	</div>
	        	<div class="ks-ce-tou" >
					<div style="height: 30px;line-height: 30px;display: flex;" class="ks-lu-p">
						<div style="padding-right:10px ;">
							{{arr.information.name}}
						</div>
						<div v-show="arr.information.userLevel>-1">
							<img :src="pic" alt="" width="22px" height="22px"/>
						</div>
						</div>
						<div style="display: flex;font-size: 14px;color:#888" class="ks-ce-icon">
							{{type}}
					</div>
	        	</div>
	        </div>
	  		<div style="height: 8px;background: #f5f5f5;"></div>
	  		<div class="ks-pay-list">
	  			<div :class="['ks-pay-ch',{selet:issele=num==it.price/100?true:false}]" @click='getNum(it.price/100,it.serviceName,it.sId)' v-for='it in price'>
	  				<div>{{it.serviceName}}</div>
	  				<div class="ks-pay-mo">￥{{it.price/100}}</div>
	  			</div>
	  			
	  		</div>
	  		<div style="height: 8px;background: #f5f5f5;"></div>
	  		<div class="ks-pay-ch" style="padding: 8px 15px;">
	  			易道会员特权
	  		</div>
	  		<div class="ks-pay-te">
	  			<div class="ks-pay-img" v-for='it in imgs'>
	  				<div style="width: 35px;margin:auto">
	  					<img :src="it.img" alt="" width="35px"/>
	  				</div>
	  				<div style="padding: 8px;">
	  					{{it.text}}
	  				</div>
	  			</div>
	  		</div>
	  		</div>
	  		<div class="ks-pay-bot">
	  			<div class="ks-pay-ca">
	  				合计：￥{{num}}
	  			</div>
	  			<div class="ks-pay-b" @click="toPay()">			
	  					<button>确认支付</button>				
	  			</div>
	  		</div>
	  		</div>
	</div>
</template>
<script type="text/javascript">
	import navbar from '../../components/nav';
	import load from '../../components/loading';
	import httputil from '../../httputil'
	export default{
		components:{
			navbar,load
		},
		data(){
			return{
				pic:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/pay/hg.png',
				hd:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/pay/tx.png',
				num:30,
				issele:false,
				imgs:[
				{img:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/pay/1.png',text:'幸运数'},
				{img:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/pay/2.png',text:'每日运势'},				
				{img:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/pay/3.png',text:'大利方位'},
				{img:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/pay/4.png',text:'时辰运势'},
				{img:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/pay/5.png',text:'八字测算所有数据'},
				{img:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/pay/6.png',text:'详推黄道吉日'},
				],
				price:[],
				show:false,
				showA:true,
				showB:false,
				arr:null,
				type:'',
				txt:'万年历月费会员(一个月)',
				sId:null
			}
		},
		created(){
      document.title='续费充值'	
			this.getM()
			this.getName()
		},
		methods:{
			getNum(val,txt,id){
				this.num=val
				this.txt=txt
				this.sId=id
				console.log(this.sId)
	},
	toPay(){
	// 从八字等过来应该有ref
  this.$router.push('/zhifu?m='+this.num+'&txt='+this.txt+'&sId='+this.sId)
	},
			getM(){
				httputil.doRequest('/Common/vipPrice',null,1,this.onSuccess,this.onError,true) 
			},
			getName(){
				httputil.doRequest('/MySelf/info',null,1,this.onNameSuccess,this.onNameError,true) 
			},
			onNameError(res){
				this.$dialog.toast({
					mes: res,
					timeout: 1500
				});
			},
			onNameSuccess(res){
				this.arr=res
				if(res.information.userLevel==-1){
           this.type='试用会员'
				}else if(res.information.userLevel==0){
           this.type='普通会员'
				}else if(res.information.userLevel==1){
            this.type='月费会员'
				}else if(res.information.userLevel==2){
           this.type='年费会员'
				}
			},
			onSuccess(res){
				this.price=res;
				this.sId=res[0].sId
					this.show=true;
					this.showA=false;
					this.num=this.price[0].price/100
			},
			onError(res){
				this.showA=false;
				this.showB=true;
			}
		}
	}

</script>
<style>
	.ks-pay-bot{
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 45px;
		font-size:15px;
		background: #FFFFFF;
		border-top:1px solid #f5f5f5;
		padding-left:15px ;
		line-height: 45px;
		display: flex;
	}
	.ks-pay-ca{
		flex:1;
	}
	.ks-pay-b{
		width: 30%;
		
	}
	.ks-pay-b>button{
		outline: none;
		border:none;
		width: 100%;
		height: 45px;
		color:white;
		background: #E4393C;
	}
	.ks-pay-te{
		padding: 15px;
	}
	.ks-pay-img{
		width: 25%;
		float: left;
		text-align: center;
	}
	.ks-pay-te:after{
		content:"";
		display: block;
		clear:both;
	}
	.selet{
		border:2px solid #E4393C !important;
		background: #f7e9e9;
	}
	.ks-pay-ch{
		padding: 15px;
		display: flex;
		font-size:15px;
		border-bottom: 1px solid #f5f5f5;
	}
	.ks-pay-ch>div:nth-child(1){
		flex:1;
	}
	.ks-pay-mo{
		text-align: right;
		color:#E4393C;
	}
</style>