<template>
	<div>
		<div class="ks-header" :style="'background-color:'+bgcolor">
		<div >
			<div :class="{'ks-header-left':true}" @click='back()' v-show='show'></div>
		</div>
		<div class="ks-header-title" :style="'font-size:'+fsize+';color:'+co" >
			{{title}}
		</div>		
		<div class="ks-header-right"  v-show='show'>
			<slot name='right'></slot>
		</div>
	</div>
	</div>
</template>
<script>
	export default{
		props:{
			show:{
				default:true
			},
			title:{
				default:"周公解梦"
			},
			bgcolor:{
				default:""
			},
			fsize:{
				default:"18px"
			},
			co:{
				default:""
			}
		},
		methods:{
			back(){
			
				this.$router.go(-1);
			}
		}
	}
</script>
<style>
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