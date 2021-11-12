import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';
const Banner = () => {
    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://wallpapercave.com/wp/wp7939865.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h1>Electric And City Bike.</h1>
        <p>Electric Bikes, Road bikes, Hybrid Bikes, Fat Bikes</p>
        <Link to="/products">
        <button type="button" className="btn btn-outline-danger">Explore More</button>
        </Link>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://www.flywheels.com.au/wp-content/uploads/2019/01/wp3647894.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h1>Largest Bicycle Manufacture</h1>
        <p>Checkout out our exclusive collection of mountain bikes, city bikes, Girls bikes and more.</p>
        <Link to="/products"> <button type="button" className="btn btn-outline-danger">Explore More</button></Link>
      </div>
    </div>
    <div className="carousel-item">
      <img src="https://wallpaperaccess.com/full/245503.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h1>Buy best bike online for man & women and Children.</h1>
        <p>Up to 80% off on bikes.</p>
       <Link to="/products"> <button type="button" className="btn btn-outline-danger">Explore More</button></Link>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </div>
    )
}

export default Banner;
