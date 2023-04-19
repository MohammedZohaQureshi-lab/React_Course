import './Products.scss'
import { useEffect, useState } from 'react';
import FilterSearchTable from '../dataTable/FilterSearchTable';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('https://fakestoreapi.com/products');
            if (!response.ok) {
                throw new Error('Something went wrong!');
            }
            const responseData = await response.json();

            for (const key in responseData) {
                responseData[key].count = responseData[key].rating.count
            }
            debugger
            setProducts(responseData)
        };

        fetchProducts().catch((error) => {
            debugger;
            console.log(error.message)
        });
    }, []);

    const useColumns = [
        { Header: 'Title', accessor: 'title' },
        {
            Header: 'Image', accessor: 'image',
            Cell: (props) => (
                <div className='producItem'>
                    <span className='producItem-image'><img alt={`${props.row.original.title} sample pic`} src={props.row.original.image} /></span>
                </div>
            )
        },
        { Header: 'Category', accessor: 'category' },
        {
            Header: 'Price', accessor: 'price',
            Cell: (props) => (
                <span>${props.row.original.price}</span>
            )
        },
        { Header: 'Description', accessor: 'description' },
        { Header: 'Available', accessor: 'count' },
    ];

    return (
        <div>
            {products.length > 0 && <FilterSearchTable currentPageSize={5} currentPageIndex={0} useRows={products} useColumns={useColumns} />}
        </div>
    )
}

export default Products