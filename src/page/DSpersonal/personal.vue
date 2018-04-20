<template>
  <div class="full-container">
    <!--<div class="jiesaoHeader">
      <div style="fontSize:18px;">个人介绍</div>
      <div class="headerRight" @click='toResult()'>完成</div>
    </div>-->
    <div class="personalHeader" style="padding:5px 15px;border-top:1px solid #e9e9e9;">
      <div class="personalHeader">
        <img src="http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/Dspersonl/1.png" alt="" class="personalImg">
        <input type="text" v-model="name" class="nameInput">
     
      </div>
      <img :src="list.userInfo.icoUrl" alt="" style="width:50px;">
    </div>
    <ul style="border-top:5px solid #e9e9e9;border-bottom:5px solid #e9e9e9;">
      <li class="boxPadding personalLi">
        <div class="personalLi">
          <img src="http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/Dspersonl/2.png" alt="" class="personalImg">
          <div class="imgPadding">性别</div>
        </div>
        <div class="personalLi">
          <label for="aa" style="position:relative;" class="personalLi">女
            <input id='aa' type="radio" style="opacity:0;" v-model="sex" value='0'>
            <span class="sexRadio"></span>
          </label>
          <label for="bb" style="margin-left:30px;position:relative;" class="personalLi">男
            <input id="bb" type="radio" style="opacity:0;" v-model="sex" value='1'>
            <span class="sexRadio"></span>
          </label>
  
        </div>
      </li>
      <li class="boxPadding personalLi" style="border-top:1px solid #e9e9e9;border-bottom:1px solid #e9e9e9;">
        <div class="personalLi">
          <img src="http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/Dspersonl/3.png" alt="" class="personalImg">
          <div class="imgPadding">出生时辰</div>
        </div>
        <div @click='show3=true'>
          <div>{{birth}}</div>
        </div>
      </li>
      <li class="boxPadding personalLi" style="border-top:1px solid #e9e9e9;border-bottom:1px solid #e9e9e9;">
        <div class="personalLi">
          <img src="http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/Dspersonl/4.png" alt="" class="personalImg">
          <div class="imgPadding">出生地点</div>
        </div>
        <div @click='show2=true'>
          <div>{{addr}}</div>
        </div>
      </li>
     
    </ul>
  
    <ul style="border-bottom:5px solid #e9e9e9;">
			 <li class="boxPadding personalLi" style="border-top:1px solid #e9e9e9;border-bottom:1px solid #e9e9e9;">
        <div class="personalLi">
          <img src="http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/Dspersonl/5.png" alt="" class="personalImg">
          <div class="imgPadding">个人介绍</div>
        </div>
        <div style="flex:1">
          <div style="color:#aaa;width:100%;white-space:nowrap;text-overflow: ellipsis;overflow:hidden;">{{list.registerInfo.masterDesc}}</div>
        </div>
      </li>
      <li class="boxPadding personalLi" style="border-top:1px solid #e9e9e9;border-bottom:1px solid #e9e9e9;">
        <div class="personalLi">
          <img src="http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/Dspersonl/6.png" alt="" class="personalImg">
          <div class="imgPadding">真实姓名</div>
        </div>
        <div>
          <div style="color:#aaa;">{{list.registerInfo.realName}}</div>
        </div>
      </li>
      <li class="boxPadding personalLi" style="border-top:1px solid #e9e9e9;border-bottom:1px solid #e9e9e9;">
        <div class="personalLi">
          <img src="http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/Dspersonl/7.png" alt="" class="personalImg">
          <div class="imgPadding">等级</div>
        </div>
        <div>
          <div style="color:#aaa;">{{level}}</div>
        </div>
      </li>
			
      <li class="boxPadding personalLi" style="border-top:1px solid #e9e9e9;border-bottom:1px solid #e9e9e9;">
        <div class="personalLi">
          <img src="http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/Dspersonl/8.png" alt="" class="personalImg">
          <div class="imgPadding">申请时间</div>
        </div>
        <div>
          <div style="color:#aaa;">{{list.registerInfo.registerTime}}</div>
        </div>
      </li>
      <li class="boxPadding personalLi" style="border-top:1px solid #e9e9e9;border-bottom:1px solid #e9e9e9;">
        <div class="personalLi">
          <img src="http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/Dspersonl/9.png" alt="" class="personalImg">
          <div class="imgPadding">电话号码</div>
        </div>
        <div>
          <div style="color:#aaa;">{{list.registerInfo.tel}}</div>
        </div>
      </li>
      <li class="boxPadding personalLi" style="border-top:1px solid #e9e9e9;border-bottom:1px solid #e9e9e9;">
        <div class="personalLi">
          <img src="http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/Dspersonl/10.png" alt="" class="personalImg">
          <div class="imgPadding">身份证号</div>
        </div>
        <div>
          <div style="color:#aaa;">{{list.registerInfo.cardID}}</div>
        </div>
      </li>
    </ul>
    <ul>
      <li class="boxPadding personalLi" style="border-top:1px solid #e9e9e9;border-bottom:1px solid #e9e9e9;">
        <div class="personalLi">
          <img src="http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/Dspersonl/11.png" alt="" class="personalImg">
          <div class="imgPadding">支付宝</div>
        </div>
        <div>
          <div @click='toPay(1)' style="text-decoration:underline">{{aLiPay}}</div>
        </div>
      </li>
      <li class="boxPadding personalLi" style="border-top:1px solid #e9e9e9;border-bottom:1px solid #e9e9e9;">
        <div class="personalLi">
          <img src="http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/Dspersonl/12.png" alt="" class="personalImg">
          <div class="imgPadding">微信</div>
        </div>
        <div>
          <div @click='toPay(2)' style="text-decoration:underline">{{weChatPay}}</div>
        </div>
      </li>
    </ul>
   <div style="padding: 15px;" class="ks-p">
			<div style="margin:20px 0;background:#e4393c;color:#fff;height:35px;lineHeight:35px;textAlign:center;borderRadius:5px;" @click='toResult()'>确认修改</div>
		</div>
    <yd-popup v-model="show3" position="center" width="80%">
      <calendar @getDate="getD" @can="getC"></calendar>
    </yd-popup>
  
    <yd-popup v-model="show2" position="center" width="80%">
      <addr @getVal='getAddr' @cancel='getCancel'></addr>
    </yd-popup>
  </div>
