/**
 * Created by Liukeyi on 2016/4/20.
 */
/*$(function(){
    for (var i = 0; i < 10; i ++) {
        (function(i){
            testAsync(i).then(function(value) {
                console.log("callback:" +　value);
                console.log(i);
            });
        })(i);
    }
    console.log("lalala");
});

function testAsync(i) {
    var d = $.Deferred();
    setTimeout(function(){
        console.log("Process:" + i);
        d.resolve(i);
    }, 0);
    return d.promise();
}*/

/*var map1 = { a: 10 };
var map2 = Object.assign({}, map1);
map2.a = 20;
console.log(map1.a);*/

/*
function foo() {
    setTimeout(() => {
        console.log(arguments)
    }, 100)
}

//foo(1,2,3,4,5)

var b = Array.prototype.concat.apply([], [[1,2,3],[4,5,6]])
console.log(b)*/

function foo() {
    return () => {
        return () => {
            return () => {
                console.log(this.id);
            }
        }
    }
}

/*
foo.call({id: 42})()()();*/

var a = new Number('0xA1');

console.log('0xA1'.valueOf());
