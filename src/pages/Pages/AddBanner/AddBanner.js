import React from 'react';
import './AddBanner.css';

function AddBanner() {
    return (
        <div className="my-container">
        <div className="add-banner">
            <div className="leftBanner">
                <img src="images/left-banner.jpg" alt="banner"/>
            </div>
            <div className="rightBanner">
            <img src="images/right-banner.jpg" alt="banner"/>
            </div>
        </div>
        </div>
    )
}

export default AddBanner
