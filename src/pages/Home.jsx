import React from 'react'

import HeroSection from '../components/Home/HeroSection'
import Testimonials from '../components/Home/Testimonials'
import CTASection from '../components/Home/CTASection'
import ContactForm from '../components/Contact/ContactForm'
import Footer from '../components/Layout/Footer'
import Navbar from '../components/Layout/Navbar'
import PortfolioSlider from '../components/Portfolio/PortfolioSlider'

const Home = () => {
  return (
    <>
      <Navbar/>
      <HeroSection  />
      <PortfolioSlider items={3} />
      <CTASection />
      <Testimonials />
      <ContactForm />

      
    </>
  )
}

export default Home
