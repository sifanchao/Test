$("#login li").click(function(){
    var index = $("#login li").index($(this));
    $(".form"+Math.abs(index-1)).hide();
    $(".form"+index).show();
    $("#login li").eq(index).css("color","#0F97ff");
    $("#login li").eq(Math.abs(index-1)).css("color","#666666");
})

$(document).ready(function(){
    $("#userName").blur(function(){
        inputValidation($(this).val(),0);
    })
    $("#userPwd").blur(function(){
        inputValidation($(this).val(),1);
    })
    $("#userPhone").blur(function(){
        inputValidation($(this).val(),2);
    })
})

function inputValidation(value,num){
    var reg = {
        0 : /^[a-zA-Z0-9]{8,16}$|^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
        1 : /^\w{8,16}$/,
        2 : /^1(3|4|5|7|8)\d{9}$/
    };
    var prompt = {
        0 : "用户名格式错误",
        1 : "密码格式错误",
        2 : "电话号码格式错误"
    };
    return function(){
        if(value != "" && reg[num].test(value) == false){
            $("#errorBox").html(prompt[num]);
            event.preventDefault();
        }else{
            $("#errorBox").html("");
        }
    }()
}

// 打开遮罩
function openMask(){
    $(".modal").show();
    $(".bgColor").show();
}
// 关闭遮罩
$(".closeBtn").click(function(){
    $(".modal").hide();
    $(".bgColor").hide();
})


$("#accountLoginBtn").click(function(){
    if($("#errorBox").html() != "" || $("#userName").val() == "" || $("#userPwd").val() == ""){
        event.preventDefault();
        $("#aaa").html("用户名或密码不能为空！");
        openMask();
    }
})

$("#messageLoginBtn").click(function(){
    if($("#errorBox").html() != "" || $("#userPhone").val() == "" || $(".code input").val() == ""){
        event.preventDefault();
        $("#aaa").html("电话号码或验证码不能为空！");
        openMask();
    }
})