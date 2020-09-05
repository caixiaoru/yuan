$(function(){
    //    返回我的收藏
    $(".my_back").click(function(){
        $(window).attr('location','./my.html');
    });
    $(".store_back").click(function(){
        $(window).attr('location','./index.html');
    });
    $(".activity_back").click(function(){
        $(window).attr('location','./index.html');
    });
    $(".style_back").click(function(){
        $(window).attr('location','./index.html');
    });

    //首页搜索
    $(".index_search").focus(function(){
    $(window).attr('location','./search.html');
});
//    首页热门推荐切换
    $(".index_recommend_tab p").click(function(){
        $(this).addClass("index_recommend_active").siblings().removeClass("index_recommend_active");
        $('.index_recommend_content>div').eq($(this).index()).addClass('index_recommend_show').siblings().removeClass('index_recommend_show');
    });
    console.log(111);
//    搜索页返回首页
    $(".search_back").click(function(){
        console.log("搜索页面");
        $(window).attr('location','./index.html');
    });
//    搜索页面分类切换
    $(".search_tab div").click(function(){
        $(this).addClass("search_tab_active").siblings().removeClass("search_tab_active");
    });
//食物美食和商家切换
    $(".store_food_style>div").click(function(){
        $(this).addClass("store_food_style_active").siblings().removeClass("store_food_style_active");
        $(".store_food_style_content>div").eq($(this).index()).addClass('store_main_content_show').siblings().removeClass('store_main_content_show');
    });
//健康生活展开收起
    //console.log(333);
    // if($(".life_main_list_content_two_a").height()>58){
    //     //如果文字超过三行，设置div高度为三行，并显示展开按钮
    //     $(".life_main_list_content_two_a").css("height",58);
    //     //显示展开按钮
    //     $(".life_main_list_content_two p:nth-of-type(2)").css("display","block");        
    //      };            
         
    //      var p_height=$(".life_main_list_content_two_a p").height();       
    //      $(".life_main_open").click(function(){            
    //         if($(this).html() == "展开"){
    //             $(this).html("收起");
    //             $(this).prev().css("height",p_height);
    //         }
    //         else{
    //             $(this).html("展开");
    //             $(this).prev().css("height",58);
    //         }
    //     })      
        
//商家店铺store.html
    $(".store_main_food_left ul li").click(function(){
        console.log("左侧");
        $(this).addClass("store_main_food_left_active").siblings().removeClass("store_main_food_left_active");
        $(".store_main_food_right ul li").eq($(this).index()).addClass("store_main_food_right_show").siblings().removeClass("store_main_food_right_show");
    });

//    点击收藏
// $('body').on('click','.store_collect',function(){
//      if($(this).hasClass("fa-heart-o")){
//             $(this).attr("class","fa fa-heart fa-2x store_collect");
//         }
//         else{
//             $(this).attr("class","fa fa-heart-o fa-2x store_collect");
//         }
// })
   
    // 点击设置
    $(".my_main_three").click(function(){
        $(".my_block").css("display","block");
    })
    $(".my_block .fa-close").click(function(){
        $(".my_block").css("display","none");
    })

    // 加入购物车    
    // $(".store_car").click(function(){        
    //     var money=$(".store_eveymoney").html();       
    //     $(".store_allmoney").html(money);
    // })


    // 左边减号的颜色
    // if(parseInt($("input").val()) <1){
    //         $(".trans_cir_one").css("color","gray");
    //      } 
    //      else{
    //         $(".trans_cir_one").css("color","mediumseagreen");
    //      } 


    // 购物车
    // 加号与加减号的切换
    $('body').on('click','.store_carone',function(){
        $(this).removeClass("store_car_show");
        $(this).next().addClass("store_car_show");
    })
    // 加号
    $('body').on('click','.trans_cir_two_1',function(){       
       $(this).parent().next().find('input').val(1);      
        var money=parseInt($(this).parent().prev().text());        
        var num= parseInt($(this).parent().next().find('input').val());
       var text=$(".store_allmoney").text();
       var text2=parseInt(text)+money;
       $(".store_allmoney").text(text2);
    })
    // 加号
    $('body').on('click','.trans_cir_two_2',function(){
        var num = parseInt ($(this).prev().val()); 
          $(this).prev().val(num+1);
           var money=parseInt($(this).parent().prev().prev().text());        
        var num= parseInt($(this).prev().val());
       var text=$(".store_allmoney").text();
       var text2=parseInt(text)+money;
       $(".store_allmoney").text(text2);
    })
    //减号 
     $('body').on('click','.trans_cir_one',function(){
         var num = parseInt($(this).next().val()); 
         $(this).next().val(num-1); 
          var money=parseInt($(this).parent().prev().prev().text());        
         
       var text=$(".store_allmoney").text();
       var text2=parseInt(text)- money;
     
       $(".store_allmoney").text(text2);
        // if(parseInt($("input").val()) <1){
        //     $(".trans_cir_one").css("pointer-events","none");
        //  } 
        //  else{
        //     $(".trans_cir_one").css("pointer-87  34","auto");
        //  }
    })



     // 购物车总价
     $('body').on('click','.fa-plus-circle',function(){
        
     })
// 与上边购物车的内容一样
    // $(".store_carone").click(function(){
    //     $(this).removeClass("store_car_show");
    //     $(this).next().addClass("store_car_show");
    // })
    // 点击事件
    // $(".trans_cir_two_1").click(function(){
    //     var num = parseInt($("input").val()); 
    //       $("input").val(num+1);
    // })
    //  $(".trans_cir_two_2").click(function(){
    //     var num = parseInt($("input").val()); 
    //       $(this).prev().val(num+1);
    // })
    // $(".trans_cir_one").click(function(){
    //     var num = parseInt($("input").val()); 
    //      $(this).next().val(num-1); 
    //     if(parseInt($("input").val()) <1){
    //         $(".trans_cir_one").css("pointer-events","none");
    //      } 
    //      else{
    //         $(".trans_cir_one").css("pointer-events","auto");
    //      }
            
    // })

    // 修改收货地址--性别
    $("body").on("click",".address_edit_sex span",function(){
        console.log("09756789");
        $(this).css("background","mediumseagreen");
        $(this).siblings().css("background","white");
    })
   
    // zhifu
    $(".footer_pay").click(function(){
        $(".pay_succ").fadeIn();
    })

    // 点击支付成功
    // $(".pay_succ").click(function(){
    //    $(this).css("display","none");
    //    $(window).attr("location","index2.html");
    // })



// // 倒计时
//  function updataTime(){
//         var date1=new Date();  //当前时间
//         //活动开始时间
//         var dates="2018-04-10 22:00:00";
//         //把时间化为时间戳
//         var date2 = new Date(Date.parse(dates.replace(/-/g, "/")));
//         var date3=date2.getTime()-date1.getTime();  //时间差的毫秒数
//         //计算出相差天数
//         var days=Math.floor(date3/(24*3600*1000));
//         //计算出小时数
//         var leave1=date3%(24*3600*1000) ;   //计算天数后剩余的毫秒数
//         var hours=Math.floor(leave1/(3600*1000));
//         //计算相差分钟数
//         var leave2=leave1%(3600*1000) ;       //计算小时数后剩余的毫秒数
//         var minutes=Math.floor(leave2/(60*1000));
//         //计算相差秒数
//         var leave3=leave2%(60*1000) ;     //计算分钟数后剩余的毫秒数
//         var seconds=Math.round(leave3/1000);
//         // alert(" 相差 "+days+"天 "+hours+"小时 "+minutes+" 分钟"+seconds+" 秒");
//         var str = " 相差 "+(days<10?"0"+days:days)+"天 "+(hours<10?"0"+hours:hours)+"小时 "+(minutes<10?"0"+minutes:minutes)+" 分钟"+(seconds<10?"0"+seconds:seconds)+" 秒";

//         document.getElementById('endTimeing').innerHTML = (days<10?"0"+days:days)+"天 "+(hours<10?"0"+hours:hours)+"小时 "+(minutes<10?"0"+minutes:minutes)+" 分钟"+(seconds<10?"0"+seconds:seconds)+" 秒";
//     }
//     setInterval(updataTime, 1000);
});
