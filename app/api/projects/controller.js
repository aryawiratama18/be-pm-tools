const {Project, ProjectDetail,Member,ProjectOwner, Cat, Owner} = require('../../db/models');

module.exports = {
    // Get all project
    getAll: async (req,res,next) => {
        try {
            const result = await Project.findAll({
                attributes: ["id","name","description","status"],
                include : [
                    {
                        model: Member,
                        attributes: ["firstName", "lastName"],
                        through: {attributes: []}
                    },
                    {
                        model: Owner,
                        attributes: ["name"],
                        through: {attributes: []}
                    }
                ]
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
    // getOne: async(req,res,next) => {
    //     try {
    //         const {id} = req.params; // ID Project nya
    //         let ProjectDetailData = await ProjectDetail.findAll({where: {ProjectId: id}});
    //         let ProjectDetailMembers = [];
    //         let ProjectDetailOwners = [];
    //         let ProjectCategory = [];
    //         let CATtemp = [];
    //         let BPOtemp = [];

    //         await Promise.all (ProjectDetailData.map(async (element) =>{
    //             // Category Data
    //             let Category = await Cat.findAll({where: {id: element.dataValues.CategoryId}});
    //             let CAT = CATtemp;
    //             if(CAT !== Category[0].name)
    //             {
    //                 CATtemp = Category[0].name;
    //                 ProjectCategory.push(CATtemp);
    //             }
    //             else
    //             {
    //                 CAT = CATtemp;
    //             }

    //             // Member Data
    //             let MemberData = await Member.findAll({where: {id: element.dataValues.MemberId}});
    //             ProjectDetailMembers.push(MemberData[0].firstName + " " + MemberData[0].lastName);
                
    //             // BPO Data
    //             let OwnerData = await ProjectOwner.findAll({where: {id: element.dataValues.ProjectOwnerId}});
    //             let BPO = BPOtemp;
    //             if(BPO !== OwnerData[0].name)
    //             {
    //                 BPOtemp = OwnerData[0].name;
    //                 ProjectDetailOwners.push(BPOtemp);
    //             }
    //             else 
    //             {
    //                 BPO = BPOtemp;
    //             }
    //         }))

    //         let ProjectData = await Project.findOne({where: {id: id}});
    //         ProjectData = ProjectData.dataValues;
    //         const result = {
    //             "name" : ProjectData.name,
    //             "description" : ProjectData.description,
    //             "detail" : {
    //                 "member" : ProjectDetailMembers,
    //                 "projectOwner" : ProjectDetailOwners,
    //                 "category" : ProjectCategory,
	// 		        "capex_budget" : ProjectData.capex_budget,
	// 		        "opex_budget" : ProjectData.opex_budget,
	// 		        "capex_real" : ProjectData.capex_real,
	// 		        "opex_real" : ProjectData.opex_real,
	// 		        "start_exec_plan" : ProjectData.start_exec_plan,
	// 		        "finish_exec_plan" : ProjectData.finish_exec_plan,
	// 		        "start_exec_real" : ProjectData.start_exec_real,
	// 		        "finish_exec_real" : ProjectData.finish_exec_real,
	// 		        "status" : ProjectData.status
    //             }
    //         }
    //         res.status(200).json({
    //             message: "get one success",
    //             data: result
    //         })
    //     } catch (error) {
    //         next(error);
    //     }
    // },

    // Create project
    create: async (req,res,next) => {
        try {
            const {name,description,capex_budget,opex_budget,capex_real,opex_real,start_exec_plan,finish_exec_plan,start_exec_real,finish_exec_real,status} = req.body;
            const ProjectData = await Project.create({
                name,description,capex_budget,opex_budget,capex_real,opex_real,start_exec_plan,finish_exec_plan,start_exec_real,finish_exec_real,status
            });
            const result = {
                "name" : ProjectData.name,
                "description" : ProjectData.description,
                "detail" : {
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
            console.log(result.dataValues.name);
            res.status(201).json({
                message: "create success",
                data: result,
            })
        } catch (error) {
            next(error);
        }
    },

    // Edit project detail
    update: async (req,res,next) => {
        try {
            const {id} = req.params;
            const {name,description,capex_budget,opex_budget,capex_real,opex_real,start_exec_plan,finish_exec_plan,start_exec_real,finish_exec_real,status, category} =  req.body;

            await Project.update({
                name,description,capex_budget,opex_budget,capex_real,opex_real,start_exec_plan,finish_exec_plan,start_exec_real,finish_exec_real,status
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

    // Assign member to project
    memberAssign: async (req,res,next) => {
        try {
            const {id} = req.params;
            const {memberId} = req.body;
            const SelectedProject = await Project.findOne({where: {id: id}});
            await SelectedProject.addMembers(memberId);
            const result = await SelectedProject.getMembers();
            res.status(200).json({
                message: "assign success",
                data: result
            })
        } catch (error) {
            next(error);
        }
    },

    // Assign owner to project
    ownerAssign: async (req,res,next) => {
        try {
            const {id} = req.params;
            const {ownerId} = req.body;
            const SelectedProject = await Project.findOne({where: {id: id}});
            await SelectedProject.addOwners(ownerId);
            const result = await SelectedProject.getOwners();
            res.status(200).json({
                message: "assign success",
                data: result
            })
        } catch (error) {
            next(error);
        }
    }

}