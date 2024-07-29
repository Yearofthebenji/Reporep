const express = require('espress');
const sequelize =require('/config/connection')
const controlers = require('./controllers');
const exphbs - require('express-handlebars')
// const model - require('./models/Task');



app.use(express.json());
app.use(express.urlencoded({extended: true}));

const app = express();
const PORT = process.env.port || 3001;

const hbs = exphbs.create({});

app.engine('handlebnars', hbs.engine);
app.set('view engine', 'handlebars');


app.use(controllers);

sequelize.sync().then(() => {
app.listen(PORT, () => {
  console.log('server started!');
})
});