import SaleContainer from "../Home/SaleContainer";
import sumsung from "../../assets/Images/SamsungS23p.png";
import iphone from "../../assets/Images/iphone13.png";
import Pixela from "../../assets/Images/Pixel6a-Transparent.png";
import Pixelb from "../../assets/Images/Pixel7Pro-TransparentWireless.png";


const ShopItem = () => {
  return (
    <div>
      <div className="mb-[10%] flex flex-col gap-16 ml-10">
        <div className="text-[29px] font-[700] ml-0 md:ml-[10%] flex justify-center md:justify-start ">Shop Item</div>
        <div className=" flex flex-col md:flex-row justify-start gap-[90px] ml-[13%] ">
          <div className="w-[200px] h-[250px] md:w-[400px] md:h-[400px] ml-[20%] md:ml-0 bg-[#EDF2F4] rounded-[20px] flex justify-center items-center">
            <img
              src={sumsung}
              alt="Samsung S23+"
              className="w-[150px] h-[200px] md:w-[250px] md:h-[300px]"
            />
          </div>
          <div className=" w-[80%] h-auto md:w-[656px] md:h-[390px] flex flex-col justify-center font-[500] text-[12px] text-center md:text-left gap-[20px] line-clamp-6">
            <div className=" text-[20px] font-[600] mb-[20px]">Samsung S21 Silicon Cover</div>
            <div>
              <p>
              
                Item 20 LKR 599 <br />
                Item 50 LKR 549 <br />
                Item 100 LKR 449
              </p>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Phasellus egestas tellus rutrum tellus pellentesque eu. Amet
                dictum sit amet justo donec enim diam vulputate ut. Malesuada
                fames ac turpis egestas maecenas. Dictum fusce ut placerat orci
                nulla pellentesque dignissim. Neque laoreet suspendisse interdum
                consectetur. Turpis massa sed elementum tempus egestas sed sed.
              </p>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Phasellus egestas tellus rutrum tellus pellentesque eu. Amet
                dictum sit amet justo donec enim diam vulputate ut. Malesuada
                fames ac turpis egestas maecenas. Dictum fusce ut placerat orci
                nulla pellentesque dignissim. Neque laoreet suspendisse interdum
                consectetur. Turpis massa sed elementum tempus egestas sed sed.
              </p>
            </div>
            <div>
              <p>Contact us : 072 706 6455 | 071 789 9466</p>
            </div>
          </div>
        </div>
        <div><div className="flex gap-10 flex-wrap md:flex-nowrap justify-evenly mt-[6%]">
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
        </div></div>
      </div>
    </div>
  );
};

export default ShopItem;
