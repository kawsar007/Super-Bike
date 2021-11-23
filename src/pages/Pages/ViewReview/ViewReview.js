import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import '../../../css/Utilities.css';
import './ViewReview.css';

function ViewReview() {
    const [reviews, setReviews] = useState([]);
    console.log(reviews, "RR");
    useEffect(() => {
        axios.get('https://thawing-escarpment-88664.herokuapp.com/reviews')
        .then(res => {
            setReviews(res.data);
        })
    }, [])

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
      <div>
        <h2 className="title-header">Uesr Review</h2>
        <p className="review-here">You Can <Link to="/review"> Review Here...</Link></p>
        <div className="slide-card">
             <Slider {...settings}>
                 {reviews.map(review => (
                    <div key={review.id} className="single-card">
                        <h5>{review.name}</h5>
                        <p>{review.review}</p>
                        <p>{review.star}</p>
                    </div>
                 ))}
                
             </Slider>
        </div>
        </div>
    )
}

export default ViewReview;
