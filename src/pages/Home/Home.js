import React from 'react'
import HomeProduct from '../HomeProduct/HomeProduct'
import AddBanner from '../Pages/AddBanner/AddBanner'
import Adventure from '../Pages/Adventure/Adventure'
import Banner from '../Pages/Banner/Banner'
import Slick from '../Pages/Slick/Slick'
import ViewReview from '../Pages/ViewReview/ViewReview'

const Home = () => {
    return (
        <div>
            <Banner/>
            <Adventure/>
            <HomeProduct/>
            <AddBanner/>
            <ViewReview/>
            <Slick/>
        </div>
    )
}

export default Home;
