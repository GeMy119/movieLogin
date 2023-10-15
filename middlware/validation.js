const { StatusCodes } = require("http-status-codes");
module.exports = (schema) => {
    return (req, res, next) => {
        const validateArr = [];
        const validareResult = schema.body.validate(req.body);
        console.log(validareResult)
        if (validareResult.error) {
            validateArr.push(validareResult.error.details[0].message);
        }
        if (validateArr.length) {
            res.status(StatusCodes.BAD_REQUEST).json({ message: validateArr.join() });
        } else {
            next();
        }
    };
};
