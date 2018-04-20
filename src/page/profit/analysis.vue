<template>
  <div class="full-container">
    
    <div class="date">
      <div style="font-size:14px;flex:1">{{startDate}} 至 {{endDate}}</div>
      <div>
      	<img @click='show2=true' src="http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/DSshouyi/5.1.png" alt="" style="display: inline-block;width:18px;height:18px">
      </div>
    </div>
    <div style="box-sizing: border-box;height:250px;" >
      <div id="main" style="width:100%;height:250px;box-sizing: border-box;" >
      </div>
    </div>
    <div style="border-top:5px solid #e9e9e9;">
      <ul>
        <li class="anaLi" @click='toResult(offerReward,3)'>
          <div class="analysisFlex">
            <div class="anaNum"></div>
            <div class="anaLiText">悬赏</div>
          </div>
          <div class="analysisFlex">
            <div class="gitNum">{{offerReward}}元</div>
            <div class="anaGit">></div>
          </div>
        </li> 
        <li class="anaLi" @click='toResult(reward,2)'>
          <div class="analysisFlex">
            <div class="anaNum" style="background:#E0483D;"></div>
            <div class="anaLiText">文章打赏</div>
          </div>
          <div class="analysisFlex">
            <div class="gitNum">{{reward}}元</div>
            <div class="anaGit">></div>
          </div>
        </li>
         <li class="anaLi" @click="toServe(systemTrade)">
          <div class="analysisFlex">
            <div class="anaNum" style="background:#1452E3;"></div>
            <div class="anaLiText">服务账单</div>
          </div>
          <div class="analysisFlex">
            <div class="gitNum">{{systemTrade}}元</div>
            <div class="anaGit">></div>
          </div>
        </li>
        <li class="anaLi">
          <div class="analysisFlex">
            <div class="anaNum" style="background:#20C164;"></div>
            <div class="anaLiText">充值</div>
          </div>
          <div class="analysisFlex">
            <div class="gitNum">{{recharge}}元</div>
          </div>
        </li>
       
      </ul>
    </div>
    <div class="anaFooter"></div>
    <!--弹窗-->
    <yd-popup v-model="show2" position="center" width="80%">
      <calendar @getDate="getDate" @can="cancel"></calendar>
  
    </yd-popup>
  </div>
</template>
<script>
var echarts = require('echarts');
require('echarts/lib/chart/pie')
require('echarts/lib/component/tooltip')
require('echarts/lib/component/legend')
import Tit from '../../components/nav'
import httputil from '../../httputil';
import calendar from '../../components/endCalendar'


export default {
  name: '',
  data() {
    return {
      startDate: '',
      endDate: '',
      charts: '',
      opinion: ['悬赏', '充值', '文章打赏', '系统转账'],
      opinionData: [],
      show2: false,
      offerReward: '',
      recharge: '',
      reward: '',
      systemTrade: '',
      totalNumber: ''
      
    }
  },
  components: {
    Tit, calendar
  },
  created() {  
      document.title='收入分析'
	
    var d = new Date();
    this.endDate = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate();
    this.startDate = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + '1'
  },
  methods: {
    drawPie(id) {
     
    this.charts = echarts.init(document.getElementById(id))
          httputil.doRequest('/Master/incomeReportForm',{'startDate':this.startDate+' 00:00:00','endDate':this.tendDate+' 23:59:59'},1,this.onSuccess,this.onError,true)
    },
    onError(res){
      this.$dialog.alert({
                    mes: res})
    },
    onSuccess(res){
    	
    	this.offerReward = res.offerReward/100
              this.recharge = res.recharge/100
              this.reward = res.reward/100
              this.systemTrade = res.systemTrade/100
              this.totalNumber = res.totalNumber/100
              this.opinionData = [{ value:this.offerReward}, { value: this.recharge }, { value:this.reward}, { value:this.systemTrade}]
              this.charts.setOption({
                tooltip: {
                  show: false,
                  trigger: 'item',
                  formatter: '{a}<br/>{b}:{c} ({d}%)'
                },
                color: ['#F7941C', '#20C164', '#E0483D', '#1452E3'],
                legend: {
                  show: false
                },
                title: {
                  show: true,
                  text: '总收入[元]',
                  subtext: this.totalNumber,
                  x: 'center',
                  y: 'center',
                  textStyle: {
                    color: '#aaa',
                    fontSize: 14,
                    fontWeight: 300
                  },
                  subtextStyle: {
                    color: '#E0483D',
                    fontSize: 22
                  }
                },
                series: [
                  {
                    name: '收入',
                    type: 'pie',
                    radius: ['40%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                      normal: {
                        show: false,
                        position: 'center'
                      },
                      emphasis: {
                        show: false,
                        textStyle: {
                          fontSize: '15',
                          color: '#e9e9e9',
                          fontWeight: 'blod'
                        }
                      }
                    },
                    labelLine: {
                      normal: {
                        show: false
                      }
                    },
                    data: this.opinionData
                  }
                ]
              })
    },
    getDate(a) {
      this.show2 = false
      this.startDate = a.start
      this.endDate = a.end  
      httputil.doRequest('/Master/incomeReportForm',{'startDate':this.startDate+' 00:00:00','endDate':this.tendDate+' 23:59:59'},1,this.onSuccess,this.onError,true)
    },
    cancel() {
      this.show2 = false
    },
    toResult(val,type){
      if(val==0){
        this.$dialog.alert({ mes: '没有可查询信息' })
      }else{
        this.$router.push('/bestMingxi?type='+type+'&startDate='+this.startDate+'&endDate='+this.endDate+'&value='+val)
      }
    },
    toServe(r){
      if(r==0){
        this.$dialog.alert({ mes: '没有可查询信息' })
      }else{
        this.$router.push('/profitServe?&startDate='+this.startDate+'&endDate='+this.endDate+'&value='+r)
      }
    }
  },
  //调用
  mounted() {
    this.$nextTick(function () {
      this.drawPie('main')
    })
  }
}

</script>
<style scoped>
.full-container {
  height: 100%;
  color: #666160;
}
.date {
  /*box-sizing: border-box;*/
  display: flex;
  background-color: #e9e9e9;
  justify-content: space-between;
  padding:8px 15px;
}

.anaLi {
  display: flex;
  border-bottom: 1px solid #e9e9e9;
  justify-content: space-between;
  padding: 12px 15px;
  position: relative;
  align-items: center;
}
.analysisFlex{
	display: flex;
	align-items: center;
}
.anaNum {
  margin: 0 15px 0 0;
  width: 5px;
  height: 5px;
  background-color: #F7941C;
  border-radius: 50%;
}
.gitNum {
  margin-right: 30px;
  padding-top: 2px;
}
.anaFooter {
  flex: 1;
  background: #e9e9e9;
}
.anaGit{
  position: absolute;
  right:15px;
  top:8px;
  font-size:20px;
  color:#e9e9e9;
}
</style>


