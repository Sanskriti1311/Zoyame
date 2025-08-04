import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import TestimonialComp from '../Testimonial/TestimonialComp';
import { base_url } from '../../config';

const TechnologyComp = () => {
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
              <h1 className="display-4 text-white animated zoomIn">Technology</h1>
              <a href="#" className="h5 text-white">
                Home
              </a>
              <i className="far fa-circle text-white px-2"></i>
              <a href="#" className="h5 text-white">
                Technology
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
                  src={`${base_url}/assets/img/Services/Technology/Technology.jpg`}
                  alt="Blog" style={{height:"400px"}}
                />
                <h1 className="mb-4">
                  Technology
                </h1>
                <p>
                  <span className='text-dark fw-bold'>Welcome to ZoyaMe,</span> a cutting-edge technology company that is committed to driving innovation and excellence in the industry.
                  Our mission is to create and deliver high-quality products and services that leverage the latest advancements in technology to solve real-world problems and make a meaningful impact on business.
                </p>
                <p>
                  At ZoyaMe, we are a team of experienced and passionate professionals who are dedicated to pushing the boundaries of what is possible. We bring together expertise in various fields, including software engineering, artificial intelligence, data analytics, and cloud computing, to provide our clients with customized solutions that meet their unique needs and exceed their expectations.
                </p>
                <p>
                  We are committed to staying at the forefront of the industry by constantly exploring new technologies and methodologies, and investing in research and development. We believe that our innovative spirit and collaborative approach set us apart from the competition and enable us to deliver exceptional value to our clients.
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
                  boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'
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
              Our Analytics tool have capabilities to handle millions of data and process based on which we provide below features.

            </h3>
          </div>
          <div className="row g-5">
            <div className="col-lg-12">
              <div className="row g-5">
                {/* Service 1 */}
                <div className="col-md-4 wow slideInUp" data-wow-delay="0.1s" >
                  <div className="blog-item bg-light rounded overflow-hidden">
                    <div className="blog-img position-relative overflow-hidden">
                      <img className="img-fluid" src={`${base_url}/assets/img/Services/Technology/ecommerce-01.jpg`} alt="Ecommerce" />
                      <a className="position-absolute top-0 start-0 text-white rounded-end mt-5 py-2 px-4" href="#" style={{backgroundColor:"#ff9800"}}>
                        Ecommerce
                      </a>
                    </div>
                    <div className="p-4">
                      <h4 className="mb-3">Unlocking Business Growth via Ecommerce</h4>
                      <p>It is a transaction of buying and selling online Online shopping web sites for retail sales direct to consumers Providing or participating in online marketplaces, which process third-party business- to-consumer or consumer-to-consumer sales Business to business buying and selling.</p>
                    </div>
                  </div>
                </div>

                {/* Service 2 */}
                <div className="col-md-4 wow slideInUp" data-wow-delay="0.6s">
                  <div className="blog-item bg-light rounded overflow-hidden">
                    <div className="blog-img position-relative overflow-hidden">
                      <img className="img-fluid" src={`${base_url}/assets/img/Services/Technology/enterpriseProtal-02.jpg`} alt="Enterprise portal"/>
                      <a className="position-absolute top-0 start-0 text-white rounded-end mt-5 py-2 px-4" href="#" style={{backgroundColor:"#ff9800"}}>
                        Enterprise Portal
                      </a>
                    </div>
                    <div className="p-4">
                      <h4 className="mb-3">Streamlining Operations with Enterprise Portals</h4>
                      <p>We at ZoyaMe have framework for integrating information, people and processes across organizational boundaries in manner similar to the more general web portals.Enterprise portals provide a secure unified access point, often in the form of a web-based user interface.</p>
                    </div>
                  </div>
                </div>

                {/* Service 3 */}
                <div className="col-md-4 wow slideInUp" data-wow-delay="0.1s">
                  <div className="blog-item bg-light rounded overflow-hidden">
                    <div className="blog-img position-relative overflow-hidden">
                      <img className="img-fluid" src={`${base_url}/assets/img/Services/Technology/serverManagement-03.jpg`} alt="Server Management" />
                      <a className="position-absolute top-0 start-0  text-white rounded-end mt-5 py-2 px-4" href="#" style={{backgroundColor:"#ff9800"}}>
                        Server Management
                      </a>
                    </div>
                    <div className="p-4">
                      <h4 className="mb-3">Ensuring Stability Through Server Management</h4>
                      <p>At ZoyaMe we have IT operations engineers who are responsible for day to day management and troubleshooting of networks, servers, operating systems, and applications, Our professional team is accountable for network and server management, IT hardware, Software budgets, and Technical decisions.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row g-5 mt-4">
                {/* Service 4 */}
                <div className="col-md-4 wow slideInUp" data-wow-delay="0.1s">
                  <div className="blog-item bg-light rounded overflow-hidden">
                    <div className="blog-img position-relative overflow-hidden">
                      <img className="img-fluid" src={`${base_url}/assets/img/Services/Technology/softwareSupport-04.jpg`} alt="Software Support" />
                      <a className="position-absolute top-0 start-0 text-white rounded-end mt-5 py-2 px-4" href="#" style={{backgroundColor:"#ff9800"}}>
                        Software Support
                      </a>
                    </div>
                    <div className="p-4">
                      <h4 className="mb-3">Reliable Software Support Services</h4>
                      <p> Our purpose at ZoyaMe is not just to sell software's to our customers but to guide and serve them as well. Hence we have an effective Technical Support Team which provides updates and patches and security holes in the program and our team also helps our customers with software usability.</p>
                    </div>
                  </div>
                </div>

                {/* Service 5 */}
                <div className="col-md-4 wow slideInUp" data-wow-delay="0.6s">
                  <div className="blog-item bg-light rounded overflow-hidden">
                    <div className="blog-img position-relative overflow-hidden">
                      <img className="img-fluid" src={`${base_url}/assets/img/Services/Technology/reEngineering-05.jpg`} alt="Re engineering" />
                      <a className="position-absolute top-0 start-0 text-white rounded-end mt-5 py-2 px-4" href="#" style={{backgroundColor:"#ff9800"}}>
                        Re-Engineering
                      </a>
                    </div>
                    <div className="p-4">
                      <h4 className="mb-3">Transforming Legacy Systems through Re-Engineering</h4>
                      <p>Here at Login we have accomplished engineers who are well versed in the process of re-engineering that is restructuring existing computer code without changing its external behavior this improves nonfunctional attributes of the software, its advantages include improved code readability and reduced complexity.</p>
                    </div>
                  </div>
                </div>

                {/* Service 6 */}
                <div className="col-md-4 wow slideInUp" data-wow-delay="0.1s">
                  <div className="blog-item bg-light rounded overflow-hidden">
                    <div className="blog-img position-relative overflow-hidden">
                      <img className="img-fluid" src={`${base_url}/assets/img/Services/Technology/cyberSecurity-06.jpg`} alt="Cyber Security" />
                      <a className="position-absolute top-0 start-0 text-white rounded-end mt-5 py-2 px-4" href="#" style={{backgroundColor:"#ff9800"}}>
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

              <div className="row g-5 mt-4">
                {/* Service 7 */}
                <div className="col-md-4 wow slideInUp" data-wow-delay="0.1s">
                  <div className="blog-item bg-light rounded overflow-hidden">
                    <div className="blog-img position-relative overflow-hidden">
                      <img className="img-fluid" src={`${base_url}/assets/img/Services/Technology/softwareTesting-07.jpg`} alt="Software testing" />
                      <a className="position-absolute top-0 start-0 text-white rounded-end mt-5 py-2 px-4" href="#" style={{backgroundColor:"#ff9800"}}>
                        Software Testing
                      </a>
                    </div>
                    <div className="p-4">
                      <h4 className="mb-3">Mastering the Essentials of Software Testing</h4>
                      <p>  This section provides developers with a comprehensive suite of tools to test website functionality, performance, and security. This feature ensures a high-quality user experience and enhances website reliability.</p>
                    </div>
                  </div>
                </div>

                {/* Service 8 */}
                <div className="col-md-4 wow slideInUp" data-wow-delay="0.6s">
                  <div className="blog-item bg-light rounded overflow-hidden">
                    <div className="blog-img position-relative overflow-hidden">
                      <img className="img-fluid" src={`${base_url}/assets/img/Services/Technology/applicationMaintenance-08.jpg`} alt="Application Maintenance" />
                      <a className="position-absolute top-0 start-0 text-white rounded-end mt-5 py-2 px-4" href="#" style={{backgroundColor:"#ff9800"}}>
                        Application Maintenance
                      </a>
                    </div>
                    <div className="p-4">
                      <h4 className="mb-3">Ensuring Performance Through Application Maintenance</h4>
                      <p> This section allows website owners to schedule routine maintenance tasks, such as updates and backups, to ensure the website is secure and functioning optimally. This feature improves website performance and minimizes downtime.</p>
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

export default TechnologyComp