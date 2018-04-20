<template>
	<div class="container" style="color:#666;">
   <div class="questionTit">
     <div class="questionBOx">
       <div :class="{'colorLV':p==1}">填写资料</div>
       <div :class="{'questionA':true,'bcLV':p==1}">1</div>
       <div class="questionheng"></div>
     </div>
     <div class="questionBOx">
       <div :class="{'colorLV':p==2}">编辑问题</div>
       <div :class="{'questionA':true,'bcLV':p==2}">2</div>
       <div class="questionheng"></div>
     </div>
     <div class="questionBOx">
       <div :class="{'colorLV':p==3}">发表成功</div>
       <div :class="{'questionA':true,'bcLV':p==3}">3</div>
     </div>
   </div>
   <div v-show="p==1">
       <page1 :a="t" @toPage2="toPage2"></page1>
   </div>
		<div v-show="p==2">
      <page2 :name='arr[0]' :sex='arr[1]' :birth='arr[2]' :areaCode='arr[3]' :a='t'  @toPage3="toPage3"></page2>
    </div>
    
	</div>
</template>
<script type="text/javascript">
import page1 from './index'
import page2 from './question'
export default {
	
	data() {
		return {
		 p:1,
     arr:[],
     t:null
		}
	},
  components:{
    page1,page2
  },
	created() {
		document.title = '填写资料'   
   if(this.$route.query.questionId){
     this.t=this.$route.query.questionId  
   }
	},
	methods: {
	 toPage2(m){
    this.arr=m
     this.p=2
   },
   toPage3(){
    this.p=3
      
   }
	}
}
</script>
<style>
.questionTit{
  display: flex;
  align-items: center;
  height:80px;
  font-size: 16px;
  border-bottom: 6px solid #eee;
}
.questionBOx{
  width:33%;
  text-align:center;
  position: relative;
}
.questionA{
  width:25px;
  height:25px;
  margin:0 auto;
  border-radius: 50%;
  line-height: 25px;
  background:#aaa;
  color:#fff;
  font-weight: bold;
  margin-top:10px;
}
.questionheng{
  width:70%;
  position: absolute;
  border-top:2px solid #eee;
  left:65%;
  top:72%;
}
.bcLV{
  background: rgb(50,205,50);
}
.colorLV{
  color: rgb(50,205,50);
}
</style>