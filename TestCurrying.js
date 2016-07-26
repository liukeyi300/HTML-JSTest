/**
 * Created by Liukeyi on 2016/6/7.
 */
var add = function(x, y) {
    var oldX = x, oldY = y;
    if (typeof oldY === 'undefined') {
        return function(newY) {
            return oldX + newY;
        }
    }
    return x + y;
};

function curry(func, minArgs) {
    if (typeof minArgs === 'undefined') {
        minArgs = 1;
    }

    function funcWithArgsFrozen(frozenArgs) {
        return function() {
            var args = Array.prototype.slice.call(arguments);
            var newArgs = frozenArgs.concat(args);
            if (newArgs.length >= minArgs) {
                return func.apply(this, newArgs);
            } else {
                return funcWithArgsFrozen(newArgs);
            }
        };
    }

    return funcWithArgsFrozen([]);
}