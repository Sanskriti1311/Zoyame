import React, { useEffect, useRef, useState } from 'react'
import { base_url } from '../../config';
import { Link, useNavigate } from "react-router-dom";
import './Product.scss';
import ReactOwlCarousel from 'react-owl-carousel';


import { FaRocket, FaBuilding, FaUsers, FaFileMedical, FaChartBar } from "react-icons/fa";
import { FaRobot, FaShieldAlt, FaCogs, FaMoneyBillWave } from "react-icons/fa";

const feature = [
  {
    title: "Quote/Lead Management",
    icon: <FaRocket className="text-purple-600 text-4xl mb-4" />,
    points: [
      "Corporates inquire about policies via brokers, insurance marketplaces, direct insurers, or agents.",
      "Cold outreach (Emails, Calls, LinkedIn) from insurers or brokers",
      "HR & Finance teams looking for policy renewals or new plans",
      "Corporates provide details about workforce size,  industry type, risk factors, and required coverage.",
      "Leads are assigned to corporate insurance sales teams or brokers based on company size, location, and industry.",
    ],
  },
  {
    title: "Quote Comparison",
    icon: <FaBuilding className="text-green-600 text-4xl mb-4" />,
    points: [
      "Quote Request & Data Collection: The corporate provides employee census data (Age, Gender, Salary Slabs, Designation, etc.).",
      "Insurers assess workplace risks, industry-specific hazards, and historical claims data.",
      "Premium Calculation & Customization: GMC, GPA, and GTL quotes are calculated based on workforce age distribution, past claim ratio, and sum insured per employee.",
      "Comparison of Multiple Insurer Quotes: Brokers or HR teams compare offers based on premium amount, inclusions & exclusions, network hospital coverage, claim settlement ratio, and wellness/OPD features.",
    ],
  },
  {
    title: "OCR",
    icon: <FaUsers className="text-blue-600 text-4xl mb-4" />,
    points: [
    "Employee Census Extraction: HR teams provide bulk employee data in PDFs, scanned documents, or images. OCR extracts Name, DOB, Salary, Designation, and Location for premium calculation.",
    "Previous Policy & Claim History Extraction: OCR reads past insurance documents to analyze previous claim ratios and risk factors, helping in renewal pricing and quote adjustments.",
    "Financial & Business Document Processing: For large corporate deals, OCR processes financial statements, tax records, and compliance documents to assess company risk before quoting.",
    "KYC & Identity Verification: OCR scans Aadhaar, PAN, Passport, and Driving License to verify policyholder identity, aiding in fraud detection and faster claim settlements.",
  ],
  },
  {
    title: "Chat Bot",
    icon: <FaFileMedical className="text-red-600 text-4xl mb-4" />,
    points: [
    "Policy Details & Coverage Inquiry: Employees can ask questions like 'What does my GMC policy cover?' The chatbot fetches policy details, sum insured, exclusions, and benefits instantly.",
    "Digital Policy Issuance & ID Card Download: Employees can request their insurance e-card directly from the chatbot, which provides a PDF download link.",
    "Hospital Network & Cashless Claim Assistance: Employees can search for network hospitals near them for cashless treatments. The chatbot provides a list of empaneled hospitals with location and contact details.",
    "Claim Status Tracking: Employees can ask 'What is the status of my reimbursement claim?' The chatbot fetches real-time claim status from the TPA system.",
  ],
  },
  {
    title: "Ticketing Module",
    icon: <FaFileMedical className="text-red-600 text-4xl mb-4" />,
    points: [
      "Policy Coverage & Benefits Queries: Employees can raise tickets for queries like 'What are the exclusions in my GPA policy?' or 'Can I add my spouse to my GMC policy?'. The system auto-assigns the ticket to the relevant department (HR, insurer, or TPA).",
      "Claim Processing & Status Tracking: Employees can raise a ticket for delayed claims. The ticketing system fetches real-time claim status and updates the employee, sending auto-reminders to the insurer/TPA if needed.",
      "Hospital Network & Cashless Approvals: Employees can raise a ticket to confirm cashless eligibility at a specific hospital. The system routes the request to the insurer or TPA for quick resolution.",
    ],
  },
];

