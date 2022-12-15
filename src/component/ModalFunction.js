import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './Navbar.css'
const ModalFunction = () => {
  const [show, setShow] = useState(false);

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
          console.log(result.text);
          if (result.text === "OK") {
            handleClose()
            toast.success("Thank you for getting in touch!", {
              position: toast.POSITION.TOP_CENTER
            })}
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
  <>
      <Button variant="dark" onClick={handleShow}>
        Get Quotes
      </Button>
      <ToastContainer />
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{textAlign:"center"}}>GET IN TOUCH</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="col-lg-12 mt-4 mt-lg-0">
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
              <div className="text-center mt-3">
                <button
                  className="btn btn-dark btn-sm"
                  value="send"
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ModalFunction;
