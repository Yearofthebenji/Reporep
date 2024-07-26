const express = require('espress');
const sequelize =require('/config/connection')

const app = express();
const PORT = process.env.port || 3001;

sequelize.sync().then(() => {
app.listen(PORT, () => {
  console.log('server started!');
})
});