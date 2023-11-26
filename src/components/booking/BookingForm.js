import "./BookingForm.scss";
import { useEffect, useState } from "react";

const BookingForm = () => {
  const [bookingForm, setBookingForm] = useState({
    date: "",
    time: "",
    number_of_guests: "",
    occasion: "",
  });

  const [availableTimes, setAvailableTimes] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
  ]);

  useEffect(() => {}, [bookingForm]);

  return (
    <form className="reservation-form section-padding">
      <div className="d-flex">
        <div className="form-field d-flex">
          <label htmlFor="res-date" className="font-md">
            Choose date
          </label>
          <input
            type="date"
            id="res-date"
            value={bookingForm.date}
            onChange={(e) =>
              setBookingForm({ ...bookingForm, date: e.target.value })
            }
          />
        </div>
        <div className="form-field d-flex">
          <label
            htmlFor="res-time"
            className="font-md"
            value={bookingForm.time}
            onChange={(e) =>
              setBookingForm({ ...bookingForm, time: e.target.value })
            }
          >
            Choose time
          </label>
          <select id="res-time ">
            {availableTimes.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="d-flex">
        <div className="form-field d-flex">
          <label htmlFor="guests" className="font-md">
            Number of guests
          </label>
          <input
            type="number"
            placeholder="Enter a number"
            min="1"
            max="10"
            id="guests"
            value={bookingForm.number_of_guests}
            onChange={(e) =>
              setBookingForm({
                ...bookingForm,
                number_of_guests: e.target.value,
              })
            }
          />
        </div>
        <div className="form-field d-flex">
          <label htmlFor="occasion" className="font-md">
            Occasion
          </label>
          <select
            id="occasion"
            value={bookingForm.occasion}
            onChange={(e) =>
              setBookingForm({
                ...bookingForm,
                occasion: e.target.value,
              })
            }
          >
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
        </div>
      </div>
      <div style={{textAlign: "right"}}>
        <button
          type="submit"
          className="btn btn-primary px-3 font-bold"
          style={{ margin: "2rem 0" }}
        >
          Make Your reservation
        </button>
      </div>
    </form>
  );
};

export default BookingForm;
