<template>
	<div class="container">
		
		<div class="ks-yunshi-nav">
			<div class="" v-for='(it,index) in imgs' style="box-sizing: border-box;" @click='selectZodiac(it.id,it.text,it.img,index)'>
				<div :class="['ks-yunshi-img',{bg:isact=num==index?true:false}]" >
					<div>
						<img :src="it.img" alt=""  width="100%"/>
					</div>
					<div class="ks-yunshi-text">{{it.text}}</div>
			    </div>
			</div>
		</div>
		<div v-show='show'>
			<div style="height: 10px;background: #f5f5f5;"></div>
			<div class="ks-yunshi-title" @click="toShare()">
				请选择出生年份
			</div>
			<div style="padding:15px;" class="ks-yd-radio">
				<!--<label class='ks-yunshi-radio' v-for='i in 5'>
					<span style="display: inline-block;height: 17px;font-size:17px;">{{i}}.999</span>					
					<input type="radio" name="" id="" :value="i" v-model='res'/>
					<span></span>
				</label>-->
				<yd-radio-group v-model="val" color="#F00">
			        <yd-radio :val="it.value" v-for='it in options' key='0'></yd-radio>
			        
			    </yd-radio-group>
			</div>
			<div style="padding:15px;" @click="ok()">
				<btn btnMsg='确定'></btn>
			</div>
		</div>
		<div class="ks-yunshi-model" v-show='wrap' @click="close()">
			
		</div>
		<div :class="['ks-yunshi-alert',{isshow:wrap,notshow:hehe}]" v-show='wrap'>
			<div>
				<div class="ks-wrap-head">
					<div class="ks-title">
						<div style="width: 40px;margin:auto">
							<img :src="isImg" alt="" width="40px"/>
						</div>
						<div style="font-size:14px;">{{this.datas}}</div>
					</div>
				</div>
			</div>
			<div>
				<div class="ks-yunshi-content">
					<div class="ks-yunshi-small">
						流年生肖歌
					</div>
					<div class="ks-yunshi-year">
						{{obj.poetry}}
					</div>
				</div>
				<div class="ks-yunshi-content">
					<div class="ks-yunshi-small">
						流年运势
					</div>
					<div class="ks-yunshi-year">
						{{obj.luckExplaint}}
					</div>
				</div>
				<div class="ks-yunshi-content">
					<div class="ks-yunshi-small">
						当年所犯星宿
					</div>
					<div class="ks-yunshi-year" v-for='ie in obj.starsInfo'>
						<span style="color:#E4393C;">{{ie.star}}</span> {{ie.explaint}}
					</div>
				</div>
			</div>
		</div>
		<div class="share" @click='toShare()' v-if="sCode==-1">
			<img :src="share" alt="" width="100%"/>
		</div>
	</div>
</template>
<script>
	var now = new Date();
    var year = now.getFullYear()+1-20;
	import Navs from '../components/nav';
	import Btn from '../components/button';
	import httputil from '../httputil';
