import React, { useEffect, useState } from "react";

export default function Books() {
  const [isLoading, setLoading] = useState(true);
  const [books, setBooks] = useState([]);
  const getData = async () => {
    const resp = await fetch("http://localhost:5000/books");
    setBooks(await resp.json());
    setLoading(false);
  };
  useEffect(() => {
    getData();
  }, []);
  if (isLoading) return <div>Loading data....</div>;
  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}> {book.title}</li>
      ))}
    </ul>
  );
}
