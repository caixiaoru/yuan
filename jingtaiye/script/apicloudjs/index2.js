apiready = function(){
    getstoreList();
    getfoodList();
}
// 活动中心
function fnactiveOne(){
    
    api.openWin({
        name:'activityone',
        url:'activityone.html',
        bounces:true
    });
}
function fnactiveTwo(){
    api.openWin({
        name:'activitytwo',
        url:'activitytwo.html',
        bounces:true
    });    
}
function fnactiveThree(){
    api.openWin({
        name:'activitythree',
        url:'activitythree.html',
        bounces:true
    });    
}
// 活动中心结束


// 获取美食信息
function getfoodList(){
    var client = new Resource("A6076635424176", "09645BE2-3CD4-4015-1688-A262573D1D06");
var Life= client.Factory("food");
Life.query({
  "filter": {
    "where": {},
    "skip": 0,
    //"limit": 20
  }
},function(ret,err){
  //return body
  if(ret){
     foodList(ret);

  }else{
     alert(JSON.stringify(err));
  }
})
}
// 获取美食信息结束

// 获取商家信息
function getstoreList(){
    var client = new Resource("A6076635424176", "09645BE2-3CD4-4015-1688-A262573D1D06");
var Life= client.Factory("store");
Life.query({
  "filter": {
    "where": {},
    "skip": 0,
    //"limit": 20
  }
},function(ret,err){
  //return body
  if(ret){
    // alert(JSON.stringify(ret));
     storeList(ret);

  }else{
     alert(JSON.stringify(err));
  }
})
}
// 获取商家信息结束

// 显示美食信息
function foodList(data_){
     var list = $api.byId('index_food_list');
    var html = '';    
     for (var i = 0; i < data_.length; i++) {        
         if (data_[i].name) {
             html += '<a href="javascript:void(0)" onclick="fnstore2(this)" store-id="'+data_[i]['store(uz*R*id)']+'">';
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
// 显示美食信息结束

// 显示商家信息
function storeList(data_){
    var list = $api.byId('index_store_list');
    var html = '';    
     for (var i = 0; i < data_.length; i++) {        
         if (data_[i].storename) {
           // alert(data_[i].updatedAt);
             html += '<div class="recommend_store_list">';
             html += '<div>';
             html += '<div class="recommend_store_img">';
             html += '<img src="'+data_[i].img.url+'">';
             html += '</div>';
             html += '<div class="recommend_store_list_content" store-id="'+data_[i].id+'">';
             html += '<p>'+data_[i].storename+'</p>';
             // html += '<p>月售<span>'+data_[i].monthsale+'</span>份</p>';
             html += '<p>配送费：<span>'+data_[i].peisong+'</span>元</p>';
             html += '<p><span>'+data_[i].qisong+'</span>元起送</p>';
             // html += '<p>评分:'+data_[i].storescore+'</p>';
             html += '<a href="javascript:void(0)" onclick="fnstore(this)">进店逛逛</a>';
             html +='</div></div></div>';             
         }
     }
    $api.html(list, html); 
}
// 显示商家信息结束

// 点击进店逛逛
function fnstore(data){
    var storeid=data.parentNode.getAttribute("store-id");
    // alert(storeid);
    $api.setStorage("storeid",storeid);
     api.openWin({
        name:'store',
        url:'store.html',
        bounces:true
    });
}
// 点击进店逛逛结束

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

// 点击美食分类
function fnstyle(data){
    var data_style=data.children[1].innerText;
    //alert(data_style);
    $api.setStorage("data_style",data_style);
    api.openWin({
        name:'style',
        url:'style.html',
        bounces:true
    });
}
// 点击美食分类结束
