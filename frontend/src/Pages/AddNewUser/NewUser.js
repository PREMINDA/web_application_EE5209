import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormInput from "../../Components/FormInput/FormInput";
import MyToggle from "../../Components/Switch/Switch";
import { XCircleIcon } from "@heroicons/react/outline";
import { addNewUser } from "../../redux/action/newUserAction";

const NewUser = ({ history }) => {
  const [reEnterPasword, setreEnterPasword] = useState("");
  const [enabled, setEnabled] = useState();

  const newAddUser = useSelector((state) => state.newUser);
  const { addnewUser } = newAddUser;
  const dispatch = new useDispatch();

  useEffect(() => {
    if (addnewUser) {
      setnewUserInput("");
      setreEnterPasword("");
      history.push("/dashboard/users");
    }
  }, [addnewUser]);
  const [newUserInput, setnewUserInput] = useState({
    username: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });
  const { username, email, password, firstName, lastName } = newUserInput;

  // useEffect(() => {
  //   setEnabled(false);
  // }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setnewUserInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const new1 = {
      ...newUserInput,
      role: enabled ? "ROLE_SUPER_ADMIN" : "ROLE_USER",
    };
    console.log(new1);
    dispatch(addNewUser(new1));
  };

  return (
    <div style={{}} className="w-1/2">
      <div
        style={{ height: "650px" }}
        className="inline-block w-full p-6 my-16 overflow-hidden text-left align-middle transition-all transform bg-lightviolate shadow-xl rounded-2xl"
      >
        <h3 className="text-3xl  font-medium leading-6 text-center text-white">
          Add New User
        </h3>
        <form onSubmit={handleSubmit}>
          <FormInput
            label="User Name"
            name="username"
            type="text"
            placeholder="User Name"
            value={username}
            onChange={handleChange}
          />
          <FormInput
            label="First Name"
            type="text"
            name="firstName"
            placeholder="First Name"
            value={firstName}
            onChange={handleChange}
          />
          <FormInput
            label="Last Name"
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={lastName}
            onChange={handleChange}
          />
          <FormInput
            label="Email"
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleChange}
          />
          <FormInput
            label="Password"
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handleChange}
          />
          <FormInput
            label="Re Enter Password"
            name="repassword"
            type="password"
            placeholder="Re Enter Password"
            value={reEnterPasword}
            onChange={(e) => setreEnterPasword(e.target.value)}
          />
          <div className="flex mt-8 justify-between">
            <h1 className="text-base mr-10 text-white">Is Admin</h1>
            <MyToggle enabled={enabled} setEnabled={setEnabled} />
          </div>
          <div className="mt-4 flex justify-center">
            <button
              type="button"
              className=" px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
              type="submit"
            >
              Add User
            </button>
          </div>
        </form>
        <div className="mt-4"></div>
      </div>
    </div>
  );
};

export default NewUser;
