import React from "react";

import SigInComponent from "../../Components/SignInComponent/SigInComponent";

const LoginPage = ({ history }) => {
  return (
    <div className="flex justify-around items-center h-screen w-screen px-32 fixed">
      <SigInComponent history={history} />
    </div>
  );
};

export default LoginPage;
