import { useRouter } from "next/router";
import React from "react";

export default function Blog() {
  const router = useRouter();
  const { query } = router;
  console.log(query);
  return <div>Blog with Id : {query.blogid}</div>;
}
