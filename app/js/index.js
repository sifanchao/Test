var data = {site: "菜鸟教程",
    url: "www.runoob.com",
    alexa: 10000};
var vm = new Vue({
    el: '#vue_det',
    data: data,
    methods: {
        details: function() {
            return  this.site + " - 学的不仅是技术，更是梦想！";
        }
    }
});

document.write(vm.site);
document.write("<br>");
document.write(vm.url+"<br>");
document.write(vm.$data === data);
document.write("<br>");
document.write(vm.$data);
document.write("<br>");
document.write(vm.$el === document.getElementById('vue_det'));
