<template>
	<div class="container">
	
			<div class="ks-score-cir" style="paddingTop:25px;height:265px;">
			<div class="ks-cir">
				<div class="ks-cir-c">
					<div class="ks-cir-score">
						{{obj.dZSXScore+obj.nYWXScore*1+obj.tGWXSocre*1+obj.yYScore*1}}分
					</div>
					<div class="ks-jie">
						总分100分
					</div>
				</div>
			</div>
			<div style="text-align: center;font-size:15px;padding: 8px;color:white">
				{{obj.marriageLevel}}
			</div>
			<div style="text-align: center;font-size:14px;paddingBottom: 5px;color:white">(婚姻总分5等15节)</div>
		</div>
			<div style="padding:10px 15px;fontSize:15px;height:350px;">
					<div class="ks-hun-title">
					姻缘八字
			   	</div>
          <div class="flex_be_y">
						<div class="sex">男<i style="font-weight:100;font-size:14px;">(乾命)</i></div>
						<div></div>
						
						<div class="flex_y">
              <div>{{oppo.mYearTGDZ}}</div>
							<div style="margin:0 5px;">{{oppo.mMonthTGDZ}}</div>
							<div style="marginRight:5px;">{{oppo.mDayTGDZ}}</div>
							<div>{{oppo.mHourTGDZ}}</div>
						</div>
						<div>{{oppo.mYYType}}</div>
					</div>
					<div class="flex_be_y" style="marginTop:10px;">
						<div class="sex">女<i style="font-weight:100;font-size:14px;">(坤命)</i></div>
						<div></div>
						
						<div class="flex_y">
             <div>{{oppo.wYearTGDZ}}</div>
							<div style="margin:0 5px;">{{oppo.wMonthTGDZ}}</div>
							<div style="marginRight:5px;">{{oppo.wDayTGDZ}}</div>
							<div>{{oppo.wHourTGDZ}}</div>
						</div>
						<div>{{oppo.wYYType}}</div>
					</div>
					<div class="flex_start_y" style="marginTop:30px;">
						<div class="sex" style="width:15%;">男</div>
						<div style="width:85%;fontSize:14px;" class="flex_be_y">
							<div style="position:relative;">
                <div :class="{'d_aic flex_col_y':true,'bc_lv':border1} ">
									<div style="fontSize:12px;">{{oppo.mYearWX}}</div>
									<div class="flex_y">
										<div :class="{'x_aic':true,'bc_lv':oppo.yearTGWXRelation!=1}">{{oppo.mYearTGDZ[0]}}</div>
										<div :class="{'x_aic':true,'bc_lv':oppo.yearDZWXRelation!=1}">{{oppo.mYearTGDZ[1]}}</div>
									</div>	
						  	</div>
								<div class="flex_y" style="position:absolute;">
                	<img src="../../static/img/hongzuo.png" alt="" class="img_1" v-if="oppo.yearTGWXRelation==1">
									<img src="../../static/img/lvzuo.png" alt="" class="img_1" v-if="oppo.yearTGWXRelation!=1">
									<img src="../../static/img/shangxiahong.png" alt="" class="img_2" v-if="oppo.yearWXRelation==1">
									<img src="../../static/img/shangxialv.png" alt="" class="img_2" v-if="oppo.yearWXRelation!=1">
									<img src="../../static/img/hongyou.png" alt="" class="img_3" v-if="oppo.yearDZWXRelation==1">
									<img src="../../static/img/lvyou.png" alt="" class="img_3" v-if="oppo.yearDZWXRelation!=1">
								</div>
								<div :class="{'bottom_aic flex_col_y':true,'bc_lv':border1}">							
									<div class="flex_y">
										<div :class="{'x_aic':true,'bc_lv':oppo.yearTGWXRelation!=1}">{{oppo.wYearTGDZ[0]}}</div>
										<div :class="{'x_aic':true,'bc_lv':oppo.yearDZWXRelation!=1}">{{oppo.wYearTGDZ[1]}}</div>
									</div>
									<div style="fontSize:12px;">{{oppo.wYearWX}}</div>	
						  	</div>
							</div>
							<!--2-->
							<div style="position:relative;">
                <div :class="{'d_aic flex_col_y':true,'bc_lv':border2} ">
									<div style="fontSize:12px;">{{oppo.mMonthWX}}</div>
									<div class="flex_y">
										<div :class="{'x_aic':true,'bc_lv':oppo.monthTGWXRelation!=1}">{{oppo.mMonthTGDZ[0]}}</div>
										<div :class="{'x_aic':true,'bc_lv':oppo.monthDZWXRelation!=1}">{{oppo.mMonthTGDZ[1]}}</div>
									</div>	
						  	</div>
								<div class="flex_y" style="position:absolute;">
                <img src="../../static/img/hongzuo.png" alt="" class="img_1" v-if="oppo.monthTGWXRelation==1">
									<img src="../../static/img/lvzuo.png" alt="" class="img_1" v-if="oppo.monthTGWXRelation!=1">
									<img src="../../static/img/shangxiahong.png" alt="" class="img_2" v-if="oppo.monthWXRelation==1">
									<img src="../../static/img/shangxialv.png" alt="" class="img_2" v-if="oppo.monthWXRelation!=1">
									<img src="../../static/img/hongyou.png" alt="" class="img_3" v-if="oppo.monthDZWXRelation==1">
									<img src="../../static/img/lvyou.png" alt="" class="img_3" v-if="oppo.monthDZWXRelation!=1">
								</div>
									<div :class="{'bottom_aic flex_col_y':true,'bc_lv':border2}">	
									
									<div class="flex_y">
										<div :class="{'x_aic':true,'bc_lv':oppo.monthTGWXRelation!=1}">{{oppo.wMonthTGDZ[0]}}</div>
										<div :class="{'x_aic':true,'bc_lv':oppo.monthDZWXRelation!=1}">{{oppo.wMonthTGDZ[1]}}</div>
									</div>
									<div style="fontSize:12px;">{{oppo.wMonthWX}}</div>	
						  	</div>
							</div>
					  <!--2 end-->
           <div style="position:relative;">
                <div :class="{'d_aic flex_col_y':true,'bc_lv':border3} ">
									<div style="fontSize:12px;">{{oppo.mDayWX}}</div>
									<div class="flex_y">
										<div :class="{'x_aic':true,'bc_lv':oppo.dayTGWXRelation!=1}">{{oppo.mDayTGDZ[0]}}</div>
										<div :class="{'x_aic':true,'bc_lv':oppo.dayDZWXRelation!=1}">{{oppo.mDayTGDZ[1]}}</div>
									</div>	
						  	</div>
								<div class="flex_y" style="position:absolute;">
                <img src="../../static/img/hongzuo.png" alt="" class="img_1" v-if="oppo.dayTGWXRelation==1">
									<img src="../../static/img/lvzuo.png" alt="" class="img_1" v-if="oppo.dayTGWXRelation!=1">
									<img src="../../static/img/shangxiahong.png" alt="" class="img_2" v-if="oppo.dayWXRelation==1">
									<img src="../../static/img/shangxialv.png" alt="" class="img_2" v-if="oppo.dayWXRelation!=1">
									<img src="../../static/img/hongyou.png" alt="" class="img_3" v-if="oppo.dayDZWXRelation==1">
									<img src="../../static/img/lvyou.png" alt="" class="img_3" v-if="oppo.dayDZWXRelation!=1">
								</div>
									<div :class="{'bottom_aic flex_col_y':true,'bc_lv':border3}">	
									
									<div class="flex_y">
										<div :class="{'x_aic':true,'bc_lv':oppo.dayTGWXRelation!=1}">{{oppo.wDayTGDZ[0]}}</div>
										<div :class="{'x_aic':true,'bc_lv':oppo.dayDZWXRelation!=1}">{{oppo.wDayTGDZ[1]}}</div>
									</div>
									<div style="fontSize:12px;">{{oppo.wDayWX}}</div>	
						  	</div>
							</div>
							<!--3end-->
              <div style="position:relative;">
                <div :class="{'d_aic flex_col_y':true,'bc_lv':border4} ">
									<div style="fontSize:12px;">{{oppo.mHourWX}}</div>
									<div class="flex_y">
										<div :class="{'x_aic':true,'bc_lv':oppo.hourTGWXRelation!=1}">{{oppo.mHourTGDZ[0]}}</div>
										<div :class="{'x_aic':true,'bc_lv':oppo.hourDZWXRelation!=1}">{{oppo.mHourTGDZ[1]}}</div>
									</div>	
						  	</div>
								<div class="flex_y" style="position:absolute;">
                	<img src="../../static/img/hongzuo.png" alt="" class="img_1" v-if="oppo.hourTGWXRelation==1">
									<img src="../../static/img/lvzuo.png" alt="" class="img_1" v-if="oppo.hourTGWXRelation!=1">
									<img src="../../static/img/shangxiahong.png" alt="" class="img_2" v-if="oppo.hourWXRelation==1">
									<img src="../../static/img/shangxialv.png" alt="" class="img_2" v-if="oppo.hourWXRelation!=1">
									<img src="../../static/img/hongyou.png" alt="" class="img_3" v-if="oppo.hourDZWXRelation==1">
									<img src="../../static/img/lvyou.png" alt="" class="img_3" v-if="oppo.hourDZWXRelation!=1">
								</div>
									<div :class="{'bottom_aic flex_col_y':true,'bc_lv':border4}">	
									
									<div class="flex_y">
										<div :class="{'x_aic':true,'bc_lv':oppo.hourTGWXRelation!=1}">{{oppo.wHourTGDZ[0]}}</div>
										<div :class="{'x_aic':true,'bc_lv':oppo.hourDZWXRelation!=1}">{{oppo.wHourTGDZ[1]}}</div>
									</div>
									<div style="fontSize:12px;">{{oppo.wHourWX}}</div>	
						  	</div>
							</div>
                <!--4 end-->
						</div>				
					</div>
					<digv class="flex_start_y" style="marginTop:60px;">
						<div class="sex" style="width:15%;">女</div>
						<div style="width:85%;fontSize:14px;" class="flex_be_y">			
						</div>				
					</digv>
					<div class="flex_start_y" style="marginTop:50px;">
            <div>注:</div>
						<div class="red_aic"></div>
						<div>(红色)为合</div>
						<div class="lv_aic"></div>
						<div>(绿色)为不合</div>
					</div>
			</div>
			<div style="height:5px;background: #f5f5f5;"></div>
			<div class="ks-hun-fu">
				<div class="ks-hun-title">
					八字合婚结果如下
				</div>
				<div class="ks-hun-nian">
					一：{{obj.dZSXExplaint}}（{{obj.dZSXScore}}分）
				</div>
				<div class="ks-hun-nian">
					二：{{obj.nYWXExplaint}}（{{obj.nYWXScore}}分）
				</div>
				<div class="ks-hun-nian">
					三：{{obj.tGWXExplaint}}（{{obj.tGWXSocre}}分）
				</div>
				<div class="ks-hun-nian">
					四：{{obj.yYExplaint}}（{{obj.yYScore}}分）
				</div>
			</div>
			<div style="height:5px;background: #f5f5f5;"></div>
			<div class="ks-hun-fu">
				<div class="ks-hun-title">
					八字解析
				</div>
				<div class="ks-hun-nian">
					一：{{obj.dZSXMeaning}}
				</div>
				<div class="ks-hun-nian">
					二：{{obj.nYWXMeaning}}
				</div>
				<div class="ks-hun-nian">
					三：{{obj.tGWXMeaning}}
				</div>
				<div class="ks-hun-nian">
					四：{{obj.yYMeaning}}
				</div>
			</div>
			<div class="share" @click='toShare()' v-if="sCode==-1">
			<img :src="share" alt="" width="100%"/>
		</div>
		</div>	
