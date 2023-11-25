import "./Specials.scss";
import bike from "../assets/bike.svg";

const Specials = () => {
  const specialsList = [...mockList];

  return (
    <div className="section-padding" style={{ paddingBottom: "4rem" }}>
      <div className="specials-header">
        <h1 className="heading">This week Specials!</h1>
        <button className="btn btn-primary px-2 font-bold">Online Menu</button>
      </div>
      <div className="d-flex justify-between">
        {specialsList.map((item) => (
          <Card key={item.name} {...item} />
        ))}
      </div>
    </div>
  );
};

const Card = ({ name, description, price, url }) => {
  return (
    <div className="specials-card text-white-bg">
      <div>
        <img alt="dish" src={url} width={"100%"} />
        <div className="px-1">
          <div className="d-flex justify-between py-1">
            <div className="font-bold">{name}</div>
            <div className="text-tertiary font-bold">{price}</div>
          </div>
          <div className="text-reg text-black">{description}</div>
        </div>
      </div>
      <div className="px-1 py-1 d-flex font-md" style={{ paddingTop: "3rem" }}>
        <span>Order & Delivery</span>
        <img className="px-1" alt="rider" src={bike} width={24} height={24} />
      </div>
    </div>
  );
};

const mockList = [
  {
    name: "Greek Salad",
    description:
      "A traditional Greek salad consists of sliced cucumbers, tomatoes, green bell pepper, red onion, olives, and feta cheese",
    price: "$ 12.12",
    url: "https://skitterphoto.com/photos/skitterphoto-4030-default.jpg",
  },
  {
    name: "Bruschetta",
    description:
      "Bruschetta is an antipasto (starter dish) from Italy consisting of grilled bread rubbed with garlic and topped with olive oil and salt.",
    price: "$ 15.12",
    url: "https://images.pexels.com/photos/5639411/pexels-photo-5639411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Dum Masala Biryani",
    description:
      "Chicken Biryani is a savory chicken and rice dish that includes layers of chicken, rice, and aromatics that are steamed together.",
    price: "$ 100",
    url: "https://images.pexels.com/photos/18601877/pexels-photo-18601877/free-photo-of-biryani-rice-traditional-food-pakistan.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];

export default Specials;
