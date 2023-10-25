import React from "react";

const AboutUsFirst = () => {
  return (
    <>
      <div className="aboutus_bg">
        <div className="max-w-[1188px] mx-auto px-6">
          <div className="flex justify-center items-center flex-col md:pt-[118px] pt-[100px] md:pb-[121px] pb-[100px]">
            <h3 className="text-[#1E1E1E] font-Inter sm:text-[48px] text-[36px] font-semibold leading-normal">
              Lorem ipsum
            </h3>
            <p className="pt-[17px] max-w-[817px] text-center text-[#4A4A4A] text-base font-normal leading-normal font-Inter">
              Lorem ipsum dolor sit amet consectetur. Semper vitae nullam eget
              consectetur mi. Vulputate sapien a a bibendum suspendisse quam.
              Hac posuere eget nam diam velit urna adipiscing diam. Dis velit
              nam vitae hendrerit at egestas. Tellus velit turpis at sed lorem
              vitae sed.
            </p>
            <button className="text-white mt-8 font-Inter font-semibold leading-normal text-base bg-blue py-3 px-14 rounded-xl">
              Button
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsFirst;