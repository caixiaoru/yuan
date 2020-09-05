apiready = function(){
    // 获取内容列表
    getfoodList();
}

// 获取内容列表
function getfoodList(){
	var data_style=$api.getStorage("data_style");	
	$api.byId("style_title").innerHTML=data_style;

	var client = new Resource("A6076635424176", "09645BE2-3CD4-4015-1688-A262573D1D06");
var food= client.Factory("food");
food.query({
  "filter": {
    "where": {"style":data_style},
    "skip": 0,
    //"limit": 20
  }
},function(ret,err){
  //return body
  if(ret){
  	// alert(JSON.stringify(ret));
     foodList(ret);

  }else{
     alert(JSON.stringify(err));
  }
})

}
// 获取内容列表结束


//显示内容列表
function foodList(data_){
   var list = $api.byId('index_food_list');
    var html = '';    
     for (var i = 0; i < data_.length; i++) {        
         if (data_[i].name) {
             html += '<a href="javascript:void(0)" onclick="fnstore2(this)" store-id="'+data_[0]['store(uz*R*id)']+'">';
             html += '<div class="recommend_food_list">';
             html += '<div class="recommend_store_name">';
             html += '<p id="index_store_name">欢迎光临！</p>';
             html += '<p><span></span></p></div>';
             html += '<div class="recommend_food_list_name">';
             html += '<div><img src="'+data_[i].img.url+'"></div><div>';
             html += '<p>'+data_[i].name+'</p>';
             html += '<p></p>';
             html += '<p></p>';
             html += '<p><span>'+data_[i].price+'</span>元</p></div></div></div></a>';

                       
         }
         // if结束
     }
     // for结束
    $api.html(list, html);
}
//显示内容列表结束

// 点击美食跳转到店铺
// 点击美食
function fnstore2(data){
    var storeid=data.getAttribute("store-id");
    //alert(storeid);
    $api.setStorage("storeid",storeid);
     api.openWin({
        name:'store',
        url:'store.html',
        bounces:true
    });
}
// 点击美食结束
// 点击美食跳转到店铺结束