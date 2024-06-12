
import SaleContainer from "../Home/SaleContainer";
import pro from "../../assets/Images/mobile-1.png";
import s from "../../assets/Images/SamsungS23p.png";
import iphone14 from "../../assets/Images/phone13proi.png";
import Pixel from "../../assets/Images/Pixel.png";

import Pixel6 from "../../assets/Images/Pixel6a.png";
import Pixel6red from "../../assets/Images/Pixel6red.png";
import iphone from "../../assets/Images/iphone13.png";
import iphoneA from "../../assets/Images/I-phone14.png";
import sumsung from "../../assets/Images/SamsungS23.png";
import Pixela from "../../assets/Images/Pixel6a-Transparent.png";
import Pixelb from "../../assets/Images/Pixel7Pro-TransparentWireless.png";
import ca from "../../assets/Images/c1.png";
import cb  from "../../assets/Images/c2.png";
import cc from "../../assets/Images/c3.png";
const Cart = () => {
  return (
    <>
      <div className="mb-[10%]">
        <div className=" text-[29px] font-[700] ml-16">Shop All Products</div>
        <div className="flex gap-10 flex-wrap md:flex-nowrap justify-evenly mt-[6%]">
          <SaleContainer
            images={pro}
            Text="iPhone 13 Pro - Transparent"
            Name="LKR 499"
          />
          <SaleContainer
            images={s}
            Text="Samsung S23+ - Transparent"
            Name="LKR 799"
          />
          <SaleContainer
            images={iphone14}
            Text="iPhone 14 - Transparent with magsafe"
            Name="LKR 799"
          />
          <SaleContainer
            images={Pixel}
            Text="Pixel 7 Pro - Transparent Wireless"
            Name="LKR 599"
          />
        </div>
        <div className="flex gap-10 flex-wrap md:flex-nowrap justify-evenly mt-[6%]">
          <SaleContainer
            images={Pixel6}
            Text="Pixel 6 a - Matte Black"
            Name="LKR 499"
          />
          <SaleContainer
            images={Pixel6red}
            Text="Pixel 6a red"
            Name="LKR 399"
          />
          <SaleContainer
            images={iphoneA}
            Text="iPhone 14 - Transparent with magsafe"
            Name="LKR 799"
          />
          <SaleContainer
            images={Pixela}
            Text="Pixel 7 Pro - Transparent Wireless"
            Name="LKR 599"
          />
        </div>
        <div className="flex gap-10 flex-wrap md:flex-nowrap justify-evenly mt-[6%]">
          <SaleContainer
            images={iphone}
            Text="iPhone 13 Pro - Transparent"
            Name="LKR 499"
          />
          <SaleContainer
            images={sumsung}
            Text="Samsung S23+ - Transparent"
            Name="LKR 799"
          />
          <SaleContainer
            images={Pixela}
            Text="Pixel 6a - Transparent"
            Name="LKR 599"
          />
          <SaleContainer
            images={Pixelb}
            Text="Pixel 7 Pro - Transparent Wireless"
            Name="LKR 599"
          />
        </div>
        <div className="flex gap-10 flex-wrap md:flex-nowrap justify-evenly mt-[6%]">
          <SaleContainer
            images={ca}
            Text="iPhone 13 Pro - Transparent"
            Name="LKR 499"
          />
          <SaleContainer
            images={cb}
            Text="Samsung S23+ - Transparent"
            Name="LKR 799"
          />
          <SaleContainer
            images={cc}
            Text="iPhone 14 - Transparent with magsafe"
            Name="LKR 799"
          />
          <SaleContainer
            images={ca}
            Text="Pixel 7 Pro - Transparent Wireless"
            Name="LKR 599"
          />
        </div>
      </div>
    </>
  );
};

export default Cart;
