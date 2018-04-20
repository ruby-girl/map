<template>
	<div class="container" style="paddingBottom:100px;">

		<load v-show='show'></load>

		<!--新增-->
		<div class="flex_all" style="flex-wrap:wrap;">
			<div @click.stop="toPoster(i)" v-for="(item,i) in tit" class="all_tit">
				<img :src="item.img" alt="">
				<div>{{item.txt}}</div>
			</div>
		</div>
		<div class="search-parent" style="font-size: 20px;color:#aaa;padding:20px 15px;background: #f5f5f5;">
			<div class="ks-search-div" style="border:none;background: white;position:relative">
				<input type="text" style="color:#666;padding-left:5px;" placeholder="请输入搜索大师的名称" class="search" v-model="key" @change="toKey(key)">
				<button style="color:white;font-size:15px;float:right;display: inline-block;background: #E4393C;width: 50px;height: 35px;text-align: center;line-height: 35px;outline: none;border:none" @click="toKey(key)">
					搜索
				</button>
			</div>
		</div>
		<div style="background: #f5f5f5;display: flex; display: -webkit-flex;display: -webkit-box;display: -moz-box;
		   display: -ms-flexbox;padding:8px ;">
			<div :class="{isOk:ok==1}" @click='getShow1()' style="display: inline-block;width: 19%;height: 40px;line-height: 40px;font-size:15px;text-align: center;position:relative">
				<div>综合</div>
				<div v-if="ok!=1" class="sanTop"></div>
				<div v-if="ok==1&&order1==1" class="sanTop bcT"></div>
				<div v-if="ok==1&&order1==0" class="sanBottom bcB"></div>
			</div>

			<div :class="{isOk:ok==2}" @click='getShow2()' style="display: inline-block;width: 19%;height: 40px;line-height: 40px;font-size:15px;text-align:center;position:relative">
				<div>收藏</div>
				<div v-if="ok!=2" class="sanTop"></div>
				<div v-if="ok==2&&order2==1" class="sanTop bcT"></div>
				<div v-if="ok==2&&order2==0" class="sanBottom bcB"></div>
			</div>
			<div :class="{isOk:ok==3}" @click='getShow3()' style="display: inline-block;width: 19%;height: 40px;line-height: 40px;font-size:15px;text-align: center;position:relative">
				<div>好评</div>
				<div v-if="ok!=3" class="sanTop"></div>
				<div v-if="ok==3&&order3==1" class="sanTop bcT"></div>
				<div v-if="ok==3&&order3==0" class="sanBottom bcB"></div>
			</div>
			<div :class="{isOk:ok==4}" @click='getShow4()' style="display: inline-block;width: 19%;height: 40px;line-height: 40px;font-size:15px;text-align: center;position:relative">
				<div>订单</div>
				<div v-if="ok!=4" class="sanTop"></div>
				<div v-if="ok==4&&order4==1" class="sanTop bcT"></div>
				<div v-if="ok==4&&order4==0" class="sanBottom bcB"></div>
			</div>
			<div :class="{isOk:ok==5}" @click='getShow()' style="display: inline-block;width: 19%;height: 40px;line-height: 40px;font-size:15px;text-align: center;position:relative;">
				<div>最新</div>
				<div v-if="ok!=5" class="sanTop"></div>
				<div v-if="ok==5&&order5==1" class="sanTop bcT"></div>
				<div v-if="ok==5&&order5==0" class="sanBottom bcB"></div>
			</div>

		</div>
		<div v-show='ok!=5'>
			<div v-for='it in list' style="padding:5px 10px ;font-size: 15px;">
				<router-link :to="'/masterDetail?mid='+it.msaterId">
					<div style="box-shadow: 0 0 10px #ccc;border-radius:8px;position:relative">
						<div style="padding: 10px;" class="ks-ma">
							<div style="width:100%;min-height:120px;overflow:hidden; ">
								<img :src="it.coverPath" alt="封面" class="coverPathC" />
							
							</div>
							<div style="flex:1;">
								<div style="font-weight: 800;font-size:15px;padding: 5px 0;">{{it.mName}}</div>
								<div class="hotDesc">{{it.masterDesc}}</div>
								<img :src="h7" v-show='it.masterLevel==1' alt="" width="50px" style="position: absolute;right:0px;display: inline-block;top:0px" />
								<img :src="h8" v-show='it.masterLevel==2' alt="" width="50px" style="position: absolute;right:0px;display: inline-block;top:0px" />
								<img :src="h9" v-show='it.masterLevel==3' alt="" width="50px" style="position: absolute;right:0px;display: inline-block;top:0px" />
							</div>
						</div>
						<div style="padding: 10px;border-top:1px solid #f5f5f5;display: flex;font-size: 12px;">
							<div style="paddingRight:5px;">繁忙度</div>
							<div class="ks-span-blog">
								<img :src='m6' v-if='it.busyState==0' style="height:8px;margin-top:5px;" />
								<img :src='m1' v-if='it.busyState==1' style="height:8px;margin-top:5px;" />
								<img :src='m2' v-if='it.busyState==2' style="height:8px;margin-top:5px;" />
								<img :src='m3' v-if='it.busyState==3' style="height:8px;margin-top:5px;" />
								<img :src='m4' v-if='it.busyState==4' style="height:8px;margin-top:5px;" />
								<img :src='m7' v-if='it.busyState==5' style="height:8px;margin-top:5px;" />
								<img :src='m5' v-if='it.busyState>5' style="height:8px;margin-top:5px;" />
							</div>
							<div style="paddingLeft:5px;">好评率：
								<span style="color:#E4393C;font-size: 14px;">{{it.favorabe}}</span>
							</div>
							<div style="margin-left:5px" v-if="ok==2">30天收藏：
								<span style="color:#E4393C;font-size: 14px;">{{it.monthOrder}}</span>
							</div>
							<div style="margin-left:5px" v-if="ok==4">30天订单：
								<span style="color:#E4393C;font-size: 14px;">{{it.monthOrder}}</span>
							</div>
							<div style="margin-left:5px" v-if="ok!=2&&ok!=4">30天成交：
								<span style="color:#E4393C;font-size: 14px;">{{it.monthOrder}}</span>
							</div>
						</div>
						<div v-if='it.busyState>5||it.busyState==5' style="position:absolute;bottom:0;width:20%;left:20%;"><img src="http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/cesuan/baodan.png" alt="" width="100%"></div>
					</div>
				</router-link>
			</div>
			<div class="ks-ce-all" v-if="!btn">
				<button @click='getsearchMore()' class="ks-all-btn">查看更多关键字最热</button>
			</div>
			<div class="ks-ce-all" v-if="btn">
				<button @click='getP(ok)' class="ks-all-btn">查看更多最热</button>
			</div>
		</div>
		<div v-show='ok==5'>

			<swiper :options="swiperOption" ref="mySwiper" class="swiper-box" v-if="cover.length!==0">
				<swiper-slide class="swiper-item" v-for="(item,i) in cover" :key="i">
					<img :src="item.coverPath" style="width:100%">
				</swiper-slide>
				<div class="swiper-pagination" slot="pagination"></div>
			</swiper>

			<div class="clearBox">
				<div v-for='it in arr'>
					<router-link :to="'/masterDetail?mid='+it.msaterId">

						<div class="newUL">
							<div>
                <img class="newImg" :src="it.headPath" alt="">
							</div>
							
							<div style="margin:3px 0;">
								<div style="font-size:17px;margin-bottom:5px;">{{it.mName}}</div>
								<div class="newDesc">{{it.masterDesc}}</div>
							</div>
						</div>
					</router-link>
				</div>
			</div>
			<div class="ks-ce-all" v-if="!btnNew">
				<button @click='getNewsearchMore()' class="ks-all-btn">查看更多关键字最新</button>
			</div>
			<div class="ks-ce-all" v-if="btnNew">
				<button @click='getMore()' class="ks-all-btn">查看更多最新</button>
			</div>
		</div>

	</div>
