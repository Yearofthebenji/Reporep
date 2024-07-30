const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.PICKACHU_DB, process.env.PICKACHU_USER,
process.env.PICKACHU_PW,
{
    host:"locoalhost",
    dialect: 'postgres'
}
)

module.exports = sequelize;