import { useNavigate } from "react-router-dom";
import divider from "../assets/slider-sep-1.png";
import divider1 from "../assets/slider-sep-2.png";
import { HotBevarages } from "../HotBev.js";
import { ColdBevarages } from "../ColdBever.js";

export default function Menu() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/contact");
  }
  return (
    <>
      <section className="heroAbout">
        <div className="contentWidth">
          <div></div>
          <div className="heroContent">
            <h1>OUR MENU</h1>
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

      <section>
        <div className="width">
          <div className="homeIntro">
            <div></div>
            <div>
              <h2>Hot Beverages</h2>
              <img src={divider1} alt="Divider1" />
              <p className="para1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore
              </p>
            </div>
            <div></div>
          </div>
          <div className="aboutTableCont">
            <ul className="menu-list">
              {HotBevarages.map((hotBev, index) => (
                <li key={index}>
                  <img src={hotBev.image} alt={hotBev.title} />
                  <div className="item-info">
                    <div className="item-title">
                      <span className="name">{hotBev.title}</span>
                      <span className="dots"></span>
                      <span className="price">{hotBev.price}</span>
                    </div>
                    <p>{hotBev.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="ColdBever">
        <div className="width">
          <div className="homeIntro">
            <div></div>
            <div>
              <h2>Cold Beverages</h2>
              <img src={divider1} alt="Divider1" />
              <p className="para1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore
              </p>
            </div>
            <div></div>
          </div>
          <div className="aboutTableCont">
            <ul className="menu-list">
              {ColdBevarages.map((coldBev, index) => (
                <li key={index}>
                  <img src={coldBev.image} alt={coldBev.title} />
                  <div className="item-info">
                    <div className="item-title">
                      <span className="name">{coldBev.title}</span>
                      <span className="dots"></span>
                      <span className="price">{coldBev.price}</span>
                    </div>
                    <p>{coldBev.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
