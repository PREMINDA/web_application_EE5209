import React from 'react';
import Seperator from '../Seperator/Seperator';
const OrderItemcard = ({data}) => {
    return (
        <div style={{height:"316px",width:"236px",minWidth:"236px"}} className="rounded-xl mx-2 bg-lightBlue ">
            <img
          style={{ height: "140px", objectFit: "cover" }}
          src={
            require(`../../Images/${data.product}/1.jpg`).default
          }
          alt={`${data.product}`}
          className="w-full p-2 rounded-2xl"
        />
                        <div className = "flex-col text-center h-full">      
                            <h1 className="text-base mt-2 text-lightviolate">Game</h1>
                            <h1 className="text-white text-base mt-2">{data.product}</h1>
                            <Seperator mt={2}/>
                            <h1 className="text-white text-base mt-2">Subtotal : {data.getSubTotal}.00$</h1>
                            <Seperator mt={2} />
                            <h1 className="text-white text-base mt-2">Quantity : {data.qty}</h1>
                        </div>
                    </div>
    );
};

export default OrderItemcard;