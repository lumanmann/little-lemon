import ReservationForm from '../components/reservation/ReservationForm';
import ReservationHeader from '../components/reservation/ReservationHeader';
import Modal from '../components/utils/Modal';
import { useState, useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchAPI, submitAPI } from '../fakeAPI';

export default function Reservation() {
  const navigate = useNavigate();
  const today = new Date();
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMsg, setErrorMsg] = useState('Something goes wrong. Please try again.');
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
    const dict = response.map((x) => ({ value: x, label: x }));
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

    const isValid = validForm();
    console.table(formData);
    if (isValid == true) {
      setShowConfirmModal(true);
    } else {
      setErrorMsg('Something goes wrong. Please check your information.');
      setShowErrorModal(true);
    }
  };

  const handleConfirmClick = () => {
    // Close the modal
    setShowConfirmModal(false);

    // If the user confirms, navigate to the About Page
    const response = submitAPI(formData);
    console.table(response);
    if (response == true) {
      navigate('/confirmation');
    } else {
      setErrorMsg('Something goes wrong. Please check your internet connection.');
      setShowErrorModal(false);
    }
  };

  const handleCancelClick = () => {
    setShowConfirmModal(false);
    setShowErrorModal(false);
  };

  const validForm = () => {
    for (let i in formData) {
      if (formData[i] == '' || formData[i] == undefined) {
        return false;
      }
    }

    return true;
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
      {showConfirmModal && (
        <Modal
          title="Confirmation"
          message="Are you sure you want to submit the reservation?"
          buttonTitle="Confirm"
          withCancel={true}
          onConfirm={handleConfirmClick}
          onCancel={handleCancelClick}
        />
      )}

      {showErrorModal && (
        <Modal
          title="Error"
          message={errorMsg}
          buttonTitle="OK"
          withCancel={false}
          onConfirm={handleCancelClick}
          onCancel={handleCancelClick}
        />
      )}
    </>
  );
}
