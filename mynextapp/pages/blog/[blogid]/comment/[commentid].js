import { useRouter } from "next/router";
import React from "react";

export default function Comment() {
  const router = useRouter();
  const {
    query: { blogid, commentid },
  } = router;

  return (
    <div>
      Blog with Id : {blogid} and Comment with Id : {commentid}
    </div>
  );
}
