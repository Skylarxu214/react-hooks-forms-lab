import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm(props) {
const [typedName,setName] = useState("");
const [selectedCategory, setCategory] = useState("Produce");

function handleSetName(event){
  setName(event.target.value)
}

function handleSetCategory(event){
  setCategory(event.target.value)
}

function handleSubmmit(event){
  event.preventDefault()
  if(typedName.length > 0){
    const newItem ={
      id:uuid(), 
      name:typedName,
      category:selectedCategory
    }
  props.onItemFormSubmit(newItem)
  }
  setName('')
  }

return (
    <form className="NewItem" onSubmit={handleSubmmit} >
      <label>
        Name:
        <input type="text" name="name" onChange={handleSetName} value={typedName}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleSetCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
