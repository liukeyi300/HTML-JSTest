/**
 * Created by Liukeyi on 2017/2/25.
 */
function* generator() {
    yield 'hello';
    yield 'world';
    return 'ending';
}

var a = generator()

console.log(a.next().value)
console.log(a.next().value)
console.log(a.next().value)
console.log(a.next().value)
console.log(a.next().value)