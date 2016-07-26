/**
 * Created by Liukeyi on 2016/6/6.
 */
function object(o) {
    function F() {

    }

    F.prototype = o;
    return new F();
}

var parent = {
    name: "Papa"
};
/*
var child = object(parent);
console.log(child.name);*/

function Person() {
    this.name = "Adam";
}

Person.prototype.getName = function() {
    return this.name;
};
/*
var papa = new Person();
var kid = object(papa);
console.log(kid.name);*/

//var child = Object.create(parent);

var child = Object.create(parent, {
    age: {
        value: 2
    }
});
console.log(child.age);