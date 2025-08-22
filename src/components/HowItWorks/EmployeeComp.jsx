import React from 'react'
import { base_url } from '../../config';

const EmployeeComp = () => {
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
                            <h1 className="display-4 text-white animated zoomIn">For Employee</h1>
                            <a href="#" className="h5 text-white">Home</a>
                            <i className="far fa-circle text-white px-2"></i>
                            <a href="#" className="h5 text-white">For Employee</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Navbar End */}

            {/* InsureTech & Flex Solution Start */}
            <div className="container-fluid py-5 fade-in-section bg-light mt-4" style={{ backgroundImage:`url('${base_url}/assets/img/website_images/9b3e44eb-a187-407f-9a3f-48835cfb7d71.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', }}>
                <div className="container py-5">
                    <div className="row align-items-center">
                        <div className="col-lg-6 fade-in-left">
                            <div className="border-start border-4 border-primary ps-4 mb-4">
                                <h2 className="fw-bold mb-3" style={{ color: "#3A2351" }}>
                                    Access your benefits in just a few clicks.
                                    You can manage your policies and health records on your finger tips by uing our mobile app
                                </h2>
                            </div>
                        </div>
                        <div className="col-lg-6 text-center fade-in-right">
                            <img src={`${base_url}/assets/img/website_images/employee_01.png`} alt="Insurtech" className="img-fluid" style={{ maxHeight: "400px" }} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid py-5 fade-in-section bg-light mt-4" style={{ backgroundImage:`url('${base_url}/assets/img/website_images/9b3e44eb-a187-407f-9a3f-48835cfb7d71.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', }}>
                <div className="container py-5">
                    <div className="row align-items-center mt-5">
                        <div className="col-lg-6 text-center fade-in-left">
                            <img src={`${base_url}/assets/img/website_images/employee_02.png`} alt="Flex" className="img-fluid" style={{ maxHeight: "400px" }} />
                        </div>
                        <div className="col-lg-6 fade-in-right">
                            <div className="border-start border-4 border-primary ps-4 mb-4">
                                <h2 className="fw-bold mb-3" style={{ color: "#3A2351" }}>
                                    Get Subscription Plan
                                </h2>
                                <p className="mb-4 p" style={{ textAlign: "justify" }}>
                                    Choose the subscription plan that suits your needs. The Basic Plan offers essential features, while the Standard Plan enhances your experience with added benefits. For the ultimate experience, upgrade to our Premium Plan and unlock exclusive features and premium content. Subscribe now and elevate your experience to the next level.                
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid py-5 fade-in-section bg-light mt-4" style={{ backgroundImage: `url('${base_url}/assets/img/website_images/9b3e44eb-a187-407f-9a3f-48835cfb7d71.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', }}>
                <div className="container py-5">
                    <div className="row align-items-center mt-4">
                        <div className="col-lg-6 fade-in-left">
                            <div className="border-start border-4 border-primary ps-4 mb-4">
                                <h2 className="fw-bold mb-3" style={{ color: "#3A2351" }}>
                                    Online Appointment
                                </h2>
                                <p className="mb-4 p" style={{ textAlign: "justify" }}>
                                    Easily schedule and manage your appointments online, view available slots, and choose your preferred time. Stay on top of your wellness journey effortlessly with our user-friendly platform. Book your next appointment with ease keep access of your past appointments and embrace your well-being.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6 text-center fade-in-right">
                            <img src={`${base_url}/assets/img/website_images/employee_03.png`} alt="Insurtech" className="img-fluid" style={{ maxHeight: "400px" }} />
                        </div>
                    </div>
                </div>
            </div>
            {/* InsureTech & Flex Solution End */}
        </>
    )
}

export default EmployeeComp