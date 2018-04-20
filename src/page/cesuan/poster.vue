<template>
	<div class="container">
      <div style="width:100%;min-height:600px;">
         <img width="100%" height="100%" :src="img_li" alt="">
			</div>
        
        <div style="padding:20px 15px;" @click="toAll()">
          <btn btnMsg='立即测算'></btn>
        </div>
   
	</div>
</template>
<script>
	import btn from '../../components/button';
	export default{
		components:{
		btn
		},
		data(){
			return{
			  img_li:null,
        imgs:['http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/cesuan/poster/1.png','http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/cesuan/poster/2.png','http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/cesuan/poster/3.png','http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/cesuan/poster/4.png','http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/cesuan/poster/5.png','http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/cesuan/poster/6.png','http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/cesuan/poster/7.png','http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/cesuan/poster/8.png','http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/cesuan/poster/15.png']
			}
		},
		created(){
			document.title='服务介绍'
      
		},
			mounted: function () {
  	     this.$nextTick(()=>{
  	       let a=this.$route.query.ind
      this.img_li=this.imgs[a]
  	     })
  	   },
		methods:{
	    toAll(){
        this.$router.go(-1)
      }
		},
		watch:{
		
		}
	}
</script>
<style type="text/css" scoped>
.container{
	width:100%;
	height:100%;
	/*position:absolute;*/
	overflow-y: auto;
	overflow-x:hidden;
	-webkit-overflow-scrolling: touch;
	/*top:0;*/
}
</style>