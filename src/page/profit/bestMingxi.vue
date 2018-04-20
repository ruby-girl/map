<template>
  <div class="full-container">
    
  
    <!--明细显示-->
    <div>
      <div class="bestLi">
        <div style="display:flex;padding:10px 0;">
          <div class="bestAic" :class='{bestAica:showC}'></div>
          <div>{{title}}</div>
        </div>
        <div style="padding-top:12px;">{{total}}元</div>
      </div>
      <!--2017-05-->
      <div style="border-top:4px solid #e9e9e9;;">
        <div v-for="item in list">
          <div class="bestLi">
            <div class="bestLL">
              <div class="bestText">{{item.createTime}}</div>
              <div>{{item.providerName}}</div>
            </div>
            <div class="itemText">{{item.providerPoints/100}}元</div>
          </div>
        </div>
      </div>
      <div style="flex:1;background:#e9e9e9;"></div>
    </div>
    <div style="flex:1;background:#e9e9e9;"></div>
  </div>
</template>
<script>

import httputil from '../../httputil';
import Tit from '../../components/nav'

export default {
  name: '',
  data() {
    return {
      startDate: '',
      endDate: '',
      total: '',
      jsessionid: '',
      list: '',
      title: '',
      showC:false
      
    }
  },
  created() {
    document.title='收入明细'
    let type = this.$route.query.type
    if (type == 2) {
      this.title = '文章打赏'
      this.showC=true
    } else {
      this.title = '悬赏'
    }
    this.total = this.$route.query.value
  },
  mounted: function () {
  	     this.$nextTick(()=>{
  	     	httputil.doRequest('/Master/incomeDetail',{'bussinessType':this.$route.query.type,'startDate':this.$route.query.startDate+' 00:00:00',
  	     	'endDate':this.$route.query.endDate+' 23:59:59'},1,this.onSuccess,this.onError,true)
  	     })
  },
  components: {
    Tit
  },
  methods: {
   onSuccess(res){
   	this.list=res
   },
   onError(res){
      this.$dialog.alert({ mes:res})
   }
  }

}


</script>
<style scoped>
.full-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  color: #666160;
  font-size: 15px;
}

.bestLi {
  display: flex;
  justify-content: space-between;
  padding: 5px 15px;
  border-top: 1px solid #e9e9e9;
}

.itemText {
  margin-top: 6px;
}

.bestAic {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: #F7941C;
  margin: 7px 10px 0 0;
}
.bestAica{
  background-color: #e4393c;
}
.bestLL {
  display: flex;
  height: 30px;
  line-height: 30px;
}

.bestBack {
  background-color: #e9e9e9;
  height: 25px;
  line-height: 25px;
  padding-left: 15px;
}

.bestText {
  padding-right: 10px;
  font-size: 14px;
  color: #aaa;
}
</style>


