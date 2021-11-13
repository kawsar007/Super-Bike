/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Products.css';

const Products = () => {
    const [products, setProducts] = useState([]);

    // console.log(products, "Products");

    useEffect(() =>{
        fetch('https://thawing-escarpment-88664.herokuapp.com/products')
         .then(res => res.json())
         .then(data => setProducts(data));
    }, []);

    return (
        <div>
            <h2 className="title-header">Products</h2>
            <div className="products">
            {
                products.map((product) => (
                    <div key={product._id} className="card card-content">
                         <img class="card-img-top" src={product.img} alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-text">{product.desc}</p>
                            <h5 className="card-title">{product.price}</h5>
                            <Link to="/purchase" className="btn btn-primary">Place Order</Link>
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
    )
}

export default Products;
