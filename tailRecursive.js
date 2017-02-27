/**
 * Created by Liukeyi on 2017/2/6.
 */
function fib(n) {
    return fib2(n - 1, 0, 1);
}

function fib2(n, a1, a2) {
    if (n < 1) {
        return a2;
    }

    return fib2(n - 1, a2, a1 + a2);
}

/*
for (var i = 1; i <= 10; i ++) {
    console.log(fib());
}*/
console.log(fib(100));