apiready = function(){
  var model = api.require('model'); 
    model.config({
                appId: 'A6076635424176',
                appKey: '09645BE2-3CD4-4015-1688-A262573D1D06',
                host: 'https://d.apicloud.com'
            });
    getorderInfo();

    // 获取所选择的地址
    var data_add_id=$api.getStorage("data_add_id");
    if(data_add_id != undefined){
         
   
   var client = new Resource("A6076635424176", "09645BE2-3CD4-4015-1688-A262573D1D06");
var Address= client.Factory("address");
Address.query({
  "filter": {
    "where": {'id':data_add_id},
    "skip": 0,
    //"limit": 20
  }
},function(ret,err){
  if (ret) {                    
             // alert(JSON.stringify(ret));
            // 显示地址列表
            // addressList(ret);
            // alert(ret[0].address);
             $api.byId("pay_address").innerHTML=ret[0].address;
             
        } else {
            alert(JSON.stringify(err));
        }
})
    }
    else{
      $api.byId("pay_address").innerHTML="选择地址"
    }
    // 获取所选择的地址结束

}
// 获取账单信息
  function getorderInfo(){
  	var foodid=$api.getStorage("oneid");
  	var client = new Resource("A6076635424176", "09645BE2-3CD4-4015-1688-A262573D1D06");
var Life= client.Factory("food");
Life.query({
  "filter": {
    "where": {"id":foodid},
    "skip": 0,
    //"limit": 20
  }
},function(ret,err){
  //return body
  if(ret){
  	 // alert(JSON.stringify(ret));
     // alert(ret[0].name);
    $api.setStorage("food_name",ret[0].name);
    $api.setStorage("food_price",ret[0].price);
    $api.setStorage("food_uid",ret[0]['store(uz*R*id)']);
    orderList(ret);

  }else{
     alert(JSON.stringify(err));
  }
})
  }
// 获取账单信息结束
    
    // 显示账单信息
function orderList(data_){
     var list = $api.byId('pay_list');
    var html = '';    
     for (var i = 0; i < data_.length; i++) {        
         if (data_[i].name) {
             //alert(data_[i].id);
             html += '<li>';
             html += '<div>';
             html += '<p id="pay_name">'+data_[i].name+'</p>';
             html += '<p>&times;<span>1</span></p>';
             html += '<p><span id="pay_price">'+data_[i].price+'</span>元</p>';
             html += '</div>';
             html += '</li>';          
         }
         // if结束
     }
     // for结束
    $api.html(list, html);  
}
    // 显示账单信息结束}

// 点击取消弹框
function pay_succ(data){
    // insertorder();
     data.style.display="none";
     api.openWin({
        name:'index2',
        url:'index2.html',
        bounces:true
    }); 
}
// 点击取消弹框结束

// // 订单保存到数据库
// function insertorder(){
//   var userid=$api.getStorage("userid");
//   // alert(userid);
//   // var food_name=$api.getStorage("food_name");
//   // var food_price=$api.getStorage("food_price");
//   var food_name=$api.byId("pay_name").innerHTML;
//   var food_price=$api.byId("pay_price").innerHTML;
//   // alert(food_price);
//   // alert(userid+','+food_name);

//            // 将此id写入收藏列表
          
//            var relation = api.require('relation');
//            relation.insert({
//               class: 'user',
//               id: userid,
//               column: 'order',
//               value: {
//                   foodname: food_name,
//                   price:food_price
//                   }
//            }, function(ret, err){
//      if( ret ){
//         // alert( JSON.stringify( ret) );
//        // $api.setStorage('collectid',ret.id);
//         alert("收藏成功");
//      }else{
//         alert( JSON.stringify( err) );
//      }
// })


// }
// $("body").on("click","#pay_succ",function(){
//     $(this).prev().
// });
// 订单保存到数据库结束


// 跳转到选择地址
function fnaddress(){
   api.openWin({
        name:'address',
        url:'address.html',
        bounces:true
    });  

}
// 跳转到选择地址结束

