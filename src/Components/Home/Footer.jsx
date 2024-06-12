import React from "react";
import Logo from "../../assets/Images/logo2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareWhatsapp,
  faSquareFacebook,
  faSquareInstagram,
  faSquareTwitter,
} from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
  return (
    <>
      <div className="bg-[#EDF2F4] flex flex-col md:flex-row items-center W-[100%] justify-evenly p-20 gap-24 mt-[40px] ">
        <div className="flex flex-col ">
          <div className="flex justify-center">
            <img src={Logo} alt="" className="w-[100px] h-[100px]" />
          </div>
          <div>
            <p className=" line-clamp-5 w-[250px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-7">
          <div className=" font-[700]">Contact us</div>
          <div className="">
            E:info@example.com <br /> P:+94 7670000000 <br />
            A:123 Hospital rd, <br /> Kalubowila, Dehiwela
          </div>
        </div>
        <div className="flex flex-col gap-7">
          <div className=" font-[700]">Useful links</div>
          <div>
            <div>Shop All</div>
            <div>Tempered Glass</div>
            <div>Back-cover</div>
            <div>About </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <div>
              <FontAwesomeIcon
                icon={faSquareWhatsapp}
                size="2xl"
                style={{ color: "#000000" }}
              />
            </div>
            <div>Whatsapp</div>
          </div>
          <div className="flex items-center gap-3">
            <div>
              <FontAwesomeIcon
                icon={faSquareFacebook}
                size="2xl"
                style={{ color: "#000000" }}
              />
            </div>
            <div>Facebook</div>
          </div>
          <div className="flex items-center gap-3">
            <div>
              <FontAwesomeIcon
                icon={faSquareInstagram}
                size="2xl"
                style={{ color: "#000000" }}
              />
            </div>
            <div>Instagram</div>
          </div>
          <div className="flex items-center gap-3">
            <div>
              <FontAwesomeIcon
                icon={faSquareTwitter}
                size="2xl"
                style={{ color: "#000000" }}
              />
            </div>
            <div>Twitter</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
