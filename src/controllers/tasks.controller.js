import Task from "../models/Task";

// muestra lista de registros
export const renderTasks = async (req, res) => {
  //res.send("hello world!!! ");
  //const tasks = await Task.find();
  const tasks = await Task.find().lean();
  // se aumenta lean porque retorna un objeto mongodb y para mostrarlo en la vista
  // requiere que sea un objeto de javascript, y el lean() lo convierte a objeto java script.

  //console.log(tasks);
  res.render("index", { tasks: tasks });
};

// hacer insert a la tabla
export const createTask = async (req, res) => {
  try {
    const task = Task(req.body);
    //const taskSaved =
    await task.save();
    //console.log(taskSaved);
    //console.log(task);
    //  res.send("add task");
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

//llama al form para hacer el update unitario
export const renderTaskEdit = async (req, res) => {
  //res.render("edit");

  try {
    const task = await Task.findById(req.params.id).lean();
    res.render("edit", { task: task });
  } catch (error) {
    console.log(error.message);
  }
};

//llama el update
export const editTask = async (req, res) => {
  await Task.findByIdAndUpdate(req.params.id, req.body);
  res.redirect("/");
};

// hace el delete
export const deleteTask = async (req, res) => {
  const { id } = req.params;
  await Task.findByIdAndDelete(id);
  res.redirect("/");
};

// hace el update del campo done
export const taskToggleDone = async (req, res) => {
  const { id } = req.params;
  const task = await Task.findById(id);
  task.done = !task.done;
  await task.save();
  res.redirect("/");
};
