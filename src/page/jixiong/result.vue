<template>
  <div class="full-container container">
    <div style="padding: 0 10px;">
      <div class="jx-head">
       <span style="color:#E4393C">{{tit}}： </span>{{headTit}}
      </div>
      <ul>
       <li style="border:1px solid #ccc;marginBottom:20px" v-for="item in li">
         <div class="jx-li-top"><span style="color:#e4393c">{{item.time}}：</span>{{item.timeExplain}}</div>
         <div class="flex jx-box">
           <div class="jx-left-img"><img style="width:100%;height:100%;" :src="item.img" alt="" /></div>
            <div class="jx-li-right">
             <div :class="{'right-text':true,'rightTop':item.right==''?true:false}">{{item.left}}</div>
             <div class="right-text" style="borderTop:1px solid #ccc" v-if="item.right==''?false:true">{{item.right}}</div>
            </div>
         </div>
       </li>
      </ul>
    </div>
     <div class="share" @click='toShare()' v-if="sCode==-1">
			<img :src="share" alt="" width="100%" height="100%"/>
	</div>
  </div>
</template>
<script>
import Tit from '../../components/nav'
import Btn from '../../components/button'
import httputil from '../../httputil'
import share from '../../share';
export default {
  name: '',
  data() {
    return {
      tit:'',
      headTit:'',
      li:[],
      sCode:null,
      share:'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/cesuan/4.png',
      list:[
                {
                    id: '0',
                    name: '眼跳',
                    explain: '眼皮不自主地跳动',
                    detailed: [
                        {time: '子时', timeExplain: '23点 - 01点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/13.png', left: '左有贵人', right: '右有酒食'},
                        {time: '丑时', timeExplain: '01点 - 03点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/14.png', left: '左有愁思', right: '右有人思'},
                        {time: '寅时', timeExplain: '03点 - 05点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/15.png', left: '左有人来', right: '右有喜事'},
                        {time: '卯时', timeExplain: '05点 - 07点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/16.png', left: '左贵人来', right: '右主合吉'},
                        {time: '辰时', timeExplain: '07点 - 09点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/17.png', left: '左远人来', right: '右主损财'},
                        {time: '巳时', timeExplain: '09点 - 11点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/18.png', left: '左主饮食', right: '右主凶恶'},
                        {time: '午时', timeExplain: '11点 - 13点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/19.png', left: '左有饮食', right: '右有凶事'},
                        {time: '未时', timeExplain: '13点 - 15点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/20.png', left: '左有吉昌', right: '右有小损'},
                        {time: '申时', timeExplain: '15点 - 17点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/21.png', left: '左有财利', right: '右有女思'},
                        {time: '酉时', timeExplain: '17点 - 19点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/22.png', left: '左有客至', right: '右有亲来'},
                        {time: '戌时', timeExplain: '19点 - 21点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/23.png', left: '左有相思', right: '右有钦会'},
                        {time: '亥时', timeExplain: '21点 - 23点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/24.png', left: '左有贵客', right: '右主凶恶'},
                    ]
                },
                {
                    id: '1',
                    name: '耳热',
                    explain: '在没有外来刺激下耳朵突然发热',
                    detailed: [
                        {time: '子时', timeExplain: '23点 - 01点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/13.png', left: '主有僧道来言事吉', right: ''},
                        {time: '丑时', timeExplain: '01点 - 03点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/14.png', left: '主有喜事临身大吉', right: ''},
                        {time: '寅时', timeExplain: '03点 - 05点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/15.png', left: '主有酒食相会大吉', right: ''},
                        {time: '卯时', timeExplain: '05点 - 07点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/16.png', left: '主有贵人来见大吉', right: ''},
                        {time: '辰时', timeExplain: '07点 - 09点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/17.png', left: '主有财喜大通达吉', right: ''},
                        {time: '巳时', timeExplain: '09点 - 11点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/18.png', left: '主失财物之事不吉', right: ''},
                        {time: '午时', timeExplain: '11点 - 13点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/19.png', left: '主有喜庆事来大吉', right: ''},
                        {time: '未时', timeExplain: '13点 - 15点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/20.png', left: '主有客至相求之时', right: ''},
                        {time: '申时', timeExplain: '15点 - 17点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/21.png', left: '主有喜事酒食宴会', right: ''},
                        {time: '酉时', timeExplain: '17点 - 19点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/22.png', left: '主女子婚姻之时吉', right: ''},
                        {time: '戌时', timeExplain: '19点 - 21点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/23.png', left: '主有争诉口舌之事', right: ''},
                        {time: '亥时', timeExplain: '21点 - 23点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/24.png', left: '主有官非词讼之事', right: ''},
                    ]
                },
                {
                    id: '2',
                    name: '面热',
                    explain: '在没有外来刺激下面部突然发热',
                    detailed: [
                        {time: '子时', timeExplain: '23点 - 01点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/13.png', left: '主有吉庆又主财吉', right: ''},
                        {time: '丑时', timeExplain: '01点 - 03点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/14.png', left: '主有烦恼愁闷之事', right: ''},
                        {time: '寅时', timeExplain: '03点 - 05点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/15.png', left: '主有远客来叙会吉', right: ''},
                        {time: '卯时', timeExplain: '05点 - 07点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/16.png', left: '主有酒食友人来吉', right: ''},
                        {time: '辰时', timeExplain: '07点 - 09点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/17.png', left: '主有远人喜相逢吉', right: ''},
                        {time: '巳时', timeExplain: '09点 - 11点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/18.png', left: '主有要事相见大吉', right: ''},
                        {time: '午时', timeExplain: '11点 - 13点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/19.png', left: '主姻亲来相见大吉', right: ''},
                        {time: '未时', timeExplain: '13点 - 15点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/20.png', left: '主有词讼口舌是非', right: ''},
                        {time: '申时', timeExplain: '15点 - 17点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/21.png', left: '主有高人会道相同', right: ''},
                        {time: '酉时', timeExplain: '17点 - 19点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/22.png', left: '主有高人来会大吉', right: ''},
                        {time: '戌时', timeExplain: '19点 - 21点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/23.png', left: '主有酒食自送来吉', right: ''},
                        {time: '亥时', timeExplain: '21点 - 23点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/24.png', left: '主官非口舌不吉事', right: ''},
                    ]
                },
                {
                    id: '3',
                    name: '心惊',
                    explain: '突然十分恐惧不安，心里非常害怕',
                    detailed: [
                        {time: '子时', timeExplain: '23点 - 01点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/13.png', left: '主有女子思念大吉', right: ''},
                        {time: '丑时', timeExplain: '01点 - 03点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/14.png', left: '主有恶事临门大凶', right: ''},
                        {time: '寅时', timeExplain: '03点 - 05点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/15.png', left: '主有客来果实大集', right: ''},
                        {time: '卯时', timeExplain: '05点 - 07点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/16.png', left: '主有酒食自外入来', right: ''},
                        {time: '辰时', timeExplain: '07点 - 09点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/17.png', left: '主有盛和喜事大吉', right: ''},
                        {time: '巳时', timeExplain: '09点 - 11点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/18.png', left: '主有妇人思念大吉', right: ''},
                        {time: '午时', timeExplain: '11点 - 13点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/19.png', left: '主有酒食忽然而来', right: ''},
                        {time: '未时', timeExplain: '13点 - 15点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/20.png', left: '主有妇人思念大吉', right: ''},
                        {time: '申时', timeExplain: '15点 - 17点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/21.png', left: '主有大喜之事无患', right: ''},
                        {time: '酉时', timeExplain: '17点 - 19点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/22.png', left: '主有人送信至大吉', right: ''},
                        {time: '戌时', timeExplain: '19点 - 21点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/23.png', left: '主有贵人即至大吉', right: ''},
                        {time: '亥时', timeExplain: '21点 - 23点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/24.png', left: '主有奇恶要事大吉', right: ''},
                    ]
                },
                {
                    id: '4',
                    name: '喷嚏',
                    explain: '身体没有感觉寒冷但打喷嚏',
                    detailed: [
                        {time: '子时', timeExplain: '23点 - 01点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/13.png', left: '主有酒食相叙宴会', right: ''},
                        {time: '丑时', timeExplain: '01点 - 03点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/14.png', left: '主有恶事临门大凶', right: ''},
                        {time: '寅时', timeExplain: '03点 - 05点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/15.png', left: '主有女子招兴酒食', right: ''},
                        {time: '卯时', timeExplain: '05点 - 07点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/16.png', left: '主有得财得物大吉', right: ''},
                        {time: '辰时', timeExplain: '07点 - 09点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/17.png', left: '主终日有酒食大吉', right: ''},
                        {time: '巳时', timeExplain: '09点 - 11点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/18.png', left: '主终日有求财大吉', right: ''},
                        {time: '午时', timeExplain: '11点 - 13点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/19.png', left: '主有远客之人宴会', right: ''},
                        {time: '未时', timeExplain: '13点 - 15点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/20.png', left: '主有酒食吉利之事', right: ''},
                        {time: '申时', timeExplain: '15点 - 17点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/21.png', left: '夜梦惊恐酒食不安', right: ''},
                        {time: '酉时', timeExplain: '17点 - 19点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/22.png', left: '主妇人事求请开吉', right: ''},
                        {time: '戌时', timeExplain: '19点 - 21点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/23.png', left: '主妇人思会和合事', right: ''},
                        {time: '亥时', timeExplain: '21点 - 23点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/24.png', left: '主需万事反祸吉利', right: ''},
                    ]
                },
                {
                    id: '5',
                    name: '肉颤',
                    explain: '在没有外来刺激下肌肉突然跳动',
                    detailed: [
                        {time: '子时', timeExplain: '23点 - 01点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/13.png', left: '主有年长人来大吉', right: ''},
                        {time: '丑时', timeExplain: '01点 - 03点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/14.png', left: '主有自身喜庆大吉', right: ''},
                        {time: '寅时', timeExplain: '03点 - 05点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/15.png', left: '主有凶事退避则吉', right: ''},
                        {time: '卯时', timeExplain: '05点 - 07点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/16.png', left: '主有得财得物大吉', right: ''},
                        {time: '辰时', timeExplain: '07点 - 09点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/17.png', left: '主有火灾身心大凶', right: ''},
                        {time: '巳时', timeExplain: '09点 - 11点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/18.png', left: '主有朋友相见大吉', right: ''},
                        {time: '午时', timeExplain: '11点 - 13点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/19.png', left: '又有平易一占身吉', right: ''},
                        {time: '未时', timeExplain: '13点 - 15点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/20.png', left: '主有财喜占身大吉', right: ''},
                        {time: '申时', timeExplain: '15点 - 17点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/21.png', left: '主有口舌得财之事', right: ''},
                        {time: '酉时', timeExplain: '17点 - 19点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/22.png', left: '主失财招凶事大凶', right: ''},
                        {time: '戌时', timeExplain: '19点 - 21点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/23.png', left: '主有远行人至大吉', right: ''},
                        {time: '亥时', timeExplain: '21点 - 23点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/24.png', left: '主有喜庆之事大吉', right: ''},
                    ]
                },
                {
                    id: '6',
                    name: '耳鸣',
                    explain: '耳朵产生耳鸣',
                    detailed: [
                        {time: '子时', timeExplain: '23点 - 01点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/13.png', left: '左有女思', right: '有主失财'},
                        {time: '丑时', timeExplain: '01点 - 03点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/14.png', left: '左主口舌', right: '右主词讼'},
                        {time: '寅时', timeExplain: '03点 - 05点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/15.png', left: '左主失财', right: '右主心急'},
                        {time: '卯时', timeExplain: '05点 - 07点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/16.png', left: '左主坎坷', right: '右主客至'},
                        {time: '辰时', timeExplain: '07点 - 09点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/17.png', left: '左主远行', right: '右客自至'},
                        {time: '巳时', timeExplain: '09点 - 11点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/18.png', left: '左主凶事', right: '右主大吉'},
                        {time: '午时', timeExplain: '11点 - 13点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/19.png', left: '左主远人', right: '右主亲来'},
                        {time: '未时', timeExplain: '13点 - 15点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/20.png', left: '左主酒食', right: '右远人来'},
                        {time: '申时', timeExplain: '15点 - 17点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/21.png', left: '左主行人', right: '右主喜事'},
                        {time: '酉时', timeExplain: '17点 - 19点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/22.png', left: '左主失财', right: '右主大吉'},
                        {time: '戌时', timeExplain: '19点 - 21点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/23.png', left: '左主酒食', right: '右主客来'},
                        {time: '亥时', timeExplain: '21点 - 23点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/24.png', left: '左主大吉', right: '右主酒食'},
                    ]
                },
                {
                    id: '7',
                    name: '衣留',
                    explain: '被东西勾烂衣服，并且留下衣碎',
                    detailed: [
                        {time: '子时', timeExplain: '23点 - 01点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/13.png', left: '男主酒食女主亲事', right: ''},
                        {time: '丑时', timeExplain: '01点 - 03点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/14.png', left: '主有愁思破财之事', right: ''},
                        {time: '寅时', timeExplain: '03点 - 05点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/15.png', left: '主亲人有忧事来凶', right: ''},
                        {time: '卯时', timeExplain: '05点 - 07点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/16.png', left: '主交友相会酒食吉', right: ''},
                        {time: '辰时', timeExplain: '07点 - 09点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/17.png', left: '主目已破财忧思事', right: ''},
                        {time: '巳时', timeExplain: '09点 - 11点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/18.png', left: '主女人外心有凶事', right: ''},
                        {time: '午时', timeExplain: '11点 - 13点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/19.png', left: '主有远人至得财吉', right: ''},
                        {time: '未时', timeExplain: '13点 - 15点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/20.png', left: '主有血刃之变大凶', right: ''},
                        {time: '申时', timeExplain: '15点 - 17点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/21.png', left: '主大得财源大吉利', right: ''},
                        {time: '酉时', timeExplain: '17点 - 19点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/22.png', left: '主有人至破财大凶', right: ''},
                        {time: '戌时', timeExplain: '19点 - 21点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/23.png', left: '主有讼得好人大吉', right: ''},
                        {time: '亥时', timeExplain: '21点 - 23点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/24.png', left: '主有喜得财大吉利', right: ''},
                    ]
                },
                {
                    id: '8',
                    name: '釜鸣',
                    explain: '所有炉煲在煮食时发生不寻常之声响',
                    detailed: [
                        {time: '子时', timeExplain: '23点 - 01点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/13.png', left: '主养六畜平安大吉', right: ''},
                        {time: '丑时', timeExplain: '01点 - 03点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/14.png', left: '主家宅富贵大吉利', right: ''},
                        {time: '寅时', timeExplain: '03点 - 05点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/15.png', left: '主自家宅凶险之事', right: ''},
                        {time: '卯时', timeExplain: '05点 - 07点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/16.png', left: '主有客来祸至大凶', right: ''},
                        {time: '辰时', timeExplain: '07点 - 09点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/17.png', left: '主自有得财者大吉', right: ''},
                        {time: '巳时', timeExplain: '09点 - 11点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/18.png', left: '主有财喜临身大吉', right: ''},
                        {time: '午时', timeExplain: '11点 - 13点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/19.png', left: '主有官非消去者吉', right: ''},
                        {time: '未时', timeExplain: '13点 - 15点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/20.png', left: '主有凶祸之事大吉', right: ''},
                        {time: '申时', timeExplain: '15点 - 17点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/21.png', left: '主有远行人至者吉', right: ''},
                        {time: '酉时', timeExplain: '17点 - 19点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/22.png', left: '主有好人回来大吉', right: ''},
                        {time: '戌时', timeExplain: '19点 - 21点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/23.png', left: '主有酒食宴会之事', right: ''},
                        {time: '亥时', timeExplain: '21点 - 23点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/24.png', left: '主官非有理大吉利', right: ''},
                    ]
                },
                {
                    id: '9',
                    name: '火逸',
                    explain: '煮食时火焰产生不寻常的火焰',
                    detailed: [
                        {time: '子时', timeExplain: '23点 - 01点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/13.png', left: '妻有外心不吉之事', right: ''},
                        {time: '丑时', timeExplain: '01点 - 03点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/14.png', left: '妻有外心不吉之事', right: ''},
                        {time: '寅时', timeExplain: '03点 - 05点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/15.png', left: '主有财喜平安大吉', right: ''},
                        {time: '卯时', timeExplain: '05点 - 07点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/16.png', left: '主得财帛亨通之兆', right: ''},
                        {time: '辰时', timeExplain: '07点 - 09点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/17.png', left: '主忧心有不吉之兆', right: ''},
                        {time: '巳时', timeExplain: '09点 - 11点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/18.png', left: '主有吉兆酒食之会', right: ''},
                        {time: '午时', timeExplain: '11点 - 13点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/19.png', left: '主有官司人灾之兆', right: ''},
                        {time: '未时', timeExplain: '13点 - 15点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/20.png', left: '主有财喜相得之兆', right: ''},
                        {time: '申时', timeExplain: '15点 - 17点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/21.png', left: '主有财帛相得之兆', right: ''},
                        {time: '酉时', timeExplain: '17点 - 19点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/22.png', left: '主有灾凶变报之兆', right: ''},
                        {time: '戌时', timeExplain: '19点 - 21点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/23.png', left: '主忧心见得理之兆', right: ''},
                        {time: '亥时', timeExplain: '21点 - 23点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/24.png', left: '主生疾病不妨之兆', right: ''},
                    ]
                },
                {
                    id: '10',
                    name: '鸦鸣',
                    explain: '突然听到乌鸦叫',
                    detailed: [
                        {time: '子时', timeExplain: '23点 - 01点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/13.png', left: '主有远亲人至大吉', right: ''},
                        {time: '丑时', timeExplain: '01点 - 03点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/14.png', left: '主有大喜庆事大吉', right: ''},
                        {time: '寅时', timeExplain: '03点 - 05点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/15.png', left: '主夫得利帛大吉利', right: ''},
                        {time: '卯时', timeExplain: '05点 - 07点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/16.png', left: '主有吉事酒食大吉', right: ''},
                        {time: '辰时', timeExplain: '07点 - 09点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/17.png', left: '主有行人回家大吉', right: ''},
                        {time: '巳时', timeExplain: '09点 - 11点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/18.png', left: '主有吉事酒食之会', right: ''},
                        {time: '午时', timeExplain: '11点 - 13点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/19.png', left: '主有病患求神保佑', right: ''},
                        {time: '未时', timeExplain: '13点 - 15点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/20.png', left: '主有六畜不见之凶', right: ''},
                        {time: '申时', timeExplain: '15点 - 17点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/21.png', left: '主有吉兆之事大吉', right: ''},
                        {time: '酉时', timeExplain: '17点 - 19点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/22.png', left: '主有坎坷不安之事', right: ''},
                        {time: '戌时', timeExplain: '19点 - 21点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/23.png', left: '主有财帛立至大吉', right: ''},
                        {time: '亥时', timeExplain: '21点 - 23点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/24.png', left: '主有是非口舌之事', right: ''},
                    ]
                },
                {
                    id: '11',
                    name: '犬吠',
                    explain: '没有狗的时间及地方下突然听到有狗吠',
                    detailed: [
                        {time: '子时', timeExplain: '23点 - 01点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/13.png', left: '主妇不时争闻之事', right: ''},
                        {time: '丑时', timeExplain: '01点 - 03点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/14.png', left: '主心有忧不吉之事', right: ''},
                        {time: '寅时', timeExplain: '03点 - 05点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/15.png', left: '主夫得财帛大吉利', right: ''},
                        {time: '卯时', timeExplain: '05点 - 07点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/16.png', left: '望夫雄心得财大吉', right: ''},
                        {time: '辰时', timeExplain: '07点 - 09点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/17.png', left: '主有财喜大享通吉', right: ''},
                        {time: '巳时', timeExplain: '09点 - 11点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/18.png', left: '主亲人来即有信至', right: ''},
                        {time: '午时', timeExplain: '11点 - 13点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/19.png', left: '主有酒食宴会大吉', right: ''},
                        {time: '未时', timeExplain: '13点 - 15点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/20.png', left: '主妻子死不吉者凶', right: ''},
                        {time: '申时', timeExplain: '15点 - 17点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/21.png', left: '主家宅有小口之凶', right: ''},
                        {time: '酉时', timeExplain: '17点 - 19点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/22.png', left: '主加冠进禄者大吉', right: ''},
                        {time: '戌时', timeExplain: '19点 - 21点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/23.png', left: '主有口舌招灾者凶', right: ''},
                        {time: '亥时', timeExplain: '21点 - 23点 前', img: 'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/jixiong/24.png', left: '主有官非词讼之事', right: ''},
                    ]
                }
            ]
    }
  },
  mounted: function(){
  	this.$nextTick(()=>{
  		var i=this.$route.query.id 
    this.tit=this.list[i].name
    document.title=this.tit+'征兆'
    this.headTit=this.list[i].explain
    this.li=this.list[i].detailed
    this.GetRequest()
  	})
    

  },
  components: {
    Tit, Btn
  },
  methods: {
       GetRequest() {  
     let url=window.location.hash
		 let subStrs=url.split("?")	
		 this.send=subStrs[1]	
		 let li=this.send.split('&')	 
		var i=li[0].lastIndexOf("code")
	   this.sCode=i
	 },
   oncodeSuccess(res){
             let code=res.object
				 share.toShare('吉凶征兆','jxResult?code='+code+'&id='+this.$route.query.id,'http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/static/share/measure_8.png')
			},
			oncodeError(res){
				 this.$dialog.alert({mes:res})
			},
			toShare(){
				 httputil.doRequest('/Common/getShareCode',{'sType':9},1,this.oncodeSuccess,this.oncodeError,true) 
			
		}
  }
}

</script>
<style scoped>
.full-container {
  width: 100%;
  color: #666160;
  font-size: 15px;
}
.share{
		width: 45px;
		height: 45px;
		position: fixed;
		top:85%;
		right:15px;
	}
.jx-head{
	height: 60px;
	line-height: 60px;
	padding-left: 8px;
}
.jx-li-top{
	height:30px;
	text-align: center;
	width: 100%;
	border-bottom: 1px solid #ccc;
	line-height: 30px;
}
.flex{
	display: flex;
	justify-content: center;
	align-items: center;
}
.jx-left-img{
	width: 25%;
	height:100%;
	
}
.jx-box{
	height:100px;
	
}
.jx-li-right{
	width: 75%;
	border-left: 1px solid #ccc;
	height:100%;
}
.right-text{
	height:50%;
	justify-content:center;
	display: flex;
	align-items: center;
}
.rightTop{
	height:100%;
}
</style>


