import axios from "axios";
import Addresses from "../Configuration/Addresses";

const TaskService = {
  deleteTask,
  editTask,
  addTask,
};

function deleteTask(id) {
  axios
    .delete(Addresses.deleteTask + id, { withCredentials: true })
    .then((res) => console.log(res));
  window.location.reload();
}

function editTask(id_task, newTask) {
  axios
    .put(
      Addresses.updateTask + id_task,
      { name: newTask },
      {
        withCredentials: true,
      }
    )
    .then((res) => console.log(res));
  window.location.reload();
}

function addTask(task) {
  axios
    .post(Addresses.addTask, { name: task }, { withCredentials: true })
    .then((res) => console.log(res));
  window.location.reload();
}

export default TaskService;
