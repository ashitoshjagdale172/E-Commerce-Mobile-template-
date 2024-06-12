import React from "react";
import RedBar from "./RedBar";
import mobiles from "../../assets/Images/about.png"
import OIP from '../../assets/Images/OIP-removebg-preview.png'
const HomeAbout = () => {
  return (
    <div>
      <div>
        <div className=" mt-[10%] mb-[20px]">
          <RedBar underText="about us" />
        </div>
        <div className=" text-[20px] md:text-[28px] font-[800] text-[#D62828] flex flex-col text-center items-center justify-center ">
          <p>If you’re looking for a Premium Quality</p>
          <p>Tempered Glass or Back-cover for</p>
          <p>your Device </p>
        </div>
        <div className="flex text-center justify-center items-center mx-[15%] mt-[3%]"><p className="text-[14px] text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p></div>
        <div className="flex justify-center mx-6 mt-[5%]"><img src={mobiles} alt="" className="h-0 w-0 md:h-[220px] md:w-[79%] invisible md:visible" /></div>
        <div className="mt-[10%] flex relative mb-[10%]">
            <div className=" h-0 w-0 md:w-[440px] md:h-[440px] bg-[#003049] md:visible invisible absolute ml-[60%] z-[-1] "></div>
            <div className=" md:w-[70%] md:h-[375px] w-[375px] h-[800px]  bg-[#EDF2F4] mt-[2.2%] mx-[auto] md:ml-[10%] rounded-[20px] flex flex-col md:grid md:grid-cols-6">
                <div className=" col-span-4  pl-6 flex flex-col justify-start items-stretch" >
<div className=" text-[#FF0000] text-[42px] font-[900] mt-4"><p>Shop Premium <br />
Tempered Glass in wholesale <br /> Price !</p></div>
<div className=" flex flex-col text-[12px] font-[600] col-span-4 line-clamp-4 content-between gap-3"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
<p>LKR : 299</p></div>
<div><button className="w-[220px] h-[45px] mt-[10px] text-[16px] font-[600] text-[#ffffff] rounded-[20px] bg-[#ff0000]">Shop Tempered Glass </button></div>
                </div>
                <div className=" col-span-2 flex justify-center items-center" > <div><img src={OIP} alt="Image" className="w-[75%] h-[auto] ml-[38px]" /></div></div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
