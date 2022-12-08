import Team from '../model/TeamModel.js'
import {Op} from "sequelize";

export const getTeam = async (req, res) =>{
    const search = req.query.search_query || "";
    const result = await Team.findAll({
        where:{
            [Op.or]: [{name:{
                [Op.like]: '%'+search+'%'
            }}]
        },
        order:[
            ['id', 'DESC']
        ]
    })
    res.json({
        result : result,
    })

}


export const getTeamById = async (req, res) =>{
    try {
        const response = await Team.findOne({
            where:{
                id : req.params.id
            }
        })
    } catch (error) {
        console.log(error.message);
    }
}

