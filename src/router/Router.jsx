import React from 'react'
import { Route, Routes } from "react-router-dom";
import Footer from '../layouts/Footer/Footer';
import Navbar from '../layouts/Navbar/Navbar';
import Home from '../pages/Home';
import Testimonial from '../pages/Testimonial';
import About from '../pages/About';
import Technology from '../pages/Technology';
import DigitalMarketing from '../pages/DigitalMarketing';
import Consulting from '../pages/Consulting';
import InsureTech from '../pages/InsureTech';
import HealthTech from '../pages/HealthTech';
import FlexSolution from '../pages/FlexSolution';
import LeaderShip from '../pages/LeaderShip';
import Contact from '../pages/Contact';
import Employee from '../pages/Employee';
import Employer from '../pages/Employer';

const Router = () => {
  return (
        <>
            <Navbar/>
                <Routes>
                    <Route path='/' element={<Home />} />
                    {/* <Route path='testimonial' element={<Testimonial />} /> */}
                    <Route path='/about' element={<About />} />
                    <Route path='/leadership' element={<LeaderShip />} />
                    <Route path='/technology' element={<Technology />} />
                    <Route path='/digital-marketing' element={<DigitalMarketing />} />
                    <Route path='/consulting' element={<Consulting />} />
                    <Route path='/insuretech' element={<InsureTech />} />
                    <Route path='/healthtech' element={<HealthTech />} />
                    <Route path='/flex-solution' element={<FlexSolution />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/employee' element={<Employee />} />
                    <Route path='/employer' element={<Employer />} />
                </Routes>
            <Footer />
        </>  
    )
}

export default Router