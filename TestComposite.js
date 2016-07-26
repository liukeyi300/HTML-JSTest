/**
 * Created by Liukeyi on 2016/6/6.
 */
var MenuComponent = function() {};
MenuComponent.prototype.getName = function() {
    throw new Error('This method must be override!');
};
MenuComponent.prototype.getDescription = function() {
    throw new Error('This method must be override!');
};
MenuComponent.prototype.getPrice = function() {
    throw new Error('This method must be override!');
};
MenuComponent.prototype.isVegetarian = function() {
    throw new Error('This method must be override!');
};
MenuComponent.prototype.print = function() {
    throw new Error('This method must be override!');
};
MenuComponent.prototype.add = function() {
    throw new Error('This method must be override!');
};
MenuComponent.prototype.remove = function() {
    throw new Error('This method must be override!');
};
MenuComponent.prototype.getChild = function() {
    throw new Error('This method must be overwritten!');
};

var MenuItem = function(sName, sDescription, bVegetarian, nPrice) {
    MenuComponent.apply(this);
    this.sName = sName;
    this.sDecription = sDescription;
    this.bVegetarian = bVegetarian;
    this.nPrice = nPrice;
};
MenuItem.prototype = new MenuComponent();
MenuItem.prototype.getName = function() {
    return this.sName;
};
MenuItem.prototype.getDescription = function(){
    return this.sDecription;
};
MenuItem.prototype.getPrice = function() {
    return this.nPrice;
};
MenuItem.prototype.isVegetarian = function() {
    return this.bVegetarian;
};
MenuItem.prototype.print = function() {
    console.log(this.getName() + ": " + this.getDescription() + ", " + this.getPrice() + "euros");
};

var Menu = function(sName, sDescription) {
    MenuComponent.apply(this);
    this.aMenuComponents = [];
    this.sName = sName;
    this.sDescription = sDescription;
    this.createIterator = function() {
        throw new Error('This method must be overwritten');
    };
};
Menu.prototype = new MenuComponent();
Menu.prototype.add = function(oMenuComponent) {
    this.aMenuComponents.push(oMenuComponent);
};
Menu.prototype.remove = function(oMenuComponent) {
    var aMenuItem = [],
        nMenuItem = 0,
        nLenMenuItems = this.aMenuComponents.length,
        oItem = null;

    for (; nMenuItem < nLenMenuItems; ) {
        oItem = this.aMenuComponents[nMenuItem];
        if (oItem !== oMenuComponent) {
            aMenuItem.push(oItem);
        }
        nMenuItem += 1;
    }
    this.aMenuComponents = aMenuItem;
};
Menu.prototype.getChild = function(nIndex) {
    return this.aMenuComponents[nIndex];
};
Menu.prototype.getName = function() {
    return this.sName;
};
Menu.prototype.getDescription = function() {
    return this.sDescription;
};
Menu.prototype.print = function() {
    console.log(this.getName() + ": " + this.getDescription());
    console.log("--------------------------------------------");

    var nMenuComponent = 0,
        nLenMenuComponents = this.aMenuComponents.length,
        oMenuComponent = null;

    for (; nMenuComponent < nLenMenuComponents;) {
        oMenuComponent = this.aMenuComponents[nMenuComponent];
        oMenuComponent.print();
        nMenuComponent += 1;
    }
};

var DinnerMenu = function() {
    Menu.apply(this);
};
DinnerMenu.prototype = new Menu();

var Mattress = function(aMenu) {
    this.aMenu = aMenu;
};
Mattress.prototype.print = function() {
    this.aMenu.print();
};

var oDinnerMenu = new Menu('Dinner Menu', 'Dinner');
var oAllMenus = new Menu('ALL MENUS', 'All menus combine');
oAllMenus.add(oDinnerMenu);
oDinnerMenu.add(new MenuItem('Pasta', 'Test ABCD', true, 3.99));
var oMattress = new Mattress(oAllMenus);
console.log('----------------------------------------------');
oMattress.print();
console.log('----------------------------------------------');