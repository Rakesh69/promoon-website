import BlurCheckedIcon from '@/icons/BlurCheckedIcon';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const OUTCOME = [
  {
    id: 1,
    title: 'Proven Expertise',
    details:
      ' With years of experience in the SEO industry, our team has a deep understanding of search engine algorithms and the latest SEO techniques. Our proven track record of success speaks volumes about our ability to deliver results.',
  },
  {
    id: 2,
    title: 'Customized Strategies',
    details:
      'We recognize that each business is unique. Our SEO strategies are tailored to meet your specific needs and goals, ensuring that you receive personalized solutions that drive maximum impact.',
  },
  {
    id: 3,
    title: 'Data-Driven Approach',
    details:
      'We use advanced analytics and tools to gather insights and inform our strategies. Our data-driven approach ensures that every decision is backed by solid evidence, leading to more effective SEO campaigns.',
  },

  {
    id: 4,
    title: 'Comprehensive Services',
    details:
      'From keyword research and technical SEO to content optimization and link building, we offer a full suite of SEO services. Our holistic approach ensures that all aspects of your website’s SEO are covered.',
  },
  {
    id: 5,
    title: 'Dedicated Support',
    details:
      ' Our team is committed to your success. We offer ongoing support and are always available to address any questions or concerns you may have. Your satisfaction is our top priority.',
  },
  {
    id: 6,
    title: 'Client-Centric Approach',
    details:
      'Your business goals are at the heart of everything we do. We take the time to understand your objectives and work closely with you to achieve them. Our client-centric approach ensures that we are always aligned with your vision.',
  },
];

const WhyChooseService = () => {
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
          } grid grid-cols-1 lg:grid-cols-2 gap-4 w-full  mb-8 md:mb-0 `}
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

export default WhyChooseService;
