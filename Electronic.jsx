import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Electronic = () => {
  const [product, setProduct] = useState([]);
  const [filterProduct, setFilterProduct] = useState([]);
  const [query, setQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("default");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/jewelery")
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setFilterProduct(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleSearch = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setQuery(searchValue);

    const filteredData = product.filter((item) =>
      item.title.toLowerCase().includes(searchValue)
    );

    if (sortOrder === "asc") {
      filteredData.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "desc") {
      filteredData.sort((a, b) => b.price - a.price);
    }

    setFilterProduct(filteredData);
  };

  const handleSort = (order) => {
    setSortOrder(order);

    let sortedData = [...filterProduct];
    if (order === "asc") {
      sortedData.sort((a, b) => a.price - b.price);
    } else if (order === "desc") {
      sortedData.sort((a, b) => b.price - a.price);
    } else {
      sortedData = [...product]; // Reset to original order
      if (query) {
        sortedData = sortedData.filter((item) =>
          item.title.toLowerCase().includes(query)
        );
      }
    }

    setFilterProduct(sortedData);
  };

  return (
    <div>
      <h1>Jewelry</h1>

      <input
        type="text"
        placeholder="Search by title..."
        value={query}
        onChange={handleSearch}
        style={{
          padding: "10px",
          width: "300px",
          borderRadius: "5px",
          border: "1px solid #ddd",
          marginRight: "10px",
        }}
      />

      <select
        id="sort"
        value={sortOrder}
        onChange={(e) => handleSort(e.target.value)}
        style={{
          padding: "5px 10px",
          fontSize: "16px",
          borderRadius: "5px",
          border: "1px solid #ddd",
        }}
      >
        <option value="default">Default</option>
        <option value="asc">Low to High</option>
        <option value="desc">High to Low</option>
      </select>

      <ul>
        {filterProduct.map((el) => (
          <li key={el.id} style={{ marginBottom: "20px", listStyleType: "none" }}>
            <h4>{el.title}</h4>
            <h4>Price: ${el.price}</h4>
            <h5>Category: {el.category}</h5>
            <img
              alt={el.title}
              src={el.image}
              style={{ width: "100px", height: "100px", objectFit: "cover" }}
            />
            <br />
            <Link to={`/productDetail/${el.id}`}>View Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Electronic;
