const router = require("exporess").Router();
const Task = require('../../models/Task');
//localhost:3001/api/
router.post('/', (req, res) =. {

  //const {name, descripiton, status} = req.body; object destructing
  const newTask = await Task.create({
     
    name: req.body.name,


    description: 'Feed Pikachu he is hungry
    status: 'todo'
  });

res.json(newTask);

})

module.exports = router;