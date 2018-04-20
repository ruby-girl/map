<template>
  <div>
   
   <div class="start"> 
     <div class="start1">
       <img width="80%" src="http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/name/name.png" alt="">
       <div class="start1-text">测试后你将看到以下内容</div>
     </div>
     <div class="start2">
       <img width="90%" src="http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/name/4.png" alt="">
      </div>
    </div>
    <!--小图标-->
    <ul class="nameUl">
      <li class="nameLi" style="width:25%;">
        <img src="http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/name/5.png" alt="" style="margin-right:5px;">
        <span>总格</span>
      </li>
      <li class="nameLi" style="width:25%;">
        <img src="http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/name/6.png" alt="" style="margin-right:5px;">
        <span>家庭</span>
      </li>
      <li class="nameLi" style="width:25%;">
        <img src="http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/name/7.png" alt="" style="margin-right:5px;">
        <span>基业</span>
      </li>
      <li class="nameLi" style="width:25%;">
        <img src="http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/name/8.png" alt="" style="margin-right:5px;">
        <span>健康</span>
      </li>
      <li class="nameLi" style="width:30%;">
        <img src="http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/name/9.png" alt="" style="margin-right:5px;">
        <span>成功运</span>
      </li>
      <li class="nameLi" style="width:33%;">
        <img src="http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/name/10.png" alt="" style="margin-right:5px;">
        <span>姓名含义</span>
      </li>
      <li class="nameLi" style="width:33%;">
        <img src="http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/name/11.png" alt="" style="margin-right:5px;">
        <span>三才数理</span>
      </li>
    </ul>
    <div class="ks-cai-form">
			<div class="ks-cai-input ks-flex">
				<div class="ks-cai-date">个人性别 </div>
				<div class="ks-first">
					<div>
						<label style="display: flex;" class="ks-cai-label">
							<div>
								男
							</div>
							<div>
								<input type="radio" name="" id="" value="1" v-model="sex"/>
								<span>
									<i></i>
								</span>
							</div>
							<div style="padding-top:4px;">
								<img :src="img1" alt="" width="30px"/>
							</div>
						</label>
					</div>
					<div style="padding-left:30px;">
						<label style="display: flex; " class="ks-cai-label">
							<div>
								女
							</div>
							<div>
								<input type="radio" name="" id="" value="0" v-model="sex"/>
								<span>
									<i></i>
								</span>
							</div>
							<div style="padding-top:4px;">
								<img :src="img2" alt="" width="30px"/>
							</div>
						</label>
					</div>
				</div>
			</div>
      <div class="ks-cai-input">
				<label for="" class="ks-cai-da">
					<div class="ks-cai-date">姓名</div>
					<div style="margin-left:25px;position:relative;">
						<div  class="t-input"></div>
					  <input type="text" name="" id="" value=""   v-model="uname" />
					</div>
				</label>
			</div>
    </div>
    <!--btn -->
		<div class="ks-cai-input">
    	<btn  btnMsg="开始测算" @click.native="toResult()"></btn>
		</div>
		<div class="share" @click='toShare()' v-if="aCode==-1">
			<img :src="share" alt="" width="100%"/>
		</div>
  </div>
</template>
<script>
import Tit from '../../components/nav'
import btn from '../../components/button'
import httputil from '../../httputil';
import share from '../../share';
var img1="http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/name/woman.png"
 var img2="http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/name/man.png"

export default {
  name: 'num',
  data () {
    return {
        img1:img1,
			  img2:img2,
				sex: 1,
				uname: '',
				id:'',
				share:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/cesuan/4.png',
				sCode:null
    }
  },
	created(){
      document.title='姓名测算'
			this.GetRequest()
		},	
  components: {
    Tit,btn
  },
	methods: {
			GetRequest() {
			let url = window.location.hash
			var i = url.lastIndexOf("code")
			this.sCode = i
		
		},
		oncodeSuccess(res){
             let code=res.object
				 share.toShare('姓名测算','startName?code='+code,'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/static/share/measure_7.png')
			},
			oncodeError(res){
				 this.$dialog.alert({mes:res})
			},
			toShare(){
				 httputil.doRequest('/Common/getShareCode',{'sType':8},1,this.oncodeSuccess,this.oncodeError,true) 
			
		},
		toResult() { 
			var  reg=/^[\u4e00-\u9fa5]+$/;
			if(!this.uname.match(reg)){
				this.$dialog.alert({ mes: '请输入正确的姓名！'});
			}else{
			
           this.$router.push('/name?sex='+this.sex+'&name='+this.uname);	       
			}
		}
	}
}

</script>
<style scoped>
.start{
  display: flex;
  padding: 20px 5px 0 10px;
  justify-content: space-between;
   border-top:1px solid #aaa;
}
.share{
		width: 45px;
		height: 45px;
		position: fixed;
		top:90%;
		right:15px;
	}
.start1{
  flex-shrink:2;
  padding-top: 20px;
}
.start2{
  flex-shrink:1;
  text-align: right;
}
.start1-text{
  font-size: 19px;
  white-space:nowrap;
  padding-top: 10px;
}
.nameLi{
  list-style: none;
  font-size: 15px;
  padding:10px 5px 0 10px;
	display:flex;
}
.nameLi img{
  height:17px;
  width:17px;
}
.nameUl{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  list-style: none;
}
.ks-cai-date{
		line-height: 40px;
    font-size:18px;
    padding-right: 20px;
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
		padding:0 15px;
	}
	.ks-cai-input input{
		padding: 0px 8px;
		/*box-sizing: border-box;*/
		height: 35px;
		outline: none;
		flex:1;
		font-size: 15px;
		border-radius:8px;
		border:none;
    border:1px solid #ccc;
		border:none;
	  position: absolute;
		top:0;
	}
  .weixin{
 padding-left: 3%;
 color:#aaa;
 margin-top: 6px;
 font-size: 13px;
 margin-bottom:50px;
}
.t-input{
	padding: 0px 8px;
		height: 35px;
		outline: none;
		flex:1;
		font-size: 15px;
		border-radius:8px;
    width:160px;
    border:1px solid #ccc;
		
}
	
</style>
