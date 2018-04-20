<template>
  <div style="color:#666160;" class="container">
    <!--<Tit :title="tit" bgcolor="#fff;" co="#000" fsize="1.1rem"></Tit>-->
    <!--<div class="nav">
        申请算命师（初级）
      </div>-->
    <div style="padding:10px 10px 100px 10px;border-top:1px solid #e9e9e9;">
      <!--题目list-->
      <div>
        <!--第一题-->
        <div>1. {{list[0].question}}
          <span class="duoxuan" v-if='list[0].answerType==2'>[多选]</span>
          <span class="duoxuan" v-if='list[0].answerType==1'>[单选]</span>
          <span class="duoxuan" v-if='list[0].answerType==3'>[判断]</span>
          <span class="cha" v-show="chaA">×</span>
        </div>
  
        <div v-if='list[0].answerType==3' class="result">
          <label for="aa" class="resultA">
            <input type="radio" value='A' v-model="t01" id="aa">
            <div class="ks-radio"></div>
            <div>{{list[0].a}}</div>
          </label>
          <label for="bb" class="resultA">
            <input type="radio" value='B' v-model="t01" id="bb">
            <div class="ks-radio"></div>
            <div>{{list[0].b}}</div>
          </label>
        </div>
  
        <!--上面是判断题的样式-->
        <div class="result" v-if='list[0].answerType!=3'>
          <label for="aa" class="resultA">
            <input type="radio" id="aa" value='A' v-model="t01" v-if='list[0].answerType==1'>
            <input type="checkbox" id="aa" value='A' v-model="t01" v-if='list[0].answerType==2'>
            <div class="ks-radio">A</div>
            <div>{{list[0].a}}</div>
          </label>
          <label for="bb" class="resultA">
            <input type="radio" id="bb" value='B' v-model="t01" v-if='list[0].answerType==1'>
            <input type="checkbox" id="bb" value='B' v-model="t01" v-if='list[0].answerType==2'>
  
            <div class="ks-radio">B</div>
            <div>{{list[0].b}}</div>
          </label>
          <label for="cc" class="resultA">
            <input type="radio" id="cc" value='C' v-model="t01">
  
            <div class="ks-radio">C</div>
            <div>{{list[0].c}}</div>
          </label>
          <label for="dd" class="resultA">
            <input type="radio" id="dd" value='D' v-model="t01">
            <div class="ks-radio">D</div>
            <div>{{list[0].d}}</div>
          </label>
        </div>
        <!--第二题-->
        <div>2. {{list[1].question}}
          <span class="duoxuan" v-if='list[1].answerType==2'>[多选]</span>
          <span class="duoxuan" v-if='list[1].answerType==1'>[单选]</span>
          <span class="duoxuan" v-if='list[1].answerType==3'>[判断]</span>
          <span class="cha" v-show="chaB">×</span>
        </div>
        <div v-if='list[1].answerType==3' class="result">
          <label for="aa1" class="resultA">
            <input type="radio" value='A' v-model="t02" id="aa1">
            <div class="ks-radio"></div>
            <div>{{list[1].a}}</div>
          </label>
          <label for="bb2" class="resultA">
            <input type="radio" value='B' v-model="t02" id="bb1">
            <div class="ks-radio"></div>
            <div>{{list[1].b}}</div>
          </label>
        </div>
  
        <div class="result" v-if='list[1].answerType!=3'>
          <label for="aa1" class="resultA">
            <input type="radio" id="aa1" value='A' v-model="t02" v-if='list[1].answerType==1'>
            <input type="checkbox" id="aa1" value='A' v-model="t02" v-if='list[1].answerType==2'>
            <div class="ks-radio">A</div>
            <span></span>
            <div>{{list[1].a}}</div>
          </label>
          <label for="bb1" class="resultA">
            <input type="radio" id="bb1" value='B' v-model="t02" v-if='list[1].answerType==1'>
            <input type="checkbox" id="bb1" value='B' v-model="t02" v-if='list[1].answerType==2'>
            <div class="ks-radio">B</div>
            <div>{{list[1].b}}</div>
          </label>
          <label for="cc1" class="resultA">
            <input type="radio" id="cc1" value='C' v-model="t02" v-if='list[1].answerType==1'>
            <input type="checkbox" id="cc1" value='C' v-model="t02" v-if='list[1].answerType==2'>
            <div class="ks-radio">C</div>
            <div>{{list[1].c}}</div>
          </label>
          <label for="dd1" class="resultA">
            <input type="radio" id="dd1" value='D' v-model="t02" v-if='list[1].answerType==1'>
            <input type="checkbox" id="dd1" value='D' v-model="t02" v-if='list[1].answerType==2'>
            <div class="ks-radio">D</div>
            <div>{{list[1].d}}</div>
          </label>
        </div>
        <!--第三题-->
        <div>3. {{list[2].question}}
          <span class="duoxuan" v-if='list[2].answerType==2'>[多选]</span>
          <span class="duoxuan" v-if='list[2].answerType==1'>[单选]</span>
          <span class="duoxuan" v-if='list[2].answerType==3'>[判断]</span>
          <span class="cha" v-show="chaC">×</span>
        </div>
        <div v-if='list[2].answerType==3' class="result">
          <label for="aa2" class="resultA">
            <input type="radio" value='A' v-model="t03" id="aa2">
            <div class="ks-radio"></div>
            <div>{{list[2].a}}</div>
          </label>
          <label for="bb2" class="resultA">
            <input type="radio" value='B' v-model="t03" id="bb2">
            <div class="ks-radio"></div>
            <div>{{list[2].b}}</div>
          </label>
        </div>
  
        <div class="result" v-if='list[2].answerType!=3'>
          <label for="aa2" class="resultA">
            <input type="radio" id="aa2" value='A' v-model="t03" v-if='list[2].answerType==1'>
            <input type="checkbox" id="aa2" value='A' v-model="t03" v-if='list[2].answerType==2'>
            <div class="ks-radio">A</div>
            <span></span>
            <div>{{list[2].a}}</div>
          </label>
          <label for="bb2" class="resultA">
            <input type="radio" id="bb2" value='B' v-model="t03" v-if='list[2].answerType==1'>
            <input type="checkbox" id="bb2" value='B' v-model="t03" v-if='list[2].answerType==2'>
            <div class="ks-radio">B</div>
            <div>{{list[2].b}}</div>
          </label>
          <label for="cc2" class="resultA">
            <input type="radio" id="cc2" value='C' v-model="t03" v-if='list[2].answerType==1'>
            <input type="checkbox" id="cc2" value='C' v-model="t03" v-if='list[2].answerType==2'>
            <div class="ks-radio">C</div>
            <div>{{list[2].c}}</div>
          </label>
          <label for="dd2" class="resultA">
            <input type="radio" id="dd2" value='D' v-model="t03" v-if='list[2].answerType==1'>
            <input type="checkbox" id="dd2" value='D' v-model="t03" v-if='list[2].answerType==2'>
            <div class="ks-radio">D</div>
            <div>{{list[2].d}}</div>
          </label>
        </div>
        <!--第四题-->
        <div>4. {{list[3].question}}
          <span class="duoxuan" v-if='list[3].answerType==2'>[多选]</span>
          <span class="duoxuan" v-if='list[3].answerType==1'>[单选]</span>
          <span class="duoxuan" v-if='list[3].answerType==3'>[判断]</span>
          <span class="cha" v-show="chaD">×</span>
        </div>
        <div v-if='list[3].answerType==3' class="result">
          <label for="aa4" class="resultA">
            <input type="radio" value='A' v-model="t04" id="aa4">
            <div class="ks-radio"></div>
            <div>{{list[3].a}}</div>
          </label>
          <label for="bb4" class="resultA">
            <input type="radio" value='B' v-model="t04" id="bb4">
            <div class="ks-radio"></div>
            <div>{{list[3].b}}</div>
          </label>
        </div>
  
        <div class="result" v-if='list[3].answerType!=3'>
          <label for="aa4" class="resultA">
            <input type="radio" id="aa4" value='A' v-model="t04" v-if='list[3].answerType==1'>
            <input type="checkbox" id="aa4" value='A' v-model="t04" v-if='list[3].answerType==2'>
            <div class="ks-radio">A</div>
            <span></span>
            <div>{{list[3].a}}</div>
          </label>
          <label for="bb4" class="resultA">
            <input type="radio" id="bb4" value='B' v-model="t04" v-if='list[3].answerType==1'>
            <input type="checkbox" id="bb4" value='B' v-model="t04" v-if='list[3].answerType==2'>
            <div class="ks-radio">B</div>
            <div>{{list[3].b}}</div>
          </label>
          <label for="cc4" class="resultA">
            <input type="radio" id="cc4" value='C' v-model="t04" v-if='list[3].answerType==1'>
            <input type="checkbox" id="cc4" value='C' v-model="t04" v-if='list[3].answerType==2'>
            <div class="ks-radio">C</div>
            <div>{{list[3].c}}</div>
          </label>
          <label for="dd4" class="resultA">
            <input type="radio" id="dd4" value='D' v-model="t04" v-if='list[3].answerType==1'>
            <input type="checkbox" id="dd4" value='D' v-model="t04" v-if='list[3].answerType==2'>
            <div class="ks-radio">D</div>
            <div>{{list[3].d}}</div>
          </label>
        </div>
        <!--第五题-->
        <div>5. {{list[4].question}}
          <span class="duoxuan" v-if='list[4].answerType==2'>[多选]</span>
          <span class="duoxuan" v-if='list[4].answerType==1'>[单选]</span>
          <span class="duoxuan" v-if='list[4].answerType==3'>[判断]</span>
          <span class="cha" v-show="chaE">×</span>
        </div>
  
        <div v-if='list[4].answerType==3' class="result">
          <label for="aa5" class="resultA">
            <input type="radio" value='A' v-model="t05" id="aa5">
            <div class="ks-radio"></div>
            <div>{{list[4].a}}</div>
          </label>
          <label for="bb5" class="resultA">
            <input type="radio" value='B' v-model="t05" id="bb5">
            <div class="ks-radio"></div>
            <div>{{list[4].b}}</div>
          </label>
        </div>
  
        <div class="result" v-if='list[4].answerType!=3'>
          <label for="aa5" class="resultA">
            <input type="radio" id="aa5" value='A' v-model="t05" v-if='list[4].answerType==1'>
            <input type="checkbox" id="aa5" value='A' v-model="t05" v-if='list[4].answerType==2'>
            <div class="ks-radio">A</div>
            <span></span>
            <div>{{list[4].a}}</div>
          </label>
          <label for="bb5" class="resultA">
            <input type="radio" id="bb5" value='B' v-model="t05" v-if='list[4].answerType==1'>
            <input type="checkbox" id="bb5" value='B' v-model="t05" v-if='list[4].answerType==2'>
            <div class="ks-radio">B</div>
            <div>{{list[4].b}}</div>
          </label>
          <label for="cc5" class="resultA">
            <input type="radio" id="cc5" value='C' v-model="t05" v-if='list[4].answerType==1'>
            <input type="checkbox" id="cc5" value='C' v-model="t05" v-if='list[4].answerType==2'>
            <div class="ks-radio">C</div>
            <div>{{list[4].c}}</div>
          </label>
          <label for="dd5" class="resultA">
            <input type="radio" id="dd5" value='D' v-model="t05" v-if='list[4].answerType==1'>
            <input type="checkbox" id="dd5" value='D' v-model="t05" v-if='list[4].answerType==2'>
            <div class="ks-radio">D</div>
            <div>{{list[4].d}}</div>
          </label>
        </div>
        <!--第6题-->
        <div>6. {{list[5].question}}
          <span class="duoxuan" v-if='list[5].answerType==2'>[多选]</span>
          <span class="duoxuan" v-if='list[5].answerType==1'>[单选]</span>
          <span class="duoxuan" v-if='list[5].answerType==3'>[判断]</span>
          <span class="cha" v-show="chaF">×</span>
        </div>
        <div v-if='list[5].answerType==3' class="result">
          <label for="aa6" class="resultA">
            <input type="radio" value='A' v-model="t06" id="aa6">
            <div class="ks-radio"></div>
            <div>{{list[5].a}}</div>
          </label>
          <label for="bb6" class="resultA">
            <input type="radio" value='B' v-model="t06" id="bb6">
            <div class="ks-radio"></div>
            <div>{{list[5].b}}</div>
          </label>
        </div>
  
        <div class="result" v-if='list[5].answerType!=3'>
          <label for="aa6" class="resultA">
            <input type="radio" id="aa6" value='A' v-model="t06" v-if='list[5].answerType==1'>
            <input type="checkbox" id="aa6" value='A' v-model="t06" v-if='list[5].answerType==2'>
            <div class="ks-radio">A</div>
            <span></span>
            <div>{{list[5].a}}</div>
          </label>
          <label for="bb6" class="resultA">
            <input type="radio" id="bb6" value='B' v-model="t06" v-if='list[5].answerType==1'>
            <input type="checkbox" id="bb6" value='B' v-model="t06" v-if='list[5].answerType==2'>
            <div class="ks-radio">B</div>
            <div>{{list[5].b}}</div>
          </label>
          <label for="cc6" class="resultA">
            <input type="radio" id="cc6" value='C' v-model="t06" v-if='list[5].answerType==1'>
            <input type="checkbox" id="cc6" value='C' v-model="t06" v-if='list[5].answerType==2'>
            <div class="ks-radio">C</div>
            <div>{{list[5].c}}</div>
          </label>
          <label for="dd6" class="resultA">
            <input type="radio" id="dd6" value='D' v-model="t06" v-if='list[5].answerType==1'>
            <input type="checkbox" id="dd6" value='D' v-model="t06" v-if='list[5].answerType==2'>
            <div class="ks-radio">D</div>
            <div>{{list[5].d}}</div>
          </label>
        </div>
        <!--第七题-->
        <div>7. {{list[6].question}}
          <span class="duoxuan" v-if='list[6].answerType==2'>[多选]</span>
          <span class="duoxuan" v-if='list[6].answerType==1'>[单选]</span>
          <span class="duoxuan" v-if='list[6].answerType==3'>[判断]</span>
          <span class="cha" v-show="chaG">×</span>
        </div>
        <div v-if='list[6].answerType==3' class="result">
          <label for="aa7" class="resultA">
            <input type="radio" value='A' v-model="t07" id="aa7">
            <div class="ks-radio"></div>
            <div>{{list[6].a}}</div>
          </label>
          <label for="bb7" class="resultA">
            <input type="radio" value='B' v-model="t07" id="bb7">
            <div class="ks-radio"></div>
            <div>{{list[6].b}}</div>
          </label>
        </div>
  
        <div class="result" v-if='list[6].answerType!=3'>
          <label for="aa7" class="resultA">
            <input type="radio" id="aa7" value='A' v-model="t07" v-if='list[6].answerType==1'>
            <input type="checkbox" id="aa7" value='A' v-model="t07" v-if='list[6].answerType==2'>
            <div class="ks-radio">A</div>
            <span></span>
            <div>{{list[6].a}}</div>
          </label>
          <label for="bb7" class="resultA">
            <input type="radio" id="bb7" value='B' v-model="t07" v-if='list[6].answerType==1'>
            <input type="checkbox" id="bb7" value='B' v-model="t07" v-if='list[6].answerType==2'>
            <div class="ks-radio">B</div>
            <div>{{list[6].b}}</div>
          </label>
          <label for="cc7" class="resultA">
            <input type="radio" id="cc7" value='C' v-model="t07" v-if='list[6].answerType==1'>
            <input type="checkbox" id="cc7" value='C' v-model="t07" v-if='list[6].answerType==2'>
            <div class="ks-radio">C</div>
            <div>{{list[6].c}}</div>
          </label>
          <label for="dd7" class="resultA">
            <input type="radio" id="dd7" value='D' v-model="t07" v-if='list[6].answerType==1'>
            <input type="checkbox" id="dd7" value='D' v-model="t07" v-if='list[6].answerType==2'>
            <div class="ks-radio">D</div>
            <div>{{list[6].d}}</div>
          </label>
        </div>
        <!--第八题-->
        <div>8. {{list[7].question}}
          <span class="duoxuan" v-if='list[7].answerType==2'>[多选]</span>
          <span class="duoxuan" v-if='list[7].answerType==1'>[单选]</span>
          <span class="duoxuan" v-if='list[7].answerType==3'>[判断]</span>
          <span class="cha" v-show="chaH">×</span>
        </div>
        <div v-if='list[7].answerType==3' class="result">
          <label for="aa8" class="resultA">
            <input type="radio" value='A' v-model="t08" id="aa8">
            <div class="ks-radio"></div>
            <div>{{list[7].a}}</div>
          </label>
          <label for="bb8" class="resultA">
            <input type="radio" value='B' v-model="t08" id="bb8">
            <div class="ks-radio"></div>
            <div>{{list[7].b}}</div>
          </label>
        </div>
  
        <div class="result" v-if='list[7].answerType!=3'>
          <label for="aa8" class="resultA">
            <input type="radio" id="aa8" value='A' v-model="t08" v-if='list[7].answerType==1'>
            <input type="checkbox" id="aa8" value='A' v-model="t08" v-if='list[7].answerType==2'>
            <div class="ks-radio">A</div>
            <span></span>
            <div>{{list[7].a}}</div>
          </label>
          <label for="bb8" class="resultA">
            <input type="radio" id="bb8" value='B' v-model="t08" v-if='list[7].answerType==1'>
            <input type="checkbox" id="bb8" value='B' v-model="t08" v-if='list[7].answerType==2'>
            <div class="ks-radio">B</div>
            <div>{{list[7].b}}</div>
          </label>
          <label for="cc8" class="resultA">
            <input type="radio" id="cc8" value='C' v-model="t08" v-if='list[7].answerType==1'>
            <input type="checkbox" id="cc8" value='C' v-model="t08" v-if='list[7].answerType==2'>
            <div class="ks-radio">C</div>
            <div>{{list[7].c}}</div>
          </label>
          <label for="dd8" class="resultA">
            <input type="radio" id="dd8" value='D' v-model="t08" v-if='list[7].answerType==1'>
            <input type="checkbox" id="dd8" value='D' v-model="t08" v-if='list[7].answerType==2'>
            <div class="ks-radio">D</div>
            <div>{{list[7].d}}</div>
          </label>
        </div>
        <!--第九题-->
        <div>9. {{list[8].question}}
          <span class="duoxuan" v-if='list[8].answerType==2'>[多选]</span>
          <span class="duoxuan" v-if='list[8].answerType==1'>[单选]</span>
          <span class="duoxuan" v-if='list[8].answerType==3'>[判断]</span>
          <span class="cha" v-show="chaI">×</span>
        </div>
  
        <div v-if='list[8].answerType==3' class="result">
          <label for="aa9" class="resultA">
            <input type="radio" value='A' v-model="t09" id="aa9">
            <div class="ks-radio"></div>
            <div>{{list[8].a}}</div>
          </label>
          <label for="bb9" class="resultA">
            <input type="radio" value='B' v-model="t09" id="bb9">
            <div class="ks-radio"></div>
            <div>{{list[8].b}}</div>
          </label>
        </div>
  
        <div class="result" v-if='list[8].answerType!=3'>
          <label for="aa9" class="resultA">
            <input type="radio" id="aa9" value='A' v-model="t09" v-if='list[8].answerType==1'>
            <input type="checkbox" id="aa9" value='A' v-model="t09" v-if='list[8].answerType==2'>
            <div class="ks-radio">A</div>
            <span></span>
            <div>{{list[8].a}}</div>
          </label>
          <label for="bb9" class="resultA">
            <input type="radio" id="bb9" value='B' v-model="t09" v-if='list[8].answerType==1'>
            <input type="checkbox" id="bb9" value='B' v-model="t09" v-if='list[8].answerType==2'>
            <div class="ks-radio">B</div>
            <div>{{list[8].b}}</div>
          </label>
          <label for="cc9" class="resultA">
            <input type="radio" id="cc9" value='C' v-model="t09" v-if='list[8].answerType==1'>
            <input type="checkbox" id="cc9" value='C' v-model="t09" v-if='list[8].answerType==2'>
            <div class="ks-radio">C</div>
            <div>{{list[8].c}}</div>
          </label>
          <label for="dd9" class="resultA">
            <input type="radio" id="dd9" value='D' v-model="t09" v-if='list[8].answerType==1'>
            <input type="checkbox" id="dd9" value='D' v-model="t09" v-if='list[8].answerType==2'>
            <div class="ks-radio">D</div>
            <div>{{list[8].d}}</div>
          </label>
        </div>
        <!--第十题-->
        <div>10. {{list[9].question}}
          <span class="duoxuan" v-if='list[9].answerType==2'>[多选]</span>
          <span class="duoxuan" v-if='list[9].answerType==1'>[单选]</span>
          <span class="duoxuan" v-if='list[9].answerType==3'>[判断]</span>
          <span class="cha" v-show="chaJ">×</span>
        </div>
        <div v-if='list[9].answerType==3' class="result">
          <label for="aa10" class="resultA">
            <input type="radio" value='A' v-model="t10" id="aa10">
            <div class="ks-radio"></div>
            <div>{{list[9].a}}</div>
          </label>
          <label for="bb10" class="resultA">
            <input type="radio" value='B' v-model="t10" id="bb10">
            <div class="ks-radio"></div>
            <div>{{list[9].b}}</div>
          </label>
        </div>
  
        <div class="result" v-if='list[9].answerType!=3'>
          <label for="aa10" class="resultA">
            <input type="radio" id="aa10" value='A' v-model="t10" v-if='list[9].answerType==1'>
            <input type="checkbox" id="aa10" value='A' v-model="t10" v-if='list[9].answerType==2'>
            <div class="ks-radio">A</div>
            <span></span>
            <div>{{list[9].a}}</div>
          </label>
          <label for="bb10" class="resultA">
            <input type="radio" id="bb10" value='B' v-model="t10" v-if='list[9].answerType==1'>
            <input type="checkbox" id="bb10" value='B' v-model="t10" v-if='list[9].answerType==2'>
            <div class="ks-radio">B</div>
            <div>{{list[9].b}}</div>
          </label>
          <label for="cc10" class="resultA">
            <input type="radio" id="cc10" value='C' v-model="t10" v-if='list[9].answerType==1'>
            <input type="checkbox" id="cc10" value='C' v-model="t10" v-if='list[9].answerType==2'>
            <div class="ks-radio">C</div>
            <div>{{list[9].c}}</div>
          </label>
          <label for="dd10" class="resultA">
            <input type="radio" id="dd10" value='D' v-model="t10" v-if='list[9].answerType==1'>
            <input type="checkbox" id="dd10" value='D' v-model="t10" v-if='list[9].answerType==2'>
            <div class="ks-radio">D</div>
            <div>{{list[9].d}}</div>
          </label>
        </div>
      </div>
    </div>
    <div class="foot">
      <div class="setTime">
        <img src="http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/application/5.png" alt="" class="clock">
        <div>{{time}} 秒</div>
      </div>
      <button class="tijiao" @click="toResult()" v-show="tj">提交</button>
    </div>
    <Alert v-show="showA" :alertText="msg" :btnText="btnText" @back='cuoti'></Alert>
    <!--继续升级-->
    <div class="model" v-show="nextQuestion">
      <div class="content">
        <div class="cen">
          <img v-if="level==1" src="http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/application/8.png" alt="" class="alertImg">
            <img v-if="level==2" src="http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/testResult/zhongji.png" alt="" class="alertImg">
          <img v-if="level==3" src="http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/testResult/gaoji.png" alt=""class="alertImg">
          <div class="alertText">恭喜您!</div>
          <div class="alertText">{{become}}</div>
          <div style="display:flex;align-items: center;justify-content: center;">
                 <yd-backtop  class="btn" @click.native="toNextQuestion()">{{yes}}</yd-backtop>
             <yd-backtop v-if="level!=3" class="btn" style="background:#ccc;margin-left:10px;" @click.native="toClose()">休息一下</yd-backtop>
          </div>    
          <img @click='close' class="Acha" src="http://yidao-cdn.oss-cn-shanghai.aliyuncs.com/h5/application/9.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Tit from '../../components/nav'
