import React from "react";
import Button from "../../Components/Button";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container py-5" id="contact">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-9">
            <div className="text-center">
              <h1 className="title text-uppercase my-5">Contact Us</h1>
            </div>
            <form method="get" action="">
              <div className="form-group my-3">
                <label htmlFor="my-input">Your Name (required)</label>
                <input
                  id="my-input"
                  className="form-control my-2 p-2"
                  type="text"
                  name=""
                  required
                />
              </div>
              <div className="form-group my-3">
                <label htmlFor="my-input">Your Email (required)</label>
                <input
                  id="my-input"
                  className="form-control my-2 p-2"
                  type="email"
                  required
                  name=""
                />
              </div>
              <div className="form-group my-3">
                <label htmlFor="my-input">Subject</label>
                <input
                  id="my-input"
                  className="form-control my-2 p-2"
                  type="text"
                  name=""
                />
              </div>
              <div className="form-group">
                <label htmlFor="my-textarea">Your Message</label>
                <textarea
                  id="my-textarea"
                  className="form-control my-2"
                  name=""
                  rows="5"
                ></textarea>
              </div>
              <div className="my-3">
                <Button>Send Message</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
