apiready = function(){
     // 获得美食列表
    getoneList();  
}
// 获得美食列表
function getoneList(){
	var client = new Resource("A6076635424176", "09645BE2-3CD4-4015-1688-A262573D1D06");
var Life= client.Factory("food");
Life.query({
  "filter": {
    "where": {"active":"全场五折"},
    "skip": 0,
    //"limit": 20
  }
},function(ret,err){
  //return body
  if(ret){
  	//alert(JSON.stringify(ret));
     oneList(ret);

  }else{
     alert(JSON.stringify(err));
  }
})
}
// 获得美食列表结束

// 显示美食列表
function oneList(data_){
	var list = $api.byId('activity_main');
    var html = '';    
     for (var i = 0; i < data_.length; i++) {        
         if (data_[i].name) {
             //alert(data_[i].id);
             html += '<div class="recommend_food_list"><div class="recommend_store_name"><p>全场五折，欢迎抢购!</p><p><span></span></p></div><div class="activity_one_content"><div><img src="'+data_[i].img.url+'"></div><div food-id="'+data_[i].id+'"><p>'+data_[i].name+'</p><p class="activity_one_num"></p><p class="activity_one_price"><span>'+data_[i].price+'</span>元</p><p id="one_buy" onclick="fnbuy(this)">抢</p><span id="one_id">'+data_[i].id+'</span></div></div></div>';          
         }
         // if结束
     }
     // for结束
    $api.html(list, html);  
    

}
// 显示美食列表结束

// 点击抢购
function fnbuy(data){
    var oneid=data.parentNode.getAttribute("food-id");
    $api.setStorage("oneid",oneid);
    api.openWin({
                     name:'pay_first',
                     url:'pay_first.html',
                     bounces:true
                 })
}
// 点击抢购结束
    