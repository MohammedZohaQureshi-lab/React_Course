import React from "react";
import Link from "next/link";
import users from "./users.json";
export default function index() {
  return (
    <>
      {users.map((user) => (
        <>
          <Link key={user.id} href={`/users/${user.name}`}>
            {user.name}
          </Link>
          <hr />
        </>
      ))}
    </>
  );
}
