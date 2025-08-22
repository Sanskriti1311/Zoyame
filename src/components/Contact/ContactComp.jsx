import React from 'react'
import { base_url } from '../../config';

const ContactComp = () => {
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
              <h1 className="display-4 text-white animated zoomIn">Contact Us</h1>
              <a href="#" className="h5 text-white">Home</a>
              <i className="far fa-circle text-white px-2"></i>
              <a href="#" className="h5 text-white">Contact</a>
            </div>
          </div>
        </div>
      </div>
      {/* Navbar End */}

      {/* Contact Us Section Start */}
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="section-title text-center position-relative pb-3 mb-5 mx-auto" style={{ maxWidth: "600px" }} >
            <h5 className="fw-bold text-primary text-uppercase">Contact Us</h5>
            <h1 className="mb-0">
              If You Have Any Query, Feel Free To Contact Us
            </h1>
          </div>

          <div className="row g-5 mb-5">
            {/* Contact Info Column */}
            <div className="col-lg-6">
              <div className="mb-4">
                <div className="d-flex align-items-center wow fadeIn" data-wow-delay="0.1s"  style={{ marginBottom: "40px" }}>
                  <div className="d-flex align-items-center justify-content-center rounded" style={{ width: "60px", height: "60px" ,backgroundColor:"#ff9800"}}>
                    <i className="fa fa-phone-alt text-white"></i>
                  </div>
                  <div className="ps-4">
                    <h5 className="mb-2">Call to ask any question</h5>
                    <h4 className="text-primary mb-0">+012 345 6789</h4>
                  </div>
                </div>

                <div className="d-flex align-items-center wow fadeIn " data-wow-delay="0.4s" style={{ marginBottom: "40px" }}>
                  <div className="d-flex align-items-center justify-content-center rounded" style={{ width: "60px", height: "60px",backgroundColor:"#537ed2 " }}>
                    <i className="fa fa-envelope-open text-white"></i>
                  </div>
                  <div className="ps-4">
                    <h5 className="mb-2">Email to get free quote</h5>
                    <h4 className="text-primary mb-0">info@example.com</h4>
                  </div>
                </div>

                <div className="d-flex align-items-center wow fadeIn" data-wow-delay="0.8s">
                  <div className="d-flex align-items-center justify-content-center rounded" style={{ width: "60px", height: "60px",backgroundColor:"#8dcf47" }}>
                    <i className="fa fa-map-marker-alt text-white"></i>
                  </div>
                  <div className="ps-4">
                    <h5 className="mb-2">Visit our office</h5>
                    <h4 className="text-primary mb-0">123 Street, NY, USA</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="col-lg-6 wow slideInUp" data-wow-delay="0.3s">
              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <input type="text" className="form-control border bg-light px-4" placeholder="Your Name" style={{ height: "55px" }} />
                  </div>
                  <div className="col-md-6">
                    <input type="text" className="form-control border bg-light px-4" placeholder="Company Name" style={{ height: "55px" }} />
                  </div>
                  <div className="col-md-6">
                    <input type="tel" className="form-control border bg-light px-4" placeholder="Contact Number" style={{ height: "55px" }} />
                  </div>
                  <div className="col-md-6">
                    <input type="email" className="form-control border bg-light px-4" placeholder="Email Address" style={{ height: "55px" }} />
                  </div>
                  <div className="col-12">
                    <textarea className="form-control border bg-light px-4 py-3" rows="4" placeholder="Remark"></textarea>
                  </div>
                  <div className="col-12">
                    <button className="btn w-100 py-3 text-white" type="submit" style={{ backgroundColor: "#537ed2" }}>
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div style={{ width: '100vw', marginLeft: 'calc(-50vw + 50%)' }}>
            <div className="row g-0">
              <div className="col-12 wow slideInUp" data-wow-delay="0.6s">
                <iframe
                  className="position-relative w-100"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                  frameBorder="0"
                  style={{ minHeight: '500px', border: 0 }}
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                  title="Google Map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactComp