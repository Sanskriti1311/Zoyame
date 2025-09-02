import React, { useEffect, useRef, useState } from 'react'
import { base_url } from '../../config';
import { Link, useNavigate } from "react-router-dom";
import ReactOwlCarousel from 'react-owl-carousel';
import { FaRocket, FaBuilding, FaUsers, FaFileMedical, FaChartBar, FaShoppingCart, FaBoxes, FaCashRegister } from "react-icons/fa";
import { Modal } from "react-bootstrap";


const feature = [
  {
    title: "Smart POS & Billing",
    icon: <FaCashRegister className="text-purple-600 text-4xl mb-4" />,
    points: [
      "Fast and secure checkout with barcode and QR code scanning.",
      "Integrated payment options (cash, card, UPI, wallets).",
      "Manage discounts, offers, and loyalty points directly at billing.",
      "Generate GST-compliant invoices instantly.",
    ],
  },
  {
    title: "Inventory & Stock Management",
    icon: <FaBoxes className="text-green-600 text-4xl mb-4" />,
    points: [
      "Track stock levels in real-time across multiple locations.",
      "Auto alerts for low-stock and expiry management.",
      "Batch-wise and SKU-level inventory tracking.",
      "Smart purchase planning with supplier integration.",
    ],
  },
  {
    title: "Customer Engagement Portal",
    icon: <FaUsers className="text-blue-600 text-4xl mb-4" />,
    points: [
      "Build loyalty programs with reward points and offers.",
      "Personalized recommendations based on purchase history.",
      "Send promotions via SMS, WhatsApp, and email.",
      "Track customer feedback and ratings in one dashboard.",
    ],
  },
  {
    title: "Omnichannel Retail Management",
    icon: <FaShoppingCart className="text-red-600 text-4xl mb-4" />,
    points: [
      "Manage online and offline store sales in one system.",
      "Integrate with e-commerce platforms and marketplaces.",
      "Real-time synchronization of catalog, pricing, and stock.",
      "Unified customer database for seamless shopping experience.",
    ],
  },
  {
    title: "Analytics & Reporting",
    icon: <FaChartBar className="text-yellow-600 text-4xl mb-4" />,
    points: [
      "Get daily, weekly, and monthly sales insights.",
      "Track top-selling products and seasonal trends.",
      "Monitor store performance and staff productivity.",
      "Export MIS reports for decision-making and forecasting.",
    ],
  },
];

