import restaurant from "../assets/restaurant.jpg";
import { Link } from "react-router-dom";
import "./Footer.scss";

export const Footer = () => (
  <footer>
    <div className="d-flex footer py-2 text-black-bg justify-between section-padding">
      <img alt="restaurant" src={restaurant} width={"300px"} />
      <div className="d-flex">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/">Menu</Link>
          </li>
          <li>
            <Link to="/">Reservations</Link>
          </li>
          <li>
            <Link to="/">Order Online</Link>
          </li>
          <li>
            <Link to="/">Login</Link>
          </li>
        </ul>
        <div>
          <div
            className="text-secondary font-md"
            style={{ padding: "0.5rem 0 1rem 3rem", fontSize: "1.5rem" }}
          >
            Contact
          </div>
          <ul>
            <li>2135 Fontenelle St. Casper, WY 82604</li>
            <li>+1 235 432 333</li>
            <li>littlelemon@dev.com</li>
          </ul>
        </div>
        <div>
          <div
            className="text-secondary font-md"
            style={{ padding: "0.5rem 0 1rem 3rem", fontSize: "1.5rem" }}
          >
            Social Media Links
          </div>
          <ul className="d-flex">
            <li>
              <img
                key="insta"
                alt="insta"
                src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-1024.png"
                width={24}
                height={24}
              />
            </li>
            <li>
              <img
                key="facebook"
                alt="facebook"
                src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook_colored_svg_copy-1024.png"
                width={24}
                height={24}
              />
            </li>
            <li>
              <img
                key="whatsapp"
                alt="whatsapp"
                src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Whatsapp2_colored_svg-1024.png"
                width={24}
                height={24}
              />
            </li>
            <li>
              <img
                key="x"
                alt="x"
                src="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Twitter3_colored_svg-1024.png"
                width={24}
                height={24}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);
