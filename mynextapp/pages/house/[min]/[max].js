import { useRouter } from "next/router";
import React from "react";

export default function Search() {
  const router = useRouter();
  const { min, max } = router.query;
  return (
    <h3>
      Showing houses in the budget range : {min} - {max}
    </h3>
  );
}
