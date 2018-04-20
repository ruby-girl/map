<template>
	<div class="container">
		
		<div class="ks-tab-a">
			<div :class="{isk:act}" @click='act=true'>
				已完成的订单
			</div >
			<div :class="{isk:!act}" @click='act=false'>
				未完成的订单
			</div>
		</div>
		
		<div v-show='act'>
			<div v-for='i in 3'>
				<div style="height: 5px;background: #f5f5f5;"></div>
				<div style="padding: 5px 15px;font-size:15px;border-bottom:1px solid #f5f5f5;">
						订单编号：13000000
				</div>
				<div class="ks-infor-a" style="padding-top:5px;height: 60px;">				
					<div class="ks-infor-b">
						<div style="font-size:14px;">姓名：优衣库</div>
						<div style="font-size:14px;">服务资费：100</div>
					</div>
					<div class="ks-infor-c">
						<div style="font-size:14px;">购买服务：八字测算</div>
						<div style="font-size:14px;">交易时间：2010-4-15</div>
					</div>
				</div>
			</div>
		</div>
		<div v-show='!act'>
			<div v-for='i in 4'>
				<div style="height: 5px;background: #f5f5f5;"></div>
				<div style="padding: 5px 15px;font-size:15px;border-bottom:1px solid #f5f5f5;">
						订单编号：13000000
				</div>
				<div class="ks-infor-a" style="padding-top:5px;height: 60px;">				
					<div class="ks-infor-b">
						<div style="font-size:14px;">姓名：优衣库</div>
						<div style="font-size:14px;">服务资费：100</div>
					</div>
					<div class="ks-infor-c">
						<div style="font-size:14px;">购买服务：八字测算</div>
						<div style="font-size:14px;color:deepskyblue">
							完成订单
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	import navbar from '../../components/nav';
	export default{
		components:{
			navbar
		},
		data(){
			return{
				act:true
			}
		},
		created(){
      document.title='我的订单'
		},	
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
</style>