</template>
<script type="text/javascript">
require('swiper/dist/css/swiper.css')
import { swiper, swiperSlide } from 'vue-awesome-swiper'

import load from '../../components/loading';
import httputil from '../../httputil';

export default {
	components: {
		load, swiper, swiperSlide
	},
	data() {
		return {
			btn: true,
			btnNew: true,
			key: '',
			list: [],
			show: true,
			gg: false,
			ok: 1,
			order1: 1,
			order2: 3,
			order3: 3,
			order4: 3,
			order5: 3,
			arr: [],
			tit: [{ 'img': 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/cesuan/bazixiangpi.png', 'txt': '八字详批' }, { 'img': 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/cesuan/hunlianqinggan.png', 'txt': '婚姻情感' }, { 'img': 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/cesuan/bazihehun.png', 'txt': '八字合婚' }, { 'img': 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/cesuan/shiyecaiy.png', 'txt': '事业财运' }, { 'img': 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/cesuan/fengshuigaiyun.png', 'txt': '风水改运' }, { 'img': 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/cesuan/qiminggaiming.png', 'txt': '起名改名' }, { 'img': 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/cesuan/zixunwenshi.png', 'txt': '咨询问事' }, { 'img': 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/cesuan/gongsiqiming.png', 'txt': '公司起名' }, { 'img': 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/cesuan/liunianyunshi.png', 'txt': '流年运势' }],
			m1: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/ouline/1.png',
			m2: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/ouline/2.png',
			m3: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/ouline/3.png',
			m4: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/ouline/4.png',
			m5: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/ouline/5.png',
			m6: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/ouline/6.png',
			m7: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/ouline/mang.png',
			h7: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/cesuan/10.png',
			h8: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/cesuan/9.png',
			h9: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/cesuan/8.png',
			// h0:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/cesuan/10.png',
			p1: 1,
			p2: 1,
			p3: 1,
			p4: 1,
			p5: 1,
			searchP1: 1,
			searchP2: 1,
			searchP3: 1,
			searchP4: 1,
			searchNewP: 1,
			ind: 1,
			timer: null,
			cover:[],
			swiperOption: {
				notNextTick: true,
				loop: true,
				initialSlide: 0,
				autoplay: 3000,
				direction: 'horizontal',
				grabCursor: true,
				effect: 'fade',
				pagination: '.swiper-pagination',
				onClick: swiper => {
					this.imgTo(swiper.realIndex)
				}
			}
		}
	},
	computed: {

		swiper() {
			return this.$refs.mySwiper.swiper;
		}
	},
	mounted() {

		this.swiper.slideTo(4, 0, false);
	},
	created() {
		document.title = '大师列表'
		this.getHot(1);
		// this.getNew();
	},
	beforeRouteEnter(to, from, next) {
		next(vm => {

			window.scrollTo(0, 0);
		})
	},
	watch: {
		key(val) {
			if (!this.key) {
				this.btn = true
				this.btnNew = true
				httputil.doRequest('/FindMaster/masterListHot', { 'sta': this.p1, 'type': this.ok, 'order': 1 }, 1, this.onSuccess, this.onError, false)
				this.getNew()
			}
		}
	},
	methods: {
		to(){
			console.log('12')
	
	},

		getP(n) {
			var state, b
			if (n == 1) {
				this.p1++;
				state = this.p1
				b = this.order1
			} else if (n == 2) {
				this.p2++;
				state = this.p2
				b = this.order2
			} else if (n == 3) {
				this.p3++;
				state = this.p3
				b = this.order3
			} else if (n == 4) {
				this.p4++;
				state = this.p4
				b = this.order4
			}

			this.$dialog.loading.open('努力加载中...');
			httputil.doRequest('/FindMaster/masterListHot', { 'sta': state, 'type': n, 'order': b }, 1, this.onSuccess, this.onError, false)
		},
		onSuccess(res) {


			this.$dialog.loading.close();
			this.list = this.list.concat(res.list);

			this.show = false
		},
		onError(res) {
			this.$dialog.loading.close();
			this.$dialog.toast({
				mes: '没有更多的数据！',
				timeout: 1500
			});
			if (this.ok == 1 && this.p1 > 1) {
				this.p1--
			} if (this.ok == 2 && this.p2 > 1) {
				this.p2--
			} if (this.ok == 3 && this.p3 > 1) {
				this.p3--
			} if (this.ok == 4 && this.p4 > 1) {
				this.p4--
			}
		},
		getMore() {

			this.p5++;
			this.$dialog.loading.open('努力加载中...');
			httputil.doRequest('/FindMaster/masterListNew', { 'sta': this.p5, 'order': this.order5 }, 1, this.onMoreSuccess, this.onMoreError, false)
		},
		onMoreSuccess(res) {
			if (res.page.list == '') {
				this.$dialog.loading.close()
				this.$dialog.toast({
					mes: '没有更多的数据！',
					timeout: 1500
				});
				this.p5--
			} else {
				this.$dialog.loading.close();
				this.arr = this.arr.concat(res.page.list);
			}
			this.show = false
		},
		onMoreError(res) {
			this.p5--
			this.show = false;
			this.gg = true
		},
		getHot(n) {
			console.log(n)
			this.btn = true
			var a, b
			if (this.ok == 1) {
				a = this.order1
				b = this.p1
			} else if (this.ok == 2) {
				a = this.order2
				b = this.p2
			} else if (this.ok == 3) {
				a = this.order3
				b = this.p3
			} else if (this.ok == 4) {
				a = this.order4
				b = this.p4
			}
			console.log('请求的order=' + a)
			httputil.doRequest('/FindMaster/masterListHot', { 'sta': b, 'type': n, 'order': a }, 1, this.onHotSuccess, this.onHotError, false)
		},
		onHotSuccess(res) {
			this.list = res.list;
			this.show = false
		},
		onHotError(res) {
			this.show = false;
			this.$dialog.alert({ mes: res })
		},
		getShow() {
			this.btnNew = true
			this.ok = 5;
			if (this.order5 == 3) {
				this.order5 = 1
			} else if (this.order5 == 1) {
				this.order5 = 0
			} else if (this.order5 == 0) {
				this.order5 = 1
			}
			this.order2 = 3
			this.order3 = 3
			this.order4 = 3
			this.order1 = 3
			this.p5 = 1
			this.getNew()
		},
		getShow1() {
			this.ok = 1;
			if (this.order1 == 3) {
				this.order1 = 1
			} else if (this.order1 == 1) {
				this.order1 = 0
			} else if (this.order1 == 0) {
				this.order1 = 1
			}
			this.order2 = 3
			this.order3 = 3
			this.order4 = 3
			this.order5 = 3
			this.p1 = 1
			this.getHot(1)

		},
		getShow2() {
			this.ok = 2;
			if (this.order2 == 3) {
				this.order2 = 1
			} else if (this.order2 == 1) {
				this.order2 = 0
			} else if (this.order2 == 0) {
				this.order2 = 1
			}
			this.order1 = 3
			this.order3 = 3
			this.order4 = 3
			this.order5 = 3
			this.p2 = 1
			this.getHot(2)
		},
		getShow3() {
			this.ok = 3;
			if (this.order3 == 3) {
				this.order3 = 1
			} else if (this.order3 == 1) {
				this.order3 = 0
			} else if (this.order3 == 0) {
				this.order3 = 1
			}
			this.order2 = 3
			this.order1 = 3
			this.order4 = 3
			this.order5 = 3
			this.p3 = 1
			this.getHot(3)
		},
		getShow4() {
			this.ok = 4;

			if (this.order4 == 3) {
				this.order4 = 1
			} else if (this.order4 == 1) {
				this.order4 = 0
			} else if (this.order4 == 0) {
				this.order4 = 1
			}
			this.order2 = 3
			this.order3 = 3
			this.order1 = 3
			this.order5 = 3
			this.p4 = 1
			this.getHot(4)
		},
		getNew() {
		
			this.btnNew = true
			httputil.doRequest('/FindMaster/masterListNew', { 'sta': 1, 'order': this.order5 }, 1, this.onNewSuccess, this.onNewError, false)
				this.swiper.startAutoplay();
		},
		onNewSuccess(res) {
			this.arr = res.page.list;
			this.cover = res.carousels
			console.log(this.cover)
			this.show = false

		},
		onNewError(res) {
			this.show = false;
			this.gg = true
		},
		toKey(txt) {

			var a
			if (this.ok == 1) {
				a = this.order1
			} else if (this.ok == 2) {
				a = this.order2
			} else if (this.ok == 3) {
				a = this.order3
			} else if (this.ok == 4) {
				a = this.order4
			}
			if (this.ok == 1 || this.ok == 2 || this.ok == 3 || this.ok == 4) {
				this.btn = false
				httputil.doRequest('/FindMaster/masterListHot', { 'sta': 1, 'key': txt, 'type': this.ok, 'order': a }, 1, this.onKeySuccess, this.onKeyError, false)
			}

			if (this.ok == 5) {
				this.btnNew = false
				httputil.doRequest('/FindMaster/masterListNew', { 'sta': 1, 'key': txt, 'order': this.order5 }, 1, this.onNewKeySuccess, this.onNewKeyError, false)
			}
		},
		onNewKeySuccess(res) {
			if (res.page.list.length > 0) {
				this.arr = res.page.list;
			} else {
				this.$dialog.alert({ mes: '没有查询到该大师哦！' })
				this.btnNew = true
				this.getNew()
			}

		},
		// 最新更多
		getNewsearchMore() {
			this.searchNewP++
			httputil.doRequest('/FindMaster/masterListNew', { 'sta': this.searchNewP, 'key': this.key, 'order': this.order5 }, 1, this.onNewKeyMoreSuccess, this.onNewKeyMoreError, false)
		},
		onNewKeyMoreSuccess(res) {
			if (res.page.list.length > 0) {
				this.arr = this.arr.concat(res.page.list)
			} else {
				if (this.searchNewP > 1) {
					this.searchNewP--
				}
				this.$dialog.alert({ mes: '没有更多数据了！' })
			}
		},
		onNewKeyMoreError(res) {
			if (this.searchNewP > 1) {
				this.searchNewP--
			}
			this.$dialog.alert({ mes: res })
		},
		onKeySuccess(res) {
			this.list = res.list;
			this.show = false
			// this.ok = true
		},
		onKeyError(res) {
			this.$dialog.alert({ mes: '没有查询到该大师哦！' })
		},
		getsearchMore() {
			var a, b
			if (this.ok == 1) {
				this.searchP1++
				a = this.searchP1
				b = this.order1
			} else if (this.ok == 2) {
				this.searchP2++
				a = this.searchP2
				b = this.order2
			} else if (this.ok == 3) {
				this.searchP3++
				a = this.searchP3
				b = this.order3
			} else if (this.ok == 4) {
				this.searchP4++
				a = this.searchP4
				b = this.order4
			}

			httputil.doRequest('/FindMaster/masterListHot', { 'sta': a, 'type': this.ok, 'key': this.key, 'order': b }, 1, this.onKeyMoreSuccess, this.onKeyMoreError, false)
		},
		onKeyMoreSuccess(res) {
			this.list = this.list.concat(res.list);
		},
		onKeyMoreError(res) {
			this.searchP--
			this.$dialog.alert({ mes: '没有更多了！' })
		},
		imgTo(i) {
			var id = this.cover[i].msaterId
			this.$router.push('/masterDetail?mid=' + id)
		},
		toPoster(i) {
			this.$router.push('/poster?ind=' + i)
		}
	}
}
</script>
<style lang="css" scoped>
.isOk {
	border-bottom: 3px solid #E4393C;
	color: #E4393C;
}

.newUL {
	display: flex;
	padding: 0 10px;
	height: 100px;
}

.newImg {
	width: 80px;
	height: 80px;
	border-radius: 10px;
	margin-right: 8px;
}

.ks-ma:after {
	content: "";
	display: block;
	clear: both;
}

.allNew {
	padding: 5px 15px;
	font-size: 14px;
	float: left;
	width: 33.33%;
}

.starImg {
	width: 100%;
}

.clearBox {
	padding-top: 20px;
}

.clearBox::after {
	content: "";
	display: block;
	clear: both;
}

.image-enter-active {
	transform: translateX(0);
	transition: all 1.5s linear;
}

.image-leave-active {
	transform: translateX(-100%);
	transition: all 1.5s linear;
}

.image-enter {
	transform: translateX(100%);
}

.image-leave {
	transform: translateX(-100%);
}

.swiper-box {
	width: 100%;
	height: 150px;
}

.hotDesc {
	font-size: 13px;
	width: 100%;
	color: #666;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
}

.newDesc {
	color: #666;
	width: 100%;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 3;
}

.coverPathC {
	max-width: 100%;
	overflow: hidden;
}

.sanBottom {
	width: 0;
	height: 0;
	position: absolute;
	top: 45%;
	right: 5px;
	border-top: 3px solid #aaa;
	border-left: 3px solid transparent;
	border-right: 3px solid transparent;
	border-bottom: 3px solid transparent;
}

.sanTop {
	width: 0;
	height: 0;
	position: absolute;
	right: 5px;
	top: 35%;
	border-top: 3px solid transparent;
	border-left: 3px solid transparent;
	border-right: 3px solid transparent;
	border-bottom: 3px solid #aaa;
}

.bcB {
	border-top: 3px solid #E4393C;
}

.bcT {
	border-bottom: 3px solid #E4393C;
}

.flex_all {
	display: flex;

	padding: 10px 0 20px 0;
}

.all_tit {
	width: 20%;
	text-align: center;
	color: #666;
	font-size: 14px;
	padding-bottom: 10px;
}

.all_tit img {
	width: 75%;
	margin: 0 auto;
	margin-bottom: 8px;
}
</style>