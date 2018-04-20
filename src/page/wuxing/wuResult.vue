<template>
		<div class="container">
			<div class="ks-wr-head" style="font-size:16px;">
				您的五行组成 <i style="font-size:14px;color:#aaa;">（出生日期为农历）</i>
			</div>
			<div class="wxTime">
				<div class="wx_box">
          <div class="wx-x-box">{{obj.wxExplaintAnalysis.nationalYear}}年</div>
					<div class="wx-x-box">
						<div style="position:relative" :class="{'wx_top':true,'bc_jin':obj.wxExplaintAnalysis.yearTGDZWx=='金','bc_mu':obj.wxExplaintAnalysis.yearTGDZWx=='木','bc_shui':obj.wxExplaintAnalysis.yearTGDZWx=='水','bc_huo':obj.wxExplaintAnalysis.yearTGDZWx=='火','bc_tu':obj.wxExplaintAnalysis.yearTGDZWx=='土'}">{{obj.wxExplaintAnalysis.yearTGDZWx}}
              <div class="you_xie"></div>
							<div class="zuo_xie"></div>
						</div>
						<div class="wx_zhong">
							
						</div>
						<div class="wx_bottom">
							<div :class="{'wx_top':true,'bc_jin':obj.wxExplaintAnalysis.yearTGWx=='金','bc_mu':obj.wxExplaintAnalysis.yearTGWx=='木','bc_shui':obj.wxExplaintAnalysis.yearTGWx=='水','bc_huo':obj.wxExplaintAnalysis.yearTGWx=='火','bc_tu':obj.wxExplaintAnalysis.yearTGWx=='土'}">{{obj.wxExplaintAnalysis.yearTGWx}}</div>
							<div class="heng"></div>
							<div :class="{'wx_top':true,'bc_jin':obj.wxExplaintAnalysis.yearDZWx=='金','bc_mu':obj.wxExplaintAnalysis.yearDZWx=='木','bc_shui':obj.wxExplaintAnalysis.yearDZWx=='水','bc_huo':obj.wxExplaintAnalysis.yearDZWx=='火','bc_tu':obj.wxExplaintAnalysis.yearDZWx=='土'}">{{obj.wxExplaintAnalysis.yearDZWx}}</div>
						</div>
					</div>
					<div class="wx_text">{{obj.wxExplaintAnalysis.lunarYear}}</div>
				</div>
					<div class="wx_box">
          <div class="wx-x-box">{{obj.wxExplaintAnalysis.nationalMonth}}月</div>
						<div class="wx-x-box">
						<div style="position:relative" :class="{'wx_top':true,'bc_jin':obj.wxExplaintAnalysis.monthTGDZWx=='金','bc_mu':obj.wxExplaintAnalysis.monthTGDZWx=='木','bc_shui':obj.wxExplaintAnalysis.monthTGDZWx=='水','bc_huo':obj.wxExplaintAnalysis.monthTGDZWx=='火','bc_tu':obj.wxExplaintAnalysis.monthTGDZWx=='土'}">{{obj.wxExplaintAnalysis.monthTGDZWx}}
							<div class="you_xie"></div>
							<div class="zuo_xie"></div>
						</div>
						<div class="wx_zhong">
							
						</div>
						<div class="wx_bottom">
							<div :class="{'wx_top':true,'bc_jin':obj.wxExplaintAnalysis.monthTGWx=='金','bc_mu':obj.wxExplaintAnalysis.monthTGWx=='木','bc_shui':obj.wxExplaintAnalysis.monthTGWx=='水','bc_huo':obj.wxExplaintAnalysis.monthTGWx=='火','bc_tu':obj.wxExplaintAnalysis.monthTGWx=='土'}">{{obj.wxExplaintAnalysis.monthTGWx}}</div>
							<div class="heng"></div>
							<div :class="{'wx_top':true,'bc_jin':obj.wxExplaintAnalysis.monthDZWx=='金','bc_mu':obj.wxExplaintAnalysis.monthDZWx=='木','bc_shui':obj.wxExplaintAnalysis.monthDZWx=='水','bc_huo':obj.wxExplaintAnalysis.monthDZWx=='火','bc_tu':obj.wxExplaintAnalysis.monthDZWx=='土'}">{{obj.wxExplaintAnalysis.monthDZWx}}</div>
						</div>
					</div>
					<div class="wx_text">{{obj.wxExplaintAnalysis.lunarMonth}}</div>
				</div>
					<div class="wx_box">
          <div class="wx-x-box">{{obj.wxExplaintAnalysis.nationalDay}}日</div>
					<div class="wx-x-box">
						<div style="position:relative" :class="{'wx_top':true,'bc_jin':obj.wxExplaintAnalysis.dayTGDZWx=='金','bc_mu':obj.wxExplaintAnalysis.dayTGDZWx=='木','bc_shui':obj.wxExplaintAnalysis.dayTGDZWx=='水','bc_huo':obj.wxExplaintAnalysis.dayTGDZWx=='火','bc_tu':obj.wxExplaintAnalysis.dayTGDZWx=='土'}">{{obj.wxExplaintAnalysis.dayTGDZWx}}
							<div class="you_xie"></div>
							<div class="zuo_xie"></div>
						</div>
						<div class="wx_zhong">
							
						</div>
						<div class="wx_bottom">
							<div :class="{'wx_top':true,'bc_jin':obj.wxExplaintAnalysis.dayTGWx=='金','bc_mu':obj.wxExplaintAnalysis.dayTGWx=='木','bc_shui':obj.wxExplaintAnalysis.dayTGWx=='水','bc_huo':obj.wxExplaintAnalysis.dayTGWx=='火','bc_tu':obj.wxExplaintAnalysis.dayTGWx=='土'}">{{obj.wxExplaintAnalysis.dayTGWx}}</div>
							<div class="heng"></div>
							<div :class="{'wx_top':true,'bc_jin':obj.wxExplaintAnalysis.dayDZWx=='金','bc_mu':obj.wxExplaintAnalysis.dayDZWx=='木','bc_shui':obj.wxExplaintAnalysis.dayDZWx=='水','bc_huo':obj.wxExplaintAnalysis.dayDZWx=='火','bc_tu':obj.wxExplaintAnalysis.dayDZWx=='土'}">{{obj.wxExplaintAnalysis.dayDZWx}}</div>
						</div>
					</div>
					<div class="wx_text">{{obj.wxExplaintAnalysis.lunarday}}</div>
				</div>
					<div class="wx_box">
          <div class="wx-x-box">{{obj.wxExplaintAnalysis.nationalHour}}</div>
							<div class="wx-x-box">
						<div style="position:relative" :class="{'wx_top':true,'bc_jin':obj.wxExplaintAnalysis.hourTGDZWx=='金','bc_mu':obj.wxExplaintAnalysis.hourTGDZWx=='木','bc_shui':obj.wxExplaintAnalysis.hourTGDZWx=='水','bc_huo':obj.wxExplaintAnalysis.hourTGDZWx=='火','bc_tu':obj.wxExplaintAnalysis.hourTGDZWx=='土'}">{{obj.wxExplaintAnalysis.hourTGDZWx}}
								<div class="you_xie"></div>
							<div class="zuo_xie"></div>
						</div>
						<div class="wx_zhong">
						
						</div>
						<div class="wx_bottom">
							<div :class="{'wx_top':true,'bc_jin':obj.wxExplaintAnalysis.hourTGWx=='金','bc_mu':obj.wxExplaintAnalysis.hourTGWx=='木','bc_shui':obj.wxExplaintAnalysis.hourTGWx=='水','bc_huo':obj.wxExplaintAnalysis.hourTGWx=='火','bc_tu':obj.wxExplaintAnalysis.hourTGWx=='土'}">{{obj.wxExplaintAnalysis.hourTGWx}}</div>
							<div class="heng"></div>
							<div :class="{'wx_top':true,'bc_jin':obj.wxExplaintAnalysis.hourDZWx=='金','bc_mu':obj.wxExplaintAnalysis.hourDZWx=='木','bc_shui':obj.wxExplaintAnalysis.hourDZWx=='水','bc_huo':obj.wxExplaintAnalysis.hourDZWx=='火','bc_tu':obj.wxExplaintAnalysis.hourDZWx=='土'}">{{obj.wxExplaintAnalysis.hourDZWx}}</div>
						</div>
					</div>
					<div class="wx_text">{{obj.wxExplaintAnalysis.lunarhour}}</div>
				</div>
			</div>
			<!--上面是3球-->
			<div style="font-size:15px;color:#666;">
				<ul style="padding:10px 20px;">
					<li style="display:flex;margin-top:10px;">
						<div style="color:#ef8300;margin-right:20px;">金</div>
						<div>主管肺部</div>
						<div class="wx_img"><img style="width:100%;"     src="http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/wu/fei.png" alt=""></div>			
					</li>
						<li style="display:flex;margin-top:10px;">
						<div style="color:#42B203;margin-right:20px;">木</div>
						<div>主管肝脏</div>
						<div class="wx_img"><img style="width:100%;"     src="http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/wu/ganzang.png" alt=""></div>			
					</li>
						<li style="display:flex;margin-top:10px;">
						<div style="color:#1682FC;margin-right:20px;">水</div>
						<div>主管胆，肾</div>
						<div class="wx_img"><img style="width:100%;"     src="http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/wu/shen.png" alt=""></div>			
					</li>
						<li style="display:flex;margin-top:10px;">
						<div style="color:#FE5E46;margin-right:20px;">火</div>
						<div>主管心脏，心血管，脑血管</div>
						<div class="wx_img"><img style="width:100%;"     src="http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/wu/xinzang.png" alt=""></div>			
					</li>
						<li style="display:flex;margin-top:10px;">
						<div style="color:#000;margin-right:20px;">土</div>
						<div>主管肠胃</div>
						<div class="wx_img"><img style="width:100%;"     src="http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/wu/changwei.png" alt=""></div>			
					</li>
				</ul>
			</div>
			<div style="border-top:4px solid #eee;padding:15px 0;">
        <div style="color:red;font-size:17px;">您的五行诊断结果</div>
			<ul style="color:#666;">
				<li style="display:flex;height:85px;padding:0 10px;margin-top:20px;font-size:15px;">
					<div style="text-align:center;margin-right:5px;">
						<div style="display:flex;align-items: center;">
							<div><img style="width:25px;" src="http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/wu/6.png" alt=""></div>
							<div style="color:#ef8300;margin-left:3px;">金</div>
						</div>
						<div style="margin:5px 0;">{{obj.wxExplaintReulst[0].count}}</div>
						<div style="color:#ef8300;">({{obj.wxExplaintReulst[0].wxStrength}})</div>
					</div>
					<div style="flex:1;padding:8px 10px;">{{obj.wxExplaintReulst[0].suppleWay}}</div>
				</li>
				<li style="display:flex;height:90px;border-top:1px solid #eee;padding:5px 10px;font-size:15px;">
					<div style="text-align:center;margin-right:5px;">
						<div style="display:flex;align-items: center;">
							<div><img style="width:25px;" src="http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/wu/7.png" alt=""></div>
							<div style="color:#42B203;margin-left:3px;">木</div>
						</div>
					<div style="margin:5px 0;">{{obj.wxExplaintReulst[1].count}}</div>
						<div style="color:#42B203;">({{obj.wxExplaintReulst[1].wxStrength}})</div>
					</div>
					<div style="flex:1;padding:8px 10px;">{{obj.wxExplaintReulst[1].suppleWay}}</div>
				</li>
					<li style="display:flex;height:90px;border-top:1px solid #eee;padding:5px 10px;font-size:15px;">
					<div style="text-align:center;margin-right:5px;">
						<div style="display:flex;align-items: center;">
							<div><img style="width:25px;" src="http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/wu/8.png" alt=""></div>
							<div style="color:#1682FC;margin-left:3px;">水</div>
						</div>
						<div style="margin:5px 0;">{{obj.wxExplaintReulst[2].count}}</div>
						<div style="color:#1682FC;">({{obj.wxExplaintReulst[2].wxStrength}})</div>
					</div>
					<div style="flex:1;padding:8px 10px;">{{obj.wxExplaintReulst[2].suppleWay}}</div>
				</li>
					<li style="display:flex;height:90px;border-top:1px solid #eee;padding:5px 10px;font-size:15px;">
					<div style="text-align:center;margin-right:5px;">
						<div style="display:flex;align-items: center;">
							<div><img style="width:25px;" src="http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/wu/9.png" alt=""></div>
							<div style="color:#FE5E46;margin-left:3px;">火</div>
						</div>
						<div style="margin:5px 0;">{{obj.wxExplaintReulst[3].count}}</div>
						<div style="color:#FE5E46;">({{obj.wxExplaintReulst[3].wxStrength}})</div>
					</div>
					<div style="flex:1;padding:8px 10px;">{{obj.wxExplaintReulst[3].suppleWay}}</div>
				</li>
				<li style="display:flex;height:90px;border-top:1px solid #eee;padding:5px 10px;font-size:15px;">
					<div style="text-align:center;margin-right:5px;">
						<div style="display:flex;align-items: center;">
							<div><img style="width:25px;" src="http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/wu/11.png" alt=""></div>
							<div style="color:#000;margin-left:3px;">土</div>
						</div>
						<div style="margin:5px 0;">{{obj.wxExplaintReulst[4].count}}</div>
						<div style="color:#000;">({{obj.wxExplaintReulst[4].wxStrength}})</div>
					</div>
					<div style="flex:1;padding:8px 10px;">{{obj.wxExplaintReulst[4].suppleWay}}</div>
				</li>
			</ul>
			</div>
			<div style="padding: 15px;">
				<!--<div class="ks-test-content">
					<div class="ks-test-title">如何补充五行？</div>
					<div class="ks-test-think">
						1.后编《易经》认为，五行缺失可从姓名上的五行数理和偏旁补充。
					</div>
					<div class="ks-test-think" style="padding-top:5px;">
						2.18岁前可拜祭干爹，干妈，必须要满足五行互补和属相不冲害这两个条件。例如生于2015年立春后属相为羊的小孩子，如果五行缺火，就宜拜祭1987年立春后属兔的人，因为无论从属相还是五行，都是相合的。切记不能乱拜祭，如果遇到不合的，反而会大不利。
					</div>
				</div>-->
				<div style="padding: 10px 0;">
					<router-link to="/more">
						<btn btnMsg='查看18岁后的五行补充法'></btn>
					</router-link>
				</div>
			</div>
			 <div style="top:85%;" class="share" @click='toShare()' v-if="sCode==-1">
			<img :src="share" alt="" width="100%"/>
		</div>   
		</div>
