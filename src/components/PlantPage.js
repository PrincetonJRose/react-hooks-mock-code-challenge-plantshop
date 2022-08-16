import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

const baseUrl = ` http://localhost:6001/`
const plantsUrl = baseUrl + `plants/`

function PlantPage() {

  const [ plants, setPlants ] = useState( [] )
  const [ query, setQuery ] = useState( '' )
  const [ stock, setStock ] = useState( [] )

  useEffect( ()=> fetchPlants(), [] )

  const fetchPlants =( )=> 
    fetch( plantsUrl )
    .then( res => res.json() )
    .then( plants => setPlants( plants ) )

  const filterPlants =( )=> plants.filter( plant => plant.name.toLowerCase().includes( query.toLowerCase() ) )

  const createNewPlant =( e )=> {
    e.preventDefault()
    
    let form = e.target
    let plant = {
      name: form.name.value,
      image: form.image.value,
      price: form.price.value,
    }
    postNewPlant( plant )
    form.reset()
  }

  const postNewPlant =( plant )=> 
    fetch( plantsUrl, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Accepts': 'application/json',
      },
      body: JSON.stringify( plant ),
    })
    .then( res => res.json() )
    .then( newPlant => setPlants( [...plants, newPlant] ) )

  const updateQuery =( searchText )=> setQuery( searchText )

  const changeStock =( plant )=> {
    if ( stock.includes( plant.id ) )
      setStock( stock.filter( id => id !== plant.id ) )
    else
      setStock( [...stock, plant.id] )
  }

  return (
    <main>
      <NewPlantForm
        createNewPlant = { createNewPlant }
      />
      <Search
        updateQuery = { updateQuery }
      />
      <PlantList
        stock = { stock }
        changeStock = { changeStock }
        plants = { filterPlants() }
      />
    </main>
  );
}

export default PlantPage;
