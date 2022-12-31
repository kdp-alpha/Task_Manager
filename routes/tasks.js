const express = require("express");
const router = express.Router();
const {
  getAlltask,
  createTask,
  getTask,
  updateTask,
  deleteTask,
} = require("../controllers/ctasks");

router.route('/').get(getAlltask).post(createTask);
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);

module.exports = router;
