import {Sequelize} from 'sequelize'
import db from '../config/database.js'

const {DataTypes} = Sequelize;

const Trainers = db.define('trainers', {
    name : DataTypes.STRING,
    profesi : DataTypes.STRING,
    phone : DataTypes.STRING
},{
    freezeTableName : true
})

export default Trainers;

(async()=>{
    await db.sync();
})();