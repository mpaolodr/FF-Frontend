import React from "react";
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap'

import styled from 'styled-components';

//styled components
const Container = styled.div`
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

const FormWrapper = styled.div`
  margin: auto;
  display: flex;
  justify-content: space-around;
`
const Error = styled.p`
  color: red;
  margin-bottom: 0px;
`

const Text = styled.p`
  color: #E8964A;
  margin-bottom: 0px;
`

const Inputs = styled.input`
  margin-bottom: 5%;
  border: 0px solid white;
  width: 100%;
  padding: 2% 20%;
  padding-left: 0px
  border-radius: 2px;
`

const SubmitButton = styled.button`
  width: 250px
  padding: 5%;
  margin: 5% 0;
  background-color: #C45228;
  color: white;
  border-radius: 10px;
  border: 0px solid white;
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
    <Container>
      <FormWrapper>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="email"><Text>Email</Text></label><br></br>
            <Inputs
              type="text"
              placeholder="Enter email"
              name="email"
              ref={register({
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                }
              })}
            />
            {errors.email && errors.email.type === 'required' && <Error>Please enter an email</Error>}
            {errors.email && errors.email.type === 'pattern' && <Error>Invalid Email</Error>}
          </div>

          <div>
            <label htmlFor="password"><Text>password</Text></label><br></br>
            <Inputs
              type="text"
              placeholder="Enter password"
              name="password"
              ref={register({
                required: true,
                maxLength: {
                  value: 18,
                },
                minLength: {
                  value: 3,
                }
              })
              }
            />
            {errors.password && errors.password.type == 'required' && <Error>Please enter a password</Error>}
            {errors.password && errors.password.type == 'maxLength' && <Error>Password is too long</Error>}
            {errors.password && errors.password.type == 'minLength' && <Error>Password is too short</Error>}
          </div>

          <SubmitButton type = "submit">Log in</SubmitButton>
          <h2><Text>Don't have an account?</Text></h2>
          <Link to="/signup">Create an account</Link>
        </form>

      </FormWrapper>
    </Container>
  );
};