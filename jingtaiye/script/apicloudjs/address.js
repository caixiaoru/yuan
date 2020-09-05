apiready = function(){
	getaddressList();
}

// 获取地址列表
function getaddressList(){
    var userId=$api.getStorage('userid');
    //alert(userId);
   var client = new Resource("A6076635424176", "09645BE2-3CD4-4015-1688-A262573D1D06");
var Address= client.Factory("address");
Address.query({
  "filter": {
    "where": {'user(uz*R*id)':userId},
    "skip": 0,
    //"limit": 20
  }
},function(ret,err){
  if (ret) {                    
            // alert(JSON.stringify(ret));
            // 显示地址列表
            addressList(ret);
             
        } else {
            alert(JSON.stringify(err));
        }
})
}
// 获取地址列表结束

// 显示地址列表
function addressList(data_){
     var list = $api.byId('address_list');
    var html = '';    
     for (var i = 0; i < data_.length; i++) {        
         if (data_[i].address) {
             //alert(data_[i].id);
             html += '<div class="address_main" address-id="'+data_[i].id+'"><div><i class="fa fa-check-square-o"></i></div><div class="address_main_list"><p>'+data_[i].address+'</p><p><span>'+data_[i].name+'</span><span>'+data_[i].sex+'</span><span>'+data_[i].phone+'</span></p></div><div onclick="address_edit(this)"><a href="JavaScript:void(0)" ><i class="fa fa-edit"></i></a></div><div onclick="address_delete(this)"><i class="fa fa-trash-o" id="address_delete"></i><i style="display:none">'+data_[i].id+'</i></div></div>';          
         }
         // if结束
     }
     // for结束
    $api.html(list, html);
}
// 显示地址列表结束

// 点击添加地址
function address_add(){
	api.openWin({
                     name:'address_add',
                     url:'address_add.html',
                     bounces:true
                 })
}
// 点击添加地址结束

// 点击修改地址
function address_edit(a_this){
   var a=a_this.parentNode.getAttribute("address-id");
   // alert(a);
   $api.setStorage("addressid",a);
    api.openWin({
                     name:'address_edit',
                     url:'address_edit.html',
                     bounces:true
                 })
}
// 点击修改地址结束
    
// 点击删除地址
function address_delete(b_this){
    
  var b=b_this.parentNode.getAttribute("address-id");
   // alert(b);
   var client = new Resource("A6076635424176", "09645BE2-3CD4-4015-1688-A262573D1D06");
   //var client = new Resource("A6076635424176", "you appKey");
var Address= client.Factory("address");
Address.delete({
  "_id": b
},function(ret,err){
  if(ret){
    api.alert({msg:"删除成功"},function(){
       api.openWin({
                     name:'my',
                     url:'my.html',
                     bounces:true
                 });
    })
  }
})
}
// 点击删除地址结束

// 选择地址
$("body").on("click",".fa-check-square-o",function(){
  $(this).addClass("fa-check-active");
  // alert($(this).parent());
  $(this).parent().parent().siblings().children(":first").children().removeClass("fa-check-active");
  var data_add_id=$(this).parent().parent().attr("address-id");
  // alert(data_add_id);
  $api.setStorage("data_add_id",data_add_id);
})
// 选择地址结束