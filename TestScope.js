/**
 * Created by Liukeyi on 2016/5/30.
 */
var data = [];

for (var i = 0; i < 3; i ++) {
    data[i] = (function(k) {
        return function() {
            console.log(k);
        };
    })(i);
}

/*data[0]();
data[1]();
data[2]();*/

var x = 10;

/*function foo() {
    var  y = 20;

    function bar() {
        var z = 30;
        console.log(x+y+z);
    }
    bar();
}

foo();*/

function foo() {
    var y = 20;

    function barFD() {
        console.log(x);
        console.log(y);
    }

    var barFE = function() {
        console.log(x);
        console.log(y);
    };

    var barFn = Function('console.log(x); console.log(y);');

    barFD();
    barFE();
    barFn();
}

foo();