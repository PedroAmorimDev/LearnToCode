import React from 'react';
import './Input.css'

const Input = ({ placeHolder, type, value, onChange, name, marginTop }) => {
  return (
    <input
      type={type}
      placeholder={placeHolder}
      value={value}
      onChange={onChange}
      name={name}
      style={{ marginTop: marginTop }}
    />
  );
};

export default Input;
