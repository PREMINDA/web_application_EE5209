import React from "react";
import { useSelector ,useDispatch} from "react-redux";

import CartItemComponent from "../../Components/CartItemComponent/CartItemComponent";
import Checkout from "../../Components/Checkout/Checkout";
import {orderItems} from "../../redux/action/cartItemAction"

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const checkout =()=>{
    dispatch(orderItems(cartItems))
  }

  return (
    <div className="mt-16 container-2xl h-full">
      {cartItems.length === 0 ? (
        <h1 className="text-white w-1/3 m-0 text-xl flex flex-wrap content-center">
          Your Cart is Empty
        </h1>
      ) : (
        <div className="h-full">
          <div style={{height:"660px"}} className=" overflow-y-auto">
            {cartItems.map((game) => <CartItemComponent key={game.game.id} game={game} />)}
          </div>
          <div className="justify-items-stretch h-44 w-full absolute inset-x-0 bottom-0 flex justify-center">
           <Checkout func={checkout} cartitems={cartItems}/>
          </div>
        </div>
       
      )}
       
    </div>
   
  );
};

export default Cart;
