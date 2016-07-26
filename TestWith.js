/**
 * Created by Liukeyi on 2016/5/30.
 */
Object.prototype.x = 100;
var x = 10;
with({z:20}) {
    console.log("x" + z.x + " z" + z);
}