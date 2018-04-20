<template>
	<div class="full_container">

		<!--<load v-show="show"></load>-->
		<div style="" v-show='showAll'>
			<div style="font-size:18px;padding: 15px;text-align: center;">
				{{content.title}}
			</div>
			<div style="color: #1E90FF;height:30px;font-size:15px;" v-if="type!=''">
				<div style="padding: 0 15px;float: right;" @click='toDelete()'>删除</div>
				<div style="padding: 0 15px;float: right;" @click="totalkQues()">编辑</div>
			</div>
			<div class="ks-ce-dong" style="border:0">
				<div>
					<img :src="content.headURL" alt="" width="50px" height="50px" style="border-radius:50%;" />
				</div>
				<div style="display: flex;font-size:14px;margin-left: 10px;">
					<div style="" class="ks-lu-p">
						<div>
							{{content.uName}}
						</div>
						<div style="color:gray">
							{{content.createTime}}
						</div>
					</div>
				</div>
			</div>
			<div style="padding: 0 15px;font-size:15px;word-wrap:break-word;">
				{{content.content}}
			</div>
			<div style="padding: 5px;display:flex;" class="ks-talk" v-if="content.flag!=0">
				<div v-for='i in content.thumbpails' style="width: 33.33%;">
					<div style="padding: 10px;">
						<img :src="i" alt="" width="100%" />
					</div>
				</div>
			</div>
			<div class="ks-c-f" style="padding: 10px 0;">
				<div></div>
				<div style="display: flex;font-size:14px;">
					<div style="display: flex;flex:1;">
						<div>
							<img :src="c" alt="" width="18px" />
						</div>
						<div style="margin-left:10px;">{{content.commentCount}}</div>
					</div>
					<div style="display: flex;flex:1;">
						<div>
							<img :src="zan" alt="" width="18px" @click='getZan()' v-if='content.isThumb==0' />
							<img :src="e" alt="" width="18px" v-if='content.isThumb==1' @click='getZan()' />
						</div>
						<div style="margin-left:15px;">{{content.thumbCount}}</div>
					</div>
				</div>

			</div>
			<div style="width:100%;text-align:center;">
				<div style="text-align: center;width:120px;border-radius:15px;padding:5px;color:deepskyblue;font-size:15px;border:1px solid deepskyblue;margin:10px auto;" @click="setPid(0)">点击参与讨论</div>
			</div>

			<div style="height: 8px;background: #f5f5f5;"></div>
			<div v-show='showC'>
				<div style="padding: 8px 15px;border-bottom: 1px solid #f5f5f5;" v-for='(p,index) in list'>
					<div class="ks-c-a">
						<div class="ks-c-b">
							<div class="ks-c-d">
								<img :src="p.firstComment.comment.headURL" alt="" height="40px" width="40px" style="border-radius:50%;" />
							</div>
							<div class="ks-c-e">{{p.firstComment.comment.sender}}</div>
							<div style="float:right;font-size:15px;">{{index+1}}楼</div>
						</div>
						<div class="ks-c-c">
							<div @click='setPid(p.firstComment.comment.dicussCommentId,p.firstComment.comment.sender)'>
								<div style="padding: 8px 0;font-size:14px;word-break:break-all;">
									{{p.firstComment.comment.content}}
								</div>

								<div class="ks-c-f">
									<div></div>
									<div style="display: flex;font-size:14px;">
										<div style="display: flex;flex:1;">
											<div>
												<img :src="c" alt="" width="18px" />
											</div>
											<div style="margin-left:10px;">{{p.firstComment.commentCount}}</div>
										</div>
										<div style="display: flex;flex:1;">
											<div>
												<img :src="zan" alt="" width="18px" @click.stop='getCz(p.firstComment.comment.dicussCommentId)' v-if='p.firstComment.isThumb==0' />
												<img :src="e" alt="" width="18px" v-if='p.firstComment.isThumb==1' @click.stop='getCz(p.firstComment.comment.dicussCommentId)' />
											</div>
											<div style="margin-left:15px;">{{p.firstComment.thumbCount}}</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div v-show="p.comments.length>0" style="padding: 10px;background: #f5f5f5;font-size:14px;">
							<div v-for='t in p.comments' style="padding: 5px 0;" @click='setPid(t.dicussCommentId,t.sender)'>
								<span style="color:lightskyblue">{{t.sender}}</span>
								回复
								<span style="color:lightskyblue">{{t.receiver}}</span>
								：{{t.content}}
							</div>

						</div>

					</div>
				</div>
				<div class="ks-ce-all">
					<button class="ks-all-btn" @click='getMore()'>查看更多评价</button>
				</div>
			</div>
			<div class="ks-none" v-show='!showC'>
				暂时没有评论！
			</div>
		</div>
		<div class="shoucang" style="top:90%">
			<img :src="s1" alt="" width="100%" v-if='content.isCollect==0' @click='getColt()'>
			<img :src="s2" alt="" width="100%" v-if='content.isCollect==1' @click='getColt()'>
		</div>
		<yd-popup v-model="showBtn" position="center" width="90%">
			<div style="padding: 20px;">
				<yd-cell-group>
					<yd-cell-item>
						<yd-textarea slot="right" placeholder="输入评论内容" maxlength="60" v-model="text"></yd-textarea>
					</yd-cell-item>
				</yd-cell-group>
			</div>
			<div style="text-align: right;margin:0 10px 10px 0;">
				<button @click='getPid()' style="padding: 0 5px;height: 30px;border:none;outline:none;border:1px solid #ccc;font-size:15px;">
					发表评论
				</button>

			</div>
		</yd-popup>
		<div class="share" @click='toShare()' style="top:80%;">
			<img :src="share" alt="" width="100%" />
		</div>
	</div>
