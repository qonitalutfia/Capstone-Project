import Trainers from "../model/TrainersModel.js";

export const getTrainers = async (req, res) =>{
    try{
        const response = await Trainers.findAll();
        res.json(response)
    } catch (error) {
        console.log(error.message);
    }
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

