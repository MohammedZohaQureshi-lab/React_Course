import React, { useEffect, useState } from "react";

export default function Toodo() {
    const [isLoading, setLoading] = useState(true);
    const [todo, setBooks] = useState([]);
    const getData = async () => {
        const resp = await fetch('http://localhost:5000/todo');
        setBooks(await resp.json());
        setLoading(false);
    };
    useEffect(() => {
        getData();
    }, []);
    if (isLoading) return <div>Loading data....</div>;
    return todo.map((item) => (
        <h3 key={item.id}>{item.id} - {item.title} ---- {item.completed ? "Complete" : "Pending"} </h3>
    ));
}
