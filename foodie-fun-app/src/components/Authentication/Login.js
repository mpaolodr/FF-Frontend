import React from "react";
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

export const Login = () => {

  const { register, handleSubmit, errors, reset } = useForm();

  const onSubmit = values => {
    console.log(values);
  }
  
  return (
    <div>
      <form onSubmit = {handleSubmit(onSubmit)}>
        <h1>Login</h1>

        <label htmlFor = "email">Email</label>
        <input 
        type = "text" 
        placeholder = "Enter email"
        name = "email" 
        ref = {register}
        />
        <br></br>
        <label htmlFor = "password">password</label>
        <input 
        type = "text"
        placeholder = "Enter password"
        name = "password"
        ref = {register}
        />

        <button type = "submit">Submit</button>
      </form>
      
    </div>
  );
};