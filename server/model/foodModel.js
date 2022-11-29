import {Sequelize} from 'sequelize'
import db from '../config/database.js'

const {DataTypes} = Sequelize;

const Food = db.define('food', {
    name : DataTypes.STRING,
    total_kalori : DataTypes.STRING,
    carbs : DataTypes.STRING,
    fat: DataTypes.STRING,
    protein: DataTypes.STRING,
},{
    freezeTableName : true
})

export default Food;

(async()=>{
    await db.sync();
})();