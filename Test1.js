/**
 * Created by Liukeyi on 2016/5/28.
 */
(function(){

}());

(function($,YAHOO){

}(JQuery, Yahoo));

/*var blogModule = (function($,YAHOO){
    var my = {}, privateName = "liob_test";

    function privateTopic(data){

    }

    my.name = privateName;
    my.addTopic = function(data) {
        privateTopic(data);
    }

    return my;
}(JQuery, Yahoo));*/

var blogModule = (function(my){
    my.addTest = function(data) {

    };

    return my;
}(blogModule));

var blogModule1 = (function(my) {
    var _private = my._private = my._private || {},

        _seal = my._seal = my._seal || function() {
                delete _private;
                delete _seal;
                delete _unseal;
            },

        _unseal = my._unseal = my.unseal || function() {
                my._private = _private;
                my._seal = _seal;
                my._unseal = _unseal;
            };

    return my;
} (blogModule1));

function Event(name) {
    var handlers = [];

    this.getName = function() {
        return name;
    };

    this.addHandler = function(handler) {
        handlers.push(handler);
    };

    this.removeHandler = function(handler) {
        for (var i = 0; i < handlers.length; i += 1) {
            if (handlers[i] === handler) {
                handlers.slice(i, 1);
                break;
            }
        }
    };

    this.fire = function(eventArgs) {
        handlers.forEach(function(h) {
            h(eventArgs);
        });
    };
}

function EventAggregator() {
    var events = [];

    function getEvent(eventName) {
        return $.grep(events, function(event){
            return event.getName() === eventName;
        })[0];
    }

    this.publish = function(eventName, eventArgs) {
        var event = getEvent(eventName);

        if (!event) {
            event = new Event(eventName);
            events.push(event);
        }

        event.fire(eventArgs);
    };

    this.subscribe = function(eventName, handler) {
        var event = getEvent(eventName);

        if (!event) {
            event = new Event(eventName);
            events.push(event);
        }

        event.addHandler(handler);
    };
}

function Product(id, description) {
    this.getId = function() {
        return id;
    };

    this.getDescription = function() {
        return description;
    };
}

function Cart(eventAggregator) {
    var items = [];

    this.addItem = function(item) {
        items.push(item);
        eventAggregator.publish('AddItem', item);
    };
}

function CartController(cart, eventAggregator) {
    eventAggregator.subscribe('AddItem', function(eventArgs) {
        cart.addItem(eventArgs.product);
    });
}

function ProductRepository() {
    var products = [new Product(1, 'Test'), new Product(2, 'Auh'), new Product(3, 'Test2')];

    this.getProducts = function() {
        return products;
    };
}

function ProductController(eventAggregator, productRepository) {

}

function QuestionCreator(spec, my) {
    var that = {};

    my = my || {};
    my.lable = spec.label;

    my.renderInput = function() {
        throw "Not Implement";
    };

    that.render = function(target) {
        var questionWrapper = document.createElement('div');
        questionWrapper.className = 'question';

        var questionLabel = document.createElement('div');
        questionLabel.className = 'question-label';

        var label = document.createTextNode(spec.label);
        questionLabel.appendChild(label);

        var answer = my.renderInput();

        questionWrapper.appendChild(questionLabel);
        questionWrapper.appendChild(answer);

        return questionWrapper;
    };

    return that;
}

