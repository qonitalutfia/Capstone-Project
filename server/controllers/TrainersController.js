import Trainers from "../model/TrainersModel.js";
import {Op} from "sequelize";

// export const getTrainers = async (req, res) =>{
//     try{
//         const response = await Trainers.findAll();
//         res.json(response)
//     } catch (error) {
//         console.log(error.message);
//     }
// }

export const getTrainers = async (req, res) =>{
    const search = req.query.search_query || "";
    const category = req.query.category || "";
    const result = await Trainers.findAll({
        where:{
            [Op.or]: [{name:{
                [Op.like]: '%'+search+'%'
            }}]
        },
        order:[
            ['id', 'DESC']
        ]
    })
    // const resultCategory = await Trainers.findAll({
    //     where:{
    //         [Op.or]: [{profesi:{
    //             [Op.like]: '%'+category+'%'
    //         }}]
    //     },
    //     order:[
    //         ['id', 'DESC']
    //     ]
    // })
    res.json({
        result : result,
        // resultCategory : resultCategory
    })

}

export const getTrainersById = async (req, res) =>{
    try {
        const response = await Trainers.findOne({
            where:{
                id : req.params.id
            }
        })
        res.json(response)
    } catch (error) {
        console.log(error.message);
    }
}

