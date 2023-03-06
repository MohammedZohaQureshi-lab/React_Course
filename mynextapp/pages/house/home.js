import React from "react";
import Link from "next/link";
export default function index() {
  return (
    <>
      <div>Your search for home ends here!!!</div>
      <Link href="/" replace>Back to Home Page</Link>
    </>
  );
}
