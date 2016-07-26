/**
 * Created by Liukeyi on 2016/6/7.
 */
var complexComputation = function() {
    var node = {
        style: {
            display: "haha"
        }
    };
    return node;
};

var findNodes = function(callback) {
    var nodes = [];
    var node = complexComputation();

    if (typeof callback === 'function') {
        callback(node);
    }

    nodes.push(node);
    return nodes;
};

var hide = function(node) {
    node.style.display = 'none';
};

var hideNode = findNodes(hide);
console.log(hideNode[0].style.display);