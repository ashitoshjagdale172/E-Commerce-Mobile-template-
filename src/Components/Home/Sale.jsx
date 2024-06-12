import React from "react";
import SaleContainer from "./SaleContainer";
import pro from "../../assets/Images/mobile-1.png";

import s23 from "../../assets/Images/SamsungS23.png"
import iphone14 from "../../assets/Images/I-phone14.png"
import Pixel from "../../assets/Images/Pixel.png"

const Sale = () => {
  return (
    <div>
      <div className="flex flex-wrap justify-evenly gap-19  mt-[20%] md:mt-[10%]">
        <SaleContainer
          images={pro}
          Text="iPhone 13 Pro - Transparent"
          Name="LKR 499"
        />
        <SaleContainer
          images={s23}
          Text="Samsung S23+ - Transparent"
          Name="LKR 799"
        />
        <SaleContainer
          images={iphone14}
          Text="iPhone 14 - Transparent with magsafe
"
          Name="LKR 799"
        />
        <SaleContainer
          images={Pixel}
          Text="Pixel 7 Pro - Transparent Wireless"
          Name="LKR 599"
        />
      </div>
      
      </div>
  );
};

export default Sale;
