<template>
	<div>
		<div class="ks-loading"></div>
	</div>
</template>
<style>
	.ks-loading{
		width: 40px;
		height:40px;
		/*background: #E4393C;*/
		border-radius:50%;
		animation:.5s linear anima;	
		animation-fill-mode: forwards;
		animation-iteration-count: infinite;
		margin:auto;
		margin-top:15px;
		border-right:3px solid #E4393C;
		border-top:3px solid #E4393C;
		border-left:3px solid #E4393C;
		border-bottom:3px solid white;
	}
	@keyframes anima{
		from{
			transform: rotate(0deg);
		}to{
			transform: rotate(360deg);
		}
	}
</style>