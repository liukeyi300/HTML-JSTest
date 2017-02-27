/*
var s1 = "2 + 2";
var c = eval(s1);
//console.log(c);
var a = "abcdefg";
var b = a.split('');
console.log(b);*/
/*
setImmediate(function() {
    setTimeout(function() {
        console.log('1');
    }, 0)

    setImmediate(function() {
        console.log('2');
    })
})*/
/*
var a = [];
console.log(a.__proto__.constructor === Array);*/
/*var a = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18];

for (var i = 0, currentPage = 1; i < 100; i ++, currentPage ++) {
    if (currentPage * 12 > a.length + 12) {
        currentPage = 1;
    }

    console.log(a.slice((currentPage - 1) * 12, currentPage * 12))
}*/

/*
var Counter = (function() {
    var i = 0;
    function inner() {
        return i++;
    }

    return function() {
        return inner();
    }
})();

function T() {
    console.log(typeof T);
    if (typeof T.Result === 'undefined') {
        T.Result = -1;
    }

    T.Result ++;
    return T.Result;
}*/

var a = () => { return this.C };

function c() {
    this.C = 12;
    this.b = a;
}

var C = 10;
console.log(a());
var g = new c();
console.log(g.b());