import { Link } from "react-router-dom";
import Logo from "../Logo.svg";
import "./Nav.scss";

export const Nav = () => (
  <nav className="font-md">
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
        <Link to="/booking">About</Link>
      </li>
      <li>
        <Link to="/booking">Menu</Link>
      </li>
      <li>
        <Link to="/booking">Reservations</Link>
      </li>
      <li>
        <Link to="/booking">Order Online</Link>
      </li>
      <li>
        <Link to="/booking">Login</Link>
      </li>
    </ul>
  </nav>
);