import Alert from '../../components/masterAlert'
import httputil from '../../httputil'
import logutil from '../../logutil'

export default {
  name: 'MY',
  data() {
    return {
    	type:'',
      time: 200,
      timeQ: '',
      msg: '',
      showA: false,
      btnText: '',
      list: [],
      nextQuestion: false,
      tj: true,
      t01: [],
      t02: [],
      t03: [],
      t04: [],
      t05: [],
      t06: [],
      t07: [],
      t08: [],
      t09: [],
      t10: [],
      d01: false,
      d02: false,
      d03: false,
      d04: false,
      d05: false,
      d06: false,
      d07: false,
      d08: false,
      d09: false,
      d10: false,
      chaA: false,
      chaB: false,
      chaC: false,
      chaD: false,
      chaE: false,
      chaF: false,
      chaG: false,
      chaH: false,
      chaI: false,
      chaJ: false,
      ctList: [],
      tit: '',
      become: '成为易道初级测算师',
      yes: '继续升级',
      level:0,
      Y:''
    }
  },
  watch: {
    t01(val) {

    },
    t02(val) {


    }
  },
  components: {
    Tit, Alert
  },
  created: function () {
    
    var self = this;
     
    self.timeQ = setInterval(function () {
      var t = self.time--;
      if (t == 0) {
        self.msg = '非常遗憾！您的答题时间已到，此次答题作废，请于两个小时后答题';
        self.btnText = '知道了';
        self.time = 0;
        self.showA=true;
        
      }
    }, 1000) 

    self.level = self.$route.query.level;
    document.title='申请大师'
  //  if(self.level==0){
  //    document.title='申请大师(初级)'
  //  }else if(self.level==1){
  //    document.title='申请大师(中级)'
  //  }else{
  //     document.title='申请大师(高级)'
  //  }
  
  },
  mounted: function () {
  	     this.$nextTick(()=>{
  		   httputil.doRequest('/Master/getQuestions',null,1,this.onSuccess,this.onError,true) 
  	    })
  },
  methods: {
  	onSuccess(res){
  		this.list = res.list;
  	},
  	onError(res){
  		this.msg=res.message;
                 this.btnText='知道了'; 
                 this.showA=true;
  	},
    toResult() {
      if (this.t01.length !== 0 && this.t02.length !== 0 && this.t03.length !== 0 && this.t04.length !== 0 && this.t05.length !== 0 && this.t06.length !== 0 && this.t07.length !== 0 && this.t08.length !== 0 && this.t09.length !== 0 && this.t10.length !== 0) {
        var a, i, b, c, d, e, f, g, h, j;
        if (typeof (this.t01) == 'string') {
          a = this.t01
        } else {
          a = this.t01.join().replace(/,/g, '');
        }
        if (typeof (this.t02) == 'string') {
          i = this.t02
        } else {
          i = this.t02.join().replace(/,/g, '');
        }
        if (typeof (this.t03) == 'string') {
          b = this.t03
        } else {
          b = this.t03.join().replace(/,/g, '');
        }
        if (typeof (this.t04) == 'string') {
          c = this.t04
        } else {
          c = this.t04.join().replace(/,/g, '');
        }
        if (typeof (this.t05) == 'string') {
          d = this.t05
        } else {
          d = this.t05.join().replace(/,/g, '');
        }
        if (typeof (this.t06) == 'string') {
          e = this.t06
        } else {
          e = this.t06.join().replace(/,/g, '');
        }
        if (typeof (this.t07) == 'string') {
          f = this.t07
        } else {
          f = this.t07.join().replace(/,/g, '');
        }
        if (typeof (this.t08) == 'string') {
          g = this.t08
        } else {
          g = this.t08.join().replace(/,/g, '');
        }
        if (typeof (this.t09) == 'string') {
          h = this.t09
        } else {
          h = this.t09.join().replace(/,/g, '');
        }
        if (typeof (this.t10) == 'string') {
          j = this.t10
        } else {
          j = this.t10.join().replace(/,/g, '');
        }
        var num = a + ',' + i + ',' + b + ',' + c + ',' + d + ',' + e + ',' + f + ',' + g + ',' + h + ',' + j;
        logutil.i('DSresultnum',typeof(num))
//      var n = num.split(',')
//      logutil.i('DSresult',n)
        clearTimeout(this.timeQ);
        httputil.doRequest('/Master/commitAnswer',{'answer':num},1,this.onResultSuccess,this.onResultError,true) 
      } else {
        this.$dialog.alert({ mes: '题还没做完哟！' });
      }
       
    },
    onResultSuccess(res){
    	 this.tj = false;
    	 if (res.code == 200) {
                
              if (res.level == 1) {
                this.level=res.level
                this.nextQuestion = true;
                this.become = '成为易道初级测算师'
                this.yes = '继续升级'
              } else if (res.level == 2) {
                this.nextQuestion = true;
                this.become = '成为易道中级测算师'
                this.yes = '继续升级'
                this.level=res.level
              } else if (res.level == 3) {
                this.nextQuestion = true;
                this.become = '成为易道高级测算师'
                this.yes = '知道了'
                this.level=res.level
              }

            } else if (res.code == 201) {
              this.showA = true;
              this.msg = '很遗憾，刚可能有点马虎了，未达到标准。'
              this.btnText = '查看错题'
              this.ctList = res.results;
            } else if(res.code == 202){
                   if (res.type == 1) {
                this.level=res.type
                this.nextQuestion = true;
                this.become = '通过易道初级测算题！请尽快提交资料，成为正式大师！'
                this.yes = '继续升级'
              } else if (res.type == 2) {
                this.nextQuestion = true;
                this.become = '通过易道中级测算题！请尽快提交资料，成为正式大师！'
                this.yes = '继续升级'
                this.level=res.type
              } else if (res.type == 3) {
                this.nextQuestion = true;
                this.become = '通过易道高级测算题！请尽快提交资料，成为正式大师！'
                this.yes = '知道了'
                this.level=res.type
              }
            }else if (res.code == 401) {
              this.showA = true;
              this.msg = '非常遗憾！您的答题时间已到，此次答题作废，请于两个小时后答题'
              this.btnText = '知道了'
            } else {
              
              this.$dialog.alert({ mes: res.message });
            }
             this.t01=[]
          this.t02=[]
          this.t03=[]
          this.t04=[]
          this.t05=[]
          this.t06=[]
          this.t07=[]
          this.t08=[]
          this.t09=[]
          this.t10=[]
    },
    onResultError(res){
    	 this.$dialog.alert({
						mes: res
					})
    },
    cuoti() {
      if (this.btnText == '查看错题') {
        
        this.showA = false;
        this.ctList[0] == false ? this.chaA = true : this.chaA = false;
        this.ctList[1] == false ? this.chaB = true : this.chaB = false;
        this.ctList[2] == false ? this.chaC = true : this.chaC = false;
        this.ctList[3] == false ? this.chaD = true : this.chaD = false;
        this.ctList[4] == false ? this.chaE = true : this.chaE = false;
        this.ctList[5] == false ? this.chaF = true : this.chaF = false;
        this.ctList[6] == false ? this.chaG = true : this.chaG = false;
        this.ctList[7] == false ? this.chaH = true : this.chaH = false;
        this.ctList[8] == false ? this.chaI = true : this.chaI = false;
        this.ctList[9] == false ? this.chaJ = true : this.chaJ = false;
        var li=document.getElementsByTagName("input")
        for(var i=0;i<li.length;i++){
        	li[i].setAttribute("disabled","true");
        }
      } else {  
         this.type=navigator.userAgent.toLowerCase(); 
         logutil.i('DSresult',this.type)
			   if (/iphone|ipad|ipod/.test(this.type)) {
			   	  window.webkit.messageHandlers.iOS.postMessage({4:{'windowID':10004}})
            //  iOS.postMessage({4:{'windowID':10003}})
			   }else if(/android/.test(this.type)){
			   	logutil.i('DSresult','安卓跳转')
			   	  window.YiDao.bussinessDistribute(4,"{'windowID':10004}")
			   }else{
			   	 window.location="https://www.kushanbaoli.com";
			   }
      }
    },
    toClose(){
         this.type=navigator.userAgent.toLowerCase(); 
			   if (/iphone|ipad|ipod/.test(this.type)) {
			   	  window.webkit.messageHandlers.iOS.postMessage({4:{'windowID':10004}})
            //  iOS.postMessage({4:{'windowID':10003}})
			   }else if(/android/.test(this.type)){
			   	logutil.i('DSresult','安卓跳转')
			   	  window.YiDao.bussinessDistribute(4,"{'windowID':10004}")
			   }else{
			   	 window.location="https://www.kushanbaoli.com";
			   }
    },
    close() {
       this.type=navigator.userAgent.toLowerCase(); 
       
			   if (/iphone|ipad|ipod/.test(this.type)) {
			   	 window.webkit.messageHandlers.iOS.postMessage({4:{'windowID':10004}})
          //  iOS.postMessage({4:{'windowID':10003}})
			   }else if(/android/.test(this.type)){
			   	  window.YiDao.bussinessDistribute(4,"{'windowID':10004}")
			   }else{
			   	 window.location="https://www.kushanbaoli.com";
			   }
      this.nextQuestion = false
    },
    toNextQuestion() {
      var self=this
      self.tj = true;
      if(self.yes =='继续升级'){
        httputil.doRequest('/Master/getQuestions',null,1,self.onNextSuccess,self.onNextError,true) 
      }else{
         self.type=navigator.userAgent.toLowerCase(); 
			   if (/iphone|ipad|ipod/.test(self.type)) {
			   	  window.webkit.messageHandlers.iOS.postMessage({4:{'windowID':10004}})
            //  iOS.postMessage({4:{'windowID':10003}})
			   }else if(/android/.test(self.type)){
			   	  window.YiDao.bussinessDistribute(4,"{'windowID':10004}")
			   }else{
			   	 window.location="https://www.kushanbaoli.com";
			   }
      }
    },
    onNextSuccess(res){
    	var self=this
    	if (res.code == 200) {
            self.list = res.list;
            self.nextQuestion = false
            window.scrollY=0
            self.time=200
             self.timeQ = setInterval(function () {
                var t = self.time--;
                if (t == 0) {
                  self.msg = '非常遗憾！您的答题时间已到，此次答题作废，请于两个小时后答题';
                  self.btnText = '知道了';
                  self.time = 0;
                  self.showA=true;
                }
              }, 1000)

            // if(self.level == 1){
            //   self.tit='申请算命师(中级)'
            // }else if(self.level == 2){
            //   self.tit='申请算命师(高级)'
            // }
          } else {
            self.$dialog.alert({ mes: res.message });
          }
    },
    onNextError(res){
       this.$dialog.alert({
						mes: res
					})
    }

  }
}
</script>
<style scoped>
.ks-radio {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid #ccc;
  text-align: center;
  line-height: 20px;
  margin-top: 3px;
  margin-right: 8px;
  font-size: 14px;
}

