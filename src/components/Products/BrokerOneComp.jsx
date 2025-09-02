import React, { useEffect, useRef, useState } from 'react'
import { base_url } from '../../config';
import { Link, useNavigate } from "react-router-dom";
import './Product.scss';
import ReactOwlCarousel from 'react-owl-carousel';
import { FaRocket, FaBuilding, FaUsers, FaFileMedical, FaChartBar } from "react-icons/fa";
import { FaRobot, FaShieldAlt, FaCogs, FaMoneyBillWave } from "react-icons/fa";
import { Modal } from "react-bootstrap";

const feature = [
  {
    title: "Lead & Quote Management",
    icon: <FaRocket className="text-purple-600 text-4xl mb-4" />,
    points: [
      "Capture, track, and nurture leads across multiple sources (brokers, insurers, direct corporates).",
      "Automated lead scoring & prioritization based on premium potential and past interactions.",
      "AI-powered OCR & NLP tools to extract employee census, past claim history, and financial data from documents.",
      "Generate and compare quotes from multiple insurers with side-by-side visualization.",
      "Streamlined proposal & negotiation workflows to accelerate conversions.",
    ],
  },
  {
    title: "Corporate & Policy Management",
    icon: <FaBuilding className="text-green-600 text-4xl mb-4" />,
    points: [
      "Structured corporate onboarding with trade license, UBO declarations, and VAT compliance.",
      "Product & Policy Master setup for Group Mediclaim (GMC), GPA, GTL, and more.",
      "Endorsement management for employee additions, deletions, and corrections.",
      "Corporate dashboards showing KPIs such as enrollments, claims, and utilization.",
      "White-label branding options to match corporate identity.",
    ],
  },
  {
    title: "Employee Self-Service",
    icon: <FaUsers className="text-blue-600 text-4xl mb-4" />,
    points: [
      "Secure login for employees to view policy details, claim history, and benefits.",
      "Download eCards instantly for hospital access.",
      "Dependent details and network hospital search.",
      "Chatbot for instant query resolution (policy, claim, network providers).",
      "Ticketing module for escalation of unresolved issues.",
    ],
  },
  {
    title: "Claims & TPA Integration",
    icon: <FaFileMedical className="text-red-600 text-4xl mb-4" />,
    points: [
      "Real-time integration with TPAs for claim intimation and tracking.",
      "Automated claim updates via SMS, WhatsApp, or email.",
      "Cashless hospital eligibility verification through chatbot or ticketing.",
      "Claims analytics to detect patterns, reduce fraud, and improve settlement ratios.",
      "Network provider lookup with location-based filters.",
    ],
  },
  {
    title: "Reports & Analytics",
    icon: <FaChartBar className="text-yellow-600 text-4xl mb-4" />,
    points: [
      "Pre-built MIS dashboards for demographics, enrollment, claims, and endorsements.",
      "Comparative analytics on insurer performance, premiums, and settlement ratios.",
      "Financial reporting with premium tracking, commission statements, and profitability analysis.",
      "Export reports in PDF, Excel, or CSV for management and compliance use.",
    ],
  },
];

