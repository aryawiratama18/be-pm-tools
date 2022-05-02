const {body, param, validationResult} =  require("express-validator");
const {Member} = require('../../db/models');

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
            const isExist = await Member.findOne({where:{id: value}});

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
        body("firstName").notEmpty().withMessage("firstName is required"),
        body("role").notEmpty().withMessage("role is required"),

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
        .withMessage("param id is required")
        .bail()
        .isNumeric()
        .withMessage("id must be an integer")
        .bail()
        .custom(async(value, {req}) => {
            const isExist = await Member.findOne({where:{id: value}});

            if(isExist == null) {
                return Promise.reject();
            }
        })
        .withMessage("param id not found"),

        body("firstName").notEmpty().withMessage("firstName is required"),
        body("role").notEmpty().withMessage("role is required"),

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