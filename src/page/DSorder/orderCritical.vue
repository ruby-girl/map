<template>
  <div class="container">
    <div class="flex_start" style="height:80px;font-size:15px;">
        <div style="width:55px;height:55px;"><img :src="masterMsg.headURL" alt="" class="order-head"></div>
        <div style="margin-left:5px;">
          <div style="font-size:17px;padding:5px 0;">{{masterMsg.masterName}}</div>
          <div style="font-size:14px;color:#aaa;white-space:nowrap;text-overflow: ellipsis;overflow:hidden;">咨询项目 &nbsp;&nbsp; <i>{{masterMsg.serviceName}}</i></div>
        </div>
    </div>
    <textarea v-model="content" name="" id="orderTEXT"  rows="10" style="padding:10px;width:100%;"></textarea>
    <!--图片-->
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
			<div>
				<label :for="myFile" style="display: inline-block;width: 100%;position:relative;" >
				
					<!--<upload :url="uploadUrl" :multiple="true" :id="myFile" @getUrl="getPic" style="position: absolute;left:-99999px"></upload>-->
          <add :type="11" @getURL='getPic' style="position: absolute;left:0;top:0;"></add>
					<div>
						<img :src="add" alt="" width="50px"/>
					</div>
					<div  style="fontSize:13px;">
						添加图片					
        	</div>
				</label>
			</div>
		</div>
    <!--好评-->
    <div class="flex_center" style="border-top:1px solid #eee;border-bottom:1px solid #eee;padding:5px 0;">
      <div class="flex_center" style="font-size:14px;width:33%;" @click="hao()">
        <img v-if="haoping" class="oder_img_hao" src="../../../static/img/13.png" alt="">
        <img v-if="haoping==false" class="oder_img_hao" src="../../../static/img/14.png" alt="">
        <div>好评</div>
      </div>
      <div class="flex_center" style="font-size:14px;width:33%;" @click="zhong()">
        <img v-if="zh" class="oder_img_hao" src="../../../static/img/15.png" alt="">
        <img v-if="!zh" class="oder_img_hao" src="../../../static/img/16.png" alt="">
        <div>中评</div>
      </div>
      <div class="flex_center" style="font-size:14px;width:33%;" @click="chaping()">
        <img v-if="cha" class="oder_img_hao" src="../../../static/img/11.png" alt="">
        <img v-if="!cha" class="oder_img_hao" src="../../../static/img/12.png" alt="">
        <div>差评</div>
      </div>
    </div>
    <div class="flex_start order_phone" v-if="score==1">
      <div>联系电话：</div>
      <input type="number"  v-model="phone">
    </div>
    <div style="padding:0 15px;margin:80px 0 20px 0;" @click="toResult()">
      <Btn btnMsg='提交评论'>提交评论</Btn>
    </div>
  </div>
</template>
<script>

import Btn from '../../components/button'
import httputil from '../../httputil';

import add from '../../components/Allimg';
export default {
        name: '',
        data () {
            return {
              haoping:true,
              zh:true,
              cha:true,
              masterMsg:null,
              myFile:'order',
              arr:[],
              rem:'',
              res:'',
              rea:'',
              phone:'',
              content:'',
              score:null,
              toJavaUrl:null,
              imgs:require('../../../static/img/1.png'),
               add:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/pay/add.png'
            }
        },
        created(){         
			document.title='订单评价'
		   httputil.doRequest('/MeasureAbout/measureTaskByOderID',{'orderID':this.$route.query.oId},1,this.onSuccess,this.onError,true) 
         httputil.doRequest('/Common/userMasterCommentDetails',{'outTradeId':this.$route.query.oId},1,this.onPSuccess,this.onPError,true) 
        },

        components: {
         Btn,add
          },
        methods:{
          onPSuccess(res){
            this.content=res.content
            if(res.ocScore==1){
              this.chaping()
            }else if(res.ocScore==2){
              this.zhong()
            }else if(res.ocScore==3){
              this.hao()
            }
          },
          onPError(res){
             	this.$dialog.toast({
			          mes: res,
             timeout: 1500,
           	});
          },
           onError(res){
             	this.$dialog.toast({
			          mes: res,
             timeout: 1500,
           	});
          },
          	getPic(m){
				if(this.res==''){
           	this.res=m
				}else if(this.rem==''){
           	this.rem=m
				}else if(this.rea==''){
           	this.rea=m
				}
			},
      onSuccess(res){
        this.masterMsg=res
      },
      hao(){
        this.score=3
         this.cha=true
          this.zh=true
         this.haoping=false
      },
      zhong(){
         this.score=2
        this.cha=true
         this.zh=false
        this.haoping=true
      },
      chaping(){
         this.score=1
        this.cha=false
         this.zh=true
        this.haoping=true
      },
      toResult(){
          if(this.content){
            if(this.score==1){
                if(!this.phone){
              this.$dialog.alert({
             mes: '留个联系电话吧，我们会做得更好哦！'})
             return
              }
            }
             this.toJavaUrl=this.res+','+this.rem+','+this.rea
            httputil.doRequest('/FindMaster/userOrderComment',{'oId':this.$route.query.oId,'content':this.content,'score':this.score,'thumbnail':this.toJavaUrl,'concat':this.phone},1,this.onRSuccess,this.onRError,true) 
          }else{
          	this.$dialog.alert({
             mes: '请填写评论内容！'})
          }  
      },
      onRSuccess(res){
        if(res.code==200){
           this.$dialog.alert({
             mes:'感谢您的评价！',callback:()=>{
               this.$router.go(-1)
             }})
        }else{
          this.$dialog.alert({
             mes: res.message,callback:()=>{
               this.$router.go(-1)
             }})  
        }
       	
      },
      onRError(res){
        this.$dialog.alert({
             mes: res.message,callback:()=>{
               this.$router.go(-1)
             }})
      }
    }
  }
 
</script>
<style scoped>

.flex_center{
  display: flex;
  justify-content: center;
  align-items: center;
}
.flex_start{
  display: flex;
  justify-content: flex_start;
  align-items: center;
}
.flex_c{
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
}
.order-head{
  width:100%;
  height: 100%;
  border-radius: 50%;
}
#orderTEXT{
  border:none;
  border-top: 1px solid #eee;
  color:#aaa;
  font-size: 14px;
}
.oder_img_hao{
  width:35px;
  height:35px;
  margin-right: 10px;
}
.order_phone{
  margin-top:20px;
  font-size: 15px;
  padding-left: 15px;
  height: 35px;
  line-height: 35px;
}
.order_phone>input{
  outline: none;
  border:1px solid #eee;
  height:100%;
  padding-left: 5px;
  -webkit-appearance: none;
}
</style>


