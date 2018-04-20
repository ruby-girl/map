<template>
  <div class="full-container container">
    <div class="dream_search_y" style="position: relative;">
      <input type="text" v-model="key">
      <div class="yang_sear" @click="toSearch()">搜索</div>
    </div>
    <div v-show="!showList" style="display:flex;">
       <div style="width:100%;height:100%;overflow-y: scroll;" v-show="smallList">
        <ul style="height:100%;overflow: auto;">
          <li class="lineRight" v-for="(it,ind) in searchList" @click="toResult(it.eId)">{{it.dreamContent}}</li>
          
        </ul>
        <div style="color:red;height:100px;width:100%;line-height:100px;textAlign:center" @click="toSearchMore()">
                         点击加载更多
        </div>
     </div> 
      <div v-show="!smallList" style="color:red;height:100px;width:100%;line-height:100px;textAlign:center" @click="toSearchMore()">
                         没有搜索到该梦境！
        </div>
   </div>
    <div  class="line" v-show="showList">
      <div v-for="(item,index) in list" class="lineBox" @click="toLi(index)">
       <div><img :src="item.imgUrl" alt="" style="width:30px;"></div>
       <div style="margin-top:5px;">{{item.text}}</div>
      </div>
    </div>
    <div style="padding:0 15px;" @click="tomasterList()" v-show="showList">
       <Btn btnMsg='大师在线解梦' ></Btn>
    </div>
     <div class="share" @click='toShare()' v-if="sCode==-1">
			<img :src="share" alt="" width="100%"/>
		</div>
  </div>
</template>
<script>
import Tit from '../../components/nav'
import Btn from '../../components/button'
import share from '../../share';
import httputil from '../../httputil';

export default {
        name: '',
        data () {
            return { 
              smallList:true,
              searchList:[],
              searchPage:1,
              share:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/cesuan/4.png',
                key:'',
                sCode:null,
                showList:true,
              list:[{'imgUrl':'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/dream/dream_2/1.png','text':'动物'},
               {'imgUrl':'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/dream/dream_2/3.png','text':'鬼神'},
                {'imgUrl':'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/dream/dream_2/9.png','text':'活动'},
                {'imgUrl':'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/dream/dream_2/6.png','text':'建筑'},{'imgUrl':'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/dream/dream_2/2.png','text':'人物'},
             {'imgUrl':'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/dream/dream_2/4.png','text':'生活'},
              {'imgUrl':'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/dream/dream_2/5.png','text':'物品'},
              {'imgUrl':'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/dream/dream_2/7.png','text':'植物'},{'imgUrl':'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/dream/dream_2/8.png','text':'自然'},
             {'imgUrl':'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/dream/dream_2/10.png','text':'其他'}]
            }
        },
        created(){
        			
      document.title='周公解梦'
		  this.GetRequest()
        },
        watch:{
          key(val){
             if(this.key==""){
               this.showList=true
             }
          }
        },
        components: {
         Tit,Btn
          },
        methods:{
          	GetRequest() {
			let url = window.location.hash
			var i = url.lastIndexOf("code")
			this.sCode = i
		
		},
           toLi(ind){
             this.$router.push('/lineList?ind='+(ind+1))
           },
           tomasterList(){
             this.$router.push('/all')
           },
           toResult(type){
           	
             this.$router.push('/lineResult?eId='+type)
           },
           toSearch(){
             if(this.key){
                 httputil.doRequest('/Common/dreamExplaintContentByKey',{'sta':1,'key':this.key},1,this.onSearchSuccess,null,false)
             }else{
                this.showList=true
             }
             	
           },
           onSearchSuccess(res){
             this.searchPage++
              this.searchList=res.list
              this.showList=false
              if(this.searchList.length==0){
                this.smallList=false
              }else{
                this.smallList=true
              }
           },
           toSearchMore(){
              httputil.doRequest('/Common/dreamExplaintContentByKey',{'sta':this.searchPage,'key':this.key},1,this.onMoreSearchSuccess,null,false)
           },
           onMoreSearchSuccess(res){
             if(res.list.length==0){
               
               
                 this.$dialog.alert({mes:'没有更多了！'})
             }else{
               this.searchList=this.searchList.concat(res.list)
             }
           },
           	oncodeSuccess(res){
             let code=res.object
				 share.toShare('周公解梦','lineDream?code='+code,'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/static/share/measure_10.png')
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
  /*display: flex;
  flex-direction:column;*/
  /*height: 100%;*/
}
.lineBox{
  width: 25%;
  display: flex;
  flex-direction:column;
  align-items: center; 
  margin-bottom: 25px;
}
.share{
		width: 45px;
		height: 45px;
		position: fixed;
		top:85%;
		right:15px;
	}
.line{
  padding:20px 15px 0 0;
  display: flex;
  flex-wrap:wrap; 
  align-items: center; 
  margin-bottom: 50px;
}
.dream_search_y{
  height:45px;
  line-height: 40px;
  display: flex;
  justify-content: center;
  margin: 20px 0;
  align-items: center;
  
}
.dream_search_y input{
  height:40px;
  border:none;
  width: 70%;
  -webkit-appearance:none;
  border:1px solid #ccc;
  
  padding-left: 5px;
}
.yang_sear{
  padding:0 15px;
  background: #e4393c;
  height:40px;
  color:#fff;
}
.lineRight{
  height:43px;
  border-bottom:1px solid #e9e9e9;
  border-left:1px solid #e9e9e9;
  line-height: 43px;
  padding-left: 15px;
}
</style>


