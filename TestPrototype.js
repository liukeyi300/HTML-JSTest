/**
 * Created by Liukeyi on 2016/6/1.
 */
'use strict';
/*function A() {}
A.prototype.x = 10;

var a = new A();
console.log(a.x);

A.prototype = {
    constructor: A,
    x: 20,
    y: 30
};

var b = new A();*/
let aa = function(fn, times, interval) {
    return function() {
        if (typeof fn !== 'function') {
            return;
        }

        if (isNaN(times) || times < 0 || isNaN(interval) || interval < 0) {
            return;
        }

        let ct = setInterval(function() {
            if (times <= 0) {
                clearInterval(ct);
            } else {
                fn();
                times --;
            }
        }, interval);
    }
};

/*let a = aa(function() {
    console.log('hahahaha');
}, 10, 500);
a();*/
/*function ABC() {
    var a = 10;
    var b = 20;

    return function() {
        return this.a + this.b;
    }.bind(this);
}

console.log(ABC());*/
/*
console.log(b.x + ":" + b.y);
console.log(a.y);*/
/*
let b = {
    set: 'sdf'
};

let c = {
    set:'haha'
};

let d = {
    set: 'help'
};
let a = [b, c, d, d];
let e = [];
for (let i = 0, length = a.length; i < length; i ++) {
    if (e.indexOf(a[i]) === -1) {
        e.push(a[i]);
    }
}
console.log(e.length);
*/

function Animal() {
    this.name = 'Animal';

    this.showName = function() {
        console.log(this.name);
    }
}

function Cat() {
    this.name = 'cat';
}

let cat = new Cat();
let animal = new Animal();
animal.showName.call(cat, '');
console.log(Animal.prototype);