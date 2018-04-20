<template>
  <div class="full-container">
    <div>
      <div style="height:40px;fontSize:16px;line-height:40px;padding:0 15px;">提现方式</div>
      
      <label for="zhi" class="payY">
			<div style="display:flex;align-items: center;">
				<img :src="kf" alt="" style="width:45px;height:45px;">
			  <div style="fontSize:16px;paddingLeft:10px;">联系客服</div>
			</div>		
			<div>	
         	<input type="radio" id="zhi" value="1" v-model="value" style="display: none;">
				<div class="payArc">
					<div class="payArcS"></div>
				</div>
			</div>
		</label>
      	<!--<label for="zhi" class="payY">
			<div style="display:flex;align-items: center;">
				<img :src="zf" alt="" style="width:45px;height:45px;">
			  <div style="fontSize:16px;paddingLeft:10px;">支付宝</div>
			</div>		
			<div>
				<input type="radio" id="zhi" value="1" v-model="value" style="display: none;">
				<div class="payArc">
					<div class="payArcS"></div>
				</div>
			
			</div>
		</label>
	
		<label for="yd" class="payY">
			<div style="display:flex;align-items: center;">
				<img :src="wx" alt="" style="width:45px;height:45px;">
			  <div style="fontSize:16px;paddingLeft:10px;">微信</div>
			</div>		
			<div>
				<input type="radio" id="yd" value="2" v-model="value" style="display: none;">
				<div class="payArc">
					<div class="payArcS"></div>
				</div>
			
			</div>
		</label>-->
    </div>
    <div class="cashFooter">
     <Btn btnMsg='确认提现' @click.native="toKefu" ></Btn>
    </div>
  </div>
</template>
<script>
import Tit from '../../components/nav'
import Btn from '../../components/button'

export default {
        name: '',
        data () {
            return {
              value:1,
              wx:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/cesuan/wx.png',
				kf:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/DSshouyi/7.1.png',
				zf:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/cesuan/zf.png',
            }
        },
        created(){
         
      document.title='提现'
	
        },
        components: {
         Tit,Btn
          },
        methods:{
           toKefu(){
             	let ua = navigator.userAgent.toLowerCase(); 
	   	if (/iphone|ipad|ipod/.test(ua)) {
         window.webkit.messageHandlers.iOS.postMessage({64:{'payPlatform':'','payBussiness':'','money':'','bussinessID':'','refURL':''}})
       
       }else if(/android/.test(ua)){
          window.YiDao.bussinessDistribute(64,JSON.stringify({"payPlatform":'',"payBussiness":'',"money":'',"bussinessID":'','refURL':''}));
       }
           }
        }
    }
 
</script>
<style scoped>
.full-container{
  width:100%;
  color:#666160;
  display: flex;
  flex-direction:column;
  height: 100%;
}
.cashHeader{
  /*padding: 15px;*/
  height:55px;
  border-top:1px solid #e9e9e9;
  border-bottom: 4px solid #e9e9e9;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 15px;
}
.cashLi{
 display: flex;
 justify-content: space-between;
  align-items: center;
  border-top:1px solid #e9e9e9;
  height:70px;
  padding-left: 15px;
}
.cashImg{
  width: 33px;
  margin-right: 25px;
}
.cashFooter{
  flex: 1;
  background: #e9e9e9;
  padding: 50px 15px 0 15px;
}
.cashInput{
  border:none;
  -webkit-appearance: none;
  border:1px solid #ccc;
  height:35px;
  line-height: 35px;
  padding-left: 5px;
  color:#666;
}
.payY{
  border-top: 1px solid #eee;
		display: flex;
		align-items: center;
   justify-content: space-between;
	 padding: 10px 15px;
	}
.payArc{
		border:1px solid #e9e9e9;
		width:25px;
		height:25px;
		border-radius: 50%;
	}
	.payArcS{
		width:15px;
		height:15px;
	
		border-radius: 50%;
		margin-left: 4px;
		margin-top: 4px;
	}
	input:checked+.payArc>.payArcS{
      	background: red;
	}
</style>


