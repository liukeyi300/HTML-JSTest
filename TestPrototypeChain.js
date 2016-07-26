/**
 * Created by Liukeyi on 2016/6/1.
 */
function A(){
    this.x = 10;
}

A.prototype.y = 20;

var a = new A();
console.log(a.x + ":" + a.y);

function B () {
    B.superproto.constructor.apply(this, arguments);
}

var F = function() {};
F.prototype = A.prototype;
B.prototype = new F();
B.superproto = A.prototype;

B.prototype.constructor = B;

var b = new B();
console.log(b.x + ":" + b.y);

function C() {}
C.prototype.x = 10;