apiready = function(){
    getlifeList();
}

// 获取信息列表
function getlifeList(){
	var client = new Resource("A6076635424176", "09645BE2-3CD4-4015-1688-A262573D1D06");
var Life= client.Factory("life");
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
     lifeList(ret);         

  }else{
    
     alert(JSON.stringify(err));
  }
})
}
// 获取信息列表结束

// 显示信息列表
function lifeList(data_) {   
    var list = $api.byId('life_main_list');
    var html = '';    
     for (var i = 0; i < data_.length; i++) {        
         if (data_[i].title) {
            // alert(data_[i].img.url);
             html += '<div class="life_main_list">';
             html += '<div class="life_main_list_img">';
             html += '<img src="../image/admin.png">';
             html += '</div>';
             html += '<div class="life_main_list_content">';
             html += '<div class="life_main_list_content_one">';
             html += '<div>小管家</div>';
             html += '<div>'+data_[i].updatedAt.substring(0,10) +'</div>';
             html += '</div>';
             html += '<div class="life_main_list_content_two">';
             html += '<p>'+data_[i].title+'</p>';
             html += '<div class="life_main_list_content_two_a">';
             html += '<p>'+data_[i].content+'</p>';
             html += '</div>';
             html += '<p class="life_main_open">展开</p>';
             html += '<div>';
             html += '<img src="'+data_[i].img.url+'">';
             
             html += '</div></div></div></div>';
         }
     }
    $api.html(list, html);
    if($(".life_main_list_content_two_a").height()>58){
        //如果文字超过三行，设置div高度为三行，并显示展开按钮
        $(".life_main_list_content_two_a").css("height",58);
        //显示展开按钮
        $(".life_main_list_content_two p:nth-of-type(2)").css("display","block");        
         };            
         
        // var p_height=$(".life_main_list_content_two_a p").height();       
         $(".life_main_open").click(function(){     
         var p_height=$(this).prev().children().height();  

            if($(this).html() == "展开"){
                $(this).html("收起");
                $(this).prev().css("height",p_height);
            }
            else{
                $(this).html("展开");
                $(this).prev().css("height",58);
            }
        })  

         
}
// 显示信息列表结束
    


