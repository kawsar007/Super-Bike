import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import './ViewReview.css';

function ViewReview() {
    const [reviews, setReviews] = useState([]);
    console.log(reviews, "RR");
    useEffect(() => {
        axios.get('http://localhost:5000/reviews')
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
        <div className="slide-card">
            <h2>Reviews</h2>
             <Slider {...settings}>
                 {reviews.map(review => (
                    <div className="single-card">
                        <h3>{review.name}</h3>
                        <p>{review.review}</p>
                        <p>{review.star}</p>
                    </div>
                 ))}
                
             </Slider>
        </div>
    )
}

export default ViewReview;
