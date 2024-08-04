const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize({
    "todo_app_db",
    "postgres",
    "theskyisbluetoday".
    {

    
    host:"locoalhost",
    dialect: 'postgres'
}
)

module.exports = sequelize;

process.env.PICKACHU_DB, process.env.PICKACHU_USER,
process.env.PICKACHU_PW,