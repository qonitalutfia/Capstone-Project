import Place from '../model/PlaceModel.js'
import {Op} from "sequelize";


// export const getPlace = async (req, res) =>{
//     try{
//         const response = await Place.findAll();
//         res.json(response)
//     } catch (error) {
//         console.log(error.message);
//     }
// }

export const getPlace = async (req, res) =>{
    const search = req.query.search_query || "";
    const result = await Place.findAll({
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

export const getPlaceById = async (req, res) =>{
    try {
        const response = await Place.findOne({
            where:{
                id : req.params.id
            }
        })
    } catch (error) {
        console.log(error.message);
    }
}

