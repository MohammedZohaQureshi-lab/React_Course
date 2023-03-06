import React from "react";

export default function Winner({ data, username }) {
  return (
    <div>
      <h3>Welcome {username}</h3>
      Lucky draw Winner : {data.results[0]?.name?.first}{" "}
      {data.results[0]?.name?.last}
    </div>
  );
}
export async function getServerSideProps(ctx) {
  const { req, res, params } = ctx;

  let username = req.cookies.username || "Guest";
  res.setHeader("Set-Cookie", ["username = Accenture"]);
  const resp = await fetch("https://randomuser.me/api");
  const data = await resp.json();

  return {
    props: {
      data,
      username,
    },
  };
}
