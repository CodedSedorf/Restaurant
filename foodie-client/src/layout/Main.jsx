import React from 'react'
// import MyNavbar from '../components/MyNavbar'
import Banner from '../components/Banner'
import Categories from '../components/Categories'
import SpecialDish from '../components/SpecialDish'
import Testimonial from '../components/Testimonial'
import Ourservices from '../components/Ourservices'
// import Footerzz from '../components/Footerzz'

const Main = () => {
  return (
    <div>
        {/* <MyNavbar/> */}
        <Banner/>
        <Categories/>
        <SpecialDish/>
        <Testimonial/>
        <Ourservices/>
        {/* <Footerzz/> */}
    </div>
  )
}

export default Main