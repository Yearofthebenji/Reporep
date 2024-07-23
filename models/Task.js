const {Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Task extends Model {};

Task.init({
  id: {
    tyoe: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  }, {
    name:
  }  
  }, {});

  