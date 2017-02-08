/**
 * Created by Liukeyi on 2016/5/31.
 */
var x = 10;
/*
function foo() {
    console.log(x);
}

(function(funarg) {
    var x = 20;

    funarg();
})(foo);*/


function fun(n, o) {
    console.log(o);

    return {
        fun: function(m) {
            return fun(m, n);
        }
    }

}

var a = fun(0); a.fun(1); a.fun(2); a.fun(3);   //undefined, 0, 0, 0

var b = fun(0).fun(1).fun(2).fun(3);            //undefined, 0, 1, 2

var c = fun(0).fun(1); c.fun(2); c.fun(3);      //undefined, 0, 1, 1

if (!Function.prototype.bind) {
    Function.prototype.bind = function(oThis) {
        if (typeof this !== 'function') {

        }

        var aArgs = Array.prototype.slice.call(arguments, 1),
            fToBind = this,
            fNOP = function() {},
            fBound = function() {
                return fToBind.apply(this instanceof fNOP
                                        ? this
                                        : oThis || this,
                                    aArgs.concat(Array.prototype.slice.call(arguments)));
            };

        fNOP.prototype = this.prototype;
        fBound.prototype = new fNOP();

        return fBound;
    }
}