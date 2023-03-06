import { useRouter } from "next/router";
import React from "react";

export default function Search() {
  const router = useRouter();
  const { params = [] } = router.query;
  if (params.length == 0) return <div>Your search for home ends here!!!</div>;
  else if (params.length == 3)
    return (
      <h1>
        Showing {params[0]}s in {params[1]} starting at {params[2]}{" "}
      </h1>
    );
  else if (params.length == 4)
    return (
      <h1>
        Showing {params[0]}s in {params[1]} starting at {params[2]} with{" "}
        {params[3]}
      </h1>
    );
  else if (params.length == 5)
    return (
      <h1>
        Showing {params[0]}s in {params[1]} starting at {params[2]} with{" "}
        {params[3]} and {params[4]} facing
      </h1>
    );
  return <h1>Invalid search</h1>;
}