const BrokerOneComp = () => {

  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  const [show, setShow] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);
  const [selectedTitle, setSelectedTitle] = useState(""); // optional title

  const handleClose = () => setShow(false);
  const handleShow = (img, title) => {
    setSelectedImg(img);
    setSelectedTitle(title);
    setShow(true);
  };

  const options = {
    loop: true,
    margin: 20,
    // nav: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    center: true,
    responsive: {
      0: { items: 1 },
      768: { items: 1 },
      992: { items: 3 }, 
    },
  };

  const handleTranslated = () => {
    if (!carouselRef.current) return;
    const current = carouselRef.current._current;
    setActiveIndex(current);
  };

  const features = [
    {
      title: "AI & Automation",
      icon: <i className="bi bi-cpu-fill text-purple fs-2"></i>,
      items: [
        "OCR-powered quote management – Automatically extract employee census, policy history, and claims data for faster underwriting.",
        "Smart Bot Integration – Employees and brokers can request quotes, check claim status, or download eCards directly via chatbot.",
        "Automated Reminders – Renewal alerts, claim status updates, and onboarding notifications via WhatsApp/SMS/Email.",
      ],
      delay: "100",
    },
    {
      title: "Compliance & Security",
      icon: <i className="bi bi-shield-lock-fill text-primary fs-2"></i>,
      items: [
        "End-to-end compliance with DHA, CBUAE, and UAE’s data privacy laws.",
        "Built-in AML/KYC workflows with document verification and audit trails.",
        "Role-based access and configurable approval workflows for high security.",
      ],
      delay: "200",
    },
    {
      title: "Customization & Scalability",
      icon: <i className="bi bi-gear-fill text-success fs-2"></i>,
      items: [
        "Corporate branding module for a white-labeled experience.",
        "Multi-insurer, multi-TPA support with API and offline integration options.",
        "Flexible benefit configurations with core/optional structures, waiting periods, and exclusions.",
        "Scalable to handle both SME groups and enterprise clients with 10,000+ employees.",
      ],
      delay: "300",
    },
    {
      title: "Financial Ecosystem",
      icon: <i className="bi bi-cash-stack text-warning fs-2"></i>,
      items: [
        "End-to-end invoice and commission management for brokers.",
        "Premium payment warranty alerts and compliance-based billing cycles.",
        "Automated commission settlement linked to insurer policies.",
      ],
      delay: "400",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll(".slide-left, .slide-right");
    elements.forEach((el) => observer.observe(el));

    // Cleanup
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

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
                  {/* <a href={`${base_url}/employeeBenefit-portal`} className="dropdown-item text-black">Employee Benefits Portal(Phillip)</a> */}
                  <a href={`${base_url}/broker-one`} className="dropdown-item text-black">BrokerOne Solution </a>
                  <a href={`${base_url}/flex-benefit`} className="dropdown-item text-black">Flex Benefits System</a>
                  <a href={`${base_url}/quote-master`} className="dropdown-item text-black">QuoteMaster360</a>
                  <a href={`${base_url}/retailSolution-product`} className="dropdown-item text-black">Retail Solutions</a>
                </div>
              </div>
              {/* <div className="nav-item dropdown">
                <a href={`${base_url}/technology`} className="nav-link dropdown-toggle text-black" data-bs-toggle="dropdown">Solutions</a>
                <div className="dropdown-menu m-0">
                  <a href={`${base_url}/insuretech`} className="dropdown-item text-black">InsurTech Solutions</a>
                  <a href={`${base_url}/employee-benefit`} className="dropdown-item text-black">Employee Benefits Platform (ZoyaCube)</a>
                  <a href={`${base_url}/retail-solution`} className="dropdown-item text-black">Retail Solutions</a>
                </div>
              </div> */}
              {/* <div className="nav-item dropdown">
                <a href={`${base_url}/employee`} className="nav-link dropdown-toggle text-black" data-bs-toggle="dropdown">How It Works</a>
                <div className="dropdown-menu m-0">
                  <a href={`${base_url}/employee`} className="dropdown-item text-black">For Employee</a>
                  <a href={`${base_url}/employer`} className="dropdown-item text-black">For Employer</a>
                </div>
              </div> */}
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
              <h1 className="display-4 text-white animated zoomIn">BrokerOne</h1>
              <a href="#" className="h5 text-white">
                Home
              </a>
              <i className="far fa-circle text-white px-2"></i>
              <a href="#" className="h5 text-white">
                BrokerOne
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Navbar End */}

      {/* Product Detail Section Start */}
      <div className="container-fluid py-5 position-relative wow fadeIn" data-wow-delay="0.1s" style={{backgroundColor:"#F3F1F1"}}>
        <div className="container py-5">
          <div className="row align-items-center g-5">
            <div className="col-lg-5 wow zoomIn" data-wow-delay="0.8s">
              <div className="rounded overflow-hidden position-relative"
                style={{
                  // border: '6px solid #fff',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  borderRadius: '16px',
                  zIndex: 2,
                }}
              >
                <img
                  src={`${base_url}/assets/img/Products/Broker-Insurance.jpg`}
                  alt="About Us"
                  className="img-fluid"
                  style={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'cover',
                    height:'450px'
                  }}
                />
              </div>
            </div>
            {/* Left Content */}
            <div className="col-lg-7">
              <div className="section-title position-relative pb-3 mb-4 wow slideInLeft" data-wow-delay="0.2s">
                <h5 className="fw-bold text-uppercase text-primary" style={{ color: '#65518c' }}>
                  BrokerOne Solution 
                </h5>
                <h1 className="display-5 mb-0">A Comprehensive Digital Solution for Modern Businesses</h1>
              </div>

              <p className="mb-3 text-muted wow fadeInUp" data-wow-delay="0.3s">
                BrokerOne Solution is a next-generation Employee Benefits & Lead Management Platform built for the dynamic UAE insurance market. Designed with compliance to DHA (Dubai Health Authority) and Central Bank of UAE (CBUAE) regulations, the platform enables brokers, insurers, corporates, and TPAs to manage the complete lifecycle of group health and employee benefits policies—from lead capture to policy issuance and renewals.
              </p>

              <p className="mb-4 text-muted wow fadeInUp" data-wow-delay="0.4s">
                Whether you’re an insurance broker looking to scale your operations, an HR team managing employee enrollments, or a TPA handling claims, Phillip EB Solution delivers a unified, digital-first experience. With AI-driven OCR, automated quote comparison, and role-based dashboards, the system brings transparency, speed, and efficiency to every stakeholder in the ecosystem.
              </p>
              <p className="mb-4 text-muted wow fadeInUp" data-wow-delay="0.4s">
                Built for SMEs, large corporates, and insurers in Dubai, the platform ensures seamless integration, regulatory compliance, and a personalized digital journey for both employers and employees.
              </p>
            </div>

            {/* Right Image */}
          </div>
        </div>
      </div>
      {/* Product Detail Section End */}

      {/* Key Features Section Start */}
      <div className="container-fluid py-5 bg-gray">
        <div className="container py-5">
          <h2 className="text-center fw-bold mb-5 text-primary">
            Key Features
          </h2>

          <div className="row g-4">
            {/* First three cards */}
            {feature.slice(0, 3).map((feature, index) => {
              let gradient =
                feature.title.includes("Lead & Quote")
                  ? "linear-gradient(135deg,#6C5DD3,#9F7AEA)"
                  : feature.title.includes("Corporate & Policy")
                  ? "linear-gradient(135deg,#16A34A,#A7F3D0)"
                  : "linear-gradient(135deg,#2563EB,#93C5FD)";
              return (
                <div key={index} className="col-md-4 d-flex">
                  <div className="card h-100 border-0 shadow-lg position-relative overflow-hidden hover-animate" style={{ borderRadius: "25px", transition: "transform 0.3s, box-shadow 0.3s", cursor: "pointer" }}>
                    {/* Vertical stripe */}
                    <div style={{ position: "absolute", left: 0, top: 0, width: "8px", height: "100%", background: gradient }}></div>

                    <div className="card-body text-center p-4">
                      <div className="mx-auto mb-4 d-flex align-items-center justify-content-center rounded-circle shadow-lg hover-icon" style={{ width: "110px", height: "110px", background: gradient, transition: "transform 0.3s" }}>
                        {React.cloneElement(feature.icon, { className: "fs-1 text-white" })}
                      </div>
                      <h5 className="card-title fw-bold mb-3">{feature.title}</h5>
                      <ul className="list-unstyled text-start small">
                        {feature.points.map((point, i) => (
                          <li key={i} className="mb-2 d-flex align-items-start gap-2">
                            <span className="d-inline-flex align-items-center justify-content-center rounded-circle text-white" style={{ background: gradient, width: "22px", height: "22px", flexShrink: 0, animation: "bounce 1.5s infinite" }}>✔</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Second row: last two cards centered */}
          <div className="row g-4 justify-content-center mt-3">
            {feature.slice(3, 5).map((feature, index) => {
              let gradient =
                feature.title.includes("Claims & TPA")
                  ? "linear-gradient(135deg,#DC2626,#FCA5A5)"
                  : "linear-gradient(135deg,#F59E0B,#FCD34D)";
              return (
                <div key={index} className="col-md-4 d-flex">
                  <div className="card h-100 border-0 shadow-lg position-relative overflow-hidden hover-animate" style={{ borderRadius: "25px", transition: "transform 0.3s, box-shadow 0.3s", cursor: "pointer" }}>
                    {/* Vertical stripe */}
                    <div style={{ position: "absolute", left: 0, top: 0, width: "8px", height: "100%", background: gradient }}></div>

                    <div className="card-body text-center p-4">
                      <div className="mx-auto mb-4 d-flex align-items-center justify-content-center rounded-circle shadow-lg hover-icon" style={{ width: "110px", height: "110px", background: gradient, transition: "transform 0.3s" }}>
                        {React.cloneElement(feature.icon, { className: "fs-1 text-white" })}
                      </div>
                      <h5 className="card-title fw-bold mb-3">{feature.title}</h5>
                      <ul className="list-unstyled text-start small">
                        {feature.points.map((point, i) => (
                          <li key={i} className="mb-2 d-flex align-items-start gap-2">
                            <span className="d-inline-flex align-items-center justify-content-center rounded-circle text-white" style={{ background: gradient, width: "22px", height: "22px", flexShrink: 0, animation: "bounce 1.5s infinite" }}>✔</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* Key Features Section End */}
      
      {/* Advanced Features Section Start */}
      <section className="py-5 bg-light mb-4">
        <div className="container">
          {/* Title */}
          <div className="section-title text-center position-relative pb-3 mb-5 mx-auto">
            <h5 className="fw-bold text-primary text-uppercase">Advanced Features</h5>
            <h1 className="mb-0">Powering automation, compliance, scalability, and financial excellence</h1>
          </div>

          {/* Features Grid */}
          <div className="row g-4">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="col-md-6"
                data-aos="fade-up"
                data-aos-delay={feature.delay}
              >
                <div className="card h-100 border-0 shadow feature-card">
                  <div className="card-body p-4">
                    <div className="d-flex align-items-center mb-3">
                      <span className="icon-circle me-3">{feature.icon}</span>
                      <h5 className="mb-0 fw-semibold">{feature.title}</h5>
                    </div>
                    <ul className="list-unstyled text-muted mb-0">
                      {feature.items.map((item, i) => (
                        <li key={i} className="d-flex mb-2">
                          <i className="bi bi-check-circle-fill text-success me-2"></i>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Advanced Features Section End */}

      {/* Why Choose Product Section Start */}
      <section className="py-5 mb-4">
        <div className="container">
          <div className="section-title text-center position-relative pb-3 mb-5 mx-auto">
            <h5 className="fw-bold text-primary text-uppercase">Why Choose Our Product?</h5>
          </div>
          <div className="row g-0 position-relative">
            
            {/* Left Side */}
          <div className="col-md-5 d-flex flex-column justify-content-center align-items-start text-white p-5"
            style={{
              backgroundImage: `url('${base_url}/assets/img/Products/why-chose.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}>
              <h5 className="fw-bold text-white text-uppercase">
                Why Choose BrokerOne Solution?
              </h5>
              <p className="text-white pt-3">
              Built for the Dubai insurance market, <strong>BrokerOne Solution</strong> transforms the way brokers, corporates, and TPAs manage employee benefits. From lead capture to policy issuance, everything happens digitally — faster, smarter, and compliant with DHA & CBUAE regulations.
              </p>
            </div>

            {/* Right Side */}
            <div className="col-md-7 bg-white p-5 d-flex flex-column justify-content-center">
              
              {/* Item 1 */}
              <div className="d-flex align-items-start mb-5 position-relative">
                {/* Circle */}
                <div
                  className="rounded-circle bg-dark text-white fw-bold d-flex align-items-center justify-content-center shadow position-absolute"
                  style={{
                    width: "90px",
                    height: "90px",
                    fontSize: "30px",
                    left: "-84px", // half inside left column
                    top: "0",
                    border:" 10px solid #fff"
                  }}
                >
                  1
                </div>
                {/* Text */}
                <div className="ms-5">
                  <h5 className="fw-semibold mb-1"> <i className="bi bi-speedometer2 mb-3 text-danger"></i> Faster Processes</h5>
                  <p className="text-muted mb-0">
                    End-to-end digital workflow accelerates lead capture, approvals, and policy issuance.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="d-flex align-items-start mb-5 position-relative">
                <div
                  className="rounded-circle bg-secondary text-white fw-bold d-flex align-items-center justify-content-center shadow position-absolute"
                  style={{
                    width: "90px",
                    height: "90px",
                    fontSize: "30px",
                    left: "-84px",
                    top: "0",
                    border:" 10px solid #fff"
                  }}
                >
                  2
                </div>
                <div className="ms-5">
                  <h5 className="fw-semibold mb-1"> <i className="bi bi-shield-check mb-3 text-danger"></i> Compliance</h5>
                  <p className="text-muted mb-0">
                    Intuitive interface designed for brokers, corporates, and TPAs alike.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="d-flex align-items-start position-relative">
                <div
                  className="rounded-circle bg-warning text-white fw-bold d-flex align-items-center justify-content-center shadow position-absolute"
                  style={{
                    width: "90px",
                    height: "90px",
                    fontSize: "30px",
                    left: "-84px",
                    top: "0",
                    border:" 10px solid #fff"
                  }}
                >
                  3
                </div>
                <div className="ms-5">
                  <h5 className="fw-semibold mb-1"> <i className="bi bi-graph-up mb-3 text-danger"></i>  Smart Analytics</h5>
                  <p className="text-muted mb-0">
                    Gain insights into employee benefits, leads, and policies with real-time dashboards.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
      {/* Why Choose Product Section End */}

      {/* Screenshots */}
      <div
        className="container-fluid py-5 position-relative wow fadeIn bg-gray mb-4"
        data-wow-delay="0.1s"
        style={{ backgroundColor: "#F5F2F2" }}
      >
        <div className="container py-5">
          {/* Section 1 */}
          <div className="row align-items-center mb-5">
            <div className="col-lg-7 mb-4 mb-lg-0">
              <img
                src={`${base_url}/assets/img/Screenshots/broker-01.png`}
                alt="Employee Dashboard"
                className="img-fluid rounded shadow"
                style={{
                  width: "100%",
                  maxHeight: "700px",
                  objectFit: "cover",
                  cursor: "pointer",
                }}
                onClick={() =>
                  handleShow(`${base_url}/assets/img/Screenshots/broker-01.png`, "Employee Dashboard")
                }
              />
            </div>
            <div className="col-lg-5">
              <h2 className="fw-bold mb-3">Employee Dashboard</h2>
              {/* <p
                className="text-muted"
                style={{ textAlign: "justify", fontSize: "1.1rem" }}
              >
                At ZoyaMe, we deliver customized digital solutions and employee
                benefits consulting designed to help businesses thrive.
              </p> */}
            </div>
          </div>

          {/* Section 2 */}
          <div className="row align-items-center mb-5">
            <div className="col-lg-5 mb-4">
              <h2 className="fw-bold mb-3">Employer Dashboard</h2>
              {/* <p
                className="text-muted"
                style={{ textAlign: "justify", fontSize: "1.1rem" }}
              >
                At ZoyaMe, we deliver customized digital solutions and employee
                benefits consulting designed to help businesses thrive.
              </p> */}
            </div>
            <div className="col-lg-7">
              <img
                src={`${base_url}/assets/img/Screenshots/broker-02.png`}
                alt="Employer Dashboard"
                className="img-fluid rounded shadow"
                style={{
                  width: "100%",
                  maxHeight: "700px",
                  objectFit: "cover",
                  cursor: "pointer",
                }}
                onClick={() =>
                  handleShow(`${base_url}/assets/img/Screenshots/broker-02.png`, "Employer Dashboard")
                }
              />
            </div>
          </div>

          {/* Section 3 */}
          <div className="row align-items-center mb-5">
            <div className="col-lg-7 mb-4 mb-lg-0">
              <img
                src={`${base_url}/assets/img/Screenshots/broker-3.png`}
                alt="Sales Dashboard"
                className="img-fluid rounded shadow"
                style={{
                  width: "100%",
                  maxHeight: "700px",
                  objectFit: "cover",
                  cursor: "pointer",
                }}
                onClick={() =>
                  handleShow(`${base_url}/assets/img/Screenshots/broker-3.png`, "Sales Dashboard")
                }
              />
            </div>
            <div className="col-lg-5">
              <h2 className="fw-bold mb-3">Sales Dashboard</h2>
              {/* <p
                className="text-muted"
                style={{ textAlign: "justify", fontSize: "1.1rem" }}
              >
                At ZoyaMe, we deliver customized digital solutions and employee
                benefits consulting designed to help businesses thrive.
              </p> */}
            </div>
          </div>

          {/* Section 4 */}
          <div className="row align-items-center mb-5">
            <div className="col-lg-5 mb-4">
              <h2 className="fw-bold mb-3">Operations Dashboard</h2>
              {/* <p
                className="text-muted"
                style={{ textAlign: "justify", fontSize: "1.1rem" }}
              >
                At ZoyaMe, we deliver customized digital solutions and employee
                benefits consulting designed to help businesses thrive.
              </p> */}
            </div>
            <div className="col-lg-7">
              <img
                src={`${base_url}/assets/img/Screenshots/broker-4.png`}
                alt="Operations Dashboard"
                className="img-fluid rounded shadow"
                style={{
                  width: "100%",
                  maxHeight: "700px",
                  objectFit: "cover",
                  cursor: "pointer",
                }}
                onClick={() =>
                  handleShow(`${base_url}/assets/img/Screenshots/broker-4.png`, "Operations Dashboard")
                }
              />
            </div>
          </div>
        </div>

        {/* Modal */}
        <Modal show={show} onHide={handleClose} size="xl" centered>
          <Modal.Header closeButton>
            <Modal.Title>{selectedTitle}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="p-0 text-center">
            <img
              src={selectedImg}
              alt={selectedTitle}
              className="img-fluid rounded"
              style={{ maxHeight: "80vh", objectFit: "contain" }}
            />
          </Modal.Body>
        </Modal>
      </div>
      {/* Screenshots */}

    </>
  )
}

export default BrokerOneComp