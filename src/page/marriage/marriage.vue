<template>
 <div class="container"> 
   
   <!--八字合婚图片/介绍等-->
    <div class="Imgs">
      <div class="Img"><img style="width:100%;" src="http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/bazihehun/2.png" alt="">
       <span class="Text">婚配八字配对权威指南</span></div>
       <div class="flower">
         <img style="width:100%;" src="http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/bazihehun/1.png" alt="">
       </div>
   </div>
   <!--简介-->
   <div class="abstract">
     成功的男人背后必有一个八字相旺的女人！为何有些情侣在一起之后，事业蒸蒸日上？为何有些情侣在一起之后，运势一日不如一日？
   </div>
   <!--测试后看到的内容-->
   <div class="test"><span>测试后你将看到一下内容</span></div>
   <!--6个图标-->
   <div style="padding: 5px;text-align: center;">
     <div class="iocText" v-for="list in imageList">
       <div style="width:36%;margin:auto">
       	<img  :src="list.url" width="100%" alt="" >
       </div>
       <div style="font-size: 14px;" class="ks-mar-text">{{list.text}}</div>
     </div>
   </div>
   <!--男女选择出生日期-->
   <div class="selectDate">
     <!--男方信息-->
     <div>
       <div class="six">男方信息</div>
       <div class="dateList">
         <div class="ks-m-br">出生日期</div>
         <div class="ks-m-bin" @click='show=true'>
         	{{mbirth}}
         </div>
         <input type="text" id="manDate" placeholder="选择日期"  v-model='mbirth'>
       </div>
        
       <div class="dateList">
         <div class="ks-m-br">出生地点</div>
         <div class="ks-m-bin" @click='show2=true'>
         	{{place}}
         </div>
         <input type="text" id="manAddr" placeholder="选择地点" @focus='show2=true' v-model='place'>
       </div>
     </div>
     <!--男生期-->
     <yd-popup v-model="show" position="center" width="85%" style='overflow: auto;'>
			<div class="ks-cai-city">
				<calendar @getDate='getD' @can='show=false'></calendar>
			</div>
	</yd-popup>
	
     <!--男方出生地-->
     	<yd-popup v-model="show2" position="center" width="85%" style='overflow: auto;'>
			<addr @getVal='getV' @cancel='show2=false'></addr>
        </yd-popup>
     <!--女方信息-->
     <div class="hr"></div>
     <div>
       <div class="six">女方信息</div>
       <div class="dateList">
         <div class="ks-m-br">出生时间</div>
         <div class="ks-m-bin" @click='show1=true'>
         	{{mbirth1}}
         </div>
         <input type="text" id="manDate" placeholder="选择日期" v-model='mbirth1' @focus='show1=true'>
       </div>
        
       <div class="dateList">
         <div class="ks-m-br">出生地点</div>
         <div class="ks-m-bin" @click='show5=true'>
         	{{place1}}
         </div>
         <input type="text" id="manAddr" placeholder="选择地点" v-model='place1' @focus='show5=true'>
       </div>
     </div>
     <yd-popup v-model="show1" position="center" width="85%" style='overflow: auto;'>
			<div class="ks-cai-city">
				<ca @getDate='getDa' @can='show1=false'></ca>
			</div>
	</yd-popup>
	
     <!--方出生地-->
     	<yd-popup v-model="show5" position="center" width="85%" style='overflow: auto;'>
			<addr @getVal='getVa' @cancel='show5=false'></addr>
        </yd-popup>
     <!--开始合婚-->
     <!--<div class="btn">开始合婚</div>-->
     <div style="padding: 10px;">
     	<btn btnMsg='开始合婚' @click.native='begin()'></btn>
     </div>
     <!--疑问咨询-->
     
    </div>
    <!--footer-->
    <div>
      <h4 class="footerTitle">婚姻的长久与否，关键在于以下几点</h4>
      <ul class="footerText">
        <li>1.结婚时间？</li>
        <li>2.配偶属相？</li>
        <li>3.初生子女？</li>
        <li>4.自己的婚姻命格？</li>
        <li>5.阴阳相合？</li>
      </ul>
    </div>
    	<div class="share" @click='toShare()' v-if="sCode==-1">
			<img :src="share" alt="" width="100%"/>
		</div>
   </div>
