import React, { useEffect, useRef } from 'react'
import { Container, Row, Col, Button,Card } from "react-bootstrap";
// import { OwlCarousel } from "react-bootstrap";
import OwlCarousel from 'react-owl-carousel';
import TestimonialComp from '../Testimonial/TestimonialComp';
import ReactOwlCarousel from 'react-owl-carousel';
import { Navigate, useNavigate } from 'react-router-dom';
import './Home.scss';
import { base_url } from '../../config';


const HomeComp = () => {
  useEffect(() => {
    new WOW().init();
  }, []);

  const navigate = useNavigate();

  const cardsRef = useRef([]);
    useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <>
      {/* Navbar & Carousel Start */}
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

        {/* Carousel Start */}
        <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel" >
          <div className="carousel-inner" >
            <div className="carousel-item active">
              <img className="w-100 zoom-in-image" src={`${base_url}/assets/img/website_images/consulting&analytics.jpeg`} alt="Image" />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: "900px"}}>
                  <h2 className=" text-white text-uppercase mb-3 animated slideInDown">Empowering Insurance, Health & Financial Ecosystems with Digital Innovation</h2>
                  <p className="text-white mb-md-4 animated zoomIn" style={{fontSize:'18px'}}>ZoyaMe is a next-gen Tech Product Company delivering cutting-edge InsurTech, HealthTech & FinTech solutions for Insurance Companies, Brokers, Corporates, and Retail Customers.</p>
                  {/* <p className=" text-white mb-md-4 animated zoomIn">At ZoyaMe, we specialize in insurance data analytics and benefits analysis with benchmarking. Our advanced tools identify trends and patterns to optimize your benefits strategy. We compare your program to industry standards, ensuring competitive benefits for top talent.</p> */}
                  <a href={`${base_url}/about`} className="btn  py-md-3 px-md-5 me-3 animated slideInLeft border-0 text-white hover-blue1" style={{backgroundColor:'#8dcf47'}}>Explore Our Solutions</a>
                  <a href={`${base_url}/contact`} className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight hover-blue">Request a Demo</a>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <img className="w-100 zoom-in-image" src={`${base_url}/assets/img/website_images/healthTech.jpeg`} alt="Image" />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: "900px", paddingTop:'50px' }}>
                  <h2 className=" text-white text-uppercase mb-3 animated slideInDown">Transforming Benefits, Insurance & Wellness Through Smart Technology</h2>
                  <p className="text-white mb-md-4 animated zoomIn" style={{fontSize:'18px'}}>ZoyaMe revolutionizes InsurTech, HealthTech & FinTech with scalable digital platforms tailored for insurers, brokers, corporates, and individuals.</p>
                  {/* <p className="text-white mb-md-4 animated zoomIn">ZoyaMe provides innovative healthtech solutions to help healthcare businesses improve patient care, increase efficiency, and reduce costs. Our services include telemedicine, electronic medical records, and data analytics, among others. Trust our expert team to provide personalized solutions tailored to your unique needs.</p> */}
                  <a href={`${base_url}/about`} className="btn  py-md-3 px-md-5 me-3 animated slideInLeft border-0 text-white hover-blue1" style={{backgroundColor:'#8dcf47'}}>Read More</a>
                  <a href={`${base_url}/contact`} className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight hover-blue">Contact Us</a>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <img className="w-100 zoom-in-image" src={`${base_url}/assets/img/website_images/Technology.jpg`} alt="Image" />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: "900px" }}>
                  <h2 className=" text-white text-uppercase mb-3 animated slideInDown">Future-Ready Tech for the Insurance & Health Ecosystem</h2>
                  <p className="text-white mb-md-4 animated zoomIn" style={{fontSize:'18px'}}>ZoyaMe empowers stakeholders with robust digital tools, automation, and real-time analytics to streamline insurance, wellness, and financial journeys.</p>
                  {/* <p className=" text-white mb-md-4 animated zoomIn">We stay at the forefront of the rapidly evolving insurtech landscape to offer innovative solutions that help businesses succeed in the insurance industry. Our expert team leverages the latest technologies, such as AI and machine learning, to streamline processes, improve customer experience, and reduce costs.</p> */}
                  <a href={`${base_url}/about`} className="btn  py-md-3 px-md-5 me-3 animated slideInLeft border-0 text-white hover-blue1" style={{backgroundColor:'#8dcf47'}}>Read More</a>
                  <a href={`${base_url}/contact`} className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight hover-blue">Contact Us</a>
                </div>
              </div>
            </div>

            {/* <div className="carousel-item">
              <img className="w-100 zoom-in-image" src={`${base_url}/assets/img/website_images/digital-marketing.jpeg`} alt="Image" />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: "900px" }}>
                  <h5 className="text-white text-uppercase mb-3 animated slideInDown">Digital Marketing</h5>
                  <h1 className="display-1 text-white mb-md-4 animated zoomIn">Lead with Digital Impact.</h1>
                  <a href={`${base_url}/about`} className="btn  py-md-3 px-md-5 me-3 animated slideInLeft border-0 text-white hover-blue1" style={{backgroundColor:'#8dcf47'}}>Read More</a>
                  <a href={`${base_url}/contact`} className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight hover-blue">Contact Us</a>
                </div>
              </div>
            </div> */}

            {/* <div className="carousel-item">
              <img className="w-100 zoom-in-image" src={`${base_url}/assets/img/website_images/Technology.jpg`} alt="Image" />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: "900px" }}>
                  <h5 className="text-white text-uppercase mb-3 animated slideInDown">Technology</h5>
                  <h1 className="display-1 text-white mb-md-4 animated zoomIn">Your Tech Growth Partner</h1>
                  <a href={`${base_url}/about`} className="btn  py-md-3 px-md-5 me-3 animated slideInLeft border-0 text-white hover-blue1" style={{backgroundColor:'#8dcf47'}}>Read More</a>
                  <a href={`${base_url}/contact`} className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight hover-blue">Contact Us</a>
                </div>
              </div>
            </div> */}
          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        {/* Carousel End */}
      </div>
      {/* Navbar & Carousel End */}

      {/* Counter Section Start */}
      <div className="container-fluid facts py-5 pt-lg-0">
        <div className="container py-5 pt-lg-0">
          <div className="row gx-0">
            {/* Insurtech */}
            <div className="col-lg-4 wow zoomIn" data-wow-delay="0.1s">
              <a href={`${base_url}/insuretech`} style={{ textDecoration: 'none' }}>
                <div
                  className="shadow d-flex flex-column align-items-center justify-content-center p-4"
                  style={{ height: "150px", backgroundColor: '#ff9800' }}
                >
                  <div
                    className="bg-white d-flex align-items-center justify-content-center rounded mb-3"
                    style={{ width: "60px", height: "60px" }}
                  >
                    <i className="fa fa-umbrella display-6" style={{ color: '#ff9800' }}></i>
                  </div>
                  <h3 className="text-white mb-0">Insurtech</h3>
                </div>
              </a>
            </div>

            {/* Flex Solution */}
            <div className="col-lg-4 wow zoomIn" data-wow-delay="0.3s">
              <a href={`${base_url}/flex-solution`} style={{ textDecoration: 'none' }}>
                <div
                  className="shadow d-flex flex-column align-items-center justify-content-center p-4"
                  style={{ height: "150px", backgroundColor: '#f8f9fa' }}
                >
                  <div
                    className="d-flex align-items-center justify-content-center rounded mb-3"
                    style={{ width: "60px", height: "60px", backgroundColor: '#65518c' }}
                  >
                    <i className="fa fa-gift text-white display-6"></i>
                  </div>
                  <h3 className="mb-0" style={{ color: '#65518c' }}>Flex Solution</h3>
                </div>
              </a>
            </div>

            {/* Digital Marketing */}
            <div className="col-lg-4 wow zoomIn" data-wow-delay="0.6s">
              <a href={`${base_url}/digital-marketing`} style={{ textDecoration: 'none' }}>
                <div
                  className="shadow d-flex flex-column align-items-center justify-content-center p-4"
                  style={{ height: "150px", backgroundColor: '#537ed2 ' }}
                >
                  <div
                    className="bg-white d-flex align-items-center justify-content-center rounded mb-3"
                    style={{ width: "60px", height: "60px" }}
                  >
                    <i className="fa fa-bullhorn display-6" style={{ color: '#537ed2 ' }}></i>
                  </div>
                  <h3 className="text-white mb-0">Digital Marketing</h3>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Counter Section End */}

      {/* About Us Section Start */}
      <div className="container-fluid py-5 bg-light position-relative wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="row align-items-center g-5">
            {/* Left Content */}
            <div className="col-lg-7">
              <div className="section-title position-relative pb-3 mb-4 wow slideInLeft" data-wow-delay="0.2s">
                <h5 className="fw-bold text-uppercase text-primary" style={{ color: '#65518c' }}>
                  About Us
                </h5>
                <h1 className="display-5 mb-0">Your Partner in Digital & Employee Growth</h1>
              </div>

              <p className="mb-3 text-muted wow fadeInUp" data-wow-delay="0.3s">
                <strong className='h5 fw-bold'>ZoyaMe is a technology-driven product company</strong> focused on reshaping the future of insurance, health, and financial services. With our roots in InsurTech, HealthTech, and FinTech, we deliver robust digital platforms that drive efficiency, engagement, and growth for our clients.
              </p>

              <p className="mb-4 text-muted wow fadeInUp" data-wow-delay="0.4s">
                We serve a diverse audience—including insurance companies, brokers, SMEs, large corporates, and individual retail clients—with highly scalable, secure, and customizable solutions.
              </p>
              <p className="mb-4 text-muted wow fadeInUp" data-wow-delay="0.4s">
                Backed by a Strategic InsurTech & Tech Alliance with Nivotime India, our platforms are built on real-world industry expertise and cutting-edge engineering.
              </p>

              <div className="row mb-4">
                <div className="col-md-6 mb-2 wow bounceInLeft" data-wow-delay="0.5s">
                  <i className="fa fa-check-circle text-success me-2"></i> Cutting-edge Solutions
                </div>
                <div className="col-md-6 mb-2 wow bounceInRight" data-wow-delay="0.55s">
                  <i className="fa fa-check-circle text-success me-2"></i> Talent-Centric Strategies
                </div>
                <div className="col-md-6 mb-2 wow bounceInLeft" data-wow-delay="0.6s">
                  <i className="fa fa-check-circle text-success me-2"></i> Proven Industry Experience
                </div>
                <div className="col-md-6 mb-2 wow bounceInRight" data-wow-delay="0.65s">
                  <i className="fa fa-check-circle text-success me-2"></i> Dedicated Client Support
                </div>
              </div>

              <a
                href={`${base_url}/about`}
                className="btn btn-primary py-2 px-4 ms-3 wow fadeInUp border-0 hover-blue"
                data-wow-delay="0.7s"
                style={{
                  borderRadius: '8px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                }}
              >
                Read More
                <i className="bi bi-arrow-right ms-2 text-white fw-bold"></i>
              </a>
            </div>

            {/* Right Image */}
            <div className="col-lg-5 wow zoomIn" data-wow-delay="0.8s">
              <div
                className="rounded overflow-hidden position-relative"
                style={{
                  border: '6px solid #fff',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  borderRadius: '16px',
                  zIndex: 2,
                }}
              >
                <img
                  src={`${base_url}/assets/img/about-us.png`}
                  alt="About Us"
                  className="img-fluid"
                  style={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'cover',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About Us Section End */}

      {/* Why Choose Us Section Start */}
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="section-title text-center position-relative pb-3 mb-5 mx-auto">
            <h3 className="fw-bold text-uppercase" style={{ color: "#65518c" }}>Why ZoyaMe?</h3>
            <h3 className="mb-0">
              Built to empower the InsurTech, HealthTech, and FinTech ecosystems with innovation and impact.
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

      {/* Our Services Start */}
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div
            className="section-title text-center position-relative pb-3 mb-5 mx-auto"
            style={{ maxWidth: "1000px" }}
          >
            <h5 className="fw-bold text-uppercase" style={{ color: "#65518c" }}>
              Technology Services
            </h5>
            <h3 className="mb-0">
              The technology platform for Flex Benefits Solutions may include the following components.
            </h3>
          </div>
          <div className="row g-5">
            <div className="col-lg-12">
              <div className="row g-5">
                {/* Service 1 */}
                <div className="col-md-4 wow slideInUp" data-wow-delay="0.1s" >
                  <div className="blog-item bg-light rounded overflow-hidden">
                    <div className="blog-img position-relative overflow-hidden">
                      <img className="img-fluid" src={`${base_url}/assets/img/website_images/software_service_01.png`} alt="Ecommerce" />
                      <a className="position-absolute top-0 start-0 text-white rounded-end mt-5 py-2 px-4" href={`${base_url}/technology`} style={{backgroundColor:"#ff9800"}}>
                        Software Development
                      </a>
                    </div>
                    <div className="p-4">
                      <h4 className="mb-3">Empowering Businesses Through Custom Software</h4>
                      <p>We build scalable, robust, and user-friendly software solutions tailored to your business needs. From web applications to enterprise systems, our development approach ensures streamlined operations, enhanced productivity, and long-term value.</p>
                    </div>
                  </div>
                </div>

                {/* Service 2 */}
                <div className="col-md-4 wow slideInUp" data-wow-delay="0.6s">
                  <div className="blog-item bg-light rounded overflow-hidden">
                    <div className="blog-img position-relative overflow-hidden">
                      <img className="img-fluid" src={`${base_url}/assets/img/website_images/customized_services_02.png`} alt="Enterprise portal"/>
                      <a className="position-absolute top-0 start-0 text-white rounded-end mt-5 py-2 px-4" href={`${base_url}/technology`} style={{backgroundColor:"#ff9800"}}>
                        Customized Software
                      </a>
                    </div>
                    <div className="p-4">
                      <h4 className="mb-3">Tailored Software Solutions for Unique Business Needs</h4>
                      <p>At ZoyaMe, we specialize in building customized software applications that align perfectly with your business processes. Whether it's automating workflows, managing resources, or integrating systems, our bespoke solutions are designed to boost efficiency, scalability, and performance across departments.</p>
                    </div>
                  </div>
                </div>

                {/* Service 3 */}
                <div className="col-md-4 wow slideInUp" data-wow-delay="0.1s">
                  <div className="blog-item bg-light rounded overflow-hidden">
                    <div className="blog-img position-relative overflow-hidden">
                      <img className="img-fluid" src={`${base_url}/assets/img/website_images/mobile_service_03.png`} alt="Server Management" />
                      <a className="position-absolute top-0 start-0  text-white rounded-end mt-5 py-2 px-4" href={`${base_url}/technology`} style={{backgroundColor:"#ff9800"}}>
                        Mobile Application
                      </a>
                    </div>
                    <div className="p-4">
                      <h4 className="mb-3">Driving Growth with Custom Mobile Applications</h4>
                      <p>At ZoyaMe, we craft high-performance mobile applications tailored to your business needs. From intuitive UI/UX design to robust backend integration, our apps ensure seamless functionality, user engagement, and scalability across both Android and iOS platforms.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row g-5 mt-4">
                {/* Service 4 */}
                <div className="col-md-4 wow slideInUp" data-wow-delay="0.1s">
                  <div className="blog-item bg-light rounded overflow-hidden">
                    <div className="blog-img position-relative overflow-hidden">
                      <img className="img-fluid" src={`${base_url}/assets/img/website_images/web_application_service_04.png`} alt="Software Support" />
                      <a className="position-absolute top-0 start-0 text-white rounded-end mt-5 py-2 px-4" href={`${base_url}/technology`} style={{backgroundColor:"#ff9800"}}>
                        Web Application
                      </a>
                    </div>
                    <div className="p-4">
                      <h4 className="mb-3">Reliable Web Development Tailored for Business Growth</h4>
                      <p>At ZoyaMe, we develop dynamic and responsive web applications tailored to meet your business objectives. Our solutions are built for performance, security, and scalability—ensuring seamless user experience, efficient workflows, and powerful integrations across browsers and devices.</p>
                    </div>
                  </div>
                </div>

                {/* Service 5 */}
                <div className="col-md-4 wow slideInUp" data-wow-delay="0.6s">
                  <div className="blog-item bg-light rounded overflow-hidden">
                    <div className="blog-img position-relative overflow-hidden">
                      <img className="img-fluid" src={`${base_url}/assets/img/Services/Technology/softwareSupport-04.jpg`} alt="Re engineering" />
                      <a className="position-absolute top-0 start-0 text-white rounded-end mt-5 py-2 px-4" href={`${base_url}/technology`} style={{backgroundColor:"#ff9800"}}>
                        Software Support
                      </a>
                    </div>
                     <div className="p-4">
                      <h4 className="mb-3">Seamless Software Assistance for Business Continuity</h4>
                      <p>At ZoyaMe, our software support services ensure that your applications remain efficient, secure, and up-to-date. From troubleshooting and bug fixes to regular updates and user training, we provide end-to-end support to maximize system uptime and user satisfaction across all platforms.</p>
                    </div>
                  </div>
                </div>

                {/* Service 6 */}
                <div className="col-md-4 wow slideInUp" data-wow-delay="0.1s">
                  <div className="blog-item bg-light rounded overflow-hidden">
                    <div className="blog-img position-relative overflow-hidden">
                      <img className="img-fluid" src={`${base_url}/assets/img/Services/Technology/cyberSecurity-06.jpg`} alt="Cyber Security" />
                      <a className="position-absolute top-0 start-0 text-white rounded-end mt-5 py-2 px-4" href={`${base_url}/technology`} style={{backgroundColor:"#ff9800"}}>
                        Cyber Security
                      </a>
                    </div>
                    <div className="p-4">
                      <h4 className="mb-3">Securing Digital Assets with Advanced Cyber Security</h4>
                      <p>Cyber security refers to every aspect of protecting an organization and its employees and assets against cyber threats. As cyber attacks become more common and sophisticated and corporate networks grow more complex, a variety of cyber security solutions are required to mitigate corporate cyber risk.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Our Services End */}

      {/* InsureTech & Flex Solution Start */}
      <div className="container-fluid py-5 fade-in-section bg-light mt-4" style={{ backgroundImage: `url('${base_url}/assets/img/website_images/9b3e44eb-a187-407f-9a3f-48835cfb7d71.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center',}}>
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-6 fade-in-left">
              <div className="border-start border-4 border-primary ps-4 mb-4">
                <h2 className="fw-bold mb-3" style={{ color: "#3A2351" }}>
                  Insurtech
                </h2>
                <p className="mb-4 p" style={{ textAlign: "justify" }}>
                  Insurance is a financial product that offers protection against unforeseen events. It provides compensation for losses in exchange for regular payments of premiums. Insurance can cover various aspects of life, including health, property, liability, and more.
                </p>
                <a className="btn px-4 py-2 mt-2 text-white" href={`${base_url}/insuretech`} style={{ backgroundColor: '#537ed2' }}>
                  Read More
                </a>
              </div>
            </div>
            <div className="col-lg-6 text-center fade-in-right">
              <img src={`${base_url}/assets/img/insurance.png`} alt="Insurtech" className="img-fluid" style={{ maxHeight: "400px" }} />
            </div>
          </div>

          <div className="row align-items-center mt-5">
            <div className="col-lg-6 text-center fade-in-left">
              <img src={`${base_url}/assets/img/flex.png`} alt="Flex" className="img-fluid" style={{ maxHeight: "400px" }} />
            </div>
            <div className="col-lg-6 fade-in-right">
              <div className="border-start border-4 border-primary ps-4 mb-4">
                <h2 className="fw-bold mb-3" style={{ color: "#3A2351" }}>
                  Flex Solution
                </h2>
                <p className="mb-4 p" style={{ textAlign: "justify" }}>
                  Flex is non-wage compensation provided by a company to its employees. These benefits can include health insurance, retirement plans, paid time off, and other perks. Flex can be an important factor in attracting and retaining top talent, as well as promoting employee well-being and satisfaction.
                </p>
                <a className="btn px-4 py-2 mt-2 text-white" href={`${base_url}/flex-solution`} style={{ backgroundColor: '#537ed2' }}>
                  Explore More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* InsureTech & Flex Solution End */}

      {/* Integrated healthcare Start */}
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div
            className="section-title text-center position-relative pb-3 mb-5 mx-auto"
            style={{ maxWidth: "900px" }}
          >
            <h3 className="fw-bold text-primary text-uppercase">
              Integrated healthcare with insurance benefits
            </h3>
            <p className="mb-0">
              Comprehensive healthcare programs with insurance benefits provide a range of services to address overall well-being, including preventive care, treatment, and wellness support.
            </p>
            
          </div>

          <div className="row g-4">
            {[
              "cover1.jpg",
              "cover2.jpg",
              "cover3.jpg",
              "cover4.jpg",
              "cover5.jpg",
              "cover6.jpg",
              "cover7.jpg",
              "cover8.jpg",
            ].map((img, idx) => (
              <div className="col-md-6 col-lg-3" key={idx}>
                <div
                  className="health-card"
                  style={{
                    backgroundImage: `url(${base_url}/assets/img/${img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: "15px",
                    height: "260px",
                    position: "relative",
                    overflow: "hidden",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                    transition: "transform 0.4s ease",
                  }}
                >
                  <div
                    className="health-card-overlay"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      background: "rgba(0,0,0,0.4)",
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      opacity: 0,
                      transition: "opacity 0.3s ease-in-out",
                      textAlign: "center",
                      padding: "20px",
                    }}
                  >
                    <p className="mb-0">Explore our wellness solutions</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Integrated healthcare End */}

      {/* Team Members Start */}
      {/* <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div
            className="section-title text-center position-relative pb-3 mb-5 mx-auto"
            style={{ maxWidth: 600 }}
          >
            <h5 className="fw-bold text-primary text-uppercase">Team Members</h5>
            <h1 className="mb-0">
              Professional Stuffs Ready to Help Your Business
            </h1>
          </div>

          <div className="row g-5">
            <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
              <div className="team-item bg-light rounded overflow-hidden">
                <div className="team-img position-relative overflow-hidden">
                  <img className="img-fluid w-100" src="/assets/img/team-1.jpg" alt="" />
                  <div className="team-social">
                    <a className="btn btn-lg btn-primary btn-lg-square rounded" href="#">
                      <i className="fab fa-twitter fw-normal"></i>
                    </a>
                    <a className="btn btn-lg btn-primary btn-lg-square rounded" href="#">
                      <i className="fab fa-facebook-f fw-normal"></i>
                    </a>
                    <a className="btn btn-lg btn-primary btn-lg-square rounded" href="#">
                      <i className="fab fa-instagram fw-normal"></i>
                    </a>
                    <a className="btn btn-lg btn-primary btn-lg-square rounded" href="#">
                      <i className="fab fa-linkedin-in fw-normal"></i>
                    </a>
                  </div>
                </div>
                <div className="text-center py-4">
                  <h4 className="text-primary">Full Name</h4>
                  <p className="text-uppercase m-0">Designation</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 wow slideInUp" data-wow-delay="0.6s">
              <div className="team-item bg-light rounded overflow-hidden">
                <div className="team-img position-relative overflow-hidden">
                  <img className="img-fluid w-100" src="/assets/img/team-2.jpg" alt="" />
                  <div className="team-social">
                    <a className="btn btn-lg btn-primary btn-lg-square rounded" href="#">
                      <i className="fab fa-twitter fw-normal"></i>
                    </a>
                    <a className="btn btn-lg btn-primary btn-lg-square rounded" href="#">
                      <i className="fab fa-facebook-f fw-normal"></i>
                    </a>
                    <a className="btn btn-lg btn-primary btn-lg-square rounded" href="#">
                      <i className="fab fa-instagram fw-normal"></i>
                    </a>
                    <a className="btn btn-lg btn-primary btn-lg-square rounded" href="#">
                      <i className="fab fa-linkedin-in fw-normal"></i>
                    </a>
                  </div>
                </div>
                <div className="text-center py-4">
                  <h4 className="text-primary">Full Name</h4>
                  <p className="text-uppercase m-0">Designation</p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 wow slideInUp" data-wow-delay="0.9s">
              <div className="team-item bg-light rounded overflow-hidden">
                <div className="team-img position-relative overflow-hidden">
                  <img className="img-fluid w-100" src="/assets/img/team-3.jpg" alt="" />
                  <div className="team-social">
                    <a className="btn btn-lg btn-primary btn-lg-square rounded" href="#">
                      <i className="fab fa-twitter fw-normal"></i>
                    </a>
                    <a className="btn btn-lg btn-primary btn-lg-square rounded" href="#">
                      <i className="fab fa-facebook-f fw-normal"></i>
                    </a>
                    <a className="btn btn-lg btn-primary btn-lg-square rounded" href="#">
                      <i className="fab fa-instagram fw-normal"></i>
                    </a>
                    <a className="btn btn-lg btn-primary btn-lg-square rounded" href="#">
                      <i className="fab fa-linkedin-in fw-normal"></i>
                    </a>
                  </div>
                </div>
                <div className="text-center py-4">
                  <h4 className="text-primary">Full Name</h4>
                  <p className="text-uppercase m-0">Designation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* Team Member End */}

      {/* Testimonial Start */}
      <TestimonialComp/>
      {/* Testimonial End */}
    </>
  )
}

export default HomeComp