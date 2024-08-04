const router = require("express").Router();
const api = require('./api');

router.use("api", api);

router.get("/pikachu", async(req, res) => {
  res.json('hello pikachu');
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





res.json('hello Pikachu!');



module.exports = router;