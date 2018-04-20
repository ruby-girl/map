<template>
	<div class="container">
		</Navs>
		<load v-show='showb'></load>
		<div v-show='!showa' class="ks-none">
			{{msg}}
		</div>
		<div v-show='showa'>
		<div style="padding: 15px;font-size: 20px;font-weight: 800;">{{list.title}}</div>
		<div style="padding:5px 15px;">
			<span style="font-size:15px;color:deepskyblue;margin-right:10px;">{{list.uName}}</span>
			<span style="font-size:14px;">{{list.createTime}}</span>
		</div>
		<div style="padding:15px ">
			
			<div class="dongContent"  v-html="list.content">
				
			</div>
			
		</div>
		<div class="ks-zan">
			<div>
				<div>阅读{{list.peekCount}}</div>
				<div style="font-size:14px;display: flex;padding: 8px 0;">
					<div>
						<img :src="e" alt="" width="15px" style="margin-top:3px;"/>
					</div>
					<div>{{list.tNum}}人觉得很赞</div>
				</div>
			</div>
			<div class="ks-zan-f">
				<div @click='getZan'>
					<div style="width: 18px;margin:auto;margin-bottom:5px;">
						<img :src="zan" alt="" width="18px" v-if='list.isThumb==0'/>
						<img :src="e" alt="" width="18px" v-if='list.isThumb==1'/>
					</div>
					<div style="padding: 5px 0;">
						赞
					</div>
				</div>
				<div @click="setPid(0,'发表一下你的看法吧...')">
					<div style="width: 18px;margin:auto;margin-bottom:5px">
						<img :src="c" alt="" width="18px"/>
					</div>
					<div style="padding: 5px 0;">
						评论
					</div>
				</div>
				<div @click='gogo()'>
					<div style="width: 18px;margin:auto;margin-bottom:5px">
						<img :src="s" alt="" width="18px"/>
					</div>
					<div style="padding: 5px 0;">打赏</div>
				</div>
			</div>
		</div>
		<div style="padding:8px 15px;">
			<div class="ks-zan-p">
				<div>
					<img src="http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/talk/mm.png" alt="" width="18px"/>
				</div>
				<div style="margin-left:15px;">
					共{{list.rNum}}人打赏
				</div>
			</div>
			<div style="padding: 5px 0;font-size:14px;color:deepskyblue">
				<span v-for='i in list.rewarders'>{{i}}&nbsp;&nbsp;</span><i v-if="list.rewarders.length==0">0人</i> <i v-if="list.rewarders.length==20">等人</i>打赏了TA
			</div>
		</div>
		<div style="height:8px;background: #f5f5f5;"></div>
		<div class="ks-none" v-show='!showv'>
			{{mas}}
		</div>
		<div style="padding-bottom: 50px;" v-show='showv'>
		<div style="padding: 8px 15px;" v-for='it in arr' >
			<div class="ks-c-a">
				<div class="ks-c-b">
					<div class="ks-c-d">
						<img :src="head" alt="" height="100%"/>
					</div>
					<div class="ks-c-e">{{it.firstComment.sender}}</div>
				</div>
				<div class="ks-c-c">
					<div @click='setPid(it.firstComment.cId,it.firstComment.sender)'>
					<div style="padding: 8px 0;font-size:14px;">
						{{it.firstComment.content}}
					</div>
					
					<div class="ks-c-f">
						<div></div>
						<div style="display: flex;font-size:14px;">
							<div style="display: flex;flex:1;" >
								<div>
									<img :src="c" alt="" width="18px"/>
								</div>
								<div style="margin-left:10px;">{{it.firstComment.cNum}}</div>
							</div>
							<div style="display: flex;flex:1;">
								<div>
									<img :src="zan" alt="" width="18px" v-if='it.firstComment.isThumb==0' @click.stop='getCom(it.firstComment.cId)'/>
									<img :src="e" alt="" width="18px" v-if='it.firstComment.isThumb==1' @click.stop='getCom(it.firstComment.cId)'/>
								</div>
								<div style="margin-left:15px;">{{it.firstComment.tNum}}</div>
							</div>
						</div>
						</div>
					</div>
					</div>
					<div style="padding: 10px;background: #f5f5f5;font-size:14px;" v-show='it.otherComments.length>0'>
						<div v-for='is in it.otherComments' style="padding: 5px 0;" @click='setPid(is.cId,is.sender)'>
							<span style="color:lightskyblue">{{is.sender}}</span>
							回复 
							<span style="color:lightskyblue">{{is.receiver}}</span>
							：{{is.content}}
						</div>
					</div>
				
			</div>
		</div>
		<div class="ks-ce-all">
			<button class="ks-all-btn" @click='getMore()'>查看更多评价</button>
		</div>
		</div>
	     <yd-popup v-model="showBtn" position="center" width="90%">
	     	<div style="padding: 20px;">
	     		<textarea style="width:100%;" rows = "5" placeholder="发表你的看法"  v-model='content'></textarea>
				<div style="text-align: right;margin-top:15px;">
					<button @click='getPid()' style="padding: 0 5px;height: 30px;border:none;outline:none;border:1px solid #ccc;font-size:15px;">
						发表评论
					</button>
				</div>
			</div>
	     </yd-popup>
		<div class="share" @click='toShare()'>
			<img :src="share" alt="" width="100%"/>
		</div>
		<div class="shoucang" @click='coltAc()'>
			<img :src="s1" alt="" width="100%" v-show='list.isCollect==1'>
			<img :src="s2" alt="" width="100%" v-show='list.isCollect==0'>
		</div>
		</div>
		<div v-html="html"></div>
	</div>
