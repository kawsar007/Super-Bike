import React from 'react';
import './Newsletter.css';

const Newsletter = () => {
    return (
        <div className="newsletter">
            <div className="newsletter-left">
                <div className="newsletterLogo">
                    <img src="images/newsletter.PNG" alt="" />
                </div>
                <div className="newsletterLogo">
                    <p>Enter Your Email And Well Send You A Coupon<br /> With 10 Off Your Next Order</p>
                </div>
            </div>
            <div className="newsletter-right">
                <div class="mb-3">
                    <input type="text" class="form-control" id="" placeholder="Enter Your Email"/>
                </div>
            </div>
        </div>
    )
}

export default Newsletter;
