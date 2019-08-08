var prizelist = [
    {
        "prize": "保温杯",
        "image": "https://img-vip-ssl.a.88cdn.com/img/banner/201811021431424815.png",
        "nickname": "怎能绘***坠",
        "addtime": "2019-02-26 14:12:21"
    },
    {
        "prize": "30金币",
        "image": "https://img-vip-ssl.a.88cdn.com/img/banner/201811021457237322.png",
        "nickname": "你造吗***！",
        "addtime": "2019-02-26 13:11:09"
    },
    {
        "prize": "会员代金券",
        "image": "https://img-vip-ssl.a.88cdn.com/img/banner/201811021454143728.png",
        "nickname": "： 吢***丕",
        "addtime": "2019-02-26 12:18:43"
    },
    {
        "prize": "移动电源",
        "image": "https://img-vip-ssl.a.88cdn.com/img/banner/201811021436595889.png",
        "nickname": "兰恺恩***伯",
        "addtime": "2019-02-26 12:18:25"
    }
];


var table = document.getElementsByTagName("table")[0];
function creatTable(){
    for(var i = 0; i < prizelist.length; i++){
        var tr = document.createElement("tr");
        for(var j in prizelist[i]){
            var td = document.createElement("td");
            if("image" == j){
                var img = document.createElement("img");
                img.src= prizelist[i][j];
                img.height = "80";
                td.appendChild(img);
            }else{
                td.innerHTML= prizelist[i][j];
            }
            tr.appendChild(td);
        }
        table.children[0].appendChild(tr);
    }
}
creatTable();



