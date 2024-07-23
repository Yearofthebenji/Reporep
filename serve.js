cont express = require('express');
const sequelize = require('./config/connection');

cont app = express();
cont PORT = process.env.PORT 3001;

sequelize.sync().then(() => {
app.listen(PORT, () => {
  console.log('server started!')
})
});


