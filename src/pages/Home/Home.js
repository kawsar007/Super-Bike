import React from 'react'
import Adventure from '../Pages/Adventure/Adventure'
import Banner from '../Pages/Banner/Banner'
import Products from '../Pages/Products/Products'
import Review from '../Pages/Review/Review'

const Home = () => {
    return (
        <div>
            <Banner/>
            <Adventure/>
            <Products/>
            <Review/>
        </div>
    )
}

export default Home;
