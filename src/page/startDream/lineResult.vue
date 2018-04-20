<template>
  <div class="full-container container">
   
     <div v-html="text" class="container" style="fontSize:15px;padding: 15px;" id="myDream"></div>
     <div class="share" @click='toShare()' v-if="sCode==-1">
			<img :src="share" alt="" width="100%"/>
		</div>
  </div>
</template>
<script>
import Tit from '../../components/nav'
import httputil from '../../httputil';
import share from '../../share';
export default {
        name: '',
        data () {
            return {
                  text:null,
                  share:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/cesuan/4.png',
                  sCode:null
            }
        },
        created(){   
         
      document.title='梦境解析'
		 
        },
        mounted: function () {   
httputil.doRequest('/Common/dreamExplaintGet',{'eId':this.$route.query.eId},1,this.onSuccess,null,false) 
this.GetRequest()
        },
        components: {
         Tit
          },
        methods:{
          	GetRequest() {
			let url = window.location.hash
			var i = url.lastIndexOf("code")
			this.sCode = i
		
		},
           onSuccess(res){
             this.text=res
           },
           oncodeSuccess(res){
             let code=res.object
				 share.toShare('梦境解析','lineResult?code='+code+'&eId='+this.$route.query.eId,'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/static/share/measure_10.png')
			},
			oncodeError(res){
				 this.$dialog.alert({mes:res})
			},
			toShare(){
				 httputil.doRequest('/Common/getShareCode',{'sType':11},1,this.oncodeSuccess,this.oncodeError,true) 
			
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
.share{
		width: 45px;
		height: 45px;
		position: fixed;
		top:85%;
		right:15px;
	}
.arc{
  display: inline-block;
  width: 5px;
  height:5px;
  background: #e4393c;
  border-radius: 50%;
  margin-right: 10px;
  margin-bottom: 2px;
}
.resultUl{
  padding: 20px 15px;
  border:1px solid #aaa;
  font-size: 14px;
}
.resultLi{
  height:30px;
  line-height: 30px;
  font-size: 15px;
}
.lineTitle{
  height:80px;
  line-height: 80px;
  text-align: center;
  font-size: 18px;
  color:#e4393c;
}

</style>


