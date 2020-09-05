apiready = function () {
    
};
 // 跳转到登录页面
function fnLogin(){
    api.openWin({
        name:'login',
        url:'login_last.html',
        bounces:true
    })
}
// 跳转到登录界面结束

// 注册功能
var username;
var userpassword;
var reuserpassword;
var email;
function register() {        
    username = $api.byId('username').value;
    userpassword = $api.byId('userpassword').value;
    reuserpassword = $api.byId('reuserpassword').value;
    email=$api.byId('email').value;    
    if (userpassword !== reuserpassword) {
        api.alert({
            msg: '两次密码不一致'
        });
        return;
    }
    else{
        getregister();
    }
   
}
function getregister() { 
var client = new Resource("A6076635424176", "09645BE2-3CD4-4015-1688-A262573D1D06");
var Model = client.Factory("user");
Model.save({
    "username":username,
    "password":userpassword,
    "email":email
}, function(ret,err){
    if (ret) {        
       // alert(JSON.stringify(ret));
            // $api.setStorage("uid",ret.id);
            $api.setStorage("userid",ret.id);
            // alert($api.getStorage("userid"));
                api.alert({
                msg: '注册成功！'
            }, function () {
                 api.openWin({
                     name:'login',
                     url:'login.html',
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

// 注册功能结束