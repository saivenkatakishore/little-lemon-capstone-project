import "./BookingSuccess.scss";
import { Link } from "react-router-dom";

const BookingSuccess = ({ resevationDetails, setResevationDetails }) => {
  return (
    <section className="section-padding">
      <div className="card">
        <Link className="close" onClick={() => setResevationDetails(null)}>
          x
        </Link>
        <h2 style={{ textAlign: "center" }} className="text-primary">
          You have successfully reserved your table.
        </h2>
        <h4 style={{ textAlign: "center" }}>
          Please find the reservation details below.
        </h4>
        <div className="d-flex justify-center">
          <table>
            <tbody>
              <tr>
                <td className="font-md">Reserved Date</td>
                <td className="font-bold">: {resevationDetails.date}</td>
              </tr>
              <tr>
                <td className="font-md">Reserved Time</td>
                <td className="font-bold">: {resevationDetails.time}</td>
              </tr>
              <tr>
                <td className="font-md">Number of Guests</td>
                <td className="font-bold">
                  : {resevationDetails.number_of_guests}
                </td>
              </tr>
              {resevationDetails.occasion && (
                <tr>
                  <td className="font-md">Occasion</td>
                  <td className="font-bold">: {resevationDetails.occasion}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default BookingSuccess;
