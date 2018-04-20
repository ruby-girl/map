<template>
  <div class="container">
		
    	<load v-show='loads'></load>
    <div v-show='gg' style="padding: 15px;text-align: center;font-size: 15px;">
			加载失败
		</div>
      <div v-show='wen'>
      	<img class="img-responsive" src="http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/dream/zhougong.png" alt="" width="100%">
  	<!--input搜索框-->
    <div class="search-parent" style="font-size: 20px;color:#aaa;padding:5px 15px;">
      <div class="ks-search-div">
      	<input type="text" placeholder="请输入关键词" class="search" v-model='keys'>
      <button @click='search' style="float:right;display: inline-block;background: #E4393C;width: 50px;height: 35px;text-align: center;line-height: 35px;outline: none;border:none">
      		<yd-icon name="search" size='20px' color='#fff'></yd-icon>
      </button>
      </div>
    </div>
	  <div class="dreamLists">
	    <div class="list" v-for="item in dreamList" @click='getDream(item.flag,item.type)'>{{item.type}}</div>
	  </div>
	  <!--大师在线解梦-->
	   <!--<div class="toDaShi">大师在线解梦</div>-->
	   <div style="padding: 15px;" @click="tomasterList">
	   		<btn btnMsg='大师在线解梦'></btn>
	   </div>
      </div>
      <div class="share" @click='toShare()' v-if="sCode==-1">
			<img :src="share" alt="" width="100%"/>
		</div>
    </div>
</template>
<script>
import btn from '../components/button'
import load from '../components/loading'
import httputil from '../httputil';
import share from '../share';
export default {
  name: 'dream',
  data () {
    return {
      
      dreamList:[],
      loads:true,
      gg:false,
      wen:false,
      keys:'',
      sCode:null,
       share:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/cesuan/4.png'
//    dreamList: ['天地日月星辰', '哀乐病死歌唱', '捕标邢罚狱具', '地理山石树木', '文书笔现兵器', '身体面目齿发', '天地日月星辰', '哀乐病死歌唱', '捕标邢罚狱具', '地理山石树木', '文书笔现兵器', '身体面目齿发', '天地日月星辰', '哀乐病死歌唱', '捕标邢罚狱具', '地理山石树木', '文书笔现兵器', '身体面目齿发', '身体面目齿发', '天地日月星辰', '哀乐病死歌唱', '捕标邢罚狱具', '地理山石树木', '文书笔现兵器', '身体面目齿发', '文书笔现兵器', '身体面目齿发']
    }
  },
  methods:{
    	GetRequest() {
			let url = window.location.hash
			var i = url.lastIndexOf("code")
			this.sCode = i
		
		},
  		getDream(a,b){
  			this.$router.push('/infor?id='+a+'&word='+b)
  		},
  		search(){
  			if(this.keys.trim()!=''){
				this.$router.push('/result/'+this.keys)
  			 
  			}else{
  				this.$dialog.toast({
                    mes: '输入搜索的内容！',
                    timeout: 1500,
                   
                });
  			}
  		},
  		onSuccess(res){
  			this.dreamList=res
  			this.loads=false;
  			this.wen=true;
  		},
      tomasterList(){
        this.$router.push('/all')
      },
       oncodeSuccess(res){
             let code=res.object
				 share.toShare('梦境解析','dream?code='+code,'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/static/share/measure_10.png')
			},
			oncodeError(res){
				 this.$dialog.alert({mes:res})
			},
			toShare(){
				 httputil.doRequest('/Common/getShareCode',{'sType':11},1,this.oncodeSuccess,this.oncodeError,true) 
			
		}
  },
  created(){
  	document.title='周公解梦'
    this.GetRequest()
  },
  mounted: function () {
  	 this.$nextTick(()=>{
  	 	httputil.doRequest('/DreamExplaint/getAllType',null,1,this.onSuccess,null,false) 
  	 })
  },
  components: {
    'Search': require('@/components/search.vue'),
    'Tit': require('@/components/nav.vue'),
    btn,load
  }
}

</script>
<style>
.ks-search-div{
  border:1px solid #aaa;
  border-radius: 5px;
	border-right:0;
}
.share{
		width: 45px;
		height: 45px;
		position: fixed;
		top:80%;
		right:15px;
	}
.search{
  width:80%;
  height:35px;
  line-height: 35px;
  outline: none;
  border:none;
  padding: 0 7px;
  font-size: 14px;
  color:#575251;
  padding: 0;
}
::-webkit-input-placeholder { /* WebKit browsers */
color: #CCCDCD;
font-size: 15px;
}
:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
color: red;
font-size: 15px;
}
::-moz-placeholder { /* Mozilla Firefox 19+ */
color: #CCCDCD;
font-size: 15px;
}
:-ms-input-placeholder { /* Internet Explorer 10+ */
color: #CCCDCD;
font-size: 15px;
}
.search-parent{
  position: relative;
}
.ioc{
  position: absolute;
  right:12%;
  top:25%;
}
.dreamLists{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
 margin:10px 0 0 0;
}
.list{
  width:15%;
  font-size: 15px;
  margin-left: 4%;
  margin-bottom: 6%;
  color:#575251;
}
.toDaShi{
  margin-left: 10%;
  width:80%;
  height:35px;
  color:#fff;
  font-size: 17px;
  line-height: 35px;
  border-radius: 4px;
  background-color: #e4393c;
}
</style>
