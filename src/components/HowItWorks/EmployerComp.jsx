import React from 'react'
import { base_url } from '../../config';


const EmployerComp = () => {
  return (
            <>
            {/* Navbar Start */}
            <div className="container-fluid position-relative p-0">
                <nav className="navbar navbar-expand-lg navbar-dark px-5 py-3 py-lg-0">
                    <a href={`${base_url}/`} className="navbar-brand p-2">
                    <img src={`${base_url}/assets/img/logo29.png`} alt="Logo" style={{ height: "80px" }} />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="fa fa-bars"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0">
                        <a href={`${base_url}/`} className="nav-item nav-link">Home</a>
                        <div className="nav-item dropdown">
                        <a href={`${base_url}/about`} className="nav-link dropdown-toggle text-black" data-bs-toggle="dropdown">About </a>
                        <div className="dropdown-menu m-0">
                            <a href={`${base_url}/about`} className="dropdown-item text-black">About Us</a>
                            <a href={`${base_url}/leadership`} className="dropdown-item text-black">Our Leadership</a>
                        </div>
                        </div>
                        <div className="nav-item dropdown">
                            <a href={`${base_url}/employeeBenefit-portal`} className="nav-link dropdown-toggle text-black" data-bs-toggle="dropdown">Products</a>
                            <div className="dropdown-menu m-0">
                                <a href={`${base_url}/employeeBenefit-portal`} className="dropdown-item text-black">Employee Benefits Portal(Phillip)</a>
                                <a href={`${base_url}/broker-one`} className="dropdown-item text-black">BrokerOne Solution </a>
                                <a href={`${base_url}/flex-benefit`} className="dropdown-item text-black">Flex Benefits System</a>
                                <a href={`${base_url}/quote-master`} className="dropdown-item text-black">QuoteMaster360</a>
                            </div>
                        </div>
                        <div className="nav-item dropdown">
                        <a href={`${base_url}/technology`} className="nav-link dropdown-toggle text-black" data-bs-toggle="dropdown">Solutions</a>
                        <div className="dropdown-menu m-0">
                            <a href={`${base_url}/insuretech`} className="dropdown-item text-black">InsurTech Solutions</a>
                            <a href={`${base_url}/employee-benefit`} className="dropdown-item text-black">Employee Benefits Platform (ZoyaCube)</a>
                            <a href={`${base_url}/retail-solution`} className="dropdown-item text-black">Retail Solutions</a>
                        </div>
                        </div>
                        <div className="nav-item dropdown">
                        <a href={`${base_url}/employee`} className="nav-link dropdown-toggle text-black" data-bs-toggle="dropdown">How It Works</a>
                        <div className="dropdown-menu m-0">
                            <a href={`${base_url}/employee`} className="dropdown-item text-black">For Employee</a>
                            <a href={`${base_url}/employer`} className="dropdown-item text-black">For Employer</a>
                        </div>
                        </div>
                    </div>
                        <a href={`${base_url}/contact`} className="btn btn-primary py-2 px-4 ms-3 border-0 hover-blue" style={{backgroundColor:'#ff9800'}}>Get In Touch</a>
                    </div>
                </nav>

                <div
                    className="container-fluid py-5"
                    style={{
                        marginBottom: "90px",
                        backgroundImage: `url('${base_url}/assets/img/website_images/image (1).jpg')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        height: "450px"
                    }}
                >
                    <div className="row py-5">
                        <div className="col-12 pt-lg-5 mt-lg-5 text-center">
                            <h1 className="display-4 text-white animated zoomIn">For Employer</h1>
                            <a href="#" className="h5 text-white">Home</a>
                            <i className="far fa-circle text-white px-2"></i>
                            <a href="#" className="h5 text-white">For Employer</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Navbar End */}

            {/* InsureTech & Flex Solution Start */}
            <div className="container-fluid py-5 fade-in-section bg-light mt-4" style={{ backgroundImage: `url('${base_url}/assets/img/website_images/9b3e44eb-a187-407f-9a3f-48835cfb7d71.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', }}>
                <div className="container py-5">
                    <div className="row align-items-center">
                        <div className="col-lg-6 fade-in-left">
                            <div className="border-start border-4 border-primary ps-4 mb-4">
                                <h2 className="fw-bold mb-3" style={{ color: "#3A2351" }}>
                                    Access your benefits in just a few clicks.
                                    You can manage your policies and health records at your finger tips by using our mobile app
                                </h2>
                            </div>
                        </div>
                        <div className="col-lg-6 text-center fade-in-right">
                            <img src={`${base_url}/assets/img/website_images/employer_01.png`} alt="Insurtech" className="img-fluid" style={{ maxHeight: "400px" }} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid py-5 fade-in-section bg-light mt-4" style={{ backgroundImage: `url('${base_url}/assets/img/website_images/9b3e44eb-a187-407f-9a3f-48835cfb7d71.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', }}>
                <div className="container py-5">
                    <div className="row align-items-center mt-5">
                        <div className="col-lg-6 text-center fade-in-left">
                            <img src={`${base_url}/assets/img/website_images/employer_02.png`} alt="Flex" className="img-fluid" style={{ maxHeight: "400px" }} />
                        </div>
                        <div className="col-lg-6 fade-in-right">
                            <div className="border-start border-4 border-primary ps-4 mb-4">
                                <h2 className="fw-bold mb-3" style={{ color: "#3A2351" }}>
                                    Add Member
                                </h2>
                                <p className="mb-4 p" style={{ textAlign: "justify" }}>
                                    Ensure the security and peace of mind by adding a nominee to your wellness subscription plan. By designating a trusted person, you can ensure that they will have access to your benefits and support in case of any unforeseen circumstances. Prioritize your well-being and protect your loved ones today.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid py-5 fade-in-section bg-light mt-4" style={{ backgroundImage:`url('${base_url}/assets/img/website_images/9b3e44eb-a187-407f-9a3f-48835cfb7d71.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', }}>
                <div className="container py-5">
                    <div className="row align-items-center mt-4">
                        <div className="col-lg-6 fade-in-left">
                            <div className="border-start border-4 border-primary ps-4 mb-4">
                                <h2 className="fw-bold mb-3" style={{ color: "#3A2351" }}>
                                    Employee Benefit
                                </h2>
                                <p className="mb-4 p" style={{ textAlign: "justify" }}>
                                    Employee benefits Offer generous leave policies, HRA for affordable housing, paid holidays for work-life balance, comprehensive insurance coverage, and free professional development sessions to foster growth. Invest in your employees' well-being and watch your organization thrive.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 text-center fade-in-right">
                            <img src={`${base_url}/assets/img/website_images/employer_03.png`} alt="Insurtech" className="img-fluid" style={{ maxHeight: "400px" }} />
                        </div>
                    </div>
                </div>
            </div>
            {/* InsureTech & Flex Solution End */}
            

        </>
  )
}

export default EmployerComp