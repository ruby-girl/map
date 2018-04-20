<template>
	<div>
		<div v-show='!showCom' class="ks-none">
			{{msg}}
		</div>
		<div style="" v-show='showCom'>
			<div style="padding: 15px;font-size:15px;">
				总好评率：
				<span style="font-size:20px;color:#E4393C;">{{bfb.faverote*100}}%</span>
				<span>共{{bfb.totalComment}}次评价</span>
			</div>
			<div class="ks-ce-p" style="padding:10px 15px;">
				<button :class="{isbtn:num==4?true:false}" @click='getComment(4)'>所有</button>
				<button :class="{isbtn:num==3?true:false}" @click='getComment(3)'>好评</button>
				<button :class="{isbtn:num==2?true:false}" @click='getComment(2)'>中评</button>
				<button :class="{isbtn:num==1?true:false}" @click='getComment(1)'>差评</button>
			</div>
			<div v-if="comment.length>0" class="ks-ce-comment" v-for='it in comment' style="padding: 10px 0;border-bottom:1px solid #f5f5f5;" :key="">
				<div class="ks-ce-person" style="display: flex;">
					<div style="line-height: 25px;color:deepskyblue;">
						{{it.uName}}
					</div>
					<div style="flex:1;line-height: 25px;padding-left:10px ;">
						<img style="display: inline-block;width: 16px;" :src='star' v-for='i in it.ocScore' :key="">
						</yd-icon>
					</div>
					<div style="flex:1;line-height: 25px;text-align: right;">
						{{it.createTime}}
					</div>
				</div>
				<div class="ks-comment-content">
					{{it.content}}
				</div>	
			</div>
			<div v-if="comment.length==0" style="text-align:center;fontSize:17px;padding:10px 0;color:red;marginBottom:45px;">
         还没人评论呢！
			</div>
			<div class="ks-ce-all" v-if="comment.length>0" style="marginBottom:30px;">
				<button class="ks-all-btn">查看全部评价</button>
			</div>
		</div>
	</div>
</template>
<script>
import httputil from '../../httputil';
export default {
	data() {
		return {
			showCom: false,
			msg: '',
			comment: [],		
			num: 4,
			cpage: 1,
			js: '',
			bfb:'',
			star: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/cesuan/star.png'
		}
	},
	beforeRouteEnter(to, from, next) {
		next(vm => {
			httputil.doRequest('/FindMaster/userMasterSeeUserComment', { 'masterId': vm.$route.query.mid, 'type': 4, 'sta': 1 }, 1, vm.onAicSuccess, null, false)
		})

	},
	methods: {
		onAicSuccess(res) {
			this.showCom = true;
			this.comment = res.page.list;	
			this.bfb=res.extendString
			
		},

		getComment(num) {
			this.num = num;
			httputil.doRequest('/FindMaster/userMasterSeeUserComment', { 'masterId': this.$route.query.mid, 'type': num, 'sta': this.cpage }, 1, this.onAicSuccess, null, false)
		}
	}
}
</script>