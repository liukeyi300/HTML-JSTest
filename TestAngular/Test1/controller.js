/**
 * Created by Liukeyi on 2016/5/31.
 */
var app = angular.module("test1", []);
app.controller("PhoneListCtrl", function($scope) {
    $scope.phones = [
        { name : "liukeyi", snippet : "asdf"},
        { name : "liukeyi1", snippet : "asdf2"}
    ];
});