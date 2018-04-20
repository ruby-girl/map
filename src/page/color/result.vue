<template>
  <div>
    <!--幸运色数-->
    
    	
   
    <div class="colorResult" >
      <!--<div class="resultTit">幸运色数</div>-->
      <!--具体的数字颜色-->
      <!--需要后台数据-->
      <div>
        <div class="resultNum">
          <div>你的幸运数：</div>
          <div><i class="arc">{{luckNumber[0]}}</i>&nbsp;&nbsp;<i class="arc">{{luckNumber[1]}}</i>&nbsp;&nbsp;<i class="arc">{{luckNumber[2]}}</i>&nbsp;&nbsp;<i class="arc">{{luckNumber[3]}}</i></div>
        </div>
        <div class="resultNum">
          <div>你的忌讳数：</div>
          <div><i class="arc">{{avoidNumber[0]}}</i>&nbsp;&nbsp;<i class="arc">{{avoidNumber[1]}}</i></div>
        </div>
        <div class="resultNum">
          <div>你的幸运色：</div>
          <div><i class="arc">{{luckColor[0]}}</i>&nbsp;&nbsp;<i class="arc">{{luckColor[1]}}</i>&nbsp;&nbsp;<i class="arc">{{luckColor[2]}}</i></div>
        </div>
        <div class="resultNum">
          <div>你的忌讳色：</div>
          <div><i class="arc">{{avoidColor[0]}}</i>&nbsp;&nbsp;<i class="arc">{{avoidColor[1]}}</i></div>
        </div>
      </div>
    </div>
    <!--使用方法-->
    <div class="resultMsg">
      <div>
        <div class="msg">[幸运数与忌讳数的使用]</div>
        <div class="text">主要用于电话号码尾号、车牌号码尾号和你住宅楼层</div>
      </div>
      <div>
        <div class="msg">[幸运色与忌讳色的使用]</div>
        <div class="text">主要用于您的家具、汽车、学生考试期间所作装，以及一切常用色，不包括工作服装、生活服装，若你所有的生活服装都是忌讳色，那么就有关系了。</div>
      </div>
      <div>
        <div class="msg">[化解汽车五行颜色相克法]</div>
        <div class="text">可用五枚开光铜钱，或点血铜钱分散放于车内干净处，不可放脚下，可破除颜色相克，保行车顺利。</div>
      </div>
  
    </div>
    	<div class="share" @click='toShare()' v-if="sCode==-1">
			<img :src="share" alt="" width="100%"/>
		</div>
  </div>
   
</template>
<script>
import httputil from '../../httputil';
import share from '../../share';

export default {
  name: 'num',
  data() {
    return {
      areaCode: '',
      birthday: '',
      sex: '',
      luckNumber: '',
      avoidNumber:'',
      luckColor:'',
      avoidColor:'',
      share:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/cesuan/4.png',
      id:'',
      ty:'',
      sCode:null
    }
  },
  	components: {
  
	},
  mounted: function () {
  	this.$nextTick(()=>{
  		 this.birthday = this.$route.query.birthday;
     this.sex = this.$route.query.sex;
    this.areaCode = this.$route.query.Code;
   httputil.doRequest('/Measure/luckColorAndNumber',{'areaCode':this.areaCode,'birthday':this.birthday,'sex':this.sex},1,this.onColorSuccess,null,false) 
   this.GetRequest()
  	})
     
  
},
methods:{
  GetRequest() {  
     let url=window.location.hash
		 let subStrs=url.split("?")	
		 this.send=subStrs[1]	
		 let li=this.send.split('&')	 
		var i=li[0].lastIndexOf("code")
	   this.sCode=i
	 },
  	oncodeSuccess(res){
             let code=res.object
				 share.toShare('幸运色测算','colorResult?code='+code+'&Code='+this.areaCode+'&sex='+this.sex+'&birthday='+this.birthday,'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/static/share/measure_6.png')
			},
			oncodeError(res){
				 this.$dialog.alert({mes:res})
			},
			toShare(){
				 httputil.doRequest('/Common/getShareCode',{'sType':7},1,this.oncodeSuccess,this.oncodeError,true) 
			
		},
	onColorSuccess(res){
		
      	 var lc= res.luckColor.luckColor;
    this.luckColor=lc.split('.');
     var ac = res.luckColor.avoidColor;
      this.avoidColor=ac.split('.');
     var an = res.luckNumber.avoidNumber;
     this.avoidNumber=an.split('.');
    var ln = res.luckNumber.luckNumber;
     this.luckNumber=ln.split('.');
	}
}
}





</script>
<style scoped>
 .colorResult {
  background: #e4393c;
  color: #fff;
  height: 200px;
  padding: 10px 10%;
}
.share{
		width: 45px;
		height: 45px;
		position: fixed;
		top:85%;
		right:15px;
	}
.resultTit {
  font-size: 25px;
  text-align: center;
  padding: 15px 0;
}

.resultNum {
  display: flex;
  align-items: flex-end;
  height: 42px;
  font-size: 18px;
}

.resultMsg {
  padding: 20px 10px 0 5%;
}

.msg {
  color: #e4393c;
  font-size: 15px;
}

.text {
  padding: 10px 0;
  text-indent: 2em;
  line-height: 25px;
  font-size: 15px;
  color: #737272;
}
.arc{
  display: inline-block;
  width:28px;
  height:28px;
  line-height: 28px;
  text-align: center;
  border-radius: 50%;
  background-color: #fff;
  color:#e4393c;
}
</style>
