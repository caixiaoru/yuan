apiready = function(){
   
   var userid=$api.getStorage("userid");
    var client = new Resource("A6076635424176", "09645BE2-3CD4-4015-1688-A262573D1D06");
var order= client.Factory("order");
order.query({
  "filter": {
    "where": {'user(uz*R*id)':userid},
    "skip": 0,
    //"limit": 20
  }
},function(ret,err){
  if (ret) {                    
             // alert(JSON.stringify(ret));
           
            // 显示订单列表
            orderList(ret);
             
        } else {
            alert(JSON.stringify(err));
        }
})
   
}

// 显示订单列表
function orderList(data_){
   
	var list = $api.byId('order_list');    	
        var html = '';   
        for (var i = 0; i < data_.length; i++) {       
        if (data_[i].foodname) {
        	//alert(data_[0].storename);
        	 html+='<li class="order_list">';
        html+='<div class="order_list_img"><img src="../image/c.jpg"></div>';
        html+='<div class="order_list_content">';
        html+='<p><a href="JavaScript:void(0)" id="store_id">'+data_[i].foodname+'</a></p>';
        html+='<span></span>';
        html+='<span>'+data_[i].price+'元</span>';
        html+='<span>订单已完成</span>';
        html+='<div><a href="JavaScript:void(0)">再来一单</a></div>';
        html+='</div></li>  ';
        
        }
    }
       
         $api.html(list, html); 
          // // 获取商店名称
          //   getstorename();
           
}
// 显示订单列表结束
    