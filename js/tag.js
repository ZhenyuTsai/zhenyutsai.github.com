// 检测使用的设备，跳转到指定的网页
try {
    var urlhash = window.location.hash;
    if (!urlhash.match("fromapp")) {
        if (navigator.userAgent.match(/(iPhone|iPod|Android|ios|iPad)/i)) {
            window.location = "../index-mobile.html";//路径
            //例如：www.123.com 电脑端 → www.123.com/m/移动端,跳转地址填"/m/"或http://www.123.com/m/
        }
    }
}
catch (err) {
}