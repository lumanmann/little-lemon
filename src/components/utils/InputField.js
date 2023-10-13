import { useState } from 'react';

const InputField = ({
  type,
  title,
  options,
  isRequired = true,
  verifyHandler,
  onChange,
  ...props
}) => {
  const [errorMsg, setErrorMsg] = useState('');
  const [showError, setShowError] = useState(false);
  let inputElement;

  const handleInputChange = (event) => {
    if (isRequired && (event.target.value === '' || event.target.value === undefined)) {
      setErrorMsg('This field cannot be empty.');
      setShowError(true);
    } else {
      const result = verifyHandler(event.target.value, event.target.name);
      if (result.status === true) {
        setShowError(false);
        setErrorMsg('');
      } else {
        setErrorMsg(result.msg);
        setShowError(true);
      }
    }

    if (onChange) {
      onChange(event);
    }
  };

  const labelContent = showError ? errorMsg : title;

  switch (type) {
    case 'date':
      var today = new Date();
      inputElement = (
        <input
          type="date"
          aria-label={props.name}
          className={`input-element ${showError ? 'error' : ''}`}
          id="datepicker"
          min={today.toISOString().split('T')[0]}
          onChange={handleInputChange}
          {...props}
        />
      );
      break;
    case 'text':
      inputElement = (
        <input
          type="text"
          aria-label={props.name}
          className={`input-element ${showError ? 'error' : ''}`}
          onChange={handleInputChange}
          {...props}
        />
      );
      break;
    case 'number':
      inputElement = (
        <input
          type="number"
          aria-label={props.name}
          className={`input-element ${showError ? 'error' : ''}`}
          onChange={handleInputChange}
          {...props}
        />
      );
      break;
    case 'email':
      inputElement = (
        <input
          type="email"
          aria-label={props.name}
          className={`input-element ${showError ? 'error' : ''}`}
          onChange={handleInputChange}
          {...props}
        />
      );
      break;
    case 'phone':
      inputElement = (
        <input
          type="tel"
          aria-label={props.name}
          placeholder="1234567890"
          className={`input-element ${showError ? 'error' : ''}`}
          onChange={handleInputChange}
          {...props}
        />
      );
      break;
    case 'option':
      inputElement = (
        <select
          aria-label={props.name}
          onChange={handleInputChange}
          {...props}
          className={`input-element input-option ${showError ? 'error' : ''}`}>
          {options.map((option, index) => (
            <option key={option.value}   aria-label={props.name+"-"+index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      );
      break;
    case 'textarea':
      inputElement = (
        <textarea
        aria-label={props.name}
          className={`input-element ${showError ? 'error' : ''}`}
          rows={8}
          onChange={handleInputChange}
          {...props}
        />
      );
      break;
    default:
      inputElement = (
        <input
          type="text"
          aria-label={props.name}
          className={`input-element ${showError ? 'error' : ''}`}
          onChange={handleInputChange}
          {...props}
        />
      );
  }

  return (
    <div className="primary input-field">
      <label aria-label={props.name + "-label"} className={`primary d-block me-16 ${showError ? 'highlight' : ''}`}>
        {labelContent}
        {isRequired && !showError ? '*' : ''}
      </label>
      {inputElement}
    </div>
  );
};

export default InputField;
