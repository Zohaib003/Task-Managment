const express = require("express")
const router  = express.Router()
const { getAllTasks,updateTasks,deleteTasks,getTask,creatTasks } = require("../controllers/tasks")





router.route("/").get(getAllTasks).post(creatTasks)
router.route("/:id").get(getTask).patch(updateTasks).delete(deleteTasks)


module.exports = router