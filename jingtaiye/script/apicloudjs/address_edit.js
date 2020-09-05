apiready = function(){
    getaddressform();
}

// 获取表单中的数据
function getaddressform(){
	var addressid=$api.getStorage('addressid');
    //alert(userId);
   var client = new Resource("A6076635424176", "09645BE2-3CD4-4015-1688-A262573D1D06");
var Address= client.Factory("address");
Address.query({
  "filter": {
    "where": {'id':addressid},
    "skip": 0,
   // "limit": 20
  }
},function(ret,err){
  if (ret) {        
             
             //alert(JSON.stringify(ret));
            // 显示地址列表
            addressform(ret);
             
        } else {
            alert(JSON.stringify(err));
        }
})
}
// 获取表单中的数据结束

// 显示地址信息
function addressform(data_){
     var list = $api.byId('address_form');
    var html = '';    
           
         if (data_[0].address) {
             //alert(data_[i].id);
             html +='<tr>';
             html +='<td>联系人</td>';
             html +='<td>';
             html +='<label for="conect_name"></label>';
             html +='<input type="text" id="conect_name" placeholder="姓名" value="'+data_[0].name+'">';
             html +='</td>';
             html +='</tr>';         
             html +='<tr>';
             html +='<td>性别</td>';
             html +='<td class="address_edit_sex">';
             html +='<span id="address_man" class="a">先生</span>';
             html +='<span id="address_woman" class="a">女士</span>';
             html +='</td>';
             html +='</tr>';
             html +='<tr>';
             html +='<td>电话</td>';
             html +='<td>';
             html +='<label for="conect_phone"></label>';
             html +='<input type="text" id="conect_hone" placeholder="电话" value="'+data_[0].phone+'">';
             html +='</td>';
             html +='</tr>';
             html +='<tr>';
             html +='<td>地址</td>';
             html +='<td>';
             html +='<label for="conect_address"></label>';
             html +='<input type="" id="conect_address" placeholder="收货地址" value="'+data_[0].address+'">';
             html +='</td>';
             html +='</tr>';    

       //       if(data_[0].sex == '男士'){    	
       //     		$api.byId("address_man").className="address_sex";
       //       }else{
    			// $api.byId("address_woman").className="address_sex";
       //       }      
         }
         // if结束
         
    $api.html(list, html);
    
}
// 显示地址信息结束


// 修改信息
var address_edit_sex="先生"

    $("body").on("click",".address_edit_sex span",function(){
        address_edit_sex=$(this).text();
       // alert(address_edit_sex);
    });
function address_edit(){
	var conect_name=$api.byId("conect_name").value;
    var conect_hone=$api.byId("conect_hone").value;
    var conect_address=$api.byId("conect_address").value;
    // alert(address_edit_sex);
    var addressid=$api.getStorage("addressid");    
var client = new Resource("A6076635424176", "09645BE2-3CD4-4015-1688-A262573D1D06");
var Address= client.Factory("address");
Address.save({
  "_id": addressid
},{
  "name": conect_name,
  "phone":conect_hone,
  "address":conect_address,
  "sex":address_edit_sex,
  "_method": "PUT"
},function(ret,err){
   if (ret) {      
             
            //alert(JSON.stringify(ret));
             api.alert({
                msg: '修改成功！'
            }, function () {

                 api.openWin({
                     name:'my',
                     url:'my.html',
                     bounces:true
                 });
             })           
             
        } else {
            alert(JSON.stringify(err));
        }
})


}
// 修改信息结束    // 