<template>
  <div class="full-container container">
    
    <div class="jx-content">
       <ul class="jx-flex">
        <li class="jx-flex jx-li"  @click="toResult(i)" v-for="(item,i) in list">
         <img :src="item.img" alt="" >
         <div>{{item.text}}</div>
        </li>
        
      </ul>
    </div>
    <div class="share" @click='toShare()' v-if="sCode==-1">
			<img :src="share" alt="" width="100%"/>
		</div>
  </div>
</template>
<script>
import Tit from '../../components/nav'
import Btn from '../../components/button'
import httputil from '../../httputil';
import share from '../../share';
export default {
  name: '',
  data() {
    return {
      jsessionid: '',
     	share:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/cesuan/4.png',
      list:[{'img':'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/1.png','text':'眼跳'},
      {'img':'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/2.png','text':'耳热'},
      {'img':'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/3.png','text':'面热'},
      {'img':'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/4.png','text':'心惊'},
      {'img':'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/5.png','text':'喷嚏'},
      {'img':'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/6.png','text':'肉颤'},
      {'img':'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/7.png','text':'耳鸣'},
      {'img':'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/8.png','text':'衣留'},
      {'img':'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/9.png','text':'釜鸣'},
      {'img':'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/10.png','text':'火逸'},
      {'img':'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/11.png','text':'鸦鸣'},
      {'img':'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/12.png','text':'犬吠'}],
      sCode:null
    }
  },
  created() {
      document.title='吉凶征兆'
	  this.GetRequest()
  },
  components: {
    Tit, Btn
  },
  methods: {
    	GetRequest() {
			let url = window.location.hash
			var i = url.lastIndexOf("code")
			this.sCode = i
		
		},
     oncodeSuccess(res){
             let code=res.object
				 share.toShare('吉凶征兆','jxIndex?code='+code,'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/static/share/measure_8.png')
			},
			oncodeError(res){
				 this.$dialog.alert({mes:res})
			},
			toShare(){
				 httputil.doRequest('/Common/getShareCode',{'sType':9},1,this.oncodeSuccess,this.oncodeError,true) 
			
		},
   toResult(ind){
   	
         this.$router.push('/jxResult?id='+ind) 	 
   }
  }
}

</script>
<style scoped>
.full-container {
  width: 100%;
  color: #666160;
}
.share{
		width: 45px;
		height: 45px;
		position: fixed;
		top:85%;
		right:15px;
	}
.jx-content{
  border-top: 1px solid #e9e9e9;
  padding-top: 10px;
}
.jx-flex{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap:wrap;
}
.jx-li{
  width: 25%;
  height:100px;
  flex-direction: column;
  font-size:15px;
  margin-bottom: 5px;
  cursor: pointer;
}
.jx-li img{
	width:40px;
	height:40px;
	margin-bottom: 10px;
}
</style>


