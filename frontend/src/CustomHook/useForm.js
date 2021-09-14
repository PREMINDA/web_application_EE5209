import { useEffect, useState } from "react";

const useForm = () => {
  const [valuses, setValues] = useState({
    username: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return { handleChange, valuses };
};

export default useForm;
