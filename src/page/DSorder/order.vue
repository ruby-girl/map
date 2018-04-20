<template>
  <div class="full-container">
    <div>
      <ul>
        <li class="orderBorder" v-for="(item,i) in arr" >
           
            <div class="orderP">
              <div>订单号：{{item.orderID}}</div> 
            <div style="width:30%;">
               <div v-if="item.state==2&&item.isComment==0" class="orderBox flexRight" style="fontSize:13px;width:70%;background:#32af9f;text-align:center;border-radius:5px;color:#fff;" @click="toCritical(item.orderID,i,item.isComment)">评论订单</div>
               <div v-if="item.state==2&&item.isComment==1" class="orderBox flexRight" style="fontSize:13px;width:70%;text-align:center;background:#32af9f;border-radius:5px;color:#fff;" @click="toCritical(item.orderID,i,item.isComment)">修改评论</div>
               <div v-if="item.state==2&&item.isComment>1" class="orderBox flexRight" style="fontSize:13px;width:70%;text-align:center;">已完成</div>
               <div @click.stop="toJava(item.orderID,item.payUserID,item.masterUserID)" v-if="item.state==0||item.state==1" class="orderBox flexRight" style="color:rgb(0,220,255);fontSize:13px;width:70%;background:#f57767;text-align:center;border-radius:5px;color:#fff;">去咨询大师</div>
               <div v-if="item.state==3" class="orderBox flexRight" style="color:rgb(0,220,255);fontSize:13px;width:70%;background:#f57767;text-align:center;border-radius:5px;color:#fff;">订单超时</div>
               <div v-if="item.state==4" class="orderBox flexRight" style="color:rgb(0,220,255);fontSize:13px;width:70%;background:#f57767;text-align:center;border-radius:5px;color:#fff;">申请维权</div>
             </div> 
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
      <div v-if="arr!=''"  style="width:100%;text-align:center;color:#e4393c;height:80px;line-height:80px;" @click="toMore()">点击加载更多</div>
    </div>
  </div>
</template>
<script>
import Tit from '../../components/nav'
import Btn from '../../components/button'
import httputil from '../../httputil';
export default {
        name: '',
        data () {
            return {
              arr:[],
              page:1
            }
        },
        created(){         
			document.title='订单详情'
		   httputil.doRequest('/MeasureAbout/userMeasureOrder',{'page':1},1,this.onSuccess,this.onError,true) 
        },
        components: {
         Tit,Btn
          },
        methods:{
          onSuccess(res){
            this.arr=res
          },
          onError(res){
            	this.$dialog.alert({
			      	mes: res,
              callback:()=>{
                  let ua = navigator.userAgent.toLowerCase(); 
              if (/iphone|ipad|ipod/.test(ua)) {
               window.webkit.messageHandlers.iOS.postMessage({4:{'windowID':10004}})
              }else if(/android/.test(ua)){
                 	window.YiDao.bussinessDistribute(4,"{'windowID':10004}")
                }
              }
          })
          },
          toJava(o,p,m){
              let ua = navigator.userAgent.toLowerCase(); 
              if (/iphone|ipad|ipod/.test(ua)) {
                window.webkit.messageHandlers.iOS.postMessage({16:{"orderID":o,"payUserID":p,"masterUserID":m}})
              }else if(/android/.test(ua)){
                  window.YiDao.bussinessDistribute(16,JSON.stringify({"orderID":o,"payUserID":p,"masterUserID":m}))
                }
          },
          toCritical(ind,i,num){     
            if(this.arr[i].state==2){
              if(num==1||num==0)
               this.$router.push('/orderCritical?oId='+ind)
            }else{
              return
            }
          },
          toMore(){
            this.page++
            httputil.doRequest('/MeasureAbout/userMeasureOrder',{'page':this.page},1,this.onMoreSuccess,this.onMoreError,true) 
          },
          onMoreSuccess(res){
           this.arr=this.arr.concat(res)
          },
          onMoreError(res){
            this.$dialog.toast({
		                    mes: '没有更多的数据！',
		                    timeout: 1500
		                });
										this.page--
          }
        }
    }
 
</script>
<style scoped>
.full-container{
  width:100%;
  color:#666160;
}
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


