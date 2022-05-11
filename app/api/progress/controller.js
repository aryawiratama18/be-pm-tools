const {Project, Progress} = require('../../db/models');

module.exports = {

    // Get all project track
    getAll: async (req,res,next) => {
        try {
            const result = await Progress.findAll({
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
            const result = await Progress.findAll({
                attributes: {exclude: ["id","ProjectId"]},
                where: {ProjectId: id},
                include:
                {
                    model: Project,
                    attributes: ["name"]
                }

            });
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
            const {id} = req.params;
            const {month,target,realization,value} = req.body;
            const result = await Progress.create({
                month:month,
                target:target,
                realization:realization,
                value:value,
                ProjectId:id
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
            const isExist = await Progress.findAll({where: {ProjectId: id, month: month, target: target, realization: realization}});
            if(isExist){
                await Progress.update({value: value}, {
                    where: {
                        ProjectId: id,
                    }
                })
            }
            else{
                return Promise.reject();
            }
            res.status(200).json({
                message: "update success",
                data: await Progress.findAll({where: {ProjectId: id}})
            });
        } catch (error) {
            next(error);
        }
    },

    // Delete progress
    destroy: async (req,res,next) => {
        try {
            const {id} = req.params;
            const deletedData = await Progress.findAll({where: {ProjectId: id}});

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
    },

    

}