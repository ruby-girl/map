<template>
  <div style="color:#666160;" class="container">

    <div style="padding:20px 15px;border-top:1px solid #e9e9e9;">
      <form action="http://calendar.lanbobo.cn/Master/postCardInfo" enctype="multipart/form-data" method="post">
        <div class="lists">
          <div class="xx">真实姓名</div>
          <input type="text" v-model='uname' @blur="name()" name="uname">
          <div class="bcImg1" v-show='a1'>
            <img src="http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/application/2.png" alt="" style="width:100%;">
          </div>
          <div class="bcImg2" v-show='a2'>
            <img src="http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/application/3.png" alt="" style="width:100%;">
          </div>
        </div>
        <div class="lists">
          <div class="xx">手机号码</div>
          <input type="text" v-model="phone" @blur="toPhone()" name="ii">
          <div class="bcImg1" v-show='p1'>
            <img src="http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/application/2.png" alt="" style="width:100%;">
          </div>
          <div class="bcImg2" v-show='p2'>
            <img src="http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/application/3.png" alt="" style="width:100%;">
          </div>
        </div>
        <div class="lists">
          <div class="xx">身份证号</div>
          <input type="text" v-model="shen" @blur="toShen()" name="jj">
          <div class="bcImg1" v-show='s1'>
            <img src="http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/application/2.png" alt="" style="width:100%;">
          </div>
          <div class="bcImg2" v-show='s2'>
            <img src="http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/application/3.png" alt="" style="width:100%;">
          </div>
        </div>
        <div class="fileList">
          <div class="xx">手持身份证</div>
          <!--模仿input样式-->
          <div class="fileinput-button" @click="getCover(5)">
            <img :src="toJava" alt="" style="width:90px; padding:4px" v-show="toJava!=''">
            <span class="fileText">上传文件</span>
            <!--<input type="file" @change="fileChange" id="FT">-->
          </div>
          <!--模仿end-->
          <div class="fileImg1" v-show='f1'>
            <img src="http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/application/2.png" alt="" style="width:100%;">
          </div>
          <div class="fileImg2" v-show='f2'>
            <img src="http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/application/3.png" alt="" style="width:100%;">
          </div>
        </div>
        <div class="lists" style="height:80px;">
          <div class="xx">个人介绍</div>
          <textarea name="jiesao" id="" @blur="toJiesao()" v-model="jiesao"></textarea>
          <div class="bcImg1" v-show='g1'>
            <img src="http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/application/2.png" alt="" style="width:100%;">
          </div>
          <div class="bcImg2" v-show='g2'>
            <img src="http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/application/3.png" alt="" style="width:100%;">
          </div>
        </div>
        <!--新增图片介绍-->
        <div class="fileList">
          <div class="xx">图文介绍</div>
          <!--模仿input样式-->
          <div class="fileinput-add">
            <label for="tu1" class="addImg" v-if="res==''" @click="getCover(1)">
              <!--<upload :url="uploadUrl" :multiple="true" :id="tu" @getUrl="getP" style="position: absolute;left:-99999px"></upload>-->
              <img style="width:100%;" src="http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/DSpersonl/aImg.png" alt="">
            </label>
            <img v-if="res!=''" class="addImg" :src="res" alt="" @click="res=''">
            <label for="tu2" class="addImg" style="margin:0 4%;" v-if="rem==''" @click="getCover(2)">
              <!--<upload :url="uploadUrl" :multiple="true" :id="ti" @getUrl="getPi" style="position: absolute;left:-99999px"></upload>-->
              <img style="margin:0 4%;width:100%;" src="http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/DSpersonl/aImg.png" alt="">
            </label>
            <img v-if="rem!=''" style="margin:0 4%;" class="addImg" :src="rem" alt="" @click="rem=''">
            <label for="tu3" class="addImg" v-if="rea==''" @click="getCover(3)">
              <!--<upload :url="uploadUrl" :multiple="true" :id="to" @getUrl="getPic" style="position: absolute;left:-99999px"></upload>-->
              <img style="width:100%;" src="http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/DSpersonl/aImg.png" alt="">
            </label>

            <img v-if="rea!=''" class="addImg" :src="rea" alt="" @click="rea=''">
          </div>
          <!--模仿end-->
          <div class="fileImg1" v-show='l1'>
            <img src="http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/application/2.png" alt="" style="width:100%;">
          </div>
          <div class="fileImg2" v-show='l2'>
            <img src="http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/application/3.png" alt="" style="width:100%;">
          </div>
        </div>
        <!--列表头像-->
         <div class="fileList" style="margin-top:25px;">
          <div class="xx">封面照</div>
          <div  class="fileinput-add" @click="getCover(4)"> 
              <div style="border:1px solid #eee;width:100%;display:flex;height:50px;">
                <img :src="fileCover" alt="" style="width:90px;height:50px; padding:4px;display:" v-show="fileCover!=''">
                <span class="fileText" style="height:50px;border-bottom-right-radius: 3px;">上传文件</span>
              </div>
            </div>
          <div class="fileImg1" v-show='m1'>
            <img src="http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/application/2.png" alt="" style="width:100%;">
          </div>
          <div class="fileImg2" v-show='m2'>
            <img src="http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/application/3.png" alt="" style="width:100%;">
          </div>
        </div>
        <!--图片end-->
      </form>
      <!--同意阅读-->
      <div>
        <label for="okText" class="ok">
          <input type="radio" id="okText" style="opacity:0;">
          <div class="okInput" @click="Yes()">
            <div class="bc" v-show="redBc"></div>
          </div>
          <div @click="Yes()">阅读并同意
            
          </div>
          <div @click="showText=true">
            <i style="color:#1a80fc;" >《算命师服务及管理协议》</i>
          </div>
        </label>
      </div>
    </div>
    <div class="ks-cai-input" @click="next()">
      <!--<Btn :btnMsg='TJtxt' @click.native="next()"></Btn>   -->
      <div :class="{'ks-button-y':true,'bc-hui':TJtxt=='提交完成'}">提交资料</div>
    </div>
  <div v-show="showText" class="showText line" @click="showText=false">
      <div style="font-size:15px;text-align:center;padding:8px 0;font-weight:bold;">大师注册同意服务条款和授权书</div>
      <div class="text_tit">第一条 同意接受条款</div>
      <div>1.1为保障您的权益，请您注册成为大师用户前，详细阅览以下规定。一旦您注册为本系统的大师用户，即表示同意并遵守以下所有规定。</div>
      <div>1.2以下文中提及的“本系统”均特指“微易道”系统。</div>
      <div>1.3用户于本系统注册成为大师后，大师资格范围仅限于本系统，当用户使用系统所提供各项服务时，应遵守如下协议及当地之法律规定。</div>
      <div class="text_tit">第二条申请流程</div>
      <div>2.1普通会员登录后，进入“我”之后“申请大师”，点击【申请成为大师】。按要求答题后填写个人真实资料，并上传身份证资料和行业案例照片等，提交后台审核。</div>
      <div>2.3.后台审核通过后，大师可登录账户自行编辑个人介绍，服务项目和定价。</div>
      <div>2.4.大师对个人账号及密码之安全负完全责任。用户不应将其账号、密码转让或出借予他人使用。如用户发现其账号遭他人非法使用，应立即通知系统客服。因黑客行为或用户的保管疏忽导致账号、密码遭他人非法使用，本系统不承担任何责任。</div>
      <div class="text_tit">第三条收入提成及结算</div>
      <div>3.1本系统是一个综合交流和提供服务的综合平台，大师用户可通过本系统接单，为普通会员提供起名、预测、风水等方面的一对一收费服务。大师用户在完成订单后，可进行服务费用的提成。提成规定如下：注册的大师用户提成比例为70%</div>
      <div>3.2系统仅提供相关的平台服务，除此之外与相关网络服务有关的设备（如个人计算机、手机、及其它与接入互联网有关的装置）及所需的费用（如为接入互联网而支付的电话费及上网费）均应由用户自行负担。</div>
      <div>3.3网站不代扣个人所得税，若收入达到当地的交税标准，请自行到当地地税申报个人所得税。</div>
      <div>3.4结算规定：</div>
      <div>3.4.1登录预测师账户，点击购买/兑换易道币。选择“提现易道币”，填写提现数后提交。*请注意可以申请兑换的金额为账户中15天前的收入总额，每月您可以申请兑换1次。</div>
      <div>3.4.2网站核实金额，审核通过后直接付款存入预测师的支付宝/微信账户。其它关于订单的管理细则：</div>
      <div>3.4.3您不可要求客户直接付费预测，要提供试测过程。对于直接付费下单的客户，如果觉得项目不适合的试测，要向客户提前告知。违反者被投诉，查证属实者取消定单，并按定单的算易道币数扣减同分数的活跃分数。</div>
      <div>3.4.4大师接单后必须及时或通过站内信主动预约客户提供解答服务。违反者被投诉，查证属实者按定单的算易道币数扣减同分数的评分。</div>
      <div>3.4.5预测单里只能进行预测服务，不得留给客户任何联系方式和联系地址，网站发现缺省修改为策划单，若不同意修改则退单处理，按定单的算易道币数扣减同分数的评分。</div>
      <div>3.4.6策划单只能提供增事业财运，增感情婚姻，增健康（不包括治病及延寿），风水调理等任何带效果的服务，必须在策划单里完成；下单之日起半年内的线上订单，预测师信用良好，从来没有违反过网站规定，在网站允许的服务范围内因无效引起的退款，则预测师只退提成部分，否则预测师退订单金额的全额；策划单取消或退单，按定单的算易道币数扣减同分数的评分。线下策划单为5000元起，线下订单网站不参与处理任何事务，网站订单不退。</div>
      <div>3.4.7由于您个人原因（包括服务态度问题、预测水平问题、预测单里做了策划内容、违反网站规定、无法联系到您本人、账号暂停等原因）造成的任何退单，网站将从您的账户扣除定单的网站提成部分，并按定单的算易道币数扣减同分数的评分。</div>
      <div>3.4.8其他任何违反网站规定的行为由网站根据情节轻重酌情处理，严重者立即停止大师资格。</div>
      <div>3.4.9客户已完成预测而未正常结束的订单，预设72小时后自动结束并默认好评，客户有权利修改评价一次。</div>
      <div>3.4.10已经正常测过的订单不予退单。符合以下情况的，网站可不经客户或预测师同意进行退单处理.</div>
      <div>3.4.11尚未预测的订单，预测师不在线，客户要求退单，无论预测师是否同意退单的。</div>
      <div>3.4.12客户或预测师违反网站规定的。</div>
      <div class="text_tit">第四条服务变更、中断或终止</div>
      <div>4.1本系统有权随时停止或更改各项服务内容，并无需事先通知用户，对于停止或更改服务所可能导致之困扰、不便、损害，本系统不负任何责任。</div>
      <div>4.2如发生下列任何一种情形，本系统有权随时中断或终止向用户提供本协议项下的网络服务（包括收费网络服务）而无需对用户或任何第三承担任何责任： 用户提供的个人数据不真实； 用户违反本协议中规定的使用规则； 用户在使用收费服务时未按规定向本系统支付相应的服务费。</div>
      <div class="text_tit">第五条使用规则您在申请成为大师用户时，表明你会恪守职业道德，保护用户隐私，同意并遵守网站的大师服务协议，以及下列各项规则。违反者将被立即终止大师资格且没收全部提成收入。</div>
      <div>5.1您在申请成为大师用户时，必须向系统提供准确的基本信息、个人，如个人数据有任何变动，必须及时更新。您可使用本人真实姓名，但网名和介绍也不可带有任何提示个人通信和地址信息的内容，个人介绍中的执业年限、头衔和专业技术要真实，不得夸大其词、弄虚作假。</div>
      <div>5.2用户在使用“微易道”服务过程中，必须遵循以下原则：遵守中国有关的法律和法规，不得为任何非法目的而使用网络服务系统； 不得利用“微易道”网络服务系统进行任何可能对互联网正常运转造成不利影响的行为； 不得利用“微易道”提供的网络服务上传、展示或传播任何虚假的、骚扰性的、中伤他人的、辱骂性的、恐吓性的、庸俗淫秽的或其它任何非法的信息数据；不得侵犯其它任何第三方的专利权、著作权、商标权、名誉权或其它任何合法权益； 不得利用“微易道”网络服务系统进行任何不利于“微易道”的行为； 如发现任何非法使用用户账号或账号出现安全漏洞的情况，应立即通告“微易道”。</div>
      <div>5.3您不可通过任何方式试图规避或绕过网站和用户直接联系。你不可提供任何需要专业证照的咨询服务，如医生，律师，会计师等等。您不可提供任何与国家政治相关的预测服务。您不可提供任何与非法赌博相关以及和宗教类相关的预测服务。预测和服务方法仅限于周易、占星和风水，不得通灵和请仙，不可进行任何封建迷信活动。 您不可使用任何让客户感到不安的语言，更不可言语不逊，揭人所短，不可言语相轻，猥亵客户，不可辱骂攻击客户。您有义务保护用户的隐私，不得在群、论坛、微博等任何场合发布预测记录，不得提供预测记录和站内信给其他人。您不可在没有网站书面许可的情况下使用“微易道”的商标和名字。 同一IP地址只能由一个预测师使用，发生同一IP多个预测师登录本站一律按一人登录多个账号判别。账号只限于申请资料提交者本人使用，本人对在网站的一切言论和行为承担完全责任。</div>
      <div>5.4如用户在使用网络服务时违反任何上述规定，“微易道”或其授权的人有权要求用户改正或直接采取一切必要的措施（包括但不限于更改或删除用户张贴的内容等、暂停或终止用户使用网络服务的权利）以减轻用户不当行为造成的影响。</div>
      <div>5.5“微易道”针对某些特定的网络服务的使用通过各种方式（包括但不限于网页公告、电子邮件、短信提醒等）作出的任何声明、通知、警示等内容视为本协议的一部分，用户如使用该等“微易道”网络服务，视为用户同意该等声明、通知、警示的内容。</div>
      <div>5.6.网站保留不服务任何人的权利，并对规定有最终解释权。</div>
      <div class="text_tit">第六条隐私权保护</div>
      <div>6.1保护用户隐私是“微易道”的一项基本政策，“微易道”保证不对外公开或向第三方提供用户注册资料及用户在使用网络服务时存储在“微易道”的非公开内容，但下列情况除外： 事先获得用户的明确授权根据有关的法律法规要求按照相关政府主管部门的要求为维护社会公众的利益为维护“微易道”的合法权益。</div>
      <div>6.2“微易道”可能会与第三方合作向用户提供相关的网络服务，在此情况下，如该第三方同意承担与“微易道”同等的保护用户隐私的责任，则“微易道”可将用户的注册资料等提供给该第三方。</div>
       <div>6.3在不透露单个用户隐私资料的前提下，“微易道”有权对整个用户数据库进行分析并对用户数据库进行商业上的利用。</div>
      <div class="text_tit">第七条免责声明</div>
      <div>7.1用户明确同意其使用“微易道”网络服务所存在的风险将完全由其自己承担；因其使用“微易道”网络服务而产生的一切后果也由其自己承担，“微易道”对用户不承担任何责任。</div>
      <div>7.2“微易道”不担保网络服务一定能满足用户的要求，也不担保网络服务不会中断，对网络服务的及时性、安全性、准确性也都不作担保。</div>
      <div>7.3“微易道”不保证为向用户提供便利而设置的外部链接的准确性和完整性，同时，对于该等外部链接指向的不由“微易道”实际控制的任何网页上的内容，“微易道”不承担任何责任。</div>
      <div>7.4对于因不可抗力或“微易道”不能控制的原因造成的网络服务中断或其它缺陷，“微易道”不承担任何责任。</div>
      <div>7.5对于用户使用本网之各项服务、或因无法使用各项服务所产生的任何直接、间接、衍生、或特别损害，“微易道”不负任何赔偿责任。</div>
       <div class="text_tit">第八条协定修改</div>
      <div>8.1“微易道”有权随时修改本协议的任何条款，如果不同意“微易道”对本协议相关条款所做的修改，用户有权停止使用网络服务。如果用户继续使用网络服务，则视为用户接受“微易道”对本协议相关条款所做的修改。</div>
      <div class="text_tit">第九条损害赔偿</div>
      <div>9.1对于因违反相关法令或本协议所致生之一切实质损害、名誉毁损等，用户同意对“微易道”、其母公司、子公司、关系企业、受雇人及相关人员，负完全之损害赔偿责任。</div>
      <div class="text_tit">第十条广告刊登</div>
      <div>10.1用户了解“微易道”上刊登有商业广告及各种商品之促销信息。该等内容均系由广告商或商品服务提供人所为，“微易道”仅系提供刊登内容之媒介。用户透过本网所提供之商品、服务信息，所购买的任何商品、服务，其过程中之商业交易关系均存在于用户与商品服务提供者之间，与“微易道”无关。</div>
      <div class="text_tit">第十一条 一般规定</div>
      <div>11.1本协议的订立、执行和解释及争议的解决均应适用中国法律并受中国法院管辖。</div>
      <div>11.2如本协议中的任何条款无论因何种原因完全或部分无效或不具有执行力，本协议的其余条款仍应有效并且有约束力。</div>
      <div>11.3本协议中的标题仅为方便而设，在解释本协议时应被忽略。</div>
      <div class="text_tit">第十二条 大师授权</div>
      <div>12.1凡同意以上条款的大师自动同意将其个人发表的文章，视频等内容授权给“微易道”使用。</div>
      <div>12.2受委托方“微易道”将负责注册大师的全网络推广业务。</div>
      <div>12.3受委托方“微易道”严格按照法律有关规定，承诺转载或发行大师的个人文章和视频肯定标注作者名称。</div>
      
   </div>
  </div>
