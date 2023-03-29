import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();
    const navigateHandler = () => {
        navigate('products')
    }
    return (
        <>
            <h1>Home</h1>
            <div>
                <Link to='products'>Go to Products Page</Link>
            </div>
            <button onClick={navigateHandler}>Products List</button>
        </>
    )
}

export default Home