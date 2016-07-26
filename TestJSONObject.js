/**
 * Created by Liukeyi on 2016/5/30.
 */
var json_string = '{"prop" : "val"}';
var jsonObj = JSON.parse(json_string);
console.log(jsonObj.prop);
var s1 = JSON.stringify(jsonObj);
console.log(s1);

