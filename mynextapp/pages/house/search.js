import { useRouter } from "next/router";
import React from "react";

export default function Search() {
  const router = useRouter();
  const { city, locality } = router.query;
  /* let template = <h1>Please specify city name</h1>;
  if (city) template= <h1>Showing houses in City : {city} </h1>;
  if (locality)
    template = (
      <h1>
        Showing houses in the locality {locality} of {city}
      </h1>
    );
  return template */

  return locality ? (
    <h1>
      Showing houses in the locality {locality} of {city}
    </h1>
  ) : city ? (
    <h1>Showing houses in City : {city} </h1>
  ) : (
    <h1>Please specify city name</h1>
  );
}
