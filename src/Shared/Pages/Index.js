import React from "react";
import "../sharedstyles.css";
import background_image_1 from "../../Assets/Images/Design/background/background_1.jpg";
import { Link } from "react-router-dom";
import HeaderSection from "../Features/HeaderSection";
import AboutSection from "../Features/AboutSection";
import Contact from "../Features/Contact/Contact";
import CopyrightFooter from "../Features/CopyrightFooter";

/*This is the landing page of the platform*/
function Index() {
  return (
    <>
      <HeaderSection />
      <main>
        <AboutSection />
        <Contact />
        <CopyrightFooter />
      </main>
    </>
  );
}

export default Index;
