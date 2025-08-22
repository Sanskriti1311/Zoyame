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
                  <a href={`${base_url}/about`} className="btn py-md-3 px-md-5 me-3 animated slideInLeft border-0 text-white hover-blue1" style={{backgroundColor:'#8dcf47'}}>Explore Our Solutions</a>
                  <a href={`${base_url}/contact`} className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight hover-blue">Request a Demo</a>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <img className="w-100 zoom-in-image" src={`${base_url}/assets/img/website_images/healthTech.jpeg`} alt="Image" />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: "900px", paddingTop:'50px' }}>
                  <h2 className="text-white text-uppercase mb-3 animated slideInDown">Transforming Benefits, Insurance & Wellness Through Smart Technology</h2>
                  <p className="text-white mb-md-4 animated zoomIn" style={{fontSize:'18px'}}>ZoyaMe revolutionizes InsurTech, HealthTech & FinTech with scalable digital platforms tailored for insurers, brokers, corporates, and individuals.</p>
                  {/* <p className="text-white mb-md-4 animated zoomIn">ZoyaMe provides innovative healthtech solutions to help healthcare businesses improve patient care, increase efficiency, and reduce costs. Our services include telemedicine, electronic medical records, and data analytics, among others. Trust our expert team to provide personalized solutions tailored to your unique needs.</p> */}
                  <a href={`${base_url}/about`} className="btn py-md-3 px-md-5 me-3 animated slideInLeft border-0 text-white hover-blue1" style={{backgroundColor:'#8dcf47'}}>Explore Our Solutions</a>
                  <a href={`${base_url}/contact`} className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight hover-blue">Request a Demo</a>
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
                  <a href={`${base_url}/about`} className="btn py-md-3 px-md-5 me-3 animated slideInLeft border-0 text-white hover-blue1" style={{backgroundColor:'#8dcf47'}}>Explore Our Solutions</a>
                  <a href={`${base_url}/contact`} className="btn btn-outline-light py-md-3 px-md-5 animated slideInRight hover-blue">Request a Demo</a>
                </div>
              </div>
            </div>
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
              <a href={`${base_url}/employee-benefit`} style={{ textDecoration: 'none' }}>
                <div
                  className="shadow d-flex flex-column align-items-center justify-content-center p-4"
                  style={{ height: "150px", backgroundColor: '#f8f9fa' }}
                >
                  <div
                    className="d-flex align-items-center justify-content-center rounded mb-3"
                    style={{ width: "60px", height: "60px", backgroundColor: '#65518c' }}
                  >
                    <i className="fa fa-users text-white display-6"></i>
                  </div>
                  <h3 className="mb-0" style={{ color: '#65518c' }}>Employee Benefits</h3>
                </div>
              </a>
            </div>

            {/* Digital Marketing */}
            <div className="col-lg-4 wow zoomIn" data-wow-delay="0.6s">
              <a href={`${base_url}/retail-solution`} style={{ textDecoration: 'none' }}>
                <div
                  className="shadow d-flex flex-column align-items-center justify-content-center p-4"
                  style={{ height: "150px", backgroundColor: '#537ed2 ' }}
                >
                  <div
                    className="bg-white d-flex align-items-center justify-content-center rounded mb-3"
                    style={{ width: "60px", height: "60px" }}
                  >
                    <i className="fa fa-shopping-cart display-6" style={{ color: '#537ed2 ' }}></i>
                  </div>
                  <h3 className="text-white mb-0">Retail Solutions</h3>
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
              Elevating Insurance, Health & Finance with experience-first, future-ready digital products.
            </h3>
          </div>

          <div className="row g-4 align-items-center">
            {/* Left Column */}
            <div className="col-lg-4 d-flex flex-column gap-4">
              {[
                { icon: "fa-network-wired", title: "Ecosystem-Ready", desc: "Built for InsurTech, HealthTech & FinTech ecosystems", bgClass: "bg-color-1" },
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

      {/* Our Products Section Start */}
      <div className="container-fluid py-5" style={{ backgroundColor:"#f8f9fa" }}>
        <div className="container py-5">
          <div className="section-title text-center position-relative pb-3 mb-5 mx-auto">
            <h3 className="fw-bold text-uppercase" style={{ color: "#65518c" }}>Our Products</h3>
            <h3 className="mb-0">
              Elevating Insurance, Health & Finance with experience-first, future-ready digital products.
            </h3>
          </div>

          <div className="row g-4">
            {/* Product 1 */}
            <div className="col-md-6 col-lg-3">
              <div className="product-card">
                <div 
                  className="product-bg" 
                  // style={{ backgroundImage: "url('assets/img/products/benefits.jpg')" }}
                  style={{
                    backgroundImage: `url('${base_url}/assets/img/Services/InsureTech/InsureTech.jpg')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                <div className="product-overlay">
                  <h5 className="fw-bold">EMPLOYEE BENEFITS PORTAL</h5>
                  <p className="product-desc">
                    Secure your future with comprehensive health coverage and hassle-free claims.
                  </p>
                  <a href="#" className="btn btn-outline-light btn-sm mt-2">Learn More</a>
                </div>
              </div>
            </div>

            {/* Product 2 */}
            <div className="col-md-6 col-lg-3">
              <div className="product-card">
                <div 
                  className="product-bg" 
                  style={{ backgroundImage: "url('assets/img/products/broker.jpg')" }}
                ></div>
                <div className="product-overlay">
                  <h5 className="fw-bold">BrokerOne Solution</h5>
                  <p className="product-desc">
                    BrokerOne Solution is a next-generation Employee Benefits & Lead Management Platform built for the dynamic UAE insurance market. 
                  </p>
                  <a href="#" className="btn btn-outline-light btn-sm mt-2">Learn More</a>
                </div>
              </div>
            </div>

            {/* Repeat for other products... */}
          </div>
        </div>
      </div>
      {/* Our Products Section End */}

      {/* Our Services Start */}
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div
            className="section-title text-center position-relative pb-3 mb-5 mx-auto"
            style={{ maxWidth: "1000px" }}
          >
            <h5 className="fw-bold text-uppercase" style={{ color: "#65518c" }}>
              Our Solution
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
                      <img className="img-fluid" src={`${base_url}/assets/img/Services/InsureTech/InsureTech.jpg`} alt="InsurTech Solutions Solutionsrce" />
                      <a className="position-absolute top-0 start-0 text-white rounded-end mt-5 py-2 px-4" href={`${base_url}/insuretech`} style={{backgroundColor:"#ff9800"}}>
                        InsurTech Solutions
                      </a>
                    </div>
                    <div className="p-4">
                      <h4 className="mb-3">Transforming Insurance with Digital Innovation</h4>
                      <p> Our InsurTech solutions empower insurers, brokers, and partners to simplify 
                        processes, enhance customer experiences, and drive growth. From digital policy 
                        issuance to claims automation and data-driven insights, we help modernize the 
                        insurance ecosystem with technology that delivers efficiency and trust.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Service 2 */}
                <div className="col-md-4 wow slideInUp" data-wow-delay="0.6s">
                  <div className="blog-item bg-light rounded overflow-hidden">
                    <div className="blog-img position-relative overflow-hidden">
                      <img className="img-fluid" src={`${base_url}/assets/img/Services/Employee_benefit/employeebenefit.jpg`} alt="Enterprise portal"/>
                      <a className="position-absolute top-0 start-0 text-white rounded-end mt-5 py-2 px-4" href={`${base_url}/employee-benefit`} style={{backgroundColor:"#ff9800"}}>
                        Employee Benefits Platform (ZoyaCube)
                      </a>
                    </div>
                    <div className="p-4">
                      <h4 className="mb-3">ZoyaCube: Engage, Retain & Empower Employees</h4>
                      <p>
                        ZoyaCube is a smart Employee Benefits Platform that simplifies benefits administration and delivers personalized, flexible, and engaging programs. It boosts employee satisfaction, retention, and overall organizational growth with seamless digital access and data-driven insights.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Service 3 */}
                <div className="col-md-4 wow slideInUp" data-wow-delay="0.1s">
                  <div className="blog-item bg-light rounded overflow-hidden">
                    <div className="blog-img position-relative overflow-hidden">
                      <img className="img-fluid" src={`${base_url}/assets/img/website_images/mobile_service_03.png`} alt="Server Management" />
                      <a className="position-absolute top-0 start-0  text-white rounded-end mt-5 py-2 px-4" href={`${base_url}/retail-solution`} style={{backgroundColor:"#ff9800"}}>
                        Retail Solutions
                      </a>
                    </div>
                    <div className="p-4">
                      <h4 className="mb-3">Transforming Retail with Smart Digital Solutions</h4>
                      <p>
                        Our Retail Solutions deliver seamless shopping experiences across online and in-store channels, 
                        streamlining operations with unified systems while boosting sales through personalization, 
                        automation, real-time analytics, and data-driven insights for sustainable business growth.
                      </p>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Our Services End */}

      {/* Who We Serve Start */}
      <div
        className="container-fluid py-5 text-white animate-section"
        style={{
          backgroundImage: `url('${base_url}/assets/img/Images/who-we-serve.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-5 mb-4 fade-in-left">
              <h3 className="text-uppercase small mb-2 text-white">Who We Serve</h3>
              <h2 className="fw-bold mb-4 text-white">Comprehensive Insurance Solutions for Every Need</h2>
              <p className="mb-0 text-white">
                From insurers and brokers to corporates and individuals, we provide 
                tailored digital platforms that simplify processes, enhance engagement, 
                and deliver measurable value across the insurance ecosystem.
              </p>
            </div>

            {/* Right Section (Cards) */}
            <div className="col-lg-7 fade-in-up">
              <div className="row g-4">
                <div className="col-md-6 fade-in-card">
                  <div className="bg-white text-dark p-4 h-100 text-center card-animate">
                    <div className="d-inline-flex justify-content-center align-items-center bg-primary text-white rounded-circle mb-3" style={{ width: "60px", height: "60px" }}>
                      <i className="bi bi-flower1 fs-3"></i>
                    </div>
                    <h5>Insurance Companies:</h5>
                    <p className="small">Modernize distribution, boost digital engagement & compliance.</p>
                  </div>
                </div>

                <div className="col-md-6 fade-in-card">
                  <div className="bg-white text-dark p-4 h-100 text-center card-animate">
                    <div className="d-inline-flex justify-content-center align-items-center bg-danger text-white rounded-circle mb-3" style={{ width: "60px", height: "60px" }}>
                      <i className="bi bi-briefcase-fill fs-3"></i>
                    </div>
                    <h5>Insurance Brokers:</h5>
                    <p className="small">One-stop digital stack to manage leads, quotes, issuance, renewals, and MIS.</p>
                  </div>
                </div>

                <div className="col-md-6 fade-in-card">
                  <div className="bg-white text-dark p-4 h-100 text-center card-animate">
                    <div className="d-inline-flex justify-content-center align-items-center bg-success text-white rounded-circle mb-3" style={{ width: "60px", height: "60px" }}>
                      <i className="bi bi-basket2 fs-3"></i>
                    </div>
                    <h5>Corporates (SMEs & Large Enterprises):</h5>
                    <p className="small">Fully customizable employee benefits and group insurance platforms.</p>
                  </div>
                </div>

                <div className="col-md-6 fade-in-card">
                  <div className="bg-white text-dark p-4 h-100 text-center card-animate">
                    <div className="d-inline-flex justify-content-center align-items-center bg-info text-white rounded-circle mb-3" style={{ width: "60px", height: "60px" }}>
                      <i className="bi bi-stack fs-3"></i>
                    </div>
                    <h5>Retail Clients:</h5>
                    <p className="small">Easy-to-use portals for individual policy selection, purchase, and management.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Who We Serve End */}

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