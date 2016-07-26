/**
 * Add a loading-component type : Ring
 * Created by Liukeyi on 2016/7/25.
 */
(function(core) {
    "use strict";

    let name = 'ring';
    let createLoading = function(container) {
        let divLoading = $('<div class="l-loading l-circle"></div>');
        divLoading.appendTo(container);
        createAllCircle(divLoading);
    };

    let createAllCircle = function(container) {
        var firstRing = $('<div class="l-circle first-ring"></div>'),
            secondRing = $('<div class="l-circle second-ring"></div>'),
            thirdRing = $('<div class="l-circle third-ring"></div>'),
            forthRing = $('<div class="l-circle forth-ring"></div>'),
            shineRing = $('<div class="l-circle shine-ring"></div>'),
            innerRing = $('<div class="l-circle inner-ring"></div>');

        firstRing.appendTo(container);
        secondRing.appendTo(container);
        thirdRing.appendTo(container);
        forthRing.appendTo(container);
        shineRing.appendTo(container);
        innerRing.appendTo(container);
    };

    //import the ring type
    let re = core.importNewType({
        name: name,
        createLoading: createLoading
    });

    console.log(re.message);

    if (!re.importResult) {
        console.log(re.message);
    }
})(LLoading);