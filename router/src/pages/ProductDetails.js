import { Link, useParams } from "react-router-dom";


const ProductDetails = () => {
    const param = useParams();
    return (
        <>
            <h1>ProductDetails for</h1>
            <p>{param.productId}</p>
            <br />
            <div><Link to='..' relative='path'>Back With Relative Attribute</Link></div>
            <div><Link to='..'> Back Without Any Relative Attribute</Link></div>
        </>
    )
}

export default ProductDetails