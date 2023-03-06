import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
export default function User() {
  const { username } = useRouter().query;
  return (
    <>
      <div>Welcome {username}!!!</div>
      <Link href="/users">Back </Link>
    </>
  );
}