</template>
<script>
	import navbar from '../../components/nav';
	import btn from '../../components/button';
	import httputil from '../../httputil'
	import share from '../../share';
	export default{
		components:{
			navbar,btn
		},
		data(){
			return{
				obj:[],
				share:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/cesuan/4.png',
				sCode:null,
				bc:null
			}
		},
		created(){
			document.title='五行分析'
			 this.GetRequest()
		},
		mounted: function () {
  	     this.$nextTick(()=>{
  	     	httputil.doRequest('/Measure/WXExplaint',{'birthday':this.$route.query.birthday,'sex':this.$route.query.sex,'areaCode':this.$route.query.areaCode},1,this.onSuccess,null,false) 
  	     })
  	   },
  	   methods:{
				   GetRequest() {  
     let url=window.location.hash
		 let subStrs=url.split("?")	
		 this.send=subStrs[1]	
		 let li=this.send.split('&')	 
		var i=li[0].lastIndexOf("code")
	   this.sCode=i
	 },
  	   	onSuccess(res){
					 
  	   		this.obj=res
  	   	},
				 		oncodeSuccess(res){
             let code=res.object
				 share.toShare('五行分析','wresult?code='+code+'&birthday='+this.$route.query.birthday+'&sex='+this.$route.query.sex+'&areaCode='+this.$route.query.areaCode,'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/static/share/measure_9.png')
			},
			oncodeError(res){
				 this.$dialog.alert({mes:res})
			},
			toShare(){
				 httputil.doRequest('/Common/getShareCode',{'sType':10},1,this.oncodeSuccess,this.oncodeError,true) 
			
		}
  	   	}
	}