</template>
<script type="text/javascript">
	import Navs from '../../components/nav';
	import load from '../../components/loading';
	import btn from '../../components/button';
    import httputil from '../../httputil';
 import share from '../../share';

	export default{
		components:{
			Navs,btn,load
		},
		created(){
			document.title='大师文章'
		},
		data(){
			return{
				holder:'发表一下你的看法吧...',
				show1:false,
				colt:true,
				showb:true,
				showv:false,
				content:'',
				pid:0,
				img:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/cesuan/0.png',
				c:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/cesuan/c.png',
				s:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/cesuan/s.png',
				zan:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/cesuan/zan.png',
				d:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/cesuan/d.png',
				e:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/cesuan/6.png',
				head:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/cesuan/head.png',
				s1:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/cesuan/5.png',
				s2:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/cesuan/5-1.png',
				share:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/cesuan/4.png',	
				js:'',
				showa:false,
				msg:'正在加载',
				list:{},
				mas:'暂无评论',
				arr:[],
				page:1,
				cPage:8,
				showBtn:false,
				aId:null,
				ref:null
			
			}
		},
		created(){	
			this.aId=this.$route.query.aId
			this.ref= window.location.href
		},
		beforeRouteEnter(to,from,next){
			next(vm=>{
				vm.getAct();
				vm.getAc();
				 window.scrollTo(0, 0);
			})
		},
		methods:{
				oncodeSuccess(res) {
       let code=res.object
			share.toShare('大师美文欣赏', 'dong?code=' + code + '&aId=' + this.$route.query.aId,this.list.thumbpails[0])
		},
		oncodeError(res) {
			this.$dialog.alert({ mes: res })
		},
		toShare() {
			httputil.doRequest('/Common/getShareCode', { 'sType': 2 }, 1, this.oncodeSuccess, this.oncodeError, true)
		},
			gogo(){
				
				this.$router.push('/shang?sId='+this.aId+'&ref='+this.ref)

			},
			getMore(){
				this.page++;
				this.cPage+=8
				this.getMp();
			},
			colts(){
				this.colt=!this.colt;
				this.$dialog.toast({
                    mes: '已收藏',
                    timeout: 1500
                });
			},
			setPid(id,who){
				this.showBtn=true;
				this.pid=id;
				if(id!=0){
					this.holder='回复 '+who;
				}else{
					this.holder=who;
				}
			},
			getPid(){				
				if(this.content.trim()!=''){					
                  httputil.doRequest('/Master/userComment',{'aId':this.aId,'pId':this.pid,'content':this.content},1,this.onSuccess,this.onError,true)
				}else{
					this.$dialog.toast({
			                    mes: '评论内容不能为空',
			                    timeout: 1500
			                });
				}
			},
			onSuccess(res){
				this.getAc();
				this.content='';
				this.$dialog.toast({
	                    mes: '发表成功',
	                    timeout: 1500
	                });	
	            this.showBtn=false;
			},
			onError(res){
				this.$dialog.toast({
	                    mes: res,
	                    timeout: 1500
	                });
			},
			
			//获取文章
			getAct(){

              httputil.doRequest('/FindMaster/UserArticleContentSee',{'aId':this.aId},1,this.onActSuccess,this.onActError,false)
			},
			onActSuccess(res){
				
				this.list=res.article;
				this.showa=true
				this.showb=false
				
			},
			onActError(){
				this.showa=false;
     			this.msg='网络错误'
			},
			getMp(){
               httputil.doRequest('/Master/userArticleCommentSee',{'aId':this.aId,'start':this.page,'pageSize':this.cPage},1,this.onMpSuccess,this.onMpError,false)
			},
			onMpSuccess(res){
				if(res.comments.length==0){
					 if(this.page>0){
						 this.page--
					 }
					 if(this.cPage>8){
						 this.cPage-=8
					 }
								this.$dialog.toast({
	                    mes: '没有更多数据了！',
	                    timeout: 1500
	                });	
									
							}else{
								this.showv=true;
								this.arr=this.arr.concat(res.comments);
							
							}
			},
			onMpError(res){
				if(this.page>1){
						this.page-=8;
					}
					this.showv=false;
					this.mas='网络错误'
			},
//			获取评论
			getAc(){
              httputil.doRequest('/Master/userArticleCommentSee',{'aId':this.aId,'start':1,'pageSize':this.cPage},1,this.onAcSuccess,this.onAcError,false)
			},
			onAcSuccess(res){
				if(res.comments.length==0){
						
					}else{
						this.showv=true;
						this.arr=res.comments;
						
					}
			},
			onAcError(){
				if(this.page>1){
						this.page-=8;
					}
					this.showv=false;
					this.mas='网络错误'
			},
			coltAc(){
              httputil.doRequest('/FindMaster/userArticleCollect',{'aId':this.aId},1,this.oncoltAcSuccess,this.oncoltAcError,false)
			},
			oncoltAcSuccess(res){
			     this.getAct();
					this.$dialog.toast({
	                    mes: res.message,
	                    timeout: 1500
	                });	
			},
			oncoltAcError(){
				this.$dialog.toast({
	                    mes: '网络错误',
	                    timeout: 1500
	                });
			},
			
			getCom(id){
                httputil.doRequest('/Master/userThumb',{'pId':id,'pType':0},1,this.onComSuccess,this.onComError,false)
			},
			onComSuccess(res){
				this.getAc();
				this.$dialog.toast({
                    mes: res.message,
                    timeout: 1500
                });	
			},
			onComError(){
				this.showv=false;
				this.mas='网络错误'
			},
			getZan(){
              httputil.doRequest('/Master/userThumb',{'pId':this.aId,'pType':1},1,this.onZanSuccess,null,false)
		},
		onZanSuccess(res){
			this.getAct();
				this.$dialog.toast({
                    mes: res.message,
                    timeout: 1500
                });	
		}
		//分享
	
		}
	}
