<template>
  <div class="full-container container">
    
    <ul style="border-top:1px solid #e9e9e9;">
      <li v-for="item in list" style="border-bottom:1px solid #e9e9e9; font-size:14px;">
        <div class="fensiLi">
          <img :src="item.headURL" alt="" class="fensiImg">
          <div class="fensiName">{{item.uName}}</div>
        </div>
      </li>
    </ul>
    <div @click='addSta()' class="fensiFooter">{{tit}}</div>
  </div>
</template>
<script>
import Tit from '../../components/nav'
import Btn from '../../components/button'
import httputil from '../../httputil';
export default {
  name: '',
  data() {
    return {
      
      list: [],
      sta: 1,
      tit: '',
      type:null
    }
  },
  created() {   
      document.title='我的粉丝'
		
  },
  mounted: function () {
  	     this.$nextTick(()=>{
  		   httputil.doRequest('/Master/masterMyFansList',{'sta':this.sta},1,this.onSuccess,this.onError,true) 
  	    })
  },
  components: {
    Tit, Btn
  },
  methods: {
  	onSuccess(res){
  		this.list = res.list
            if (res.tp > res.cp) {
              this.tit = '点击加载更多'
            } else {
              this.tit = '没有更多数据了'
            }
  	},
  	onError(res){
      this.$dialog.alert({
						mes: res,
            callback:()=>{
              	this.type=navigator.userAgent.toLowerCase(); 
			   if (/iphone|ipad|ipod/.test(this.type)) {
			   	  window.webkit.messageHandlers.iOS.postMessage({4:{'windowID':10004}})
            //  iOS.postMessage({4:{'windowID':10003}})
			   }else if(/android/.test(this.type)){
			   	  window.YiDao.bussinessDistribute(4,"{'windowID':10004}")
			   }else{
			   	 window.location="https://www.kushanbaoli.com";
			   }
            }
					})
  	
  	},
    addSta() {
      if (this.tit == '点击加载更多') {
        this.sta++      
        httputil.doRequest('/Master/masterMyFansList',{'sta':this.sta},1,this.onAddSuccess,null,true) 
       } else {
        return
       }    
      
    },
    onAddSuccess(res){
    	this.list = this.list.concat(res.list)
            if (res.tp > res.cp) {
              this.tit = '点击加载更多'
            } else {
              this.tit = '没有更多数据了'
            }
    }
  }
}

</script>
<style scoped>
.full-container {
  width: 100%;
  color: #666160;
}

.fensiImg {
  width: 40px;
  height: 40px;
}

.fensiLi {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 5px 15px;
}

.fensiName {
  flex: 1;
  margin-left: 15px;
}

.fensiFooter {
  height: 40px;
 font-size: 14px;
  line-height: 40px;
  text-align: center;
  color: #e9e9e9;
}
</style>


