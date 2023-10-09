import { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../utils/InputField";

const ReservationForm = (props) => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    date: "",
    time: "12:00",
    occasion: "none",
    preference: "none",
    guests: "",
    other: "",
  });

  const occasionOptions = [
    { value: "none", label: "None" },
    { value: "birthday", label: "Birthday" },
    { value: "anniversary", label: "Anniversary" },
    { value: "engagement", label: "Engagement" },
    { value: "other", label: "Other" },
  ];

  const preferenceOptions = [
    { value: "none", label: "None" },
    { value: "indoor", label: "Indoor" },
    { value: "outdoor1", label: "Outdoor (Patio)" },
    { value: "outdoor2", label: "Outdoor (Sidewalk)" },
  ];

  const timeOptions = [
    { value: "12", label: "12:00" },
    { value: "13", label: "13:00" },
    { value: "14", label: "14:00" },
    { value: "18", label: "18:00" },
    { value: "19", label: "19:00" },
  ];

  const navigate = useNavigate();

  const onChange = (event) => {
    setFormData(() => ({
      ...formData,
      [event.target.name]: event.target.value,
    }));
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.table(formData);
    const confirmed = window.confirm(
      "Are you sure you want to submit the reservation?"
    );

    if (confirmed) {
      // If the user confirms, navigate to the About Page
      navigate("/confirmation");
    }
  };

  return (
    <div className="container">
      <form className="reservation-form" onSubmit={onSubmitHandler}>
        <div className="flex flex-col align-center w-100">
          <ul className="reservation-form-list">
            <li>
              <InputField
                type="text"
                title="Frist Name"
                name="firstname"
                value={formData.firstname}
                onChange={onChange}
              />
               <InputField
                type="text"
                title="Last Name"
                name="lastname"
                value={formData.lastname}
                onChange={onChange}
              />
            </li>
            <li>
              <InputField
                type="email"
                title="Email"
                name="email"
                value={formData.email}
                onChange={onChange}
              />
            </li>
            <li>
              <InputField
                type="phone"
                title="Phone Number"
                name="phone"
                value={formData.phone}
                onChange={onChange}
              />
            </li>
            <li>
              <InputField
                type="date"
                title="Date"
                name="date"
                value={formData.date}
                onChange={onChange}
              />
            </li>
            <li>
              <InputField
                type="number"
                title="Number of Guest"
                name="guests"
                value={formData.guests}
                onChange={onChange}
              />
            </li>
            <li>
              <InputField
                type="option"
                options={timeOptions}
                title="Time"
                name="time"
                value={formData.time}
                onChange={onChange}
              />
            </li>
            <li>
              <InputField
                type="option"
                options={occasionOptions}
                title="Occasion"
                name="occasion"
                value={formData.occasion}
                onChange={onChange}
              />
            </li>
            <li>
              <InputField
                type="option"
                options={preferenceOptions}
                title="Seating preferences"
                name="preference"
                value={formData.preference}
                onChange={onChange}
              />
            </li>
            <li>
              <InputField
                type="textarea"
                title="Additional Comments"
                name="other"
                value={formData.other}
                onChange={onChange}
              />
            </li>
          </ul>

          <button className="mb-36">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ReservationForm;
