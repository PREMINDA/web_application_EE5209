import React from 'react';
import { useDispatch } from 'react-redux';
import {
    TrashIcon,
    CheckCircleIcon
  } from "@heroicons/react/outline";
import OrderItemcard from '../OrderItemCard/OrderItemcard';
import {deletOrder,changeOrderStatus} from '../../redux/action/cartItemAction'
const OrederCollection = ({order}) => {

    const dispatch = useDispatch();
    const deleteItem = (id)=>{
        dispatch(deletOrder(id))
        //
    }
    const changeStatus=(id)=>{
        dispatch(changeOrderStatus(id))
        window.location.reload(true);
    }

    return (
        <div style={{width:"1280px",height:"400px",border: '1px solid white'}} className="rounded-md mb-8">
                <div className="w-full h-12 bg-lightBlue rounded-md flex" >
                    <div className="w-11/12 h-12 rounded-md grid  grid-cols-4 divide-x divide-blue-400">
                    <label className="text-white text-base font-body pl-2 self-center" >Name : {order.user.name}</label>
                    <label className="text-white text-base font-body pl-2 self-center" >Email : {order.user.email}</label>
                    <label className={`${order.status ==="DELIVERED"?"text-avgreen":"text-red-600" } text-base  font-body pl-2 self-center`} >Staus : {order.status}</label>
                    <label className="text-white text-base font-body pl-2 self-center" >Total : {order.getTotal}.00$</label>
                    </div>
                    <div className='pl-2 h-9 self-center w-22 flex'>
                        <button onClick={()=>changeStatus(order.id)} className={`w-9 h-9 rounded-lg ${order.status ==="DELIVERED"?"bg-avgreen":"bg-red-600" } hover:bg-red-900`}>
                            <CheckCircleIcon className="w-6 m-auto text-white self-center"></CheckCircleIcon>
                        </button>
                        <button onClick={()=>deleteItem(order.id)} className="w-9 h-9 ml-2 rounded-lg bg-lightviolate hover:bg-maincolor">
                            <TrashIcon className="w-6 m-auto text-white self-center"></TrashIcon>
                        </button>
                    </div>
                </div>
                <div style={{height:"342px"}} className="w-full mt-2 flex overflow-x-scroll overflow-y-hidden px-2">
                    {order.items.map((data)=>(
                        <OrderItemcard key={data.id} data={data}/>
                    ))}       
                </div>
                
            </div>
    );
};

export default OrederCollection;