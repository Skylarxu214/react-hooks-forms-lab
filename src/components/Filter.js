import React from "react";

function Filter(props) {
  return (
    <div className="Filter">
      <input type="text" name="search" placeholder="Search..." onChange = {props.onSearchChange} value={props.search}/>
      <select name="filter" onChange={props.onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
