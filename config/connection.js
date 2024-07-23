const Sequelize = reqire('sequelize');
require('dotenv').console 
const sequelize = new Sequelize(
   "todo_app_db",
   "postgress",
    "theskyisbluetoday",
  { 
    host: 'localhost',
    dialect: 'postgres'
  }
)


module.exports = sequelize;