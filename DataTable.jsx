import React, { useState } from "react";

const ProductList = () => {
  const initialProducts = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mobile", price: 20000 },
    { id: 3, name: "Headphones", price: 1500 },
    { id: 4, name: "Keyboard", price: 700 },
    { id: 5, name: "Monitor", price: 12000 },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("asc"); // asc or desc

  const handleSortToggle = () => {
    setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
  };

  const filteredAndSortedProducts = initialProducts
    .filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) =>
      sortOrder === "asc" ? a.price - b.price : b.price - a.price
    );

  return (
    <div>
      <h2>Product List</h2>

      <input
        type="text"
        placeholder="Search product..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <button onClick={handleSortToggle}>
        Sort by Price: {sortOrder === "asc" ? "Low to High" : "High to Low"}
      </button>

      <ul>
        {filteredAndSortedProducts.map((product) => (
          <li key={product.id}>
            <strong>{product.name}</strong> - ₹{product.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
