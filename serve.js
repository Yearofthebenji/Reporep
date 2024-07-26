const express = require('espress');
const sequelize =require('/config/connection')
const controlers = require('./controllers');

const model = require('./models/Task');



app.use(express.json());
app.use(express.urlencoded({extended: true}));

const app = express();
const PORT = process.env.port || 3001;
app.use(controllers);

sequelize.sync().then(() => {
app.listen(PORT, () => {
  console.log('server started!');
})
});