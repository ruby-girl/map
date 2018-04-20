<template>
  <div class="full-container container">
	 
			<div  style="text-align: right;font-size: 14px;color:white;background:#e4393c;paddingTop:20px;" @click='edit()'>
				提现记录
			</div>
		
    <!--红底金额区-->
   
      <div class="redBack">
      <div>金额（元）</div>
      <div class="profitNum">
        {{total}}
      </div>
      </div>
    
    <div style="padding:0 15px;" @click='toCash()'>
      <div style='display:flex;justifyContent:space-between;align-items: center;padding:8px 0'>
        <div style="display:flex;align-items: center;">
          <img src="http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/DSshouyi/2.1.png" alt="" style="width:17px;height:17px;margin:0 20px 0  0">
          <div>提现</div>
        </div>
        <div class="git">></div>
      </div>
      <div></div>
    </div>
    <div style="padding:0 15px;border-top:1px solid #e9e9e9;" @click='toAic()'>
      <div style='display:flex;justifyContent:space-between;align-items: center;padding:8px 0'>
        <div style="display:flex;align-items: center;">
          <img src="http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/DSshouyi/2.2.png" alt="" style="width:17px;height:17px;margin:0 20px 0  0">
          <div>收入分析</div>
        </div>
        <div class="git">></div>
      </div>
      <div></div>
    </div>
    <div style="flex:1;background:#e9e9e9;"></div>
  </div>
</template>
<script>
import httputil from '../../httputil'
	import navbar from '../../components/nav';
export default {
  name: 'MY',
  data() {
    return {
     
     total:''
    }
  },
  components: {
    navbar
  },
  created(){
   			
      document.title='我的收益'
	
    httputil.doRequest('/MySelf/memberPoint',null,1,this.onSuccess,this.onError,true) 
  },
  methods: {
    onError(res){
       this.$dialog.alert({
					mes:res
				});
    },
  	onSuccess(res){
  		this.total=res/100
  	},
    toAic(){
      this.$router.push('/analysis')
    },
    edit(){
      this.$router.push('/mingxi')
    },
    toCash(){
      this.$router.push('/cash')
    }
  }
}

</script>
<style scoped>
.full-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  color: #666160;
}
.redBack{
  box-sizing: border-box;
  background-color: #e4393c;
  color:#fff;
  padding-left:15px;
  font-size: 14px;
}
.profitNum{
  font-size: 45px;
  padding: 55px 0 20px 0;
}
.git{
  font-size: 28px;
  color:#e9e9e9;
}
</style>


