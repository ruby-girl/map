<template>
	<div class="container">
		
		<div style="padding:0px;">
	        <div class="ks-ce-dong">
	        	<div class="ks-ce-head">
	        		<img :src="pic" alt="" width="100%" height="65px"/>
	        	</div>
	        	<div class="ks-ce-tou" >
					<div style="height: 30px;line-height: 30px;" class="ks-lu-p">
						道法神宗
					</div>
					<div>
						咨询项目：解梦
					</div>
	        	</div>
	        </div>
	    </div>
	    <div style="padding: 15px;">
	    	<textarea name="" rows="8" cols="" style="width: 100%;padding: 8px;border:none;" 
	    		placeholder="大师咨询还满意吗？说说你的体验，对其他伙伴帮助很大哟"></textarea>
	    	<img :src="ca" alt="" />
	    	
	    </div>
	    <div style="padding: 15px;display: flex;border-top:1px solid #f5f5f5;border-bottom:1px solid #f5f5f5;">
	    	<div class="ks-d-c" @click='sele(1)'>
	    		<div>
	    			<img :src="se==1?gs:gw" alt="" width="25px"/>
	    		</div>
	    		<div style="margin-left:15px;font-size:15px;">好评</div>
	    	</div>
	    	<div class="ks-d-c" @click='sele(2)'>
	    		<div>
	    			<img :src="se==2?ms:mw" alt="" width="25px"/>
	    		</div>
	    		<div style="margin-left:15px;font-size:15px;">中评</div>
	    	</div>
	    	<div class="ks-d-c" @click='sele(3)'>
	    		<div>
	    			<img :src="se==3?bs:bw" alt="" width="25px"/>
	    		</div>
	    		<div style="margin-left:15px;font-size:15px;">差评</div>
	    	</div>
	    </div>
	    <yd-cell-group>
	        <yd-cell-item>
	            <yd-rate slot="left" v-model="rate"></yd-rate>
	            <span slot="right">整体评分：{{rate}}</span>
	        </yd-cell-item>
	    </yd-cell-group>
	    <div style="padding: 15px;position:absolute;bottom:0;width:100%;">
	    	<btn btnMsg='提交评论'></btn>
	    </div>
	</div>
</template>
<script>
	import Navs from '../../components/nav';
	import btn from '../../components/button';
	import httputil from '../../httputil';
	export default{
		components:{
			Navs,btn
		},
		created(){
			document.title='订单评论'
		},
		methods:{
			sele(a){
				this.se=a;
			}
		},
		data(){
			return{
				se:1,
				rate:0,
				pic:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/cesuan/13.png',
				ca:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/cesuan/ca.png',
				bw:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/cesuan/bw.png',
				bs:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/cesuan/bs.png',
				mw:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/cesuan/mw.png',
				ms:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/cesuan/ms.png',
				gw:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/cesuan/gw.png',
				gs:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/cesuan/gs.png',
			}
		}
	}
</script>
<style>
	.ks-d-c{
		flex:1;
		display: flex;
		line-height: 25px;
	}
</style>