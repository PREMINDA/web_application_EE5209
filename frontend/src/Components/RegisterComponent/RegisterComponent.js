import React, { useState } from "react";
import procolor from "../../Config/color";
import TextInputComponent from "../TextInputComponent/TextInputComponent";

import { useDispatch, useSelector } from "react-redux";
import SignInButton from "../Button/SignInButton";
// import { login } from "../../redux/action/userAction.js";
import { userRegister } from "../../redux/action/userAction";

const Register = ({ history }) => {
  const [reEnterPasword, setreEnterPasword] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();
  // const userRegisterData = useSelector((state) => state.userRegister);

  const [inputValue, setInputValue] = useState({
    username: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });
  const { username, email, password, firstName, lastName } = inputValue;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (inputValue.password !== reEnterPasword) {
      setMessage("Password Not Match");
    } else {
      dispatch(userRegister(inputValue));
      // dispatch(login({ username: inputValue.username, password: inputValue.password }))
      history.push("/");
    }
  };

  return (
    <div
      style={{
        backgroundColor: procolor.lightViolet,
        width: "468px",
        minWidth: "340px",
      }}
      className="rounded-3xl"
    >
      <div className="h-full w-full ">
        <span className="my-8 flex justify-center text-2xl text-white mt-4 font-medium">
          SIGN UP
        </span>
        <form className="mb-8" onSubmit={submitHandler}>
          <TextInputComponent
            placeholder={"Username"}
            value={username}
            name="username"
            type="text"
            icon="fas fa-user"
            margin={8}
            onChange={handleChange}
          />
          <TextInputComponent
            placeholder={"First Name"}
            value={firstName}
            name="firstName"
            type="text"
            icon="fas fa-key"
            margin={8}
            onChange={handleChange}
          />

          <TextInputComponent
            placeholder={"Last Name"}
            value={lastName}
            name="lastName"
            type="text"
            icon="fas fa-key"
            margin={8}
            onChange={handleChange}
          />

          <TextInputComponent
            placeholder={"Email"}
            value={email}
            name="email"
            type="text"
            icon="fas fa-key"
            margin={8}
            onChange={handleChange}
          />
          <TextInputComponent
            placeholder={"Password"}
            value={password}
            name="password"
            type="password"
            icon="fas fa-key"
            margin={8}
            onChange={handleChange}
          />
          <TextInputComponent
            placeholder={"Re Enter Password"}
            value={reEnterPasword}
            name="repassword"
            type="password"
            icon="fas fa-key"
            margin={8}
            onChange={(e) => setreEnterPasword(e.target.value)}
          />
          <div
            className="my-2"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <SignInButton title={"Sign up"} type="submit" />
          </div>
        </form>
        <div className="flex justify-center">
          <h4 className="text-white text-center text-lg mr-4">
            Have an Account Already ?
          </h4>
          <a
            href="login"
            className="text-pricingcolor text-center text-lg mr-4"
          >
            Sign In
          </a>
        </div>
      </div>
    </div>
  );
};

export default Register;
