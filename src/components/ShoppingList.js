import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [typedItem,setTypedItem] = useState("");
  const [submittedData, setSubmittedData] = useState([...items]);


  function handleTypedItem(event){
    setTypedItem(event.target.value);

  }
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function onItemFormSubmit(newItem){
    setSubmittedData([...submittedData,newItem])
    console.log(submittedData)
  }

  const selectItemsToDisplay = submittedData.filter(item => 
    selectedCategory === "All"||
   item.category === selectedCategory)

  const typedItemToDisplay =  submittedData.filter(item => item.name.toLowerCase().includes(typedItem.toLowerCase()))

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter onSearchChange={handleTypedItem} onCategoryChange={handleCategoryChange} search={typedItem} />
      <ul className="Items">
        {(typedItem? typedItemToDisplay : selectItemsToDisplay).map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
