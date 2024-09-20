import divider from "../assets/slider-sep-1.png";
import { useRef } from "react";

export default function Contact() {
  const contactSectionRef = useRef(null);
  function handleClick() {
    if (contactSectionRef.current) {
        contactSectionRef.current.scrollIntoView({ behavior: 'smooth' });
      }
  }
  return (
    <>
      <section className="heroContact">
        <div className="contentWidth">
          <div></div>
          <div className="heroContent">
            <h1>COFFEE HOUSE</h1>
            <img src={divider} alt="Divider" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incid idunt ut labore et dolore magna aliqua atin
              script and its variants, and.
            </p>
            <button className="btn1" onClick={handleClick}>
              More info
            </button>
          </div>
        </div>
      </section>

      <section ref={contactSectionRef}>
        <div className="width contactItem">
          <div className="contactDetail">
            <h2>Get in Touch</h2>
            <p className="para2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea.
            </p>
            <ul>
              <li>Duis aute irure dolor</li>
              <li>In reprehenderit in</li>
              <li>Voluptate velit esse</li>
              <li>Illum dolore eu fugiat nulla pariatur.</li>
            </ul>
            <div className="socialContact">
              <iconify-icon
                icon="lets-icons:insta-fill"
                width="25"
                height="25"
              ></iconify-icon>
              <iconify-icon
                icon="ri:facebook-fill"
                width="25"
                height="25"
              ></iconify-icon>
              <iconify-icon
                icon="mdi:twitter"
                width="25"
                height="25"
              ></iconify-icon>
            </div>
          </div>
          <div className="contactForm">
            <form>
              <div>
                <input type="text" placeholder="Your Name" />
                <input type="text" placeholder="Your Email" />
              </div>
                <input type="text" placeholder="Subject" />
                <textarea type="text" placeholder="Message here..." />
                <button>Send message</button>
            </form>
          </div>
        </div>
      </section>
      {/* <section>
            <h1>This is Contact page.</h1>
            <button onClick={handleClick}>Home</button>
        </section> */}
    </>
  );
}
