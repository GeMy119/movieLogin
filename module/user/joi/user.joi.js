const Joi = require('joi')


module.exports = {
    regiserUserSchema: {
        body: Joi.object().required().keys({
            userName: Joi.string().required(),
            email: Joi.string().email().required(),
            age: Joi.number().integer().positive().required(),
            phone: Joi.number().required(),
            password: Joi.string().min(6).required(),
            watchList: Joi.array().items(Joi.object())
        })
    },
    loginUserSchema: {
        body: Joi.object().required().keys({
            email: Joi.string().email().required(),
            password: Joi.string().min(6).required(),
        })
    }
}