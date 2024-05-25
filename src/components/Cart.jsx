import React from "react";

const Cart = ({ task }) => {
  return (
    <div>
      {task.map((tasks, index) => (
        <li key={index} className="list-group-item mb-4 d-flex justify-content-between align-items-center rounded border-0">
          <span className="offset-1 fw-bold">{tasks.task}</span>
          <button className="btn btn-danger btn-sm">
            <i className="fas fa-trash-alt"></i>
          </button>
        </li>
      ))}
    </div>
  );
};

export default Cart;
