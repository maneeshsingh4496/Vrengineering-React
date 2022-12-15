import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Main = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nse2v1o",
        "template_zmqnsfs",
        form.current,
        "24fwHnPzbDnjkp3U8"
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            toast.success("Thank you for getting in touch!", {
              position: toast.POSITION.TOP_CENTER,
            });
          }
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div>
      <section id="hero">
        <div className="container" id="maxWidth">
          <div className="row d-flex align-items-center">
            <div
              className=" col-lg-6 py-5 py-lg-0 order-2 order-lg-1"
              data-aos="fade-right"
            >
              <h1>VR Engineering</h1>

              <h2 >
                Welcome To <span>Engineering  Consultancy Services</span> 
              </h2>
              
              <a href="#contact" className="btn mt-2 btn-sm btn-dark scrollto">
                Get In Touch
              </a>
            </div>
            <div
              className="col-lg-6 order-1 order-lg-2 hero-img"
              data-aos="fade-left"
            >
              <img src="assets/img/hero-img.png" className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>
      <main id="main">
        <section id="about" className="about section-bg">
          <div className="container" id="maxWidth">
            <div className="section-title">
              <h2 data-aos="fade-in">Who We Are ?</h2>
              <p data-aos="fade-in">
              VR ENGINEERING is a Engineering & Consulting Firm, has extensive experience of providing consultancy services for all types of services 
              Painting | Electrical | Plumbing | Fabrication | Interior Designing
              </p>
            </div>
            <div className="row gy-4">
              <div className="image col-xl-5"></div>
              <div className="col-xl-7">
                <div className="content d-flex flex-column justify-content-center ps-0 ps-xl-4">
                  <h3 data-aos="fade-in" data-aos-delay="100">
                    Agile
                  </h3>
                  <p data-aos="fade-in">
                  Become faster, more flexible, and intensely customer-focused.
                  </p>
                  <div className="row gy-4 mt-3">
                    <div className="col-md-6 icon-box" data-aos="fade-up">
                      <i className="bx bx-receipt"></i>
                      <h4>
                        <a
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                        >
                          Accelerated Performance Transformation
                        </a>
                      </h4>
                      <p>
                      We help you make the correct moves across all relevant layer of your business to accelerate greater performance.
                      </p>
                    </div>
                    <div
                      className="col-md-6 icon-box"
                      data-aos="fade-up"
                      data-aos-delay="100"
                    >
                      <i className="bx bx-cube-alt"></i>
                      <h4>
                        <a
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                        >
                         Sales & Marketing
                        </a>
                      </h4>
                      <p>
                      We help you achieve sustainable, organic growth by putting your customers at the center of your company’s strategy. 
                      </p>
                    </div>
                    <div
                      className="col-md-6 icon-box"
                      data-aos="fade-up"
                      data-aos-delay="200"
                    >
                      <i className="bx bx-images"></i>
                      <h4>
                        <a
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                        >
                         Sustainability & Responsibility
                        </a>
                      </h4>
                      <p>
                      Every company is at its own stage in the journey toward a more sustainable, responsible, and equitable future. 
                      </p>
                    </div>
                    <div
                      className="col-md-6 icon-box"
                      data-aos="fade-up"
                      data-aos-delay="300"
                    >
                      <i className="bx bx-shield"></i>
                      <h4>
                        <a
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                        >
                          Business Transformation
                        </a>
                      </h4>
                      <p>
                      Whether you have an urgent need to improve financial performance or a burning desire to reinvent your business to stay ahead of the competition, there are times when only a bold, comprehensive transformation program will do. 
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="services" className="services section-bg">
          <div className="container" id="maxWidth">
            <div className="section-title">
              <h2 data-aos="fade-in">What We Do ?</h2>
              <p data-aos="fade-in">
                VR Engineering is a full service firm that offers design and
                decorating ,installations , and different solutions to
                residential and small scale commercial projects.
                <br /> We offer interior design and other services in different
                different areas
              </p>
            </div>

            <div className="row">
              <div className="col-md-6 d-flex" data-aos="fade-right">
                <div className="card">
                  <div className="card-img">
                    <img src="assets/img/services-1.jpg" alt="..." />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">
                      <a href="">Electrical Service</a>
                    </h5>
                    <p className="card-text">
                      Maintenance and repair of existing electrical systems.
                      Electrical Upgrades. Installation of lighting fixtures,
                      fittings, fans. Outside/Landscape lighting. Modernization
                      of electrical installations in old structures. Code
                      Violation Repairs / home sale inspection repairs.
                    </p>
                    <div className="read-more">
                      <a data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <i className="bi bi-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 d-flex" data-aos="fade-left">
                <div className="card">
                  <div className="card-img">
                    <img src="assets/img/services-2.jpg" alt="..." />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">
                      <a href="">Plumbing Service </a>
                    </h5>
                    <p className="card-text">
                      We service, repair, supply and install all hot water
                      systems, including:
                      <br />
                      Gas hot water systems (effective and energy-efficient
                      water heating). Electric hot water systems (install the
                      right system for your needs and budget). Solar hot water
                      systems (reduce greenhouse gases and your bills by using
                      the sun). Instantaneous hot water systems (reduce costs
                      with water heated only as needed), and Commercial hot
                      water systems (solar and/or conventional water heating
                      designed to suit).
                    </p>
                    <div className="read-more">
                      <a data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <i className="bi bi-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 d-flex" data-aos="fade-right">
                <div className="card">
                  <div className="card-img">
                    <img src="assets/img/services-3.jpg" alt="..." />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">
                      <a href="">Interior Design Service</a>
                    </h5>
                    <p className="card-text">
                      We Offer:
                      <br />
                      Comprehensive and bilingual services, Furniture layouts
                      using new and existing furniture, Floor plans, elevations,
                      details, and renderings, Kitchen and bathroom design,
                      Preconstruction and project management services,
                    </p>
                    <div className="read-more">
                      <a data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <i className="bi bi-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 d-flex" data-aos="fade-left">
                <div className="card">
                  <div className="card-img">
                    <img src="assets/img/services-5.jpg" alt="..." />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">
                      <a href="">Fabrication</a>
                    </h5>
                    <p className="card-text">
                      Nostrum eum sed et autem dolorum perspiciatis. Magni porro
                      quisquam laudantium voluptatem. In molestiae earum ab sit
                      esse voluptatem. Eos ipsam cumque ipsum officiis qui nihil
                      aut incidunt aut
                    </p>
                    <div className="read-more">
                      <a data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <i className="bi bi-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 d-flex services-last" data-aos="fade-left">
                <div className="card">
                  <div className="card-img">
                    <img src="assets/img/services-4.jpg" alt="..." />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">
                      <a href="">Painting</a>
                    </h5>
                    <p className="card-text">
                      Nostrum eum sed et autem dolorum perspiciatis. Magni porro
                      quisquam laudantium voluptatem. In molestiae earum ab sit
                      esse voluptatem. Eos ipsam cumque ipsum officiis qui nihil
                      aut incidunt aut
                    </p>
                    <div className="read-more">
                      <a data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <i className="bi bi-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="contact section-bg">
          <div className="container" id="maxWidth" data-aos="fade-up">
            <div className="section-title">
              <h2>Contact</h2>
              <p>
              Thanks for your interest. How can we help?
              </p>
            </div>

            <div className="row">
              <div className="col-lg-6">
                <div className="row">
                  <div className="col-md-12">
                    <div className="info-box" data-aos="fade-up">
                      <i className="bx bx-map"></i>
                      <h3>Our Address</h3>
                      <p>Bangalore, Karnataka</p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div
                      className="info-box mt-4"
                      data-aos="fade-up"
                      data-aos-delay="100"
                    >
                      <i className="bx bx-envelope"></i>
                      <h3>Email Us</h3>
                      <p>
                        vrengr2022@gmail.com
                       
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div
                      className="info-box mt-4"
                      data-aos="fade-up"
                      data-aos-delay="100"
                    >
                      <i className="bx bx-phone-call"></i>
                      <h3>Call Us</h3>
                      <p>
                        +91 - 9980460643
                        
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 mt-4 mt-lg-0">
                <form
                  ref={form}
                  onSubmit={sendEmail}
                  className="php-email-form w-100"
                  data-aos="fade-up"
                >
                  <div className="row">
                    <div className="col-md-6 form-group">
                      <input
                        type="text"
                        name="user_name"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div className="col-md-6 form-group mt-3 mt-md-0">
                      <input
                        type="email"
                        className="form-control"
                        name="user_email"
                        id="email"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-group mt-3">
                    <input
                      type="text"
                      className="form-control"
                      name="user_subject"
                      id="subject"
                      placeholder="Subject"
                      required
                    />
                  </div>
                  <div className="form-group mt-2">
                    <select
                      className="form-control"
                      name="user_service"
                      aria-label="Default select example"
                    >
                      <option selected>Select Services</option>
                      <option value="Painting">Painting</option>
                      <option value="Electrical">Electrical</option>
                      <option value="Plumbing">Plumbing</option>
                      <option value="Fabrication">Fabrication</option>
                      <option value="Interion Design">Interion Design</option>
                    </select>
                  </div>
                  <div className="form-group mt-3">
                    <textarea
                      className="form-control"
                      name="user_message"
                      rows="4"
                      placeholder="Message"
                      required
                    ></textarea>
                  </div>
                  <div className="my-3">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">
                      Your message has been sent. Thank you!
                    </div>
                  </div>
                  <div className="text-center">
                    <button value="send" type="submit">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Main;
