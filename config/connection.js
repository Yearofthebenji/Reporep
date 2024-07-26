const sequelize = require('sequelize');
require('detonev').config();

const sequelize = new Sequelize(process.env.PICKACHU_DB, process.env.PICKACHU_USER,
process.env.PICKACHU_PW,
{
    host:"locoalhost",
    dialect: 'postgress'
}
)

module.exports = sequelize;