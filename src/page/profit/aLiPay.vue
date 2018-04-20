<template>
  <div class="full-container">
   
    <div style="border-top:1px solid #e9e9e9;">
      <div style="padding:50px 20px;">
         <div class="inputP">
           <img :src="img2" alt="" style="width:33px;height:33px;" v-show="a">
           <img :src="img1" alt="" style="width:33px;height:33px;" v-show="!a">
           <input type="text" class="aLiPayInput" v-model="num" >
         </div>
         <div style="padding:18px 0">
           您需要绑定{{typeText}}才能完成此次操作，因填写失误导致转款未成功由个人承担！
         </div>     
      </div>
      <div style="padding:60px 15px 0 15px;">
        <Btn btnMsg='立即绑定' @click.native="getPay()" ></Btn>
      </div>
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
               title:'微信绑定',
               img1: "http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/DSshouyi/7.3.png",
               img2: "http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/DSshouyi/7.2.png",
               a:false,
               type:'',
               num:'',
               typeText:'微信'
               
            }
        },
        created(){
          document.title=this.title
          let a=this.$route.query.type
          let nums=this.$route.query.num     
          if(nums!='点击绑定'){
            this.num=nums
          }else{
            this.num=''  
          }
          if(a==1){
            this.title='支付宝绑定'
            this.typeText='支付宝'
            this.a=false
            this.type='aLiPay'
          }else{
            this.type='weChatPay'
            this.a=true
            return false
          }  
        },
        components: {
         Tit,Btn
          },
        methods:{
           getPay(){
             var reg=/^[^\u4E00-\u9FA5\uF900-\uFA2D\u0020]{4,20}$/
             console.log(this.num,this.type)
             if(this.num.match(reg)){
             httputil.doRequest('/Master/editAccount',{'key':this.type,'value':this.num},1,this.onSuccess,this.onError,true)
             }else{
               this.$dialog.alert({mes:'输入错误！'})
             }          
           },
           onSuccess(res){
           	 this.$dialog.alert({
                    mes: '绑定成功！',
                    callback: () => {
                      this.$router.go(-1)
                    }
                });
           },
           onError(res){
             this.$dialog.alert({
                    mes: res})
           }
        }
    }
 
</script>
<style scoped>
.full-container{
  width:100%;
  color:#666160;
}
.inputP{
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.aLiPayInput{
  width:78%;
  margin-left: 20px;
  height:40px;
  border:1px solid #e9e9e9;
  outline: none;
  -webkit-appearance: none;
  border-radius: 4px;
  padding-left: 8px;
  color:#666160;
}
</style>


