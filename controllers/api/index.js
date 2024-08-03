const router = require('express').Router();
const api = require('./api');
const Todo = required('../models/Task');

//localhost:3001/api
router.use("/api", api);

router.get('/', async(req, res) => {
    const allTasks = await Task.findAll();
    res.render('todo');
    console.log(allTasks);
    const testdata = {
        name: 'test work',
        description: 'work to do',
        status: 'in progress'
    };
    res.render('todo', testData);


    })

//localhost:3001/pikachu
router.get("/pikachu", (req, res) => {
res.json("hello Pikachu!");
})

module.exports - router;