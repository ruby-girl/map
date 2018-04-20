<template>
	<div class="ks-btn">
		<button class="ks-btn" :style="'background:'+bgcolor">
			{{btnMsg}}
		</button>
	</div>
</template>
<script>
	export default{
		props:{
			btnMsg:{
				default:"登录"
			},
			bgcolor:{
				default:"E4393C"
			}
		}
	}
</script>
<style>
	.ks-btn >.ks-btn{
		width:100%;
		outline: none;
		border: none;
		background: #E4393C;
		color:white;
		height: 40px;
		font-size:16px;
		line-height:40px;
		border-radius:10px;
	}
</style>