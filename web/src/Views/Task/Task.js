import axios from "axios";
import React, { useState, useEffect } from "react";
import Addresses from "../../Configuration/Addresses";
import TaskService from "../../Service/TaskService";

export default function Task() {
  const [user, setUser] = useState(
    JSON.parse(window.localStorage.getItem("user"))
  );
  const [taskList, setTaskList] = useState([]);
  const [task, setTask] = useState();
  const [newTask, setNewTask] = useState();

  useEffect(async () => {
    const result = await axios.get(Addresses.getTasksByIdUser + user.id);
    setTaskList(result.data);
  }, []);

  return (
    <div className="m-5">
      <p className="text-warning">Add task</p>
      <div className="row mb-3 justify-content-md-center">
        <input
          className="col-3"
          placeholder="name"
          type="text"
          onChange={(e) => setTask(e.target.value)}
        />
        <button
          className="btn col-1 btn-outline-warning"
          onClick={(e) => TaskService.addTask(task)}
        >
          Add
        </button>
      </div>
      {taskList.map((item) => (
        <div class="row mb-4 justify-content-md-center text-warning">
          <div class="col bg-secondary col-3 ">{item.name}</div>
          <input
            className="col-3"
            placeholder="new name"
            type="text"
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button
            className="btn col-1 btn-outline-warning"
            onClick={(e) => TaskService.editTask(item.id, newTask)}
          >
            Edit
          </button>
          <button
            className="btn col-1 btn-outline-warning"
            onClick={(e) => TaskService.deleteTask(item.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
