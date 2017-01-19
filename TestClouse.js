/**
 * Created by Liukeyi on 2017/1/4.
 */
function foo(){
    num1 = 20;
    num2 = 30;

    return function() {
        console.log(this.num1 + this.num2);
    }
}

foo()();