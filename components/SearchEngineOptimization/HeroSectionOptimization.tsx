import React from 'react';
import Image from 'next/image';

const HeroSectionOptimization = () => {
  return (
    <div className="min-h-screen w-full bg-white overflow-hidden ">
      <div className="pt-24 md:pt-36 md:pb-32 pb-16 bg-leading-background bg-cover bg-no-repeat flex justify-center items-center px-4">
        <div className="max-w-screen-xl flex flex-col justify-between px-4">
          <h1 className="text-4xl font-bold text-white text-center">
            Search Engine Optimization
          </h1>

          <p className="text-white text-center text-xl leading-10 md:leading-12 font-bold pt-12 ">
            We thoroughly assess your business needs and create customized
            applications that align perfectly with your requirements.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-0 py-8 md:py-16 ">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="flex flex-col w-full lg:w-1/2 slideInLeft">
            <p className="text-black font-normal text-lg">
              At ProMoon Software Solution, we pride ourselves on offering
              exceptional SEO solutions tailored to your business needs. In the
              highly competitive digital landscape, establishing a strong online
              presence is crucial. Our expert SEO services are crafted to help
              your business shine and achieve success in the digital world.
              Whether you’re a startup or a well-established enterprise, our
              personalized SEO strategies are designed to drive your business
              towards online success. Our experienced SEO professionals stay
              updated with the latest industry trends, ensuring your website’s
              visibility and conversion rates are maximized.
            </p>
            <p className="text-black font-normal text-lg py-4 ">
              In today’s fast-paced digital market, standing out is essential.
              Our specialized SEO services will enhance your online presence,
              helping your business to not only compete but excel. We focus on
              delivering tangible results that elevate your brand and increase
              your market reach. ProMoon Software Solution is committed to being
              your partner in digital growth. With our results-driven approach,
              we aim to boost your website’s performance and drive significant
              traffic and engagement. Let us help you navigate the path to
              digital success with our comprehensive SEO solutions.
            </p>
            <p className="text-black font-normal text-lg">
              Elevate your online profile with ProMoon Software Solution's
              top-notch SEO services. Together, we will create a roadmap to
              achieve your digital goals and ensure your business thrives in the
              online arena.
            </p>
          </div>
          <div className="text-black slideInRight lg:w-1/2  justify-center hidden lg:flex">
            <Image
              src={'/assets/SEO.png'}
              alt={'image'}
              width={400}
              height={300}
              className="max-w-[500px] max-h-[500px]"
            />
          </div>
          <div className="text-black flex justify-center lg:hidden">
            <Image
              src={'/assets/SEO.png'}
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

export default HeroSectionOptimization;
