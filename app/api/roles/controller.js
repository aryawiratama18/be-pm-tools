const {Role} = require('../../db/models');

module.exports = {
    // Get all role
    getAll: async (req,res,next) => {
        try {
            const result = await Role.findAll({
                attributes: ["id", "name"]
            })
            res.status(200).json({
                message: "get all success",
                data: result
            })
        } catch (error) {
            next(error);
        }
    },

    // Create role
    create: async (req,res,next) => {
        try {
            const {name} = req.body;
            const result = await Role.create({
                name
            });
            res.status(201).json({
                message: "create success",
                data: result
            })
        } catch (error) {
            next(error);
        }
    },

    // Update role
    update: async (req,res,next) => {
        try {
            const {id} = req.params;
            const {name} = req.body;

            await Role.update({
                name
            }, {where: {id:id}});

            res.status(200).json({
                message: "update success",
                data: await Role.findOne({where: {id:id}})
            })
        } catch (error) {
            next(error);
        }
    },

    // Delete role
    destroy: async (req,res,next) => {
        try {
            const {id} = req.params;
            const deletedData = await Role.findOne({where: {id:id}});

            await Role.destroy({
                where: {id:id}
            });

            res.status(200).json({
                message: "delete success",
                data: deletedData
            })
        } catch (error) {
            next(error);
        }
    }
}