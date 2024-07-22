import BlurCheckedIcon from '@/icons/BlurCheckedIcon';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const OUTCOME = [
  {
    id: 1,
    title: 'Comprehensive Expertise ',
    details:
      'Our team of QA specialists brings extensive experience and in-depth knowledge across various domains, including embedded systems, mobile applications, desktop and web applications, IoT, and automation. This broad expertise ensures that we can address all aspects of your quality assurance needs.',
  },
  {
    id: 2,
    title: 'Tailored Solutions ',
    details:
      'We understand that each project is unique. Our QA services are customized to fit your specific requirements, ensuring that our testing strategies align perfectly with your project goals and deliver optimal results.',
  },
  {
    id: 3,
    title: 'Advanced Testing Techniques',
    details:
      'We utilize the latest testing tools and methodologies to provide thorough and efficient quality assurance. From manual and automated testing to specialized approaches for IoT and embedded systems, our techniques are designed to uncover issues and ensure your software performs flawlessly.',
  },

  {
    id: 4,
    title: 'Rigorous Quality Standards',
    details:
      'uality is at the core of what we do. We adhere to the highest industry standards to ensure that your software meets all quality benchmarks. Our rigorous testing processes are designed to deliver a product that is reliable, user-friendly, and free from critical defects.',
  },
  {
    id: 5,
    title: 'Efficient and Cost-Effective ',
    details:
      ' By leveraging automation and advanced testing tools, we streamline the testing process, reducing both time and costs while enhancing accuracy. Our goal is to provide top-notch quality assurance that maximizes value and efficiency for your project.',
  },
  {
    id: 6,
    title: 'Proactive Problem Solving',
    details:
      'Our QA team is dedicated to identifying and addressing potential issues before they impact your users. We take a proactive approach to problem-solving, ensuring that your software is well-prepared for real-world use.',
  },
];

const WhyChooseQuality = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const handleScroll = () => {
      if (section && !isVisible) {
        const top = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight * 0.8) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVisible]);
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="flex justify-center items-center flex-col mb-8">
        <h1 className="text-center text-black text-3xl pr-2 font-bold py-4 relative">
          <div className="relative inline-block">
            <span className="text-blue pr-2 ">Why</span>
          </div>
          Choose{' '}
          <div className="relative inline-block">
            <span className="text-blue">Us</span>
          </div>
          <div className="border-animation" />
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-between items-center">
        <div
          ref={sectionRef}
          className={`animated-section ${
            isVisible ? 'slideInLeft' : ''
          } grid grid-cols-1 lg:grid-cols-2 gap-4 w-full  mb-8 lg:mb-0 `}
        >
          {OUTCOME.map(({ title, id, details }) => (
            <div
              className="flex flex-row gap-4"
              key={id}
            >
              <div>
                <BlurCheckedIcon />
              </div>
              <div className="flex flex-col">
                <div className="font-bold">{title}</div>
                <div>{details}</div>
              </div>
            </div>
          ))}
        </div>
        <div
          ref={sectionRef}
          className={`animated-section ${
            isVisible ? 'slideInRight2' : ''
          } flex justify-center md:w-1/2 `}
        >
          <Image
            src={'/assets/whychoose.png'}
            alt={'image'}
            width={400}
            height={400}
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseQuality;
