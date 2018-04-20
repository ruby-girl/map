<template>
  <div class="serveBox container">
    <div class="full-container ks-item">
      <div class="serveLie">
        <div class="back-hui">
          <div class="shu"></div>
          <div>输入服务名称</div>
        </div>
        <input style="display:block;"  type="text" v-model="serviceName"  placeholder="请输入服务名称" >
      </div>
      <div class="serveLie" style="border-top:5px solid #e9e9e9;border-bottom:5px solid #e9e9e9;">
        <div class="back-hui">
          <div class="shu"></div>
          <div>服务介绍</div>
        </div>
        <textarea name="" id="" v-model="serviceDesc" class="serveText" placeholder="请详细描述一下您所添加的服务项目" style="border:none;"></textarea>
      </div>
      <div class="serveLie" style="border-bottom:5px solid #e9e9e9;">
        <div class="back-hui">
          <div class="shu"></div>
          <div>图片介绍</div>
        </div>
        <!--图片-->
        <div style="padding: 15px;display: flex;">
			<div style="width:25%;paddingRight:5px;" v-if="res!==''">
				<div>
					<img :src="res" alt="" style="width:100%;" @click="res=''"/>
				</div>
			</div>
			<div style="width:25%;paddingRight:5px;" v-if="rem!==''">
				<div>
					<img :src="rem" alt="" style="width:100%;" @click="rem=''"/>
				</div>
			</div>
			<div style="width:25%;paddingRight:5px;" v-if="rea!==''">
				<div>
					<img :src="rea" alt="" style="width:100%;" @click="rea=''"/>
				</div>
			</div>
			<div style="position:relative;">
         <add :type="10" @getURL="getPic" style="position:absolute;top:0;left:0;"></add>
					<div>
						<img :src="add" alt="" width="50px"/>
					</div>
					<div  style="fontSize:13px;">
						添加图片					
        	</div>
			
			</div>
		</div>
        <!--图片end-->
      </div>
      <div class="zifei">
         <div class="back-hui">
          <div class="shu"></div>
          <div>资费</div>
        </div>
        <div style='color:#e4393c;font-size:19px;' >
          ¥<input id="amount" style="IME-MODE: disabled;width:50px;inline-block; margin-left:0;color:#e4393c; HEIGHT: 15px" onkeyup="this.value=this.value.replace(/\D/g,'')"  onafterpaste="this.value=this.value.replace(/\D/g,'')" maxlength="5" name="amount" type="text"  v-model='servePrice' />
        </div>
      </div>
      <div style="background: #e9e9e9;height:5px"></div>
      <div  style="text-align: center;font-size: 14px;margin-bottom:20px;">
				<span @click='addServe()' class="serve_colror">保存</span>
				<span @click='cancel()' class="serve_colror" style="background:#eee;color:#666;">取消</span>
			</div>
    </div>     
  </div>
</template>
<script>
import Tit from '../../components/nav'
import httputil from '../../httputil'
import add from '../../components/Allimg';
export default {
  data() {
    return {
     serviceName:'',
     servePrice:'0',
     serviceDesc:'',
     sId:-100,
     	res:'',
			rem:'',
			rea:'',
     tit:'添加服务',
     add:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/pay/add.png',
     myFile:'ks-file',
     tojavaURL:''
    }
  },
  created(){	
      document.title='服务管理'
   this.sId=this.$route.query.sId;
  
   if(this.sId){
    document.title='编辑服务'
      this.tit='编辑服务'
      httputil.doRequest('/Master/masterServiceDetails',{'sId':this.sId},1,this.onBJSuccess,this.onBJError,true)
   }else{  
      this.sId=-100
   }
  },
  components: {
    Tit,add
  },
  methods: {
    	getPic(m){
				if(this.res==''){
           	this.res=m
				}else if(this.rem==''){
           	this.rem=m
				}else if(this.rea==''){
           	this.rea=m
				}
			},
   cancel(){
     this.$router.go(-1)
   },
   onBJError(res){
      this.$dialog.alert({mes:res})
   },
   onBJSuccess(res){
     this.serviceName=res.serviceName
     this.servePrice=res.price*res.dicount/100
     this.serviceDesc=res.serviceDesc
     let imgs=res.list
     if(res.list.length==1){
       this.res=res.list[0]
     }else if(res.list.length==2){
       this.res=res.list[0]
       this.rem=res.list[1]
     }else if(res.list.length==3){
       this.res=res.list[0]
       this.rem=res.list[1]
       this.rea=res.list[2]
     }
   },
   addServe(){ 
     if(this.servePrice == 0){
       this.$dialog.alert({ mes: '请填写金额！' })
       return
     }
     if(this.serviceName!=''&&this.serviceDesc!=''){
         this.toJavaUrl=this.res+','+this.rem+','+this.rea
      httputil.doRequest('/Master/masterServiceOperation',{'sId':this.sId,'price':this.servePrice*100,'serviceName':this.serviceName,'serviceDesc':this.serviceDesc,'thumbpails':this.toJavaUrl},1,this.onSuccess,this.onBJError,true) 		
      
     }else{
       this.$dialog.alert({ mes: '请填写完整信息！' })
     }
   },
   onSuccess(res){
   	 this.$dialog.alert({ mes: '保存成功！',callback: () => {
              this.$router.go(-1)
              }})
   }
}
}

</script>
<style scoped>
.serveBox{
  display: flex;
  flex-direction:column;
  height:100%;
}
.ks-item{
	flex:1;
}
.serveLie{
  width:100%;
  color:#000;
  font-size: 16px;
  line-height: 25px;
  padding:0  15px 0 15px;
}
.shu{
  display: inline-block;
  margin-right: 5px;
  height:14px;
  width:4px;
  background: #0475FD;
  border-radius: 2px;
}
.back-hui{
  padding: 5px 0;
  font-size: 16px;
  display: flex; 
  align-items: center;
}
input[type="text"] {
  -webkit-appearance: none;
  height: 28px;
  padding-bottom: 5px;
  border:none;
}
.serveText{
  width:100%;
  height:130px;
}
.zifei{
  display: flex;
  justify-content:space-between;
  padding:0 15px 0 15px;
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
.serveInput{
  border:1px solid #aaa;
}
</style>


