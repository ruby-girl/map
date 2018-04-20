import Vue from 'vue'
import Router from 'vue-router'
//import Index from '@/components/Index'
const Index = resolve => require(['@/components/Index'], resolve)
//import Home from '@/components/Home'
const Home = resolve => require(['@/components/Home'], resolve)
//import ca from '@/components/calendar'
const ca = resolve => require(['@/components/calendar'], resolve)
//import infor from '@/page/infor'
const infor = resolve => require(['@/page/infor'], resolve)
//import cai from '@/page/cai'
const cai = resolve => require(['@/page/cai'], resolve)
//import fenxi from '@/page/fenxi'
const fenxi = resolve => require(['@/page/fenxi'], resolve)
//import yunshi from '@/page/yunshi'
const yunshi = resolve => require(['@/page/yunshi'], resolve)
//import hehun from '@/page/hehun'
const hehun = resolve => require(['@/page/hehun'], resolve)
//import home from '@/page/home'
const home = resolve => require(['@/page/home'], resolve)
//import dream from '@/page/dream'

const dream = resolve => require(['@/page/dream'], resolve)
//import result from '@/page/result'
const result = resolve => require(['@/page/result'], resolve)
//import bazi from '@/page/bazi'
const bazi = resolve => require(['@/page/bazi'], resolve)
//import test from '@/page/testResult'
const test = resolve => require(['@/page/testResult'], resolve)
//import laky from '@/page/luky'
const laky = resolve => require(['@/page/luky'], resolve)
//import phone from '@/page/phone/phone'
const phone = resolve => require(['@/page/phone/phone'], resolve)
//import score from '@/page/phone/score'
const score = resolve => require(['@/page/phone/score'], resolve)
//import wu from '@/page/wuxing/index'
const wu = resolve => require(['@/page/wuxing/index'], resolve)
//import wresult from '@/page/wuxing/wuResult'
const wresult = resolve => require(['@/page/wuxing/wuResult'], resolve)
//import more from '@/page/wuxing/more'
const more = resolve => require(['@/page/wuxing/more'], resolve)
//import marriage from '@/page/marriage/marriage'
const marriage = resolve => require(['@/page/marriage/marriage'], resolve)

//import pay from '@/page/cesuan/pay'
const pay = resolve => require(['@/page/cesuan/pay'], resolve)
//import buy from '@/page/cesuan/buy'
const buy = resolve => require(['@/page/cesuan/buy'], resolve)
//import tousu from '@/page/cesuan/tousu'
const tousu = resolve => require(['@/page/cesuan/tousu'], resolve)
//import comment from '@/page/cesuan/comment'
const comment = resolve => require(['@/page/cesuan/comment'], resolve)
//import shang from '@/page/cesuan/shang'
const shang = resolve => require(['@/page/cesuan/shang'], resolve)
//import dong from '@/page/cesuan/dong'
const dong = resolve => require(['@/page/cesuan/dong'], resolve)
//import userHome from '@/page/cesuan/userComment'
const userHome = resolve => require(['@/page/cesuan/userComment'], resolve)
//import color from '@/page/color/color'
const color = resolve => require(['@/page/color/color'], resolve)
//import colorResult from '@/page/color/result'
const colorResult = resolve => require(['@/page/color/result'], resolve)
//import name from '@/page/name/name'
const name = resolve => require(['@/page/name/name'], resolve)
//import startName from '@/page/name/startName'
const startName = resolve => require(['@/page/name/startName'], resolve)
//import voc from '@/page/vocation/vocation'
const voc = resolve => require(['@/page/vocation/vocation'], resolve)
//import vct from '@/page/vocation/vctResult'
const vct = resolve => require(['@/page/vocation/vctResult'], resolve)
//import xufei from '@/page/pay/index'
const xufei = resolve => require(['@/page/pay/index'], resolve)
//import zhifu from '@/page/pay/pay'
const zhifu = resolve => require(['@/page/pay/pay'], resolve)

//import shoucang from '@/page/shoucang/index'
const shoucang = resolve => require(['@/page/shoucang/index'], resolve)
//import email from '@/page/email/index'
const email = resolve => require(['@/page/email/index'], resolve)
//import eresult from '@/page/email/result'
const eresult = resolve => require(['@/page/email/result'], resolve)
//import yihome from '@/page/yidaobi/index'
const yihome = resolve => require(['@/page/yidaobi/index'], resolve)
//import yinfor from '@/page/yidaobi/infor'
const yinfor = resolve => require(['@/page/yidaobi/infor'], resolve)
//import person from '@/page/person/index'
const person = resolve => require(['@/page/person/index'], resolve)

