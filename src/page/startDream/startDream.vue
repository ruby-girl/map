<template>
  <div class="full-container container">
   
    <div class="bigBox">
      <div style="height:230px;padding-top:100px;"><img src="http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/dream/dream_2/11.png" alt="" style="width:100px;"></div>
      <div class="dreamBox">
        <div class="mBox"></div>
        <div><img src="http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/dream/dream_2/12.png" alt="" style="width:80px;margin:0 10px;"></div>
        <div class="mBox"></div>
      </div>
      <div class="dreamBox" style="margin-top:50px;">
        <router-link to="/lineDream" class="twoBox" style="background:#1452E3;">网络在线版</router-link>
        <div style="width:20px;"></div>
        <div @click="toDream()">
        	<div class="twoBox" style="background:#e4393c;">专业解梦版</div>
        </div>
        
      </div>
    </div>
    <!--<div class="share" @click='toShare()'>
			<img :src="share" alt="" width="100%"/>
		</div>-->
  </div>
</template>
<script>
import Tit from '../../components/nav'


export default {
        name: '',
        data () {
            return {
              // share:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/cesuan/4.png'
            }
        },
        created(){
         document.title="周公解梦"
        },
        components: {
         Tit
          },
        methods:{
      //      toShare(){
			// share.toShare('周公解梦','/startDream')
		// },
    toDream(){
       this.$dialog.confirm({
                    
                    mes: '专业版内容简短、清晰、准确度很高，是否要查询？',
                    opts: () => {
                       this.$router.push('/dream')
                    }
                });
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
		top:90%;
		right:15px;
	}
.bigBox{
  display: flex;
  flex-direction:column;
  justify-content: center;
  align-items: center;
}
.dreamBox{
  display: flex;
  justify-content: center;
  align-items: center;
}
.mBox{
  border:1px solid #aaa;
  width: 40px;
}
.twoBox{
  padding: 8px 10px;
  font-size: 14px;
  border-radius: 4px;
  color:#fff;
}
</style>


