/**
 * Created by Liukeyi on 2016/6/6.
 */
var CaffeineBeverage = function() {};
CaffeineBeverage.prototype.prepareRecipe =  function() {
    this.boilWater();
    this.brew();
    this.pourOnCup();
    if (this.customerWantsCondiments()) {
        this.addCondiments();
    }
};
CaffeineBeverage.prototype.boilWater = function() {
    console.log("Boil Water!");
};
CaffeineBeverage.prototype.pourOnCup = function() {
    console.log('Pour into Cup!');
};
CaffeineBeverage.prototype.brew = function() {
    throw new Error('This Method must be overwritten!');
};
CaffeineBeverage.prototype.addCondiments = function() {
    throw  new Error('This Method must be overwritten');
};
CaffeineBeverage.prototype.customerWantsCondiments = function() {
    return true;
};

var Coffee = function() {
    CaffeineBeverage.apply(this);
};
Coffee.prototype = new CaffeineBeverage();
Coffee.prototype.brew = function() {
    console.log('Add Coffee to Coffee Machine!')
};
Coffee.prototype.addCondiments = function() {
    console.log('Add sugar and milk!');
};
Coffee.prototype.customerWantsCondiments = function() {
    return false;
};

var coffee = new Coffee();
coffee.prepareRecipe();
