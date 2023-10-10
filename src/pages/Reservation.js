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
    setFormData(() => ({
      ...formData,
      time: response[0]
    }));
    return dict;
  };

  const initializeTimes = (initialAvailableTimes) => [...initialAvailableTimes, ...fetchAPI(today)];

  const [timeOptions, dispatchOnDateChange] = useReducer(updateTimes, [], initializeTimes);

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    if (name == 'date') {
      dispatchOnDateChange(value);
    }

    setFormData(() => ({
      ...formData,
      [name]: value
    }));
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const isValid = validForm();
    console.table(formData);
    if (isValid == true) {
      setShowConfirmModal(true);
    } else {
      setErrorMsg('Something goes wrong. Please check your input data.');
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
      if (i == 'other') {
        continue;
      }

      if (formData[i] == '' || formData[i] == undefined) {
        return false;
      }

      if (verifyHandler(formData[i], i) == false) {
        return false;
      }
    }

    return true;
  };

  const verifyHandler = (value, name) => {
    let msg = '';
    let status = true;
    switch (name) {
      case 'email': {
        const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

        if (isValidEmail == false) {
          status = false;
          msg = 'Please enter vaild email address.';
        }

        break;
      }
      case 'phone': {
        const isValidPhone = /^\d{10}$/.test(value);
        if (isValidPhone == false) {
          status = false;
          msg = 'Please enter vaild phone number.';
        }
        break;
      }
      case 'guests': {
        const number = Number(value);
        const isInt = /^-?[0-9]+$/.test(value);

        if (isNaN(number)) {
          status = false;
          msg = 'Please enter a number';
        } else if (isInt == false) {
          status = false;
          msg = 'Please enter an integer value.';
        } else if (number <= 0) {
          status = false;
          msg = 'Please enter a positive non-zero number.';
        }
        break;
      }
    }

    return { status: status, msg: msg };
  };

  return (
    <>
      <ReservationHeader />
      <ReservationForm
        onChangeHandler={onChangeHandler}
        onSubmitHandler={onSubmitHandler}
        verifyHandler={verifyHandler}
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
