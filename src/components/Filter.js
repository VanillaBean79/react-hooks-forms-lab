import React from "react";

function Filter({ onCategoryChange, category, onSearchChange, search }) {
  
  return (
    <div className="Filter">
      <input
        type="text" 
        placeholder="Search..."
        onChange={onSearchChange}
        value={search}
        />
      <select name="filter" onChange={onCategoryChange} value={category}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
