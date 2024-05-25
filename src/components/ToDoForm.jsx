import React, { useState } from "react";
import "./form.css";

const ToDoForm = ({clickAddTask}) => {
  const [userTask, setUserTask] = useState("");


  return (
    <div>
      <h1 className="text-center mt-5 mb-4">To-Do List</h1>
      <div className="container mb-4">
        <div className="row">
          <div className="col-6 offset-3 offset-right-3">
            <form id="todoForm" className="mb-4">
              <div className="form-group mb-3">
                <textarea
                  value={userTask}
                  onChange={(e) => setUserTask(e.target.value)}
                  className="form-control"
                  id="taskInput"
                  placeholder="Add a new task..."
                ></textarea>
              </div>
              <button
                type="button"
                onClick={() => clickAddTask(userTask)}
                className="btn btn-primary"
              >
                <i className="fas fa-plus"></i> Add Task
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToDoForm;