.resultA input:checked+.ks-radio {
  background: red;
  color: white;
}

.result {
  display: flex;
  min-height: 30px;
  line-height: 30px;
  margin: 10px 0;
  flex-wrap: wrap;
  justify-content: space-between;
}

.resultA {
  display: block;
  padding: 0 15px;
  width: 100%;
}

.resultA>input {
  position: absolute;
  left: 99999px;
  display: none;
}

.resultA>div {
  float: left;
}

.foot {
  width: 100%;
  height: 60px;
  border-top: 1px solid #e9e9e9;
  line-height: 60px;
  display: flex;
  font-size: 20px;
  position: fixed;
  bottom: 0;
  background: #fff;
}

.setTime {
  display: flex;
  width: 75%;
}

.clock {
  padding: 15px 30px 0 15px;
  width: 72px;
  height: 45px;
}

.tijiao {
  background: #f53936;
  width: 25%;
  color: #fff;
  text-align: center;
  border: none;
}

.nav {
  height: 50px;
  line-height: 50px;
  background: #fff;
  padding: 0 20px;
  text-align: center;
  font-size: 18px;
  color: #000;
}

.select {
  color: #f53936;
  margin-top: 3px;
}

.cha {
  color: #f53936;
  font-size: 18px;
}

.model {
  color: #666160;
  position: fixed;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  /*overflow: auto;
	overflow-x: hidden;*/
}

.duoxuan {
  color: #f53936;
}

.content {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.cen {
  padding: 30px 10px;
  background: #fff;
  width: 270px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  position: relative;
}

.alertImg {
  width: 100px;
  height: 100px;
  margin-bottom: 15px;
}

.alertText {
  padding: 5px 0;
  color: #1a80fc;
  font-size: 14px;
}

.btn {
  border: none;
  background: #1a80fc;
  border-radius: 8px;
  margin-top: 5px;
  color: #fff;
  font-weight: bold;
  font-size: 17px;
  height:30px;
  line-height: 30px;
}

.Acha {
  position: absolute;
  top: 5px;
  right: 5px;
  width: 30px;
}
</style>


