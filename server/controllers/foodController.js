import Food from '../model/foodModel.js'


export const getFood = async (req, res) =>{
    try{
        const response = await Food.findAll();
        res.json(response)
    } catch (error) {
        console.log(error.message);
    }
}

export const getFoodById = async (req, res) =>{
    try {
        const response = await Food.findOne({
            where:{
                id : req.params.id
            }
        })
        res.json(response)
    } catch (error) {
        console.log(error.message);
    }
}

