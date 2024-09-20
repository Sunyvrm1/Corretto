import { useNavigate } from "react-router-dom";
import divider from "../assets/slider-sep-1.png";
import divider1 from "../assets/slider-sep-2.png";
import icon1 from "../assets/home-icon-1.png";
import icon2 from "../assets/home-icon-2.png";
import icon3 from "../assets/home-icon-3.png";
import icon4 from "../assets/home-icon-4.png";
import blog1 from "../assets/blog-1.jpg";
import blog2 from "../assets/blog-2.jpg";
import blog3 from "../assets/blog-3.jpg";
import coffeeLogo from "../assets/coffee-logo.png";
import owner from "../assets/owner.jpg";

export default function Home() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/our-menu");
  }
  return (
    <>
      <section className="heroHome">
        <div className="contentWidth">
          <div></div>
          <div className="heroContent">
            <h1>COFFEE MASTERS</h1>
            <img src={divider} alt="Divider" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incid idunt ut labore et dolore magna aliqua atin
              script and its variants, and.
            </p>
            <button className="btn1" onClick={handleClick}>More info</button>
          </div>
        </div>
      </section>

      <section>
        <div className="width">
          <div className="homeIntro">
            <div></div>
            <div>
              <h2>Our Delicious Offer</h2>
              <img src={divider1} alt="Divider1" />
              <p className="para1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore
              </p>
            </div>
            <div></div>
          </div>
          <div className="homeIntroInner">
            <div>
              <img src={icon1} alt="coffee Cup Icon" />
              <h3>Types of Coffee</h3>
              <p className="para2">
                Lorem ipsum dolor sit ametal, consectetuer adipiscing elitus.
                Aeneantos commodo
              </p>
            </div>
            <div>
              <img src={icon2} alt="coffee Cup Icon" />
              <h3>Bean Varieties</h3>
              <p className="para2">
                Lorem ipsum dolor sit ametal, consectetuer adipiscing elitus.
                Aeneantos commodo
              </p>
            </div>
            <div>
              <img src={icon3} alt="coffee Cup Icon" />
              <h3>Coffee & Pastry</h3>
              <p className="para2">
                Lorem ipsum dolor sit ametal, consectetuer adipiscing elitus.
                Aeneantos commodo
              </p>
            </div>
            <div>
              <img src={icon4} alt="coffee Cup Icon" />
              <h3>Coffee To Go</h3>
              <p className="para2">
                Lorem ipsum dolor sit ametal, consectetuer adipiscing elitus.
                Aeneantos commodo
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="homeRow3">
        <div className="width">
          <div className="homeIntro">
            <div></div>
            <div>
              <h2>The Coffee Herald</h2>
              <img src={divider1} alt="Divider1" />
              <p className="para1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore
              </p>
            </div>
            <div></div>
          </div>
          <div className="homeIntroInner1">
            <div>
              <img src={blog1} alt="coffee Cup Icon" />
              <h3>Prep Techniques</h3>
              <p className="para2">
                Quisque rutrum, aenean imperdiet. Etiam ultricies nisi vel
                augue. Curabitur ullamcorper ultricies nisi, nam eget dui. Etiam
                rhoncus maecenas tempus,
              </p>
              <button className="btn2">Read more</button>
            </div>
            <div>
              <img src={blog2} alt="coffee Cup Icon" />
              <h3>French Press</h3>
              <p className="para2">
                Quisque rutrum, aenean imperdiet. Etiam ultricies nisi vel
                augue. Curabitur ullamcorper ultricies nisi, nam eget dui. Etiam
                rhoncus maecenas tempus,
              </p>
              <button className="btn2">Read more</button>
            </div>
            <div>
              <img src={blog3} alt="coffee Cup Icon" />
              <h3>Turkish Ibrik</h3>
              <p className="para2">
                Quisque rutrum, aenean imperdiet. Etiam ultricies nisi vel
                augue. Curabitur ullamcorper ultricies nisi, nam eget dui. Etiam
                rhoncus maecenas tempus,
              </p>
              <button className="btn2">Read more</button>
            </div>
          </div>
        </div>
      </section>

      <section className="homeRow4">
        <div>
          <img src={coffeeLogo} alt="Coffee Logo" />
        </div>
      </section>

      <section className="about">
        <div className="width">
          <img src={owner} alt="Owner Image" className="owner" />
          <div className="aboutContent">
            <h2>The Owner Words</h2>
            <img src={divider1} alt="divider" />
            <p className="para1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
            <p className="para2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in
            </p>
          </div>
        </div>
      </section>
      {/* <section>
        <h1>This is Home page.</h1>
        <button onClick={handleClick}>Services</button>
      </section> */}
    </>
  );
}