</template>
<script>
import Tit from '../../components/nav'
import Btn from '../../components/button'
import prox from '../../router/proxy.js'
import httputil from '../../httputil';

export default {
  name: 'MY',
  data() {
    return {
      uploadUrl: [],
      tu: 'tu1',
      ti: 'tu2',
      to: 'tu3',
      res: '',
      rem: '',
      rea: '',
      showText:false,
      a1: false,
      a2: false,
      p1: false,
      p2: false,
      s1: false,
      s2: false,
      f1: false,
      f2: false,
      g1: false,
      g2: false,
      l1: false,
      l2: false,
      redBc: false,
      shen: '',
      fileCover:'',
      m1:'',
      m2:'',
      uname: '',
      phone: '',
      jiesao: '',
      fileText: '',
      jsessionid: '',
      
      toJava: '',
      id: '',
      ty: '',
      type: '',
      toJavaUrl: null,
      cov:'cover',
      b:1
    }
  },
  	mounted () { 
			 window.h5GetImageUrl = this.h5GetImageUrl
		},
  components: {
    Tit, Btn, prox
  },
  created() {

    document.title = '申请算命师'

    this.type = navigator.userAgent.toLowerCase();
  },
  methods: {
    h5GetImageUrl(r){
    if(this.b==1){
      if(this.res==''){
        this.res=r
         this.l1 = true
        this.l2 = false
      }else if(this.rem==''){
        this.rem=r
         this.l1 = true
        this.l2 = false
      }else if(this.rea==''){
        this.rea=r
         this.l1 = true
        this.l2 = false
      }
    }else if(this.b==2){
       this.fileCover=r
       this.m1 = true
       this.m2 = false
    }else if(this.b==3){
       this.toJava=r
       this.f2 = false;
        this.f1 = true;
    }
    },
    getCover(i){
       let ua = navigator.userAgent.toLowerCase();
      if(i<4){
        this.b=1
          	if (/iphone|ipad|ipod/.test(ua)) {
         window.webkit.messageHandlers.iOS.postMessage({17:{'type':9}})  
        }else if(/android/.test(ua)){			
          window.YiDao.bussinessDistribute(32,JSON.stringify({'type':9})
					);
        }
      }else if(i==4){
         this.b=2
          	if (/iphone|ipad|ipod/.test(ua)) {
         window.webkit.messageHandlers.iOS.postMessage({17:{'type':8}})  
        }else if(/android/.test(ua)){			
          window.YiDao.bussinessDistribute(32,JSON.stringify({'type':8})
					);
        }
      }else if(i==5){
        this.b=3
        if (/iphone|ipad|ipod/.test(ua)) {
         window.webkit.messageHandlers.iOS.postMessage({17:{'type':1}})  
        }else if(/android/.test(ua)){			
          window.YiDao.bussinessDistribute(32,JSON.stringify({'type':1})
					);
        }
      }
    },
    name() {
      var reg = /^[\u4E00-\u9FA5]{2,6}$/;
      if (!this.uname.match(reg)) {
        this.a2 = true;
        this.a1 = false;
      } else {
        this.a2 = false;
        this.a1 = true;
      }
    },
    toPhone() {
      var reg = /^1[3|4|5|7|8][0-9]{9}$/;
      if (!this.phone.match(reg)) {
        this.p2 = true;
        this.p1 = false;
      } else {
        this.p2 = false;
        this.p1 = true;
      }
    },
    coverChange(){

    },
    toShen() {
      var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
      if (!this.shen.match(reg)) {
        this.s2 = true;
        this.s1 = false;
      } else {
        this.s2 = false;
        this.s1 = true;
      }
    },
    toJiesao() {
      if (this.jiesao == '') {
        this.g2 = true;
        this.g1 = false;
      } else {
        this.g2 = false;
        this.g1 = true;
      }
    },
    Yes() {
      var self = this;
         self.redBc = !self.redBc;
      
    },
    next() {
      this.uname == '' ? this.a2 = true : this.a1 = true;
      this.phone == '' ? this.p2 = true : this.p1 = true;
      this.shen == '' ? this.s2 = true : this.s1 = true;
      this.jiesao == '' ? this.g2 = true : this.g1 = true;
      this.toJava == '' ? this.f2 = true : this.f1 = true;
      //  this.fileCover == '' ? this.m2 = true : this.m1 = true;
      if (this.rem == '' && this.res == '' && this.rea == '') {
        this.l2 = true
      } else {
        this.l1 = true
      }
      if (this.a1 && this.p1 && this.s1 && this.g1 && this.f1 && this.l1 && this.redBc == true) {
        this.toJavaUrl = this.res + ',' + this.rem + ',' + this.rea
        
        httputil.doRequest('/Master/register', { 'cardId': this.shen, 'realName': this.uname, 'tel': this.phone, 'masterDesc': this.jiesao, 'cardPath': this.toJava, 'descPath': this.toJavaUrl,'coverPath':this.fileCover }, 1, this.onSuccess, this.onError, true)

        // 上面师if
      } else {
        if (this.redBc == false) {
          this.$dialog.alert({ mes: '您需要同意服务及管理协议' })
        }
      }
    },
    onSuccess(res) {
      if (res.code == 200) {
        this.$dialog.alert({
          mes: '资料提交成功', callback: () => {
            if (/iphone|ipad|ipod/.test(this.type)) {
              window.webkit.messageHandlers.iOS.postMessage({ 4: { 'windowID': 10004 } })
              // iOS.postMessage({4:{'windowID':10004}})	

            } else if (/android/.test(this.type)) {
              window.YiDao.bussinessDistribute(4, "{'windowID':10004}")
            }
          }
        })
      } else {
        this.$dialog.alert({ mes: res.message })
      }


    },
    onError(res) {
      this.$dialog.alert({ mes: res })
    }
  }
}

