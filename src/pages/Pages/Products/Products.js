/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import { products } from '../../../data.js';
import './Products.css';

const Products = () => {
    return (
        <div>
            <h2>Products Comp</h2>
            <div className="products">
            {
                products.map((product) => (
                    <div className="card card-content">
                         <img class="card-img-top" src={product.img} alt="Card image cap"/>
                        <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-text">{product.desc}</p>
                            <h5 className="card-title">{product.price}</h5>
                            <a href="#" className="btn btn-primary">Place Order</a>
                        </div>
                    </div>
                ))
            }
            </div>
        </div>
    )
}

export default Products;
