import './Products.scss'
import { useEffect, useState } from 'react';
import Items from './Item';
import { NumberRangeColumnFilter, SelectColumnFilter } from '../table/FilterOptions';

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('https://dummyjson.com/products');
            if (!response.ok) {
                throw new Error('Something went wrong!');
            }
            const { products: responseData } = await response.json();

            setProducts(responseData)
        };

        fetchProducts().catch((error) => {
            alert(error.message)
        });
    }, []);

    const useColumns = [
        { Header: 'Title', accessor: 'title' },
        // {
        //     Header: 'Image', accessor: 'image',
        //     Cell: (props) => (
        //         <div className='producItem'>
        //             <span className='producItem-image'><img alt={`${props.row.original.title} sample pic`} src={props.row.original.image} /></span>
        //         </div>
        //     )
        // },
        { Header: 'Category', accessor: 'category', Filter: SelectColumnFilter,filter:'includes' },
        {
            Header: 'Price', accessor: 'price', Filter: NumberRangeColumnFilter,filter: 'between',
            Cell: (props) => (
                <span>${props.row.original.price}</span>
            )
        },
        { Header: 'Description', accessor: 'description', disableFilters: true },
        { Header: 'Available', accessor: 'stock', disableFilters: true },
    ];

    return (
        <div>
            {products.length > 0 && <>
                {/* <FilterSearchTable currentPageSize={5} currentPageIndex={0} useRows={products} useColumns={useColumns} /> */}
                <Items useColumns={useColumns} useRows={products} />
            </>}
        </div>
    )
}

export default Products