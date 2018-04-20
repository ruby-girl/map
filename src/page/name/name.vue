<template>
  <div style="padding-bottom:20px;" class="container">
    <!--姓名测算红底-->

    <div style="height:230px;padding:15px;background:#e4393c;">

      <div style="display:flex; color:#fff;">
        <!--圆-->
        <div class="arc" style="flex-shrink:0;">
          <div class="score" style="display:flex;position:relative;">
            <div style="font-size:40px;">{{lists.measureNameTotal.total}}</div>
            <!--<div style="font-size:15px;width:15px;height:15px;"></div>-->
            <div class="min" style="font-size:15px;"> </div>
          </div>
          <div style="font-size:8px;">[总分100分]</div>
        </div>
        <!--姓名显示-->
        <div style="display:flex;margin-top:50px; height:150px;line-height:30px;flex-shrink:1">
          <!--姓名-->
          <div v-if="viewName.length==3">
            <div class="View_name_three">{{viewName[0]}}</div>
            <div class="View_name_three">{{viewName[1]}}</div>
            <div class="View_name_three">{{viewName[2]}}</div>
          </div>
          <div v-if="viewName.length==2">
            <div class="View_name_two">{{viewName[0]}}</div>
            <div class="View_name_two" style="marginTop:45px;">{{viewName[1]}}</div>
          </div>
          <div v-if="viewName.length==4" style="marginTop:-6px;">
            <div class="View_name_four">{{viewName[0]}}</div>
            <div class="View_name_four">{{viewName[1]}}</div>
            <div class="View_name_four">{{viewName[2]}}</div>
            <div class="View_name_four">{{viewName[3]}}</div>
          </div>
          <!--姓名-->
          <div class="name_num">
            <div>{{lists.measureNameTotal.sJBH1
              <10? '&nbsp;'+lists.measureNameTotal.sJBH1:lists.measureNameTotal.sJBH1
}}</div>
                <div>{{lists.measureNameTotal.sJBH2
                  <10? '&nbsp;'+lists.measureNameTotal.sJBH2:lists.measureNameTotal.sJBH2}}</div>
                    <div>{{lists.measureNameTotal.sJBH3
                      <10? '&nbsp;'+lists.measureNameTotal.sJBH3:lists.measureNameTotal.sJBH3}}</div>
                        <div>{{lists.measureNameTotal.sJBH4
                          <10? '&nbsp;'+lists.measureNameTotal.sJBH4:lists.measureNameTotal.sJBH4}}</div>
                        </div>
                        <div style="position:relative;">
                          <!--三个箭头-->
                          <div id="triangle-facing-right1"></div>
                          <div id="triangle-facing-right2"></div>
                          <div id="triangle-facing-right3"></div>
                        </div>
                        <div class="centerJi" style="line-height: 35px;">
                          {{lists.measureNameTotal.tiger
                          <10? '&nbsp;&nbsp;'+lists.measureNameTotal.tiger:lists.measureNameTotal.tiger}} 天格（{{lists.measureNameTotal.tigerFortune}}）<br>
                            {{lists.measureNameTotal.riger
                            <10? '&nbsp;&nbsp;'+lists.measureNameTotal.riger:lists.measureNameTotal.riger}}人格 （{{lists.measureNameTotal.rigerFortune}}）<br>
                              {{lists.measureNameTotal.diger
                              <10? '&nbsp;&nbsp;'+lists.measureNameTotal.diger:lists.measureNameTotal.diger}}地格 （{{lists.measureNameTotal.digerFortune}}） </div>
                        </div>
                    </div>
                </div>
                <!--三才配置-->
                <div style="margin:20px 10px 10px;border:2px solid #F2F2F2;">
                  <div class="sanCai">
                    <div style="flex-grow:1;color:#e4393c;textAlign:left;paddingLeft:5px;">
                      三才配置
                    </div>
                    <div style="flex-grow:1;border-left:2px solid #F2F2F2;border-right:1px solid #F2F2F2;">
                      {{lists.measureNameSC.fiveElements}}
                    </div>
                    <div style="flex-grow:1">{{lists.measureNameSC.fortune}}</div>
                  </div>
                  <div class="cText">{{lists.measureNameSC.explaint}}</div>
                </div>
                <!--笔数解析-->
                <div class="stroke">
                  <div class="strokeList">
                    <div class="strokeTit">总格</div>
                    <div class="strokeText" style="line-height:26px;padding-top:1px;">{{lists.measureNameLattice.total}}画&nbsp;&nbsp;{{lists.measureNameLattice.lattice}}</div>
                  </div>
                  <div class="strokeList">
                    <div class="strokeTit">基业</div>
                    <div class="strokeText">{{lists.measureNameLattice.inheritance}}</div>
                  </div>
                  <div class="strokeList">
                    <div class="strokeTit">家庭</div>
                    <div class="strokeText" style="line-height:26px;padding-top:1px;">{{lists.measureNameLattice.family}}</div>
                  </div>
                  <div class="strokeList">
                    <div class="strokeTit">健康</div>
                    <div class="strokeText">{{lists.measureNameLattice.healthy}}</div>
                  </div>
                  <div class="strokeList">
                    <div class="strokeTit">含义</div>
                    <div class="strokeText">{{lists.measureNameLattice.latticeExplaint}}</div>
                  </div>
                </div>
                <!--姓名字意-->
                <div class="YY">
                  <div style="fontSize:14px;">
                    <div style="color:#e4393c;font-size:20px;">姓名字意</div>
                    <div class="YY-jiexi">
                      <div style="color:#e4393c;">{{num[0].charcter}}：</div>
                      <div> {{num[0].explaint}}</div>
                    </div>
                    <div class="YY-jiexi">
                      <div style="color:#e4393c;">{{num[1].charcter}}：</div>
                      <div>{{num[1].explaint}}</div>
                    </div>
                    <div class="YY-jiexi" v-if="num.length>3||num.length==3">
                      <div style="color:#e4393c;">{{num[2].charcter}}：</div>
                      <div>{{num[2].explaint}}</div>
                    </div>
                    <div class="YY-jiexi" v-if="num.length==4">
                      <div style="color:#e4393c;">{{num[3].charcter}}：</div>
                      <div>{{num[3].explaint}}</div>
                    </div>
                  </div>
                </div>
                <div class="back-hui">
                  <div class="shu"></div>
                  <div>以上姓名评分未根据字意打分，每个字都能增加或减少2.5分，请用户自行根据字意评分。
                  </div>
                </div>
                <div class="nameJ">在民间很多女性姓名中，只要带有“春”（三、人、日）、“燕”、“艳”、“梅”等字，可以肯定的说，90%-99%的女性婚姻不美满幸福，若你身边有此类已婚3年的女性朋友，你可以见证以下。</div>
                <div class="nameJ">姓名的好坏，对于未满18岁的人来说，是至关重要的，影响着你的人生、学业、性格、健康等，而对于18岁后影响较大的是婚姻问题，事业影响较小，所以，女性应该特别注意自己的名字是否吉祥，男性18岁以前较为重要。</div>
                <div class="ks-cai-input" @click="tomasterList()">
  
                  <btn btnMsg="大师在线取名"></btn>
                </div>
               
               <div class="share" @click='toShare()' v-if="sCode==-1">              
			   <img :src="share" alt="" width="100%"/>
    </div>
