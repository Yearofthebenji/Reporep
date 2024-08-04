const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env. PIKACHU_DB, 
    process.env.PIKACHU_USER,
    process.env.PIKACHU_PW,
    {

    
    host:"locoalhost",
    dialect: 'postgres'
}
)

module.exports = sequelize;

process.env.PICKACHU_DB, process.env.PICKACHU_USER,
process.env.PICKACHU_PW,