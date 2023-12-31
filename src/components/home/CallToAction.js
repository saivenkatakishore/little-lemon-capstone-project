import "./CallToAction.scss";
import restaurantImage from "../../assets/img/restaurantfood.jpg";
import { Link } from "react-router-dom";

const CallToAction = () => (
  <section
    className="text-primary-bg hero-section py-2 section-padding"
    style={{ marginBottom: "6rem"}}
  >
    <div>
      <h1 className="heading text-secondary m-0">Little Lemon</h1>
      <h2 className="sub-heading text-white m-0 pb-2">Chicago</h2>
      <p className="text-white pb-2" style={{ paddingRight: "3rem" }}>
        Based in Chicago, Illinois, Little Lemon is a family-owned Mediterranean
        restaurant, focused on traditional recipes served with a modern twist.
        The chefs draw inspiration from Italian, Greek, and Turkish culture and
        have a menu of 12–15 items that they rotate seasonally. The restaurant
        has a rustic and relaxed atmosphere with moderate prices, making it a
        popular place for a meal any time of the day.
      </p>
      <Link id="booking" to="/booking" className="text-secondary-bg text-primary px-2 font-bold btn btn-primary">
        Reserve Table
      </Link>
    </div>
    <div>
      <img alt="restaurant" src={restaurantImage} height={450} width={350} />
    </div>
  </section>
);

export default CallToAction;
