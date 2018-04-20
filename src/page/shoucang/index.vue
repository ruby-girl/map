<template>
	<div class="container cang">
	
	
		<div class="sc_head">
			<div :class="{'sc_top1':true,'sc_top1_red':DSshow}" @click="DSshow=true">我收藏的大师</div>
			<div :class="{'sc_top1':true,'sc_top1_red':!DSshow}" @click="DSshow=false">我收藏的问题和讨论</div>
		</div>
			<load v-show='show1'></load>
		<div v-show="DSshow">
      <div v-show='!show' class="ks-none" style="font-size:14px;">
	    	{{msg}}
	    </div>
	  <div  v-show='show'>
		<div  class="ks-ce-dong" v-for='it in arr' @click="toMaster(it.id)">
	        	<div class="ks-ce-head">
	        		<img :src="it.headURL" alt="" width="100%" height="65px" style="border-radius:50%;"/>
	        	</div>
	        	<div class="ks-ce-tou" style="display: flex;">
					<div style="height: 30px;line-height: 30px;" class="ks-lu-p">
						<div>
							{{it.name}}
						</div>
						<div class="ks-mes-a">
							{{it.level==1?'初级大师':it.level==2?'中级大师':'高级大师'}}
						</div>
					</div>
					<div class="ks-mes-f" @click.stop='cancel(it.id)'>
						<div class="ks-mes-c">
							<div style="width: 30px;margin:auto;margin-top:10px;">
								<img :src="sc" alt="" width="30px"/>
							</div>
						</div>
						<div class="ks-mes-e">
							已收藏
						</div>
					</div>
	        	</div>
	    </div>
	   </div>
		</div>
	<!--以上是收藏的大师-->
		<div v-show="!DSshow">
		<div style="padding: 60px;" v-show='show2'>
			<img :src="pic" alt="" width="100%"/>
			<div>
				<div style="text-align: center;padding: 15px 0;font-size: 16px;">
					你还没收藏任何东西呢！		
				</div>
			
			</div>
		</div>
		<div @click="toDetail(it.cType,it.id)" style="padding: 15px;border-bottom: 1px solid #ccc;font-size: 15px;" v-show='!show2' v-for='it in arr2'>
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
		<div v-show='!show2&&!show1' @click='getMore()' style="padding: 20px;font-size:15px;text-align: center;background: #f5f5f5;">
			加载更多
		</div>
	</div>
	</div>
</template>
<script type="text/javascript">
	import navbar from '../../components/nav';
	import load from '../../components/loading';
	import httputil from '../../httputil'
	export default{
		components:{
			navbar,load
		},
		data(){
			return{
				pic:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/cesuan/13.png',
				sc:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/pay/sc.png',
				show:true,
				msg:'',
				show1:true,
				arr:[],
				DSshow:true,
					pic:"http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/talk/cv.png",
				c:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/cesuan/c.png',
				show2:false,
				arr2:[],
				page:1
			}
		},
		methods:{
			cancel(id){					
				httputil.doRequest('/FindMaster/userMasterCollect',{'masterId':id},1,this.onSuccess,null,true) 		
			},
			onSuccess(res){	
				this.getC()
					this.$dialog.toast({
	                    mes: res.message,
	                    timeout: 1500
	                });	
	                
			},
			getC(){
				httputil.doRequest('/Master/userMasterCollectList',null,1,this.onCSuccess,this.onError,true) 
			},
			onCSuccess(res){
				if(res.length!=0){
					this.show1=false
					this.show=true
					this.arr=res;						
					}else{
						this.show=false;
					this.msg='你还没有收藏大师哟！'
				}
			},
			onError(res){
				this.show1=false
				this.show=false;
			  this.msg='你还没有收藏大师哟！'
			},
				getMy(){
						 httputil.doRequest('/Quiz/quizCollectList',{'sta':1},1,this.onMYSuccess,null,true)   
			},
			onMYSuccess(res){
				if(res.list==0){
						this.show2=true;
					}else{
						this.show2=false;
						this.arr2=res.list;
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
						this.arr2=this.arr.concat(res.list);
					}
			},
			getMore(){
				this.page++;
				this.getM();
			},
			toDetail(ty,ind){
				if(ty==0){
             this.$router.push('/allInfor?id='+ind)
				}else if(ty==1){
					this.$router.push('/talkInfor?id='+ind)
				}
			},
			toMaster(ind){
        this.$router.push('/masterDetail?mid='+ind)
			}
		},
		created(){
			
      document.title='我的收藏'
		
			this.getC()	
			this.getMy()
		}
	}
</script>
<style type="text/css">
	.cang .ks-lu-p>div{
		flex:1;
	}
	.cang .ks-mes-a{
		text-align: left !important;
		font-size:14px;
		color:#ccc;
	}
	.cang .ks-mes-f{
		font-size:13px;
		color: #ccc;
		/*width: 100%;*/
		
		/*display: flex;*/
	}
	.cang .ks-mes-c{
		flex:1;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		width: 100%;
	}
	.cang .ks-mes-d{
		text-align: center;
	}
	.sc_head{
		height:45px;
		display: flex;
		/*justify-content: space-between;*/
		align-items: center;
	}
	.sc_top1{
		line-height: 45px;
		width: 50%;
		text-align:center;
		background: #f2f2f2;
		font-size: 15px;
	}
	.sc_top1_red{
		background: #E4393C;
	  color:#fff;
	}
</style>