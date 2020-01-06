import React from "react";

export const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <p>username/email (validations needed ($(/w+)@.(/w+)^)</p>
      <p>password input</p>
    </div>
  );
};

// const initialFormState = { email: "", password: "" };
// const [userInfo, setUserInfo] = useState(initialFormState);

// //input change handler
// const changeHandler = e => {
//   const { name, value } = e.target;
//   setUserInfo({
//     ...userInfo,
//     [name]: value
//   });
// };

// //submit function
// const submit = e => {
//   e.preventDefault();
//   //axios post request
//   //if userInfo exists, continue to homepage, if not throw an error
//   console.log("submitted");
//   setUserInfo(initialFormState);
// };

//   <form onSubmit={submit}>
//       <h2>Login</h2>
//       <div>
//         <label htmlFor="email">Email</label>
//         <input
//           type="email"
//           name="email"
//           id="email"
//           value={userInfo.email}
//           onChange={changeHandler}
//         />
//       </div>
//       <div>
//         <label htmlFor="password">Password</label>
//         <input
//           type="password"
//           name="password"
//           id="password"
//           value={userInfo.password}
//           onChange={changeHandler}
//         />
//       </div>
//       <button type="submit">Login</button>
//     </form>
