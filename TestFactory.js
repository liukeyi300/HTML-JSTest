/**
 * Created by Liukeyi on 2016/6/3.
 */
var productManager = {};

productManager.createProductA = function() {
    console.log("create product A");
};

productManager.createProductB = function() {
    console.log("create product B");
};

productManager.factory = function(typeType) {
    return new productManager[typeType];
};

productManager.factory("createProductB");