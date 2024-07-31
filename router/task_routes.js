const express = require("express");
const router = express.Router();

const { getAllTasks, updateOneTask, deleteOneTask, getOneTask } = require("../controller/task_controller");

router.route("/").get(getAllTasks);
router.route("/:id").patch(updateOneTask).get(getOneTask).delete(deleteOneTask);

module.exports = router;
