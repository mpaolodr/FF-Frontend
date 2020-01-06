import React from "react";
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

//styled components
const Error = styled.p`
  color: red;
`

//component
export const Login = () => {

  const { register, handleSubmit, errors, reset } = useForm();

  const onSubmit = (values, e) => {
    e.preventDefault();
    // console.log(values);
  }
  console.log(errors);

  //Pressing enter after hitting the submit button crashes the page.

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <h1>Login</h1>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            placeholder="Enter email"
            name="email"
            ref={register({
              required: 'please enter an email',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: 'invalid email adress'
              }
            })}
          />
        {errors.email && <Error>errors.email.message</Error>}
        </div>

        <div>
          <label htmlFor="password">password</label>
          <input
            type="text"
            placeholder="Enter password"
            name="password"
            ref={register({
              required: 'please enter a password',
              maxLength: {
                value: 18,
                message: 'Password is too long'
              },
              minLength: {
                value: 3,
                message: 'Password is too short'
              }
            })
            }
          />
          {errors.password && errors.password.message}
        </div>

        <button type="submit">Submit</button>
      </form>

      <Link to="/signup">Create an account</Link>
    </div>
  );
};

