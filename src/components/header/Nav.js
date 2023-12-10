import { Link } from "react-router-dom";
import Logo from "../../Logo.svg";
import "./Nav.scss";

export const Nav = () => (
  <nav className="font-md section-padding">
    <ul>
      <li>
        <img alt="Logo" src={Logo} />
      </li>
    </ul>
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
  </nav>
);
