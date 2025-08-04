import React from 'react'
import { useNavigate } from 'react-router-dom';
import TestimonialComp from '../Testimonial/TestimonialComp';
import { base_url } from '../../config';

const DigitalMarketingComp = () => {
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
              <h1 className="display-4 text-white animated zoomIn">Digital Marketing</h1>
              <a href="#" className="h5 text-white">
                Home
              </a>
              <i className="far fa-circle text-white px-2"></i>
              <a href="#" className="h5 text-white">
                Digital Marketing
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
                  src={`${base_url}/assets/img/Services/Digital_Marketing/Digital-Marketing.jpeg`}
                  alt="Blog" style={{height:"400px"}}
                />
                <h1 className="mb-4">
                  Digital Marketing
                </h1>
                <p>
                  <span className='text-dark fw-bold'>We are a team of experts</span> who are dedicated to helping businesses of all sizes grow and thrive in the digital landscape.
                </p>
                <p>
                  Our digital marketing services are designed to help you connect with your target audience, increase brand awareness, and drive conversions. From search engine optimization (SEO) and pay-per-click (PPC) advertising to social media marketing and email marketing, we have the skills and expertise to create a comprehensive digital marketing strategy that delivers results.                </p>
                <p>
                  At NivoTime, we believe in a data-driven approach to digital marketing. We use advanced analytics tools to track and measure the performance of your campaigns, allowing us to continually optimize and refine your strategy for maximum ROI.
                </p>
                <p>
                  Our team is committed to providing exceptional service and support to our clients. We take the time to understand your business and your goals, and we work closely with you to develop a customized digital marketing plan that fits your budget and objectives.
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
              Our Services
            </h5>
            <h3 className="mb-0">
              With our 50+ years of experience of our team in Advertising insdustry, We provide below services in digital space.
            </h3>
          </div>
          <div className="row g-5">
            <div className="col-lg-12">
              <div className="row g-5">
                {/* Service 1 */}
                <div className="col-md-4 wow slideInUp " data-wow-delay="0.1s" >
                  <div className="blog-item bg-light rounded overflow-hidden">
                    <div className="blog-img position-relative overflow-hidden">
                      <img className="img-fluid" src={`${base_url}/assets/img/Services/Digital_Marketing/seo-01.jpg`} alt="SEO" />
                      <a className="position-absolute top-0 start-0 text-white rounded-end mt-5 py-2 px-4" href="#" style={{backgroundColor:"#ff9800"}}>
                        SEO
                      </a>
                    </div>
                    <div className="p-4">
                      <h4 className="mb-3">Boost Visibility & Rankings with Expert SEO</h4>
                      <p>Providing strategies and tools to optimize website content and improve search engine rankings. It includes keyword research, on-page optimization, link building, and analytics to drive traffic and increase conversions.</p>
                    </div>
                  </div>
                </div>

                {/* Service 2 */}
                <div className="col-md-4 wow slideInUp" data-wow-delay="0.6s">
                  <div className="blog-item bg-light rounded overflow-hidden">
                    <div className="blog-img position-relative overflow-hidden">
                      <img className="img-fluid" src={`${base_url}/assets/img/Services/Digital_Marketing/smm-02.jpg`} alt="SSM" />
                      <a className="position-absolute top-0 start-0 text-white rounded-end mt-5 py-2 px-4" href="#" style={{backgroundColor:"#ff9800"}}>
                        SMM
                      </a>
                    </div>
                    <div className="p-4">
                      <h4 className="mb-3">Maximize Engagement with Social Media Marketing</h4>
                      <p>A comprehensive approach to social media marketing. It includes creating and publishing content, managing social media accounts, analyzing metrics, and implementing paid social media campaigns to increase engagement, grow followers, and drive conversions.</p>
                    </div>
                  </div>
                </div>

                {/* Service 3 */}
                <div className="col-md-4 wow slideInUp" data-wow-delay="0.1s">
                  <div className="blog-item bg-light rounded overflow-hidden">
                    <div className="blog-img position-relative overflow-hidden">
                      <img className="img-fluid" src={`${base_url}/assets/img/Services/Digital_Marketing/smo-03.jpg`} alt="SMO" />
                      <a className="position-absolute top-0 start-0  text-white rounded-end mt-5 py-2 px-4" href="#" style={{backgroundColor:"#ff9800"}}>
                        SMO
                      </a>
                    </div>
                    <div className="p-4">
                      <h4 className="mb-3">Enhancing Online Presence with Social Media Optimization</h4>
                      <p>Focuses on optimizing social media profiles and online presence to increase brand visibility and credibility. It includes strategies to improve engagement, increase followers, and enhance social proof through reviews and testimonials.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row g-5 mt-4">
                {/* Service 4 */}
                <div className="col-md-4 wow slideInUp" data-wow-delay="0.1s">
                  <div className="blog-item bg-light rounded overflow-hidden">
                    <div className="blog-img position-relative overflow-hidden">
                      <img className="img-fluid" src={`${base_url}/assets/img/Services/Digital_Marketing/blogManagement-04.jpg`} alt="Blogs Management" />
                      <a className="position-absolute top-0 start-0 text-white rounded-end mt-5 py-2 px-4" href="#" style={{backgroundColor:"#ff9800"}}>
                        Blogs Management
                      </a>
                    </div>
                    <div className="p-4">
                      <h4 className="mb-3">Boost Engagement with Strategic Blog Management</h4>
                      <p>A platform to create and manage blog content that engages with a target audience, increases website traffic and enhances brand awareness. It includes content creation, distribution, analytics, and optimization to drive conversions and ROI.</p>
                    </div>
                  </div>
                </div>

                {/* Service 5 */}
                <div className="col-md-4 wow slideInUp" data-wow-delay="0.6s">
                  <div className="blog-item bg-light rounded overflow-hidden">
                    <div className="blog-img position-relative overflow-hidden">
                      <img className="img-fluid" src={`${base_url}/assets/img/Services/Digital_Marketing/ads-05.jpg`} alt="TVC Ads & Chroma Shoot" />
                      <a className="position-absolute top-0 start-0 text-white rounded-end mt-5 py-2 px-4" href="#" style={{backgroundColor:"#ff9800"}}>
                        TVC Ads & Chroma Shoot
                      </a>
                    </div>
                    <div className="p-4">
                      <h4 className="mb-3">Captivating Audiences with TVC Ads & Chroma Shoots</h4>
                      <p>High-quality video production services that help brands create compelling visual content to engage audiences across digital and traditional channels. It includes concept development, script writing, filming, editing, and post-production to deliver effective campaigns.</p>
                    </div>
                  </div>
                </div>

                {/* Service 6 */}
                <div className="col-md-4 wow slideInUp" data-wow-delay="0.1s">
                  <div className="blog-item bg-light rounded overflow-hidden">
                    <div className="blog-img position-relative overflow-hidden">
                      <img className="img-fluid" src={`${base_url}/assets/img/Services/Digital_Marketing/mediaPlan-06.jpg`} alt="Media Plan" />
                      <a className="position-absolute top-0 start-0 text-white rounded-end mt-5 py-2 px-4" href="#" style={{backgroundColor:"#ff9800"}}>
                        Media Plan
                      </a>
                    </div>
                    <div className="p-4">
                      <h4 className="mb-3">Strategic Media Planning for Maximum Reach</h4>
                      <p>A comprehensive approach to planning, executing, and measuring marketing campaigns across multiple channels. It includes audience segmentation, campaign planning, media buying, and analytics to optimize ad spending and drive conversions through digital and traditional media platforms.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row g-5 mt-4">
                {/* Service 7 */}
                <div className="col-md-4 wow slideInUp" data-wow-delay="0.1s">
                  <div className="blog-item bg-light rounded overflow-hidden">
                    <div className="blog-img position-relative overflow-hidden">
                      <img className="img-fluid" src={`${base_url}/assets/img/Services/Digital_Marketing/creativeDesign-07.jpg`} alt="Creative Design" />
                      <a className="position-absolute top-0 start-0 text-white rounded-end mt-5 py-2 px-4" href="#" style={{backgroundColor:"#ff9800"}}>
                        Creative Design
                      </a>
                    </div>
                    <div className="p-4">
                      <h4 className="mb-3">Bringing Ideas to Life with Creative Design</h4>
                      <p>Providing a wide range of design services to help brands create compelling visual content for their marketing campaigns. It includes graphic design, video editing, animation, and UX design to enhance brand identity, improve engagement, and increase conversions across all digital channels.</p>
                    </div>
                  </div>
                </div>

                {/* Service 8 */}
                <div className="col-md-4 wow slideInUp" data-wow-delay="0.6s">
                  <div className="blog-item bg-light rounded overflow-hidden">
                    <div className="blog-img position-relative overflow-hidden">
                      <img className="img-fluid" src={`${base_url}/assets/img/Services/Digital_Marketing/contentCreation-08.jpg`} alt="Content Creation" />
                      <a className="position-absolute top-0 start-0 text-white rounded-end mt-5 py-2 px-4" href="#" style={{backgroundColor:"#ff9800"}}>
                        Content Creation
                      </a>
                    </div>
                    <div className="p-4">
                      <h4 className="mb-3">Engaging Audiences through Powerful Content</h4>
                      <p>A platform to create and distribute high-quality content that resonates with a target audience and drives conversions. It includes content planning, writing, editing, optimization, and distribution across multiple channels to improve brand visibility, authority, and engagement.</p>
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

export default DigitalMarketingComp