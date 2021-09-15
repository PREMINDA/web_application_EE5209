import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormInput from "../../Components/FormInput/FormInput";
import MyToggle from "../../Components/Switch/Switch";
import { addNewUser } from "../../redux/action/newUserAction";
import useForm from "../../CustomHook/useForm";
import validateInfo from "../../CustomHook/validateInfo";
const NewUser = ({ history }) => {
  const [enabled, setEnabled] = useState();

  const {
    handleChange,
    valuses,
    setValues,
    checkValidation,
    errors,
    canSubmit,
    setcanSubmit,
  } = useForm(validateInfo);

  const newAddUser = useSelector((state) => state.newUser);
  const { addnewUser } = newAddUser;
  const dispatch = new useDispatch();

  useEffect(() => {
    if (addnewUser) {
      setValues("");
      setcanSubmit(false);
      history.push("/dashboard/users");
    }
  }, [addnewUser]);
  const {
    username,
    email,
    password,
    firstName,
    lastName,
    repassword,
  } = valuses;

  // useEffect(() => {
  //   setEnabled(false);
  // }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    checkValidation();
    const new1 = {
      ...valuses,
      role: enabled ? "ROLE_SUPER_ADMIN" : "ROLE_USER",
    };

    delete new1.repassword;
    //dispatch(addNewUser(new1));
  };

  return (
    <div style={{}} className="w-1/2">
      <div
        style={{}}
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
          {errors.username ?? <p className="text-red-600">{errors.username}</p>}
          <FormInput
            label="First Name"
            type="text"
            name="firstName"
            placeholder="First Name"
            value={firstName}
            onChange={handleChange}
          />
          {errors.firstName ?? (
            <p className="text-red-600">{errors.firstName}</p>
          )}
          <FormInput
            label="Last Name"
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={lastName}
            onChange={handleChange}
          />
          {errors.lastName ?? <p className="text-red-600">{errors.lastName}</p>}
          <FormInput
            label="Email"
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleChange}
          />
          {errors.email ?? <p className="text-red-600">{errors.email}</p>}
          <FormInput
            label="Password"
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handleChange}
          />
          {errors.password ?? <p className="text-red-600">{errors.password}</p>}
          <FormInput
            label="Re Enter Password"
            name="repassword"
            type="password"
            placeholder="Re Enter Password"
            value={repassword}
            onChange={handleChange}
          />
          {errors.repassword ?? (
            <p className="text-red-600">{errors.repassword}</p>
          )}
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
