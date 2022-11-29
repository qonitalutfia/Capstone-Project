import {Sequelize} from 'sequelize'
import db from '../config/database.js'

const {DataTypes} = Sequelize;

const Team = db.define('team', {
    name : DataTypes.STRING,
    sport : DataTypes.STRING,
    description : DataTypes.STRING
},{
    freezeTableName : true
})

export default Team;

(async()=>{
    await db.sync();
})();