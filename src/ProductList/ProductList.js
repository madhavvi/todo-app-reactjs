import React, { useState } from "react";
import Product from "./Product/Product";
import AddNewProduct from "./AddNewProduct";
import { v4 as uuidv4 } from "uuid";
import "./ProductList.css";

function ProductList() {
  const [products, setProducts] = useState([
    { id: uuidv4(), task: "Product 1", completed: false },
    { id: uuidv4(), task: "Product 2", completed: false },
  ]);

  const create = (newProduct) => {
    console.log(newProduct);
    setProducts([...products, newProduct]);
  };

  const remove = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const update = (id, updtedTask) => {
    const updatedProducts = products.map((product) => {
      if (product.id === id) {
        return { ...product, task: updtedTask };
      }
      return product;
    });
    setProducts(updatedProducts);
  };

  const toggleComplete = (id) => {
    const updatedProducts = products.map((product) => {
      if (product.id === id) {
        return { ...product, completed: !product.completed };
      }
      return product;
    });
    setProducts(updatedProducts);
  };

  return (
    <div className="ProductList">
      <h1>
        Product List <span>React Product List App</span>
      </h1>
      <ul>
        {products && (
          <>
            {products.map((product) => (
              <Product
                toggleComplete={toggleComplete}
                update={update}
                remove={remove}
                key={product.id}
                product={product}
              />
            ))}
          </>
        )}
      </ul>
      <AddNewProduct createProduct={create} />
    </div>
  );
}

export default ProductList;
