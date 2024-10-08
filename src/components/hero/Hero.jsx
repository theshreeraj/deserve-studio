import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <>
      <div className="hero-container">
        <div>Enterprise Expert</div>
        <h1>We make websites.</h1>
        <p>
          We are a Framer and design agency, dedicated to building
          high-converting websites for startups, solo founders, and enterprises.
        </p>
        <button className="cta-secondary">Let's Get Started</button>
      </div>
    </>
  );
};

export default Hero;
