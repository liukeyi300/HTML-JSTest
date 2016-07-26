/**
 * Created by Liukeyi on 2016/6/1.
 */
/*function changeValue(a) {
    a.x = 10;
    a = {
        y:20
    };
}

var b = {
    x : 5
};
console.log(b.x);
changeValue(b);
console.log(b.x);
console.log(b.y);*/

var a = [1,23,4,5,67,8];
var func = [];

for (var i = 0; i < a.length; i ++) {
    func[i] = func[i] || {};
    func[i] = (function(k) {
        return function() {
            console.log(a[i]);
        };
    })(i);
}

/*for (i = 0; i < func.length; i ++) {
    func[i]();
}*/

function printFi(x, y) {
    var sum = 0;
    x = x || 0;
    y = y || 1;
    sum = x + y;
    console.log(sum);
    x = y;
    y = sum;
    if (y < 10000) {
        printFi(x, y);
    }
}
/*
printFi();*/

Object.prototype.plus = function(x) {
    return this + x;
};

Object.prototype.minus = function(y) {
    return this - y;
};

/*var gg = (5).plus(3).minus(6);
console.log(gg);*/

function add(x) {
    var temp = function(b) {
        return add(x + b);
    };

    temp.valueOf = temp.toString = function() {
        return x;
    };

    return temp;
}
/*var a = add(2)(3)(4);
console.log(a.toString());*/

a = [5,3,1,8,9,7,41,3,55,120,31547];
var b = a[0];
for (var ii = 1; ii < a.length; ii ++) {
    b = Math.max(b, a[ii]);
}
/*console.log(b);*/

Object.prototype.proNum = function() {
    var num = 0;
    for (var key in this) {
        if (this.hasOwnProperty(key)) {
            num ++;
        }
    }
    return num;
};

function sortOA(objectArray) {
    return objectArray.sort(function(o1, o2) {
        return o1.proNum() - o2.proNum();
    });
}

var oba = [{a:10, b:5}, {c:7}, {sd:12, saifj:"asdf", ac:123}];
var c = sortOA(oba);
/*console.log(c);*/

var option1 = {
    a: 1,
    b: 212,
    c: function() {
        console.log('sdf');
    }
};

var option2 = {
    a: 2,
    b: 225
};