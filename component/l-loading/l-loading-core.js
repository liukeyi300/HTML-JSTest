/**
 * Created by Liukeyi on 2016/7/23.
 */
var LLoading = (function($) {
    "use strict";

    //all types of loading-component
    var loadingTypes = [];

    //no jquery
    if (typeof $ === 'undefined') {
        console.log('need jquery!');
        return;
    }

    function createMask(container) {
        let divMask = $('<div class="l-loading-mask"></div>');
        divMask.appendTo(container);
        return divMask;
    }

    // Add some method to jquery object
    /**
     * Create a loading mask upon a jquery object
     * @param option
     * @returns {*|jQuery|HTMLElement}
     */
    $.fn.loading = function(option) {
        let container = $(this);
        if (container.find('.l-loading-mask').length > 0) {
            return;
        }
        option = option || {};
        option.type = option.type || '';

        let type = null;

        for (let i = 0, length = loadingTypes.length; i < length; i ++) {
            if (loadingTypes[i].name === option.type) {
                type = loadingTypes[i];
                break;
            }
        }

        if (type === null) {
            type = loadingTypes[0];
        }

        let divMask = createMask(container);

        type.createLoading(divMask, option);

        return container;
    };

    /**
     * Remove the loading mask
     * @returns {*|jQuery|HTMLElement}
     */
    $.fn.removeLoading = function() {
        var container = $(this);
        if (container.find('.l-loading-mask').length > 0) {
            container.find('.l-loading-mask').remove();
        }

        return container;
    };

    //Return some method to this module, LLoading
    return {
        /**
         * extend new type of loading-component
         * the param, newType, is needed 2 attributes
         * 'name', string, for calling a method named 'createLoading'
         * 'createLoading', function, which is for creating the loading-component
         * @param newType
         * @return {Object}
         *          -boolean importResult
         *          -string  message
         */
        importNewType: function(newType) {
            let re = { importResult: false, message: ""};
            newType = newType || {};
            if (typeof newType.name !== 'undefined' && typeof newType.createLoading === 'function') {
                let exist = false;
                for (let i = 0, length = loadingTypes.length; i < length; i ++) {
                    if (loadingTypes[i].name === newType.name) {
                        re.message = 'This type name has already been used! Please change another name!';
                        exist = true;
                        break;
                    }
                }
                if (!exist) {
                    loadingTypes.push(newType);
                    re.importResult = true;
                    re.message = 'success';
                }
            } else {
                if (typeof newType.name === 'undefined') {
                    re.message = 'Type name cannot be null! ';
                }

                if (typeof newType.createLoading !== 'functon') {
                    re.message += 'The method, "createLoading", should be a function!';
                }
            }
            return re;
        }
    };

})($ || jQuery);