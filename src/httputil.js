import Vue from "vue"
import VueResource from "vue-resource"
import Log from "./logutil"
import YDUI from 'vue-ydui';
import 'vue-ydui/dist/ydui.px.css';
Vue.use(VueResource)
Vue.use(YDUI);

 const baseUrl = "http://calendar.lanbobo.cn"
const baseH5Url="http://h5.lanbobo.cn/#/"
const defaultAppRequest = "%7b%22platform%22%3a0%2c%22appVersion%22%3a%221.0%22%2c%22sysVersion%22%3a%221.0%22%2c%22provider%22%3a%22yidao%22%2c%22model%22%3a%22yidao%22%7d"
const requestType_GET = 1
const requestType_POST = 2

export default{
	
	doRequest(mUrl,mParams,requestType,onSuccess,onError,flag){
		let ua = navigator.userAgent.toLowerCase(); 
		let mJsessionId = ''
		let appRequestParas = ''
	   	if (/iphone|ipad|ipod/.test(ua)) {		   //iOS系统打开
			try{
				mJsessionId = window.getJSessionId(); 
				if(flag)
					if( !mJsessionId){	//是我们的软件,但是没有获取到
						Log.i("httpUtil", "iOS typeof(mJsessionId) == undefined" )
							
						 window.webkit.messageHandlers.iOS.postMessage({4:{'windowID':10000}})
						// iOS.postMessage({4:{'windowID':10000}})
						return;
					}
				appRequestParas = window.getAppRequestParams(); 
				if(!appRequestParas)
					appRequestParas = defaultAppRequest
				
			}catch(e){ //不是通过我们的软件来访问
				if(flag){
					
					 window.location="https://www.kushanbaoli.com";
              
					return;
				}
			}
		} else if (/android/.test(ua)) {			//iOS系统打开
		  	try{
				mJsessionId = window.YiDao.getJSessionId(); 
				if(flag)
					if( !mJsessionId){
						Log.i("httpUtil", "Android typeof(mJsessionId) == undefined" )
						
					
					  window.YiDao.bussinessDistribute(4,"{'windowID':10000}")
						 return;
					}
				appRequestParas = window.YiDao.getAppRequestParams(); 
				if(!appRequestParas)
					appRequestParas = defaultAppRequest
			}catch(e){ //不是通过我们的软件来访问
				if(flag){
				
					 window.location="https://www.kushanbaoli.com";
              
					return;
				}
			}
	   	} else{
	   		if(flag){
					 	
					 window.location="https://www.kushanbaoli.com";
                   
					return;
			}
	   		appRequestParas = defaultAppRequest
	   	}
	   	
		Log.i("httpUtil","get JSessionID Succcess ;mJsessionId = " + mJsessionId)
		Log.i("httpUtil","get AppRequestParam Succcess ;AppRequestParam = " + appRequestParas)
		
		
		//处理GET请求
		if(requestType_GET === requestType){
				let requestURL = ''
				if(!mJsessionId)
					requestURL =  baseUrl + mUrl	
				else
					requestURL =  baseUrl + mUrl + ";jsessionid=" + mJsessionId
				Log.i("httpUtil",requestURL)
				Vue.http.get(requestURL,{
					params:mParams,
					headers:{
						"appRequestParas":appRequestParas
					}
				}).then(res => {
						Log.i("http",res)
						console.log(res)
						let code = res.body.code 
						let content = res.body.content 
						let msg = res.body.message 
						
						if(code === 200 && typeof(onSuccess) != 'undefined'){
							onSuccess(content)
						}else if(code === 401 && typeof(onError) != 'undefined'){
							if (/iphone|ipad|ipod/.test(ua)) {		   //iOS系统打开
									try{
										 
										 window.webkit.messageHandlers.iOS.postMessage({4:{'windowID':10000}})	
										// iOS.postMessage({4:{'windowID':10000}})
								}catch(e){ //不是通过我们的软件来访问
									
										 window.location="https://www.kushanbaoli.com";
                                        
										return;
									}
							} else if (/android/.test(ua)) {			//安卓系统打开
							  	try{
									
									 window.YiDao.bussinessDistribute(4,"{'windowID':10000}")
								}catch(e){ //不是通过我们的软件来访问	
								
									 window.location="https://www.kushanbaoli.com";
									return;
								}
						   	} else{
									
								 window.location="https://www.kushanbaoli.com";
                                  
								return;
						   	}
						}else if(code === 400){
							Log.i("http","url = " + mUrl + " ; params = " + JSON.stringify(mParams) +" ; "+ msg)
							if(typeof(onError) != 'undefined')
								onError(msg)
						}else if(code === 402){
							window.location=baseH5Url+"xuFei";
						    return;
						}else{
							if(typeof(onError) != 'undefined')
								onError(msg)
						}
				})
		}else if(requestType_POST == requestType){
			let requestURL = ''
				if(!mJsessionId)
					requestURL =  baseUrl + mUrl	
				else
					requestURL =  baseUrl + mUrl + ";jsessionid=" + mJsessionId
				Log.i("httpUtil",requestURL)
				Vue.http.post(requestURL,{
					params:mParams,
					headers:{
						"appRequestParas":appRequestParas
					}
				}).then(res => {
						Log.i("http",res)
						console.log(res)
						let code = res.body.code 
						let content = res.body.content 
						let msg = res.body.message 
						
						if(code === 200 && typeof(onSuccess) != 'undefined'){
							onSuccess(content)
						}else if(code === 401 && typeof(onError) != 'undefined'){
							if (/iphone|ipad|ipod/.test(ua)) {		   //iOS系统打开
									try{
										window.webkit.messageHandlers.iOS.postMessage({4:{'windowID':10000}})
										// iOS.postMessage({4:{'windowID':10000}})	
									}catch(e){ //不是通过我们的软件来访问
										window.location="https://www.kushanbaoli.com";
										return;
									}
							} else if (/android/.test(ua)) {			//iOS系统打开
							  	try{
									window.YiDao.bussinessDistribute(4,"{'windowID':10000}")
								}catch(e){ //不是通过我们的软件来访问									
									window.location="https://www.kushanbaoli.com";
									return;
								}
						   	} else{
								window.location="https://www.kushanbaoli.com";
								return;
						   	}
						}else if(code === 400){
							Log.i("http","url = " + mUrl + " ; params = " + JSON.stringify(mParams) +" ; "+ msg)
						}else{
							if(typeof(onError) != 'undefined')
								onError(msg)
						}
				})
		}
	}
	
	
	
}
