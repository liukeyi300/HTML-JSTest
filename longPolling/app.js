/**
 * Created by Liukeyi on 2016/10/20.
 */

require.config({
    paths: {
        'longPolling': 'utils/longPolling'
    }
});
require(['longPolling'], function(lp) {
    lp.start(
        'GET',
        'http://192.168.0.100/MES2/Services/GambolLocalService.asmx/Test',
        function(data) {
            console.log(data);
        });
});