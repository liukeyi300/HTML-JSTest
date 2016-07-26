/**
 * Created by Liukeyi on 2016/6/3.
 */
var pubsub = {};
(function(p) {
    var topics = {},
        subUid = 1;

    p.publish = function(topic, args) {
        if (!topics[topic]) {
            return false;
        }

        setTimeout(function() {
            var subscribes = topics[topic],
                len = subscribes ? subscribes.length : 0;
            while(len --) {
                subscribes[len].func(topic, args);
            }
        }, 0);
        return true;
    }

    p.subscribe = function(topic, func) {
        if (!topics[topic]) {
            topics[topic] = [];
        }

        var token = (++subUid).toString();
        topics[topic].push({
            token: token,
            func: func
        });
    }

    p.unSubscribe = function(token) {
        for (var m in topics) {
            if (topics[m]) {
                for (var i = 0, j = topics[m].length; i < j; i ++) {
                    if (topics[m][i].token === token) {
                        topics[m].splice(i, 1);
                        return token;
                    }
                }
            }
        }
        return false;
    }
})(pubsub);

var testSubscription = pubsub.subscribe('ex', function(topic, data) {
    console.log(topic + ":" + data);
});

function Observer() {
    this.fns = [];
}

Observer.prototype = {
    subscribe: function(fn) {
        this.fns.push(fn);
    },
    unSubscribe: function(fn) {
        this.fns = this.fns.filter(function(el) {
            if (el !== fn) {
                return el;
            }
        });
    },
    update: function(o, thisObj) {
        var scope = thisObj || global;
        this.fns.forEach(function(el) {
            el.call(scope, o);
        });
    }
};

var o = new Observer();
var f1 = function(data) {
    console.log("Robbin"+ data + ", do your jobs hurry up");
};

o.subscribe(f1);
o.update("lalala");