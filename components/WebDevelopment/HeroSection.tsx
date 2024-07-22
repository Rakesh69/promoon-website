import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className="min-h-screen w-full bg-white">
      <div className="pt-24 md:py-40 pb-16 bg-leading-background bg-cover bg-no-repeat flex justify-center items-center px-4">
        <div className="max-w-screen-xl flex flex-col justify-between px-4">
          <h1 className="text-4xl font-bold text-white text-center">
            Web Development
          </h1>

          <p className="text-white text-center text-xl leading-10 md:leading-12 font-bold pt-12 ">
            ProMoonSoft is a fast, dependable, secure, and flawless web
            development hub. We craft all types of adaptive websites and web
            designs using a range of technologies like ASP, JSP, HTML5, JQuery,
            CSS3, and more.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-0 py-8 md:py-16 ">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex w-full md:w-1/2 slideInLeft">
            <p className="text-black font-normal text-lg">
              At ProMoon Software Solution, we excel in crafting custom web
              applications tailored to your specific requirements. Our focus is
              on creating durable and scalable solutions that seamlessly align
              with your business goals, driving optimal growth. Our proficient
              team employs cutting-edge technology stacks to develop
              high-quality web applications, ensuring resource efficiency and
              cost-effectiveness. Our impeccable track record boasts a 100%
              success rate, not only in delivering web applications but also in
              raising industry standards to enhance your business growth.
              Dedicated to on-time delivery and budget compliance, our team
              provides end-to-end services in web application programming,
              consulting, and design & development. With a decade-long presence
              in the web development industry, ProMoon Software Solution has
              garnered trust and reputation from satisfied clients worldwide.
              From small beginnings, we have expanded our reach to serve clients
              globally.
            </p>
          </div>
          <div className="text-black slideInRight md:w-1/2  justify-center hidden lg:flex">
            <Image
              src={'/assets/webdevelopmentHero.png'}
              alt={'image'}
              width={400}
              height={300}
              className="max-w-[400px] max-h-[333px]"
            />
          </div>
          <div className="text-black md:w-1/2  justify-center   block lg:hidden">
            <Image
              src={'/assets/webdevelopmentHero.png'}
              alt={'image'}
              width={400}
              height={300}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;