<template>
	<div class="container">
	
		<div style="padding: 60px;" v-show='show'>
			<img :src="pic" alt="" width="100%"/>
			<div>
				<div style="text-align: center;padding: 15px 0;font-size: 16px;">还不提问啊，都快长草了!</div>
				<div style="text-align: center;">
					<button style="padding: 5px 25px;color:#6da9dd;font-size:15px;border:none;border:1px solid #6da9dd;border-radius:10px;" @click="writeQuestion()">
						去提问
					</button>
				</div>
			</div>
		</div>
		<div v-show='!show'>
		<router-link class="ks-my-a" to="/talkTitle">
			<div class="ks-my-img">
				<img :src="img" alt="" width="100%"/>
			</div>
			<div class="ks-my-text">
				<div style="font-weight: 800;">提问</div>
				<div style="color:#ccc">
					随时随地咨询，<br/>
					大师快速解答
				</div>
			</div>
			<div class="ks-my-arrow">
				<div style="flex:1">&nbsp;</div>
				<div style="width:20px;height:20px;transform:rotate(45deg);margin:auto;border-top:2px solid #ccc;border-right:2px solid #ccc"></div>
				<div style="flex:1">&nbsp;</div>
			</div>
		</router-link>
		<div style="padding: 5px 15px;background: #f5f5f5;"></div>
		<div style="padding:5px 15px;display: flex;border-bottom:1px solid #f5f5f5;">
			<div>
				<img :src="ques" alt="" width="20px"/>
			</div>
			<div style="font-size: 14px;line-height: 20px;margin-left:10px">
				我的提问 （{{arr.length}}）
			</div>
		</div>
		<div v-for='it in arr' style="padding: 15px 20px;font-size:14px;border-bottom: 1px solid #f5f5f5;">
			<div @click="toInfor(it.qId)">
				<div style="justify-content: space-between;padding:5px 0;" class="ks-my-a">
				  <div style="width:80%;white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;">	{{it.content}}</div>
					<div style="width:40px;color:#6da9dd;" @click.stop="toDelete(it.qId)">删除</div>
				</div>
				<div style="padding: 5px 0;font-size:13px;color:#ccc;display: flex;">
					<div style="flex:1">
						<span style="color:red">{{it.createTime}}</span> | <span style="color:orange">{{it.isSolve==0?'等待':'已解决'}}</span>	
					</div>
					<div style="flex:1;text-align: right;">
						<div style="float: right;line-height: 18px;font-size:14px;">
							{{it.answerCount}}
						</div>
						<div style="float: right;margin-right:10px">
							<img :src="c" alt="" width="18px" style="display: inline-block;"/>
						</div>
						
					</div>
				</div>
			</div>
		</div>
		<div @click='getMore()' style="padding: 20px;font-size:15px;text-align: center;background: #f5f5f5;">
			加载更多
		</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	import navbar from '../../../components/nav';
	import btn from '../../../components/button';
	import httputil from '../../../httputil'
	export default{
		components:{
			navbar,btn
		},
		data(){
			return{
				pic:"http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/talk/qt.png",
				img:"http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/talk/qe.png",
				ques:"http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/talk/2.2.png",
				c:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/cesuan/c.png',
				js:'',
				arr:[],
				show:false,
				page:1
			}
		},
		beforeRouteEnter(from,to,next){
			next(vm=>{
				
				vm.getList();
			
			})
		},
		created(){
			document.title='我的问题'
			// this.getList()
		},
		methods:{
			getList(){
				
				httputil.doRequest('/Quiz/rewardMyList', {
					'sta': 1
				}, 1, this.onSuccess, this.onError, false)	
			},
			onSuccess(res){
				if(res.list.length==0){
						this.show=true
					}else{
						this.arr=res.list
						this.show=false
					}
			},
     onError(res){
       this.show=true
		 },
			getM(){
				
				httputil.doRequest('/Quiz/rewardMyList', {
					'sta': this.page
				}, 1, this.onMoreSuccess, this.onMoreError, true)	
			},
			onMoreError(res){
				 this.$dialog.alert({mes:res})
			},
			onMoreSuccess(res){
				if(res.list.length==0){
						this.$dialog.toast({
			                    mes: '没有更多了！',
			                    timeout: 1500
			              });
			              if(this.page>1){
			              	this.page--;
			              }
					}else{
						this.arr=this.arr.concat(res.list);
						this.show=false
					}
			},
			getMore(){
				this.page++;
				this.getM()
			},
			writeQuestion(){
				this.$router.push('/talkTitle')
			},
				toInfor(ind){
				this.$router.push('/myInfor?id='+ind)
			},
			toDelete(ind){
        httputil.doRequest('/Quiz/rewardDelete',{'questionId':ind},1,this.onDeleteSuccess,this.onDeleteError,true) 
		 },
		 onDeleteSuccess(res){
			 this.$dialog.toast({
                    mes: res.message,
                    timeout: 1500,
                    callback: () => {
                        this.getList()
                    }
                });
		 },
		 onDeleteError(res){
			 this.$dialog.alert({mes:res.message})
		 }
		}
	}
</script>
<style>
	.ks-my-a{
		font-size:15px;
		padding: 15px;
		display: flex;
	}
	.ks-my-img{
		flex:2;

	}
	.ks-my-text{
		flex:2;
		padding: 10px;
		font-size: 15px;
		text-decoration: blink;
	}
	.ks-my-arrow{
		flex:1;
		display: flex;
		flex-direction: column;
	}
	
</style>