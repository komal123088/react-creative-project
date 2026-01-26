import React, { useRef } from "react";
import "../style/artwork.css";

import img1 from "../assets/img/imag1.webp";
import img2 from "../assets/img/imag2.webp";
import img3 from "../assets/img//imag4.webp";
import img4 from "../assets/img/imag6.webp";
import img5 from "../assets/img/img7.webp";
import img6 from "../assets/img/img18.webp";
import img7 from "../assets/img/img16.webp";
import img8 from "../assets/img/img9.webp";

const artworks = [img1, img2, img3, img4, img5, img6, img7, img8];

const ArtCorner = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({ left: -340, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({ left: 340, behavior: "smooth" });
  };

  return (
    <>
      {/* MARQUEE  */}
      <div className="stroke-marquee section">
        <marquee behavior="scroll" direction="left" scrollamount="8">
          <h1>BRAIN'S GLITTER BOMB • VIBRANT CHAOS OF PAINT</h1>
        </marquee>
      </div>

      {/* SLIDER SECTION */}
      <div className="project-main">
        <section className="projects-section section">
          <div className="projects-container">
            <div className="slider-wrapper">
              {/* LEFT ARROW – unchanged */}
              <button className="slider-arrow left-arrow" onClick={scrollLeft}>
                <svg
                  fill="none"
                  height="110"
                  viewBox="0 0 94 110"
                  width="94"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.975842 53.6905L56.3032 0V27.5L28.4758 55L56.3032 82.5V110L0.975842 53.6905Z"
                    fill="url(#paint0_linear_1841_14552)"
                  ></path>
                  <path
                    d="M38.625 53.6905L93.9524 0V27.5L66.125 55L93.9524 82.5V110L38.625 53.6905Z"
                    fill="url(#paint1_linear_1841_14552)"
                  ></path>
                  <defs>
                    <linearGradient
                      gradientUnits="userSpaceOnUse"
                      id="paint0_linear_1841_14552"
                      x1="-7.20638"
                      x2="94.8775"
                      y1="50.4167"
                      y2="50.6485"
                    >
                      <stop offset="0.336519" stop-color="#93E190"></stop>
                      <stop
                        offset="0.780525"
                        stop-color="#F7EFE4"
                        stop-opacity="0"
                      ></stop>
                    </linearGradient>
                    <linearGradient
                      gradientUnits="userSpaceOnUse"
                      id="paint1_linear_1841_14552"
                      x1="30.4428"
                      x2="132.527"
                      y1="50.4167"
                      y2="50.6485"
                    >
                      <stop offset="0.336519" stop-color="#93E190"></stop>
                      <stop
                        offset="0.780525"
                        stop-color="#F7EFE4"
                        stop-opacity="0"
                      ></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </button>

              {/* SLIDER – CLASS SAME */}
              <div
                className="projects-slider ar-slider "
                style={{ gap: "2px" }}
                ref={sliderRef}
              >
                {artworks.map((img, index) => (
                  <div key={index} className="art-slider">
                    <img src={img} alt={`Artwork ${index + 1}`} />
                  </div>
                ))}
              </div>

              {/* RIGHT ARROW –  */}
              <button
                className="slider-arrow right-arrow"
                onClick={scrollRight}
              >
                <svg
                  fill="none"
                  height="110"
                  viewBox="0 0 93 110"
                  width="93"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M92.9763 53.6905L37.6489 0V27.5L65.4763 55L37.6489 82.5V110L92.9763 53.6905Z"
                    fill="url(#paint0_linear_1841_14555)"
                  ></path>
                  <path
                    d="M55.3274 53.6905L0 0V27.5L27.8274 55L0 82.5V110L55.3274 53.6905Z"
                    fill="url(#paint1_linear_1841_14555)"
                  ></path>
                  <defs>
                    <linearGradient
                      gradientUnits="userSpaceOnUse"
                      id="paint0_linear_1841_14555"
                      x1="101.159"
                      x2="-0.925349"
                      y1="50.4167"
                      y2="50.6485"
                    >
                      <stop offset="0.336519" stop-color="#93E190"></stop>
                      <stop
                        offset="0.780525"
                        stop-color="#F7EFE4"
                        stop-opacity="0"
                      ></stop>
                    </linearGradient>
                    <linearGradient
                      gradientUnits="userSpaceOnUse"
                      id="paint1_linear_1841_14555"
                      x1="63.5096"
                      x2="-38.5743"
                      y1="50.4167"
                      y2="50.6485"
                    >
                      <stop offset="0.336519" stop-color="#93E190"></stop>
                      <stop
                        offset="0.780525"
                        stop-color="#F7EFE4"
                        stop-opacity="0"
                      ></stop>
                    </linearGradient>
                  </defs>
                </svg>
              </button>
            </div>
          </div>
        </section>
        <div className="projects-footer section">
          <div className="footer-p">
            <p>KR's</p>
            <h1>Art Corner</h1>
          </div>
          <div className="p-border"></div>
          <div className="p-para">
            <span>
              “If you hear a voice within you say ‘you cannot paint,’ then by
              all means paint, and that voice will be silenced”
            </span>
            These words from Van Gogh remind me why I’m passionate about art and
            design
          </div>
        </div>
      </div>
    </>
  );
};

export default ArtCorner;
