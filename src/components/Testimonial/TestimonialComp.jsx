import React from 'react'
import ReactOwlCarousel from 'react-owl-carousel';
import './Testimonial.scss';
import { base_url } from '../../config';

const TestimonialComp = () => {
  const options = {
    items: 2,
    loop: true,
    autoplay: true,
    smartSpeed: 1000,
    margin: 20,
    dots: true,
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      992: { items: 2 },
    },
  };

  return (
    <div
      className="container-fluid py-5"
      style={{
        backgroundColor: "#012A5E",
        color: "#fff",
        backgroundImage: "url('/your-background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container py-5">
        <div className="row align-items-center">
          {/* Left Panel */}
          <div className="col-lg-4 mb-4 mb-lg-0">
            <div className="text-start">
              <div
                style={{
                  width: 60,
                  height: 60,
                  backgroundColor: "#ff9800",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px",
                }}
              >
                <i
                  className="fas fa-quote-left"
                  style={{ fontSize: "24px", color: "#fff" }}
                ></i>
              </div>
              <h3 className="mb-3 text-white">Empowering Your Workforce</h3>
            <p>
              Discover how our digital Flex Benefits platform transforms employee engagement. 
              From wellness to financial planning, we help your teams thrive through innovative, 
              customized solutions built for modern workplaces.
            </p>
            </div>
          </div>

          {/* Right Carousel */}
          <div className="col-lg-8">
            <ReactOwlCarousel {...options} className="owl-theme">
              {[1, 2, 3].map((i) => (
                <div className="p-3" key={i}>
                  <div
                    className="bg-white p-4 h-100 shadow"
                    style={{ borderRadius: "10px", color: "#000" }}
                  >
                    <div className="text-primary mb-3" style={{ fontSize: "24px" }}>
                      <i className="fas fa-quote-left"></i>
                    </div>

                    <p className="mb-3">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                      do eiusmod tempor incididunt.
                    </p>

                    <div className="d-flex align-items-center mt-4">
                      <img
                        src={`${base_url}/assets/img/testimonial-${i}.jpg`}
                        className="rounded-circle"
                        alt="client"
                        style={{ width: "50px", height: "50px", objectFit: "cover" }}
                      />
                      <div className="ps-3">
                        <h6 className="mb-0">Client Name</h6>
                        <small className="text-muted">Company Name</small>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </ReactOwlCarousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialComp;