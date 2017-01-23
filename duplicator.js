/**
 * Created by Liukeyi on 2017/1/23.
 */

Array.prototype.duplicator = function() {
    if (this.length <= 0) {
        return [];
    }

    return this.concat(this);
};

var c = [].duplicator();
console.log(c);

function add(n) {
    var fn = function(m) {
        return add(n + m);
    }

    fn.valueOf = function() {
        return n;
    }

    fn.toString = function() {
        return '' + n;
    }

    return fn;
}

console.log(add(1)(3)(4)(5));
