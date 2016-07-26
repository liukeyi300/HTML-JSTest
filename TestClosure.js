/**
 * Created by Liukeyi on 2016/5/31.
 */
var x = 10;
function foo() {
    console.log(x);
}

(function(funarg) {
    var x = 20;

    funarg();
})(foo);