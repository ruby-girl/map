<template>
	<div class="container">
	
    <div>
      <div class="vocation">
        <img class="img1" src="http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/vocation/zuijia.png" alt="">
        <img class="img2" style="width:40%;"  src="http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/vocation/2.png" alt="">
      </div>
      <div style="font-size:14px;padding:0 10px;">本软件经陈宗玄道长亲点，结合中国最早的、最正统的易经学，为您测算出最准确的大利方位；再以古代与现代做对比，与时俱进，为您测算出最适合的行业。</div>
    </div>
    
    <div class="content">
     <div>
       <div class="title">1.行业的选择决定什么？</div>
       <div class="text">
         俗话说：“男儿最怕入错行，女儿最怕嫁错郎”。行业的选择对于男子或是女强人来说至关重要，行业的选择，决定你的财运大，选择适宜的行业，你的财运将会大增，选择忌讳的行业，你的前途将大打折扣，有极少数是选到忌讳行业，还赚到了大钱，只能说是暂时的，最终赚来钱的将会不翼而飞或是无福享用。
       </div>
     </div>
     <div>
       <div class="title">2.行走大利方位有什么好处</div>
       <div class="text">
         每一个方位的“气场”都是不同的，每一个人从出生那天，就决定了你的个人“气场”。行走大利方位，吸收与你融合的“气场”，你会心境明亮，思路清晰，还可再无意之中遇贵人相助，有助于事业发展，增加鸿运，增加女子桃花缘等，诸多好处。行不利方位降低你的运势，使你力不从心，人缘下降，受人排挤，处事不顺，财运大降，身体欠安等。
       </div>
     </div>
    </div>
		
      <div class="ks-cai-input">
				<label for="" class="ks-cai-da">
					<div class="ks-cai-date">出生日期：</div>
					<div >
            <div @click="show3=true;" class="t-input"> {{birth}}</div>
						<input  type="text" name="" id="" value=""  placeholder="出生地点" v-model="birth"/>
					</div>
				</label>
			</div>
      <div class="ks-cai-input">
				<label for="" class="ks-cai-da">
					<div class="ks-cai-date">出生地点：</div>
					<div >
            <div @click="show2=true;" class="t-input"> {{place}}</div>
						<input  type="text" name="" id="" value=""  placeholder="出生地点" v-model="place"/>
					</div>
				</label>
			</div>
    <div class="ks-cai-input">
    	<btn btnMsg="开始测算"  @click.native="toResult()"></btn>
		</div>
   <div style="border-top:5px solid #f3f3f3;margin-top:5px;">
     <div style="color:#e4393c;padding:5px 10px;">测试后你将看到以下内容</div>
      <ul class="vocationUl">
        <li class="vocationLi" v-for="item in vocationLists">
          <img :src="item.url" alt="" style="margin-right:4px">
          <span>{{item.text}}</span>
        </li>
    </ul>
   </div>
	 	<!--<div class="share" @click='toShare()'>
			<img :src="share" alt="" width="100%"/>
		</div>-->
   <!--选择的模态框-->

	<yd-popup v-model="show3" position="center"  width="80%">
		<calendar @getDate="getD" @can="getC"></calendar>
	</yd-popup>

	<yd-popup v-model="show2" position="center" width="80%" >	
		<addr @getVal='getAddr' @cancel='getCancel'></addr>
	</yd-popup>


<!--lal-->
	</div>
</template>
<script>
import Tit from '../../components/nav'
import btn from '../../components/button'
import calendar from '../../components/calendar'
import  addr from '../../components/addr'
import share from '../../share';
	export default {
  name: 'num',
   data () {
    return {
      show4:false,
				birth:"1937-1-1 00:00:00",
				show2:false,
				place:"北京(110000)",
				result:'',
				show3:false,
				time:null,
				code:110000,
				id:'',
				share:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/cesuan/4.png',
     vocationLists: [{url: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/vocation/3.png', text: '最佳职业'},{url: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/vocation/4.png', text: '第二佳职业'}, 
     {url: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/vocation/5.png', text: '方位不利破除法'}, 
     {url: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/vocation/6.png', text: '终生大利方位'}, {url: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/vocation/7.png', text: '终生不利方位'}, 
     {url: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/vocation/8.png', text: '禁忌行业'}]
    }
  },
  components: {
   Tit,btn,calendar,addr
  },
		created(){		
      document.title='行业方位'
		},
	watch:{
			place(val){
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
			}
		},
		methods:{
			toResult() {
           this.$dialog.alert({
                    mes: '暂未开放，敬请期待！'           
                });

				// 有改动，暂时做的弹出框
				// if(this.place==''||this.code==null){
				// alert('请选择出生地');
			  //  }else{	
        //      	this.$router.push('/vct?birthday='+this.birth+'&Code='+this.code)
				// } 	
			},
				toShare(){
			share.toShare('行业分析','/vocation')
		},
			getD:function(val){
				this.show3=false;
				this.birth=val;
				
			},
			getAddr:function(val){
				this.show2=false;
				this.place=val;
			},
			getCancel() {
					this.show2=false;
			},
			getC() {
				this.show3=false;
			}
		}
	}
</script>
<style scoped>
.vocation{
  display: flex;
  border-top:1px solid #F2F2F2;
}
.share{
		width: 45px;
		height: 45px;
		position: fixed;
		top:50%;
		right:15px;
	}
.img1{
  margin: 30px 2%;
  width:55%;
  height:100px;
}
.img2{
  margin: 30px 0;
  width:40%;
  height:100px;
}
.content{
  padding: 10px;
  border-top:5px solid #F2F2F2;
  margin-top: 15px;
  border-bottom: 5px solid #F2F2F2;
}
.title{
 color:#e4393c;
 font-size: 18px;
 font-weight: bold;
}
.text{
  text-indent: 2em;
  font-size: 15px;
  line-height: 23px;
  padding: 5px 0 10px 0;
}
.ks-cai-date{
		height: 30px;
		line-height: 30px;
    font-size:16px;
    padding-right: 5px;
    padding-left: 10px;
    white-space:nowrap;
	}
	.ks-cai-form{
		padding: 10px;
	}
	.ks-cai-j{
		font-size:10px;
		color:#ccc;
	}
	.ks-cai-input{
		padding: 10px 15px;
	}
	.ks-cai-input input{
    position: fixed;
    top:-1000;
	}

.t-input{
  padding: 0px 8px;
		height: 40px;
		outline: none;
		flex:1;
		font-size: 15px;
		border-radius:8px;
    width:160px;
    border:1px solid #ccc;
}
  .vocationInput{
    padding-top: 15px;
  }

.vocationLi{
  list-style: none;
  font-size: 13px;
  padding:5px 8px;
  display:flex;
}
.vocationLi img{
  height:17px;
  width:17px;
}
.vocationUl{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  list-style: none;
  padding-bottom: 20px;
}
/*.ks-cai-city{
		width:100%;
		height: 100%;
	}*/
	
</style>