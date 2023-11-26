import BookingForm from "./BookingForm";

const BookingPage = () => {
  return (
    <section>
      <div className="d-flex justify-between align-center text-primary-bg section-padding py-1">
        <h1 className="heading text-secondary m-0">Reserve your table</h1>
        <img
          alt="table"
          src="https://images.pexels.com/photos/1243337/pexels-photo-1243337.jpeg?auto=compress&cs=tinysrgb&w=600"
          height={150}
          style={{ borderRadius: "1rem" }}
        />
      </div>
      <BookingForm />
    </section>
  );
};

export default BookingPage;
