/**
 * Created by Liukeyi on 2016/6/1.
 */
function A() {}
A.prototype.x = 10;

var a = new A();
console.log(a.x);

A.prototype = {
    constructor: A,
    x: 20,
    y: 30
};

var b = new A();
console.log(b.x + ":" + b.y);
console.log(a.y);