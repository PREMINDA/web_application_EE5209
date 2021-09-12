import React from "react";
import RegisterComponent from "../../Components/RegisterComponent/RegisterComponent";

const RegistrationPage = ({ history }) => {
  return (
    <div className="flex justify-around items-center h-screen w-screen px-32  fixed">
      <RegisterComponent history={history} />
    </div>
  );
};

export default RegistrationPage;
