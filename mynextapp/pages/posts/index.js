import Link from "next/link";
import React from "react";
import Postdetail from "../../components/postdetail";

export default function Index({ posts }) {
  return (
    <>
      {posts.map((post) => (
        <div key={post.id}>
          {/* <Link href={`/posts/${post.title}`}>{post.title}</Link> */}
          <Postdetail post={post} />
          <hr />
        </div>
      ))}
    </>
  );
}

export async function getStaticProps() {
  const resp = await fetch("http://localhost:5000/posts/");
  const data = await resp.json();
  console.log("Fetching data");
  return {
    props: { posts: data },
    revalidate: 10,
  };
}
