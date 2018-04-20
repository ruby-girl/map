<template>
	<div class="container disradio">
	
		<div style="padding: 15px;">
			<div class="ks-fen-tou" style="background:white;height:20px;">
				<div>
					<span class="ks-fen-span" style="height:20px"></span>
				</div>
				<div style="padding-left:10px;line-height: 20px;font-size:15px;font-weight: 800;">
					个人资料
				</div>
			</div>
		</div>
		<div style="padding: 15px;">
			<div class="ks-su-form">
				<label for="">电话</label>
				<input type="text" style="height: 40px;" v-model='phone'/>
			</div>
		</div>
		<div style="height:8px;background: #f5f5f5;"></div>
		<div style="padding: 8px 15px">
			<div class="ks-fen-tou" style="background:white;height:20px;">
				<div>
					<span class="ks-fen-span" style="height:20px"></span>
				</div>
				<div style="padding-left:10px;line-height: 20px;font-size:15px;font-weight: 800;">
					投诉说明
				</div>
			</div>
			
		</div>
		<yd-cell-group>
		        <yd-cell-item>
		            <yd-textarea slot="right" placeholder="请详细描述您的问题，这样大师才能完整的解答。" v-model="content"></yd-textarea>
		        </yd-cell-item>
		</yd-cell-group>
		<div style="height:8px;background: #f5f5f5;"></div>
		<div style="padding: 8px 15px">
			<div class="ks-fen-tou" style="background:white;min-height:40px;">
				<div>
					<span class="ks-fen-span" style="height:20px;marginTop:10px;"></span>
				</div>
				<div style="padding-left:10px;line-height: 40px;font-size:15px;font-weight: 800;">
					上传凭证
					
				</div>
				<img :src="toJava" alt="" style="width:50px;height:40px;margin-left:30px;" v-if="toJava==''?false:true"/>
				<div style="line-height: 40px;margin-left: 20px;">
					<div style="display: inline-block;font-size:13px;padding:0 15px; border:1px solid #ccc;position:relative">{{inputTxt}}
							<add :type="4" @getURL="getPic" style="position:absolute;top:0;left:5px;"></add>
					</div>
				
				</div>
			</div>
			
		</div>
		<div style="height:8px;background: #f5f5f5;"></div>
		<div style="padding: 15px;">
			<btn btnMsg='提交投诉申请' @click.native='reser()'></btn>
		</div>
	</div>
</template>
<script type="text/javascript">
	import navbar from '../../components/nav';
	import btn from '../../components/button';
	import prox from '../../router/proxy'
	import httputil from '../../httputil';
	import add from '../../components/Allimg';
	export default {
		components: {
			navbar,
			btn,add
		},
		data() {
			return {
				value: 1,
				phone: '',
				js: '',
				content: '',
				toJava:'',
				
				type:'',
				inputTxt:'上传图片'
			}
		},
		created() {	
			document.title='投诉中心'
		
			this.type=navigator.userAgent.toLowerCase(); 
		},
		methods: {
			getPic(r){
        this.toJava=r
			},
			reser() {
				if(this.content){
            var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(14[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
				if(!myreg.test(this.phone)){
					this.$dialog.toast({
	                    mes: '请输入正确的手机号码，方便我们与您联系！',
	                    timeout: 1500,
                	});
          }else{		
            httputil.doRequest('/Commont/complaint', {'rId':this.$route.query.mid,'contact':this.phone,'content':this.content,'pirctruePath':this.toJava}, 1, this.onSuccess, this.onError, true) 
					}    
				}else{
          this.$dialog.alert({
		      	mes: '请填写投诉内容'})
				}
          
	},
	onSuccess(res){
		this.$dialog.alert({
			mes: '投诉成功',
           callback: () => {
                this.$router.push('/masterDetail?mid='+this.$route.query.mid)  
                       }
           	});
	},onError(res){
		this.$dialog.toast({
			mes: res,
           timeout: 1500,
           	});
	}
	
			}
	}
</script>
<style>
	.ks-su-form{
		margin-bottom:15px;
	}
	.disradio .m-cell-box{
		margin-bottom: 0;
	}
	.ks-su-form>label{
		margin-right:20px;
		font-size:15px;
	}
	.ks-su-form>input{
		width: 80%;
		outline: none;
		border:none;
		border:1px solid #ccc;
		border-radius:5px;
		padding: 0 8px;
		font-size:15px;
		-webkit-appearance:none;
	}
</style>