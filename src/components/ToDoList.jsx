import React from "react";
import Cart from "./Cart";

const ToDoList = ({task , deleteTask , CompleteTask}) => {

  return (
    <div>
      <div className="row">
        <div className="col-6 offset-3 offset-right-3">
            <ul id="taskList" className="list-group">
                <Cart task={task} deleteTask = {deleteTask} CompleteTask={CompleteTask}/>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default ToDoList;