</template>
<script>
	import calendar from '../../components/calendar'
	import addr from '../../components/addr'
	import httputil from '../../httputil';
	import logutil from '../../logutil'
	export default {
		name: 'DSpersonal',
		data() {
			return {
				name: '',
				sex: '1',
				birth: '',
				addr: '',
				jiesao: '',
				show2: false,
				show3: false,
				weChatPay: '',
				aLiPay: '',
				list: '',
				code: '',
				level: '',
				id: '',
				ty: ''
			}
		},
	created(){
		document.title='大师个人资料'		
		},
		mounted: function () {
  	     this.$nextTick(()=>{
  		   httputil.doRequest('/Master/info', null, 1, this.onDsSuccess, this.onDsError, true)
  	    })
  },
		components: {
			calendar,
			addr
		},
		watch:{
			addr(val){
				this.addr=val;		
				var t=val.replace(/[^0-9]/ig,""); 				
         if(t){
					 this.code=t			
				 }else{
            return	
				 }			
			}
		},
		methods: {
			onDsError(res){
			this.$dialog.alert({ mes:res});
			},
			onDsSuccess(res) {
				this.list = res
				this.addr = res.userInfo.birthArea
				this.code =res.userInfo.areaCode
				this.birth = res.userInfo.birthday
				let levelNum = res.registerInfo.masterLevel
			
				if (levelNum == 1) {
					this.level = '初级'
				} else if (levelNum == 2) {
					this.level = '中级'
				} else {
					this.level = '高级'
				}
				if (res.account.aLiPay) {
					this.aLiPay = res.account.aLiPay
				} else {
					this.aLiPay = '点击绑定'
				}
				if (res.account.weChatPay) {
					this.weChatPay = res.account.weChatPay
				} else {
					this.weChatPay = '点击绑定'
				}
				this.name = res.userInfo.name
				this.sex = res.userInfo.sex
			},
			getD: function(val) {
				this.show3 = false;
				var date=new Date()
				var year=date.getFullYear()
			  var mo= date.getMonth() + 1;
				var ri = date.getDate();
				var a=val.split(' ')[0]
			
				var birthday=a.split('-')
			
				if(year-birthday[0]>18&&year-birthday[0]<80){
				   this.birth = val;
				}else if(year-birthday[0]==18){
          if(mo-birthday[1]>0){
            this.birth = val;
					}else if(mo-birthday[1]==0){
            if(ri-birthday[2]>-1){
							this.birth = val;
						}else{
							this.$dialog.alert({ mes: '您的年龄须在18岁-80岁之间' });
						}
					}else{
						this.$dialog.alert({ mes: '您的年龄须在18岁-80岁之间' });
					}
				}else{
						this.$dialog.alert({ mes: '您的年龄须在18岁-80岁之间' });
				}
			},
			getAddr: function(val) {
				this.show2 = false;
				this.addr = val;
			},
			getCancel() {
				this.show2 = false;
			},
			getC() {
				this.show3 = false;
			},
			// toUpdate() {
			// 	sessionStorage.setItem('jieshao',this.list.registerInfo.masterDesc)
			// 	this.$router.push('/updateJiesao')
			// },
			toPay(type) {
				if (type == 1) {
					this.$router.push('/aLiPay?type=' + 1 + '&num=' + this.aLiPay)
				} else {
					this.$router.push('/aLiPay?type=' + 2 + '&num=' + this.weChatPay)
				}
			},
			toResult() {
				logutil.i('DSresult',this.code)
			   
				if (this.name.trim()) {
					httputil.doRequest('/Myself/editUserInfo', {'birthday':this.birth,'sex':this.sex,'name':this.name,'areaCode':this.code}, 1, this.onDresultSuccess, this.onDresultError, true)
				} else {
					this.$dialog.alert({
						mes: '请输入昵称！'
					})
				}
			},
			onDresultSuccess(res){
				if(res.code!=200){
            	this.$dialog.alert({
								mes: res.message
							})				
				}else{
          	this.$dialog.alert({
								mes: '资料修改成功！',
								callback:()=>{
                   window.YiDao.bussinessDistribute(4,"{'windowID':10004}")				
								}
							})				 
				}		
						
			},
			onDresultError(res){
		   this.$dialog.alert({
								mes:res
							})
			}
		}
	}
