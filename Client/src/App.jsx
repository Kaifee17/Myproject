import React from 'react'
import Contact from './pages/Contact'
import Services from './pages/Services/Services'
import About from './pages/About'
import Testimonials from './pages/Testimonials'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Layout/Navbar'
import Footer from './components/Layout/Footer'
import Login from './components/Auth/Login'
import Signup from '../src/components/Auth/Signup'
import CustomWebsiteDevelopment from './pages/Services/custom-website-development'
import Ecommerce from './pages/Services/EcommerceWebsiteDevelopment'
import Responsive from './pages/Services/ResponsiveWebDesign'
import CMS from './pages/Services/CMSDevelopment'
import Web from './pages/Services/WebApplicationDevelopment'
import Maintain from './pages/Services/WebsiteMaintenance'
import Request from './pages/RequestQuote'

const App = () => {
  return (
    
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/testimonials' element={<Testimonials/>} />
        <Route path = '/Login' element={<Login/>} />
        <Route path = '/signup' element={<Signup/>} />
        <Route path = '/services/custom-website-development' element={<CustomWebsiteDevelopment/>} />
        <Route path = '/services/ecommerce-website-development' element={<Ecommerce/>} />
        <Route path = '/services/responsive-web-design' element={<Responsive/>} />
        <Route path = '/services/cms-development' element={<CMS/>} /> 
        <Route path = '/services/web-application-development' element={<Web/>} />
        <Route path = '/services/website-maintenance' element={<Maintain/>} /> 
        <Route path = '/request-quote' element={<Request/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App