import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";

export default function News({ news }) {
  const [newsList, setNewsList] = useState(news);
  const [category, setCategory] = useState("");
  const router = useRouter();
  const fetchData = async () => {
    const resp = await fetch(
      `http://localhost:5000/news/?category=${category}`
    );
    const data = await resp.json();
    setNewsList(data);
    router.push(`/news?category=${category}`, null, { shallow: true });
    setCategory("");
  };
  return (
    <>
      {/*  <button onClick={fetchData}>Politics</button> */}
      Enter a category :
      <input
        onChange={(e) => {
          setCategory(e.target.value);
        }}
        value={category}
      />
      <button onClick={fetchData}>Submit</button>
      {newsList.map((newsItem) => (
        <div key={newsItem.id}>
          {newsItem.title} | {newsItem.category}
          <hr />
        </div>
      ))}
    </>
  );
}

export async function getServerSideProps(ctx) {
  const { query } = ctx;
  const { category } = query;
  const qs = category ? "category=Politics" : "";
  const resp = await fetch(`http://localhost:5000/news/?${qs}`);
  const news = await resp.json();
  console.log("Page generation happening!!!");
  return {
    props: { news },
  };
}