</template>
<script>
import Navs from '../../components/nav'
import btn from '../../components/button'
import addr from '../../components/addr'
import share from '../../share';
import calendar from '../../components/calendar'
import ca from '../../components/calendar'
import httputil from '../../httputil'
export default {
	components:{
		Navs,btn,calendar,addr,ca
	},
	created(){
		
      document.title='八字合婚'
	   this.GetRequest()
	},
  data () {
    return {
      xian:'',
	  place:'北京(110000)',
      list:[],
      pro:[],
      city:'',
      areas:'',
      s:"00",
      f:"00",
      m:"00",
      picked:'',
      mbirth:'1938-1-1 00:00:00',
      xian1:'',
	  place1:'北京(110000)',
      list1:[],
      pro1:[],
      city1:'',
      areas1:'',
      s1:"00",
      f1:"00",
      m1:"00",
      picked1:'',
      mbirth1:'1938-1-1 00:00:00',
      show4:false,
      show:false,
      show2:false,
      share:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/cesuan/4.png',
      show1:false,
      show3:false,
      show5:false,
      time:'00:00:00',
      time1:'00:00:00',
      code:'110000',
      code1:'110000',
      imageList: [{url:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/bazihehun/3.png', text: '婚姻提示'}, {url:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/bazihehun/4.png', text: '八字合婚精解'}, 
      {url:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/bazihehun/5.png', text: '身体旺克程度'}, 
      {url:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/bazihehun/6.png', text: '婚姻命格'}, {url:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/bazihehun/7.png', text: '老婆旺夫程度'}, 
      {url:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/bazihehun/8.png', text: '阴阳天干配对'}],
      sCode:null
    }
  },
 
  methods:{
  	begin(){
      if(this.sCode==-1){
           this.$router.push('/hehun?mBirthday='+this.mbirth+'&wBirthday='+this.mbirth1+
		'&mAreaCode='+this.code+'&wAreaCode='+this.code1)	
      }else{
          this.$dialog.confirm({
                    
                    mes: '是否前往官网下载微易道APP',
                    opts: () => {
                        window.location="https://www.kushanbaoli.com";
                    }
                });
        }
		 
  	},

  	getD(val){
  		this.show=false;
  		this.mbirth=val;
  		
  	},
			oncodeSuccess(res){
             let code=res.object
				 share.toShare('姻缘八字','marriage?code='+code,'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/static/share/measure_2.png')
			},
			oncodeError(res){
				 this.$dialog.alert({mes:res})
			},
			toShare(){
				 httputil.doRequest('/Common/getShareCode',{'sType':3},1,this.oncodeSuccess,this.oncodeError,true) 
			
		},
  	getDa(val){
  		this.show1=false;
  		this.mbirth1=val
  		
  	},
  	getV(val){
  					this.place=val;
					var p=val;
					var b=p.indexOf('(');
					var c=p.indexOf(')');
					var t=p.substr(b+1,c-3);
					if(t.indexOf(')')!=-1){
						this.code=t.substr(0,t.indexOf(')'))
					}else{
						
						this.code=t;
					}
					this.show2=false;
  	},
  	getVa(val){
  					this.place1=val;
					var p=val;
					var b=p.indexOf('(');
					var c=p.indexOf(')');
					var t=p.substr(b+1,c-3);
					if(t.indexOf(')')!=-1){
						this.code=t.substr(0,t.indexOf(')'))
					}else{
						
						this.code=t;
					}
					this.show5=false;
  	},
    	GetRequest() {  
     let url=window.location.hash	
		var i=url.lastIndexOf("code")
	   this.sCode=i
		 console.log(i)
	 }
  }
}

</script>
<style>
.ks-mar-text{
	width: 100%;
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}
	.share{
		width: 45px;
		height: 45px;
		position: fixed;
		top:40%;
		right:15px;
	}
.marriage{
   height:40px;
   line-height: 40px;
   border-bottom: 1px solid #F3F3F3;
   margin-bottom: 3%;
   font-size: 20px;
  }
.Imgs{
  display: flex;
  justify-content: row;
}
.Img{
  width:60%;
  margin-top: 15%;
  padding:0  10%;
  color:#484241;
  font-size: 15px;
}
.flower{
  width:40%;
}
.Text{
  white-space :nowrap;
}
.abstract{
  line-height: 22px;
  padding: 5% 5%;
  text-indent: 2em;
  color: #2C3E50;
  font-size: 15px;
}
.test span{
  display: inline-block;
  width:50%;
  font-size: 15px;
  font-weight: bold;
  white-space :nowrap;
}
.test::after{
  content:'';
  display: inline-block;
  width:25%;
  height:1px;
  background: #aaa;
  position: relative;
  top:-5px;
}
.test::before{
  content:'';
  display: inline-block;
  width:25%;
  height:1px;
  background: #aaa;
  position: relative;
  top:-5px;
}
.iocText{
  display: inline-block;
  width:33%;
  padding-top: 3%;
}
.selectDate{
  text-align: left ;
  border-top:4px solid #EAEAEA;
  border-bottom:4px solid #EAEAEA;
  margin-top: 15px;
  padding-bottom: 15px;
}
.dateList{
  padding: 7px 0;
  padding-left: 10%;
}
.dateList>div{
	float:left;
}
.dateList:after{
	content: "";
	display: block;
	clear:both;
}
.dateList input{
	position:absolute;
	left:99999px;
	line-height: 40px;
}
.dateList .ks-m-bin{
  display: inline-block;
  height:40px;
  line-height: 40px;
  width:70%;
  padding: 0 5px;
  border-radius: 5px;
  outline: none;
  border:1px solid #EAEAEA;
  -webkit-appearance: none;
 -webkit-tap-highlight-color: rgba(0, 0, 0, 0); 
 	margin-left: 3%;
 	font-size:15px;
}
.dateList .ks-m-br{
  font-weight: normal;
  display: inline-block;
  line-height: 40px;
   	font-size:15px;
}
.six{
  height:25px;
  margin-top: 6%;
  font-weight: bold;
  font-size: 17px;
  padding-left: 5px;
  padding-left: 11%;
}
.hr{
  height:1px;
  background-color: #EAEAEA;
  margin-top: 10px;
}
::-webkit-input-placeholder { /* WebKit browsers */
color: #CCCDCD;
font-size: 13px;
padding-left: 7px;
}
:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
color: red;
font-size: 13px;
padding-left: 7px;
}
::-moz-placeholder { /* Mozilla Firefox 19+ */
color: #CCCDCD;
font-size: 13px;
padding-left: 7px;
}
:-ms-input-placeholder { /* Internet Explorer 10+ */
color: #CCCDCD;
font-size: 13px;
padding-left: 7px;
}
/*.btn{
  height: 40px;
  background-color: #e4393c;
  width:94%;
  margin-left: 3%;
  color:#fff;
  line-height: 30px;
}*/
.weixin{
 padding-left: 3%;
 color:#aaa;
 margin-top: 6px;
}
.footerText{
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.footerText li{
 font-size: 13px;
 margin-left: 7px;
 margin-top: 8px;
}
.footerTitle{
  text-align: left;
  padding: 18px 0 5px 3%;
}
</style>
