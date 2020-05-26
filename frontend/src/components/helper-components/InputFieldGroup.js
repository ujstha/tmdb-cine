import React from 'react';

export const InputFieldGroup = ({
  name,
  value,
  label,
  type,
  placeholder,
  onChange,
  onBlur,
}) => {
  return (
    <div className='form-group'>
      <label>{label}</label>
      <input
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        type={type}
        name={name}
        placeholder={placeholder}
        className='form-control'
      />
      {/* {error && <small className='form-text text-danger'>{error}</small>} */}
    </div>
  );
};
