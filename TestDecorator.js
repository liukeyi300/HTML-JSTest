/**
 * Created by Liukeyi on 2016/6/3.
 */
function ConcreteClass() {
    this.performTask = function() {
        this.preTask();
        console.log("do something else");
        this.postTask();
    };
}

function AbstractDecorator(decorated) {
    this.performTask = function() {
        decorated.performTask();
    };
}

function ConcreteDecoratorClass(decorated) {
    this.base = AbstractDecorator;
    this.base(decorated);

    decorated.preTask = function() {
        console.log('pre-calling..');
    };

    decorated.postTask = function() {
        console.log('post-calling');
    };
}

var concrete = new ConcreteClass();
var decorated1 = new ConcreteDecoratorClass(concrete);
var decorated2 = new ConcreteDecoratorClass(decorated1);
//decorated2.performTask();
var tree = {};
tree.decorate = function() {
    console.log('Make sure the tree won\`t fall');
};

tree.getDecorator = function(deco) {
    tree[deco].prototype = this;
    return new tree[deco];
};

tree.RedBalls = function() {
    this.decorate = function() {
        this.RedBalls.prototype.decorate();
        console.log('Put on some red balls');
    };
};

tree.BlueBalls = function() {
    this.decorate = function() {
        this.BlueBalls.prototype.decorate();
        console.log('Add blue balls');
    }
};

tree.Angel = function() {
    this.decorate = function() {
        this.Angel.prototype.decorate();
        console.log('An angel on the top');
    };
};

tree = tree.getDecorator('BlueBalls');

tree = tree.getDecorator('Angel');

tree = tree.getDecorator('RedBalls');

tree.decorate();