<template>
  <div class="container">
    <ul class="mingxiUl">
       <li class="orderBorder" v-for="(item,i) in arr">         
            <div class="orderP">
              <div>订单号：{{item.orderID}}</div> 
            </div>
             <div class="orderP">
               <div class="orderBox flexLeft">姓名:{{item.payUserName}}</div>
               <div class="orderBox flexRight" style="white-space:nowrap;text-overflow:ellipsis; overflow:hidden;">购买服务:{{item.serviceName}}</div>
             </div>
             <div class="orderP">
               <div class="orderBox flexLeft" style="width:30%;">服务资费: <i style="color:#e4393c;">{{item.servicePrice}}</i></div>
               <div class="orderBox flexRight" style="fontSize:13px;width:70%;white-space:nowrap;text-overflow:ellipsis; overflow:hidden;">交易时间：{{item.paySuccessTime}}</div>
             </div>    
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
    document.title = '服务账单'
     httputil.doRequest('/MeasureAbout/userMeasureOrderByTime',{'startTime':this.$route.query.startDate+' 00:00:00','endTime':this.$route.query.endDate+' 23:59:59','sta':this.page},1,this.onSuccess,this.onError,true)
  },
  components: {
    
  },
  methods: {
    onSuccess(res){
      this.more=true
      this.arr=res.list
    },
    onError(res){
      // 处理没有数据  
      this.$dialog.alert({
					mes: res,callback:()=>{
            this.$router.go(-1)
          }
				});
    },
    toMore(){
      this.page++
       httputil.doRequest('/MeasureAbout/userMeasureOrderByTime',{'startTime':this.$route.query.startDate+' 00:00:00','endTime':this.$route.query.endDate+' 23:59:59','sta':this.page},1,this.onMoreSuccess,this.onMoreError,true) 
    },
    onMoreSuccess(res){
      this.arr=this.arr.concat(res.list)
    },
    onMoreError(res){
      this.page--
       this.$dialog.alert({
					mes: '没有更多数据了！'
				});
    }
  },
}

</script>
<style scoped>
.orderHeader{  
  height:40px;
  border-top:1px solid #e9e9e9;
  line-height: 40px;  
}
.orderH{
  width: 49%;
  display: inline-block;
  text-align: center;
}
.orderP{
  padding: 0 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.orderBox{
   width: 49%;
  display: inline-block;
  text-align: center;
 height:30px;
 line-height: 30px;
}
.flexLeft{
 text-align: left;
 box-sizing: border-box;
}
.liLi{
  height:35px;
  border-bottom: 1px solid #e9e9e9;
  line-height: 35px;
  padding-left: 15px;
}
.liPadding{
  padding:5px 15px;
}
.mTop{
  margin-top: 5px;
}
.orderBorder{
  border-top:4px solid #e9e9e9;
  border-bottom: 4px solid #e9e9e9;
  padding: 10px 0;
  font-size: 14px;
}
.flexRight{
  text-align: right;
}
</style>


