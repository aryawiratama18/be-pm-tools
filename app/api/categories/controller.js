const {Category, Project} = require('../../db/models');

module.exports = {
    // Get all categories
    getAll: async (req,res, next) => {
        try {
            const result = await Category.findAll({
                attributes: ["id","name","description"],
                include : [{
                    model : Project,
                    attributes : ["id","name"]
                }]
            })
            res.status(200).json({
                message: "get all success",
                data: result
            })
        } catch (error) {
            next(error);
        }
    },

    // Create category
    create: async (req,res,next) => {
        try {
            const {name,description} = req.body;
            const result = await Category.create({
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

    // Update category
    update: async (req,res,next) => {
        try {
            const {id} = req.params;
            const {name,description} = req.body;
            
            await Category.update({
                name, description
            }, {where: {id: id}});
            res.status(200).json({
                message: "update success",
                data: await Category.findOne({where: {id: id}})
            })
        } catch (error) {
            next(error);
        }
    },

    // Delete category
    destroy: async (req,res, next) => {
        try {
            const {id} = req.params;
            const deletedData = await Category.findOne({where: {id:id}});

            await Category.destroy({
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
