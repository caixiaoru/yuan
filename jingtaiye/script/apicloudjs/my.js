apiready = function () {
    // 判断是否登录
    var userId=$api.getStorage('userid'); 
   
    if(userId != undefined){
        // 已经登录        
       
        $api.byId("userlogin").setAttribute("href","javascript:void(0)");
        loginInfo();
    }
    else{       
        
        $api.byId("userlogin").setAttribute("href","login_last.html");        
    }  
};

// 获取用户名
function loginInfo(){
    var userId=$api.getStorage('userid'); 
     
    var client = new Resource("A6076635424176", "09645BE2-3CD4-4015-1688-A262573D1D06");
var Model = client.Factory("user");
Model.get({"_id":userId}, function(ret,err){
    if(ret){
       //alert(JSON.stringify(ret));
        $api.byId("userlogin").innerText=ret.username;  
         $api.byId("userlogin").setAttribute("href","javascript:void(0)");
    }else{
         var err_msg = '错误码：' + err.code + '；错误信息：' + err.msg + '网络状态码：' + err.statusCode;
            api.toast({
                msg:  err_msg,
                duration: 2000,
                location: 'middle'
            });
    }
})
}
// 获取用户名结束

// 退出登录
function loginout(){
    var uid=$api.getStorage("uid");
   
    var client = new Resource("A6076635424176", "09645BE2-3CD4-4015-1688-A262573D1D06");
var Model = client.Factory("user");
Model.logout({token: uid}, function(ret,err){
    if (ret) {           
            //alert(JSON.stringify(ret));
            $api.byId("my_block").style.display="none";
            $api.byId("userlogin").innerText='登录';
            $api.byId("userlogin").setAttribute("href","login_last.html");
           
                 
        } else {
            var err_msg = '错误码：' + err.code + '；错误信息：' + err.msg + '网络状态码：' + err.statusCode;
            api.toast({
                msg:  err_msg,
                duration: 2000,
                location: 'middle'
            });
        }
})
}
// 退出登录结束


