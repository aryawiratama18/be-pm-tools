const {body, param, validationResult} =  require("express-validator");
const {Project} = require('../../db/models');

module.exports ={
    // Validasi get by id
    validateOne: [
        param("id")
        .notEmpty()
        .withMessage("param id is required")
        .bail()
        .isNumeric()
        .withMessage("id must be an integer")
        .bail()
        .custom(async(value, {req}) => {
            const isExist = await Project.findOne({where:{id: value}});

            if(isExist == null) {
                return Promise.reject();
            }
        })
        .withMessage("param id not found"),

        (req,res,next) => {
            const err = validationResult(req);
            if (!err.isEmpty()) {
                return res.status(422).json({
                    message: "error",
                    error: err.array()
                })
            }
            next()
        }
    ]
}