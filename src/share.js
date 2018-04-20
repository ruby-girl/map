
const baseUrl = "http://calendar.lanbobo.cn/"
const baseH5Url="http://h5.lanbobo.cn/#/"
export default{
	
	toShare(tit,url,img){
		let ua = navigator.userAgent.toLowerCase();
     
	   	if (/iphone|ipad|ipod/.test(ua)) {
         window.webkit.messageHandlers.iOS.postMessage({2:{'title':tit,'url':baseH5Url+url,'imageURL':img}})
    
       }else if(/android/.test(ua)){
         console.log(baseH5Url+url)  
          window.YiDao.bussinessDistribute(2,JSON.stringify({"title":tit,"url":baseH5Url+url,'imageURL':img}));

       }
  },
  pay(from,bussiness,money,id,ref){
     
    	let ua = navigator.userAgent.toLowerCase(); 
	   	if (/iphone|ipad|ipod/.test(ua)) {
         window.webkit.messageHandlers.iOS.postMessage({8:{'payPlatform':from,'payBussiness':bussiness,'money':money,'bussinessID':id,'refURL':ref}})
        // iOS.postMessage({8:{'payPlatform':from,'payBussiness':bussiness,'money':money,'bussinessID':id}})
       }else if(/android/.test(ua)){
          window.YiDao.bussinessDistribute(8,JSON.stringify({"payPlatform":from,"payBussiness":bussiness,"money":money,"bussinessID":id,'refURL':ref}));
       }
  }    
}         