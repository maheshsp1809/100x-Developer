import React, { useState } from "react";

const FilterComponent = ({ applyFilters }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState("");

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handlePriceRangeChange = (e) => {
    setSelectedPriceRange(e.target.value);
  };

  const handleApplyFilters = () => {
    // You can pass the selected filters to a parent component or perform other actions here
    applyFilters({
      category: selectedCategory,
      priceRange: selectedPriceRange,
    });
  };

  return (
    <div className="filter-container">
      <h2>Filters</h2>
      <div>
        <label htmlFor="category">Category:</label>
        <select
          id="category"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="">Select Category</option>
          <option value="electronics">Electronics</option>
          <option value="clothing">Clothing</option>
          <option value="books">Books</option>
          {/* Add more categories as needed */}
        </select>
      </div>
      <div>
        <label htmlFor="priceRange">Price Range:</label>
        <select
          id="priceRange"
          value={selectedPriceRange}
          onChange={handlePriceRangeChange}
        >
          <option value="">Select Price Range</option>
          <option value="0-50">$0 - $50</option>
          <option value="50-100">$50 - $100</option>
          <option value="100-200">$100 - $200</option>
          {/* Add more price ranges as needed */}
        </select>
      </div>
      <button onClick={handleApplyFilters}>Apply Filters</button>
    </div>
  );
};

export default FilterComponent;
