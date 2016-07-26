/**
 * Created by Liukeyi on 2016/6/6.
 */
var A = (function(){
    return {
        test: function() {
            console.log('A.test');
        }
    };
});

var a = new A();
a.test();
var b = new A();
a.test = function() {
    console.log("Test");
};
b.test();
a.test();
A().test();