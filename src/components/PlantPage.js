import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plant, setPlant] = useState([])
  const [search, setSearch] = useState("")
  useEffect( () => {
    fetch(" http://localhost:6001/plants")
    .then(res => res.json())
    .then(res => setPlant(res))
  }, [])
  const SearchablePlants = plant.filter(plant => {
    if(search === ""){
      return true
    }else if(plant.name.toLowerCase().includes(search.toLowerCase())){
      return true
    }else {
      return false
    }
  })
  function searchChange (e) {
    setSearch(e.target.value)
  }
  function handleSubmit (approvedPlant) {
    setPlant([...plant, approvedPlant])
  }
  return (
    <main>
      <NewPlantForm onHandleSubmit={handleSubmit} />
      <Search search={search} onSearchChange={searchChange}/>
      <PlantList DiffPlants={SearchablePlants}/>
    </main>
  );
}

export default PlantPage;