//import ziliao from '@/page/geren/index'
const ziliao = resolve => require(['@/page/geren/index'], resolve)
//import all from '@/page/cesuan/all'
const all = resolve => require(['@/page/cesuan/all'], resolve)
//import userList from '@/page/cesuan/masterList'
const poster = resolve => require(['@/page/cesuan/poster'], resolve)
//import someQuestion from '@/page/cesuan/someQuestion'
const someQuestion = resolve => require(['@/page/cesuan/someQuestion'], resolve)
//import talkUser from '@/page/talk/person/index'
const talkTitle = resolve => require(['@/page/talk/person/title'], resolve)
const talkUser = resolve => require(['@/page/talk/person/index'], resolve)
//import talkQues from '@/page/talk/person/question'
const talkQues = resolve => require(['@/page/talk/person/question'], resolve)

//import talkInfor from '@/page/talk/person/infor'
const talkInfor = resolve => require(['@/page/talk/person/infor'], resolve)
//import talkIndex from '@/page/talk/index'
const talkIndex = resolve => require(['@/page/talk/index'], resolve)
//import allUser from '@/page/talk/all/index'
const allUser = resolve => require(['@/page/talk/all/index'], resolve)
//import allInfor from '@/page/talk/all/infor'
const allInfor = resolve => require(['@/page/talk/all/infor'], resolve)


//import myIndex from '@/page/talk/myQuestion/index'
const myIndex = resolve => require(['@/page/talk/myQuestion/index'], resolve)
//import myInfor from '@/page/talk/myQuestion/infor'
const myInfor = resolve => require(['@/page/talk/myQuestion/infor'], resolve)
//import comIndex from '@/page/talk/myComment/index'
const comIndex = resolve => require(['@/page/talk/myComment/index'], resolve)
//import comInfor from '@/page/talk/myComment/infor'
const comInfor = resolve => require(['@/page/talk/myComment/infor'], resolve)
//import coltIndex from '@/page/talk/colt/index'
const coltIndex = resolve => require(['@/page/talk/colt/index'], resolve)
//import Nan from '@/page/talk/nan'
const Nan = resolve => require(['@/page/talk/nan'], resolve)
//import Lun from '@/page/talk/lun'
const Lun = resolve => require(['@/page/talk/lun'], resolve)
//import My from '@/page/talk/my'
const My = resolve => require(['@/page/talk/my'], resolve)
//import application from '@/page/master/application'
const application = resolve => require(['@/page/master/application'], resolve)
//import aSuccess from '@/page/master/aSuccess'
const aSuccess = resolve => require(['@/page/master/aSuccess'], resolve)
//import forQuestion from '@/page/master/forQuestion'
const forQuestion = resolve => require(['@/page/DSquestion/forQuestion'], resolve)
//import question from '@/page/master/question'
const question = resolve => require(['@/page/DSquestion/result'], resolve)
//import suggestion from '@/page/suggestion/suggestion'
const suggestion = resolve => require(['@/page/suggestion/suggestion'], resolve)
//import serveList from '@/page/serve/serveList'

//import addServe from '@/page/serve/addServe'
const addServe = resolve => require(['@/page/serve/addServe'], resolve)
//import serveExplain from '@/page/serve/serveExplain'
const serveExplain = resolve => require(['@/page/serve/serveExplain'], resolve)
//import aLiPay from '@/page/profit/aLiPay'
const aLiPay = resolve => require(['@/page/profit/aLiPay'], resolve)
//import startProfit from '@/page/profit/startProfit'
const startProfit = resolve => require(['@/page/profit/startProfit'], resolve)
//import analysis from '@/page/profit/analysis'
const analysis = resolve => require(['@/page/profit/analysis'], resolve)
//import mingxi from '@/page/profit/mingxi'
const mingxi = resolve => require(['@/page/profit/mingxi'], resolve)
//import bestMingxi from '@/page/profit/bestMingxi'
const bestMingxi = resolve => require(['@/page/profit/bestMingxi'], resolve)
//import cash from '@/page/profit/cash'
const cash = resolve => require(['@/page/profit/cash'], resolve)
//import DSpersonal  from '@/page/DSpersonal/personal'
const DSpersonal = resolve => require(['@/page/DSpersonal/personal'], resolve)
//import updateJiesao  from '@/page/DSpersonal/updateJiesao'
const updateJiesao = resolve => require(['@/page/DSpersonal/updateJiesao'], resolve)
//import DSorder  from '@/page/DSorder/order'
const DSorder = resolve => require(['@/page/DSorder/order'], resolve)
const orderCritical = resolve => require(['@/page/DSorder/orderCritical'], resolve)
//import DSfensi  from '@/page/fensi/fensi'
const DSfensi = resolve => require(['@/page/fensi/fensi'], resolve)
//import startDream  from '@/page/startDream/startDream'
const startDream = resolve => require(['@/page/startDream/startDream'], resolve)
//import lineDream  from '@/page/startDream/lineDream'
const lineDream = resolve => require(['@/page/startDream/lineDream'], resolve)
//import lineList  from '@/page/startDream/lineList'
const lineList = resolve => require(['@/page/startDream/lineList'], resolve)
//import lineResult  from '@/page/startDream/lineResult'
const lineResult = resolve => require(['@/page/startDream/lineResult'], resolve)
//import talk from '@/page/talk'
const talk = resolve => require(['@/page/talk'], resolve)
//import startOne from '@/page/oneDay/startOne'
const startOne = resolve => require(['@/page/oneDay/startOne'], resolve)
//import showQian from '@/page/oneDay/showQian'
const showQian = resolve => require(['@/page/oneDay/showQian'], resolve)
//import jxIndex from '@/page/jixiong/index'
const jxIndex = resolve => require(['@/page/jixiong/index'], resolve)
//import jxResult from '@/page/jixiong/result'
const jxResult = resolve => require(['@/page/jixiong/result'], resolve)
//import article from '@/page/article/article'
const article = resolve => require(['@/page/article/article'], resolve)
const masterDetail = resolve => require(['@/page/masterDetail/test'], resolve)
const DSself = resolve => require(['@/page/masterDetail/DSself'], resolve)
const serveResult = resolve => require(['@/components/detail/page2'], resolve)
const profitServe = resolve => require(['@/page/profit/profitServe'], resolve)

