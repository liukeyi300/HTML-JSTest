/**
 * Created by Liukeyi on 2016/6/1.
 */
function A(name, age) {
    this.name = name;
    this.age = age;

    this.returnF = function() {
        console.log("Name: " + this.name + " Age: " + this.age);
    };
}

var b = new A('Test', 19);
b.returnF();

function C() {}
var c = new C();
console.log(c.constructor);
console.log(c.constructor === C);