import React from "react";
import "./navbar.css"
import Logo from "../assets/Images/Logo.png";
const Navbar = () => {
  return (
    <>
      <div className=" flex justify-evenly ">
        <div className="flex md:flex-row justify-evenly items-center gap-14 text-[16px] font-[400] ">
          <div className="hover:text-[#ff0000] ">Home</div>
          <div  className="hover:text-[#ff0000] ">Shop All</div>
          <div  className="hover:text-[#ff0000] ">Blog</div>
         
        </div>
        <div>
          <img src={Logo} alt="Logo" className="md:w-[250px] md:h-[150px] mt-[0px]" />
        </div>
        <div className="flex md:flex-row justify-between items-center gap-14 text-[16px] font-[400] ">
          <div className="hover:text-[#ff0000] ">About Us</div>
          <div>
            <div className="search">
              <input type="text" className="search__input" placeholder="Type your text"/>
              <button className="search__button">
                <svg
                  className="search__icon"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                >
                  <g>
                    <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                  </g>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
