import React from "react";
import "../sharedstyles.css";
import Lottie from "react-lottie";
import background_image_1 from "../../Assets/Images/Design/background/background_1.jpg";

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
        <div>
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
          <h1 className="title">Become a supplier</h1>
          <form method="post">
            {/* Name */}
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Organisation name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                required
                placeholder="Your Organisation's Name"
              />
            </div>
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
            {/* confirm password */}
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirm-password"
                className="form-control"
                id="password"
                required
                placeholder="Re-enter Password"
              />
            </div>
            <div className="py-3">
              <button type="submit" className="btn btn-register">
                Register
              </button>
            </div>
          </form>
          <h3 className="subtitle">have an account already?</h3>
          <div className="mb-3">
            <button type="submit" className="btn btn-register">
              Login
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Index;
