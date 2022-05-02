const {Project} = require('../../db/models');

module.exports = {
    // Get all project
    getAll: async (req,res,next) => {
        try {
            const result = await Project.findAll({
                attributes: ["id","name","description"],
            });
            res.status(200).json({
                message: "get all success",
                data: result
            })
        } catch (error) {
            next(error);
        }
    },

    getOne: async(req,res,next) => {
        try {
            const {id} = req.params;
            const result = await Project.findOne({
                where: {id: id}
            });
            res.status(200).json({
                message: "get one success",
                data: result
            })
        } catch (error) {
            next(error);
        }
    }
}