<template>
  <div class="model"> 
   <div class="content">
     <div class="cen">
       <img src="http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/application/6.png" alt="" class="alertImg">
       <div class="alertText">{{alertText}}</div>
       <button class="btn" @click="back()">{{btnText}}</button>
     </div>
   </div>
  </div>
</template>
<script>
export default {
  props: {
			alertText:{
				default:""
			},
			btnText:{
				default:"知道了"
			}
		},
   methods:{
			back(){
      this.$emit('back')
		}
   }
}

</script>
<style scoped>
.model{
  color:#666160;
  position:fixed;
  top:0;
  background: rgba(0, 0, 0, 0.5);
  width:100%;
  height:100%;
}
.content{
  display: flex;
  align-items:center;
  justify-content:center;
   width:100%;
   height:100%;
}
.cen{
  padding: 30px 10px;
  background: #fff;
  width:270px;
  display: flex;
   flex-direction:column;
  align-items:center;
  justify-content:center;
  border-radius: 5px;
}
.alertImg{
  width:65px;
  height:65px;
  margin-bottom: 15px;
}
.alertText{
  padding: 5px 0;
  /*text-indent: 2em;*/
}
.btn{
  border:none;
  background: #1a80fc;
  border-radius: 15px;
  margin-top: 5px;
  color:#fff;
  font-weight: bold;
  font-size: 17px;

}
</style>


