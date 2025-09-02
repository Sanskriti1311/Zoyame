import React from 'react'
import { Route, Routes } from "react-router-dom";
import Footer from '../layouts/Footer/Footer';
import Navbar from '../layouts/Navbar/Navbar';
import Home from '../pages/Home';
import About from '../pages/About';
import LeaderShip from '../pages/LeaderShip';
import Contact from '../pages/Contact';
import Employee from '../pages/Employee';
import Employer from '../pages/Employer';
import InsureTech from '../pages/InsureTech';
import EmployeeBenefit from '../pages/EmployeeBenefit';
import RetailSolution from '../pages/RetailSolution';
import EmployeeBenefitPortal from '../pages/EmployeeBenefitPortal';
import BrokerOne from '../pages/BrokerOne';
import FlexBenefits from '../pages/FlexBenefits';
import QuoteMaster from '../pages/QuoteMaster';
import RetailSolutionProduct from '../pages/RetailSolutionProduct';

const Router = () => {
  return (
        <>
            <Navbar/>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/leadership' element={<LeaderShip />} />

                    {/* Our Products */}
                    <Route path='/employeeBenefit-portal' element={<EmployeeBenefitPortal />} />
                    <Route path='/broker-one' element={<BrokerOne />} />
                    <Route path='/flex-benefit' element={<FlexBenefits />} />
                    <Route path='/quote-master' element={<QuoteMaster />} />
                    <Route path='/retailSolution-product' element={<RetailSolutionProduct />} />


                    {/* Our Solutions */}
                    <Route path='/insuretech' element={<InsureTech />} />
                    <Route path='/employee-benefit' element={<EmployeeBenefit />} />
                    <Route path='/retail-solution' element={<RetailSolution />} />

                    <Route path='/contact' element={<Contact />} />
                    <Route path='/employee' element={<Employee />} />
                    <Route path='/employer' element={<Employer />} />

                </Routes>
            <Footer />
        </>  
    )
}

export default Router