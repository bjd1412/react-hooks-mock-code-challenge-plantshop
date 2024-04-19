import React, { useState } from "react";

function NewPlantForm({onHandleSubmit}) {
  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const [price, setPrice] = useState(0)

  function newPlantName (e) {
    setName(e.target.value)
  }
  function newPlantImage (e) {
    setImage(e.target.value)
  }
  function newPlantPrice (e) {
    setPrice(e.target.value)
  }
  function Submitter (e) {
    e.preventDefault()
    const newPlant = {
        name: name,
        image: image,
        price: price
      }
      fetch("http://localhost:6001/plants", {
        method: "POST",
        headers:{
           "Content-Type":"application/json"
          },
        body: JSON.stringify(newPlant)
      })
      .then(res => res.json())
      .then(approvedPlant => onHandleSubmit(approvedPlant))
    
  }
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={Submitter}>
        <input type="text" name="name" placeholder="Plant name" value={name} onChange={newPlantName} />
        <input type="text" name="image" placeholder="Image URL" value={image} onChange={newPlantImage}/>
        <input type="number" name="price" step="0.01" placeholder="Price" value={price} onChange={newPlantPrice}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
