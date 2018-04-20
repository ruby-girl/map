<template>
	<div>
		<button @click='getM()'>dian</button>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				msg:'hello'
			}
		},
		methods:{
			getM(){
				this.$emit('haha',this.msg)
			}
		}
	}
</script>