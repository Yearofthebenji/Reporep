const {model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

class Task extends Model {};

Task.init({
    id: {
          type: Datatypes.INTEGER
          allowNull: false,
          primaryKey: true,
          autoIncrement: true
},
name: { 
          Type: DataTypes.STRING,
          allowNull: false
        },
          description: {
      type: DataTypes.TEXT,
      allowNull: false 
          }
         status: {
            type: DataTypes.STRING,
            allowNull: false
      

         } 
        }.description, {

          sequelize,
          freezeTableName: true,
          underscored: true,
          modelName: 'task'
}. {})
module.exports = Task;