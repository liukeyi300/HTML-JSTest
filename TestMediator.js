/**
 * Created by Liukeyi on 2016/6/6.
 */
var mediator = (function() {
    var subscribe = function(channel, fn) {
        if (!mediator.channels[channel]) {
            mediator.channels[channel] = [];
        }

        mediator.channels[channel].push({context: this, callback: fn});
        return this;
    };

    var publish = function(channel) {
        if (!mediator.channels[channel]) {
            return false;
        }

        var args = Array.prototype.slice.call(arguments, 1);

        for (var i = 0, l = mediator.channels[channel].length; i < l; i ++) {
            var subscription = mediator.channels[channel][i];
            subscription.callback.call(subscription.context, args);
        }
        return this;
    };

    return {
        channels: {},
        publish: publish,
        subscribe: subscribe,
        installTo: function(obj) {
            obj.subscribe = subscribe;
            obj.publish = publish;
        }
    };
})();

(function(mediator) {
    function initialize() {
        mediator.name = "lky";

        mediator.subscribe('nameChange', function(arg) {
            console.log(this.name);
            this.name = arg;
            console.log(this.name);
        });
    }

    function updateName() {
        mediator.publish('nameChange', 'tom');
    }

    initialize();
    updateName();
})(mediator);