import Place from '../model/PlaceModel.js'


export const getPlace = async (req, res) =>{
    try{
        const response = await Place.findAll();
        res.json(response)
    } catch (error) {
        console.log(error.message);
    }
}

export const getPlaceById = async (req, res) =>{
    try {
        const response = await Place.findOne({
            where:{
                id : req.params.id
            }
        })
        res.json(response)
    } catch (error) {
        console.log(error.message);
    }
}

