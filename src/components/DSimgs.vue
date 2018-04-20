<template>
    <div>
        <div class="oss_file">
            <input type="file" :id="id" :multiple="multiple" @change="doUpload" accept="image/*" />
        </div>
        <!--文件已作废。oss上传照片-->
 </div>
 
</template>
<script>
import httputil from '../httputil'
    export default{
        props:{
            multiple:{
                type: Boolean,
                twoWay:false
            },
            id:{
                type: String,
                twoWay:false
            }
            
        },
        data(){
            return{
                url:'',
                region:'oss-cn-shanghai',
                bucket:'yidao-cdn',
            };
        },
        methods:{
            doUpload(){                
                httputil.doRequest('/Aliyun/stsServiceSample',{'type':8},1,this.onSuccess,this.onError,true)             
            },
            onSuccess(res){
                const files = document.getElementById(this.id);
                const client = new OSS.Wrapper({
                        region:this.region,
                        accessKeyId: res.accessKeyId,
                        accessKeySecret: res.accessKeySecret,
                        stsToken: res.securityToken,
                        bucket:this.bucket
                    })
                    if(files.files){
                        const fileLen = document.getElementById(this.id).files
                        const resultUpload = [];        
                        for (let i = 0; i < fileLen.length; i++) {
                            const file = fileLen[i];
                            console.log(file)
                           let name=this.randName()
                            const storeAs = '/upload/masterDesc/'+name+'.jpg';
                           
                            client.multipartUpload(storeAs, file).then((results) => {
                               this.url=res.url+'/'+name+'.jpg'
                               this.$emit('getUrl',this.url)
                              
                            }).catch((err) => {
                                console.log("错误信息="+err);
                            });
                        }                    
                    }   
            },
            onError(res){
               
            },
        
       
        randName(){
            var chars = 'ABCDEFGHJKMNP_QRSTWXYZabcdefhijkmnprstwxyz2345678'; 
            var maxPos = chars.length;
            var pwd = '';
            for (var i = 0; i < 13; i++) {
　　　  　     pwd += chars.charAt(Math.floor(Math.random() * maxPos));
　　       }
        return pwd;
          }
         }
    };
</script>
<style type="text/css">
    .oss_file {
        height: 100px;
        width: 100%;

    }
    .oss_file  input {
        right: 0;
        top: 0;
        opacity: 0;
        filter: alpha(opacity=0);
        cursor: pointer;
        width: 100%;
        height: 100%;
    }

</style>