<template>
  <div style="color:#666160;">
    
    <div class="content">
      <img src="http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/application/4.png" alt="" class="contentText">
      <div>你好，这里是易道服务平台，要成为易道服务平台的玄学大师，需要先通过下面部分问答。</div>
     
      <div>
         <button class="ks-btn" @click='toLists()' v-if="level<3">
        {{forLevel}}
      </button>
      <button class="ks-btn" v-if="mType==0" @click="toApplication()">
        完善资料
      </button>
      </div>
    </div>
    <Alert v-show="showA" :alertText="msg" :btnText="btnText" @back='know'></Alert>
  </div>
</template>
<script>
import Tit from '../../components/nav'
import Alert from '../../components/masterAlert'
import httputil from '../../httputil'

export default {
  name: 'MY',
  data() {
    return {
      msg:'',
      btnText:'',
      showA: false,
      lists:[],
      forLevel:'',
      level:null,
      type:'',
      mType:-1
    }
  },
  components: {
    Tit, Alert
  },
  created(){   
			document.title='申请算命师'
	
  },
   mounted: function () {
  	     this.$nextTick(()=>{
  		 
        httputil.doRequest('/Common/getMasterRegisterType',null,1,this.onSuccess,this.onError,true) 
  	    })
  }, 
  methods: {
  	 onSuccess(res){
  		  this.level=res.object
        
             if(this.level==0){
               this.forLevel='初级答题'
             }else if(this.level==1){
               this.forLevel='中级答题'
             }else if(this.level==2){
               this.forLevel='高级答题'
             }else if(this.level==3){
              //  this.showA=true; 
              //  this.msg='你已经是最高级测算师了，去完善资料吧！'
              //  this.btnText='好的'
             }
             if(this.level>0&&res.object2==-1){
               this.mType=0
             }
  	},
    onError(res){
      this.$dialog.alert({
						mes: res
					})
    },
    toLists() {
      httputil.doRequest('/Master/checkAnswerLimit',null,1,this.onLSuccess,this.onLEroor,true) 
    },
    onLSuccess(res){
    	this.$router.push('/question?level='+this.level)
    },
    onLEroor(res){
    	this.$dialog.alert({ mes:res.message})
    },
    know(){
       if(this.btnText=='知道了'){
         this.showA=false;
         this.type=navigator.userAgent.toLowerCase(); 
			   if (/iphone|ipad|ipod/.test(this.type)) {
			   	 window.webkit.messageHandlers.iOS.postMessage({4:{'windowID':10003}})
          //  iOS.postMessage({4:{'windowID':10003}})
			   }else if(/android/.test(this.type)){
			   	  window.YiDao.bussinessDistribute(4,"{'windowID':10003}")
			   }else{
			   	 window.location="https://www.kushanbaoli.com";
			   }
       }else{
         console.log('111');
       }
    },
    toApplication(){
      this.$router.push('/application')
    }
  }
}

</script>
<style scoped>
.ks-btn {
  width: 100px;
  outline: none;
  border: 1px solid #1a80fc;
  color: #1a80fc;
  height: 32px;
  font-size: 16px;
  line-height: 32px;
  border-radius: 10px;
  display: inline-block;
  margin:20px 10px;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid #e9e9e9;
  padding: 0 15px;
}

.contentText {
  width: 130px;
  height: 120px;
  margin: 60px 0 30px 0;
}
</style>


