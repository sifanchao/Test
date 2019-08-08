var ulLi = document.getElementById("login").getElementsByTagName("li");
var formIndex = document.getElementsByTagName("form");
var oButton = document.getElementsByClassName("btn");

/*-------------------------账号登录---------------------*/
ulLi[0].onclick = function(){
    formIndex[0].style.display = "block";
    formIndex[1].style.display = "none";
    ulLi[0].style.color = "#0F97ff";
    ulLi[1].style.color = "#666666";
}

var userInput = formIndex[0].getElementsByTagName("input");
var errorBox = document.getElementById("errorBox");

function validation(num){
    var reg = {
        0 : /^[a-zA-Z0-9]{8,16}$|^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,
        
        1 : /^\w{8,16}$/
    }
    return function(){
        if(reg[num].test(userInput[num].value) != true && userInput[num].value != ""){
            errorBox.innerHTML = num == 0 ? "用户名格式错误" : "密码格式错误";
            event.preventDefault();
        }else{
            errorBox.innerHTML = "";
        }
    }
}

userInput[0].onblur = validation(0);
userInput[1].onblur = validation(1);
oButton[0].onclick = function(){
    if(errorBox.innerHTML != "" || userInput[0].value == "" || userInput[1].value == ""){
        event.preventDefault();
        document.getElementById("aaa").innerHTML = "用户名或密码不能为空！";
        openMask();
    }
}

/* -----------------------短信登录------------------------------------*/
ulLi[1].onclick = function(){
    formIndex[1].style.display = "block";
    formIndex[0].style.display = "none";
    ulLi[1].style.color = "#0F97ff";
    ulLi[0].style.color = "#666666";
}

var userInput_2 = formIndex[1].getElementsByTagName("input");
userInput_2[0].onblur = function(){
    var reg = /^1(3|4|5|7|8)\d{9}$/;
    return function(){
        if(reg.test(userInput_2[0].value) != true){
            errorBox.innerHTML = "电话号码格式错误";
            event.preventDefault();
        }else{
            errorBox.innerHTML = "";
        }
    }
}()

oButton[1].onclick = function(){
    if(errorBox.innerHTML != "" || userInput_2[0].value == "" || userInput_2[1].value == ""){
        event.preventDefault();
        document.getElementById("aaa").innerHTML = "电话号码或验证码不能为空！";
        openMask();
    }
}

/*------------------------------------弹窗------------------------------------------- */
var modal = document.getElementsByClassName("modal")[0];
var bgColor = document.getElementsByClassName("bg")[0];
var closeBtn = document.getElementsByClassName("closeBtn")[0];

// 打开遮罩
function openMask(){
    modal.style.display = "block";
    bgColor.style.display = "block";
}
// 关闭遮罩
function closeMask(){
    modal.style.display = "none";
    bgColor.style.display = "none";
}
closeBtn.onclick = closeMask;
