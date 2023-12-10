import "./BookingForm.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import { submitAPI } from "../../assets/mockapi/mockAPI";

const BookingForm = ({
  today,
  availableTimes,
  dispatchAvailableTimes,
  setResevationDetails,
}) => {
  const formik = useFormik({
    initialValues: {
      date: today,
      time: "",
      number_of_guests: "",
      occasion: "",
    },
    validationSchema: Yup.object({
      date: Yup.string().required("A value is required"),
      time: Yup.string().required("A value is required"),
      number_of_guests: Yup.number()
        .required("A value is required")
        .min(1, "Should be more than or equal to 1")
        .max(10, "Should be less than or equal to 10"),
      occasion: Yup.string(),
    }),
    onSubmit: (values) => {
      submitAPI(values).then(() => {
        setResevationDetails(values);
        formik.resetForm();
        document
          .getElementById("success-page")
          .scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "nearest",
          });
      });
    },
  });

  const handleDateChange = (event) => {
    formik.handleChange(event);
    dispatchAvailableTimes(event.target.value);
  };

  return (
    <form
      className="reservation-form section-padding py-3"
      onSubmit={formik.handleSubmit}
    >
      <div className="d-flex flex-start pb-2">
        <div className="form-field d-flex">
          <label htmlFor="date" className="font-md">
            Choose date<span style={{ color: "red" }}> *</span>
          </label>
          <div className="form-input">
            <input
              id="date"
              type="date"
              {...formik.getFieldProps("date")}
              onChange={handleDateChange}
            />
            {formik.touched.date && formik.errors.date && (
              <div className="error-msg">{formik.errors.date}</div>
            )}
          </div>
        </div>

        <div className="form-field d-flex">
          <label htmlFor="time" className="font-md">
            Choose time<span style={{ color: "red" }}> *</span>
          </label>
          <div className="form-input">
            <select id="time" {...formik.getFieldProps("time")}>
              <option key="placeholder" value="" disabled>
                -- Select Time Slot--
              </option>
              {availableTimes &&
                availableTimes.map((time) => (
                  <option
                    key={time}
                    value={time}
                    disabled={
                      time === "No available times for the selected date"
                    }
                  >
                    {time}
                  </option>
                ))}
            </select>
            {formik.touched.time && formik.errors.time && (
              <div className="error-msg">{formik.errors.time}</div>
            )}
          </div>
        </div>
      </div>
      <div className="d-flex flex-start">
        <div className="form-field d-flex">
          <label htmlFor="number_of_guests" className="font-md">
            Number of guests<span style={{ color: "red" }}> *</span>
          </label>
          <div className="form-input">
            <input
              type="number"
              placeholder="Enter a number"
              id="number_of_guests"
              {...formik.getFieldProps("number_of_guests")}
            />
            {formik.touched.number_of_guests &&
              formik.errors.number_of_guests && (
                <div className="error-msg">
                  {formik.errors.number_of_guests}
                </div>
              )}
          </div>
        </div>
        <div className="form-field d-flex">
          <label htmlFor="occasion" className="font-md">
            Occasion
          </label>
          <div className="form-input">
            <select id="occasion" {...formik.getFieldProps("occasion")}>
              <option key="placeholder" value="">
                -- Select Occasion --
              </option>
              <option key="birthday">Birthday</option>
              <option key="anniversary">Anniversary</option>
            </select>
          </div>
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
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