</template>
<script type="text/javascript">
import navbar from '../../../components/nav';
import load from '../../../components/loading';
import httputil from '../../../httputil'
import share from '../../../share';
export default {
	components: {
		navbar, load
	},
	data() {
		return {
			pic: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/talk/3.1.png',
			c: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/cesuan/c.png',
			head: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/cesuan/s.png',
			zan: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/cesuan/zan.png',
			s1: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/cesuan/5-1.png',
			e: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/cesuan/6.png',
			s2: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/cesuan/5.png',
			share: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/cesuan/4.png',
			content: {},
			show: true,
			showBtn: false,
			text: '',
			list: [],
			showC: true,
			holder: '说点什么',
			pid: 0,
			page: 1,
			showAll: false,
			js: '',
			type: ''
		}
	},
	beforeRouteEnter(from, to, next) {
		next(vm => {


		})
	},
	mounted: function() {
		this.$nextTick(() => {
			this.getIn()
			this.getHuo()
		})
	},
	created() {
		document.title = '讨论'
		if (this.$route.query.type) {
			this.type = this.$route.query.type
		}
	},
	methods: {
		getIn() {
			httputil.doRequest('/Quiz/userCheckDicussDetails', { 'dicussId': this.$route.query.id }, 1, this.onSuccess, null, false)

		},
		onSuccess(res) {
			console.log(res)
			this.show = false;
			this.showAll = true
			this.content = res;
		},
		toDelete(ind) {
			httputil.doRequest('/FindMaster/userDicussDelete', {
				'dId': this.$route.query.id
			}, 1, this.onDeleteSuccess, this.onDeleteError, true)
		},
		onDeleteSuccess(res) {
			this.$dialog.toast({
				mes: '删除成功！',
				timeout: 1500,
				callback: () => {
					this.$router.go(-1)
				}
			});
		},
		onDeleteError(res) {
			this.$dialog.toast({
				mes: res,
				timeout: 1500
			});
		},
		totalkQues() {
			this.$router.push('/allUser?did=' + this.$route.query.id)
		},
		getMore() {
			this.page++;

			httputil.doRequest('/Quiz/userDicussCommentSee', { 'sta': this.page, 'dicussId': this.$route.query.id }, 1, this.onMoreSuccess, this.onMoreError, false)
		},
		onMoreSuccess(res) {

			if (res.list.length > 0) {
				this.list = this.list.concat(res.list)
				this.showC = true
			} else {

				this.$dialog.toast({
					mes: '被你看完了，讨厌',
					timeout: 1500
				});
			}
		},
		onMoreError(res) {

			this.$dialog.alert({ mes: res })
		},
		getId() {
			this.showBtn = true;
		},
		setPid(id, who) {
			this.showBtn = true;
			this.pid = id;
			console.log(id)
			if (id != 0) {
				this.holder = '回复 ' + who;
			} else {
				this.holder = "说点什么";
			}
		},
		getPid() {
			if (this.text.trim() != '') {
				httputil.doRequest('/Quiz/userDicussComment', { 'pId': this.pid, 'dicussId': this.$route.query.id, 'content': this.text }, 1, this.onPSuccess, this.onPError, true)
			} else {
				this.$dialog.toast({
					mes: '评论内容不能为空',
					timeout: 1500
				});
			}
		},
		onPSuccess(res) {
			this.getIn()
			this.getHuo();
			this.text = '';
			this.$dialog.toast({
				mes: '发表成功',
				timeout: 1500
			});
			this.showBtn = false;
		},
		onPError(res) {
			this.$dialog.alert({
				mes: res
			});
		},
		getCom() {
			this.page = 1;
			httputil.doRequest('/Quiz/userDicussComment', { 'pId': this.pid, 'dicussId': this.$route.query.id, 'content': this.text }, 1, this.onComSuccess, this.onPError, true)
		},
		onComSuccess(res) {
			this.showBtn = false;
			this.getHuo();
			this.$dialog.toast({
				mes: res.message,
				timeout: 1500
			});
		},
		getHuo() {
			httputil.doRequest('/Quiz/userDicussCommentSee', { 'sta': 1, 'dicussId': this.$route.query.id }, 1, this.onHuoSuccess, null, false)
		},
		onHuoSuccess(res) {
			console.log(res)
			if (res.list.length > 0) {
				this.list = res.list;
				this.showC = true
			} else {
				this.showC = false;
			}
		},
		getColt() {
			httputil.doRequest('/Quiz/userDicussCollect', { 'dicussId': this.$route.query.id }, 1, this.onColSuccess, this.onPError, true)
		},
		onColSuccess(res) {
			this.getIn();
			this.$dialog.toast({
				mes: res.message,
				timeout: 1500
			});
		},
		getZan() {
			httputil.doRequest('/Quiz/userDicussThumb', { 'pType': 0, 'pId': this.$route.query.id }, 1, this.onZanSuccess, this.onPError, true)
		},
		onZanSuccess(res) {
			this.getIn();
			this.$dialog.toast({
				mes: res.message,
				timeout: 1500
			});
		},
		getCz(id) {
			httputil.doRequest('/Quiz/userDicussThumb', { 'pType': 1, 'pId': id }, 1, this.onCzSuccess, this.onPError, true)
		},
		onCzSuccess(res) {
			this.getHuo();
			this.getIn()
			this.$dialog.toast({
				mes: res.message,
				timeout: 1500
			});
		},
		oncodeSuccess(res) {
			// console.log(this.content.thumbpails[0])
			let code = res.object
			share.toShare('讨论详情', 'allInfor?code=' + code + '&id=' + this.$route.query.id, this.content.thumbpails[0])
		},
		oncodeError(res) {
			this.$dialog.alert({ mes: res })
		},
		toShare() {
			httputil.doRequest('/Common/getShareCode', { 'sType': 46 }, 1, this.oncodeSuccess, this.oncodeError, true)

		},
	}
}
</script>
<style scoped>


</style>
