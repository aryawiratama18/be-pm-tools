const {Project, ProjectDetail,} = require('../../db/models');

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

    // Get project detail
    getOne: async(req,res,next) => {
        try {
            const {id} = req.params; // ID Project nya
            let ProjectDetailData = await ProjectDetail.findAll({where: {ProjectId: id}});
            let ProjectDetailMembers = [];
            ProjectDetailData.forEach(element => {
                if(ProjectDetailMembers.indexOf(element.dataValues.MemberId) < 0)
                {
                    ProjectDetailMembers.push(element.dataValues.MemberId);
                }
                else {

                }
            });
            let ProjectDetailOwners = [];
            ProjectDetailData.forEach(element => {
                if(ProjectDetailOwners.indexOf(element.dataValues.ProjectOwnerId) < 0)
                {
                    ProjectDetailOwners.push(element.dataValues.ProjectOwnerId);
                }
                else {
                    
                }
            });

            let ProjectData = await Project.findOne({where: {id: id}});
            ProjectData = ProjectData.dataValues;
            const result = {
                "id" : id,
                "name" : ProjectData.name,
                "description" : ProjectData.description,
                "detail" : {
                    "member" : ProjectDetailMembers,
                    "projectOwner" : ProjectDetailOwners,
                    "category" : ProjectData.category,
			        "capex_budget" : ProjectData.capex_budget,
			        "opex_budget" : ProjectData.opex_budget,
			        "capex_real" : ProjectData.capex_real,
			        "opex_real" : ProjectData.opex_real,
			        "start_exec_plan" : ProjectData.start_exec_plan,
			        "finish_exec_plan" : ProjectData.finish_exec_plan,
			        "start_exec_real" : ProjectData.start_exec_real,
			        "finish_exec_real" : ProjectData.finish_exec_real,
			        "status" : ProjectData.status
                }
            }
            res.status(200).json({
                message: "get one success",
                data: result
            })
        } catch (error) {
            next(error);
        }
    },

    // Create project
    create: async (req,res,next) => {
        try {
            const {name,CatId,description,capex_budget,opex_budget,capex_real,opex_real,start_exec_plan,finish_exec_plan,start_exec_real,finish_exec_real,status} = req.body;
            const result = await Project.create({
                name,CatId,description,capex_budget,opex_budget,capex_real,opex_real,start_exec_plan,finish_exec_plan,start_exec_real,finish_exec_real,status
            });
            res.status(201).json({
                message: "create success",
                data: result,
            })
        } catch (error) {
            next(error);
        }
    },

    // Update project
    update: async (req,res,next) => {
        try {
            const {id} = req.params;
            const {name,CatId,description,capex_budget,opex_budget,capex_real,opex_real,start_exec_plan,finish_exec_plan,start_exec_real,finish_exec_real,status} =  req.body;
            await Project.update({
                name,CatId,description,capex_budget,opex_budget,capex_real,opex_real,start_exec_plan,finish_exec_plan,start_exec_real,finish_exec_real,status
            }, {where: {id: id}});
            res.status(200).json({
                message: "update success",
                data: await Project.findOne({where: {id:id}})
            });
        } catch (error) {
            next(error);
        }
    },

    // Delete project
    destroy: async (req,res, next) => {
        try {
            const {id} = req.params;
            const deletedData = await Project.findOne({where: {id: id}});
            await Project.destroy({
                where:{id: id},
            });
            res.status(200).json({
                message: "delete success",
                data: deletedData
            });
        } catch (error) {
            next(error);
        }
    },

    // Assign project to member
    assign: async(req,res,next) => {
        try {
            
        } catch (error) {
            next(error);
        }
    }
}