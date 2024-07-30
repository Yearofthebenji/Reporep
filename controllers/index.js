const router = require("express").Router();
const Task = require('../models/Task');


//localhost:3001/api/
router.post('/', (req, res) = {
  const alltasks = await Task.findaAll();
  
  res.status(200).json(allTasks);
  {catch (err) {
    res.status(500).json(err);
  }
  
  
  }
  








  //const {name, descripiton, status} = req.body; object destructing


  const newTask = await Task.create({
    const
    description: 'Feed Pikachu he is hungry
    status: 'todo'
  });



res.json(newTask);

})

module.exports = router;