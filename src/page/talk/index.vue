<template>
	<div class="container">
	
		
		<div style="background: #f5f5f5;display: flex;padding: 0 15px;">
	    	<div :class="{isOk:ok=num==1?true:false}" @click='goNan(1)' style="flex:1;width: 80px;height: 40px;line-height: 40px;font-size:15px;text-align: center;">
	    		疑难解答
	    	</div>
	    	<div :class="{isOk:ok=num==2?true:false}" @click='goLun(2)' style="flex:1;width: 80px;height: 40px;line-height: 40px;font-size:15px;text-align: center;">
	    		全民讨论
	    	</div>
	    	<div :class="{isOk:ok=num==3?true:false}" @click='getShow(3)' style="flex:1;width: 80px;height: 40px;line-height: 40px;font-size:15px;text-align: center;">
	    		我的
	    	</div>
	    </div>
	    <router-view></router-view>
		<div v-for='it in arr' style="padding: 15px;">
			<router-link :to="'/allInfor?id='+it.dId" style='font-size:15px;margin: 32px;'>
				{{it.title}}
			</router-link>
		</div>
	</div>
</template>
<script type="text/javascript">
	import navbar from '../../components/nav';
	import btn from '../../components/button';
	import prox from '../../router/proxy'
	export default{
		components:{
			navbar,btn
		},
		data(){
			return{
				add:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/pay/add.png',
				js:'',
				arr:[],
				num:1
			}
		},
		mounted(){
			
			if(this.$route.query.id){
         this.num=this.$route.query.id
			}
		},
			created(){	
      document.title='讨论列表'
		},
		beforeRouteEnter(from,to,next){
			next(vm=>{
				if(vm.num==3){
					vm.$router.replace('/my?id='+3)
				}else if(vm.num==2){
					vm.$router.replace('/lun?id='+2)
				}else{
					vm.$router.replace('/talkIndex?id='+1)
				}
			})
		},
		methods:{
			getShow(a){
				this.num=a;
				this.$router.replace('/my?id='+a)
			},
			goLun(a){
				this.num=a;
				this.$router.replace('/lun?id='+a)
			},
			goNan(a){
				this.num=a;
				this.$router.replace('/talkIndex?id='+a)
			}
		}
	}
</script>
<style type="text/css">
	.ks-text{
		width: 100%;
		font-size: 15px;
		border:none;
	}
	.ks-in-a{
		height: 40px;
		border:none;
		outline: none;
		border:1px solid #ccc;
		border-radius:5px;
		width: 100%;
		font-size: 15px;
	}
</style>