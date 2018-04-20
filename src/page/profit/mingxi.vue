<template>
  <div class="full-container">

    <ul class="mingxiUl">
      <li class="mingxiLi" v-for="(item,i) in arr" :key="i">
        <div>{{item.withdrawalTime}}</div>
        <div>{{item.platform==1?'支付宝':'微信'}}</div>
        <div class="mingxiColor">￥{{item.money/100}}</div>
      </li>

    </ul>
    <div v-show="more" @click="toMore()" style="text-align:center;margin-top:25px;color:#e4393c;font-size:14px;">点击加载更多</div>
  </div>
</template>
<script>
import httputil from '../../httputil';

export default {
  name: '',
  data() {
    return {
      page:1,
      arr:null,
      more:false
    }
  },
  created() {
    document.title = '提现记录'
     httputil.doRequest('/Master/masterWithdrawalList',{'sta':this.page},1,this.onSuccess,this.onError,true)
  },
  components: {

  },
  methods: {
    onSuccess(res){
      if(res.list.length==0){
         this.$dialog.alert({ mes: '没有可查询信息!' ,
        callback:()=>{
          this.$router.go(-1)
        }})
      }else{
         this.arr=res.list
         this.more=true
      } 
    },
    onError(res){
      this.$dialog.alert({ mes: res})
    },
    toMore(){
      this.page++
      httputil.doRequest('/Master/masterWithdrawalList',{'sta':this.page},1,this.onMoreSuccess,this.onMoreError,true)
    },
    onMoreSuccess(res){
       if(res.list.length==0){
         this.page--
         this.$dialog.alert({ mes: '没有更多数据!'})
      }else{
         this.arr=this.arr.concat(res.list)
         this.more=true
      } 
    },
    onMoreError(res){
      this.page--
       this.$dialog.alert({ mes: res})
    }
  },
}

</script>
<style scoped>
.full-container {
  height: 100%;
  color: #666160;
  font-size: 15px;
}

.mingxiUl {
  border-top: 1px solid #e9e9e9;
}

.mingxiLi {
  padding: 10px 15px;
  border-bottom: 1px solid #e9e9e9;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.mingxiColor {
  color: #009110;
}
</style>


