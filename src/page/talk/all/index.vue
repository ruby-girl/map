<template>
	<div class="container">
		
		<div style="height: 8px;background: #f5f5f5;"></div>
		<div style="display: flex;padding: 15px;">
			<div style="font-size:15px;line-height: 40px;">
				标题
			</div>
			<div style="flex: 1;padding: 0 10px;">
				<input v-model="tit" placeholder="加一个特别的标题吧" type="" name="" id="" value="" class="ks-in-a"/>
			</div>
		</div>
		<div style="height: 8px;background: #f5f5f5;"></div>
		<div style="padding: 15px;">
			<textarea v-model="content" name="" rows="10" cols="" class="ks-text" placeholder="请详细的描述你的问题，这样大师才能更准确的解答"></textarea>
		</div>
		<div style="padding: 15px;display: flex;">
			<div style="width:25%;paddingRight:5px;" v-if="res!==''">
				<div>
					<img :src="res" alt="" style="width:100%;height:90px;" @click="res=''"/>
				</div>
			</div>
			<div style="width:25%;paddingRight:5px;" v-if="rem!==''">
				<div>
					<img :src="rem" alt="" style="width:100%;height:90px;" @click="rem=''"/>
				</div>
			</div>
			<div style="width:25%;paddingRight:5px;" v-if="rea!==''">
				<div>
					<img :src="rea" alt="" style="width:100%;height:90px;" @click="rea=''"/>
				</div>
			</div>
			<div style="margin-left:10px;position:relative;">
			
				 <add :type="7" @getURL="getPic" style="position:absolute;top:0;left:0;"></add>
					<div>
						<img :src="add" alt="" width="50px"/>
					</div>
					<div style="margin-top:10px;">
						添加图片
					</div>
			
			</div>
		</div>

		
		<div style="height: 8px;background: #f5f5f5;"></div>
		<div style="padding:50px 15px;">
			<btn btnMsg='发布讨论' @click.native='postAll'></btn>
		</div>
	</div>
</template>
<script type="text/javascript">
	import navbar from '../../../components/nav';
	import btn from '../../../components/button';
	import httputil from '../../../httputil'
	import add from '../../../components/Allimg';
	export default{
		components:{
			navbar,btn,add
		},
		data(){
			return{
					myFile:'ks-file',
				add:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/pay/add.png',
					uploadUrl:[],
				res:'',
				rem:'',
				rea:'',
				tit:'',
				content:'',
			  toJavaUrl:[]
			}
		},
		mounted(){
		
		},
			created(){		
      document.title='我的讨论'
		if(this.$route.query.did){
				httputil.doRequest('/Quiz/userCheckDicussDetails',{'dicussId':this.$route.query.did},1,this.onGetSuccess,this.onGetError,false)  	
		}
		},
		methods:{
			onGetError(res){
				this.$dialog.alert({mes:res})
			},
			onGetSuccess(res){
        	console.log(res)
					this.tit=res.title
					this.content=res.content
					if(res.flag==1){
						
						if(res.thumbpails.length==1){
              this.res=res.thumbpails[0]
						}else if(res.thumbpails.length==2){
							this.res=res.thumbpails[0]
							this.rem=res.thumbpails[1]
						}else if(res.thumbpails.length==3){
							this.res=res.thumbpails[0]
							this.rem=res.thumbpails[1]
							this.rea=res.thumbpails[2]
						}
					}
			},
			getPic(e){
             	if(this.res==''){
           	this.res=e
				}else if(this.rem==''){
           	this.rem=e
				}else if(this.rea==''){
           	this.rea=e
				}

			},
			postAll(){
	
		if(this.$route.query.did){
       this.toJavaUrl=this.res+','+this.rem+','+this.rea
		 httputil.doRequest('/Quiz/userDicussLaunch',{'title':this.tit,'content':this.content,'dId':this.$route.query.did,'thumbpails':this.toJavaUrl},1,this.onSuccess,this.onGetError,true)
		}else{
        this.toJavaUrl=this.res+','+this.rem+','+this.rea
		 httputil.doRequest('/Quiz/userDicussLaunch',{'title':this.tit,'content':this.content,'thumbpails':this.toJavaUrl},1,this.onSuccess,this.onGetError,true)
		}
		
			},
			onSuccess(res){
				this.$router.replace('/comIndex')
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