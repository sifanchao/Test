window.onload = function(){
    $.ajax({
        url: 'https://dyactive2-vip-ssl.xunlei.com/iface/?action=init&actid=vipcoin',
        type: 'get',
        dataType: 'jsonp',  // 请求方式为jsonp
        success:function(result){
            if(result.result == 0){
                var prizelist = result.data.prizeList || [];
                creatTable(prizelist);
                slideShow(prizelist);
                pageNum(prizelist);
            }
        }
    });
}

// 页码
function pageNum(prizelist){
    var num = [];
    for(var i = 0; i < Math.ceil(prizelist.length/5); i++){
        num.push("<li>\
                <a href='#'>"+(i+1)+"</a>\
                </li>");
    }
    $("ul").html(num.join(""));

    var oTable = $("table tr");
    for(var i = 1;i < oTable.length; i++){
        if(i >= 6){
            oTable[i].style.display = "none";
        }
    }
    $("ul li a").on('click',function(e){
        e.preventDefault();
        var index = $(this).html();
        for(var i = 1; i < oTable.length; i++){
            $(".j_" + i).hide();
        } 
        for(var i = (index-1)*5+1; i < 5*index+1 && i < oTable.length; i++){
            $(".j_" + i).show();
        }
    });
}

// 表格
function creatTable(prizelist){
    var oTr = [];
    for(var i = 0;  i < prizelist.length; i++){
        var oTd = [];
        oTd.push("<td>"+parseInt(i+1)+"</td>");
        for(var j in prizelist[i]){
            j = (j == "image" ? "<img src= "+prizelist[i][j]+" height='100' width='100'>" :  prizelist[i][j]);
            oTd.push("<td>"+j+"</td>");
        }
        oTr.push('<tr class="j_'+ (i+1) +'">'+oTd+"</tr>");
    }
    $("table").html($("table").html()+oTr.join(""));
};

var mySwiper = new Swiper ('.swiper-container', {
    loop: true, // 循环模式选项
    observer: true,  //修改swiper自己或子元素时，自动初始化swiper 
    autoplay: true,
    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})

// 幻灯片
function slideShow(prizelist){
    var html = [];
    for(var i = 0; i < 5; i++){
        html.push("<div class= 'swiper-slide'>\
                <img src= '"+prizelist[i].image+"' height='90' width='90'/>\
                </div>");
    }
    $(".swiper-wrapper").html(html.join(""));
}

