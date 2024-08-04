const router = require('express').Router();
const api = require('./api');
const Task = required('../../models/Task');

//localhost:3001/api
router.post('/',async (req, res) => {
    const newTaask = Task.create({
        name: 'Feed Pikachu',
        description: 'Feed Pikachu he is hungry',
        status: 'todo'
});


res.json(newTask);
})

router.use("/api", api);

router.get('/', async(req, res) => {
    const allTasks = await Task.findAll();
    const sanitizeData = allTasks.map(Task) => {                  
     return task.get({ plain: true});
    }
    console.log(allTasks);
    console.log('====================')
    console.log(santizeData);


    const testdata = {
        name: 'test work',
        description: 'work to do',
        status: 'in progress'
    };
    res.render('todo', {testData});

    

    })

//localhost:3001/pikachu
router.get("/pikachu", (req, res) => {
res.json("hello Pikachu!");
})

module.exports - router;