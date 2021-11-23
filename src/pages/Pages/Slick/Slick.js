import React from 'react';
import Slider from "react-slick";
import { SlickImg } from '../../../data.js';
import './Slick.css';
console.log(SlickImg, "SlickImg");
function Slick() {
    // const play = () => {
    //     this.slider.slickPlay();
    // }
    // const pause = () => {
    //     this.slider.slickPause();
    // }
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 4,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 3
              }
            },
            {
              breakpoint: 400,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 2
              }
            }
          ]
    };
    return (
        <div>
            <Slider {...settings}>
                {SlickImg.map(item => (
                    <div className="slick-img" key={item.id}>
                        <img src={item.img} alt="Image" />
                    </div>
                ))}
                {/* <div>
              {SlickImg.map(item => (
                  <img src={item.img} alt="Image"/>
              )}
            
          </div> */}

            </Slider>
            {/* <div className="btn-group" style={{ textAlign: "center" }}>
                <button className="button" onClick={play}>
                    Play
                </button>
                <button className="button" onClick={pause}>
                    Pause
                </button>
            </div> */}
        </div>
    )
}

export default Slick
