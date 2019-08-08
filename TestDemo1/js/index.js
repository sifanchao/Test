var ulLi = document.getElementById("iogin").getElementsByTagName("li");
var formIndex = document.getElementsByTagName("form");
var oButton = document.getElementsByClassName("btn");

// 账号登陆
ulLi[0].onclick = function(){
    formIndex[0].style.display = "block";
    formIndex[1].style.display = "none";
    ulLi[0].style.color = "#0F97ff";
    ulLi[1].style.color = "#666666";
}
function accountLogin(){
    var oInput = formIndex[0].getElementsByTagName("input");
    oButton[0].onclick = function(){
        if((oInput[0].value=='') && (oInput[1].value=='')){
            alert('用户名和密码不能为空！');
            event.preventDefault();
        }
        else if(oInput[0].value==''){
            alert('用户名不能为空！');
            event.preventDefault();
        }
        else if(oInput[1].value==''){
            alert('密码不能为空！');
            event.preventDefault();
        }
    } 
}
// accountLogin();


// 短信登陆
ulLi[1].onclick = function(){
    formIndex[1].style.display = "block";
    formIndex[0].style.display = "none";
    ulLi[1].style.color = "#0F97ff";
    ulLi[0].style.color = "#666666";
}
function textLogin(){
    var oInput = formIndex[1].getElementsByTagName("input");
    oButton[1].onclick = function(){
        if(oInput[0].value==''){
            alert('手机号不能为空！');
            event.preventDefault();
        }else if(oInput[1].value == ""){
            alert('验证码不能为空！');
            event.preventDefault();
        }
    } 
}
textLogin();

/*------------------------------------弹窗------------------------------------------- */
function PopupWindow(){
    var oInput = formIndex[0].getElementsByTagName("input");
    oButton[0].onclick = function(){
        if(oInput[0].value == "" || oInput[1].value == ""){
            event.preventDefault();
            openMask();
        }
    }
}
PopupWindow();

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
