/**
 * Created by Liukeyi on 2016/6/7.
 */
function Sandbox() {
    var args = Array.prototype.slice.call(arguments),
        callback = args.pop(),
        modules = (args[0] && typeof args[0] === "string") ? args : args[0],
        i;

    if (!(this instanceof Sandbox)) {
        return new Sandbox(modules, callback);
    }

    this.a = 1;
    this.b = 2;

    if (!modules || modules === "*") {
        modules = [];
        for (i in Sandbox.modules) {
            if (Sandbox.hasOwnProperty(i)) {
                modules.push(i);
            }
        }
    }

    for (i = 0; i < modules.length; i +=1) {
        Sandbox.modules[modules[i]](this);
    }

    callback(this);
}

Sandbox.prototype = {
    name: 'My App',
    version: '1.0',
    getName: function() {
        return this.name;
    }
};

Sandbox.modules = {};

Sandbox.modules.dom = function(box) {
    box.getElement = function() {
        console.log('dom.getElement');
    };

    box.getStyle = function() {
        console.log('dom.getStyle');
    };

    box.foo = "bar";
};

Sandbox.modules.event = function(box) {
    box.attachEvent = function() {
        console.log('event.attachEvent');
    };
};

Sandbox(['dom'], function(box) {
    box.getElement();
    box.getStyle();
    console.log('box.foo = ' + box.foo);
    box.attachEvent();
});