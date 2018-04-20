<template>
	<div class="container full-container">
	
	<div class="personalHeader" style="padding:5px 15px;border-top:1px solid #e9e9e9;">
      <div class="personalHeader">
        <img src="http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/Dspersonl/1.png" alt="" class="personalImg">
        <input type="text" v-model="name" class="nameInput">
  
      </div>
      <!--<img :src="headURL" alt="" style="width:50px;">-->
			 <div class="addImg" style="margin:0 4%;position:relative;">
							<add :type="3" @getURL="getPi" style="position:absolute;top:0;left:0;"></add>
              <img :src="headURL" alt="" style="width:50px;">
          </div>
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
		<div style="padding: 15px;" class="ks-p">
			<div style="marginTop:20px;background:#e4393c;color:#fff;height:35px;lineHeight:35px;textAlign:center;borderRadius:5px;" @click='toResult()'>完成</div>
		</div>
		  <yd-popup v-model="show3" position="center" width="80%">
      <calendar @getDate="getD" @can="getC"></calendar>
    </yd-popup>
  
    <yd-popup v-model="show2" position="center" width="80%">
      <addr @getVal='getAddr' @cancel='getCancel'></addr>
    </yd-popup>
	</div>
</template>
<script type="text/javascript">
	import navbar from '../../components/nav';
	import calendar from '../../components/calendar';
	import httputil from '../../httputil';
	import addr from '../../components/addr'
	import add from '../../components/Allimg';
	export default{
		components:{
			navbar,calendar,addr,add
		},
		created(){
      document.title='个人资料'
		},	
		data(){
			return{
				headURL:'',
				birth:'',
				name:'',
				sex:'',
				addr:'',
				code:'',
				show3:false,
				show2:false,
				ti:'h',
				hd:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/person/4.png',
				hd1:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/person/5.png',
				hd2:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/person/6.png',
				hd3:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/person/7.png',
				hd4:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/person/8.png',
				hd5:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/person/3.png',
			}
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
		methods:{
			getPi(m){
        if(m){
					this.headURL=m
				}else{
          return
				}
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
			onSuccess(res){
			
				this.name=res.uName
				this.addr=res.areaName
				this.code=res.areaCode
				this.birth=res.birthday
				this.sex=res.sex
				this.headURL=res.headURL
					
			},
			onError(res){
				this.$dialog.alert({
				  mes:res
				})
			},
			toResult(){
				console.log('reslut'+this.code)
				if (this.name.trim()) {
					httputil.doRequest('/Myself/editUserInfo', {'birthday':this.birth,'sex':this.sex,'name':this.name,'areaCode':this.code,'pictruePath':this.headURL}, 1, this.onDresultSuccess, this.onDresultError, true)
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
			
		},
		mounted: function () {
  	    this.$nextTick(()=>{
			httputil.doRequest('/Myself/userSimpleInfomation', null, 1, this.onSuccess, this.onError, true)
		})
	}
	}
</script>
<style>	
	.ks-p>p{
		font-size: 15px;
		padding: 8px 0;
	}
	.full-container {
		height: 100%;
		color: #666160;
		font-size: 15px;
	}
	.boxPadding{
			padding: 10px 15px;
		height: 50px;
		
	}
	.personalHeader {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
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
</style>