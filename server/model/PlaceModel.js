import {Sequelize} from 'sequelize'
import db from '../config/database.js'

const {DataTypes} = Sequelize;

const Place = db.define('place', {
    name : DataTypes.STRING,
    place : DataTypes.STRING,
    description : DataTypes.STRING
},{
    freezeTableName : true
})

export default Place;

(async()=>{
    await db.sync();
})();