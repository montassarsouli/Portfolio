import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <h2>Building digital experiences that inspire</h2>
        <p>
          Passionate frontend developer | Transforming ideas into seamless and
          visualy stunning web solutions
        </p>
      </div>
      <div className="hero-img">
        <div>
          <div className="tech-icon">
            <img src="./image/img1.png" alt="" />
          </div>
          <img src="./image/img5.jpg" alt="" />
        </div>
        <div>
          <div className="tech-icon">
            <img src="./image/img2.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./image/img3.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./image/img4.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
