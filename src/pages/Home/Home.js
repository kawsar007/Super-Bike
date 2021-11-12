import React from 'react'
import HomeProduct from '../HomeProduct/HomeProduct'
import Adventure from '../Pages/Adventure/Adventure'
import Banner from '../Pages/Banner/Banner'
import Review from '../Pages/Review/Review'

const Home = () => {
    return (
        <div>
            <Banner/>
            <Adventure/>
            <HomeProduct/>
            <Review/>
        </div>
    )
}

export default Home;
