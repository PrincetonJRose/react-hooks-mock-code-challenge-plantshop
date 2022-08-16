import React from "react";

function NewPlantForm({ createNewPlant }) {

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={ ( e )=> createNewPlant( e ) }>
        <input type="text" name="name" placeholder="Plant name" required/>
        <input type="text" name="image" placeholder="Image URL" required/>
        <input type="number" name="price" step="0.01" placeholder="Price" required/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
