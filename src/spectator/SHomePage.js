import React from 'react'
import './SHomePage.css'
import MetaData from '../layout/MetaData'
import PauseOnHover from '../components/slider/PauseOnHover'
import Banner from '../components/LandingPage/Banner'
import About from '../components/About/About'
import Footer from '../components/Footer/Footer'
import SpectatorProduct from './SpectatorProduct'

const SHomePage = () => {

    return (
        <div className='SpecttorHomePage'>
            <MetaData title="ECOMMERCE" />
            <div className="landing-page-hero">
                <PauseOnHover />
            </div>
            {/* <Banner></Banner> */}
            <SpectatorProduct></SpectatorProduct>
            <About></About>
            <Footer></Footer>

        </div>
    )
}

export default SHomePage