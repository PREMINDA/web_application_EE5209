import React,{useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import OrederCollection from '../../Components/orderCollection/orederCollection';

import {getOrderItemList} from '../../redux/action/cartItemAction'
import { RotateSpinner } from "react-spinners-kit";

const UserOrder = () => {
    const dispatch = useDispatch();
    const orders = useSelector((state) => state.orderListItem);
    const deletmsg = useSelector((state) => state.deletOrder);
    //loading, error,
    const { orderItems } = orders;
    const { loading } = deletmsg;
    useEffect(() => {
        dispatch(getOrderItemList())
      },[dispatch,loading]);
    return (
        <div className='mt-10'>
            {orderItems&&orderItems.map(order=>
                (
                    <OrederCollection key={order.id} order={order}/>
                ))}
                {loading&&<div style={{height:"780px"}} className="w-full flex justify-center flex-wrap content-center">
                    <RotateSpinner size={80} color="#00F0FF" loading={loading} />
                </div>}
        </div>
    );
};

export default UserOrder;