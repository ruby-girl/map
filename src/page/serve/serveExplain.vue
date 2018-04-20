<template>
  <div class="eplainBox">
    <div class="eplainText">
      <div style="color:#e4393c;margin-bottom:5px;">{{serve.serviceName}}</div>
      <div style="text-align:left;">{{serve.serviceDesc}}</div>
    </div>
    <div style="paddingLeft:2%;margin:15px 0;border-bottom:4px solid #eee;" v-if="serve.list.length!=0">
      <img :src="item" alt="" v-for="item in serve.list" class="serve-img">
    </div>
    <div class="eplainList">
      <div>资费</div>
      <div class="eplainPrice">¥{{serve.price*serve.dicount/100}}</div>
    </div>
    <div class="eplainFooter">
       <div  style="text-align:center;font-size: 14px;color:deepskyblue;">
        <span @click='edit()' class="serve_colror">编辑</span>
        <span @click='serveDel()' class="serve_colror" style="background:#aaa;color:#666;">删除</span>
      </div>
    </div>
  </div>
</template>
<script>

import httputil from '../../httputil'
import navbar from '../../components/nav';

export default {
  data() {
    return {
      sId: '',
      serve:null
    }
  },
  created() {  
      document.title='服务管理'
    this.sId = this.$route.query.sId;
     httputil.doRequest('/Master/masterServiceDetails',{'sId':this.sId},1,this.onSuccess,this.onError,true) 		
  },
  components: {
    navbar
  },
  methods: {
    onError(res){
       this.$dialog.alert({ mes:res})
    },
    edit() {
      this.$router.push('/addServe?sId=' + this.sId)
    },
    
    serveDel() {
      httputil.doRequest('/Master/masterServiceCancel',{'sId':this.sId},1,this.onSSuccess,this.onError,true) 		

    },
    onSSuccess(res){
    	this.$dialog.alert({
              mes: '删除成功！', callback: () => {
                this.$router.push('/serveList')
              }
            })
    },
    onSuccess(res){
      this.serve=res
    }
  }
}




</script>
<style scoped>
.eplainBox {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.navRight {
  position: absolute;
  display: flex;
  right: 0;
}

.rightDiv {
  color: #0475FD;
  padding-right: 10px;
  font-size: 14px;
}

.eplainText {
  text-align: center;
  padding: 16px;
  border-top: 4px solid #e9e9e9;
  border-bottom: 4px solid #e9e9e9;
  font-size: 16px;
}

.eplainList {
  display: flex;
  height: 35px;
  padding: 0 12px;
  line-height: 35px;
}

.eplainPrice {
  color: #e4393c;
  padding-left: 20px;
}

.eplainFooter {
  flex: 1;
  background-color: #e9e9e9;
}
.serve-img{
  display: inline-block;
  width:30%;
  margin-right: 2%;
}
.serve_colror{
  margin-top: 15px;
  color:#fff;
  display: inline-block;
  height: 40px;
  width:45%;
  text-align: center;
  line-height: 40px;
  background: #e4393c;
  border-radius: 4px;
}
</style>


