<template>
	<div class="container">
		
		<div class="ks-tab-a">
			<div :class="{isk:act}" @click='act=true'>
				入账
			</div >
			<div :class="{isk:!act}" @click='act=false'>
				出账
			</div>
		</div>
		<div v-show='act'>
			<div v-for='it in arr'>
				<div style="height: 5px;background: #f5f5f5;"></div>			
				<div class="ks-infor-a" style="padding-top:5px;height: 60px;">				
					<div class="ks-infor-b">
						<div style="font-size:14px;">
							{{it.bussinessType==1?'充值':(it.bussinessType==2?'系统返还':(it.bussinessType==3?'用户打赏':(it.bussinessType==4?'悬赏所得':'')))
							}}
						</div>
						<div style="font-size:14px;">
							{{
								it.payPlatform==1?'支付宝':(it.payPlatform==2?'微信':(it.payPlatform==3?'苹果内购':(it.payPlatform==4?'易道币':'')))
							}}
						</div>
					</div>
					<div class="ks-infor-c">
						<div style="font-size:14px;">{{it.createTime}}</div>
						<div style="font-size:14px;color:#E4393C">+{{it.tradePoints}}（个）</div>
					</div>
				</div>
			</div>
			<div class="ks-ce-all">
				<button @click='getMom()' class="ks-all-btn">查看更多</button>
			</div>
		</div>
		<div v-show='!act'>
			<div v-for='it in list'>
				<div style="height: 5px;background: #f5f5f5;"></div>
				
				<div class="ks-infor-a" style="padding-top:5px;height: 60px;">				
					<div class="ks-infor-b">
						<div style="font-size:14px;">
							{{
								it.bussinessType==1?'充值':(it.bussinessType==2?'系统返还':(it.bussinessType==3?'用户打赏':(it.bussinessType==4?'悬赏所得':'')))
							}}
						</div>
						<div style="font-size:14px;">
							{{
								it.payPlatform==1?'支付宝':(it.payPlatform==2?'微信':(it.payPlatform==3?'苹果内购':(it.payPlatform==4?'易道币':'')))
							}}
						</div>
					</div>
					<div class="ks-infor-c">
						<div style="font-size:14px;">{{it.createTime}}</div>
						<div style="font-size:14px;color:#E4393C">-{{it.tradePoints}}（个）</div>
					</div>
				</div>
			</div>
			<div class="ks-ce-all">
				<button  @click='getP()' class="ks-all-btn">查看更多</button>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	import navbar from '../../components/nav';
	import prox from '../../router/proxy'
	import httputil from '../../httputil';

	export default{
		components:{
			navbar
		},
		data(){
			return{
				act:true,
				arr:[],
				list:[],
				page1:1,
				page2:1,
				over:[]
			}
		},
		created(){
			document.title='消费明细'
		},
		beforeRouteEnter(to,from,next){
			next(vm=>{
				vm.arr=[];
				vm.list=[];       
				vm.getMoney();
				vm.getPay();
		
			})
		},
		methods:{
			//入账
			getMom(){

				this.page1++;
				this.getMoney();
				console.log(this.page1)
			},
			getP(){
				this.page2++;
				this.getPay();
			},
			getMoney(){
				this.$dialog.loading.open('努力加载中...');
				httputil.doRequest('/Myself/payRecord', {'type':1,'page':this.page1}, 1, this.onSuccess, this.onError, true)  
			},
			onSuccess(res){
				this.$dialog.loading.close();
					this.arr=this.arr.concat(res.list);
			},
			onError(res){
				this.$dialog.loading.close();
				if(this.page1>1){
							this.page1--;
						}
						this.$dialog.toast({
			                    mes: '没有更多的数据！',
			                    timeout: 1500
			                });
			},
			//出账
			getPay(){
				this.$dialog.loading.open('努力加载中...');
				httputil.doRequest('/Myself/payRecord', {'type':2,'page':this.page2}, 1, this.onCSuccess, this.onCError, true)
			},
			onCSuccess(res){
					this.$dialog.loading.close();		
				this.list=this.list.concat(res.list);
			},
			onCError(res){
					this.$dialog.loading.close();		
				if(this.page2>1){
							this.page2--;
						}
						this.$dialog.toast({
			                    mes: '没有更多的数据！',
			                    timeout: 1500
			                });	
			}

		}
	}
</script>
<style type="text/css">
	.ks-tab-a{
		height: 50px;
		line-height: 50px;
		display: flex;
		text-align: center;
		font-size:15px;
		padding: 0 15px;
	}
	.ks-tab-a>div{
		flex:1;
	}
	.isk{
		border-bottom: 3px solid #E4393C;
	}
	.ks-infor-a{
		padding: 15px;
		display: flex;
		border-bottom:1px solid #f5f5f5;
		font-size:15px;
		height: 80px;
	}
	.ks-infor-a>div{
		flex:1;
		height: 25px;
		line-height: 25px;
	}
	.ks-infor-c{
		text-align: right;
	}
</style>