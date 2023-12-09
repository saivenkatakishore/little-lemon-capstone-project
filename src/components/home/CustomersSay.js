import "./CustomersSay.scss";
import star from "../../assets/img/star.png";

const CustomersSay = () => {
  return (
    <section className="section-padding testimonials text-other-bg">
      <div style={{ textAlign: "center", width: "100%" }}>
        <h1 className="heading">Testimonials</h1>

        <div className="d-flex justify-between">
          {testimonialsList.map((person) => (
            <ReviewCard key={person.name} {...person} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ReviewCard = ({ avatar, name, description, rating }) => {
  return (
    <div className="review-card text-white-bg">
      <div>
        {[...Array(rating)].map((e, i) => (
          <img alt="rating" src={star} key={i} height={24} width={24} />
        ))}
      </div>
      <div className="d-flex align-center">
        <img alt="avatar" src={avatar} height={50} width={50} />
        <div className="px-1 font-bold">{name}</div>
      </div>
      <div className="py-1 text-reg" style={{ textAlign: "left" }}>
        <q>{description}</q>
      </div>
    </div>
  );
};

const testimonialsList = [
  {
    avatar: "https://i.pravatar.cc/50?img=44",
    name: "Mikasa Ackerman",
    description:
      "I enjoyed my time at Cafe Delights. The menu had a nice variety, and the staff was friendly. The food was good, although a bit on the pricey side. The cozy atmosphere made it a pleasant spot for a casual meal",
    rating: 3,
  },
  {
    avatar: "https://i.pravatar.cc/50?img=33",
    name: "Satoru Gojo",
    description:
      "The spices used in their dishes were well-balanced, creating a delightful explosion of flavors. The service was prompt, and the portions were generous. I'll be coming back for more spicy delights",
    rating: 4,
  },
  {
    avatar: "https://i.pravatar.cc/50?img=69",
    name: "Yuji Itadori",
    description:
      "The dining experience at Culinary Haven was exceptional! The chef's attention to detail in every dish was evident. The flavors were rich and diverse, and the ambiance added to the overall enjoyment. Definitely a must-try for food enthusiasts",
    rating: 5,
  },
  {
    avatar: "https://i.pravatar.cc/50?img=7",
    name: "Naruto Uzumaki",
    description:
      "A taste of the Mediterranean right in the heart of the city! The dishes at this bistro were authentic and delicious. From the Greek salads to the kebabs, each bite transported me to the shores of the Mediterranean. Friendly staff and a cozy setting made it a memorable evening",
    rating: 4,
  },
];

export default CustomersSay;