</script>
<style>
	.shoucang{
		width: 45px;
		height: 45px;
		position: fixed;
	 top:89%;
		right:15px;
	}
	.share{
		width: 45px;
		height: 45px;
		position: fixed;
		top:79%;
		right:15px;
	}
	.ks-c-f{
		display: flex;
		font-size:14px;
		padding: 5px 0;
	}
	.ks-c-f>div{
		flex:1;
		text-align: center;
	}
	.ks-c-b{
		/*display: flex;*/
		height: 35px;
		line-height: 35px;
		font-size: 14px;
	}
	.ks-c-b>div{
		float: left;
	}
	.ks-c-d{
		width:35px;
		height: 35px;
	}
	.ks-c-e{
		/*flex:1;*/
		margin-left: 25px;
	}
	.ks-zan-p{
		padding:0;
		height:20px;
		display: flex;
		line-height: 20px;
		font-size: 14px;
	}
	.ks-c-a{}
	.ks-zan-f{
		display: flex;
		text-align: center;
	}
	.ks-zan-f>div{
		flex:1;
		font-size:14px;

	}
	.ks-zan{
		font-size:15px;
		padding: 0 15px;
		color:#ccc;
		display: flex;
				border-bottom: 1px solid #f5f5f5;
	}
	.ks-zan>div{
		flex:1;
	}
	.dongContent{
		padding: 10px 0;
		font-size:14px;
		letter-spacing: 1px;
		text-indent: 28px;
		text-align: justify;
	}
	.dongContent>img{
	   margin-bottom: 5px;
	}
</style>