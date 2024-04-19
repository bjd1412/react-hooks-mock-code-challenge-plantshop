import React from "react";
import { useState } from "react";

function PlantCard({name, image, price}) {
  const [stock, setStock] = useState(true)

  function StockClick () {
    setStock(!stock)
  }
  return (
    <li className="card">
      <img src={image} alt={"plant name"} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {stock ? (
        <button className="primary" onClick={StockClick}>In Stock</button>
      ) : (
        <button onClick={StockClick}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
