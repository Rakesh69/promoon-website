import RightArrow from '@/icons/RightArrow';
import StarIcon from '@/icons/StarIcon';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';

const HeroSection = () => {
  return (
    <div className="h-fit relative bg-hero-gradient px-5 xl:px-0 md:px-12 overflow-hidden ">
      <Image
        src={'/assets/hero-background-top.png'}
        alt="images"
        height={1000}
        className="lg:w-full w-full mx-auto absolute md:top-[87px] top-[67px] md:h-[190px]  h-[50px] "
        width={1000}
      />
      <div className=" container w-full mx-auto text-white xl:pt-52 pt-32  pb-[115px] flex flex-col lg:flex-row md:gap-14 2xl:gap-[120px]">
        <div className="w-full lg:w-1/2 flex flex-col gap-7 slideInLeft">
          <h1 className="font-medium pt-12  pb-[7px]  text-[36px] md:text-[42px] leading-[48px] md:leading-[62px]">
            Pr
            <span
              className="font-medium text-[36px] md:text-[42px] leading-[48px] md:leading-[69px] bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  'linear-gradient(90deg, #27AAE1 0%, #27AAE1 19.31%, #FFFFFF 46.77%, #066A9D 76.49%, #1C75BC 100%)',
              }}
            >
              o
            </span>
            Moon is specializing in innovative software solutions
          </h1>

          <p className="text-base font-normal leading-[20px] md:leading-[25px]">
            ProMoon has the tools and expertise to help businesses leverage the
            latest technology to accelerate their growth.
          </p>
          <Link
            href={`/contactus`}
            className="flex w-fit items-center gap-3 px-6 py-3.5 bg-send-bg-btn hover:bg-white hover:text-textPrimary hover:transition-all duration-500 text-base text-white rounded-full "
          >
            <p className="font-medium text-base leading-4">Let’s Discuss</p>
            <RightArrow />
          </Link>
        </div>
        <div className="slideInRight flex-col md:flex-row w-full lg:w-1/2 gap-24 2xl:justify-normal md:justify-center lg:gap-4 2xl:gap-20 overflow-hidden md:flex hidden">
          <div className="flex xl:items-end items-center justify-center ">
            <Image
              src={'/assets/HeoImage1.png'}
              alt="Image 1"
              width={1000}
              height={1000}
              className="w-full md:w-fit h-auto md:h-[300px]"
            />
          </div>
          <div className="flex lg:items-start justify-center h-full lg:w-64">
            <Image
              src={'/assets/HeroImage2.png'}
              alt="Image 2"
              width={1000}
              height={500}
              className=" w-full md:w-fit h-auto md:h-[300px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
