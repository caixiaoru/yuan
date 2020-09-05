apiready = function(){
    
}
    var address_edit_sex="男士"
    $(".address_edit_sex span").click(function(){
        address_edit_sex=$(this).text();
    });

    function addressAdd(){
    	var userId=$api.getStorage('userid');
        var conect_name=$api.byId("conect_name").value;
        var conect_hone=$api.byId("conect_hone").value;
        var conect_address=$api.byId("conect_address").value;
      // 添加关联对象
        var client = new Resource("A6076635424176", "09645BE2-3CD4-4015-1688-A262573D1D06");
        var Address= client.Factory("user");
        Address.save({"_id":userId,"_relation":"address"},{
            "name": conect_name,
            "phone":conect_hone,
            "sex":address_edit_sex,
            "address":conect_address

        },function(ret,err){
        if (ret) {        
             
            //alert(JSON.stringify(ret));
             api.alert({
                msg: '添加成功！'
            }, function () {
                 api.openWin({
                     name:'my',
                     url:'my.html',
                     bounces:true
                 });
                 

            })
            
             
        } else {
            alert(JSON.stringify(err));
        }
        })



//         var relation = api.require('relation');
// relation.insert({
//     class: 'user',
//     id: userId,
//     column: 'address',
//     value: {
//         name: 'value'
//     }
// }, function(ret, err){
//      if( ret ){
//         alert( JSON.stringify( ret) );
//      }else{
//         alert( JSON.stringify( err) );
//      }
// });






    }
    