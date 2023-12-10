import "./Chicago.scss";
import chefA from "../../assets/img/MarioAdrianA.jpg";
import chefB from "../../assets/img/MarioAdrianB.jpg";

const Chicago = () => (
  <section className="section-padding chicago d-flex justify-between">
    <div style={{ width: "50%" }}>
      <h1 className="heading text-primary m-0">Little Lemon</h1>
      <h2 className="sub-heading text-tertiary m-0 pb-2">Chicago</h2>
      <p className="text-black pb-2" style={{ paddingRight: "3rem" }}>
        Little Lemon is owned by two Italian brothers, Mario and Adrian, who
        moved to the United States to pursue their shared dream of owning a
        restaurant. To craft the menu, Mario relies on family recipes and his
        experience as a chef in Italy. Adrian does all the marketing for the
        restaurant and led the effort to expand the menu beyond classic Italian
        to incorporate additional cuisines from the Mediterranean region.
      </p>
    </div>
    <div style={{ width: "40%", position: "relative" }}>
      <img alt="owners" src={chefA} width={"60%"} className="image-1"></img>
      <img alt="owners" src={chefB} width={"60%"} className="image-2"></img>
    </div>
  </section>
);

export default Chicago;
