const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connetion');

class Task extends Model {};

Task.init({
id: {
    type: DataTypes.INTGET,
    allowNull: false
    primaryKey: true,
    autoIncrement: true
}
name: {
  type: DataTypes.STRING,
  allowNull: false
}
description: {
    type: DataTypes.TEXT,
    allowNull: false 

},
status: {
    type: DataTypes.TEXT
    allowNull: false


}
}){}