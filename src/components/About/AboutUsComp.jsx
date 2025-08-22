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
            <h4 className="fw-bold mb-3">
              Some key benefits include: <br />
              <small className="fw-normal text-muted">
                Driving innovation, efficiency, and employee engagement through tailored 
                technology, consulting, and analytics solutions.
              </small>
            </h4>
            <ul className="list-unstyled mb-0 mt-0">
              <li className="d-flex align-items-start mb-3">
                <i className="bi bi-cpu-fill text-primary me-2" style={{ fontSize: "2rem" }}></i>
                <span className="pt-1">
                  Helping insurers & healthcare providers leverage technology with 
                  <strong> Flex Benefits</strong> and <strong> Affinity Solutions</strong>, 
                  empowering organizations to deliver personalized healthcare, streamline 
                  operations, and improve overall customer engagement through innovative 
                  digital platforms.
                </span>

              </li>
              
              <li className="d-flex align-items-start mb-3">
                <i className="bi bi-people-fill text-success me-2" style={{ fontSize: "2rem" }}></i>
                <span className="pt-1">
                  <strong>Employee Benefits Consulting</strong> to design effective programs 
                  that attract & retain top talent, enhance employee well-being, and ensure 
                  compliance with evolving regulations, while aligning benefits strategies 
                  with overall business objectives.
                </span>

              </li>
              
              <li className="d-flex align-items-start mb-3">
                <i className="bi bi-bar-chart-line-fill text-warning me-2" style={{ fontSize: "2rem" }}></i>
                <span className="pt-1">
                  <strong>Analytics-driven approach</strong> to measure impact on employee 
                  satisfaction, retention, and business performance, providing actionable 
                  insights through data visualization, predictive modeling, and benchmarking 
                  to help organizations make informed, future-ready decisions.
                </span>

              </li>
            </ul>
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
            <h3 className="fw-bold text-uppercase" style={{ color: "#65518c" }}>Why ZoyaMe?</h3>
            <h3 className="mb-0">
              Elevating Insurance, Health & Finance with experience-first, future-ready digital products.
            </h3>
          </div>

          <div className="row g-4 align-items-center">
            {/* Left Column */}
            <div className="col-lg-4 d-flex flex-column gap-4">
              {[
                { icon: "fa-network-wired", title: "Ecosystem-Ready", desc: "Built for InsurTech, HealthTech, FinTech ecosystems", bgClass: "bg-color-1" },
                { icon: "fa-shield-alt", title: "Secure & Compliant", desc: "API-first, scalable architecture", bgClass: "bg-color-2" },
                { icon: "fa-cogs", title: "Seamless Integration", desc: "Real-time analytics & automation", bgClass: "bg-color-3" }
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
                src={`${base_url}/assets/img/Images/WCU 390 527px.jpg`}
                alt="Feature"
                style={{ maxHeight: "400px", objectFit: "contain" }}
              />
            </div>

            {/* Right Column */}
            <div className="col-lg-4 d-flex flex-column gap-4">
              {[
                { icon: "fa-chart-line", title: "Insightful Dashboards", desc: "Domain-backed compliance & security", bgClass: "bg-color-4" },
                { icon: "fa-handshake", title: "Trusted Collaborations", desc: "Dashboard for employees, employers and admins", bgClass: "bg-color-5" },
                { icon: "fa-lightbulb", title: "Innovation-First", desc: "Driving digital transformation with future-ready solutions", bgClass: "bg-color-6" }
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