import share from '../share';

	var imgs=[
	{img:"http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/yunshi/1.png",text:'子·鼠',id:4},{img:"http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/yunshi/2.png",text:'丑·牛',id:5},
	{img:"http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/yunshi/3.png",text:'寅·虎',id:6},{img:"http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/yunshi/4.png",text:'卯·兔',id:7},
	{img:"http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/yunshi/5.png",text:'辰·龙',id:8},{img:"http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/yunshi/6.png",text:'巳·蛇',id:9},
	{img:"http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/yunshi/7.png",text:'午·马',id:10},{img:"http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/yunshi/8.png",text:'未·羊',id:11},
	{img:"http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/yunshi/9.png",text:'申·猴',id:0},{img:"http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/yunshi/10.png",text:'酉·鸡',id:1},
	{img:"http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/yunshi/11.png",text:'戌·狗',id:2},{img:"http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/yunshi/12.png",text:'亥·猪',id:3}]
	export default{
		components:{
			Navs,Btn
		},
		data(){
			return{
				imgs:imgs,
				show:false,
				res:'1',
				datas:'',
				wrap:false,
				isImg:'',
				hehe:false,
				showAlert:false,
				val:'',
				showSelect:true,
				options:[],
				obj:{},
				isact:false,
				num:-1,
				share:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/cesuan/4.png',
				sCode:null
			}
		},
			created(){		
      document.title='2017运势'
	 this.GetRequest() 
		},
		methods:{
			ok(){
				if(this.val==''){
					this.$dialog.toast({
                    mes: '请选择年份！',
                    timeout: 1500,
                	});
				}else{
					this.wrap=true;
					this.obj={};
			    httputil.doRequest('/Measure/yearLuck',{'birthYear':this.val},1,this.onSuccess,null,false) 
				}
								
			},
			onSuccess(res){
				this.obj=res
			},
			close(){				
				this.hehe=true;
				setTimeout(()=>{
					this.wrap=false;
					this.hehe=false;
				},500)
			},
			 selectZodiac:function (id,a,b,d) {
                var id = id;
                this.datas=a;
				this.show=true;
				this.isImg=b;
                this.num=d;
                this.options.length = 0;
                this.val = '';
                for(var start = 1948;start <= year;start++ ){
                    var zodiac = start % 12;
                    if(id == 4 && zodiac == 4){
                        this.options.push({value:start});
                    }else if(id == 5 && zodiac == 5){
                        this.options.push({value:start});
                    }else if(id == 6 && zodiac == 6){
                        this.options.push({value:start});
                    }else if(id == 7 && zodiac == 7){
                        this.options.push({value:start});
                    }else if(id == 8 && zodiac == 8){
                        this.options.push({value:start});
                    }else if(id == 9 && zodiac == 9){
                        this.options.push({value:start});
                    }else if(id == 10 && zodiac == 10){
                        this.options.push({value:start});
                    }else if(id == 11 && zodiac == 11){
                        this.options.push({value:start});
                    }else if(id == 0 && zodiac == 0){
                        this.options.push({value:start});
                    }else if(id == 1 && zodiac == 1){
                        this.options.push({value:start});
                    }else if(id == 2 && zodiac == 2){
                        this.options.push({value:start});
                    }else if(id == 3 && zodiac == 3){
                        this.options.push({value:start});
                    }
                }
            },
			oncodeSuccess(res){
             let code=res.object
				 share.toShare('测算全年运势','yunshi?code='+code,'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/static/share/measure_0.png')
			},
			oncodeError(res){
				 this.$dialog.alert({mes:res})
			},
			toShare(){
				 httputil.doRequest('/Common/getShareCode',{'sType':1},1,this.oncodeSuccess,this.oncodeError,true) 
			
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
	.ks-yunshi-alert{
		display: flex;
		flex-direction: column;
	}
	.share{
		width: 45px;
		height: 45px;
		position: fixed;
		top:65%;
		right:15px;
	}
	.bg{
		background: #f5f5f5;
	}
	.ks-yunshi-alert>div:nth-child(2){
		flex:1;
		overflow: auto;
	}
	.ks-yd-radio .m-radio{
		padding: 5px;
	}
	.isshow{
		animation: .5s linear got;
		animation-fill-mode: forwards;
	}
	@keyframes got{
		from{
			transform: scale(0);
		}to{
			transform: scale(1);
		}
	}
	.notshow{
		animation: .5s linear gots;
		animation-fill-mode: forwards;
	}
	@keyframes gots{
		from{
			transform: scale(1);
		}to{
			transform: scale(0);
		}
	}
	.ks-yunshi-content{
		padding: 10px;
		z-index: 1000;
		/*width:100%;*/
	}
	.ks-yunshi-small{
		font-size: 15px;
		font-weight: 800;
		color: #E4393C;
		padding: 5px 0;
	}
	.ks-yunshi-year{
		font-size: 14px;
		padding: 5px 0;
	}
	.ks-title{
		position:absolute;
		top:20px;
		left:50%;
		width: 120px;
		height:60px;
		margin-left:-60px;
		background: white;
		border-top-left-radius: 500%;
		border-top-right-radius: 500%;
		text-align: center;
		z-index: 10;
	}
	.ks-wrap-head{
		height:80px;
		background: #E4393C;
		padding-top: 20px;
	}
	.ks-yunshi-alert{
		width: 80%;
		height: 80%;
		position: fixed;
		top:10%;
		left: 10%;
		z-index: 777;
		background: white;
		border-radius: 10px;
		overflow: auto;
		
	}
	.ks-yunshi-model{
		background:rgba(0,0,0,0.5);
		position: fixed;
		top:0;
		width: 100%;
		height: 100%;
		z-index: 22;
	}
	.ks-yunshi-radio{
		display: inline-block;
		width: 33.33%;
		text-align: center;
		padding: 10px 0;
		line-height: 17px;
		vertical-align: middle;

	}
	.ks-yunshi-radio>input{
		position: absolute;
		left:-9999px;
	}
	.ks-yunshi-radio>input+span{
		display: inline-block;
		width: 17px;
		height: 17px;
		border-radius:50%;
		border:1px solid #ccc;
		box-sizing: border-box;
		line-height: 20px;
		transition:.5 linear;
	}
	.ks-yunshi-radio>input:checked+span{
		background: #E4393C;
		transition:.5 linear;
	}
    .ks-yunshi-text{
    	font-size: 13px;
    }
	.ks-yunshi-nav{
		/*padding: 15px;*/
		width:100%;
		box-sizing: border-box;
		border-bottom: 1px solid #f5f5f5;
	}
	.ks-yunshi-nav:after{
		content: "";
		display: block;
		clear: both;
	}
	.ks-yunshi-title{
		padding: 15px;
		font-size: 16px;
		text-align: center;
		border-bottom: 1px solid #f5f5f5;
	}
	.ks-yunshi-nav>div{

		width: 25%;
		float: left;
		text-align: center;
	}
	.ks-yunshi-img{
		padding: 15px;
	}
	.ks-yunshi-img:active{
		opacity: 0.7;
	}
</style>