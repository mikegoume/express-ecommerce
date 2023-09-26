import Image from "next/image";
import Link from "next/link";
import React from "react";

async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products");

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data!");
  }

  return res.json();
}

async function ProductsList() {
  let products = [];
  products = await getProducts();

  return (
    <>
      {products.map((product) => (
        <div key={product.id} className="card my-5">
          <Link href={`/products/${product.id}`}>
            <Image
              src={product.image}
              width={100}
              height={100}
              style={{
                width: "100%",
                height: 300,
                objectFit: "contain",
                padding: "2em",
              }}
            />
            <h3>{product.title}</h3>
            {/* <p> {product.description.slice(0, 200)}</p> */}
            {/* <div className="flex justify-between"> */}
            {/* <div className="pill low">{product.rating.rate}</div> */}
            <div className="pill low">{product.price}$</div>
            {/* </div> */}
          </Link>
        </div>
      ))}
      {products.length === 0 && (
        <p className="text-center"> There are no products </p>
      )}
    </>
  );
}

export default ProductsList;
