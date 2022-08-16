import React from "react";

function PlantCard({ plant, stock, changeStock }) {

  return (
    <li className="card">
      <img src={ plant.image } alt={ plant.name } />
      <h4>{ plant.name }</h4>
      <p>Price: { plant.price }</p>
      { !stock.includes( plant.id ) ? (
        <button className="primary"
          onClick = { ()=> changeStock( plant ) }
        >In Stock</button>
      ) : (
        <button
        onClick = { ()=> changeStock( plant ) }
        >Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
