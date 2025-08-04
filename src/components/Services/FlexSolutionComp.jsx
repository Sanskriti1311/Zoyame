import React from 'react'
import { useNavigate } from 'react-router-dom';
import TestimonialComp from '../Testimonial/TestimonialComp';
import { base_url } from '../../config';

const FlexSolutionComp = () => {
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
              <h1 className="display-4 text-white animated zoomIn">Flex Solution</h1>
              <a href="#" className="h5 text-white">
                Home
              </a>
              <i className="far fa-circle text-white px-2"></i>
              <a href="#" className="h5 text-white">
                Flex Solution
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
              {/* Blog Detail Start */}
              <div className="mb-5">
                <img
                  className="img-fluid w-100 rounded mb-5"
                  src={`${base_url}/assets/img/Services/Flex_Solution/flex_solution.jpg`}
                  alt="Blog" style={{height:"400px"}}
                />
                <h1 className="mb-4">
                  Flex Solution
                </h1>
                <p>
                  <span className='text-dark fw-bold'>An insurance flex benefit system</span>, also known as a flexible benefits plan or a cafeteria plan, is a customizable insurance program that allows employees to select and tailor their insurance coverage based on their individual needs and preferences. We provide employees with a range of insurance options, including health, dental, vision, life, disability, and other insurance benefits, from which they can choose.
                </p>
                <p>
                  In a traditional benefits plan, employees are typically offered a pre-determined set of insurance coverage options with limited flexibility. However, with an insurance flex benefit system, employers provide a menu of insurance choices, allowing employees to allocate their benefit dollars according to their unique circumstances. This empowers employees to customize their insurance coverage to suit their personal requirements, potentially resulting in higher job satisfaction and improved employee retention.
                </p>
                <p>
                  Before launching the flex program we launch a flex survey to understand what type benefits employees are looking for, in what type of benefits they are interested in. this survey help us in designing the insurance coverages and trending benefits.
                </p>
                
              </div>
              {/* Blog Detail End */}
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
              The technology platform for Flex Benefits Solution may include the following features.
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
                        Flex Survey
                      </a>
                    </div>
                    <div className="p-4">
                      <h4 className="mb-3">Optimizing Benefits with Flex Surveys</h4>
                      <p>A user-friendly platform to gather employee data, preferences, and insurance coverage needs. It includes customizable survey templates, questions, and data analysis tools to optimize insurance coverage plans that align with employee needs and improve satisfaction and retention.</p>
                    </div>
                  </div>
                </div>

                {/* Service 2 */}
                <div className="col-md-4 wow slideInUp" data-wow-delay="0.6s">
                  <div className="blog-item bg-light rounded overflow-hidden">
                    <div className="blog-img position-relative overflow-hidden">
                      <img className="img-fluid" src={`${base_url}/assets/img/website_images/ecommerce.jpg`} alt="Blog 2" />
                      <a className="position-absolute top-0 start-0 text-white rounded-end mt-5 py-2 px-4" href="#" style={{backgroundColor:"#ff9800"}}>
                        Vendor Integration
                      </a>
                    </div>
                    <div className="p-4">
                      <h4 className="mb-3">Seamless Vendor Integration via Enterprise Portals</h4>
                      <p>Connecting multiple types of vendors from different parts of the healthcare sector into one single place is our flex. which includes insurance companies, TPA, wellness providers, GYM players, and physical wellness product providers like decathlon. this will provide a buffet of benefits for the corporate employee to choose from.</p>
                    </div>
                  </div>
                </div>

                {/* Service 3 */}
                <div className="col-md-4 wow slideInUp" data-wow-delay="0.1s">
                  <div className="blog-item bg-light rounded overflow-hidden">
                    <div className="blog-img position-relative overflow-hidden">
                      <img className="img-fluid" src={`${base_url}/assets/img/website_images/ecommerce.jpg`} alt="Blog 3" />
                      <a className="position-absolute top-0 start-0  text-white rounded-end mt-5 py-2 px-4" href="#" style={{backgroundColor:"#ff9800"}}>
                        Data Management
                      </a>
                    </div>
                    <div className="p-4">
                      <h4 className="mb-3">Reliable Data Handling with Robust Server Management</h4>
                      <p>Managing employee data related to insurance coverage. It includes customizable survey templates, data entry, data analysis, and reporting capabilities to streamline data management processes, ensure data accuracy, and make informed decisions that optimize insurance coverage plans.</p>
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
                        Analytics and Reporting
                      </a>
                    </div>
                    <div className="p-4">
                      <h4 className="mb-3">Driving Insights Through Analytics & Reporting</h4>
                      <p> Providing insurance companies with comprehensive data analysis tools to track and monitor various aspects of their insurance coverage. This feature enables the company to make data-driven decisions, optimize its product offerings, and improve customer satisfaction by providing insights into customer behavior and preferences.</p>
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

export default FlexSolutionComp