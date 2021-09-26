import React, { useState, useEffect } from "react";
import procolor from "../../Config/color";
import TextInputComponent from "../TextInputComponent/TextInputComponent";
import SignInButton from "../Button/SignInButton";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/action/userAction.js";

const SigInComponent = ({ history }) => {
  const [inputValue, setInputValue] = useState({ username: "", password: "" });
  const { username, password } = inputValue;
  const dispatch = useDispatch();
  const userLoginData = useSelector((state) => state.userLogin);
  //loading, error,
  const { userInfo } = userLoginData;

  useEffect(() => {
    if (userInfo) {
      history.push("/");
    }
  }, [userInfo, history]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(inputValue));
  };
  return (
    <div
      style={{
        backgroundColor: procolor.lightViolet,
        width: "468px",
        minWidth: "340px",
      }}
      className="max-h-96  rounded-3xl"
    >
      <div className="h-full w-full">
        <span className="my-8 flex justify-center text-2xl text-white mt-4 font-medium">
          SIGN IN
        </span>
        <form className="mb-8" onSubmit={submitHandler}>
          <TextInputComponent
            placeholder={"Username"}
            name="username"
            value={username}
            type="text"
            onChange={handleChange}
            icon="fas fa-user"
            margin={8}
          />
          <TextInputComponent
            placeholder={"Password"}
            name="password"
            value={password}
            type="password"
            onChange={handleChange}
            icon="fas fa-key"
            margin={8}
          />
          <div
            className="my-2"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <SignInButton title={"Sign in"} type="submit" />
          </div>
        </form>
        <div className="flex justify-center">
          <h4 className="text-white text-center text-lg mr-4">
            Don't Have an account ?
          </h4>
          <a
            href="register"
            className="text-pricingcolor text-center text-lg mr-4"
          >
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default SigInComponent;
