import React, { useState } from "react";
import { MdEdit, MdDelete } from 'react-icons/md';
import "./Product.css";

function Product({ toggleComplete, update, remove, key, product }) {
  const [isEditing, setIsEditing] = useState(false);
  const [task, setTask] = useState(product.task);

  const handleClick = (evt) => {
    remove(evt.target.id);
  };
  const toggleFrom = () => {
    setIsEditing(!isEditing);
  };
  const handleUpdate = (evt) => {
    evt.preventDefault();
    update(product.id, task);
    toggleFrom();
  };
  const handleChange = (evt) => {
    setTask(evt.target.value);
  };
  const toggleCompleted = (evt) => {
    toggleComplete(evt.target.id);
  };

  let result;
  if (isEditing) {
    result = (
      <div className="Product">
        <form className="Product-edit-form" onSubmit={handleUpdate}>
          <input onChange={handleChange} value={task} type="text" />
          <button>Save</button>
        </form>
      </div>
    );
  } else {
    result = (
      <div className="Product">
        <li
          id={product.id}
          onClick={toggleCompleted}
          className={
            product.completed ? "Product-task completed" : "Product-task"
          }
        >
          {product.task}
        </li>
        <div className="Product-buttons">
          
          <button onClick={toggleFrom}>
            <MdEdit />
          </button>
          <button onClick={handleClick}>
            <MdDelete id={product.id} />
          </button>
        </div>
      </div>
    );
  }
  return result;
}

export default Product;
