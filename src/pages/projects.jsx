import { useRef } from "react";
import "../style/project.css";
import img1 from "../assets/img/img1.png";
import img2 from "../assets/img/img2.png";
import img3 from "../assets/img/img1.png";
import img4 from "../assets/img/img4.png";
import img5 from "../assets/img/img5.png";
import img6 from "../assets/img/img6.png";
import img7 from "../assets/img/kom1.png";
import img8 from "../assets/img/image.png";

const projects = [
  {
    img: img1,
    title: "SPCA SG",
    desc: "Pet Adoption Platform",
    color: "#1e3a8a",
  },
  {
    img: img8,
    title: "An Place",
    desc: "Online gift-card platform",
    color: "#991b1b",
  },
  {
    img: img2,
    title: "Dailymotion",
    desc: "Streaming Platform Redesign",
    color: "#f59e0b",
  },
  {
    img: img3,
    title: "Yi Xiu",
    desc: "Alteration Service Mobile App",
    color: "#10b981",
  },
  {
    img: img4,
    title: "Food Delivery App",
    desc: "Restaurant & Delivery UI",
    color: "#7c2d12",
  },

  {
    img: img5,
    title: "Fitness Tracker",
    desc: "Health & Workout App",
    color: "#4c1d95",
  },

  {
    img: img6,
    title: "Banking App",
    desc: "Mobile Banking Redesign",
    color: "#0891b2",
  },

  {
    img: img7,
    title: "E-Learning",
    desc: "Online Course Platform",
    color: "#dc2626",
  },

  {
    img: img8,
    title: "Travel Buddy",
    desc: "Trip Planning Mobile App",
    color: "#7c3aed",
  },
];

const UXUIProjects = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -340, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 340, behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="stroke-marquee section">
        <marquee behavior="scroll" direction="left" scrollamount="8">
          <h1>True design is never finished; It's always evolving</h1>
        </marquee>
      </div>
      <div className="project-main">
        <section className="projects-section section">
          <div className="projects-container">
            <div className="slider-wrapper">
              {/* Left Arrow */}
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

              {/* Slider */}
              <div className="projects-slider" ref={sliderRef}>
                {projects.map((project, index) => (
                  <div key={index} className={`project-card ${"simple-card"}`}>
                    <div className="project-mockup">
                      <img src={project.img} alt={project.title} />
                      <span className="nda-badge">NDA - Confidential</span>
                    </div>

                    <div className="project-info">
                      <h3 className="project-title">{project.title}</h3>
                      <p className="project-desc">{project.desc}</p>
                      <a href="#" className="see-more">
                        See more →
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Arrow */}
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
            <h1>UX/UI & Product Design Projects</h1>
          </div>
          <div className="p-border"></div>
          <div className="p-para">
            <span> Simple yet impressive.</span>
            I'm more than happy to share with you about my projects. Let’s chat
            more about design!
          </div>
        </div>
      </div>
    </>
  );
};

export default UXUIProjects;