</script>
<style>
	.ks-wr-head{
		padding: 15px;
		font-size:15px;
	}
	.wxTime{
		border-top:1px solid #eee;
		border-bottom:1px solid #eee;
		width:100%;
		font-size: 15px;
		display: flex;
	}
	.wx_box{
		width:25%;
		height:200px;
		text-align: center;	
	}
	.wx-x-box{
		height:65px;
    line-height: 65px;
		color:#666;
	  display: flex;
		flex-direction: column;
		align-items: center;	
	}
	.you_xie{
		border-top:2px solid #666;
	width:18px;
	height:2px;
	transform:rotate(60deg);
	position: absolute;
   bottom:-8px;
	left:18px;
	}
	.zuo_xie{
		border-top:2px solid #666;
	width:18px;
	height:2px;
	bottom:-8px;
	right:20px;
	transform:rotate(-55deg);
	position: absolute;
	}
	.wx_zhong{
		width:100%;
		position: relative;
		height:20px;
	}
	.wx_top{
		width:25px;
		height:25px;
		line-height: 25px;
		background: #aaa;
		border-radius: 50%;
		color: #fff;
		font-size: 15px;
	}
	.wx_bottom{
		display: flex;
	}
	.heng{
		margin-top:15px;
		border-top:2px solid #666;
		width:18px;
	}
	.bc_jin{
		background: #ef8300;
	}
	.bc_mu{
  	background: #42B203;
	}
	.bc_shui{
		background: #1682FC;
	}
	.bc_huo{
			background: #FE5E46;
	}
	.bc_tu{
		background: #000;
	}
	.wx_img{
		width:26px;
		margin-left: 15px;
	}
	.wx_text{
		margin:0 auto;
		width:20px;
		line-height:22px;
		color:#666;
		padding-top:10px;
	}
</style>