const RetailSolutionProductComp = () => {

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
    title: "Smart AI & Automation",
    icon: <i className="bi bi-cpu-fill text-purple fs-2"></i>,
    items: [
      "AI-powered demand forecasting to predict sales trends and optimize stock levels.",
      "Smart chatbot for customer queries like product availability, order status, or returns.",
      "Automated reminders for restocking, seasonal promotions, and abandoned cart follow-ups via WhatsApp/SMS/Email.",
    ],
    delay: "100",
  },
  {
    title: "Retail Compliance & Data Security",
    icon: <i className="bi bi-shield-lock-fill text-primary fs-2"></i>,
    items: [
      "End-to-end compliance with GST, invoicing, and local retail regulations.",
      "Secure handling of customer data with GDPR & PCI-DSS standards.",
      "Role-based access for cashiers, store managers, and admins with audit trails.",
    ],
    delay: "200",
  },
  {
    title: "Flexible Customization & Scalability",
    icon: <i className="bi bi-gear-fill text-success fs-2"></i>,
    items: [
      "White-labeled POS interface with your store’s branding.",
      "Multi-store and multi-warehouse management with central control.",
      "Flexible catalog setup with variants (size, color, bundles, discounts).",
      "Scalable to support both single outlets and large retail chains with 100+ stores.",
    ],
    delay: "300",
  },
  {
    title: "Integrated Financial Management",
    icon: <i className="bi bi-cash-stack text-warning fs-2"></i>,
    items: [
      "End-to-end billing, invoicing, and supplier payment management.",
      "Integrated payment gateway for cards, wallets, and UPI.",
      "Automated profit, expense, and commission reports for better decision-making.",
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
              <h1 className="display-4 text-white animated zoomIn">Retail Solution</h1>
              <a href="#" className="h5 text-white">
                Home
              </a>
              <i className="far fa-circle text-white px-2"></i>
              <a href="#" className="h5 text-white">
                Retail Solution
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
                  src={`${base_url}/assets/img/Products/Retail_Solution.jpeg`}
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
                  Retail Solution
                </h5>
                <h1 className="display-5 mb-0">A Complete Digital Platform for Smarter Retail Management</h1>
              </div>

              <p className="mb-3 text-muted wow fadeInUp" data-wow-delay="0.3s">
                Our Retail Solution is a smart platform designed for today’s retail
                businesses. It streamlines operations by integrating sales, inventory,
                customer engagement, and analytics into one unified system.
              </p>

              <p className="mb-4 text-muted wow fadeInUp" data-wow-delay="0.4s">
                By leveraging real-time data, the system optimizes stock levels, tracks
                customer buying patterns, and automates promotions across multiple channels.
                This ensures retailers deliver personalized experiences while reducing costs
                and boosting sales.
              </p>

              <p className="mb-4 text-muted wow fadeInUp" data-wow-delay="0.4s">
                Built with modular configuration, retailers can customize features such as
                loyalty programs, multi-store management, and omnichannel support. With
                role-based access, staff can securely manage operations while decision-makers
                gain actionable insights through detailed dashboards.The result: faster checkouts, smarter merchandising, and higher customer
                satisfaction in the competitive retail market.
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
                feature.title.includes("Smart POS & Billing")
                  ? "linear-gradient(135deg,#6C5DD3,#9F7AEA)"
                  : feature.title.includes("Customer Engagement Portal")
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
      {/* <div className="container-fluid py-5 position-relative wow fadeIn" data-wow-delay="0.1s" >
        <div className="container py-5">
          <div className="section-title text-center position-relative pb-3 mb-5 mx-auto">
            <h4 className="fw-bold text-primary text-uppercase">Why Choose Our Product?</h4>
            <p>Built for the Dubai insurance market, BrokerOne Solution transforms the way brokers, corporates, and TPAs manage employee benefits. From lead capture to policy issuance, everything happens digitally — faster, smarter, and compliant with DHA & CBUAE regulations.</p>
          </div>
          <div className="row g-4 align-items-center">
            <div className="col-md-7 slide-left">
              <div className="accordion" id="faqAccordion">

                <div className="accordion-item mb-3">
                  <h2 className="accordion-header" id="faqHeadingOne">
                    <button
                      className="accordion-button fs-5"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faqCollapseOne"
                      aria-expanded="true"
                      aria-controls="faqCollapseOne"
                      style={{backgroundColor:"#65518c", color:"#fff"}}
                    >
                      What is BrokerOne Solution?
                    </button>
                  </h2>
                  <div
                    id="faqCollapseOne"
                    className="accordion-collapse collapse show animate-collapse"
                    aria-labelledby="faqHeadingOne"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      BrokerOne Solution is a digital platform designed for brokers, corporates, and TPAs to manage employee benefits seamlessly, from lead capture to policy issuance.
                    </div>
                  </div>
                </div>

                <div className="accordion-item mb-3">
                  <h2 className="accordion-header" id="faqHeadingTwo">
                    <button
                      className="accordion-button fs-5"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faqCollapseTwo"
                      aria-expanded="false"
                      aria-controls="faqCollapseTwo"
                      style={{backgroundColor:"#ff9800", color:"#fff"}}
                    >
                      How does it simplify policy management?
                    </button>
                  </h2>
                  <div
                    id="faqCollapseTwo"
                    className="accordion-collapse collapse animate-collapse"
                    aria-labelledby="faqHeadingTwo"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      The platform centralizes all policy-related information, allowing brokers and corporates to track, update, and issue policies efficiently without manual paperwork.
                    </div>
                  </div>
                </div>

                <div className="accordion-item mb-3">
                  <h2 className="accordion-header" id="faqHeadingThree">
                    <button
                      className="accordion-button fs-5"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faqCollapseThree"
                      aria-expanded="false"
                      aria-controls="faqCollapseThree"
                      style={{backgroundColor:"#8dcf47", color:"#fff"}}
                    >
                      Can it help with employee benefits tracking?
                    </button>
                  </h2>
                  <div
                    id="faqCollapseThree"
                    className="accordion-collapse collapse animate-collapse"
                    aria-labelledby="faqHeadingThree"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      Yes! BrokerOne Solution provides real-time dashboards to monitor employee benefits, claims, and entitlements, ensuring transparency and reducing errors.
                    </div>
                  </div>
                </div>

                <div className="accordion-item mb-3">
                  <h2 className="accordion-header" id="faqHeadingFour">
                    <button
                      className="accordion-button fs-5"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faqCollapseFour"
                      aria-expanded="false"
                      aria-controls="faqCollapseFour"
                      style={{backgroundColor:"#00acc1", color:"#fff"}}
                    >
                      Is it compliant with local regulations?
                    </button>
                  </h2>
                  <div
                    id="faqCollapseFour"
                    className="accordion-collapse collapse animate-collapse"
                    aria-labelledby="faqHeadingFour"
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">
                      Absolutely. The platform is fully compliant with DHA and CBUAE regulations, ensuring that all workflows and approvals follow legal requirements.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-md-5 slide-right"
              style={{
                backgroundImage: `url('${base_url}/assets/img/Products/whychoose.avif')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "400px",
                borderRadius: "8px",
              }}
            ></div>
          </div>
        </div>
      </div> */}
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
                src={`${base_url}/assets/img/Screenshots/retail-01.jpg`}
                alt="Home Page"
                className="img-fluid rounded shadow"
                style={{
                  width: "100%",
                  maxHeight: "700px",
                  objectFit: "cover",
                  cursor: "pointer",
                }}
                onClick={() =>
                  handleShow(`${base_url}/assets/img/Screenshots/retail-01.jpg`, "Home Page")
                }
              />
            </div>
            <div className="col-lg-5">
              <h2 className="fw-bold mb-3">Home Page</h2>
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
              <h2 className="fw-bold mb-3">Car Health</h2>
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
                src={`${base_url}/assets/img/Screenshots/retail-02.jpg`}
                alt="Car Health"
                className="img-fluid rounded shadow"
                style={{
                  width: "100%",
                  maxHeight: "700px",
                  objectFit: "cover",
                  cursor: "pointer",
                }}
                onClick={() =>
                  handleShow(`${base_url}/assets/img/Screenshots/retail-02.jpg`, "Car Health")
                }
              />
            </div>
          </div>

          {/* Section 3 */}
          <div className="row align-items-center mb-5">
            <div className="col-lg-7 mb-4 mb-lg-0">
              <img
                src={`${base_url}/assets/img/Screenshots/retail-03.jpg`}
                alt="Login Page"
                className="img-fluid rounded shadow"
                style={{
                  width: "100%",
                  maxHeight: "700px",
                  objectFit: "cover",
                  cursor: "pointer",
                }}
                onClick={() =>
                  handleShow(`${base_url}/assets/img/Screenshots/retail-03.jpg`, "Login Page")
                }
              />
            </div>
            <div className="col-lg-5">
              <h2 className="fw-bold mb-3">Login Page</h2>
              {/* <p
                className="text-muted"
                style={{ textAlign: "justify", fontSize: "1.1rem" }}
              >
                At ZoyaMe, we deliver customized digital solutions and employee
                benefits consulting designed to help businesses thrive.
              </p> */}
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


export default RetailSolutionProductComp




