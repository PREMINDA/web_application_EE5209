import React from "react";
import Dangermsg from "../../Components/DangerMsg/Dangermsg";
import { useDispatch, useSelector } from "react-redux";
import { RotateSpinner } from "react-spinners-kit";

import SigInComponent from "../../Components/SignInComponent/SigInComponent";

const LoginPage = ({ history }) => {
  const dispatch = useDispatch();
  const loginData = useSelector((state) => state.userLogin);
  const { error, loading } = loginData;

  return (
    <div className="flex flex-col justify-center items-center h-screen  w-screen px-32 fixed">
      {loading && <RotateSpinner size={80} color="#00F0FF" loading={loading} />}
      {!loading && <SigInComponent history={history} />}
      {!loading && <Dangermsg>{error && error.message}</Dangermsg>}
    </div>
  );
};

export default LoginPage;
