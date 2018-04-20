<template>
	<div class="container">
		<navbar title='讨论' bgcolor='white' co='black' style='border-bottom:1px solid #f5f5f5;'>
			
		</navbar>
		<div style="">
			<div style="font-size:18px;padding: 15px;text-align: center;">
				我并不想写代码,然而并没有卵用
			</div>
			<div  class="ks-ce-dong" style="border:0">
	        	<div >
	        		<img :src="pic" alt="" width="35px" height="35px" style="border-radius:50%;"/>
	        	</div>
	        	<div  style="display: flex;font-size:14px;margin-left: 10px;">
					<div style="" class="ks-lu-p">
						<div>
							初级大师
						</div>
						<div style="color:gray">
							3小时前
						</div>
					</div>
	        	</div>
	        	<div style="text-align: right;flex:1;color:#1E90FF;font-size: 15px;">
	        		<div style="padding: 5px 10px;float: right;">
	        			编辑
	        		</div>
	        		<div style="padding: 5px 10px;float: right;">
	        			删除
	        		</div>
	        	</div>
	    	</div>
	    	<div style="padding: 0 15px;font-size:15px;">
	    		老子今天就是不安逸你，哈哈哈
	    	</div>
			<div style="padding: 15px;">
				<img :src="pic" alt="" width="100%"/>
			</div>
			<div class="ks-c-f" style="padding: 10px 0;">
						<div></div>
						<div style="display: flex;font-size:14px;">
							<div style="display: flex;flex:1;" @click='setPid(it.firstComment.cId,it.firstComment.sender)'>
								<div>
									<img :src="c" alt="" width="18px"/>
								</div>
								<div style="margin-left:10px;">0</div>
							</div>
							<div style="display: flex;flex:1;">
								<div>
									<img :src="zan" alt="" width="18px"  @click=''/>
									<!--<img :src="e" alt="" width="18px" v-if='it.firstComment.isThumb==1' @click='getCom(it.firstComment.cId)'/>-->
								</div>
								<div style="margin-left:15px;">0</div>
							</div>
						</div>
						
					</div>
			<div style="height: 8px;background: #f5f5f5;"></div>
			<div style="padding: 8px 15px;border-bottom: 1px solid #f5f5f5;"  v-for='p in 5'>
			<div class="ks-c-a" >
				<div class="ks-c-b">
					<div class="ks-c-d">
						<img :src="pic" alt="" height="35px" width="35px"/>
					</div>
					<div class="ks-c-e" >大屌萌妹</div>
					<div style="float:right;font-size:15px;">{{p}}楼</div>
				</div>
				<div class="ks-c-c">
					<div style="padding: 8px 0;font-size:14px;">
						哈哈，这尼玛搞笑
					</div>
					
					<div class="ks-c-f">
						<div></div>
						<div style="display: flex;font-size:14px;">
							<div style="display: flex;flex:1;" @click=''>
								<div>
									<img :src="c" alt="" width="18px"/>
								</div>
								<div style="margin-left:10px;">10</div>
							</div>
							<div style="display: flex;flex:1;">
								<div>
									<img :src="zan" alt="" width="18px"  @click=''/>
									<!--<img :src="e" alt="" width="18px" v-if='it.firstComment.isThumb==1' @click='getCom(it.firstComment.cId)'/>-->
								</div>
								<div style="margin-left:15px;">0</div>
							</div>
						</div>
						
					</div>
					<div style="padding: 10px;background: #f5f5f5;font-size:14px;" >
						<div v-for='i in 2' style="padding: 5px 0;" @click=''>
							<span style="color:lightskyblue">阿萨德</span>
							回复 
							<span style="color:lightskyblue">容易</span>
							：456
						</div>
						<div style="padding: 5px 0;">
							<router-link to='/allMore'>更多回复</router-link>
						</div>
					</div>
				</div>
			</div>
		</div>
		</div>
		<div class="shoucang" @click='' style="top:90%">
			<img :src="s1" alt="" width="100%" >
			<!--<img :src="s2" alt="" width="100%" v-show='list.isCollect==1'>-->
		</div>
	</div>
</template>
<script type="text/javascript">
	import navbar from '../../../components/nav';
	export default{
		components:{
			navbar
		},
		data(){
			return{
				pic:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/talk/3.1.png',
				c:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/cesuan/c.png',
				head:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/cesuan/s.png',
				zan:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/cesuan/zan.png',
				s1:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/cesuan/5.png',
				tid:null
			}
		},
		beforeRouteEnter(from,to,next){
			next(vm=>{
				vm.tid=setInterval(function(){
					console.log(0)
				},2000)
			})
		},
		beforeRouteLeave(from,to,next){
			clearInterval(this.tid)
			next();
		}
	}
</script>