</div>        
</template>
<script>
import btn from '../../components/button'
import httputil from '../../httputil';
import navbar from '../../components/nav';
import share from '../../share';
export default {
  name: 'num',
  data() {
    return {
      sex: 0,
      viewName: '',
      lists: '',
      id: '',
      ty: '',
      num: [],
      share: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/cesuan/4.png',
      sCode:null
    }
  },
  components: {
    btn, navbar
  },
  created: function() {

    document.title = '姓名测算'

    this.sex = this.$route.query.sex;
    this.name = this.$route.query.name;
    this.viewName = this.name
    httputil.doRequest('/Measure/nameMeasure', { 'sex': this.sex, 'name': this.name }, 1, this.onNameSuccess, this.onNameError, false)
    this.GetRequest()

  },
  methods: {
     GetRequest() {  
     let url=window.location.hash
		 let subStrs=url.split("?")	
		 this.send=subStrs[1]	
		 let li=this.send.split('&')	 
		var i=li[0].lastIndexOf("code")
	   this.sCode=i
	 },
    onNameSuccess(res) {
      console.log(res)
      if (res.javaCode == 500) {
        this.$dialog.alert({
          mes: res.message,
          callback: () => {
            this.$router.go(-1)
          }
        });
        return
      }
      this.lists = res
      this.num = res.list
      console.log(this.num)
    },
    onNameError(res) {
      console.log(res)
      this.$dialog.alert(res.message)
    },
    tomasterList() {
      this.$router.push('/all')
    },
    oncodeSuccess(res) {
      let code = res.object
      share.toShare('姓名测算', 'name?code=' + code + '&sex=' + this.sex + '&name=' + this.name, 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/static/share/measure_7.png')
    },
    oncodeError(res) {
      this.$dialog.alert({ mes: res })
    },
    toShare() {
      httputil.doRequest('/Common/getShareCode', { 'sType': 8 }, 1, this.oncodeSuccess, this.oncodeError, true)

    }
  }
}

</script>
<style scoped>
.title {
  color: #fff;
  font-size: 22px;
  text-align: center
}

.arc {
  margin-top: 50px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 10px solid #F85F5D;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  font-size: 8px;
  color: #F85F5D;
  background: #fff;
}

.score {
  justify-content: center;
  height: 38px;
}

.ks-cai-input {
  padding: 0 15px;
}

.min {
  position: absolute;
  bottom: 10px;
  right: 12px;
  ;
}

.centerJi {
  width: 150px;
  font-size: 14px;
  vertical-align: middle;
  padding: 9px 0 0 35px;
}

.sanCai {
  display: flex;
  border-bottom: 2px solid #F2F2F2;
  text-align: center;
  height: 40px;
  line-height: 40px;
  font-size: 18px;
}

.cText {
  padding: 10px 5px;
  text-align: left;
}

.stroke {
  margin-top: 25px;
  border-top: 4px solid #F2F2F2;
  border-bottom: 4px solid #F2F2F2;
}

.strokeList {
  padding: 10px;
  display: flex;
  flex-direction: row;
}

.strokeTit {
  color: #e4393c;
  font-size: 20px;
  width: 15%;
}

.strokeText {
  font-size: 14px;
  padding-left: 20px;
  width: 85%;
}

.YY {
  padding: 15px 10px;
}

.YY-jiexi {
  display: flex;
  padding: 10px 0 0 0;
  ;
}

.back-hui {
  background: #F2F2F2;
  padding: 5px;
  font-size: 13px;
  display: flex;
  margin-bottom: 15px;
}

.shu {
  margin: 3px 5px 0 0;
  height: 12px;
  width: 5px;
  background: #0475FD;
  border-radius: 2px;
}

.nameJ {
  padding: 0 10px;
  font-size: 14px;
  text-indent: 2em;
  line-height: 20px;
}

#triangle-facing-right1 {
  display: inline-block;
  border-right: 2px solid;
  border-bottom: 2px solid;
  width: 20px;
  height: 20px;
  transform: rotate(-45deg);
  position: absolute;
  top: 15px;
  left: 4px;
}

