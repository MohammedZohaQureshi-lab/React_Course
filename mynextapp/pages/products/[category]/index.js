import Link from "next/link";
import React from "react";

export default function Category({ products, category }) {
  return (
    <div>
      <h3>Products under categroy : {category}</h3>
      {products.map((product) => (
        <>
          <Link key={product.id} href={`/products/${category}/${product.id}`}>
            {product.title}
          </Link>
          <hr />
        </>
      ))}
    </div>
  );
}

export const getStaticProps = async (ctx) => {
  const category = ctx.params.category;
  const resp = await fetch(
    `https://fakestoreapi.com/products/category/${category}`
  );
  const data = await resp.json();
  return {
    props: {
      products: data,
      category,
    },
  };
};

export async function getStaticPaths() {
  const resp = await fetch(`https://fakestoreapi.com/products/categories`);
  const data = await resp.json();
  const paths = data.map((category) => ({
    params: { category: `${category}` },
  }));
  return { paths, fallback: false };
}
