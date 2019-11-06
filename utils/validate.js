const Joi = require('joi');

class ValidatorUtil {
    validate(values, schema) {
        return Joi.validate(values, schema);
    }
}

exports = module.exports = new ValidatorUtil();