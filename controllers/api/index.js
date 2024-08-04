const router = require('express').Router();
const api = require('./api');
const Task = required('../../models/Task');

//localhost:3001/api
router.post('/',async (req, res) => {
    //const { name, description, status} = req.body; Object Destructuring
    
    const newTask = await Task.create({
        name: req.body.name,
        description: req.body.name,
        status: req.body.status
});
res.json(newTask);
}catch (err) {
    res.status(500).json(err); 

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