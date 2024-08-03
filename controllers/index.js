const router = require("express").Router();
const Task = require('../models/Task');

router.get('/', async(req, res) => {
  try {
    const alltasks = await Task.findAll();
  
    res.status(200).json(allTasks);
  } catch (err) {
    res.status(500).json(err);
  }
  
})

//localhost:3001/api/
router.post('/', async (req, res) =>{
//const {name, descripiton, status} = req.body; object destructing

})





res.json(newTask);



module.exports = router;