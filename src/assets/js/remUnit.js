(function(){
    function w() {
        // 返回html dom中的root 节点 即<html>
        var r = document.documentElement;
        // getBoundingClientRect用于获取某个元素相对于视窗的位置集合。集合中有top, right, bottom, left等属性。
        var a = r.getBoundingClientRect().width;
        if (a > 750 ){
            a = 750;
        } 
        // 750/w = 100/font-size
        var rem = a / 7.5;
        r.style.fontSize = rem + "px"
    }
    var t;
    w();
    window.addEventListener("resize", function() {
        clearTimeout(t);
        t = setTimeout(w, 300)
    }, false);
})();