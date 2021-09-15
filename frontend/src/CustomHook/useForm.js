import { useEffect, useState } from "react";

const useForm = (validateInfo) => {
  const [valuses, setValues] = useState({
    username: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    repassword: "",
  });
  const [errors, setErrors] = useState({});
  const [canSubmit, setcanSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const checkValidation = () => {
    setErrors(validateInfo(valuses));
  };

  return {
    handleChange,
    valuses,
    setValues,
    checkValidation,
    errors,
    canSubmit,
    setcanSubmit,
  };
};

export default useForm;
