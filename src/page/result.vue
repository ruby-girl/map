<template>
  <div>
   
    <h4 style="text-align: center;">梦见:&nbsp;&nbsp;{{text}}</h4>
    <ul>
      <li class="list" v-for="item in lists">
      	<div>
      		{{item.outline}}
      	</div>
      	<div>
      		{{item.explain}}
      	</div>

      </li>
			<li class="list" v-for="item in lists">
      	<div>
      		{{item.extendExplain}}
      	</div>

      </li>
    </ul>
   	<gods v-show='show'></gods>
	 <div class="share" @click='toShare()' v-if="sCode==-1">
			<img :src="share" alt="" width="100%"/>
		</div>
  </div>
  
</template>
<script>
	import httputil from '../httputil';
	import share from '../share';
	import gods from '../components/gods'
	export default {
		name: 'dream',
		data() {
			return {
				text: '',
				
				lists: [],
				show: false,
				 share:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/cesuan/4.png',
				 sCode:null
			}
		},
		created() {
		    document.title='梦境解析'
							this.text=this.$route.params.id
				     	httputil.doRequest('/DreamExplaint/dreamExplaintByKey',{'key':this.$route.params.id},1,this.onSuccess,this.onError,false) 
		},
		components: {
			'Tit': require('@/components/nav.vue'),
			gods
		},
		methods: {
				GetRequest() {
			let url = window.location.hash
			var i = url.lastIndexOf("code")
			this.sCode = i
		
		},
			onSuccess(res) {
				this.lists = res
			},
			onError(res) {
				this.show = true
			},
			 oncodeSuccess(res){
             let code=res.object
				 share.toShare('梦境解析','result?code='+code+'&id='+this.$route.params.id,'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/static/share/measure_11.png')
			},
			oncodeError(res){
				 this.$dialog.alert({mes:res})
			},
			toShare(){
				 httputil.doRequest('/Common/getShareCode',{'sType':12},1,this.oncodeSuccess,this.oncodeError,true) 
			
		}
		}
	}
</script>
<style scoped lang="css">
	.list {
		text-align: left;
		width: 80%;
		padding-left: 10%;
		position: relative;
		margin-top: 10px;
	}
	
	li.list::before {
		content: "";
		display: inline-block;
		width: 4px;
		height: 4px;
		border-radius: 2px;
		background: red;
		margin-right: 5px;
		position: absolute;
		top: 40%;
		left: 8%;
	}
	
	.ioc {
		width: 20px;
		height: 20px;
		border-color: red;
	}
	
	h4 {
		font-size: 20px;
		padding: 35px 0 5px 0;
		color: #e4393c;
	}
</style>