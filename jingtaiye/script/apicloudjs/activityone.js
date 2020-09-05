apiready = function(){
  // 倒计时
 function updataTime(){
        var date1=new Date();  //当前时间
        //活动开始时间
        var dates="2018-05-10 22:00:00";
        //把时间化为时间戳
        var date2 = new Date(Date.parse(dates.replace(/-/g, "/")));
        var date3=date2.getTime()-date1.getTime();  //时间差的毫秒数
        //计算出相差天数
        var days=Math.floor(date3/(24*3600*1000));
        //计算出小时数
        var leave1=date3%(24*3600*1000) ;   //计算天数后剩余的毫秒数
        var hours=Math.floor(leave1/(3600*1000));
        //计算相差分钟数
        var leave2=leave1%(3600*1000) ;       //计算小时数后剩余的毫秒数
        var minutes=Math.floor(leave2/(60*1000));
        //计算相差秒数
        var leave3=leave2%(60*1000) ;     //计算分钟数后剩余的毫秒数
        var seconds=Math.round(leave3/1000);
        // alert(" 相差 "+days+"天 "+hours+"小时 "+minutes+" 分钟"+seconds+" 秒");
        var str = " 相差 "+(days<10?"0"+days:days)+"天 "+(hours<10?"0"+hours:hours)+"小时 "+(minutes<10?"0"+minutes:minutes)+" 分钟"+(seconds<10?"0"+seconds:seconds)+" 秒";

        $api.byId('endTimeing').innerHTML = (days<10?"0"+days:days)+"天 "+(hours<10?"0"+hours:hours)+"小时 "+(minutes<10?"0"+minutes:minutes)+" 分钟"+(seconds<10?"0"+seconds:seconds)+" 秒";
    }
    setInterval(updataTime, 1000);
     // 获得美食列表
    getoneList();  
}
// 获得美食列表
function getoneList(){
	var client = new Resource("A6076635424176", "09645BE2-3CD4-4015-1688-A262573D1D06");
var Life= client.Factory("food");
Life.query({
  "filter": {
    "where": {"active":"一元秒杀"},
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
             html += '<div class="recommend_food_list"><div class="recommend_store_name"><p>一元秒杀，欢迎抢购!</p><p><span></span></p></div><div class="activity_one_content"><div><img src="'+data_[i].img.url+'"></div><div food-id="'+data_[i].id+'"><p>'+data_[i].name+'</p><p class="activity_one_num"></p><p class="activity_one_price"><span>'+data_[i].price+'</span>元</p><p id="one_buy" onclick="fnbuy(this)">抢</p><span id="one_id">'+data_[i].id+'</span></div></div></div>';          
         }
         // if结束
     }
     // for结束
    $api.html(list, html);  
    //fnpay();
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
    