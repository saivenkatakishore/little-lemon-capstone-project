import BookingForm from "./BookingForm";
import { useEffect, useReducer, useState } from "react";
import { fetchAPI } from "../../assets/mockapi/mockAPI";
import BookingSuccess from "./BookingSuccess";

const BookingPage = () => {
  let newdate = new Date();
  let today = `${newdate.getFullYear()}-${
    newdate.getMonth() < 9
      ? "0" + (newdate.getMonth() + 1)
      : newdate.getMonth() + 1
  }-${newdate.getDate() <= 9 ? "0" + newdate.getDate() : newdate.getDate()}`;

  const [availableTimes, setAvailableTimes] = useState([]);

  const getAvaialbleTimes = (date) => {
    fetchAPI(date)
      .then((res) => {
        console.log(res);
        setAvailableTimes(res);
        return res;
      })
      .catch((err) => {
        console.log(err.message);
        setAvailableTimes([err.message]);
        return [err.message];
      });
  };

  const updateTimes = (state, date) => {
    getAvaialbleTimes(date);
  };

  const initializeTimes = () => {
    getAvaialbleTimes(today);
  };

  const [timeVal, dispatch] = useReducer(updateTimes, null, initializeTimes);
  const [resevationDetails, setResevationDetails] = useState(null);

  useEffect(() => {
    console.log(availableTimes);
  }, [availableTimes]);

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
      <BookingForm
        today={today}
        availableTimes={availableTimes}
        dispatchAvailableTimes={dispatch}
        setResevationDetails={setResevationDetails}
      />
      <div id="success-page">
        {resevationDetails && (
          <BookingSuccess
            resevationDetails={resevationDetails}
            setResevationDetails={setResevationDetails}
          />
        )}
      </div>
    </section>
  );
};

export default BookingPage;
