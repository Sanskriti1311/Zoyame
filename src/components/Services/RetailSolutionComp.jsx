import React from 'react'
import { base_url } from '../../config';
import { Link, useNavigate } from "react-router-dom";

const RetailSolutionComp = () => {
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
                  alt="Blog" style={{ height: "400px" }}
                />
                <h1 className="mb-4">
                  Retail Solution
                </h1>
                <p>
                  <span className='text-dark fw-bold'>Welcome to ZoyaMe Retail Solutions,</span> where we empower retailers with
                  technology-driven strategies to enhance customer experiences, streamline operations, and
                  maximize profitability. Our focus is to help businesses stay competitive in today’s fast-changing retail environment.
                </p>
                <p>
                  From smart point-of-sale systems, digital payment integrations, and inventory management
                  to personalized customer engagement and loyalty programs, we deliver end-to-end retail
                  technology solutions. Our expertise helps retailers create seamless omni-channel experiences
                  that connect in-store and online journeys.
                </p>
                <p>
                  With advanced data analytics, AI-driven insights, and automation, we enable retailers to
                  understand consumer behavior, optimize supply chains, and make informed business
                  decisions. At ZoyaMe, our goal is to transform retail operations into agile, customer-centric
                  ecosystems that drive growth and long-term success.
                </p>

              </div>
              {/* Blog Detail End */}
            </div>
            <div className="col-lg-4">
              {/* FAQ Accordion */}
              <div
                className="bg-white rounded p-4 mb-4 wow fadeInUp"
                data-wow-delay="0.1s"
                style={{
                  boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px'
                }}
              >
                <h3 className="mb-4 text-primary">Things You Might Ask</h3>
                <div className="accordion" id="faqAccordion">

                  {/* Faq 1 */}
                  <div className="accordion-item mb-3" style={{  borderRadius: '6px' }}>
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button fw-bold text-dark"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                        style={{ backgroundColor:'#E1D8D6' }}
                      >
                        <span style={{fontSize:'18px'}}>What is ZoyaMe’s Retail Insurance Solution?</span>
                      </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqAccordion">
                      <div className="accordion-body text-muted">
                       It’s a toolkit for retailers to offer and manage embedded insurance (e.g., gadget cover, extended warranty, transit insurance) at checkout—online and in-store—plus post-sale policy/claims support.                     
                      </div>
                    </div>
                  </div>

                  {/* Faq 2 */}
                  <div className="accordion-item mb-3" style={{ borderRadius: '6px' }}>
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed fw-bold text-dark"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                        style={{ backgroundColor:'#E1D8D6' }}
                      >
                        <span style={{fontSize:'18px'}}>How do returns/exchanges affect insurance?</span>
                      </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqAccordion">
                      <div className="accordion-body text-muted">
                       We auto-cancel or reissue policies based on return/exchange flows and notify the insurer, with premium adjustments handled in settlement.
                      </div>
                    </div>
                  </div>

                  {/* Faq 3 */}
                  <div className="accordion-item mb-3" style={{ borderRadius: '6px' }}>
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed fw-bold text-dark"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                        style={{ backgroundColor:'#E1D8D6' }}
                      >
                        <span style={{fontSize:'18px'}}>What security measures are in place?</span>
                      </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqAccordion">
                      <div className="accordion-body text-muted">
                       Role-based access, data encryption, audit trails, PII minimization, and compliance with relevant data protection requirements.
                      </div>
                    </div>
                  </div>

                  {/* Faq 4 */}
                  <div className="accordion-item mb-3" style={{ borderRadius: '6px' }}>
                    <h2 className="accordion-header" id="headingFour">
                      <button
                        className="accordion-button collapsed fw-bold text-dark"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                        style={{ backgroundColor:'#E1D8D6' }}
                      >
                        <span style={{fontSize:'18px'}}>How are premiums and commissions handled?</span>
                      </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#faqAccordion">
                      <div className="accordion-body text-muted">
                        Premiums are auto-calculated based on SKU/price/risk rules. Commissions and revenue share are tracked per store/channel with finance-ready settlement reports.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Call to Action */}
              <div
                className="text-white rounded shadow-sm p-4 text-center wow fadeInUp"
                data-wow-delay="0.3s"
                style={{ backgroundColor: '#8dcf47' }} 
              >
                <h5 className="mb-3 text-white fw-bold">Ready to Digitize?</h5>
                <p className='text-white'>
                  Request a free consultation to explore how ZoyaMe can transform your business through technology.
                </p>
                <a
                  href={`${base_url}/contact`}
                  className="btn btn-sm mt-2 text-white p-2"
                  style={{ backgroundColor: '#537ed2' }}
                >
                  <span className='h5 text-white'>Request a Demo</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About Us Section End */}

      {/* Our Solutions Start */}
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
                {/* Solution 1 */}
                <div className="col-md-4 wow slideInUp" data-wow-delay="0.1s" >
                  <div className="blog-item bg-light rounded overflow-hidden">
                    <div className="blog-img position-relative overflow-hidden">
                      <img className="img-fluid" src={`${base_url}/assets/img/Services/Technology/ecommerce-01.jpg`} alt="Digital Insurance Mall for Individuals" />
                      <a className="position-absolute top-0 start-0 text-white rounded-end mt-5 py-2 px-4" href="#" style={{ backgroundColor: "#ff9800" }}>
                        Digital Insurance Mall for Individuals
                      </a>
                    </div>
                    <div className="p-4">
                      <h4 className="mb-3">Personalized Insurance at Your Fingertips</h4>
                      <p>The Digital Insurance Mall is a one-stop platform where individuals can explore, compare, and purchase insurance products instantly. From health, travel, life, and motor insurance to lifestyle protection plans, our digital-first approach ensures transparency, convenience, and tailored solutions. 
                      </p>
                    </div>
                  </div>
                </div>

                {/* Solution 2 */}
                <div className="col-md-4 wow slideInUp" data-wow-delay="0.6s">
                  <div className="blog-item bg-light rounded overflow-hidden">
                    <div className="blog-img position-relative overflow-hidden">
                      <img className="img-fluid" src={`${base_url}/assets/img/Services/Technology/enterpriseProtal-02.jpg`} alt="AI-Driven Product Matching" />
                      <a className="position-absolute top-0 start-0 text-white rounded-end mt-5 py-2 px-4" href="#" style={{ backgroundColor: "#ff9800" }}>
                        AI-Driven Product Matching
                      </a>
                    </div>
                    <div className="p-4">
                      <h4 className="mb-3">Smarter Insurance with AI Matching</h4>
                      <p>
                        Our AI-powered engine simplifies decision-making by connecting individuals with the most suitable 
                        insurance plans. By analyzing lifestyle, financial needs, and health profiles, it delivers accurate 
                        product recommendations that reduce confusion and improve customer satisfaction. 
                      </p>
                    </div>
                  </div>
                </div>

                {/* Solution 3 */}
                <div className="col-md-4 wow slideInUp" data-wow-delay="0.1s">
                  <div className="blog-item bg-light rounded overflow-hidden">
                    <div className="blog-img position-relative overflow-hidden">
                      <img className="img-fluid" src={`${base_url}/assets/img/Services/Technology/serverManagement-03.jpg`} alt="Paperless Policy Issuance" />
                      <a className="position-absolute top-0 start-0  text-white rounded-end mt-5 py-2 px-4" href="#" style={{ backgroundColor: "#ff9800" }}>
                        Paperless Policy Issuance
                      </a>
                    </div>
                    <div className="p-4">
                      <h4 className="mb-3">Seamless Paperless Policy Issuance</h4>
                      <p>
                        Eliminate delays and manual errors with our fully digital policy issuance system. Customers can receive 
                        instant policies online, complete with secure e-signatures and automated documentation. This streamlined 
                        approach reduces paperwork, enhances transparency, and ensures a faster onboarding experience.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row g-5 mt-4">
                {/* Solution 4 */}
                <div className="col-md-4 wow slideInUp" data-wow-delay="0.1s">
                  <div className="blog-item bg-light rounded overflow-hidden">
                    <div className="blog-img position-relative overflow-hidden">
                      <img className="img-fluid" src={`${base_url}/assets/img/Services/Technology/softwareSupport-04.jpg`} alt="Renewal & Claims Tracking Tools" />
                      <a className="position-absolute top-0 start-0 text-white rounded-end mt-5 py-2 px-4" href="#" style={{ backgroundColor: "#ff9800" }}>
                        Renewal & Claims Tracking Tools
                      </a>
                    </div>
                    <div className="p-4">
                      <h4 className="mb-3">Simplified Renewals & Claims Tracking</h4>
                      <p>
                        Empower customers with easy-to-use digital tools that simplify policy renewals and provide real-time 
                        claims tracking. With automated reminders, transparent claim status updates, and secure online access, 
                        the process becomes hassle-free. This improves customer trust, engagement, and long-term satisfaction.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Our Solution End */}

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

export default RetailSolutionComp