import Food from '../model/foodModel.js'
import {Op} from "sequelize";


// export const getFood = async (req, res) =>{
//     try{
//         const response = await Food.findAll();
//         res.json(response)
//     } catch (error) {
//         console.log(error.message);
//     }
// }

export const getFood = async (req, res) =>{
    const search = req.query.search_query || "";
    const result = await Food.findAll({
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

export const getFoodById = async (req, res) =>{
    try {
        const response = await Food.findOne({
            where:{
                id : req.params.id
            }
        })
    } catch (error) {
        console.log(error.message);
    }
}

