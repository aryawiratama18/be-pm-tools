const {Member} = require('../../db/models');

module.exports = {
    // Get all member
    getAll: async (req,res, next) => {
        try {
            const result = await Member.findAll({
                attributes: ["id","firstName","lastName","role"]
            })
            res.status(200).json({
                message: "get all success",
                data: result
            })
        } catch (error) {
            next(error);
        }
    },

    // Create member
    create: async (req,res,next) => {
        try {
            const {firstName, lastName, role} = req.body;
            const result = await Member.create({
                firstName,lastName,role
            });
            res.status(201).json({
                message: "create success",
                data: result
            })
        } catch (error) {
            next(error);
        }
    },

    // Update member
    update: async (req,res,next) => {
        try {
            const {id} = req.params;
            const {firstName,lastName,role} = req.body;
            
            await Member.update({
                firstName, lastName, role
            }, {where: {id: id}});
            res.status(200).json({
                message: "update success",
                data: await Member.findOne({where: {id: id}})
            })
        } catch (error) {
            next(error);
        }
    },

    // Delete member
    destroy: async (req,res, next) => {
        try {
            const {id} = req.params;
            const deletedData = await Member.findOne({where: {id:id}});

            await Member.destroy({
                where: {id:id}
            });
            res.status(200).json({
                message: "delete success",
                data: deletedData
            });
        } catch (error) {
            next(error);
        }
    }
}