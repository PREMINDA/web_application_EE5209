import React,{useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import OrederCollection from '../../Components/orderCollection/orederCollection';

import {getOrderItemList} from '../../redux/action/cartItemAction'

const UserOrder = () => {
    const dispatch = useDispatch();
    const orders = useSelector((state) => state.orderListItem);
    //loading, error,
    const { orderItems } = orders;

    useEffect(() => {
        dispatch(getOrderItemList())
      },[dispatch]);
    return (
        <div className='mt-10'>
            {orderItems&&orderItems.map(order=>
                (
                    <OrederCollection key={order.id} order={order}/>
                ))}
        </div>
    );
};

export default UserOrder;