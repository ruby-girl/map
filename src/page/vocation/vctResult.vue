<template>
  <div>
    
    <div class="content">
      <div>
        <div class="title">[你的最佳行业]</div>
        <div class="text">{{lists.firstIndustry}}</div>
      </div>
      <div>
        <div class="title">[你的第二职业]</div>
        <div class="text">{{lists.secondIndustry}}</div>
      </div>
      <div>
        <div class="title">[禁忌行业]</div>
        <div class="text">{{lists.badIndustry}}</div>
      </div>
      <div>
        <div class="title">[终身大利方位]</div>
        <div class="text">{{lists.bestPosition}}</div>
      </div>
      <div>
        <div class="title">[终身不利方位]</div>
        <div class="text">{{lists.badPosition}}</div>
      </div>
      <div>
        <div class="title">[方位不利破除法]</div>
        <div class="text">1.可带开光乾坤镜于身，再配符咒一道，可不忌方位。</div>
      </div>
    </div>
  </div>
</template>
<script>
import Tit from '../../components/nav'
import httputil from '../../httputil'
export default {
  name: 'num',
  data() {
    return {
      birthday: '',
      code: '',
      lists: '',
      id: '',
      ty: ''
    }
  },
  created(){
    document.title='行业方位'
  },
  components: {
    Tit
  },
  mounted: function () {
    this.birthday = this.$route.query.birthday;
    this.code = this.$route.query.Code;
    
httputil.doRequest('/Measure/industryAndPosition',{'areaCode':this.code,'measureTime':this.birthday},1,this.onVocSuccess,null,true) 
 },
 methods:{
 	 onVocSuccess(res){
 	 	this.lists=res
 	 }
 }
}

</script>
<style scoped>
.content {
  padding: 15px 10px;
  border-top: 1px solid #f3f3f3;
}

.title {
  color: #e4393c;
  padding-top: 10px;
}

.text {
  font-size: 14px;
  line-height: 25px;
}
</style>