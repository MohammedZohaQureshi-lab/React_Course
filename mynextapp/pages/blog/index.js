import React from "react";
import { useRouter } from "next/router";
export default function Index() {
  const router = useRouter();
  const back = () => {
    router.push("/");
  };
  return (
    <>
      <div>Blog Home Page</div>
      <button onClick={back}>Back to home</button>
    </>
  );
}
