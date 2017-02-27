/**
 * Created by Liukeyi on 2016/10/13.
 */
onmessage = function (e) {
    var num = e.data;
    var r = 0;
    for (var i = 1; i < num; i++) {
        r += i;
    }
    postMessage(r);
};

var a = {
    ORDER_LIST: 'abc'
}

console.log(a['ORDER_LIST'])