</template>
<script>
	import Navs from '../components/nav';
	import httputil from '../httputil'
	import share from '../share';
	export default{
		components:{
			Navs
		},
		data(){
			return{
				arr:[],
				obj:{},
				oppo:{},
				c:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/c.png',
				g:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/g.png',
				border1:null,
				border2:null,
				border3:null,
				border4:null,
				send:null,
				share:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/cesuan/4.png',
				sCode:null				
			}
		},
			created(){		
      document.title='八字合婚'
		},
		mounted(){
		 this.GetRequest()	  
			if (this.sCode != -1) {			
				console.log('有send='+this.send)	
				this.$http.get('http://calendar.lanbobo.cn/Measure/horoscopeMarriage' + '?'+this.send).then(rea => {
					console.log(rea)
					let res=rea.body.content							
				this.arr=res;
				this.obj=res.horoscopeMarriageMatch;
				this.oppo=res.marriageMatch;
        if(this.oppo.yearTGWXRelation==1){
            if(this.oppo.yearDZWXRelation==1){
               if(this.oppo.yearWXRelation==1){
                    this.border1=false
							 }else{
                  this.border1=true
							 }
						}else{
               this.border1=true
						}
				}else{
          this.border1=true
				}
				 if(this.oppo.monthTGWXRelation==1){
            if(this.oppo.monthDZWXRelation==1){
               if(this.oppo.monthWXRelation==1){
                    this.border2=false
							 }else{
                  this.border2=true
							 }
						}else{
               this.border2=true
						}
				}else{
          this.border2=true
				}
				if(this.oppo.dayTGWXRelation==1){
            if(this.oppo.dayDZWXRelation==1){
               if(this.oppo.dayWXRelation==1){
                    this.border3=false
							 }else{
                  this.border3=true
							 }
						}else{
               this.border3=true
						}
				}else{
          this.border3=true
				}
					if(this.oppo.hourTGWXRelation==1){
            if(this.oppo.hourDZWXRelation==1){
               if(this.oppo.hourWXRelation==1){
                    this.border4=false
							 }else{
                  this.border4=true
							 }
						}else{
               this.border4=true
						}
				}else{
          this.border4=true
				}
				})
			}else{
        	httputil.doRequest('/Measure/horoscopeMarriage',{'mBirthday':this.$route.query.mBirthday,'wBirthday':this.$route.query.wBirthday,'mAreaCode':this.$route.query.mAreaCode,'wAreaCode':this.$route.query.wAreaCode},1,this.onSuccess,this.onError,true) 	
			}
		},
		methods:{
			GetRequest() {  
     let url=window.location.hash
		 let subStrs=url.split("?")
		 console.log(subStrs)
		 this.send=subStrs[1]
		 console.log(this.send)
		 let li=this.send.split('&')
		 console.log(li[0])
		var i=li[0].lastIndexOf("code")
	   this.sCode=i
		 console.log(i)
	 },
			onSuccess(res){
			
				this.arr=res;
				this.obj=res.horoscopeMarriageMatch;
				this.oppo=res.marriageMatch;
        if(this.oppo.yearTGWXRelation==1){
            if(this.oppo.yearDZWXRelation==1){
               if(this.oppo.yearWXRelation==1){
                    this.border1=false
							 }else{
                  this.border1=true
							 }
						}else{
               this.border1=true
						}
				}else{
          this.border1=true
				}
				 if(this.oppo.monthTGWXRelation==1){
            if(this.oppo.monthDZWXRelation==1){
               if(this.oppo.monthWXRelation==1){
                    this.border2=false
							 }else{
                  this.border2=true
							 }
						}else{
               this.border2=true
						}
				}else{
          this.border2=true
				}
				if(this.oppo.dayTGWXRelation==1){
            if(this.oppo.dayDZWXRelation==1){
               if(this.oppo.dayWXRelation==1){
                    this.border3=false
							 }else{
                  this.border3=true
							 }
						}else{
               this.border3=true
						}
				}else{
          this.border3=true
				}
					if(this.oppo.hourTGWXRelation==1){
            if(this.oppo.hourDZWXRelation==1){
               if(this.oppo.hourWXRelation==1){
                    this.border4=false
							 }else{
                  this.border4=true
							 }
						}else{
               this.border4=true
						}
				}else{
          this.border4=true
				}
			},
			onError(res){				
				this.$dialog.confirm({            
                    mes: res+'，是否跳转到充值界面？',
                    opts: [
                        {
                            txt: '取消',
                            color: false,
                            callback: () => {
                               this.$router.go(-1)
                            }
                        },
                        {
                            txt: '确定',
                            color: true,
                            callback: () => {
                                this.$router.push('/xufei')
                            }
                        }
                    ]
                });
			},
			oncodeSuccess(res){
             let code=res.object
				 share.toShare('姻缘八字','hehun?code='+code+'&mBirthday='+this.$route.query.mBirthday+'&wBirthday='+this.$route.query.wBirthday+'&mAreaCode='+this.$route.query.mAreaCode+'&wAreaCode='+this.$route.query.wAreaCode,'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/static/share/measure_2.png')
			},
			oncodeError(res){
				 this.$dialog.alert({mes:res})
			},
			toShare(){
				 httputil.doRequest('/Common/getShareCode',{'sType':3},1,this.oncodeSuccess,this.oncodeError,true) 
			
		}
		}
	}
