import React from "react";
import about from "../../assets/Images/about.png";
const AboutUs = () => {
  return (
    <div>
      <div className=" flex flex-col gap-16">
        <div className="flex justify-center mx-6 mt-[5%]">
          <img
            src={about}
            alt=""
            className="h-0 w-0 md:h-[220px] md:w-[75%] invisible md:visible"
          />
        </div>

        <div className="mx-[12%]">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Phasellus egestas tellus rutrum tellus pellentesque eu. Amet dictum
            sit amet justo donec enim diam vulputate ut. Malesuada fames ac
            turpis egestas maecenas. Dictum fusce ut placerat orci nulla
            pellentesque dignissim. Neque laoreet suspendisse interdum
            consectetur. Turpis massa sed elementum tempus egestas sed sed.
            Ornare massa eget egestas purus viverra accumsan in. Tristique
            senectus et netus et malesuada. Ornare suspendisse sed nisi lacus
            sed. Aliquet nibh praesent tristique magna sit. Ac auctor augue
            mauris augue neque gravida in fermentum et. Erat imperdiet sed
            euismod nisi porta lorem mollis aliquam ut. Proin libero nunc
            consequat interdum varius sit amet mattis. Odio eu feugiat pretium
            nibh ipsum.
          </p>
        </div>
        <div className="mx-[12%]">
          <div className=" text-[32px] font-[700] mb-[10px]">Price Strategy</div>
          <div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Phasellus egestas tellus rutrum tellus pellentesque eu. Amet dictum sit amet justo donec enim diam vulputate ut. Malesuada fames ac turpis egestas maecenas. Dictum fusce ut placerat orci nulla pellentesque dignissim. Neque laoreet suspendisse interdum consectetur. Turpis massa sed elementum tempus egestas sed sed. Ornare massa eget egestas purus viverra accumsan in. Tristique senectus et netus et malesuada. Ornare suspendisse sed nisi lacus sed. Aliquet nibh praesent tristique magna sit. Ac auctor augue mauris augue neque gravida in fermentum et. Erat imperdiet sed euismod nisi porta lorem mollis aliquam ut. Proin libero nunc consequat interdum varius sit amet mattis. Odio eu feugiat pretium nibh ipsum.</p></div>
        </div>
        <div className="mx-[12%] mb-[50px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Phasellus egestas tellus rutrum tellus pellentesque eu. Amet dictum sit amet justo donec enim diam vulputate ut. Malesuada fames ac turpis egestas maecenas. Dictum fusce ut placerat orci nulla pellentesque dignissim. Neque laoreet suspendisse interdum consectetur. Turpis massa sed elementum tempus egestas sed sed. Ornare massa eget egestas purus viverra accumsan in. Tristique senectus et netus et malesuada. Ornare suspendisse sed nisi lacus sed. Aliquet nibh praesent tristique magna sit. Ac auctor augue mauris augue neque gravida in fermentum et. Erat imperdiet sed euismod nisi porta lorem mollis aliquam ut. Proin libero nunc consequat interdum varius sit amet mattis. Odio eu feugiat pretium nibh ipsum.

</div>
      </div>
    </div>
  );
};

export default AboutUs;
