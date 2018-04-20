<template>
  <div class="full-container container">
    <p v-html="ll" class="showQianText container"></p> 
    <div class="share" @click='toShare()' v-if="sCode==-1">
			<img :src="share" alt="" width="100%"/>
		</div>
  </div>
</template>
<script>
import httputil from '../../httputil';
import share from '../../share';
export default {
  name: '',
  data() {
    return {
      dType:null,
      dId:null,
      ll:null,
      share:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/cesuan/4.png',
      sCode:null
    }
  },
  created() {
    document.title='每日一签'
    this.GetRequest()
  },
  components: {
    
  },
  methods: {
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
				 share.toShare('每日一签','showQian?code='+code+'&dType='+this.$route.query.dType+'&dId='+this.$route.query.dId,'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/static/share/measure_11.png')
			},
			oncodeError(res){
				 this.$dialog.alert({mes:res})
			},
			toShare(){
				 httputil.doRequest('/Common/getShareCode',{'sType':12},1,this.oncodeSuccess,this.oncodeError,true) 
			
		},
    onSuccess(res){
    	this.ll=res.explaint
    },
    onError(res){
      this.$dialog.alert({mes:res})
    }
  },
  mounted: function () {
  	   this.$nextTick(()=>{
         console.log(this.$route.query.dType)
  	   	httputil.doRequest('/Measure/divination',{'dType':this.$route.query.dType,'dId':this.$route.query.dId},1,this.onSuccess,this.onError,false) 
  	   })
  }
}

</script>
<style scoped>
.full-container {
  width: 100%;
  color: #666160;
  display: flex;
  flex-direction: column;
  height: 100%;
}
.showQianText{
  margin-top:40px;
  padding: 0 30px 15px 15px;
}
.share{
   z-index: 100000;
		width: 45px;
		height: 45px;
		position: fixed;
		top:85%;
		right:15px;
	}
</style>


