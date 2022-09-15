import React from 'react'
import Category from '../components/Category/Category'
import { useLocation } from 'react-router-dom'
import MetaData from '../layout/MetaData'
import Navbartest from '../components/navbar/Navbartest'
import Subnavbar from '../components/LandingPage/Subnavbar'
const CategoryDisplayPage = ({user}) => {
  const location = useLocation()
  const newdata = location.state.value
  console.log(newdata)
  return (
    <>
      <MetaData title="PRODUCTS -- ECOMMERCE" />
      <Navbartest 
       user={user}></Navbartest>
      <Subnavbar></Subnavbar>
      <div className='CategoryContainer'>
        <h1 style={{ textAlign: 'center', marginBottom: "20px" }}>Explore the Trending item in this category!</h1>
        <Category data={newdata}></Category>

      </div>
    </>
  )
}

export default CategoryDisplayPage