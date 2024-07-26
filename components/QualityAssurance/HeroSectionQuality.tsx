import React from 'react';
import Image from 'next/image';

const HeroSectionQuality = () => {
  return (
    <div className="min-h-screen w-full bg-white overflow-hidden ">
      <div className="pt-24 md:pt-36 md:pb-24 pb-16 bg-leading-background bg-cover bg-no-repeat flex justify-center items-center px-4">
        <div className="max-w-screen-xl flex flex-col justify-between px-4">
          <h1 className="text-4xl font-bold text-white text-center">
            Quality Assurance
          </h1>

          <p className="text-white text-center text-xl leading-10 md:leading-12 font-bold pt-12 ">
            We meticulously evaluate your business requirements to ensure that
            every application we develop meets the highest quality standards and
            aligns perfectly with your specific needs.
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-0 py-8 md:py-16 ">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="flex flex-col w-full lg:w-1/2 slideInLeft">
            <p className="text-black font-normal text-lg">
              ProMoon Software Solution offers end-to-end software testing &
              quality assurance services that empower your business for next-gen
              applications by implementing top-of-the-line software testing
              methodologies and tools. We follow a simple and forward-thinking
              approach that reduces the overall life cycle, eliminates errors,
              and minimizes bugs quickly and more efficiently. We, at ProMoon
              Software Solution, hold a proficient team of QA engineers who have
              over a decade of experience in delivering high-end QA testing and
              assurance services that adhere to the best practices and
              processes, ensuring the standard quality of your software
              applications.
            </p>
            <p className="text-black font-normal text-lg pt-4 ">
              We understand that quality is crucial for success in the software
              industry. That’s why we provide comprehensive QA services tailored
              to businesses of all sizes, from startups to large enterprises.
              Our commitment is to deliver top-notch QA services at competitive
              rates, ensuring your software meets the highest standards.
              Additionally, we offer a range of consulting services designed to
              enhance your software development processes and drive continuous
              improvement.
            </p>
          </div>
          <div className="text-black slideInRight lg:w-1/2  justify-center hidden lg:flex">
            <Image
              src={'/assets/qualitySection.png'}
              alt={'image'}
              width={400}
              height={300}
              className="max-w-[500px] max-h-[500px]"
            />
          </div>
          <div className="text-black flex justify-center lg:hidden">
            <Image
              src={'/assets/qualitySection.png'}
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

export default HeroSectionQuality;
