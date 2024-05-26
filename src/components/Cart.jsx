/* eslint-disable no-restricted-globals */
import React from "react";

const Cart = ({ task , deleteTask , CompleteTask}) => {

  const deleteTaskHandling = (taskid) => {
    if(confirm("Are You Sure ??")){
      deleteTask(taskid)
    }
  }

  return (
    <div>
      {task.map((tasks, index) => (
        <li key={index} className={ tasks.complete ? "list-group-item mb-4 d-flex justify-content-between align-items-center rounded border-0 bg-danger text-decoration-line-through" : "list-group-item mb-4 d-flex justify-content-between align-items-center rounded border-0" }>
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onClick={()=>CompleteTask(tasks.id,!tasks.complete)} defaultChecked={tasks.complete}/>
          <span className="fw-bold">{tasks.task}</span>
          <button className="btn btn-danger btn-sm">
            <i className="fas fa-trash-alt" onClick={() => deleteTaskHandling(tasks.id)}></i>
          </button>
        </li>
      ))}
    </div>
  );
};

export default Cart;
