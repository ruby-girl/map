<template>
  <div class="full-container container">
   
    <div class="dream_search_y">
      <input type="text" v-model="key">
      <div class="yang_sear" @click="toSearch()">搜索</div>
    </div>
   <div style="display:flex;border:1px solid #eee;" v-show="showList">
     <div style="width:28%;text-align:center;padding-top:70px;">
       <div :class="{lineLeft:true,'redBack':i==ind?true:false}" v-for="(item,i) in Dlist" @click="getList(i)">{{item.type}}</div>
      
     </div>
     <!--右边-->
     <div style="width:70%;overflow-y: scroll;">
        <ul style="height:100%;overflow: auto;">
          <li class="lineRight" v-for="(it,ind) in Xlist" @click="toResult(it.eId)">{{it.dreamContent}}</li>
          
        </ul>
        <div style="color:red;height:100px;line-height:100px;marginBottom:64px;" @click="toMore()">
                         点击加载更多
        </div>
     </div> 
   </div>
   <!--显示搜索-->
   <div v-show="!showList" style="display:flex;">
       <div style="width:100%;height:100%;overflow-y: scroll;" v-show="smallList">
        <ul style="height:100%;overflow: auto;">
          <li class="lineRight" v-for="(it,ind) in searchList" @click="toResult(it.eId)">{{it.dreamContent}}</li>
          
        </ul>
        <div  style="color:red;height:80px;line-height:80px;textAlign:center" @click="toSearchMore()">
                         点击加载更多
        </div>
     </div> 
     <div v-show="!smallList"  style="width:100%;color:red;height:80px;line-height:80px;textAlign:center" @click="toSearchMore()">
                        该分类下未找到包含该此条梦境！
     </div>
   </div>
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
              smallList:true,
              searchPage:1,
              searchList:[],
              showList:true,
               key:'',      
              jsessionid:'',
              share:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/cesuan/4.png',
              showA:true,
              showB:false,
              showC:false,
              showD:false,
              Dlist:[],
              Dtype:'',
              Xlist:[],
              ind:0,
              resultText:'',
              page:1,
              sCode:null
            }
        },
        mounted: function () {
	 this.$nextTick(()=>{
	 	httputil.doRequest('/Common/dreamExplaintSmallType',{'pId':this.$route.query.ind},1,this.onSuccess,null,false)
	 })

  	 },
     watch:{
       key(val){
         console.log(val)
        if(this.key==""){
          this.showList=true
          	httputil.doRequest('/Common/dreamExplaintSmallType',{'pId':this.$route.query.ind},1,this.onSuccess,null,false)
        }
       }
     },
     	created(){		
      document.title='周公解梦'
      this.GetRequest()
		},
        components: {
         Tit
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
           toResult(type){
           	
             this.$router.push('/lineResult?eId='+type)
           },
           onSuccess(res){
           	 this.Dlist=res
           	 this.Dtype=res[0].flag
           	 this.getXlist(this.Dtype,1)
           },
           getXlist(pId,sta){
           	httputil.doRequest('/Common/dreamExplaintContent',{'pId':pId,'sta':1,'key':''},1,this.onListSuccess,null,false)
           },
           onListSuccess(res){
           	 this.Xlist=res.list
           },
           getList(ind){
           	this.ind=ind
           	this.Dtype=this.Dlist[ind].flag
           	httputil.doRequest('/Common/dreamExplaintContent',{'pId':this.Dtype,'sta':1,'key':''},1,this.onListSuccess,null,false)
           },
           toMore(){
             this.page++
            httputil.doRequest('/Common/dreamExplaintContent',{'pId':this.Dtype,'sta':this.page,'key':''},1,this.onMoreSuccess,null,false)
           },
           onMoreSuccess(res){
             if(res.list.length==0){
               this.page--
                 this.$dialog.alert({mes:'没有更多了！'})
             }else{
                 this.Xlist=this.Xlist.concat(res.list)
             }
             
           },
           toSearch(){
            
                 	httputil.doRequest('/Common/dreamExplaintContent',{'pId':this.Dtype,'sta':1,'key':this.key},1,this.onSearchSuccess,null,false)           
           },
           onSearchSuccess(res){
            
              this.searchList=res.list
              this.showList=false
              if(res.list.length<1){
                this.smallList=false
              }
             
           },
           toSearchMore(){
             this.searchPage++
              httputil.doRequest('/Common/dreamExplaintContent',{'pId':this.Dtype,'sta':this.searchPage,'key':this.key},1,this.onMoreSearchSuccess,null,false)
           },
           onMoreSearchSuccess(res){
             if(res.list.length==0){
               this.searchPage--
                 this.$dialog.alert({mes:'没有更多了！'})
             }else{
               this.searchList=this.searchList.concat(res.list)
             }
           },
           oncodeSuccess(res){
             let code=res.object
				 share.toShare('周公解梦','lineList?code='+code+'&ind='+this.$route.query.ind,'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/static/share/measure_10.png')
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
  height:100%;
  
}
.share{
		width: 45px;
		height: 45px;
		position: fixed;
		top:85%;
		right:15px;
	}
.bc_margin{
  height:130px;
  width: 100%;
}
.lineLeft{
  height:70px;
  line-height: 70px;
}
.lineRight{
  height:43px;
  border-bottom:1px solid #e9e9e9;
  border-left:1px solid #e9e9e9;
  line-height: 43px;
  padding-left: 15px;
}
.redBack{
	background: #e4393c;
	color:#fff;
}
.dream_search_y{
  height:45px;
  line-height: 40px;
  display: flex;
  justify-content: center;
  margin: 20px 0;
  align-items: center;
  position:relative;
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
</style>


