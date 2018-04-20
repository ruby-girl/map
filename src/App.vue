<template>
  <div id="app">
  	<transition name='fade'>
          <!--<keep-alive>-->
  		    		<router-view></router-view>
					<!--</keep-alive>-->
  	</transition>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
html,body,#app{
	padding:0;
	margin:0;
	width:100%;
	height:100%;
	background: white;
}
.cell-checkbox-icon{
	display: inline-block;
	margin-top:2px;
}
.fade-enter-active, .fade-leave-active {
  transition: all .5s;
}
.fade-enter  {
  transform:translateX(100%); 
	opacity: 1;
	 perspective: 200px; 
}
.fade-leave-active{
  transform:translateX(-100%);
	opacity: 0;
}
.slide-fade-enter-active {
  transition: all .3s linear;
}
.slide-fade-leave-active {
  transition: all .3s linear;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateY(10px);
  opacity: 0;
}
a{
	text-decoration: none;
	color:black;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.container{
	width:100%;
	height:100%;
	/*position:absolute;*/
	overflow: auto;
	overflow-x:hidden;
	-webkit-overflow-scrolling: touch;
	/*top:0;*/
}
.ks-cai-city>div{
		-webkit-overflow-scrolling: touch;
}
.ks-ca-con select{
	border-radius:5px;
}
.ks-cai-label{
		margin-right:15px;
}

.ks-cai-div>div{
	/*box-sizing: border-box;*/
	line-height: 40px;
}
.ks-cai-date{
	font-size:15px !important;
}
.ks-cai-date{
	line-height: 42px !important;
}
.bc_position{
	position: fixed; 
	top:0;
	width: 100%;
	border-bottom: 1px solid #aaa;
}
.bc_margin{
	height: 50px;
	width: 100%;
}
.nanSheng{
	font-size:13px;
	border:1px solid #e4393c;
	height:20px;
	line-height: 20px;
	padding:0 2px;
	border-radius: 3px;
	margin-left: 5px;
}
.nanShang{
	color:#fff;
	background: #e4393c;
}
</style>
