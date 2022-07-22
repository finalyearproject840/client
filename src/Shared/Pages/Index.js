import React from "react";
import "../sharedstyles.css";
import Lottie from "react-lottie";
import background_image_1 from "../../Assets/Images/Design/background/background_1.jpg";
import { Link } from "react-router-dom";

function Index() {
  return (
    <main
      id="landing-page"
      className="landing-page"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.5)),url(${background_image_1})`,
      }}
    >
      <div className="app-container">
        {/* left box */}
        <div className="avatar-container">
          <lottie-player
            src="https://assets3.lottiefiles.com/packages/lf20_jcsfwbvi.json"
            background="transparent"
            speed="1"
            style={{ width: "80%" }}
            loop
            autoplay
          ></lottie-player>
        </div>
        {/* right box */}
        <div>
          <h1 className="title">Supplier Login</h1>
          <form method="post">
            {/* Email */}
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                name="email"
                className="form-control"
                id="exampleInputEmail1"
                required
                placeholder="Enter your email"
              />
            </div>
            {/* Password */}
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Set Password
              </label>
              <input
                type="password"
                name="password"
                className="form-control"
                id="password"
                required
                placeholder="Enter a Password"
              />
            </div>

            <div className="py-3">
              <button type="submit" className="btn btn-register">
                Login
              </button>
            </div>
          </form>
          <h3 className="subtitle">Have an account already?</h3>
          <div className="mb-3">
            <Link to="#" className="btn btn-login">
              Create Account
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Index;
