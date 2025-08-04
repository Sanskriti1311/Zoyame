import React from 'react'
import { useNavigate } from 'react-router-dom';
import TestimonialComp from '../Testimonial/TestimonialComp';
import './Services.scss'
import { base_url } from '../../config';

const ConsultingComp = () => {
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
              <h1 className="display-4 text-white animated zoomIn">Consulting & Analytics</h1>
              <a href="#" className="h5 text-white">
                Home
              </a>
              <i className="far fa-circle text-white px-2"></i>
              <a href="#" className="h5 text-white">
                Consulting & Analytics
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
                  src={`${base_url}/assets/img/Services/Consulting&Analytics/consulting&analytics.webp`}
                  alt="Consulting and Analytics" style={{height:"400px"}}
                />
                <h1 className="mb-4">
                  Consulting and Analytics
                </h1>
                <p>
                  <span className='text-dark fw-bold'>ZoyaMe</span>  In today's competitive business landscape, organizations face the challenge of managing employee benefits effectively while controlling costs. To help clients navigate this complex area, we offer a comprehensive suite of analytics services focused on benefits benchmarking, claims analysis, and claims audit.
                </p>
                <p>
                  By leveraging our extensive library of benefits data and utilizing advanced analytics techniques, we provide valuable insights and actionable recommendations to optimize benefits programs and enhance cost-efficiency. At ZoyaMe, we specialize in delivering comprehensive analytics solutions tailored to the unique needs of our clients.
                </p>
                <p>
                  Our team of data experts combines domain knowledge, cutting-edge technology, and advanced analytical techniques to extract meaningful insights from complex datasets. We offer a wide range of analytics services designed to address key business challenges and drive transformative outcomes. In the realm of employee benefits management, analytics plays a pivotal role in driving informed decision-making and cost optimization.
                </p>
                <p>
                  Our analytics services for benefits benchmarking, claims analysis, and claims audit empower clients with actionable insights derived from extensive data analysis and industry benchmarks. By leveraging our expertise and advanced analytical techniques, organizations can enhance the effectiveness of their benefits programs, proactively manage claims, and effectively control costs.
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
                      <img className="img-fluid" src={`${base_url}/assets/img/Services/Consulting&Analytics/image-01.jpg`} alt="Benefit Benchmarking" />
                      <a className="position-absolute top-0 start-0 text-white rounded-end mt-5 py-2 px-4" href="#" style={{backgroundColor:"#ff9800"}}>
                        Benefit Benchmarking
                      </a>
                    </div>
                    <div className="p-4">
                      <h4 className="mb-3">Enhancing Competitiveness Through Benefit Benchmarking</h4>
                      <p>Our benefits benchmarking service offers a detailed comparative overview of a client's benefits offerings against their peer group. Drawing from our vast repository of benefits data from diverse companies across various industries, we provide an in-depth analysis that enables organizations to assess the competitiveness of their benefits packages.</p>
                    </div>
                  </div>
                </div>

                {/* Service 2 */}
                <div className="col-md-4 wow slideInUp" data-wow-delay="0.6s">
                  <div className="blog-item bg-light rounded overflow-hidden">
                    <div className="blog-img position-relative overflow-hidden">
                      <img className="img-fluid" src={`${base_url}/assets/img/Services/Consulting&Analytics/image-02.jpg`} alt="Claims Review" style={{height:"266px"}}/>
                      <a className="position-absolute top-0 start-0 text-white rounded-end mt-5 py-2 px-4" href="#" style={{backgroundColor:"#ff9800"}}>
                        Claims Review
                      </a>
                    </div>
                    <div className="p-4">
                      <h4 className="mb-3">Optimizing Healthcare Costs Through Claims Review</h4>
                      <p>Our claims utilization review is conducted quarterly, supported by a detailed help desk report maintained by our expert analysts on a daily basis. This review involves a thorough analysis of claims versus premiums, aiming to identify any inconsistencies or anomalies. By evaluating utilization patterns and adherence to policy guidelines, we help clients detect potential fraud, waste, and abuse.</p>
                    </div>
                  </div>
                </div>

                {/* Service 3 */}
                <div className="col-md-4 wow slideInUp" data-wow-delay="0.1s">
                  <div className="blog-item bg-light rounded overflow-hidden">
                    <div className="blog-img position-relative overflow-hidden">
                      <img className="img-fluid" src={`${base_url}/assets/img/Services/Consulting&Analytics/image-03.webp`} alt="Claims Audit" />
                      <a className="position-absolute top-0 start-0  text-white rounded-end mt-5 py-2 px-4" href="#" style={{backgroundColor:"#ff9800"}}>
                        Claims Audit
                      </a>
                    </div>
                    <div className="p-4">
                      <h4 className="mb-3">Ensuring Stability Through Server Management</h4>
                      <p>As healthcare costs continue to rise, conducting regular claims audits is crucial for organizations insuring health plans for their employees. Our claims audit service enables clients to identify potential areas of cost escalation and ensure compliance with policy terms.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row g-5 mt-4">
                {/* Service 4 */}
                <div className="col-md-4 wow slideInUp" data-wow-delay="0.1s">
                  <div className="blog-item bg-light rounded overflow-hidden">
                    <div className="blog-img position-relative overflow-hidden">
                      <img className="img-fluid" src={`${base_url}/assets/img/Services/Consulting&Analytics/imgae-04.jpg`} alt="Fraud Detection" />
                      <a className="position-absolute top-0 start-0 text-white rounded-end mt-5 py-2 px-4" href="#" style={{backgroundColor:"#ff9800"}}>
                        Fraud Detection
                      </a>
                    </div>
                    <div className="p-4">
                      <h4 className="mb-3">Enhancing Claims Integrity Through Fraud Detection</h4>
                      <p> Analytics plays a crucial role in identifying patterns of fraudulent activity in claims data. By leveraging advanced analytics techniques, we can detect and prevent fraudulent claims. Our fraud detection measures help protect your organization from financial losses and ensure the integrity of your claims management processes.</p>
                    </div>
                  </div>
                </div>

                {/* Service 5 */}
                <div className="col-md-4 wow slideInUp" data-wow-delay="0.6s">
                  <div className="blog-item bg-light rounded overflow-hidden">
                    <div className="blog-img position-relative overflow-hidden">
                      <img className="img-fluid" src={`${base_url}/assets/img/Services/Consulting&Analytics/image-05.jpg`} alt="MIS" />
                      <a className="position-absolute top-0 start-0 text-white rounded-end mt-5 py-2 px-4" href="#" style={{backgroundColor:"#ff9800"}}>
                        MIS
                      </a>
                    </div>
                    <div className="p-4">
                      <h4 className="mb-3">Data-Driven Insights Through Monthly MIS Reports</h4>
                      <p>Our monthly MIS provides clients with a comprehensive analysis of claims for a particular month, leveraging various parameters such as age, amount, and relationship-wise categorization. By aggregating and analyzing this data, we generate actionable insights into claim patterns and trends. Clients can gain a deeper understanding of their claims portfolio, identify high-risk segments, and proactively implement measures to mitigate risks.</p>
                    </div>
                  </div>
                </div>

                {/* Service 6 */}
                <div className="col-md-4 wow slideInUp" data-wow-delay="0.1s">
                  <div className="blog-item bg-light rounded overflow-hidden">
                    <div className="blog-img position-relative overflow-hidden">
                      <img className="img-fluid" src={`${base_url}/assets/img/Services/Consulting&Analytics/image-06.jpg`} alt="Claims Benchmarking" />
                      <a className="position-absolute top-0 start-0 text-white rounded-end mt-5 py-2 px-4" href="#" style={{backgroundColor:"#ff9800"}}>
                        Claims Benchmarking
                      </a>
                    </div>
                    <div className="p-4">
                      <h4 className="mb-3">Enhancing Strategy Through Claims Benchmarking Analysis</h4>
                      <p>Within our benefits analytics portfolio, we maintain an extensive library of claims data from different companies and industries. Our claims benchmarking service enables clients to compare their claims experience against industry benchmarks. We analyze key metrics such as claim frequency, claim severity, and cost per claim to identify patterns and outliers.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row g-5 mt-4">
                {/* Service 7 */}
                <div className="col-md-4 wow slideInUp" data-wow-delay="0.1s">
                  <div className="blog-item bg-light rounded overflow-hidden">
                    <div className="blog-img position-relative overflow-hidden">
                      <img className="img-fluid" src={`${base_url}/assets/img/Services/Consulting&Analytics/image-07.jpg`} alt="Survey" />
                      <a className="position-absolute top-0 start-0 text-white rounded-end mt-5 py-2 px-4" href="#" style={{backgroundColor:"#ff9800"}}>
                        Survey
                      </a>
                    </div>
                    <div className="p-4">
                      <h4 className="mb-3">Driving Insights Through Strategic Surveys</h4>
                      <p> To enhance our analysis capabilities, we conduct various types of surveys, including the Benpulse Survey, Annual H&B (Health and Benefits) Survey, Employee Engagement Survey, and Client Services Feedback Survey. These surveys provide additional data points and perspectives that contribute to our analysis. By gathering feedback and insights from employees and clients, we can uncover valuable information that helps us further refine our recommendations and provide comprehensive solutions tailored to your needs.</p>
                    </div>
                  </div>
                </div>

                {/* Service 8 */}
                <div className="col-md-4 wow slideInUp" data-wow-delay="0.6s">
                  <div className="blog-item bg-light rounded overflow-hidden">
                    <div className="blog-img position-relative overflow-hidden">
                      <img className="img-fluid" src={`${base_url}/assets/img/Services/Consulting&Analytics/image-08.jpg`} alt="Consulting"/>
                      <a className="position-absolute top-0 start-0 text-white rounded-end mt-5 py-2 px-4" href="#" style={{backgroundColor:"#ff9800"}}>
                        Consulting
                      </a>
                    </div>
                    <div className="p-4">
                      <h4 className="mb-3">Empowering Decisions with Strategic Consulting</h4>
                      <p> Our consulting services aim to provide appropriate recommendations on policy structures and benefits based on inputs from the Benefits Benchmarking and Claims Utilization reports. We leverage the insights gained from benchmarking your benefits against peer companies and analyzing claims data to offer tailored suggestions for policy improvements. By aligning your benefits strategy with industry trends and optimizing claims utilization, we help you enhance employee satisfaction, attract top talent, and manage costs effectively.</p>
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

export default ConsultingComp