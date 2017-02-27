/**
 * Created by Liukeyi on 2016/5/31.
 */
/*
var x = 10;
function foo() {
    console.log(x);
}

(function(funarg) {
    var x = 20;

    funarg();
})(foo);*/


var a = [1,2,3,4,5,6];

function b(arg) {
    arg[0] = 5;
    console.log(arg.join(''));
}

b(Object.assign([], a));

console.log(a.join(''));