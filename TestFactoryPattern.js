/**
 * Created by Liukeyi on 2016/5/24.
 */
var Car = (function() {
    var Car = function(model, year, month) {
        this.model = model;
        this.year = year;
        this.month = month;
    };

    return function(model, year, month) {
        return new Car(model, year, month);
    };
})();

var page = page || {};
page.dom = page.dom || {};

page.dom.Text = function() {
    this.insert = function(where) {
        var txt = document.createTextNode(this.url);
        where.appendChild(txt);
    };
};

page.dom.Link = function() {
    this.insert = function(where) {
        var link = document.createElement('a');
        link.href = this.url;
        link.appendChild(document.createTextNode(this.url));
        where.appendChild(link);
    };
};

page.dom.Image = function() {
    this.insert = function(where) {
        var im = document.createElement('img');
        im.src = this.url;
        where.appendChild(im);
    };
};

page.dom.factory = function(type) {
    return new page.dom[type];
};

var o = page.dom.factory('Link');
o.url = "http://localhost:4444/Image/test.png";
o.insert(document.body);