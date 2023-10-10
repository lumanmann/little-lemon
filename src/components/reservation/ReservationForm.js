import InputField from '../utils/InputField';


const ReservationForm = ({timeOptions, formData, verifyHandler, onChangeHandler, onSubmitHandler }) => {
  const occasionOptions = [
    { value: 'none', label: 'None' },
    { value: 'birthday', label: 'Birthday' },
    { value: 'anniversary', label: 'Anniversary' },
    { value: 'engagement', label: 'Engagement' },
    { value: 'other', label: 'Other' }
  ];

  const preferenceOptions = [
    { value: 'none', label: 'None' },
    { value: 'indoor', label: 'Indoor' },
    { value: 'outdoor1', label: 'Outdoor (Patio)' },
    { value: 'outdoor2', label: 'Outdoor (Sidewalk)' }
  ];

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
                verifyHandler={verifyHandler}
                onChange={onChangeHandler}
              />
              <InputField
                type="text"
                title="Last Name"
                name="lastname"
                value={formData.lastname}
                verifyHandler={verifyHandler}
                onChange={onChangeHandler}
              />
            </li>
            <li>
              <InputField
                type="email"
                title="Email"
                name="email"
                value={formData.email}
                verifyHandler={verifyHandler}
                onChange={onChangeHandler}
              />
            </li>
            <li>
              <InputField
                type="phone"
                title="Phone Number"
                name="phone"
                value={formData.phone}
                verifyHandler={verifyHandler}
                onChange={onChangeHandler}
              />
            </li>
            <li>
              <InputField
                type="date"
                title="Date"
                name="date"
                value={formData.date}
                verifyHandler={verifyHandler}
                onChange={onChangeHandler}
              />
            </li>
            <li>
              <InputField
                type="number"
                title="Number of Guest"
                name="guests"
                value={formData.guests}
                verifyHandler={verifyHandler}
                onChange={onChangeHandler}
              />
            </li>
            <li>
              <InputField
                type="option"
                options={timeOptions}
                title="Time"
                name="time"
                value={formData.time}
                verifyHandler={verifyHandler}
                onChange={onChangeHandler}
              />
            </li>
            <li>
              <InputField
                type="option"
                options={occasionOptions}
                title="Occasion"
                name="occasion"
                value={formData.occasion}
                 verifyHandler={verifyHandler}
                onChange={onChangeHandler}
              />
            </li>
            <li>
              <InputField
                type="option"
                options={preferenceOptions}
                title="Seating preferences"
                name="preference"
                value={formData.preference}
                verifyHandler={verifyHandler}
                onChange={onChangeHandler}
              />
            </li>
            <li>
              <InputField
                type="textarea"
                title="Additional Comments"
                name="other"
                isRequired={false}
                value={formData.other}
                verifyHandler={verifyHandler}
                onChange={onChangeHandler}
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
