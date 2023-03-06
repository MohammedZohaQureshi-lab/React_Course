import useSWR from "swr";
import React from "react";

export default function Books() {
  const fetcher = async (...args) => {
    const resp = await fetch(...args);
    return resp.json();
  };
  const {
    data: books,
    error,
    isLoading,
  } = useSWR("http://localhost:5000/books", fetcher);

  if (error) return <div>Failed</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}> {book.title}</li>
      ))}
    </ul>
  );
}
