const {body, param, validationResult} =  require("express-validator");
const {Project,Progress} = require('../../db/models');

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
            const isExist = await Progress.findOne({where:{ProjectId: value}});

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
    ],

    // Validasi untuk post
    validateCreate: [
        param("id")
        .notEmpty()
        .withMessage("project id is required")
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
        .withMessage("project id not found"),

        body("month")
        .notEmpty()
        .withMessage("month is required")
        .bail()
        .isInt({min: 1, max: 12})
        .withMessage("month must be a number between 1 to 12"),

        body("target")
        .notEmpty()
        .withMessage("target is required")
        .bail()
        .isBoolean()
        .withMessage("target must be boolean"),

        body("realization")
        .notEmpty()
        .withMessage("realization is required")
        .bail()
        .isBoolean()
        .withMessage("realization must be boolean"),

        body("value")
        .notEmpty()
        .withMessage("value is required")
        .bail()
        .isInt({min: 0, max: 100})
        .withMessage("value must be a number and between 0 to 100"),

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
    ],

    // Validasi untuk update
    validateUpdate: [
        param("id")
        .notEmpty()
        .withMessage("project id is required")
        .bail()
        .isNumeric()
        .withMessage("id must be an integer")
        .bail()
        .custom(async(value, {req}) => {
            const isExist = await Progress.findOne({where:{ProjectId: value}});

            if(isExist == null) {
                return Promise.reject();
            }
        })
        .withMessage("project id not found"),

        body("month")
        .notEmpty()
        .withMessage("month is required")
        .bail()
        .isNumeric()
        .withMessage("month must be an integer"),

        body("target")
        .notEmpty()
        .withMessage("target is required")
        .bail()
        .isBoolean()
        .withMessage("target must be boolean"),

        body("realization")
        .notEmpty()
        .withMessage("realization is required")
        .bail()
        .isBoolean()
        .withMessage("realization must be boolean"),

        body("value")
        .notEmpty()
        .withMessage("value is required")
        .bail()
        .isInt({min: 0, max: 100})
        .withMessage("value must be a number and between 0 to 100"),

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