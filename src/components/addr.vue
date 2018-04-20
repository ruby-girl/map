<template>
    <div class="full-container" >
       <div class="addr">
          <div>地区选择</div>
          <div style="width:50px;text-align: right;" @click='cancel'>×</div>
        </div>
        <div class="addr-input">
          <div class="sanjiao-parent">
            <select name="" id="" v-model="picked">
              <option :value="item.code"  v-for="item in pro">{{item.name}}</option>
            </select>
            <div class="sanjiao"></div>
          </div>
          <div class="sanjiao-parent"> 
            <select name="" id="" v-model="areas" >
              <option :value="item.code"  v-for="item in city">{{item.name}}</option>
            </select>
            <div class="sanjiao"></div>
          </div>
          <div class="sanjiao-parent">
            <select name="" id="" v-model="xian">
              <option :value="item.name+'('+item.code+')'"  v-for="item in list">{{item.name}}</option>
            </select>
            <div class="sanjiao"></div>
          </div>
        </div>
        <div style="text-align:right;">
          <button class="addr-btn" @click='cancel'>取消</button>
          <button class="addr-btn" style="background-color:#e4393c;border:1px solid #e4393c;color:white" @click='getVal()'>确定</button>
        </div>
  </div>
</template>
<script>
  import prox from '../router/proxy'
  export default {
  name: 'MY',
  data () {
    return {
      addr:true,
      s:'00',
      f:'00',
      m:'00',
      picked:'110000',
      pro:'',
      place:'',
      city:'',
      list:'',
      code:'',
      xian:'北京(110000)',
      areas:'110000',
      abc:true
    }
  },
  	created(){
			this.$http.get(prox.prox+'/Common/areaList?provinceCode=0&cityCode=0&areaCode=0').then(data=>{
				this.pro=data.body.content
			})
			this.$http.get(prox.prox+'/Common/areaList?provinceCode=110000&cityCode=0&areaCode=0').then(data=>{
				this.city=data.body.content
       
			})
			this.$http.get(prox.prox+'/Common/areaList?provinceCode=110000&cityCode=110000&areaCode=0').then(data=>{
				this.list=data.body.content
			})
		
		},
		watch:{
			picked(val,old){
					this.$http.get(prox.prox+'/Common/areaList?provinceCode='+val+'&cityCode=0&areaCode=0').then(data=>{
					this.city=data.body.content;
					this.areas=this.city[0].code
          
				})
					this.$http.get(prox.prox+'Common/areaList?provinceCode='+this.picked+'&cityCode='+val+'&areaCode=0').then(data=>{
					
					this.list=data.body.content
				})
			},
			areas(val){
				
				this.$http.get(prox.prox+'/Common/areaList?provinceCode='+this.picked+'&cityCode='+val+'&areaCode=0').then(data=>{
					this.list=data.body.content;
					this.xian=this.list[0].name+'('+this.list[0].code+')'
				})
			}		
},
		methods:{
	      getVal(){	       
	        this.$emit('getVal',this.xian);
	      },
	      cancel(){
	       
	        this.$emit('cancel');
	      }
}
}
</script>
<style scoped>
.addr{
  display: flex;
  justify-content:space-between;
  line-height: 30px;
  font-size: 17px;
}

.full-container{
 padding:15px;
 border-radius: 5px;
 font-size:15px;
}
.addr-input{
  display: flex;
  justify-content:space-between;
  border-top:1px solid #F3F2F2;
  border-bottom:1px solid #F3F2F2;
  height:60px;
}
.addr-input>.sanjiao-parent>select{
  width:72px;
  height:25px;
  font-size: 14px;
  border-radius: 3px;
  margin-top: 17px;
  display: flex;
  padding: 3px 5px;
}
.sanjiao-parent{
  position: relative;
}
.sanjiao{
  width:0; 
  height:0; 
  border:5px solid; 
  border-color:#aaa #ffffff #ffffff #ffffff;
  position: absolute;
  top:49%;
  right:5px;
}
.addr-btn{
  padding: 5px 10px;
  border:1px solid #aaa;
  border-radius: 3px;
  margin-top: 18px;
}
</style>

