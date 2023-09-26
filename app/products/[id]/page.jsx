import Image from "next/image";
import React from "react";

async function getProduct(id) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data!");
  }

  return res.json();
}

async function ProductDetails({ params }) {
  const { id } = params;

  const product = await getProduct(id);

  return (
    <div className="card my-5">
      <h3>{product.title}</h3>
      <Image src={product.image} width={100} height={100} />
      <p> {product.description.slice(0, 200)}</p>
      <div className="flex justify-between">
        <div className="pill low">{product.rating.rate}</div>
        <div className="pill low">{product.price}$</div>
      </div>
    </div>
  );
}

export default ProductDetails;
