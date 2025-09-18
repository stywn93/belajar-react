import Product from "./Product.jsx";
import {useEffect, useRef, useState} from "react";

export default function ProductList() {
    const [load, setLoad] = useState(false);
    const [products, setProducts] = useState([]);

    function handleClick() {
        setLoad(true);
    }
    function handleClear() {
        setProducts([]);
        setLoad(false);
    }

    useEffect(() => {
        console.info("Call useEffect()");
        if (load) {
            fetch("/products.json")
                .then((response) => response.json())
                .then((data) => setProducts(data))
        }

        return () => {
            console.info("Product list component unmounted");
        }
    }, [load]);

    return (
        <>
            <h1>List of Products</h1>
            <button onClick={handleClick}>Load Products</button>
            <button onClick={handleClear}>Clear Products</button>
            {products.map(product => (
                <Product key={product.id} product={product}/>
            ))}
        </>
    )
}