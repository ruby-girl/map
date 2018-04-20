<template>
	<div class="container">
		<navs title='首页' :show='true'></navs>
		
		<div style="padding: 15px;">
			<div class="ks-home-panel">
				<router-link to='/yunshi'>
					一生运势
				</router-link>
			</div>
			<div class="ks-home-panel">
				<router-link to='/marriage'>
					姻缘八字
				</router-link>
			</div>
			<div class="ks-home-panel">
				<router-link to='/cai'>
					财运分析
				</router-link>
			</div>
			<div class="ks-home-panel">
				<router-link to='/startDream'>
					周公解梦
				</router-link>
			</div>
			<div class="ks-home-panel">
				<router-link to='/bazi'>
					八字测算
				</router-link>
			</div>
			<div class="ks-home-panel">
				<router-link to='/phone'>
					号码吉凶
				</router-link>
			</div>
			<div class="ks-home-panel">
				<router-link to='/color'>
					幸运色
				</router-link>
			</div>
			<div class="ks-home-panel">
				<router-link to='/startName'>
					姓名测试
				</router-link>
			</div>
			<div class="ks-home-panel">
				<router-link to='/wu'>
					五行分析
				</router-link>
			</div>
			<div class="ks-home-panel">
				<router-link to='/voc'>
					行业分析
				</router-link>
			</div>
			<div class="ks-home-panel">
				<router-link to='/xufei'>
					充值
				</router-link>
			</div>
			<div class="ks-home-panel">
				<router-link to='/shoucang'>
					收藏
				</router-link>
			</div>
			<div class="ks-home-panel">
				<router-link to='/email'>
					邮件
				</router-link>
			</div>
			<div class="ks-home-panel">
				<router-link to='/yihome'>
					我的易道币
				</router-link>
			</div>
			<div class="ks-home-panel">
				<router-link to='/person'>
					我的订单
				</router-link>
			</div>
			<div class="ks-home-panel">
				<router-link to='/suggestion'>
					意见反馈-羊子
				</router-link>
			</div>
			<div class="ks-home-panel">
				<router-link to='/ziliao'>
					个人资料
				</router-link>
			</div>
			<div class="ks-home-panel">
				<router-link to='/all'>
					获取所有大师
				</router-link>
			</div>
			<div class="ks-home-panel">
				<router-link to='/talkIndex'>
					全民讨论
				</router-link>
			</div>
			<div class="ks-home-panel">
				<router-link to='/application'>
					申请大师资料
				</router-link>
			</div>
			<div class="ks-home-panel">
				<router-link to='/forQuestion'>
					申请大师题目
				</router-link>
			</div>
			<div class="ks-home-panel">
				<router-link to='/DSpersonal'>
					大师资料
				</router-link>
			</div>
			<div class="ks-home-panel">
				<router-link to='/DSorder'>
					大师订单
				</router-link>
			</div>
			<div class="ks-home-panel">
				<router-link to='/startProfit'>
					大师收益
				</router-link>
			</div>
			<div class="ks-home-panel">
				<router-link to='/serveList'>
					大师服务
				</router-link>
			</div>
			<div class="ks-home-panel">
				<router-link to='/DSTindex'>
					大师问题
				</router-link>
			</div>
			<div class="ks-home-panel">
				<router-link to='/DSfensi'>
					大师粉丝
				</router-link>
			</div>
      <div class="ks-home-panel">
				<router-link to='/jxIndex'>
					吉凶征兆
				</router-link>
			</div>
				<div class="ks-home-panel">
				<router-link to='/article'>
					大师发表文章
				</router-link>
			</div>
		</div>
	</div>
</template>
<script>
	import navs from '../components/nav';
	import loading from '../components/loading'
	export default{
		components:{
			navs,loading
		},		
	}
</script>
<style>
	.ks-home-panel{
		font-size: 15px;
		padding: 10px 0;
		width: 50%;
		float:left;
		text-align: center;
		border:1px solid #E4393C;
	}
</style>