import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import * as yup from "yup";
import styled from "styled-components";
import backgroundImg from "./assets/signup-bg-2.svg";

//loader component
import Loader from "./Loader";

//styled componentns
const FormContainer = styled.div`
  background: url(${backgroundImg}) no-repeat center;
  background-size: cover;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  mix-blend-mode: multiply;

  &:after {
    content: "";
    background: rgba(0, 0, 0, 0.6);
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
`;

const Heading = styled.h1`
  color: #ecb847;
  font-size: 2.5rem;
  margin: 10px 0;
`;

const Form = styled.form`
  border-radius: 10px;
  background: rgba(24, 18, 18, 0.8);
  width: 30%;
  height: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

const IndField = styled.div`
  width: 80%;
  height: 90px;
  display: flex;
  justify-items: space-between;
  align-items: flex-start;
  flex-direction: column;
  position: relative;
`;

const Label = styled.label`
  font-size: 0.9rem;
  color: #ecb847;
`;

const InputField = styled.input`
  width: 100%;
  padding: 5px 10px;
  border-radius: 5px;
`;

const ErrorMessage = styled.p`
  font-size: 0.8rem;
  position: absolute;
  bottom: -20px;
  left: 0;
  color: #fff;

  &:before {
    content: "⚠ ";
    display: inline;
  }
`;

const SubmitBtn = styled.button`
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

export const Signup = () => {
  //loader animation
  const [loaderState, setLoaderState] = useState({ loading: false });

  //function to check if passwords match
  const equalTo = (ref: any, msg: any) => {
    return yup.mixed().test({
      name: "equalTo",
      exclusive: false,
      message: msg || "${path} must be the same as ${reference}",
      params: {
        reference: ref.path
      },
      test: function(value: any) {
        return value === this.resolve(ref);
      }
    });
  };
  yup.addMethod(yup.string, "equalTo", equalTo);

  //validation Schema
  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Invalid Format") //will check pattern for email if input type of email field is text
      .required("This field is required"),

    username: yup
      .string()
      .min(5, "Minimum of 5 characters")
      .max(20, "Maximum of 20 characters")
      .required("This field is required"),

    password: yup
      .string()
      .min(10, "Password not long enough")
      .required(),

    confirmPassword: yup
      .string()
      .equalTo(yup.ref("password"), "Passwords do not match")
      .required("This field is required")
  });

  //useForm
  const { handleSubmit, errors, register, reset } = useForm({
    validationSchema: schema,
    defaultValues: {
      email: "",
      username: "",
      password: "",
      confirmPassword: ""
    }
  });

  //submit handler
  const onSubmit = (data, e) => {
    e.preventDefault();
    setLoaderState({ loading: true });

    setTimeout(() => {
      setLoaderState({ loading: false });
    }, 2000);
    //this is where axios call would be made
    console.log(data);
    reset();
  };

  return (
    <FormContainer className="form-container">
      {loaderState.loading ? (
        <Loader />
      ) : (
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Heading>Sign-Up</Heading>
          <IndField className="ind-field">
            <Label htmlFor="email">Email</Label>
            <InputField name="email" type="email" ref={register} />
            {errors.email && (
              <ErrorMessage>{errors.email.message}</ErrorMessage>
            )}
          </IndField>

          <IndField className="ind-field">
            <Label htmlFor="username">Username</Label>
            <InputField type="text" name="username" ref={register} />
            {errors.username && (
              <ErrorMessage>{errors.username.message}</ErrorMessage>
            )}
          </IndField>

          <IndField className="ind-field">
            <Label htmlFor="password">Password</Label>
            <InputField type="password" name="password" ref={register} />
            {errors.password && (
              <ErrorMessage>{errors.password.message}</ErrorMessage>
            )}
          </IndField>

          <IndField className="ind-field">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <InputField type="password" name="confirmPassword" ref={register} />
            {errors.confirmPassword && (
              <ErrorMessage>{errors.confirmPassword.message}</ErrorMessage>
            )}
          </IndField>

          <SubmitBtn type="submit">Submit</SubmitBtn>
          <BottomText>
            Already have an account?{" "}
            <Link
              style={{
                color: "#ecb847",
                fontSize: "0.8rem"
              }}
              to="/login"
            >
              Sign in
            </Link>{" "}
            now!
          </BottomText>
        </Form>
      )}
    </FormContainer>
  );
};
