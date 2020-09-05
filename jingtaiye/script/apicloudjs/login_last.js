apiready = function () {
    
};
 // 跳转到注册页面
function fnRegister(){
    api.openWin({
        name:'register',
        url:'register.html',
        bounces:true
    })
}
// 跳转到注册界面结束

// 登录功能
var username;
var userpassword;

function login() {        
    username = $api.byId('username').value;
    userpassword = $api.byId('userpassword').value;  
    
    var client = new Resource("A6076635424176", "09645BE2-3CD4-4015-1688-A262573D1D06");
var Model = client.Factory("user");
Model.login({
    "username":username,
    "password":userpassword,
    //"email":"1441780228@qq.com"
}, function(ret,err){
    if (ret) {
        //alert(JSON.stringify(ret));
             $api.setStorage("uid",ret.id);
            // alert(ret.id);
            // alert(ret.userid);
            $api.setStorage("userid",ret.userId);
                api.alert({
                msg: '登录成功！'
            }, function () {
                 api.openWin({
                     name:'my',
                     url:'my.html',
                     bounces:true
                 })
            })
           

        } else {
            api.alert({
                msg: err.msg
            });
        }
        

})
   
}


// 登录功能结束