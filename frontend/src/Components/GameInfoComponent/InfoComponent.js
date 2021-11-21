import React,{useState} from "react";
import { useDispatch,useSelector } from "react-redux";
import procolor from "../../Config/color.js";
import InforDetailcomponent from "../GameInfoDetailComponent/InforDetailComponent.js";
import Seperator from "../Seperator/Seperator.js";
import Button from "../Button/Button.js";
import { addToCart } from "../../redux/action/cartAction";
import PopUpWarn from "../PopUpWarn/PopUpWarn.js";
const InforComponent = ({ sys, dev, gameId }) => {
 const [open,setOpen] = useState(false);
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const closeModal=()=>
  {
    setOpen(false);
  }

  const addGameToCart = () => {
    if(userInfo === null)
    {
      setOpen(true);
    }else
    {
      dispatch(addToCart(gameId));
    }
  };
  return (
    <div className="w-72">
      <div
        style={{
          background: procolor.maincolor,
          height: "1080px",
          borderLeft: "1px solid gray",
          zIndex: "0",
          width: "inherit",
          maxWidth: "inherit",
        }}
        className="mt-12 fixed border-gray-900 pt-1"
      >
        <div className="">
          <h1
            style={{ color: procolor.specialTextColor, fontWeight: 800 }}
            className="text-white text-base font-body mt-3 text-center mx-auto"
          >
            System requirements
          </h1>
        </div>
        <div className="text-center">
          <div className="w-60 m-auto">
            {sys.map((text) => (
              <InforDetailcomponent
                key={text.split(":")[0]}
                title={text.split(":")[0]}
                subTitle={text.split(":")[1]}
                color={procolor.hardwareColor}
              />
            ))}

            <Seperator />

            {dev.map((text) => (
              <InforDetailcomponent
                key={text.split(":")[0]}
                title={text.split(":")[0]}
                subTitle={text.split(":")[1]}
                color={procolor.specialTextColor}
              />
            ))}

            <div
              className="mt-3"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Button
                title={"Add To Cart"}
                color={procolor.maincolor}
                func={addGameToCart}
              />
            </div>
            <div
              className="mt-3"
              style={{ display: "flex", justifyContent: "center" }}
            >
            </div>
          </div>
        </div>
      </div>
       <PopUpWarn isOpen={open} closeModal={closeModal} message="Befor Add To Cart You Have to login first"/> 
    </div>
  );
};

export default InforComponent;
