/**
 * Created by liukeyi on 2017/2/8.
 */
function a() {
    console.log('sdf');
}
var fNOP = function() {};
console.log(a instanceof fNOP);

if (!Function.prototype.bind) {
    Function.prototype.bind = function(oThis) {
        if (typeof this !== 'function') {
            console.log('err');
        }

        var aArgs = Array.prototype.slice.call(arguments, 1),
            fToBind = this,
            fNOP = function() {},
            fBound = function() {
                return fToBind.call(this instanceof fNOP
                                        ? this
                                        : oThis || this,
                                    aArgs.concat(Array.prototype.slice.call(arguments)))
            };

        fNOP.prototype = this.prototype;
        fBound.prototype = new fNOP();
        return fBound;
    }
}

function qSort(arr) {
    var left = [],
        right = [];

    if (!(arr instanceof Array)) {
        throw "";
    }

    if (arr.length === 1) {
        return arr;
    }

    for (var i = 1, length = arr.length; i < length; i ++) {
        if (arr[i] <= arr[0]) {
            left.push(arr[i]);
        } else {
            right.push(arr[i])
        }
    }

    return qSort(left).concat(arr[0], qSort(right));
}