import "../style/about.css";
import profile from "../assets/img/komal.jpg";
import main from "../assets/img/footer.png";

export default function AboutMe() {
  return (
    <section className="about-wrapper">
      <div className="about-container">
        {/* Left Image */}
        <div className="about-image">
          <img src={profile} alt="My Ha" />
        </div>

        {/* Right Content */}
        <div className="about-card">
          <h2 className="name">Komal Raza</h2>
          <p className="location">Toba Tek Singh , Punjab</p>

          <p className="role">UX/UI Designer | Product Designer</p>

          <p className="desc">
            Deliver impactful, user-centered digital product solutions to drive
            the company's success.
          </p>

          <p className="desc">
            Bridge the gap between technology and humanity by designing
            intuitive and functional user experiences. I believe in creating
            simple, yet impactful designs that make technology accessible and
            enjoyable for everyone.
          </p>

          <p className="collab">
            I'd love to collaborate with talented individuals
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="about-footer">
        <p>
          KR's <h1>Information</h1>
        </p>
        <div className="p-border"></div>
        <div className="a-img">
          <img src={main} alt="" />
        </div>
        <div className="contact-box">
          <h3>Ready to Craft User-Centric Solutions Together?</h3>
          <p>komalraza401@gmail.com</p>
          <div className="socials">
            <span>in</span>
            <span>◎</span>
            <span>◎</span>
            <span>Be</span>
          </div>
        </div>
      </div>
    </section>
  );
}
