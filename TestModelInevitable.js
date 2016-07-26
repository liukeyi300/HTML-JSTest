/**
 * Created by Liukeyi on 2016/6/6.
 */
function inherit(C, P) {
    C.prototype = new P();
}

function Parent(name) {
    this.name = name || 'Adam';
}

Parent.prototype.say = function() {
    return this.name;
};

/**
 * Child 构造函数传参无效
 */

/*function Child(name) {

}
inherit(Child, Parent);

var kid = new Child();
console.log(kid.say());

var kiddo = new Child();
kiddo.name = "Patrick";
console.log(kiddo.say());

var s = new Child('LALALA');
console.log(s.say());*/

/**
 * Parent方法say没有继承
 */

/*function Child(name) {
    Parent.apply(this, name);
}

var kid = new Child("Test");
console.log(kid.name);
console.log(kid.say());
*/

/**
 * Parent构造函数执行了两遍，效率很低
 */

/*function Child(name) {
    Parent.apply(this, arguments);
}
Child.prototype = new Parent();

var kid = new Child('Patrick');
console.log(kid.name);
console.log(kid.say());*/