</script>
<style>
	.ks-hun-nian{
		padding:5px 0;
		font-size:15px;
		text-align: justify;
	}
	
	.ks-hun-qin{
		display: flex;
	}
	.ks-hun-kun{
		text-align:center;
		padding: 3px;
	}
	.ks-hun-kun>div{
		display: flex;
		text-align: center;
	}
	.ks-hun-kun>div>div{
		text-align: center;
		display: inline;
		flex:1;
	}
	
	.ks-hun-kun>div>div>img{
		display: inline-block;
		/*margin-left:20px;*/
	}
	.ks-hun-qin>div{
		padding: 5px;
		flex:1;
		font-size:14px;
	}
	.ks-hun-title{
		color:#E4393C;
		font-size:16px;
		padding: 5px 0;
	}
	.ks-hun-fu{
		padding: 15px 30px;

	}
	.ks-hun-he{
		font-size: 10px;
	}
	.ks-hun-head{
		height:180px;
		background: #E4393C;
	}
	.ks-hun-wai{
		width: 150px;
		height: 150px;
		margin:auto;
		background: rgba(255,144,144,.2);
		border-radius:50%;
		padding: 20px;
	}
	.ks-hun-nei{
		width: 100%;
		height: 100%;
		background: #E4393C;
		border-radius: 50%;
		text-align: center;
		color:#E4393C;
		background: white;
	}
	.ks-hun-code{
		font-size:30px;
		padding-top:0px ;
	}
	.flex_y{
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.flex_start_y{
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}
	.flex_be_y{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}
	.flex_col_y{
		display: flex;
		flex-direction: column;	
	align-items: center;
	justify-content:center;
	}
	.sex{
		font-size: 16px;
		font-weight: bold;
	}
	.d_aic{
   width: 55px;
	 border:1px solid #f53936;
	 height:55px;
	 border-radius: 50%;
	}
	.bc_lv{
		border:1px solid #009b4c !important;
	}
	.bottom_aic{
		width: 55px;
	  border:1px solid #f53936;
	  height:55px;
	  border-radius: 50%;
		position: absolute;
		top:95px;
	}
	.x_aic{
		width:20px;
		height:20px;
		text-align: center;
		border:1px solid #f53936;
		border-radius: 50%;
	}
	.img_1,.img_3{
		position: absolute;
		
		height:60px;
		top:-12px;
	}
	.img_1{
		left:-4px;
	}
	.img_3{
			left:50px;
		
	}
	.img_2{
		position: absolute;
		left:22px;
		height:40px;
		top:0;
	}
	.red_aic{
		margin-left: 10px;
		height:10px;
		width:10px;
		border-radius: 50%;
		background: #f53936;	
	}
	.lv_aic{
		margin-left: 10px;
		height:10px;
		width:10px;
		border-radius: 50%;
		background: #009b4c;
	}
</style>