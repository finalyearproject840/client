import axios from "axios";
import React, { useState } from "react";
import { baseUrl } from "../../../DefaultValues";
import Button from "../../Components/Button";
import "./Contact.css";
import {
  notifyError,
  notifySuccess,
} from "./../../Components/NotificationToast";
import Loading from "./../../Components/Loading";
function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const resetForm = () => {
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const sendMessage = (e) => {
    e.preventDefault();
    setSubmitting(true);
    //config headers
    var config = {
      method: "post",
      url: `${baseUrl}/send/contact/message`,
      headers: {
        "Content-Type": "application/json",
      },
      data: form,
    };
    axios(config)
      .then((response) => {
        resetForm();
        setSubmitting(false);
        if (response.data.success) {
          return notifySuccess("Message sent successfully");
        }
        return notifyError("Couldn't send message");
      })
      .catch((error) => {
        resetForm();
        setSubmitting(false);
        console.log(error);
        notifyError("Couldn't send message");
      });
  };

  return (
    <div className="contact-container py-5" id="contact">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-9">
            <div className="text-center">
              <h1 className="title text-uppercase my-5">Contact Us</h1>
            </div>
            <form onSubmit={sendMessage}>
              <div className="form-group my-3">
                <label htmlFor="my-input">Your Name (required)</label>
                <input
                  id="my-input"
                  className="form-control my-2 p-2"
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.currentTarget.value })
                  }
                  required
                />
              </div>
              <div className="form-group my-3">
                <label htmlFor="my-input">Your Email (required)</label>
                <input
                  id="my-input"
                  className="form-control my-2 p-2"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.currentTarget.value })
                  }
                  required
                />
              </div>
              <div className="form-group my-3">
                <label htmlFor="my-input">Subject</label>
                <input
                  id="my-input"
                  className="form-control my-2 p-2"
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={(e) =>
                    setForm({ ...form, subject: e.currentTarget.value })
                  }
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="my-textarea">Your Message</label>
                <textarea
                  id="my-textarea"
                  className="form-control my-2"
                  name="message"
                  rows="5"
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.currentTarget.value })
                  }
                  required
                ></textarea>
              </div>
              <div className="my-3 text-center d-flex justify-content-center">
                {submitting ? (
                  <Loading />
                ) : (
                  <Button type="submit">Send Message</Button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
