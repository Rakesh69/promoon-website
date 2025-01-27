import React from 'react';
import Image from 'next/image';

const HeroSectionMobile = () => {
  return (
    <div className=" w-full bg-white overflow-hidden ">
      <div className="pt-24 md:pt-36 md:pb-24 pb-16 bg-leading-background bg-cover bg-no-repeat flex justify-center items-center px-4">
        <div className="max-w-screen-xl flex flex-col justify-between px-4">
          <h1 className="text-4xl font-bold text-white text-center">
            Mobile App Development
          </h1>

          <p className="text-white text-center text-xl leading-10 md:leading-12 font-bold pt-12 ">
            We build widely used mobile applications for the major mobile
            platform such as Android, iOS, Windows, HTML5 Applications.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-5 md:px-12 xl:px-5 py-8 ">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="flex flex-col w-full lg:w-1/2 slideInLeft">
            <p className="text-black font-normal text-lg">
              Welcome to ProMoon Software Solution – your trusted partner for
              cutting-edge mobile app development services. Our seasoned experts
              specialize in crafting intuitive apps from your concepts,
              enhancing user engagement and optimizing workflows. Committed to
              excellence, we deliver customized solutions across diverse
              industries, staying at the forefront of app trends to give you a
              competitive advantage.
            </p>
            <p className="text-black font-normal text-lg pt-4 ">
              What makes us different? Our client-centric approach. By
              understanding your unique needs, we develop apps that align
              perfectly with your business objectives. From initial ideation to
              final deployment, we manage the entire process – covering iOS,
              Android, and cross-platform app development. We’re more than a
              technical team; we’re dedicated collaborators, guiding you towards
              app success.
            </p>

            <p className="text-black font-normal text-lg pt-4 ">
              Discover tailored mobile app development services that deliver
              tangible outcomes. Collaborate with ProMoon Software Solution for
              innovation, user satisfaction, and business expansion.
            </p>
          </div>
          <div className="text-black slideInRight lg:w-1/2  justify-center hidden lg:flex">
            <Image
              src={'/assets/Mobildevlopment image.png'}
              alt={'image'}
              width={400}
              height={300}
              className="max-w-[500px] max-h-[500px]"
            />
          </div>
          <div className="text-black flex justify-center lg:hidden">
            <Image
              src={'/assets/Mobildevlopment image.png'}
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

export default HeroSectionMobile;
