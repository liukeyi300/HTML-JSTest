/**
 * Created by Liukeyi on 2016/6/3.
 */
var validator = {

    types: {},

    messages: {},

    config: {},

    validate : function(data) {
        var i, msg, type, checker, result_ok;

        this.messages = [];

        for (i in data) {
            if (data.hasOwnProperty(i)) {
                type = this.config[i];

                checker = this.types[type];

                if (!type) {
                    continue;
                }

                if (!checker) {
                    throw {
                        name: "ValidatorError",
                        message: "No handler to validate type " + type
                    }
                }

                result_ok = checker.validate(data[i]);
                if (!result_ok) {
                    msg = "Invalid value for *" + i + "*, " + checker.instructions;
                    this.messages.push(msg);
                }
            }
        }
        return this.hasError();
    },

    hasError: function() {
        return this.messages.length !== 0;
    }

};

validator.types.isNoEmpty = {
    validate: function(value) {
        return value !== "";
    },
    instructions: "传入的值不能为空"
};

var data = {
    first_name: "Tom",
    last_name:""
};

validator.config = {
    first_name: 'isNoEmpty',
    last_name: 'isNoEmpty'
};

validator.validate(data);
if (validator.hasError()) {
    for (var i = 0; i < validator.messages.length; i ++) {
        console.log(validator.messages[i]);
    }
}