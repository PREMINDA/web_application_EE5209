import React,{useState} from 'react';
import Button from '../Button/Button'

const Checkout = ({cartitems}) => {
//const [total,setTotal]=(0);

const totalCal=()=>{
    var val=0;
    cartitems.forEach(element => {
        // val=val+element.totalPrice
        val = parseInt(val)+parseInt(element.totalPrice)
    });
    return val
}

totalCal();
    
    return (
        <div className="w-96 h-36 border-2 border-white  justify-self-auto rounded-xl">
            <h2 className="text-white font-body text-center mt-4">Total : {totalCal()}.00$ </h2>
            <Button title="Checkout" style={{margin:"auto",marginTop:"24px"}}/>
        </div>
    );
};

export default Checkout;