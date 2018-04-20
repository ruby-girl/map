<template>
	<div class="container" id="oDiv">
		<span class="dian" style="top:10%; left:20%;"></span>
		<span class="dian" style="top:50%; left:70%;"></span>
		<span class="dian" style="top:30%; left:30%;"></span>
		<span class="dian" style="top:23%; left:20%;"></span>
		<span class="dian" style="top:40%; left:90%;"></span>
		<span class="dian" style="top:80%; left:86%;"></span>
		<span class="dian" style="top:66%; left:77%;"></span>
		<span class="dian" style="top:44%; left:13%;"></span>
		<span class="dian" style="top:75%; left:33%;"></span>
		<span class="dian" style="top:90%; left:10%;"></span>
		<div class="top-jt" @click="toZpage()" v-if="page!=0"><img width="100%" src="http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/testResult/xiangshanganniu.png" alt=""></div>
		<div v-for="(item,i) in obj">
       <transition name="slide-fade"  mode="out-in">
         <div v-if="page==i" class="container"  >
			<img :src="item.path" alt="" class="starImg">
		 <div class="starFlex">
         <div style="color:#f08519;font-size:20px;">	{{item.star}} </div>
			 <div style="color:#a1a1a1">{{item.fortune}}</div>
		 </div>
			
		  <div style="padding:0 15px;line-height:18px;">	{{item.explaint}}</div>
		</div>
		 </transition>
		 <div v-if="page!=pageLength-1"  class="bottom-jt" @click="toJpage()"><img width="100%" src="http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/testResult/xiangxiaanniu.png" alt=""></div>
		</div>	
	</div>
</template>
<script type="text/javascript">
import navbar from '../components/nav';
import httputil from '../httputil'
export default {
	components: {
		navbar
	},
	data() {
		return {
			jse: '',
			obj: [],
			page: 0,
			pageLength:null
		}
	},
	created() {
		document.title = '星宿解释'	

	},
	mounted: function() {
		this.$nextTick(() => {
			httputil.doRequest('/Common/starExplaint', { 'stars': this.$route.query.stars }, 1, this.onSuccess, this.onError, true)
		})
	},
	methods: {
		onSuccess(res) {
			this.obj = res
			this.pageLength=this.obj.length
		},
		onError(res){
			this.$dialog.alert({mes:res})
		},
		toJpage() {
			this.page++
			if(this.page==this.pageLength){

			}
		},
		toZpage() {
			this.page--
		}	
	}
}
</script>
<style>
.bottom-jt {
	position: absolute;
	bottom: 5px;
	left: 47%;
	width: 20px;
}

.top-jt {
	position: absolute;
	top: 5px;
	left: 47%;
	z-index: 1000;
	width: 20px;
}
.dian{
	position: absolute;
	display: block;
	width:4px;
	height:4px;
	background: #fff;
	border-radius: 50%;
	z-index: 100000;
}
.starImg{
	width:56%;
margin:10%  22% 5% 22%;
}
#oDiv{
	color:#fff;
	background:-webkit-gradient(linear, 0 0, 0 bottom, from(#453f41), to(#271e29)); 
}
.starFlex{
text-align: center;
margin-bottom: 15px;
}
</style>