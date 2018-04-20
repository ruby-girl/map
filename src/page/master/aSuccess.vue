<template>
  <div style="color:#666160;"> 
    <div class="nav">
      提交申请
    </div>
    <div class="suImg">
      <img src="http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/application/1.png" alt="" class="aImg">
      <div style="font-size:18px;font-weight:bold;">恭喜您，提交成功</div>
    </div>

    <div class="ks-cai-input" >
			<button class="ks-btn" @click='ques()'>
			  确定
		  </button>
		</div>
  </div>
</template>
<script>
import Btn from '../../components/button'


export default {
  name: 'MY',
  data () {
    return {
      type:''
    }
  },
  components: {
    Btn
  },
  created(){
  
  },
  methods:{
    ques(){
     this.type=navigator.userAgent.toLowerCase(); 
			   if (/iphone|ipad|ipod/.test(this.type)) {
           
           	try{
										window.webkit.messageHandlers.iOS.postMessage({4:{'windowID':10004}})
                    // iOS.postMessage({4:{'windowID':10004}})
								}catch(e){
										window.location="http://calendar.lanbobo.cn/11.html";
                                        
										return;
									}
			   }else if(/android/.test(this.type)){
			   	  window.YiDao.bussinessDistribute(4,"{'windowID':10004}")
			   }else{
			   	 window.location="https://www.kushanbaoli.com";
			   }
    }
  }
}

</script>
<style scoped>
.ks-cai-input {
	padding: 8px;
}
.ks-btn{
		width:100%;
		outline: none;
		border: none;
		background: #08bc05;;
		color:white;
		height: 40px;
		font-size:16px;
		line-height:40px;
		border-radius:10px;
	}
  .suImg{
    border-top:1px solid #e9e9e9;
    padding: 70px 0;
    display: flex;
    flex-direction: column;
    align-items:center;
  }
  .aImg{
    width:80px;
    height:80px;
    margin-bottom: 20px;
  }
  .nav{
    height: 50px;
		line-height: 50px;
		background: #fff;
		padding:0 20px;
    text-align: center;
    font-size: 18px;
    color:#000;
  }
</style>


