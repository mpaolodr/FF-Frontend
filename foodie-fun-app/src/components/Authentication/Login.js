import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

import styled from "styled-components";
import Loader from "./Loader";
import swal from 'sweetalert';

import { authAxios } from "../../utils/authAxios";

//styled components
const Container = styled.div`
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormWrapper = styled.form`
  margin: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  background: rgba(24, 18, 18, 0.8);
  width: 30%;
  height: 50%;
`;

const HeaderWrapper = styled.h1`
  color: #e8964a;
  font-size: 2.5rem;
  margin-bottom: 5%;
`;

const Error = styled.p`
  font-size: 0.8rem;
  position: absolute;
  bottom: 0px;
  left: 0;
  color: #fff;

  &:before {
    content: "⚠ ";
    display: inline;
  }
`;

const InputWrapper = styled.div`
  width: 80%;
  position: relative;
`;

const Text = styled.p`
  color: #e8964a;
  margin-bottom: 0px;
`;

const Inputs = styled.input`
  width: 100%;
  padding: 5px 10px;
  border-radius: 5px;
  margin-bottom: 10%;
`;

const SubmitButton = styled.button`
  width: 30%;
  padding: 5px;
  color: #fff;
  font-weight: 500;
  font-size: 1rem;
  background: #c45228;
  border: 0.5px solid #c45228;
  border-radius: 10px;
  transition: all 0.5s;

  &:hover {
    background: #fff;
    color: #c45228;
    transition: all 0.5s;
  }
`;

const BottomText = styled.p`
  color: white;
  font-size: 0.8rem;
`;

//component
export const Login = (props) => {
  const [loaderState, setLoaderState] = useState({ loading: false });

  const { register, handleSubmit, reset, errors } = useForm({
    defaultValues: {
      username: "",
      password: "",
    }
  });

  const onSubmit = (values, e) => {
    e.preventDefault();
    setLoaderState({ loading: true });

    setTimeout(() => {
      setLoaderState({ loading: false });
    }, 2000);

    const user = values;

    authAxios().post("/auth/login", user)
             .then(res => {
                swal({title: "🙌", text: "Success", icon: "success"});
                console.log(res)
                localStorage.setItem("foodieToken", res.data.token);
                props.history.push("/explore");
             })
             .catch(err => {
              swal({title: "Error!", text: "We couldn't log you in. Please check that your username and password are correct.", icon: "warning", dangerMode: true});
              console.log(err)
             })

    console.log(values);

    e.target.reset();
  };

  return (
    <Container>
      {loaderState.loading ? (
        <Loader />
      ) : (
        <FormWrapper onSubmit={handleSubmit(onSubmit)}>
          <HeaderWrapper>Log In</HeaderWrapper>
          <InputWrapper>
            <label htmlFor="username">
              <Text>username</Text>
            </label>
            <br></br>
            <Inputs
              type="text"
              placeholder="Enter username"
              name="username"
              ref={register({
                required: true,
              })}
            />
            {errors.username && errors.username.type === "required" && (
              <Error>Please enter an username</Error>
            )}
            {errors.username && errors.username.type === "pattern" && (
              <Error>Invalid username</Error>
            )}
          </InputWrapper>

          <InputWrapper>
            <label htmlFor="password">
              <Text>password</Text>
            </label>
            <br></br>
            <Inputs
              type="password"
              placeholder="Enter password"
              name="password"
              ref={register({
                required: true,
                maxLength: {
                  value: 18
                },
                minLength: {
                  value: 3
                }
              })}
            />
            {errors.password && errors.password.type === "required" && (
              <Error>Please enter a password</Error>
            )}
            {errors.password && errors.password.type === "maxLength" && (
              <Error>Password is too long</Error>
            )}
            {errors.password && errors.password.type === "minLength" && (
              <Error>Password is too short</Error>
            )}
          </InputWrapper>

          <SubmitButton type="submit">Log in</SubmitButton>

          <BottomText>
            Don't Have an account?{" "}
            <Link
              style={{
                color: "#ecb847",
                fontSize: "0.8rem"
              }}
              to="/signup"
            >
              Create Account
            </Link>
          </BottomText>
        </FormWrapper>
      )}
    </Container>
  );
};
