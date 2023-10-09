import React from 'react';

const InputField = ({ type, title, options, onChange, ...props }) => {
  let inputElement;

  const handleInputChange = (event) => {
    if (onChange) {
      onChange(event);
    }
  };

  switch (type) {
    case 'date':
      const today = new Date().toISOString().split('T')[0];
      inputElement = <input type="date" className='input-element' id='datepicker' min={today}  onChange={handleInputChange} {...props} />;
      break;
    case 'text':
      inputElement = <input type="text" className='input-element' onChange={handleInputChange} {...props} />;
      break;
    case 'number':
      inputElement = <input type="number" className='input-element' onChange={handleInputChange} {...props} />;
      break;
    case 'email':
      inputElement = <input type="email" className='input-element' onChange={handleInputChange} {...props} />;
      break;
    case 'phone':
      inputElement = <input type="tel" className='input-element' onChange={handleInputChange} {...props} />;
      break;
    case 'option':
      inputElement = (
        <select onChange={handleInputChange} {...props} className='input-element input-option'>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      );
      break;
    case 'textarea':
      inputElement = <textarea className='input-element' rows={8} onChange={handleInputChange} {...props} />;
      break;
    default:
      inputElement = <input type="text" className='input-element'  onChange={handleInputChange} {...props} />;
  }

  return (
    <div className='primary input-field'>
      <label className='primary d-block me-16'>{title}</label>
      {inputElement}
    </div>
  );
};

export default InputField;
