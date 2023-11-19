import { Link } from "react-router-dom";

export const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/booking">Booking</Link>
      </li>
    </ul>
  </nav>
);
