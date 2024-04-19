import React from "react";
import PlantCard from "./PlantCard";

function PlantList({DiffPlants}) {
  return (
    <ul className="cards">
      {DiffPlants.map(plant => (
        <PlantCard key={plant.id} id={plant.id} name={plant.name} image={plant.image} price={plant.price} />
      ))}
      </ul>
  );
}

export default PlantList;
