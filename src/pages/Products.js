import React from 'react'
import Footer from '../components/Footer/Footer';
import About from '../components/About/About';
import Banner from '../components/LandingPage/Banner';
import PauseOnHover from '../components/slider/PauseOnHover';
import Home from './Home';
import Loader from '../layout/Loader'
import MetaData from '../layout/MetaData';
import Navbartest from '../components/navbar/Navbartest';
import Subnavbar from '../components/LandingPage/Subnavbar';

const Products = ({user}) => {

  return (
    <>
      <MetaData title="ECOMMERCE" />
      <Navbartest 
       user={user}></Navbartest>
      <Subnavbar></Subnavbar>
      <div className="landing-page-hero">
        <PauseOnHover />
      </div>
      {/* <Banner></Banner> */}
      <Home></Home>
      <About></About>
      <Footer></Footer>
    </>
  )
}

export default Products