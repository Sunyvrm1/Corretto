import logo from "../assets/logo-light.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer>
        <div></div>
        <div className="footer">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>

          <p className="footerPara1">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, nostrud exercitation ullamco laboris.”
          </p>
          <p className="paraHeading">Stores</p>
          <p className="footerPara1">
            Dunsmuir Ave, Los Angeles, CA 90036, USA
            <br />
            Atkins Ave, Brooklyn, NY 11208, USA
          </p>
        </div>
        <div></div>
      </footer>
      <div className="footerEnd">
        <div className="width">
          <p className="footerPara1">
            © 2024 Design by SV, All Rights Reserved
          </p>
          <div className="social">
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
      </div>
    </>
  );
}
