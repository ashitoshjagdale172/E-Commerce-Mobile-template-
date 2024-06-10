
import mobile from "../assets/Images/mobile-header.png"
const Header = () => {
  return (
    <>
      <div className=" flex justify-evenly">
        <div className="flex flex-col justify-between items-baseline">
          <div className=" h-24 "></div>
          <div className="mt-[50px]">
            <div className="text-[54px] font-[700]">Mobile</div>
            <div className="text-[76px] font-[700] text-[#ff0000]">Backcover</div>
            <div className="text-[76px] font-[700] text-[#ff0000]">Tempered Glass</div>
            <div> <button type="button" className="w-[143px] h-[40px] rounded-[20px] font-[40px] font-[600] bg-[#ff0000] text-white mt-6">Shop all!</button></div>
          </div>
        </div>
        <div className=" pt-0 mt-[-15px] ">
            <img src={mobile} alt="Mobile" className="w-[418px] h-[444px] "  />
        </div>
      </div>
    </>
  );
};

export default Header;
