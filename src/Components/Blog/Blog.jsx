import React from "react";
import glass from "../../assets/Images/TemperedGlass.png";
import cover from "../../assets/Images/BackCover.png";
const Blog = () => {
  return (
    <div>
      <div className="mb-[10%] flex flex-col gap-16 ml-10">
        <div className="text-[29px] font-[700] ml-2  md:ml-[8%] flex justify-center md:justify-start ">
          {" "}
          Blog Posts
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col md:flex-row gap-5 bg-[#EDF2F4] text-left ml-[10%] rounded-[20px] mr-[30px] px-[40px] py-[30px]">
            <div className=" flex flex-col  w-[70%] gap-10 my-7">
              <div className="text-[26px] font-[600]">Tempered Glass</div>
              <div className=" text-[16px] font-[300] line-clamo-[7]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Phasellus egestas tellus rutrum tellus pellentesque eu. Amet
                dictum sit amet justo donec enim diam vulputate ut. Malesuada
                fames ac turpis egestas maecenas. Dictum fusce ut placerat orci
                nulla pellentesque dignissim. Neque laoreet suspendisse interdum
                consectetur. Turpis massa sed elementum tempus egestas sed sed.
                Ornare massa eget egestas purus viverra accumsan in. Tristique
                senectus et netus et malesuada. Ornare suspendisse sed nisi
                lacus sed. Aliquet nibh praesent tristique magna sit. Ac auctor
                augue mauris augue neque gravida in fermentum et. Erat imperdiet
                sed euismod nisi porta lorem mollis aliquam ut. Proin libero
                nunc consequat interdum varius sit amet mattis. Odio eu feugiat
                pretium nibh ipsum.
              </div>
            </div>
            <div>
              <img
                src={glass}
                alt=""
                className=" m-1  w-80 h-80 rounded-[20px] "
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-5 bg-[#EDF2F4] text-left ml-[10%] rounded-[20px] mr-[30px] px-[40px] py-[30px]">
            <div>
              <img
                src={cover}
                alt=""
                className=" m-1  w-80 h-80 rounded-[20px] "
              />
            </div>
            <div className=" flex flex-col  w-[70%] gap-10 my-7">
              <div className="text-[26px] font-[600]">Tempered Glass</div>
              <div className=" text-[16px] font-[300] line-clamo-[7]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Phasellus egestas tellus rutrum tellus pellentesque eu. Amet
                dictum sit amet justo donec enim diam vulputate ut. Malesuada
                fames ac turpis egestas maecenas. Dictum fusce ut placerat orci
                nulla pellentesque dignissim. Neque laoreet suspendisse interdum
                consectetur. Turpis massa sed elementum tempus egestas sed sed.
                Ornare massa eget egestas purus viverra accumsan in. Tristique
                senectus et netus et malesuada. Ornare suspendisse sed nisi
                lacus sed. Aliquet nibh praesent tristique magna sit. Ac auctor
                augue mauris augue neque gravida in fermentum et. Erat imperdiet
                sed euismod nisi porta lorem mollis aliquam ut. Proin libero
                nunc consequat interdum varius sit amet mattis. Odio eu feugiat
                pretium nibh ipsum.
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-5 bg-[#EDF2F4] text-left ml-[10%] rounded-[20px] mr-[30px] px-[40px] py-[30px]">
            <div className=" flex flex-col   gap-10 my-7">
              <div className="text-[26px] font-[600]">
                Mobile Brand and Price Strategy
              </div>
              <div className=" text-[16px] font-[300] line-clamo-[7]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Phasellus egestas tellus rutrum tellus pellentesque eu. Amet
                dictum sit amet justo donec enim diam vulputate ut. Malesuada
                fames ac turpis egestas maecenas. Dictum fusce ut placerat orci
                nulla pellentesque dignissim. Neque laoreet suspendisse interdum
                consectetur. Turpis massa sed elementum tempus egestas sed sed.
                Ornare massa eget egestas purus viverra accumsan in. Tristique
                senectus et netus et malesuada. Ornare suspendisse sed nisi
                lacus sed. Aliquet nibh praesent tristique magna sit. Ac auctor
                augue mauris augue neque gravida in fermentum et. Erat imperdiet
                sed euismod nisi porta lorem mollis aliquam ut. Proin libero
                nunc consequat interdum varius sit amet mattis. Odio eu feugiat
                pretium nibh ipsum.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
