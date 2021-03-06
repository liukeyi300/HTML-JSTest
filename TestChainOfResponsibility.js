/**
 * Created by Liukeyi on 2016/6/6.
 */
var NO_TOPIC = -1;
var Topic;

function Handler(s, t) {
    this.successor = s || null;
    this.topic = t || 0;
}

Handler.prototype = {
    handle: function() {
        if (this.successor) {
            this.successor.handle();
        }
    },
    has: function() {
        return this.topic !== NO_TOPIC;
    }
};

var app = new Handler({
    handle: function() {
        console.log('app handle');
    }
}, 3);

var dialog = new Handler(app, 1);

var button = new Handler(dialog, 2);