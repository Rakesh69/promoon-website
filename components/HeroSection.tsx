import RightArrow from '@/icons/RightArrow';
import StarIcon from '@/icons/StarIcon';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';

const HeroSection = () => {
  return (
    <div className="h-fit relative bg-hero-gradient px-5 md:px-0 overflow-hidden ">
      <Image
        src={'/assets/hero-background-top.png'}
        alt="images"
        height={1000}
        className="lg:w-full w-full mx-auto absolute md:top-[87px] top-[67px] md:h-[190px]  h-[50px] "
        width={1000}
      />
      <div className=" px-5 container w-full mx-auto text-white md:pt-52 pt-32  pb-[115px] flex flex-col lg:flex-row gap-[120px]">
        <div className="w-full lg:w-1/2 flex flex-col gap-7 slideInLeft">
          <div className="flex items-center gap-2.5 w-fit py-[7px] px-3.5 bg-borderBlack rounded-full border border-white/10">
            <span>
              <StarIcon />
            </span>
            <p className="font-medium text-sm">New: Our Innovation Software</p>
          </div>

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
        <div className="slideInRight flex flex-col md:flex-row w-full lg:w-1/2 gap-24 lg:gap-20">
          <div className="flex lg:items-end items-center justify-center ">
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
              className="w-full md:w-fit h-auto md:h-[300px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
