<template>
	<div class="container">
		<div style="height: 8px;background: #f5f5f5;"></div>
		<div style="display: flex;padding: 15px;">
			<div style="font-size:15px;line-height: 40px;width:50px;">
				标题
			</div>
			<div style="flex: 1;padding: 0 10px;">
				<input v-model="tit" placeholder="加一个特别的标题吧" type="" name="" id="" value="" class="ks-in-a"/>
			</div>
		</div>
    <div style="display: flex;padding: 15px;">
			<div style="font-size:15px;line-height: 40px;width:50px;">
				缩略图
			</div>
      <!--显示缩略图-->
      <div v-if="suoSrc!==''" style="width:80px;height:40px;marginLeft:10px;">
        <img :src="suoSrc" alt="" style="width:100%;height:100%;">
      </div>
		<div>
      <div class="suo" @click="getSuo(1)">点击上传</div>
		</div>
		</div>
		<div style="height: 8px;background: #f5f5f5;"></div>
		<div style="padding: 15px;">
		
      <div id="myDiv" contenteditable="true"  @keyup.enter="onEnterDown" @keyup="change" class="articleBox"></div>
		</div>
		<div style="padding: 15px;display: flex;">
			<div style="margin-left:10px;" @click="getSuo(2)">
					<div>
						<img :src="add" alt="" width="50px"/>
					</div>
					<div style="margin-top:10px;">
						插入图片
					</div>
					
			
			</div>
		</div>	
		<div style="height: 8px;background: #f5f5f5;"></div>
		<div style="padding:50px 15px;">
			<btn btnMsg='发布文章' @click.native='postAll()'></btn>
		</div>
   
	</div>
</template>
<script type="text/javascript">
	import navbar from '../../components/nav';
	import btn from '../../components/button';
	import httputil from '../../httputil'
	export default{
		components:{
			navbar,btn
		},
		data(){
			return{
				myFile:'ks-file',
				add:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/pay/add.png',
				uploadUrl:[],
				tit:'',
				content:'',
			  toJavaUrl:[],
        suo:'suoLue',
        suoSrc:'',
        mPostHtml:null,
				b:1
			}
		},
		created(){
			document.title='发表文章'
		},
		mounted(){
		  window.h5GetImageUrl = this.mySuo
		},
		methods:{
			getPic(e){ 
				console.log('拿到的url'+e)          
				var divNode = document.getElementById("myDiv");
				var liNode = document.createElement("img");
				liNode.style.width='300px';
				
				liNode.src = e;
				divNode.appendChild(liNode); 		
          this.mPostHtml=divNode.innerHTML   
			},
      getSuo(i){
				if(i==1){
           this.b=1
				}else if(i==2){
					this.b=2
				}
	     	let ua = navigator.userAgent.toLowerCase();
	     	if (/iphone|ipad|ipod/.test(ua)) {
         window.webkit.messageHandlers.iOS.postMessage({17:{'type':5}})  
        }else if(/android/.test(ua)){
          window.YiDao.bussinessDistribute(32,JSON.stringify({'type':5})
					);
        }
      },
			mySuo(m){
				if(this.b==2){
          this.getPic(m)
				}else if(this.b==1){
          this.suoSrc=m
				}
       
			},
       onEnterDown(){
          		this.mPostHtml = this.formatSolution(this.mInputText)
           },
	        formatSolution(s) {
	　　			if (s) 
	　　　　			return s.replace(/\n/g,'<br>')
	　　			else 
					return ''		
			},
		 change(){
				var divNode = document.getElementById("myDiv");
				this.mPostHtml=divNode.innerHTML
		},
    postAll(){
      var html=document.getElementById("myDiv").innerHTML
       if(this.tit){
         if(html){ 
           if(this.suoSrc){
                httputil.doRequest('/Master/masterArticlePublish',{'title':this.tit,'content':html,'pictruePath':this.suoSrc},1,this.onAllSuccess,this.onAllError,true) 
           }else{
               this.$dialog.alert({ mes: '请上传一张缩略图' });
           }
         }else{
           this.$dialog.alert({ mes: '请输入文章内容' });
         }
       }else{
         this.$dialog.alert({ mes: '请输入标题' });
       }  
    },
    onAllSuccess(res){
      this.$dialog.alert({ mes: '发表成功',
        callback: () => {
                this.$router.push('/all')
                       }
  });
    },
    onAllError(res){
       this.$dialog.alert({ mes: res});
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
    padding-left: 5px;
	}
  .suo{
      line-height: 40px;
      text-align: right;
      padding-left: 10px;
      color:#e4393c;
    }
    .articleBox{
      height:300px;
      width:100%;
      border:1px solid #aaa;
      padding: 5px;
			overflow: auto;
	   overflow-x:hidden;
	   -webkit-overflow-scrolling: touch;
    }
</style>