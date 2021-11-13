import React from 'react'
import HomeProduct from '../HomeProduct/HomeProduct'
import Adventure from '../Pages/Adventure/Adventure'
import Banner from '../Pages/Banner/Banner'
import ViewReview from '../Pages/ViewReview/ViewReview'

const Home = () => {
    return (
        <div>
            <Banner/>
            <Adventure/>
            <HomeProduct/>
            <ViewReview/>
        </div>
    )
}

export default Home;
