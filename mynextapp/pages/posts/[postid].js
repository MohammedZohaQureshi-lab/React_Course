import React from "react";
import { useRouter } from "next/router";
export default function Post({ post }) {
  const router = useRouter();
  /* if (router.isFallback) {
    return <h1>Loading....</h1>;
  } */
  return (
    <div>
      Post : {post.id}|{post.userId}|{post.title}
    </div>
  );
}

export async function getStaticProps(context) {
  const { params } = context;
  const resp = await fetch(`http://localhost:5000/posts/${params.postid}`);
  const data = await resp.json();
  console.log("Fetching data");
  if (!data.id) {
    return { notFound: true };
  }
  return {
    props: { post: data },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const resp = await fetch("http://localhost:5000/posts/");
  const posts = await resp.json();
  const paths = posts.map((post) => ({
    params: { postid: `${post.id}` },
  }));
  return { paths, fallback: false };
  /*  return {
    paths: [
      { params: { postid: "1" } },
      { params: { postid: "2" } },
      { params: { postid: "3" } },
    ],
    fallback: "blocking",
  }; */
}
