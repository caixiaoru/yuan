apiready = function(){
	var model = api.require('model'); 
	  model.config({
                appId: 'A6076635424176',
                appKey: '09645BE2-3CD4-4015-1688-A262573D1D06',
                host: 'https://d.apicloud.com'
            });
    // 获取store页面所有信息
    getstoreInfo();
}

// 获取store页面所有信息
function getstoreInfo(){
	getstore();
	getfood();
}
 // 获取store页面所有信息结束

 // 获取store信息
 function getstore(){
    var storeid=$api.getStorage("storeid");
    var client = new Resource("A6076635424176", "09645BE2-3CD4-4015-1688-A262573D1D06");
var Store= client.Factory("store");
Store.query({
  "filter": {
    "where": {"id":storeid},
    "skip": 0,
    //"limit": 20
  }
},function(ret,err){
  //return body
  if(ret){
  	//alert(JSON.stringify(ret));
     store(ret);

  }else{
     alert(JSON.stringify(err));
  }
})
 }
 // 获取store信息结束

 // 获取关联美食信息
 function getfood(){
 	var storeid=$api.getStorage("storeid");
// 获取关联美食信息
var relation = api.require('relation');
relation.findAll({
    class: 'store',
    id: storeid,               
    column:'food'                       
}, function(ret, err) {
    if(ret){
    // alert(JSON.stringify(ret));
     food(ret);
  }else{
     alert(JSON.stringify(err));
  }
});
 }
 // 获取关联美食信息结束
 
 //显示store信息
    function store(data_){
    	var list = $api.byId('store_main');
    	var list2 = $api.byId('store_main_store');
        var html = ''; 
        var html2=''; 
        if (data_[0].storename) {
        	//alert(data_[0].storename);
        	 html+='<div><img src="'+data_[0].img.url+'"></div>';
           html+='<i style="display:none">'+data_[0].id+'</i>';
        html+='<div>'+data_[0].storename+'</div>';
        html+='<div>';
        html+='<p></p>';
        html+='<p></p>';
        html+='<p>配送费<span>'+data_[0].peisong+'</span>元</p>';
        html+='<p>起送<span>'+data_[0].qisong+'</span>元</p>';
        html+='</div>';
        html+='<div class="fa fa-heart-o fa-2x store_collect"></div>';
        html2+='<div class="store_main_store_img">';
        html2+='<img src="'+data_[0].img.url+'">';
        
        html2+='</div>';
        html2+='<table>';
        html2+='<tr><td>联系地址:</td><td>'+data_[0].address+'</td></tr>';
        html2+='<tr><td>联系电话:</td><td>'+data_[0].phone+'></td></tr>';
        html2+='</table>';
        }
       
         $api.html(list, html);
         $api.html(list2, html2);  

         $('body').on('click','.store_collect',function(){
            if($(this).hasClass("fa-heart-o")){
            $(this).attr("class","fa fa-heart fa-2x store_collect");
            var a= $(this).prev().prev().prev().text();
           //alert(a);
           // 将此id写入收藏列表
           var userId=$api.getStorage('userid');
           var relation = api.require('relation');
           relation.insert({
              class: 'user',
              id: userId,
              column: 'collect',
              value: {
                  name: data_[0].storename,
                  storeid:data_[0].id
                  }
           }, function(ret, err){
     if( ret ){
       // alert( JSON.stringify( ret) );
       $api.setStorage('collectid',ret.id);
       alert("收藏成功");
     }else{
        alert( JSON.stringify( err) );
     }
});
// 将此id写入收藏列表结束
        }
        else{
            $(this).attr("class","fa fa-heart-o fa-2x store_collect");
            // 将此条信息从收藏表中删除
   var collectid=$api.getStorage('collectid');
   var client = new Resource("A6076635424176", "09645BE2-3CD4-4015-1688-A262573D1D06");
   //var client = new Resource("A6076635424176", "you appKey");
var Address= client.Factory("collect");
Address.delete({
  "_id":collectid
},function(ret,err){
  if(ret){
    api.alert({msg:"取消收藏"},function(){
       
    })
  }
})
            // 将此条信息从收藏表中删除结束
        }
})   
    }
 //显示store信息结束
    

 //显示美食信息
    function food(data_){
        var list = $api.byId('one');
    var html = '';    
     for (var i = 0; i < data_.length; i++) {        
         if (data_[i].name) {
           // alert(data_[i].updatedAt);
           html+='<div>';
           html+='<div><img src="'+data_[i].img.url+'"></div>';
           html+='<div>';
           html+='<p>'+data_[i].name+'</p>';
           html+='<p></p>';
           html+='<p><span>'+data_[i].price+'</span>元</p>';
           html+='<p class="store_carone store_car store_car_show" jiesuan-id="'+data_[i].id+'"><i class="fa fa-plus-circle trans_cir_two_1"></i></p>';
           html+='<p class="store_car ">';
           html+='<i class="fa fa-minus-square trans_cir_one"></i>';
           html+='<input type="text" value="0" class="store_car_content" style="margin:0 8px">';
           html+='<i class="fa fa-plus-circle trans_cir_two_2"></i>';
           html+='</p>';
           html+='</div>';
           html+=' </div>';  
         }
     }
    $api.html(list, html);
     $(".trans_cir_two_1").click(function(){
      var jiesuan_id=$(this).parent().attr("jiesuan-id");
      // alert(jiesuan_id);
       $api.setStorage("oneid",jiesuan_id);
     })
          
}
 // 显示美食信息结束