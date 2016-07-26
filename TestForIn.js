/**
 * Created by Liukeyi on 2016/5/24.
 */
var man = {
    hands : 2,
    legs : 3,
    heads : 1
};

if (typeof Object.prototype.clone === 'undefined') {
    Object.prototype.clone = function() {};
}

for (var i in man) {
    if (man.hasOwnProperty(i)) {
        console.log(i, ":", man[i]);
    }
}