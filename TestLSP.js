/**
 * Created by Liukeyi on 2016/5/30.
 */
function Vehicle(my) {
    var my = my || {};
    my.speed = 0;
    my.running = false;

    this.speed = function() {
        return my.speed;
    };

    this.start = function() {
        my.running = true;
    };

    this.stop = function() {
        my.running = false;
    };

    this.accelerate = function() {
        my.speed ++;
    };

    this.decelerate = function() {
        my.speed --;
    };

    this.state = function() {
        if (!my.running) {
            return "Parked";
        } else if (my.running && my.speed) {
            return "Moving";
        } else if (my.running) {
            return "Idle";
        }
    };
}

function FastVehicle(my) {
    var my = my || {};

    var that = new Vehicle(my);
    that.accelerate = function() {
        my.speed += 3;
    };
    that.decelerate = function() {
        my.speed -= 3;
    };
    return that;
}

var rectangle = {
    length: 0,
    width: 0
};

var square = {};
(function(){
    var length = 0, width = 0, height = 0;
    Object.defineProperty(square, "length", {
        get : function() {
            return length;
        },
        set : function(value) {
            length = width = height = value;
        }
    });
    Object.defineProperty(square, "width", {
        get : function() {
            return width;
        },
        set : function(value) {
            length = width = height = value;
        }
    });

    Object.defineProperty(square, "height", {
        get : function() {
            return height;
        },
        set : function(value) {
            length = width = height = value;
        }
    });
})();