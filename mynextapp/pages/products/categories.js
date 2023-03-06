import Link from "next/link";
import React from "react";

export default function Category({ categories }) {
  return (
    <div>
      {categories.map((cat) => (
        <>
          <Link key={cat} href={`/products/${cat}`}>
            {" "}
            {cat}
          </Link>
          <hr />
        </>
      ))}
    </div>
  );
}

export const getStaticProps = async (ctx) => {
  const resp = await fetch("https://fakestoreapi.com/products/categories");
  const data = await resp.json();
  return {
    props: {
      categories: data,
    },
  };
};
