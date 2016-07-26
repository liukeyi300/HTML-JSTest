/**
 * Created by Liukeyi on 2016/6/6.
 */
var Duck = function() {};
Duck.prototype.fly = function() {
    throw "Not Implement!";
};
Duck.prototype.quack = function() {
    throw "Not Implement!";
};

var Turkey = function() {};
Turkey.prototype.fly = function() {
    throw "Not Implement!";
};
Turkey.prototype.gobble = function() {
    throw "Not Implement!";
};

var MallardDuck = function() {
    Duck.apply(this);
};
MallardDuck.prototype = new Duck();
MallardDuck.prototype.fly = function() {
    console.log("I`ll fly higher!");
};
MallardDuck.prototype.quack = function() {
    console.log("Ga Ga Ga!");
};

var WildTurkey = function() {
    Turkey.apply(this);
};
WildTurkey.prototype = new Turkey();
WildTurkey.prototype.fly = function() {
    console.log("I`ll fly to death");
};
WildTurkey.prototype.gobble = function() {
    console.log("La La La!");
};

var TurkeyAdapter = function(oTurkey) {
    Turkey.apply(this);
    this.oTurkey = oTurkey;
};
TurkeyAdapter.prototype = new Turkey();
TurkeyAdapter.prototype.quack = function() {
    this.oTurkey.gobble();
};

TurkeyAdapter.prototype.fly = function() {
    var nFly = 0;
    var nLenFly = 5;
    for (; nFly < nLenFly;) {
        this.oTurkey.fly();
        nFly += 1;
    }
};

TurkeyAdapter.prototype.walk = function() {
    var nWalk = 0;
    var nLenWalk = 5;
    for (; nWalk < nLenWalk; ) {
        this.oTurkey.fly();
    }
};

var oMallardDuck = new MallardDuck();
var oWildTurkey = new WildTurkey();
var oTurkeyAdapter = new TurkeyAdapter(oWildTurkey);

oMallardDuck.fly();
oMallardDuck.quack();

oWildTurkey.fly();
oWildTurkey.gobble();

oTurkeyAdapter.fly();
oTurkeyAdapter.quack();