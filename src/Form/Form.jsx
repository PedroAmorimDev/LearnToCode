import React, { useState } from 'react';
import Assinatura from "../Assinatura/Assinatura"
import Button from "../Button/Button"
import Input from "../Input/Input"
import Help from "../Help/Help"
import './Form.css'

const Form = () => {
  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Dados válidos', formValues);
    } else {
      alert('Preencha todos os campos');
    }
  };

  const validateForm = () => {
    for (let key in formValues) {
      if (!formValues[key]) {
        return false;
      }
    }
    return true;
  };

  return (
    <div className="CaixaRigth">
      <div>
        <Assinatura text='Try it free 7 days then $20/mo. thereafter'/>
      </div>
      <form onSubmit={handleSubmit}>
        <Input
          placeHolder='First Name'
          type='text'
          value={formValues.firstName}
          onChange={handleChange}
          name="firstName"
          marginTop='20px'
        />
        <Input
          placeHolder='Last Name'
          type='text'
          value={formValues.lastName}
          onChange={handleChange}
          name="lastName"
        />
        <Input
          placeHolder='Email Address'
          type='email'
          value={formValues.email}
          onChange={handleChange}
          name="email"
        />
        <Input
          placeHolder='Password'
          type='password'
          value={formValues.password}
          onChange={handleChange}
          name="password"
        />
        <Button type="submit" />
        <Help/>
      </form>
    </div>
  );
}

export default Form;
