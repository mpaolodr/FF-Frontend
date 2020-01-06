import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

export const Signup = () => {
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
    console.log(data);
    //this is where axios call would be made
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Sign-Up</h1>
      <div className="ind-field">
        <label htmlFor="email">Email</label>
        <input name="email" type="email" ref={register} />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div className="ind-field">
        <label htmlFor="username">Username</label>
        <input type="text" name="username" ref={register} />
        {errors.username && <p>{errors.username.message}</p>}
      </div>

      <div className="ind-field">
        <label htmlFor="password">Password</label>
        <input type="password" name="password" ref={register} />
        {errors.password && <p>{errors.password.message}</p>}
      </div>

      <div className="ind-field">
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input type="password" name="confirmPassword" ref={register} />
        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

// return (
//     <div>
//       <h1>Signup</h1>
//       <p>username/email (validations needed ($(/w+)@.(/w+)^)</p>
//       <p>password input</p>
//     </div>
//   );
