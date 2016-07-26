/**
 * Created by Liukeyi on 2016/5/30.
 */
function foo() {
    console.log(this);
}

foo();

var bar = {
    baz : foo
};

bar.baz();