import React from 'react'
import { useNavigate } from 'react-router-dom';
import TestimonialComp from '../Testimonial/TestimonialComp';
import { base_url } from '../../config';

const HealthTechComp = () => {
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
              <h1 className="display-4 text-white animated zoomIn">Healthtech</h1>
              <a href="#" className="h5 text-white">
                Home
              </a>
              <i className="far fa-circle text-white px-2"></i>
              <a href="#" className="h5 text-white">
                Healthtech
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Navbar End */}

      {/* About Us Section Start */}
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-8">
              <div className="mb-5">
                <img
                  className="img-fluid w-100 rounded mb-5"
                  src={`${base_url}/assets/img/Services/HealthTech/Healthtech.jpg`}
                  alt="Blog" style={{height:"400px"}}
                />
                <h1 className="mb-4">
                  Healthtech
                </h1>
                <p>
                  <span className='text-dark fw-bold'>ZoyaMe</span>  is a leading HealthTech company that is transforming the healthcare industry through the use of innovative technology.
                </p>
                <p>
                  Our mission is to provide patients and healthcare providers with cutting-edge solutions that improve patient outcomes, reduce costs, and increase access to care. We use advanced technologies such as artificial intelligence, machine learning, and big data analytics to streamline the healthcare process and provide a seamless patient experience.
                </p>
                <p>
                  At NivoTime, we offer a wide range of healthtech products and services, including our Electronic Health Record (EHR) system, telehealth solutions, patient engagement tools, and more.
                </p>
                <p>
                  Our EHR system is designed to make it easy for healthcare providers to manage patient records and provide better care. Our system is fully customizable and user-friendly, allowing providers to access patient records from anywhere, at any time.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              {/* Service Stats */}
              <div
                className="bg-white rounded p-4 mb-4 wow fadeInUp"
                data-wow-delay="0.1s"
                style={{
                  boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px' // Custom smooth shadow
                }}
              >             
              <h3 className="mb-4 text-primary">ZoyaMe in Numbers</h3>
                <div className="d-flex align-items-center mb-3">
                  <i className="bi bi-briefcase-fill fs-3 me-3"></i>
                  <div>
                    <h5 className="mb-0">500+ Projects</h5>
                    <small>Delivered successfully</small>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <i className="bi bi-people-fill fs-3 me-3"></i>
                  <div>
                    <h5 className="mb-0">200+ Clients</h5>
                    <small>Across industries</small>
                  </div>
                </div>
                <div className="d-flex align-items-center">
                  <i className="bi bi-globe2 fs-3 me-3"></i>
                  <div>
                    <h5 className="mb-0">15+ Countries</h5>
                    <small>Worldwide presence</small>
                  </div>
                </div>
              </div>
              {/* Request a Demo */}
              <div className=" bg-light text-white rounded shadow-sm p-4 text-center wow fadeInUp" data-wow-delay="0.3s">
                <h5 className="mb-3 text-black fw-bold" >Ready to Digitize?</h5>
                <p className='text-dark '>Request a free consultation to explore how ZoyaMe can transform your business through technology.</p>
                <a href={`${base_url}/contact`} className="btn btn-sm mt-2 text-white" style={{backgroundColor:'#8dcf47'}}>Request a Demo</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About Us Section End */}

      {/* Our Services Start */}
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div
            className="section-title text-center position-relative pb-3 mb-5 mx-auto"
            style={{ maxWidth: "1000px" }}
          >
            <h5 className="fw-bold text-uppercase" style={{ color: "#65518c" }}>
              Our Solutions
            </h5>
            <h3 className="mb-0">
              Our Healthtech benefit solution provides huge range of online service, keeping in mind multiple aspects of health care
            </h3>
          </div>
          <div className="row g-5">
            <div className="col-lg-12">
              <div className="row g-5">
                {/* Service 1 */}
                <div className="col-md-4 wow slideInUp " data-wow-delay="0.1s" >
                  <div className="blog-item bg-light rounded overflow-hidden">
                    <div className="blog-img position-relative overflow-hidden">
                      <img className="img-fluid" src={`${base_url}/assets/img/website_images/ecommerce.jpg`} alt="Blog 1" />
                      <a className="position-absolute top-0 start-0 text-white rounded-end mt-5 py-2 px-4" href="#" style={{backgroundColor:"#ff9800"}}>
                        Online Consultation
                      </a>
                    </div>
                    <div className="p-4">
                      <h4 className="mb-3">Seamless Medical Support Through Virtual Consultations</h4>
                      <p>This section facilitates remote medical consultations with qualified healthcare providers, enabling patients to receive diagnoses, treatment plans, and medical advice conveniently and efficiently from anywhere with internet access.</p>
                    </div>
                  </div>
                </div>

                {/* Service 2 */}
                <div className="col-md-4 wow slideInUp" data-wow-delay="0.6s">
                  <div className="blog-item bg-light rounded overflow-hidden">
                    <div className="blog-img position-relative overflow-hidden">
                      <img className="img-fluid" src={`${base_url}/assets/img/website_images/ecommerce.jpg`} alt="Blog 2" style={{height:"266px"}}/>
                      <a className="position-absolute top-0 start-0 text-white rounded-end mt-5 py-2 px-4" href="#" style={{backgroundColor:"#ff9800"}}>
                        Diagnostic
                      </a>
                    </div>
                    <div className="p-4">
                      <h4 className="mb-3">Empowering Healthcare with Smart Diagnostic Solutions</h4>
                      <p>This section offers cutting-edge technology and tools to support accurate and efficient medical diagnoses. From advanced imaging to AI-powered analysis, it provides the necessary resources for early detection and effective treatment.</p>
                    </div>
                  </div>
                </div>

                {/* Service 3 */}
                <div className="col-md-4 wow slideInUp" data-wow-delay="0.1s">
                  <div className="blog-item bg-light rounded overflow-hidden">
                    <div className="blog-img position-relative overflow-hidden">
                      <img className="img-fluid" src={`${base_url}/assets/img/website_images/ecommerce.jpg`} alt="Blog 3" />
                      <a className="position-absolute top-0 start-0  text-white rounded-end mt-5 py-2 px-4" href="#" style={{backgroundColor:"#ff9800"}}>
                        GYM Membership
                      </a>
                    </div>
                    <div className="p-4">
                      <h4 className="mb-3">Smart Fitness with Personalized Memberships</h4>
                      <p>It provides access to a range of fitness facilities and personalized training programs designed to improve physical health and well-being. Users can track progress, set goals, and connect with trainers for support and guidance.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row g-5 mt-4">
                {/* Service 4 */}
                <div className="col-md-4 wow slideInUp" data-wow-delay="0.1s">
                  <div className="blog-item bg-light rounded overflow-hidden">
                    <div className="blog-img position-relative overflow-hidden">
                      <img className="img-fluid" src={`${base_url}/assets/img/website_images/ecommerce.jpg`} alt="Blog 1" />
                      <a className="position-absolute top-0 start-0 text-white rounded-end mt-5 py-2 px-4" href="#" style={{backgroundColor:"#ff9800"}}>
                        Health Checkup
                      </a>
                    </div>
                    <div className="p-4">
                      <h4 className="mb-3">Comprehensive Digital Health Checkups</h4>
                      <p> It offers comprehensive medical evaluations and assessments to identify potential health issues and risks. Users can schedule appointments, receive test results, and access personalized health recommendations and resources to optimize their well-being.</p>
                    </div>
                  </div>
                </div>

                {/* Service 5 */}
                <div className="col-md-4 wow slideInUp" data-wow-delay="0.6s">
                  <div className="blog-item bg-light rounded overflow-hidden">
                    <div className="blog-img position-relative overflow-hidden">
                      <img className="img-fluid" src={`${base_url}/assets/img/website_images/ecommerce.jpg`} alt="Blog 2" />
                      <a className="position-absolute top-0 start-0 text-white rounded-end mt-5 py-2 px-4" href="#" style={{backgroundColor:"#ff9800"}}>
                        Ambulance On Call
                      </a>
                    </div>
                    <div className="p-4">
                      <h4 className="mb-3">Swift Emergency Ambulance Access</h4>
                      <p>This section provides a quick and easy way to request emergency medical transport services. Users can quickly enter their location and medical information, and trained professionals will be dispatched to provide timely and efficient care.</p>
                    </div>
                  </div>
                </div>

                {/* Service 6 */}
                <div className="col-md-4 wow slideInUp" data-wow-delay="0.1s">
                  <div className="blog-item bg-light rounded overflow-hidden">
                    <div className="blog-img position-relative overflow-hidden">
                      <img className="img-fluid" src={`${base_url}/assets/img/website_images/ecommerce.jpg`} alt="Blog 3" />
                      <a className="position-absolute top-0 start-0 text-white rounded-end mt-5 py-2 px-4" href="#" style={{backgroundColor:"#ff9800"}}>
                        Online Pharmacy
                      </a>
                    </div>
                    <div className="p-4">
                      <h4 className="mb-3">Safe & Easy Access to Medicines Online</h4>
                      <p>This section offers a convenient and efficient way to purchase prescription medications and health products. Users can easily order and track deliveries, receive dosage and usage instructions, and consult with pharmacists for additional guidance and support.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row g-5 mt-4">
                {/* Service 7 */}
                <div className="col-md-4 wow slideInUp" data-wow-delay="0.1s">
                  <div className="blog-item bg-light rounded overflow-hidden">
                    <div className="blog-img position-relative overflow-hidden">
                      <img className="img-fluid" src={`${base_url}/assets/img/website_images/ecommerce.jpg`} alt="Blog 1" />
                      <a className="position-absolute top-0 start-0 text-white rounded-end mt-5 py-2 px-4" href="#" style={{backgroundColor:"#ff9800"}}>
                        Hospital Directory
                      </a>
                    </div>
                    <div className="p-4">
                      <h4 className="mb-3">Find the Right Hospital with Ease</h4>
                      <p>It provides a comprehensive listing of hospitals and medical centers with detailed information on services offered, medical staff, and ratings from other users. Users can search for facilities based on location, specialty, and other criteria to find the best care options.</p>
                    </div>
                  </div>
                </div>

                {/* Service 8 */}
                <div className="col-md-4 wow slideInUp" data-wow-delay="0.6s">
                  <div className="blog-item bg-light rounded overflow-hidden">
                    <div className="blog-img position-relative overflow-hidden">
                      <img className="img-fluid" src={`${base_url}/assets/img/website_images/ecommerce.jpg`} alt="Blog 2" />
                      <a className="position-absolute top-0 start-0 text-white rounded-end mt-5 py-2 px-4" href="#" style={{backgroundColor:"#ff9800"}}>
                        Corporate Wellness
                      </a>
                    </div>
                    <div className="p-4">
                      <h4 className="mb-3">Boosting Workforce Health with Corporate Wellness</h4>
                      <p>The Corporate Wellness section provides a curated list of hospitals and medical centers that offer specialized services for corporate wellness programs. Companies can easily access information on employee health programs, occupational health services, and onsite medical facilities to ensure the well-being of their workforce.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Our Services End */}

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
    </>
  )
}

export default HealthTechComp