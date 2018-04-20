<template>
  <div class="full-container">
    
    <textarea name="" id=""  placeholder="写上自我介绍吧！" v-model="jiesaoText" style="height:280px;fontSize:14px;">

    </textarea>
		<!--增加图片-->
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
			<div @click="getPic(1)">
					<div>
						<img :src="add" alt="" width="50px"/>
					</div>
					<div style="margin-top:10px;color:#666;">
						添加图片
						<div>(最多3张)</div>
					</div>
			
			</div>
		</div>
	
			<div style="padding:10px;" class="flex_center" @click="getPic(2)">
          <div>上传封面照 <i style="font-size:13px;color:#ccc;">(此照片为封面照)</i></div>
					<img :src="phone" alt="" style="width:20%;height:33px;" v-if="phone!=''">
			<div><img style="width:30px;" src="http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/DSpersonl/hongVideo.png" alt=""></div>
			
			</div>
			<!--下个版本回上传视频，不要删除-->

			
			<!--<label for="video" style="font-size:16px;color:#666;padding:10px;" class="flex_center">
         <div>上传视频</div>
				 
		   	<div style="display:flex;width:50%;justify-content:flex-end;
		align-items: center;">
					<img :src="video" alt="" style="width:45%;height:33px;margin-right:5px;" v-if="video!=''">
					 <img style="width:30px;" src="http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/DSpersonl/lvVideo.png" alt=""></div>
				 	<uploadImgs :url="uploadUrl" :multiple="true" :id="myFi" @getUrl="getPi" style="position: absolute;left:-99999px"></uploadImgs>
			</label>-->
     
	
		<div style="padding: 15px;background:#eee;height:100px;" class="ks-p">
			<div style="marginTop:20px;background:#e4393c;color:#fff;height:35px;lineHeight:35px;textAlign:center;borderRadius:5px;fontSize:15px;"@click='getJiesao()'>完成</div>
		</div>
		<!--图片end-->
  </div>
</template>
<script>
	import httputil from '../../httputil';
  

	export default {
		name: 'updateJiesao',
		data() {
			return {
				jiesaoText: '',
				id: '',
				ty: '',
				res:'',
				rem:'',
				rea:'',
				myFile:'jieSao',
				add:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/pay/add.png',
				urlList:[],
				myF:'zhaop',
				myFi:'video',
				phone:'',
				video:'',
				b:1
			}
		},
		components: {
			
		},
	
		created() {
			document.title='个人介绍'
		  // this.jiesaoText=sessionStorage.getItem('jieshao')
				httputil.doRequest('/FindMaster/masterDetails',null, 1, this.onInforSuccess, this.onInforError, true)
		},
		// 这个是把函数放在window，测试是可以alert的
		mounted () { 
			window.h5GetImageUrl = this.mySuo
			
			},
		methods: {
			 getPic(i){
				 let ua = navigator.userAgent.toLowerCase();
				if(i==1){
           this.b=1			
					 	if (/iphone|ipad|ipod/.test(ua)) {
         window.webkit.messageHandlers.iOS.postMessage({17:{'type':9}})  
        }else if(/android/.test(ua)){			
          window.YiDao.bussinessDistribute(32,JSON.stringify({'type':9})
					);
        }
				}else if(i==2){
					this.b=2		
						if (/iphone|ipad|ipod/.test(ua)) {
         window.webkit.messageHandlers.iOS.postMessage({17:{'type':8}})  
        }else if(/android/.test(ua)){				
          window.YiDao.bussinessDistribute(32,JSON.stringify({'type':8})
					);
        }
				}
	     	
	     
      },
			mySuo(m){
				if(this.b==1){
          if(this.res==''){
           	this.res=m
				  }else if(this.rem==''){
           	this.rem=m
			  	}else if(this.rea==''){
           	this.rea=m
				 }		
				}else if(this.b==2){
					this.phone=m
				}
			},
				onInforSuccess(res) {	
			this.phone=res.coverPath
			this.jiesaoText = res.masterDesc;
			if(res.list.length==1){
				this.res=res.list[0]
			}else if(res.list.length==2){
					this.res=res.list[0]
						this.rem=res.list[1]
			}else if(res.list.length==3){
					this.res=res.list[0]
						this.rem=res.list[1]
						this.rea=res.list[2]
			}else{
				return
			}
		  },
		
			getJiesao() {
				if (this.jiesaoText.trim()) {
				
          	this.urlList=this.res+','+this.rem+','+this.rea
         httputil.doRequest('/Master/masterUpdateDetails', {
						'url':this.urlList,'desc':this.jiesaoText,'coverPath':this.phone
					}, 1, this.onJiesaoSuccess, null, true)
		
 

				} else {
					this.$dialog.alert({
						mes: '请输入个人介绍！'
					})
				}
			},
			onInforError(res){
        	this.$dialog.alert({
						mes: res
					})
			},
			onJiesaoSuccess(res) {
				this.$dialog.alert({
             mes: '编辑成功！',
            callback: () => {
              this.$router.go(-1)
            }
          });
			},
			onSuccess(res){
				httputil.doRequest('/Master/editInfo', {
						'masterDesc': this.jiesaoText
					}, 1, this.onJiesaoSuccess, this.onInforError, true)
			}
		}
	}
</script>
<style scoped>
	.full-container {
		width: 100%;
	}
	
	.jiesaoHeader {
		height: 40px;
		border-bottom: 1px solid #aaa;
		position: relative;
		line-height: 35px;
		text-align: center;
		padding: 5px 0;
	}
	
	.headerRight {
		position: absolute;
		right: 10px;
		top: 3px;
	}
	.flex_center{
		display: flex;
		justify-content:space-between;
		align-items: center;
		border-top:4px solid #eee;
	}
	textarea {
		width: 100%;
		border: none;
		color: #666160;
		padding: 5px 10px;
		height: 100%;
	}
</style>