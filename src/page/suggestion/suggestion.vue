<template>
  <div class="container">
   
    <div class="full-container">
      <textarea name="" placeholder="感谢您使用易道APP，使用过程中有任何意见或建议请反馈给我们" v-model="tjText">
      </textarea>
      <!--图片-->
      <div style="display:flex;" @click='tihuan()'>
        <div v-show="addImg" style="position:relative;height:100%;margin-right:15px;">
          <div class="cha" @click.stop="sanchu()">×</div>
          <img :src="toJava" alt="" style="width:80px;height:80px;">
        </div>
  
        <div class="addImg" v-show="addClick" style="position:relative">
          <add :type="2" @getURL="getPic" style="position:absolute;top:0;left:5px;"></add>
          <img class="suggestionImg" src="http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/pay/add.png" alt="">
          <div style="margin-top:5px;fontSize:15px;">添加图片</div>
        </div>
      </div>
    </div>
  
    <div class="telText">
      <div class="telX">
        <div>联系方式</div>
        <div style="color:#666160;">(选填)</div>
      </div>
      <div style="line-height:65px;">
        <input type="text" v-model="phone">
      </div>
    </div>
    <div class="ks-cai-input" style="background:#fff;">
      <Btn btnMsg='提交反馈' @click.native="result()" style="margin-top:15%;"></Btn>
    </div>
  </div>
</template>
<script>
import Tit from '../../components/nav'
import Btn from '../../components/button'
import prox from '../../router/proxy.js'
import httputil from '../../httputil'
import add from '../../components/Allimg'
export default {
  data() {
    return {
      addClick: true,
      addImg: false,
      type:'',
      
      tt: '',
      tjText: '',
      phone: '',
      toJava: ''
      
    }
  },
  created() {
    document.title='意见反馈'
    this.type = navigator.userAgent.toLowerCase(); 
	  
  },
  components: {
    Tit, Btn, prox,add
  },
  methods: {
    getPic(r){
      this.addImg=true
      this.addClick=false
      this.toJava=r
    },
    sanchu() {
      this.addImg = false
      this.addClick=true
      this.toJava = ''
    },
    result() {
      if (this.tjText != '') {

      httputil.doRequest('/Myself/postUserAdvice', {'advice':this.tjText,'contactWay':this.phone,'pictruePath':this.toJava}, 1, this.onSuccess, this.onError, true)
      } else {
        this.$dialog.alert({ mes: '还没有填写反馈信息哦！' })
      }
    },
    onSuccess(res){
    	this.$dialog.alert({
        mes: '反馈成功！',callback:()=>{
             if (/iphone|ipad|ipod/.test(this.type)) {
          	  window.webkit.messageHandlers.iOS.postMessage({4:{'windowID':10004}})	
              // iOS.postMessage({4:{'windowID':10004}})	
          }else if(/android/.test(this.type)){
          	  window.YiDao.bussinessDistribute(4,"{'windowID':10004}")
          }
        }})
      
    },
    onError(res){
       this.$dialog.alert({ mes:res})
    }
    
  }
}





</script>
<style scoped>
.ks-cai-input {
  border-top: 5px solid #e9e9e9;
  padding: 8px;
 
}

.full-container {
  padding: 4px 20px;
  border: none;
  
  border-top: 1px solid #e9e9e9;
  border-bottom: 5px solid #e9e9e9;
}

textarea {
  height: 150px;
  width: 100%;
  border: none;
  font-size: 15px;
  color: #666160;
}

.suggestionImg {
  width: 40px;
  height:40px;
}

.addInput {
  position: absolute;
  top: 5px;
  left: 0;
  height: 50px;
  opacity: 0;
}

.addImg {
  overflow: hidden;
  width: 90px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 10px 20px 0 0;
}

input[type="text"] {
  -webkit-appearance: none;
  height: 35px;
  margin-left: 10px;
  border: 1px solid #aaa;
  border-radius: 3px;
  padding-left: 5px;
  font-size: 14px;
}

input:-moz-placeholder,
textarea:-moz-placeholder {
  font-weight: 14px;
}

input:-ms-input-placeholder,
textarea:-ms-input-placeholder {
  font-size: 14px;
}

input::-webkit-input-placeholder,
textarea::-webkit-input-placeholder {
  font-size: 14px;
}

.telText {
  display: flex;
  padding: 4px 20px;
  height: 70px;
}

.telX {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height:100%;
  font-size: 15px;
}

.cha {
  position: absolute;
  width: 17px;
  height: 17px;
  top: -10px;
  left: 80px;
  text-align: center;
  border: 1px solid #aaa;
  border-radius: 50%;
}
</style>


