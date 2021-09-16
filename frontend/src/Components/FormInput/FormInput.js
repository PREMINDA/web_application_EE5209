import React from "react";

const FormInput = ({
  label,
  name,
  placeholder,
  value,
  type,
  onChange,
  height = 16,
}) => {
  return (
    <div className={`relative flex flex-wrap content-end h-${height}`}>
      <input
        className="font-body w-full min-w-min border-b-2 h-8 bg-transparent outline-none text-white text-lg"
        placeholder={placeholder ? placeholder : null}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default FormInput;

// name={name}
// value={value}
// type={type}
// onChange={onChange}
