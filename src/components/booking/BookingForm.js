import "./BookingForm.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import { submitAPI } from "../../assets/mockapi/mockAPI";

const BookingForm = ({ today, availableTimes, dispatchAvailableTimes }) => {
  const formik = useFormik({
    initialValues: {
      date: today,
      time: "",
      number_of_guests: "",
      occasion: "",
    },
    validationSchema: Yup.object({
      date: Yup.string().required("Required"),
      time: Yup.string().required("Required"),
      number_of_guests: Yup.number().required("Required"),
      occasion: Yup.string(),
    }),
    onSubmit: (values) => {
      submitAPI(values).then((res) => console.log("res"));
    },
  });

  const handleDateChange = (event) => {
    formik.handleChange(event);
    dispatchAvailableTimes(event.target.value);
  };

  return (
    <form
      className="reservation-form section-padding"
      onSubmit={formik.handleSubmit}
    >
      <div className="d-flex">
        <div className="form-field d-flex">
          <label htmlFor="date" className="font-md">
            Choose date
          </label>
          <input
            id="date"
            type="date"
            {...formik.getFieldProps("date")}
            onChange={handleDateChange}
          />
        </div>
        {formik.touched.date && formik.errors.date}
        <div className="form-field d-flex">
          <label htmlFor="time" className="font-md">
            Choose time
          </label>
          <select id="time" {...formik.getFieldProps("time")}>
            <option key="placeholder" value="" disabled>
              Select
            </option>
            {availableTimes &&
              availableTimes.map((time) => (
                <option key={time} value={time}>
                  {time}
                </option>
              ))}
          </select>
        </div>
        {formik.touched.time && formik.errors.time}
      </div>
      <div className="d-flex">
        <div className="form-field d-flex">
          <label htmlFor="number_of_guests" className="font-md">
            Number of guests
          </label>
          <input
            type="number"
            placeholder="Enter a number"
            min="1"
            max="10"
            id="number_of_guests"
            {...formik.getFieldProps("number_of_guests")}
          />
        </div>
        {formik.touched.number_of_guests && formik.errors.number_of_guests}
        <div className="form-field d-flex">
          <label htmlFor="occasion" className="font-md">
            Occasion
          </label>
          <select id="occasion" {...formik.getFieldProps("occasion")}>
            <option key="placeholder" value="" disabled>
              Select
            </option>
            <option key="birthday">Birthday</option>
            <option key="anniversary">Anniversary</option>
          </select>
        </div>
        {formik.touched.occasion && formik.errors.occasion}
      </div>
      <div style={{ textAlign: "right" }}>
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
