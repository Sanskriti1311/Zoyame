import React from 'react'
import TestimonialComp from '../Testimonial/TestimonialComp'
import { base_url } from '../../config';

const LeaderShipComp = () => {
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

      {/* Founder Section Start */}
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-7">
              <div className="section-title position-relative pb-3 mb-4">
                <h1 className="fw-bold text-uppercase" style={{ color: "#65518c" }}>
                  Pramod Pandey
                </h1>
              </div>
              <p className="mb-4" style={{ textAlign: "justify" }}>
                <strong>Pramod Pandey</strong> is the visionary founder and CEO of <strong>ZoyaMe</strong>, bringing over 25 years of leadership experience spanning Insurance, Technology, Operations, Digital Marketing, and HealthTech. Under his leadership, ZoyaMe has emerged as a future-ready platform company, delivering next-gen digital solutions that transform the insurance and benefits landscape.              </p>
              <p className="mb-4" style={{ textAlign: "justify" }}>
                Throughout his career, Pramod has held senior leadership roles at some of the world’s most respected firms, including Willis Towers Watson, Marsh & McLennan, UIB, Tata AIG, Wipro and Reliance. His domain expertise and hands-on approach to InsurTech and digital transformation continue to drive ZoyaMe’s product innovation and client-first philosophy.
              </p>
              <p className="mb-0" style={{ textAlign: "justify" }}>
                He also serves as the Chairman & Managing Director of Nivotime Pvt Ltd, ZoyaMe’s strategic InsurTech and technology alliance partner. His vision is rooted in simplifying complex processes through smart automation, intelligent design, and scalable digital infrastructure—making technology work meaningfully for businesses and people alike.
              </p>
            </div>
            <div className="col-lg-5 mb-0">
              <div className="position-relative h-100">
                <img
                  className="img-fluid wow zoomIn"
                  data-wow-delay="0.9s"
                  src={`${base_url}/assets/img/website_images/pramod_sir.png`}
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
            <p className="mb-1 fw-italic h5" style={{ textAlign: "justify",fontStyle: "italic" }}>
              “At <strong>ZoyaMe</strong>, we don’t just build technology—we solve real-world problems with precision, empathy, and innovation.”          
            </p>
            <h4 className="fw-bold text-uppercase mt-3 mb-1">
              Pramod Pandey
            </h4>
            <h6 className="fw-bold mt-1">
              Founder & CEO – ZoyaMe
            </h6>
          </div>
        </div>
      </div>
      {/* <hr style={{ borderTop: "2px solid #ccc", margin: "0 5%", opacity: 0.5 }} /> */}
      {/* Founder End */}

      {/* About Us Section Start */}
      {/* <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-7">
              <div className="section-title position-relative pb-3 mb-4">
                <h1 className="fw-bold text-uppercase" style={{ color: "#65518c" }}>
                  Kiran kale
                </h1>
              </div>
              <p className="mb-4" style={{ textAlign: "justify" }}>
                Kiran Kale: A Visionary Leader in Product Design and Insurance Architecture With vast experience in product design and architecture, particularly in the insurance sector, Kiran Kale is a highly respected professional known for his strategic vision, technical expertise, and problem-solving abilities. His ability to bridge technology and business needs has made him a key player in the industry, driving innovation and delivering solutions that transform the way insurance products are designed and implemented.

              </p>
              <p className="mb-4" style={{ textAlign: "justify" }}>
                Kiran's deep understanding of technology, data structures, and system architectures allows him to develop robust, scalable, and efficient solutions tailored to the evolving needs of the insurance sector. Over the years, he has played a crucial role in shaping product strategies, optimizing system workflows, and enhancing customer experiences through cutting-edge technology solutions. Beyond his technical prowess, Kiran is recognized for his collaborative leadership style and cross-functional expertise. He works seamlessly across different organizations, bringing together stakeholders, development teams, and business leaders to create high-impact, customer-centric solutions. His ability to streamline complex processes, enhance operational efficiencies, and drive business growth has earned him a reputation as a trusted advisor and industry expert.

              </p>
              <p className="mb-0" style={{ textAlign: "justify" }}>
                With a passion for continuous innovation,Kiran remains committed to pushing the boundaries of what's possible in the insurance and technology space. His forward-thinking approach ensures that the solutions he architects are not just relevant for today's challenges but are also adaptable for future advancements.

              </p>
              <p className="mb-0" style={{ textAlign: "justify" }}>
                As a leader in product design and insurance architecture,Kiran Kale is not just shaping technology—he's transforming the way the insurance industry operates, paving the way for a smarter, more efficient, and customer-driven future.
              </p>
            </div>
            <div className="col-lg-5 mb-0">
              <div className="position-relative h-100">
                <img
                  className="img-fluid wow zoomIn"
                  data-wow-delay="0.9s"
                  src={`${base_url}/assets/img/website_images/kiran.png`}
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
          </div>
        </div>
      </div> */}
      {/* About Us Section End */}

    </>
  )
}

export default LeaderShipComp