</script>
<style scoped>
.ks-cai-input {
  padding: 8px;
}

.lists {
  display: flex;
  height: 40px;
  line-height: 40px;
  margin-bottom: 15px;
  position: relative;
}

.fileList {
  display: flex;
  height: 50px;
  line-height: 50px;
  margin-bottom: 15px;
  position: relative;
}

.lists::before {
  content: '*';
  color: #e4393c;
  padding: 2px 4px 0 3px;
  
}

.fileList::before {
  content: '*';
  color: #e4393c;
  padding: 4px;
}

.ok {
  display: flex;
  height: 25px;
  line-height: 25px;
  font-size: 13px;
  justify-content: center;
}

.okInput {
  width: 12px;
  height: 12px;
  border: 1px solid #666160;
  margin: 6px 6px 0 0;
}

.addImg {
  width: 30%;
}

.line{
  line-height: 16px;
}

/*仿input样式*/

.fileinput-button {
  position: relative;
  border: 1px solid #e9e9e9;
  margin-left: 2px;
  width: 59%;
  border-radius: 4px;
  padding-left: 3px;
  color: #666160;
  height: 50px;
  overflow: hidden;
  display: flex;
  line-height: 50px;
  
}
.text_tit{
  font-size: 14px;
  padding: 10px 0;
  font-weight: bold;
}
.fileinput-add {
  position: relative;

  width: 59%;
  border-radius: 4px;

  color: #666160;
  height: 60px;
  overflow: hidden;
  display: flex;
}