#triangle-facing-right2 {
  display: inline-block;
  position: absolute;
  border-right: 2px solid;
  border-bottom: 2px solid;
  width: 20px;
  height: 20px;
  transform: rotate(-45deg);
  top: 50px;
  left: 4px;
}

#triangle-facing-right3 {
  display: inline-block;
  position: absolute;
  border-right: 2px solid;
  border-bottom: 2px solid;
  width: 20px;
  height: 20px;
  transform: rotate(-45deg);
  top: 87px;
  left: 4px;
}

.ks-cai-input {
  padding: 15px;
}

.View_name_three {
  width: 30px;
  height: 30px;
  text-align: center;
  margin-top: 7px;
  margin-left: 5px;
  font-size: 17px;
}

.View_name_two {
  width: 30px;
  height: 30px;
  text-align: center;
  margin-top: 7px;
  margin-left: 5px;
  font-size: 17px;
}

.View_name_four {
  width: 30px;
  height: 30px;
  text-align: center;
  margin-top: 2px;
  margin-left: 5px;
  font-size: 17px;
}

.name_num {
  font-size: 14px;
  margin-right: -3px;
  margin-left: 3px;
}

.ks-header-left {
  width: 15px;
  height: 15px;
  border-left: 2px solid #aaa;
  border-top: 2px solid #aaa;
  margin-top: 17px;
  transform: rotate(-45deg);
}
</style>
