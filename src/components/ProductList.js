import { useEffect, useState } from "react"

export const ProductList = () => {
    const [products,setProducts] = useState([]);
    const [url,setUrl] = useState("http://localhost:8000/products");

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch(url);
            const data = await response.json();
            setProducts(data);
        }
        fetchProducts();
    },[url])

    return (
        <section>
            <div className="filter">
                <button onClick={() => setUrl("http://localhost:8000/products")}>All</button>
                <button onClick={() => setUrl("http://localhost:8000/products?in_stock=true")}>In Stock only</button>
            </div>
           
            {products.map((product) => (
               <div className="card" key={product.id}>
                    <p className="id">{product.id}</p>
                    <p className="name">{product.name}</p>
                    <p className="info">
                        <span>${product.price}</span>
                        <span className={product.in_stock ? "instock" : "unavailable"}>{product.in_stock ? "In stock" : "Unavailable"}</span>
                    </p>
               </div> 
            ))}
        </section>
    )
}