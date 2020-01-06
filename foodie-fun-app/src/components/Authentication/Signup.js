import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

export const Signup = () => {
  return (
    <div>
      <h1>Signup</h1>
      <p>username/email (validations needed ($(/w+)@.(/w+)^)</p>
      <p>password input</p>
    </div>
  );
};
