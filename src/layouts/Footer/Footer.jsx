import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhone, FaPrint, FaMapMarkerAlt, FaEnvelope, FaAngleRight, FaArrowRight, FaArrowUp, FaCopyright, } from "react-icons/fa";
import { base_url } from '../../config';

const Footer = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Footer Start */}
      <div
          style={{
            height: "3px",
            width: "100%",
            background: "linear-gradient(to right, #65518c, #737373, #8dcf47, #ff9800, #537ed2)",
            marginBottom: "0"
          }}
        ></div>
      <div
        className="container-fluid mt-5 wow fadeInUp"
        data-wow-delay="0.1s"
        style={{ backgroundColor: '#fff', color: '#537ed2' }}
      >
        <div className="container">
          <div className="row gx-5">
            {/* Footer About */}
            <div className="col-lg-3 col-md-6">
              <div className="d-flex flex-column align-items-center justify-content-center text-center h-100 p-2 mb-4">
                <a href={`${base_url}/`} className="navbar-brand p-2" style={{ alignSelf: 'flex-start', marginLeft: '-5px' }}>
                  <img
                    src={`${base_url}/assets/img/Zoyame_3c_LOGO__1___1_-removebg-preview (1).png`}
                    alt="Logo"
                    style={{ height: '100px' }}
                  />
                </a>
                <p className="mt-3 mb-4 text-justify" style={{ textAlign: 'justify' }}>
                  ZoyaMe delivers technology-driven platforms for insurance, health, and finance, empowering clients with efficiency, engagement, and growth
                </p>
              </div>

            </div>

            {/* Footer Links */}
            <div className="col-lg-9 col-md-6">
              <div className="row gx-4">
                {/* Quick Links */}
                <div className="col-lg-3 col-md-12 pt-0 pt-lg-5 mb-5">
                  <div className="section-title section-title-sm position-relative pb-3 mb-4">
                    <h3 className="mb-0">Quick Links</h3>
                  </div>
                  <div className="link-animated d-flex flex-column justify-content-start" >
                    <a className="mb-2" href={`${base_url}/`} style={{ color: '#537ed2' }}><i className="bi bi-arrow-right text-primary me-2"></i>Home</a>
                    <a className="mb-2" href={`${base_url}/about`} style={{ color: '#537ed2' }}><i className="bi bi-arrow-right text-primary me-2"></i>About Us</a>
                    <a className="mb-2" href={`${base_url}/employeeBenefit-portal`} style={{ color: '#537ed2' }}><i className="bi bi-arrow-right text-primary me-2"></i>Our Products</a>
                    {/* <a className="mb-2" href={`${base_url}/technology`} style={{ color: '#537ed2' }}><i className="bi bi-arrow-right text-primary me-2"></i>Our Solutions</a> */}
                    {/* <a className="mb-2" href={`${base_url}/employee`} style={{ color: '#537ed2' }}><i className="bi bi-arrow-right text-primary me-2"></i>How it Works</a> */}
                    <a href={`${base_url}/contact`} style={{ color: '#537ed2' }}><i className="bi bi-arrow-right text-primary me-2"></i>Contact Us</a>
                  </div>
                </div>

                {/* Our Products */}
                <div className="col-lg-3 col-md-12 pt-0 pt-lg-5 mb-5">
                  <div className="section-title section-title-sm position-relative pb-3 mb-4">
                    <h3 className="mb-0">Our Products</h3>
                  </div>
                  <div className="link-animated d-flex flex-column justify-content-start" >
                    {/* <a className="mb-2" href={`${base_url}/employeeBenefit-portal`} style={{ color: '#537ed2' }}><i className="bi bi-arrow-right text-primary me-2"></i>Employee Benefits Portal (Phillip)</a> */}
                    <a className="mb-2" href={`${base_url}/broker-one`} style={{ color: '#537ed2' }}><i className="bi bi-arrow-right text-primary me-2"></i>BrokerOne Solution</a>
                    <a className="mb-2" href={`${base_url}/flex-benefit`} style={{ color: '#537ed2' }}><i className="bi bi-arrow-right text-primary me-2"></i>Flex Benefits System</a>
                    <a className="mb-2" href={`${base_url}/quote-master`} style={{ color: '#537ed2' }}><i className="bi bi-arrow-right text-primary me-2"></i>QuoteMaster360</a>
                    <a className="mb-2" href={`${base_url}/retailSolution-product`} style={{ color: '#537ed2' }}><i className="bi bi-arrow-right text-primary me-2"></i>Retail Solution</a>
                  </div>
                </div>
                {/* Our Solutions */}
                {/* <div className="col-lg-3 col-md-12 pt-0 pt-lg-5 mb-5">
                  <div className="section-title section-title-sm position-relative pb-3 mb-4">
                    <h3 className="mb-0">Our Solutions</h3>
                  </div>
                  <div className="link-animated d-flex flex-column justify-content-start">
                    <a className="mb-2" href={`${base_url}/insuretech`} style={{ color: '#537ed2' }}><i className="bi bi-arrow-right text-primary me-2"></i>InsurTech Solutions</a>
                    <a className="mb-2" href={`${base_url}/employee-benefit`} style={{ color: '#537ed2' }}><i className="bi bi-arrow-right text-primary me-2"></i>Employee Benefits Platform (ZoyaCube)</a>
                    <a className="mb-2" href={`${base_url}/retail-solution`} style={{ color: '#537ed2' }}><i className="bi bi-arrow-right text-primary me-2"></i>Retail Solutions</a>
                  </div>
                </div> */}


                {/* Contact Info */}
                <div className="col-lg-3 col-md-12 pt-5 mb-5">
                  <div className="section-title section-title-sm position-relative pb-3 mb-4">
                    <h3 className="mb-0">Get In Touch</h3>
                  </div>
                  <div className="d-flex mb-2">
                    <i className="bi bi-geo-alt text-primary me-2"></i>
                    <p className="mb-0">123 Street, New York, USA</p>
                  </div>
                  <div className="d-flex mb-2">
                    <i className="bi bi-envelope-open text-primary me-2"></i>
                    <p className="mb-0">info@example.com</p>
                  </div>
                  <div className="d-flex mb-2">
                    <i className="bi bi-telephone text-primary me-2"></i>
                    <p className="mb-0">+012 345 67890</p>
                  </div>
                  <div className="d-flex mt-4">
                    <a className="btn btn-square me-2 border border-dark" href="#"><i className="fab fa-twitter fw-normal"></i></a>
                    <a className="btn btn-square me-2 border border-dark" href="#"><i className="fab fa-facebook-f fw-normal"></i></a>
                    <a className="btn btn-square me-2 border border-dark" href="#"><i className="fab fa-linkedin-in fw-normal"></i></a>
                    <a className="btn btn-square border border-dark" href="#"><i className="fab fa-instagram fw-normal"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Footer Bottom */}
      <div className="container-fluid text-white" style={{ background: "#061429" }}>
        <div className="container text-center">
          <div className="row">
            <div className="col-12">
              <div
                className="d-flex align-items-center justify-content-center"
                style={{ height: "75px" }}
              >
                <p className="mb-0 text-center">
                  &copy; <a className="text-white border-bottom" href={`${base_url}/`}>ZoyaMe</a>. All Rights Reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Back to Top Button */}
      <a href="#" className="btn btn-lg btn-primary btn-lg-square rounded back-to-top" style={{ backgroundColor: '#537ed2' }}>
        <i className="bi bi-arrow-up"></i>
      </a>
    </>
  )
}

export default Footer