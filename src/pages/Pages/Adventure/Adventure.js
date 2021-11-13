import React from 'react';
import './Adventure.css';

const Adventure = () => {
    return (
        <div className="adventure">
            <div className="adventure-left">
               <img src="images/about-image.jpg" alt=""/>
            </div>
            <div className="adventure-right">
                <h1 className="adventure-title">Best Adventure <br/> Tourer Bikes</h1>
                <p className="adventure-para">If you and your significant other are on different ends of the movie-watching spectrum, I have good news. Stellar action and adventure elements can turn a good movie into something really special. </p>
                <div className="adventure-image">
                    <img src="images/about-1.jpg" alt=""/>
                    <img src="images/about-2.jpg" alt=""/>
                    <img src="images/about-3.jpg" alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Adventure;
