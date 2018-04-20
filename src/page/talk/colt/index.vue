<template>
	<div class="container">
		<div style="padding: 60px;" v-show='show2'>
			<img :src="pic" alt="" width="100%"/>
			<div>
				<div style="text-align: center;padding: 15px 0;font-size: 16px;">
					你还没收藏任何东西呢！		
				</div>
			
			</div>
		</div>
		<div style="padding: 15px;border-bottom: 1px solid #ccc;font-size: 15px;" v-show='!show2' v-for='it in arr'>
			<div style="">
				{{it.content}}
			</div>
			<div style="padding-top: 5px;display: flex;">
				<div style="flex:1">
					<span v-if='it.cType==0' style="border-radius:5px;padding: 0 5px;font-size: 13px;display: inline-block;background: deepskyblue;color:white">讨论</span>
					<span v-if='it.cType==1' style="border-radius:5px;padding: 0 5px;font-size: 13px;display: inline-block;background: #E4393C;color:white">提问</span>
				</div>
				<div style="flex:1">
					<div style="float:right;margin-left:10px">
						{{it.commentCount}}
					</div>
					<div style="float:right">
						<img :src="c" alt="" width="20px" />
					</div>
					
				</div>
			</div>
		</div>
		<div @click='getMore()' style="padding: 20px;font-size:15px;text-align: center;background: #f5f5f5;">
			加载更多
		</div>
	</div>
</template>
<script type="text/javascript">
	import navbar from '../../../components/nav';
	import httputil from '../../../httputil';
	export default{
		components:{
			navbar
		},
		data(){
			return{
				js:'',
				pic:"http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/talk/cv.png",
				c:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/cesuan/c.png',
				show2:false,
				arr:[],
				page:1
			}
		},
		mounted(){	
				this.getMy();
			
		},
			created(){		
      document.title='我的收藏'
		},
		beforeRouteEnter(from,to,next){
			next(vm=>{
				
			})
		},
		methods:{
			getMy(){
						 httputil.doRequest('/Quiz/quizCollectList',{'sta':1},1,this.onSuccess,null,true)   
			},
			onSuccess(res){
				if(res.list==0){
						this.show2=true;
					}else{
						this.show2=false;
						this.arr=res.list;
					}
			},
			getM(){
					httputil.doRequest('/Quiz/quizCollectList',{'sta':this.page},1,this.onMSuccess,null,true)   	
			},
			onMSuccess(res){
				if(res.list==0){
						this.$dialog.toast({
			                    mes: '没有更多了！',
			                    timeout: 1500
			              });
					}else{
						this.show2=false;
						this.arr=this.arr.concat(res.list);
					}
			},
			getMore(){
				this.page++;
				this.getM();
			}
		}
	}
</script>