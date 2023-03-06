import { useRouter } from "next/router";
import React from "react";

export default function Catchall() {
  const router = useRouter();
  const { params = [] } = router.query;
  console.log(params);
  return (
    <div>
      {params.map((param, index) => (
        <li key={index}>{param}</li>
      ))}
    </div>
  );
}
