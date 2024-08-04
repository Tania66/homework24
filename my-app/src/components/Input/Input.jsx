import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, InputGroup } from 'react-bootstrap';
import "../App.css";
import ButtonInput from '../Button/Button';



const Input = ({handleChange,value, handleClick}) => {
  return (
    <div className='container_input'>
<InputGroup className="mb-3">
  <Form.Control
  placeholder='search...'
   onChange={handleChange} value={value} type='text'/>
<ButtonInput handleClick={handleClick}/>
</InputGroup>
</div>
);
}

export default Input

