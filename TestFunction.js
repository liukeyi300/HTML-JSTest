/**
 * Created by Liukeyi on 2016/5/31.
 */
Object.prototype.x = 10;

/*(function foo(bar) {
    if (bar) {
        return;
    }
    foo(true);
})();*/

(function() {
    console.log(x);
})();

function registerModes(modes) {
    modes.forEach(registerMode, modes);
}

registerModes(['test1', 'test2', 'test3']);

function modes(mode) {
    registerMode(mode);
    return modes;
}

modes('test1')('test2')('test3');