.fileinput-button>input {
  position: absolute;
  right: -15px;
  top: 0px;
  opacity: 0;
}

.fileText {
  padding: 0 5px;
  height: 100%;
  background: #1a80fc;
  position: absolute;
  right: 0;
  border: 1px solid #1a80fc;
  font-size: 14px;
  color: #fff;
}
input[type="text"] {
  -webkit-appearance: none;
}
.xx {
  font-size: 15px;
  width: 28%;
  
}

.lists input {
  display: inline-block;
  border: 1px solid #e9e9e9;
  margin-left: 2px;
  width: 59%;
  border-radius: 4px;
  padding-left: 5px;
  color: #666160;
}

textarea {
  border: 1px solid #e9e9e9;
  width: 59%;
  border-radius: 4px;
  padding: 4px;
  color: #666160;
}

.text {
  width: 200px;
  height: 80px;
}

.bcImg1 {
  width: 6%;
  position: absolute;
  right: 0;
  top: 9px;
}

.bcImg2 {
  width: 6%;
  position: absolute;
  right: 0;
  top: 9px;
}

.fileImg1 {
  width: 6%;
  position: absolute;
  right: 0;
  top: 15px;
}

.fileImg2 {
  width: 6%;
  position: absolute;
  right: 0;
  top: 15px;
}

.bc {
  margin: 1px;
  width: 8px;
  height: 8px;
  background: #e4393c;
}

.ks-button-y {
  width: 100%;
  outline: none;
  border: none;
  background: #E4393C;
  color: white;
  height: 40px;
  font-size: 16px;
  line-height: 40px;
  border-radius: 10px;
  text-align: center;
}

.bc-hui {
  background: #aaa;
}
.showText{
  position: absolute;
  width:86%;
  height: 90%;
  top:5%;
  left:7%;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  background: #E8E8E8;
  padding: 15px;
  border-radius: 10px;
}
</style>


