import { useRouter } from "next/router";
import React from "react";

export default function Search() {
  const router = useRouter();
  const { min } = router.query;
  return (
    <div>
      <h3>Showing houses with the starting price : {min}</h3>
    </div>
  );
}
