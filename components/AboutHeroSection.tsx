import { useState, useRef, useEffect } from 'react';

const AboutHeroSection = () => {
  return (
    <div className="h-fit relative bg-hero-gradient px-5 md:px-0 overflow-hidden">
      <div className="container w-full mx-auto text-white md:pt-52 pt-32 pb-[115px] flex flex-col items-center text-center">
        <div className="w-full gap-7">
          <h1 className="font-medium pb-4 text-[36px] md:text-[50px] leading-[48px] md:leading-[69px]">
            Experience The True Technology At
          </h1>
          <h1 className="font-medium text-[36px] md:text-[50px] leading-[48px] md:leading-[69px]">
            Pr
            <span
              className="font-medium text-[36px] md:text-[50px] leading-[48px] md:leading-[69px] bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  'linear-gradient(90deg, #27AAE1 0%, #27AAE1 19.31%, #FFFFFF 46.77%, #066A9D 76.49%, #1C75BC 100%)',
              }}
            >
              o
            </span>
            MoonSoft
          </h1>

          <p className="text-base font-normal leading-[20px] md:leading-[25px] pt-4">
            A Result Oriented and trusted company to partner with.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutHeroSection;
