import React from "react";

async function getCategories() {
  const res = await fetch("https://fakestoreapi.com/products/categories");

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data!");
  }

  return res.json();
}

async function CategoriesList() {
  const categories = await getCategories();

  return (
    <>
      <h1>Categories</h1>
      {categories.map((category, index) => (
        <p key={index}>{category}</p>
      ))}
    </>
  );
}

export default CategoriesList;
