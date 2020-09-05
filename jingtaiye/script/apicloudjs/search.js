apiready = function(){
	var model = api.require('model'); 
	  model.config({
                appId: 'A6076635424176',
                appKey: '09645BE2-3CD4-4015-1688-A262573D1D06',
                host: 'https://d.apicloud.com'
            });


}

function search2(){
        // 获取搜索框内的内容
	var search_content=$api.byId("search").value;
      // alert(search_content);

var query = api.require("query");

query.createQuery(function(ret, err) {
    if (ret && ret.qid) {
        var queryId = ret.qid;

        query.whereLike({
            qid: queryId,
            column: "storename",
            value: search_content
        });

        query.limit({
            qid:queryId,
            value:"10"
        });

        var model = api.require("model");

        model.findAll({
            class: "store",
            qid: queryId
        }, function(ret, err){
        	// 显示搜索结果列表
        	searchList(ret);
             // alert("ret: " + JSON.stringify(ret) + "\nerr: " + JSON.stringify(err));
        });
    }
});
}

// 显示搜索结果列表
function searchList(data_){

	var list = $api.byId('search_list');
    var html = '';    
     for (var i = 0; i < data_.length; i++) {        
         if (data_[i].storename) {
           // alert(data_[i].updatedAt);
             html += '<li><a href="javascript:void(0)" searchstore-id="'+data_[i].id+'" onclick="fnstore(this)">'+data_[i].storename+'</a></li>';
            
         }
     }
    $api.html(list, html);
 

         
}
// 显示搜索结果列表结束

// 点击列表
function fnstore(data){
    var searchstore=data.getAttribute("searchstore-id");
    $api.setStorage("storeid",searchstore);
    api.openWin({
                     name:'store',
                     url:'store.html',
                     bounces:true
                 })
}
// 点击列表结束