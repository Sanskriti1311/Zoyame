import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import './About.scss';
import TestimonialComp from '../Testimonial/TestimonialComp';
import { base_url } from '../../config';

const AboutUsComp = () => {
  const navigate = useNavigate();

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
            {/* <a href="/about" className="nav-item nav-link text-black">About</a> */}
            <div className="nav-item dropdown">
                <a href={`${base_url}/about`} className="nav-link dropdown-toggle text-black" data-bs-toggle="dropdown">About </a>
                <div className="dropdown-menu m-0">
                  <a href={`${base_url}/about`} className="dropdown-item text-black">About Us</a>
                  <a href={`${base_url}/leadership`} className="dropdown-item text-black">Our Leadership</a>
                </div>
              </div>
            <div className="nav-item dropdown">
              <a href={`${base_url}/technology`} className="nav-link dropdown-toggle text-black" data-bs-toggle="dropdown">Services</a>
              <div className="dropdown-menu m-0">
                <a href={`${base_url}/technology`} className="dropdown-item text-black">Technology</a>
                <a href={`${base_url}/digital-marketing`} className="dropdown-item text-black">Digital Marketing</a>
                <a href={`${base_url}/consulting`} className="dropdown-item text-black">Consulting & Analytics</a>
                <a href={`${base_url}/insuretech`} className="dropdown-item text-black">InsureTech</a>
                <a href={`${base_url}/healthtech`} className="dropdown-item text-black">HealthTech</a>
                <a href={`${base_url}/flex-solution`} className="dropdown-item text-black">Flex Solution</a>
              </div>
            </div>
            <div className="nav-item dropdown">
              <a href={`${base_url}/employee`} className="nav-link dropdown-toggle text-black" data-bs-toggle="dropdown">How It Works</a>
              <div className="dropdown-menu m-0">
                <a href={`${base_url}/employee`} className="dropdown-item text-black">For Employee</a>
                <a href={`${base_url}/employer`} className="dropdown-item text-black">For Employer</a>
              </div>
            </div>
            {/* <a href="/contact" className="btn btn-primary py-2 px-4 ms-3">Get In Touch</a> */}
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
            height:"450px"
          }}
        >
          <div className="row py-5">
            <div className="col-12 pt-lg-5 mt-lg-5 text-center">
              <h1 className="display-4 text-white animated zoomIn">About Us</h1>
              <a href="#" className="h5 text-white">Home</a>
              <i className="far fa-circle text-white px-2"></i>
              <a href="#" className="h5 text-white">About</a>
            </div>
          </div>
        </div>
      </div>
      {/* Navbar End */}

      {/* About Us Section Start */}
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="row g-5 align-items-center">

            {/* Text Section */}
            <div className="col-lg-7">
              <div className="section-title position-relative pb-3 mb-4">
                <h5 className="fw-bold text-uppercase" style={{ color: "#65518c" }}>
                  About Us
                </h5>
                <h1 className="mb-3">Your Partner in Digital & Employee Growth</h1>
              </div>
              <p className="mb-4" style={{ textAlign: "justify" }}>
                ZoyaMe is a leading provider of innovative technology solutions and digital marketing expertise to businesses across a range of industries, founded in 2018 and formerly known as CXA Technologies (Code-X-Application). Our goal is to help our clients succeed in the digital age by providing cutting-edge solutions that enable them to better serve their customers and grow their businesses.
              </p>
              <p className="mb-4" style={{ textAlign: "justify" }}>
                At ZoyaMe, we are also proud to offer Employee Benefits Consulting services to help businesses design and implement effective Employee Benefits Programs. Our team of benefits experts works closely with clients to understand their unique needs and develop customized benefits programs that help attract and retain top talent.
              </p>
              <p className="mb-0" style={{ textAlign: "justify" }}>
                In addition to our technology solutions, we offer a wide range of Digital Marketing services designed to help businesses reach and engage their target audiences. Our team of marketing experts is skilled in developing comprehensive marketing strategies that leverage the latest technologies and techniques to drive traffic, generate leads, and increase conversions.
              
              </p>
            </div>

            {/* Image Section */}
            <div className="col-lg-5 mb-0">
              <div className="position-relative h-100">
                <img
                  className="img-fluid wow zoomIn"
                  data-wow-delay="0.9s"
                  src={`${base_url}/assets/img/about-us.png`}
                  alt="About"
                  style={{
                    width: "100%",
                    maxHeight: "500px",
                    objectFit: "contain",
                    borderRadius: "8px"
                  }}
                />
              </div>
            </div>
            <p className="mb-0" style={{ textAlign: "justify" }}>
              As a leading provider of InsurTech and HealthTech solutions, we are committed to helping insurance companies and healthcare providers leverage technology to improve the quality of care and services they provide to their customers. Our Flex Benefits Solution and Affinity Solution platforms are just two examples of the innovative solutions we offer to help businesses in these industries succeed.
              At ZoyaMe, we are also proud to offer Employee Benefits Consulting services to help businesses design and implement effective Employee Benefits Programs. Our team of benefits experts works closely with clients to understand their unique needs and develop customized benefits programs that help attract and retain top talent.
              We also have a strong focus on analytics and data-driven decision-making when it comes to our Employee Benefits Practice. Our team of benefits consultants and data analysts work together to help businesses understand the impact of their benefits programs on employee satisfaction, retention, and overall business performance.
            </p>
          </div>
        </div>
      </div>
      {/* About Us Section End */}

      {/* Mission & Vision Start */}
      <div className="container-fluid py-5 wow fadeInUp bg-light" data-wow-delay="0.1s">
        <div className="container py-5 ">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="border-start border-4 border-primary ps-4 mb-4">
                <h2 className="fw-bold mb-3" style={{ color: "#3A2351" }}>Mission</h2>
                <p className="mb-4 p" style={{ textAlign: "justify" }}>
                  At ZoyaMe, our mission is to empower businesses to succeed in the digital age by providing innovative technology solutions, cutting-edge digital marketing expertise, and customized employee benefits consulting services. We are committed to leveraging the latest technologies and analytics capabilities to help businesses streamline their operations, engage with their target audiences and attract and retain top talent. Our goal is to improve the lives of both our client's customers and employees by providing scalable, data-driven solutions that drive business growth and success.
                </p>
                
              </div>
            </div>

            <div className="col-lg-6 text-center">
              <img
                src={`${base_url}/assets/img/mission.png`}
                alt="Insurtech"
                className="img-fluid"
                style={{ maxHeight: "400px" }}
              />
            </div>
          </div>

          <div className="row align-items-center" style={{marginTop:'70px'}}>
        
        <div className="col-lg-6 text-center">
          <img 
            src={`${base_url}/assets/img/vission.png`}
            alt="Insurtech"
            className="img-fluid"
            style={{ maxHeight: "400px" }}
          />
        </div>

        <div className="col-lg-6">
          <div className="border-start border-4 border-primary ps-4 mb-4">
            <h2 className="fw-bold mb-3" style={{ color: "#3A2351" }}>Vision</h2>
            <p className="mb-4 p" style={{ textAlign: "justify" }}>
            Our vision at ZoyaMe is to be the premier provider of innovative technology solutions and digital marketing expertise, empowering businesses across industries to transform the way they serve their customers and grow their businesses. We aim to achieve this by staying at the forefront of emerging technologies and industry trends, continuously innovating our offerings, and leveraging data-driven insights to create customized solutions that meet our client's unique needs. Ultimately, we aspire to help our clients thrive in the digital age and make a positive impact on the world.
            </p>
            
          </div>
        </div>
      </div>
          
        </div>
      </div>
      {/* Mission & Vision Start End */}

      {/* Why Choose Us Section Start */}
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="section-title text-center position-relative pb-3 mb-5 mx-auto">
            <h3 className="fw-bold text-uppercase" style={{ color: "#65518c" }}>Why Choose Us</h3>
            <h3 className="mb-0">
              A web-based interface that allows employers and employees to access the platform and interact with the different functionalities and features of the system.
            </h3>
          </div>

          <div className="row g-4 align-items-center">
            {/* Left Column */}
            <div className="col-lg-4 d-flex flex-column gap-4">
              {[
                { icon: "fa-bullhorn", title: "Digital Services", desc: "Offering digital services on all media channels", bgClass: "bg-color-1" },
                { icon: "fa-user-md", title: "Consulting", desc: "Advisory implementation services tailored to you", bgClass: "bg-color-2" },
                { icon: "fa-tachometer-alt", title: "Easy Onboarding", desc: "Three easy steps to onboard a new employee", bgClass: "bg-color-3" }
              ].map((item, index) => (
                <div
                  key={index}
                  className="d-flex align-items-center wow fadeInLeft mb-4"
                  data-wow-delay={`${0.2 + index * 0.2}s`}
                >
                  <div className={`icon-circle me-3 ${item.bgClass}`}>
                    <i className={`fa ${item.icon} text-white`}></i>
                  </div>
                  <div>
                    <h5 className="mb-1">{item.title}</h5>
                    <p className="mb-0 text-muted">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Center Image */}
            <div className="col-lg-4 text-center wow zoomIn" data-wow-delay="0.3s">
              <img
                className="img-fluid rounded"
                src={`${base_url}/assets/img/why_choose.png`}
                alt="Feature"
                style={{ maxHeight: "400px", objectFit: "contain" }}
              />
            </div>

            {/* Right Column */}
            <div className="col-lg-4 d-flex flex-column gap-4">
              {[
                { icon: "fa-umbrella", title: "Top Insurance & TPA", desc: "Integrated with top insurance companies", bgClass: "bg-color-4" },
                { icon: "fa-chart-bar", title: "Interactive Dashboard", desc: "Dashboard for employees, employers and admins", bgClass: "bg-color-5" },
                { icon: "fa-flask", title: "Lab & Diagnosis", desc: "Integrated with best in class wellness providers", bgClass: "bg-color-6" }
              ].map((item, index) => (
                <div
                  key={index}
                  className="d-flex align-items-center wow fadeInLeft mb-4"
                  data-wow-delay={`${0.2 + index * 0.2}s`}
                >
                  <div className={`icon-circle me-3 ${item.bgClass}`}>
                    <i className={`fa ${item.icon} text-white`}></i>
                  </div>
                  <div>
                    <h5 className="mb-1">{item.title}</h5>
                    <p className="mb-0 text-muted">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Why Choose Us Section End */}

      {/* Testimonial Start */}
      <TestimonialComp/>
      {/* Testimonial End */}
    </>
  )
}

export default AboutUsComp