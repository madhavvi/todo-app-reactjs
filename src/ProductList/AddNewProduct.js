import React, { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import "./AddNewProduct.css";

function AddNewProduct({ task, createProduct }) {
  const [userInput, setUserInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      task: "",
    }
  );

  const handleChange = (evt) => {
    setUserInput({ [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const newProduct = { id: uuidv4(), task: userInput.task, completed: false };
    createProduct(newProduct);
    setUserInput({ task: "" });
  };

  return (
    <form className="NewProductForm" onSubmit={handleSubmit}>
      <label htmlFor="task">Add new product</label>
      <input
        value={userInput.task}
        onChange={handleChange}
        id="task"
        type="text"
        name="task"
        placeholder="New Product"
      />
      <button>Add Product</button>
    </form>
  );
}

export default AddNewProduct;
