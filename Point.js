function Point(x, y) {
    this.x = x || 0;
    this.y = y || 0;
}

Point.prototype.getLength = function() {
    //return Math.sqrt(this.x * this.x + this.y * this.y);
    return arguments.callee.caller;
};

function Point3D(x, y, z) {
    Point.call(this, x, y);
    this.z = z || 0;
}

Point3D.prototype = new Point();

var p1 = new Point3D(10, 20, 30);

function PP2() {};
console.log(p1.getLength());
console.log(p1 instanceof Point);