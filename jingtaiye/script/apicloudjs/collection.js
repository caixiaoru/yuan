apiready = function(){
	var model = api.require('model'); 
	  model.config({
                appId: 'A6076635424176',
                appKey: '09645BE2-3CD4-4015-1688-A262573D1D06',
                host: 'https://d.apicloud.com'
            });
    // 获取用户所收藏的商家
    getcollectId();
}

// 获取用户所收藏的商家id
function getcollectId(){
    var userId=$api.getStorage('userid');
    // alert(userId);
    var relation = api.require('relation');
relation.findAll({
    class: 'user',
    id: userId,
    column: 'collect'
}, function (ret, err) {
    if( ret ){
         // alert(JSON.stringify(ret) );
  
        // 通过storeid获取美食
         getcollectList(ret);
       
    }else{
        alert(JSON.stringify(err) );
    }
});
}
// 获取用户所收藏的商家id 结束


// 通过id获取商家信息
function getcollectList(data_){
     for (var i = 0; i < data_.length; i++) {

   var client = new Resource("A6076635424176", "09645BE2-3CD4-4015-1688-A262573D1D06");
var Address= client.Factory("store");
Address.query({
  "filter": {
    "where": {'id':data_[i].storeid},
    "skip": 0,
    //"limit": 20
  }
},function(ret,err){
  if (ret) {                    
              // alert(JSON.stringify(ret));
           // 显示收藏列表
          // alert(1);

           collectList(ret);
             
        } else {
            alert(JSON.stringify(err));
        }
})
     }
    
  
   
}
// 通过id获取商家信息 结束

// 显示收藏列表
function collectList(data_){
    var list = $api.byId('collect_list');
    var html=$api.byId('collect_list').innerHTML;
    // alert(2);

  
         if (data_[0].storename) {
            
             html += '<div class="recommend_store_list">';
             html += '<div>';
             html += '<div class="recommend_store_img"><img src="../image/c.jpg"></div>';
             html += '<div class="recommend_store_list_content">';
             html += '<p>'+data_[0].storename+'</p>';
             html += '<p>月售<span>'+data_[0].monthsale+'</span>份</p>';
             html += '<p>配送费：<span>'+data_[0].peisong+'</span>元</p>';
             html += '<p><span>'+data_[0].qisong+'</span>元起送</p>';
             html += '<p class="fa fa-heart store_collect" data-id="'+data_[0].id+'"></p>';
             html += '<a href="store.html">进店逛逛</a>';
             html += '</div></div></div>';              
        
            }
                 $api.html(list, html);
      
   

}
