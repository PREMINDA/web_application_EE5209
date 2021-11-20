import React,{useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";

import {getOrderItemList} from '../../redux/action/cartItemAction'

const UserOrder = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getOrderItemList())
      });
    return (
        <div>
            <h1>User Oreders</h1>
        </div>
    );
};

export default UserOrder;