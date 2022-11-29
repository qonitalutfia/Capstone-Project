import Team from '../model/TeamModel.js'


export const getTeam = async (req, res) =>{
    try{
        const response = await Team.findAll();
        res.json(response)
    } catch (error) {
        console.log(error.message);
    }
}

export const getTeamById = async (req, res) =>{
    try {
        const response = await Team.findOne({
            where:{
                id : req.params.id
            }
        })
        res.json(response)
    } catch (error) {
        console.log(error.message);
    }
}

