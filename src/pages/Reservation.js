import ReservationForm from '../components/reservation/ReservationForm';
import ReservationHeader from '../components/reservation/ReservationHeader';
import { useState, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchAPI, submitAPI } from '../fakeAPI';

export default function Reservation() {
  const navigate = useNavigate();
  const today = new Date();
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    date: String(today.getDate()),
    time: '',
    occasion: 'none',
    preference: 'none',
    guests: '',
    other: ''
  });

  const updateTimes = (timeOptions, date) => {
    const response = fetchAPI(new Date(date));
    const dict = response.map(x => ({value:x, label:x}));
    return dict;
  };

  const initializeTimes = (initialAvailableTimes) => [...initialAvailableTimes, ...fetchAPI(today)];

  const [timeOptions, dispatchOnDateChange] = useReducer(updateTimes, [], initializeTimes);

  const onChangeHandler = (event) => {
    if (event.target.name == 'date') {
      dispatchOnDateChange(event.target.value);
    }

    setFormData(() => ({
      ...formData,
      [event.target.name]: event.target.value
    }));
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.table(formData);
    const confirmed = window.confirm('Are you sure you want to submit the reservation?');

    if (confirmed) {
      // If the user confirms, navigate to the About Page
      submitAPI(formData);
      navigate('/confirmation');
    }
  };

  return (
    <>
      <ReservationHeader />
      <ReservationForm
        onChangeHandler={onChangeHandler}
        onSubmitHandler={onSubmitHandler}
        timeOptions={timeOptions}
        formData={formData}
      />
    </>
  );
}
