import React from 'react'
import MyNavbar from '../components/MyNavbar'
import Banner from '../components/Banner'
import Categories from '../components/Categories'
import SpecialDish from '../components/SpecialDish'

const Main = () => {
  return (
    <div>
        <MyNavbar/>
        <Banner/>
        <Categories/>
        <SpecialDish/>
        <footer>Footer</footer>
    </div>
  )
}

export default Main