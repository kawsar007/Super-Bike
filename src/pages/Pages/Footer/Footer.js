import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <img src="images/logo.png" alt="Logo" className="logo"/>
                    <p className="f-para">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. The standard chunk of Lorem Ipsum</p>
                </div>
                <div className="footer-item">
                    <div>
                        <h3>Shop By </h3>
                        <p>Your Orders</p>
                        <p>Your Wishlist</p>
                        <p>Payment</p>
                        <p>Delivery</p>
                        <p>Conditions</p>
                    </div>
                    <div>
                        <h3>Products </h3>
                        <p>Prices drop</p>
                        <p>New products</p>
                        <p>Best sales</p>
                        <p>Stores</p>
                        <p>Login</p>
                    </div>
                    <div>
                        <h3>Our Company</h3>
                        <p>About us</p>
                        <p>Contact us</p>
                        <p>Sitemap</p>
                        <p>Delivery</p>
                        <p>Stores</p>
                    </div>




                    <div>
                        <h3>Contact</h3>
                        <p>44 Shirley Ave, West Chicago,<br/> IL 60185 Angelo</p>
                        <p>0123 456 789</p>
                        <p>Dixit0611@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>Copyright © 2021-present Magento, Inc. All rights reserved.</p>
                <div className="payment-btn">
                    <img src="images/payment1.png" alt=""/>
                    <img src="images/payment2.png" alt=""/>
                    <img src="images/payment3.png" alt=""/>
                    <img src="images/payment4.png" alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Footer;
