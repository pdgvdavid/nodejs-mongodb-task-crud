import { Router } from "express";
import {
  renderTasks,
  createTask,
  renderTaskEdit,
  editTask,
  deleteTask,
  taskToggleDone,
} from "../controllers/tasks.controller";

const router = Router();

//console.log( __dirname);
//console.log(path.resolve("./"));

// muestra lista de registros
router.get("/", renderTasks);

router.get("/about", (req, res) => {
  res.render("about");
});

//llama al form para hacer el update unitario
router.get("/tasks/:id/edit", renderTaskEdit);

//llama el update
router.post("/tasks/:id/edit", editTask);

// hacer insert a la tabla
router.post("/tasks/add", createTask);

// hace el delete
router.get("/tasks/:id/delete", deleteTask);

// hace el update del campo done
router.get("/tasks/:id/toggleDone", taskToggleDone);

export default router;
