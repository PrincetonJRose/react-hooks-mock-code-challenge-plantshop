import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, stock, changeStock }) {

  const renderPlants = plants.map( plant =>
    <PlantCard
      key = { plant.id }
      plant = { plant }
      stock = { stock }
      changeStock = { changeStock }
    />)

  return (
    <ul className="cards">{ renderPlants /* render PlantCards components in here */}</ul>
  );
}

export default PlantList;
