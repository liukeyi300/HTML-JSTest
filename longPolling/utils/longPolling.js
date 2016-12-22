/**
 * Created by Liukeyi on 2016/10/20.
 */
define(function() {
    function start(type, url, successCallback) {
        var xmlHttp = null;

        if (window.XMLHttpRequest) {
            xmlHttp = new XMLHttpRequest();
        } else if (window.ActiveXObject) {
            xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
        }
        xmlHttp.withCredentials = true;

        xmlHttp.onreadystatechange = function() {
            if (xmlHttp.readyState === 4) {
                if (xmlHttp.status === 200) {
                    successCallback(xmlHttp.responseText);

                    setTimeout(function() {
                        xmlHttp.open(type, url, true);
                        xmlHttp.send(null);
                    }, 2000);
                }
            }
        };

        xmlHttp.open(type, url, true);
        xmlHttp.send(null);
    }

    return {
        start: start
    };
});