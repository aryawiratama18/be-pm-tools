const {Project, ProjectTrack} = require('../../db/models');

module.exports = {

    // Get all project track
    getAll: async (req,res,next) => {
        try {
            const result = await ProjectTrack.findAll({
                include: [{
                    model: Project,
                    attributes: ["name"]
                }]
            });
            console.log(result);
            res.status(200).json({
                message: "get all success",
                data: result
            })
        } catch (error) {
            next(error);
        }
    },

    // Get one project tracking by project id
    getOne: async (req,res,next) => {
        try {
            const {id} = req.params;
            const result = await ProjectTrack.findAll({where: {ProjectId: id}});
            res.status(200).json({
                message: "get one success",
                data: result
            })
        } catch (error) {
            next(error);
        }
    },

    // Create tracking value
    create: async (req,res,next) => {
        try {
            const {month,target,realization,value} = req.body;
            const result = await ProjectTrack.create({
                month,target,realization,value
            });
            res.status(201).json({
                message: "create success",
                data: result
            });
        } catch (error) {
            next(error);
        }
    },

    // Update progress value
    update: async (req,res,next) => {
        try {
            const {id} = req.params;
            const {month,target,realization,value} = req.body;
            const result = await ProjectTrack.update(
                {
                    value: value
                }
                ,
                {
                    where: {ProjectId: id, month: month, target: target, realization: realization}
                }
            );
            res.status(200).json({
                message: "update success",
                data: result
            });
        } catch (error) {
            next(error);
        }
    },

    // Delete progress
    destroy: async (req,res,next) => {
        try {
            const {id} = req.params;
            const deletedData = await ProjectTrack.findAll({where: {ProjectId: id}});

            await ProjectTrack.destroy({
                where: {ProjectId: id}
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