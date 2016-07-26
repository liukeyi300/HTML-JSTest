/**
 * Created by Liukeyi on 2016/4/20.
 */
$(function(){
    for (var i = 0; i < 10; i ++) {
        (function(i){
            testAsync(i).then(function(value) {
                console.log("callback:" +　value);
                console.log(i);
            });
        })(i);
    }
    console.log("lalala");
});

function testAsync(i) {
    var d = $.Deferred();
    setTimeout(function(){
        console.log("Process:" + i);
        d.resolve(i);
    }, 0);
    return d.promise();
}