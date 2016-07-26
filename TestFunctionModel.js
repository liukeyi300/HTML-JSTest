/**
 * Created by Liukeyi on 2016/6/7.
 */
~function(num) {
    console.log(num);
}(1235);

({
    maxWidth: 200,
    minWidth: 300,

    getMinAndMax:function() {
        return 'Max: ' + this.maxWidth + ' Min: ' + this.minWidth;
    },

    init: function() {
        console.log(this.getMinAndMax());
    }
}).init();

var utils = {
    addListener: null,
    removeListener: null
};

/*if (typeof window.addEventListener === 'function') {
    utils.addListener = function(el, type, fn) {
        el.addEventListener(type, fn, false);
    };
} else if (typeof document.attachEvent !== 'undefined') {
    utils.addListener = function(el, type, fn) {
        el.attachEvent('on' + type, fn);
    };
    utils.removeListener = function(el, type, fn) {
        el.detachEvent('on' + type, fn);
    };
} else {
    utils.addListener = function(el, type, fn) {
        el['on' + type] = fn;
    };

    utils.removeListener = function(el, type, fn) {
        el['on' + type] = null;
    };
}*/

var scareMe = function() {
    console.log('Boo');

    scareMe = function() {
        console.log('Double Boo');
    };
};

scareMe.property = "properly";
var prank = scareMe;
var spooky = {
    boo : scareMe
};

prank();
prank();
console.log(prank.property);
spooky.boo();
spooky.boo();
console.log(typeof spooky.boo.property);

scareMe();
scareMe();
console.log(typeof scareMe.property);