Vue.use(Router)
export default new Router({
  routes: [
  {
      path: '/',
      name: 'home',
      component: home
   },{
      path: '/result/:id',
      name: 'result',
      component: result
    },{
      path: '/wresult',
      name: 'wresult',
      component: wresult
    },{
      path: '/all',
      name: 'all',
      component: all
    },{
      path: '/ziliao',
      name: 'ziliao',
      component: ziliao
    },{
      path: '/person',
      name: 'person',
      component: person
    },{
      path: '/startDream',
      name: 'startDream',
      component: startDream
    } 
    ,{
      path: '/lineDream',
      name: 'lineDream',
      component: lineDream
    } 
    ,{
      path: '/lineList',
      name: 'lineList',
      component: lineList
    },{ 
      path: '/lineResult',
      name: 'lineResult',
      component: lineResult
    } 
    ,{
      path: '/talkIndex',
      name: 'talkIndex',
      component: talkIndex,
      children:[
      	{
		      path: '/',
		      name: 'Nan',
		      component: Nan
		    },{
		      path: '/lun',
		      name: 'Lun',
		      component: Lun
		    },{
		      path: '/my',
		      name: 'My',
		      component: My
		    }
      ]
    },{
      path: '/talkInfor',
      name: 'talkInfor',
      component: talkInfor
    },{
      path: '/allUser',
      name: 'allUser',
      component: allUser
    },{
      path: '/allInfor',
      name: 'allInfor',
      component: allInfor
    },{
      path: '/talkQues',
      name: 'talkQues',
      component: talkQues
    },{
      path: '/talkTitle',
      name: 'talkTitle',
      component: talkTitle
      
    }
    ,{
      path: '/myIndex',
      name: 'myIndex',
      component: myIndex
    },{
      path: '/myInfor',
      name: 'myInfor',
      component: myInfor
    },{
      path: '/comIndex',
      name: 'comIndex',
      component: comIndex
    },{
      path: '/comInfor',
      name: 'comInfor',
      component: comInfor
    },{
      path: '/yihome',
      name: 'yihome',
      component: yihome
    },{
      path: '/yinfor',
      name: 'yinfor',
      component: yinfor
    },{
      path: '/eresult',
      name: 'eresult',
      component: eresult
    },{
      path: '/email',
      name: 'email',
      component: email
    },{
      path: '/xufei',
      name: 'xufei',
      component: xufei
    },{
      path: '/zhifu',
      name: 'zhifu',
      component: zhifu
    },{
      path: '/voc',
      name: 'voc',
      component: voc
    },{
      path: '/shoucang',
      name: 'shoucang',
      component: shoucang
    },{
      path: '/vct',
      name: 'vct',
      component: vct
    },{
      path: '/shang',
      name: 'shang',
      component: shang
    },{
      path: '/colorResult',
      name: 'colorResult',
      component: colorResult
    },{
      path: '/color',
      name: 'color',
      component: color
    },{
      path: '/startName',
      name: 'startName',
      component: startName
    },{
      path: '/name',
      name: 'name',
      component: name
    },{
      path: '/buy',
      name: 'buy',
      component: buy
    },{
      path: '/comment',
      name: 'comment',
      component: comment
    },{
      path: '/dong',
      name: 'dong',
      component: dong
    },{
      path: '/tousu',
      name: 'tousu',
      component: tousu
    },{
      path: '/pay',
      name: 'pay',
      component: pay
    },{
      path: '/ca',
      name: 'ca',
      component: ca
    },{
      path: '/more',
      name: 'more',
      component: more
    },{
      path: '/score',
      name: 'score',
      component: score
    },{
      path: '/wu',
      name: 'wu',
      component: wu
    },{
      path: '/phone',
      name: 'phone',
      component: phone
    },{
      path: '/laky',
      name: 'laky',
      component: laky
    },{
      path: '/test',
      name: 'test',
      component: test
    },{
      path: '/bazi',
      name: 'bazi',
      component: bazi
    },
    {
      path: '/infor',
      name: 'infor',
      component: infor
    }
    ,{
      path: '/dream',
      name: 'dream',
      component: dream
    }
    ,{
      path: '/cai',
      name: 'cai',
      component: cai
    },{
      path: '/fenxi',
      name: 'fenxi',
      component: fenxi
    },{
      path: '/yunshi',
      name: 'yunshi',
      component: yunshi
    },{
      path: '/hehun',
      name: 'hehun',
      component: hehun
    },{
      path: '/marriage',
      name: 'marriage',
      component: marriage
    },{
      path: '/coltIndex',
      name: 'coltIndex',
      component: coltIndex
    },{
      path: '/talk',
      name: 'talk',
      component: talk
    }
    ,{
      path: '/application',
      name: 'application',
      component: application
    }
    ,{
      path: '/aSuccess',
      name: 'aSuccess',
      component: aSuccess
    }
    ,{
      path: '/forQuestion',
      name: 'forQuestion',
      component: forQuestion
    }
    ,{
      path: '/question',
      name: 'question',
      component: question
    }
    ,{
      path: '/suggestion',
      name: 'suggestion',
      component: suggestion
    }
    ,{
      path: '/addServe',
      name: 'addServe',
      component: addServe
    }
    ,{
      path: '/serveExplain',
      name: 'serveExplain',
      component: serveExplain
    }
    ,{
      path: '/startProfit',
      name: 'startProfit',
      component: startProfit
    }
    ,{
      path: '/analysis',
      name: 'analysis',
      component: analysis
    }
    ,{
      path: '/mingxi',
      name: 'mingxi',
      component: mingxi
    } 
    ,{
      path: '/bestMingxi',
      name: 'bestMingxi',
      component: bestMingxi
    }
    ,{
      path: '/DSpersonal',
      name: 'DSpersonal',
      component: DSpersonal
    }
    ,{
      path: '/updateJiesao',
      name: 'updateJiesao',
      component: updateJiesao
    }
    ,{
      path: '/aLiPay',
      name: 'aLiPay',
      component: aLiPay
    }
    ,{
      path: '/cash',
      name: 'cash',
      component: cash
    }
    ,{
      path: '/DSorder',
      name: 'DSorder',
      component: DSorder
    }
    ,{
      path: '/DSfensi',
      name: 'DSfensi',
      component: DSfensi
    }
    ,{
      path: '/startOne',
      name: 'startOne',
      component: startOne
    },{
      path: '/showQian',
      name: 'showQian',
      component: showQian
    },{
      path: '/jxIndex',
      name: 'jxIndex',
      component: jxIndex
    },{
      path: '/jxResult',
      name: 'jxResult',
      component: jxResult
    },{
      path: '/article',
      name: 'article',
      component: article
    },{
      path: '/masterDetail',
      name: 'masterDetail',
      component: masterDetail
      //  children:[
      // 	{这些 路由 和页面 还没有删除， 先保留
		  //     path: '/detailServe',
		  //     name: 'detailServe',
		  //     component: detailServe
		  //   },
      //   	{
      // 		path: '/userList',
		  //     name: 'userList',
		  //     component: userList,
      // 	},{
      // 		path: '/userHome',
		  //     name: 'userHome',
		  //     component: userHome,
      // 	},{
      // 		path: '/someQuestion',
		  //     name: 'someQuestion',
		  //     component: someQuestion,
      // 	}
      // ]
    },{
      path: '/serveResult',
      name: 'serveResult',
      component:serveResult
    },{
      path: '/orderCritical',
      name: 'orderCritical',
      component:orderCritical
    },{
      path: '/DSself',
      name: 'DSself',
      component:DSself
    },{
      path: '/poster',
      name: 'poster',
      component:poster
    },{
      path: '/profitServe',
      name: 'profitServe',
      component:profitServe
    }
    
   
   
  ]
})
