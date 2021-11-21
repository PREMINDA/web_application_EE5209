import React from 'react';
import FB from '../../Images/FB.png'
import IN from '../../Images/IN.png'
import TW from '../../Images/TW.png'
import YT from '../../Images/YT.png'
const Footer = () => {
    return (
        <div className="h-14 w-full bg-lightBlue flex space-x-4 pt-2 pl-44 ">
            <img className="h-10 w-10" src={FB} alt="FB"></img>
            <img className="h-10 w-10" src={IN} alt="IN"></img>
            <img className="h-10 w-10" src={TW} alt="TW"></img>
            <img className="h-10 w-10" src={YT} alt="YT"></img>
        </div>
    );
};

export default Footer;