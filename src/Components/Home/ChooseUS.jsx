import React from "react";
import RedBar from "./RedBar";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruck,
  faHandHoldingDollar,
  faAward,
} from "@fortawesome/free-solid-svg-icons";
const ChooseUS = () => {
  return (
    <div>
      <div className=" mb-[8%]">
        <div className=" mb-[8%]">
          <RedBar underText="Why Choose US" />
        </div>
        <div className="flex flex-col md:flex-row justify-evenly items-center ">
          <div className=" flex flex-col justify-center items-center gap-6 mt-[20px]">
            <div>
              <FontAwesomeIcon
                icon={faTruck}
                size="2xl"
                style={{ color: "#ff0000" }}
              />
            </div>
            <div className=" text-[30px] font-[900]">Fast Delivery</div>
            <div className=" w-[350px]">
              <p className=" line-clamp-4 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className=" flex flex-col justify-center items-center gap-6 mt-[20px]">
            <div>
              <FontAwesomeIcon
                icon={faHandHoldingDollar}
                size="2xl"
                style={{ color: "#ff0000" }}
              />
            </div>
            <div className=" text-[30px] font-[900]">Cheap Price</div>
            <div className="w-[350px]">
              <p className="line-clamp-4 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className=" flex flex-col justify-center items-center gap-6 mt-[20px]">
            <div>
              <FontAwesomeIcon
                icon={faAward}
                size="2xl"
                style={{ color: "#ec0909" }}
              />
            </div>
            <div className=" text-[30px] font-[900]">Premium Quality</div>
            <div className="w-[350px]">
              <p className=" line-clamp-4 text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUS;