const EmployeeBenefitPortalComp = () => {

  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

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
      title: "Enrollment",
      icon: <FaCogs className="text-purple-600 fs-2" />,
      items: [
        "Rule Creation: Define and manage rules for employee enrollment and benefits selection.",
        "Rule-Benefits Selection: Simplify employee benefit choices with structured, guided selection.",
        "Pre-Post Enrollment Reminders: Automate reminder emails before and after enrollment periods.",
        "Email Content Management & Other Features: Easily manage email communications and additional enrollment functionalities.",
      ],
      delay: "100",
    },
    {
      title: "Endorsement",
      icon: <FaUsers className="text-blue-600 fs-2" />,
      items: [
        "Manage Additions & Deletions: Easily add or remove employees from the policy as needed.",
        "Data Corrections: Update employee details accurately at the desired frequency.",
        "Seamless Endorsement Flow: Ensure smooth data flow across all internal systems.",
        "Integration with TPA & Insurers: Automate data sharing with TPAs and insurance companies for accurate and timely processing.",
      ],
      delay: "200",
    },
    {
      title: "TPA Integration ",
      icon: <FaFileMedical className="text-green-600 fs-2" />,
      items: [
        "Integration with TPAs: Connect seamlessly with Third-Party Administrators for claims processing.",
        "Claims Detail Access: Retrieve detailed claim information efficiently through the integrated system.",
        "Smooth Information Flow: Ensure data moves seamlessly from insurer to TPA to insured.",
        "API-Dependent Automation: Functionality depends on the availability of APIs for accurate and timely data transfer.",
      ],
      delay: "300",
    },
    {
      title: "Dashboard Reports",
      icon: <FaChartBar className="text-yellow-600 fs-2" />,
      items: [
        "Create Custom Reports: Users can define and generate reports based on their requirements.",
        "Real-Time MIS Reports: Access live data on demographics, enrollments, endorsements, and claims.",
        "E-Card & Offline Data Access: Track e-card downloads and offline TPA-reported data.",
        "Single-Click Availability: All reports can be generated and viewed instantly with one click.",
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
                feature.title.includes("Quote/Lead Management")
                  ? "linear-gradient(135deg,#6C5DD3,#9F7AEA)"
                  : feature.title.includes("Quote Comparison")
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
      <section className="py-5 bg-light">
        <div className="container">
          <div className="text-center mb-5" style={{ maxWidth: "700px", margin: "0 auto" }}>
            <h5 className="fw-bold text-primary text-uppercase">Advanced Features</h5>
            <h1 className="mb-0">Powering automation, compliance, scalability, and financial excellence</h1>
          </div>

          <div className="d-flex flex-column gap-5">
            {features.map((feature, idx) => {
              const gradients = [
                "linear-gradient(135deg,#6C5DD3,#9F7AEA)",
                "linear-gradient(135deg,#2563EB,#93C5FD)",
                "linear-gradient(135deg,#16A34A,#A7F3D0)",
                "linear-gradient(135deg,#F59E0B,#FCD34D)",
              ];
              const gradient = gradients[idx % gradients.length];

              const isEven = idx % 2 === 0;

              return (
                <div key={idx} className={`d-flex flex-column flex-md-row align-items-center ${isEven ? '' : 'flex-md-row-reverse'}`} data-aos="fade-up" data-aos-delay={feature.delay}>
                  
                  {/* Icon block */}
                  <div className="d-flex align-items-center justify-content-center mb-3 mb-md-0" style={{ width: "120px", height: "120px", background: gradient, borderRadius: "50%", flexShrink: 0 }}>
                    {React.cloneElement(feature.icon, { className: "fs-2 text-white" })}
                  </div>

                  {/* Text content */}
                  <div className="ms-md-4 me-md-4">
                    <h5 className="fw-bold mb-3">{feature.title}</h5>
                    <ul className="list-unstyled mb-0">
                      {feature.items.map((item, i) => (
                        <li key={i} className="d-flex align-items-start mb-2 gap-2">
                          <span style={{
                            width: "12px",
                            height: "12px",
                            background: gradient,
                            display: "inline-block",
                            borderRadius: "50%",
                            marginTop: "6px"
                          }}></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* Advanced Features Section End */}

      {/* Why Choose Product Section Start */}
      <div className="container-fluid py-5 position-relative wow fadeIn" data-wow-delay="0.1s" >
        <div className="container py-5">
          <div className="section-title text-center position-relative pb-3 mb-5 mx-auto">
            <h4 className="fw-bold text-primary text-uppercase">Why Choose Our Product?</h4>
            <p>Built for the Dubai insurance market, BrokerOne Solution transforms the way brokers, corporates, and TPAs manage employee benefits. From lead capture to policy issuance, everything happens digitally — faster, smarter, and compliant with DHA & CBUAE regulations.</p>
          </div>
          <div className="row g-4 align-items-center">
            {/* Left: FAQ Accordion */}
            <div className="col-md-7 slide-left">
              <div className="accordion" id="faqAccordion">

                {/* FAQ Item 1 */}
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

                {/* FAQ Item 2 */}
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

                {/* FAQ Item 3 */}
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

                {/* FAQ Item 4 */}
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

            {/* Right: Image */}
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
      </div>
      {/* Why Choose Product Section End */}

    </>
  )
}

export default EmployeeBenefitPortalComp