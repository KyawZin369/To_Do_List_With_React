import React from "react";
import Cart from "./Cart";

const ToDoList = ({task}) => {
  return (
    <div>
      <div className="row">
        <div className="col-6 offset-3 offset-right-3">
            <ul id="taskList" className="list-group">
                <Cart task={task}/>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default ToDoList;
