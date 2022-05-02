const {ProjectOwner} = require('../../db/models');

module.exports = {
    // Get all project owner
    getAll: async (req,res,next) => {
        try {
            const result = await ProjectOwner.findAll({
                attributes: ["id","name","description"]
            })
            res.status(200).json({
                message: "get all success",
                data: result
            })
        } catch (error) {
            next(error);
        }
    },

    // Create project owner
    create: async (req,res,next) => {
        try {
            const {name, description} = req.body;
            const result = await ProjectOwner.create({
                name,description
            });
            res.status(201).json({
                message: "create success",
                data: result
            })
        } catch (error) {
            next(error);
        }
    },

    // Update project owner
    update: async (req,res,next) => {
        try {
            const {id} = req.params;
            const {name,description} = req.body;

            await ProjectOwner.update({
                name, description
            }, {where: {id:id}});

            res.status(200).json({
                message: "update success",
                data: await ProjectOwner.findOne({where: {id:id}})
            })
        } catch (error) {
            next(error);
        }
    },

    // Delete project owner
    destroy: async (req,res,next) => {
        try {
            const {id} = req.params;
            const deletedData = await ProjectOwner.findOne({where: {id:id}});

            await ProjectOwner.destroy({
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