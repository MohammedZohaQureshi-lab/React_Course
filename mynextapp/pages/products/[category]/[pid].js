import { useRouter } from "next/router";
import React from "react";

export default function Product() {
  const router = useRouter();

  return <div>Showing Product : {router.query.pid}</div>;
}
