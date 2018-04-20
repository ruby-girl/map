<template>
  <div class="full-container container">
    <div style="position:relative;z-index:100;" v-show="showB">
      <img src="http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/oneDay/5.png" alt="" style="width:100%;height:100%;">
      <div class="imgLi">
        <img src="http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/oneDay/2.png" alt="" class="imgTop">
        <div style="width:24%;margin-bottom: 23%;position:relative;">
          <img src="http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/oneDay/1.png" alt="" :class="{'imgCenter':true,'fangda':showD}">
  
        </div>
        <div for="rr" style="width:100%;margin-bottom:5%;position:relative;">
          
          <select name="" id="rr" class="oneInput"  v-model="selected" >         
            <option :value="item.id" v-for="(item,index) in list" :key="index" >{{item.name}}</option>       
          </select>
         
         
          <div class="jiantou"></div>
          <div class="jian"></div>
         
        </div>
        <img src="http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/oneDay/3.png" alt="" class="imgBottom" @click="donghua()">
      </div>
    </div>
    <!--显示签的地方-->
    <div class="xianQ" v-show="showQian">
      <div style="width:100%;position:relative;">
        <img src="http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/oneDay/7.png" alt="" style="width:100%;height:100%;">
        <img src="http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/oneDay/6.png" alt="" :class="{'qian':true,'active':showA}" @click="toResult()">
      </div>
  
    </div>
    <div class="share" @click='toShare()' v-if="sCode==-1">
			<img :src="share" alt="" width="100%"/>
		</div>   
  </div>
</template>
<script>
import httputil from '../../httputil';
import share from '../../share';
export default {
  name: '',
  data() {
    return {
      showD: false,
      showQian: false,
      showA: false,
      showB: true,
      jsessionid:'',
      list:[],
      selected:1,
      count:'',
     rn:null,
     	share:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/cesuan/4.png',
       sCode:null
    }
  },
  created() {
    document.title='每日一签'
    this.GetRequest()
    },
      components: {
       
      },
     watch:{
       selected(val){
         this.selected=val
         console.log(val) 
         console.log(this.selected)
       }
     },
      methods: {
        	GetRequest() {
			let url = window.location.hash
			var i = url.lastIndexOf("code")
			this.sCode = i
		},
        donghua() {
          var self = this
          self.showD = true;
          setTimeout(function () {
            self.showQian = true
            self.showB = false
            self.showA = true
          }, 1500)
        },
        toResult() {
           this.count=this.list[this.selected-1].count
            this.rn=this.num(1,this.count)  
            console.log('count='+this.count)   
            let num=this.selected
            if(this.sCode==-1){
                 this.$router.replace('/showQian?dType='+num+'&dId='+this.rn) 
            }else{
                 this.$router.replace('/showQian?code='+1+'&dType='+num+'&dId='+this.rn) 
            }
                       
        },
        num(min,max){    
          return Math.floor(Math.random()*(max-min)+min); 
        },
        onSuccess(res){
        	this.list=res
          console.log(res)
        },
        	oncodeSuccess(res){
             let code=res.object
				 share.toShare('每日一签','startOne?code='+code,'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/static/share/measure_11.png')
			},
			oncodeError(res){
				 this.$dialog.alert({mes:res})
			},
			toShare(){
				 httputil.doRequest('/Common/getShareCode',{'sType':12},1,this.oncodeSuccess,this.oncodeError,true) 
			
		}
      },
      mounted: function () {
  	   this.$nextTick(()=>{
  	   		httputil.doRequest('/Measure/divinationGodsList',null,1,this.onSuccess,null,false) 
  	   })
  	  }
}

</script>
<style scoped>
.full-container {
  width: 100%;
  color: #666160;
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
}
.share{
   z-index: 100000;
		width: 45px;
		height: 45px;
		position: fixed;
		top:85%;
		right:15px;
	}
.imgLi {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 0;
}

.imgTop {
  width: 60%;
  margin: 10% 0 20% 0;
}

.imgCenter {
  width: 100%;
}

.fangda {
  -webkit-animation-name: fangda;
  -webkit-animation-duration: 0.5s;
  -webkit-animation-timing-function: linear;
  -webkit-animation-iteration-count: 2;
}

@-webkit-keyframes fangda {
  0% {
    -webkit-transform: rotate(0deg);
  }
  25% {
    -webkit-transform: rotate(20deg);
  }
  50% {
    -webkit-transform: rotate(0deg);
  }
  75% {
    -webkit-transform: rotate(-20deg);
  }
  100% {
    -webkit-transform: rotate(0deg);
  }
}

.oneInput {
  height: 30px;
  width: 60%;
  background: #fff;
  margin-left: 20%;
  border: none;
  border-radius: 3px 0 0 3px;
  padding-left: 10px;
}

.imgBottom {
  width: 50%;
}

.jiantou {
  position: absolute;
  top: 7px;
  right: 20%;
  width: 0;
  height: 0;
  border: 14px solid;
  border-color: #e9e9e9 transparent transparent transparent;
}

.jian {
  position: absolute;
  top: 4px;
  right: 20%;
  width: 0;
  height: 0;
  border: 14px solid;
  border-color: #fff transparent transparent transparent;
}

.xianQ {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1000;
}

.qian {
  position: absolute;
  top: 100%;
  left: 45%;
  width: 10%;
}

.active {
  -webkit-animation: showmenu 0.5s 1;
  -webkit-animation-fill-mode: forwards;
  -webkit-animation-name: qian;
  -webkit-animation-duration: 1s;
  -webkit-animation-timing-function: linear;
  /*-webkit-animation-iteration-count: 1;*/
}

@-webkit-keyframes qian {
  0% {
    top: 100%;
  }
  100% {
    top: 30%
  }
}
</style>