</script>
<style scoped>
	.full-container {
		height: 100%;
		color: #666160;
		font-size: 15px;
	}
	
	.personalHeader {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	/*每个li的padding*/
	
	.boxPadding {
		padding: 10px 15px;
		height: 50px;
	}
	/*名称的padding*/
	
	.imgPadding {
		padding: 0 10px 0 15px;
		width: 110px;
	}
	
	.personalImg {
		width: 20px;
		height: 20px;
	}
	
	.personalLi {
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}
	
	.birthInput {
		height: 30px;
		border: none;
	}
	
	.sexRadio {
		display: inline-block;
		border: 1px solid #aaa;
		height: 12px;
		width: 12px;
		border-radius: 50%;
		margin-left: 10px;
	}
	
	input[type="radio"] {
		position: fixed;
	}
	
	input[type="radio"]:checked+.sexRadio {
		background: red;
	}
	
	.nameInput {
		margin-left: 15px;
		height: 30px;
		border: none;
		color: #666160;
		outline: none;
		-webkit-appearance: none;
		font-size: 17PX;
	}
	
	.jiesaoHeader {
		color: #666160;
		height: 50px;
		border-bottom: 1px solid #e9e9e9;
		position: relative;
		line-height: 35px;
		text-align: center;
		padding: 7px 0;
	}
	
	.headerRight {
		position: absolute;
		right: 10px;
		top: 10px;
		color: #1452E3;
	}
</style>