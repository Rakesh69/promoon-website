import BlurCheckedIcon from '@/icons/BlurCheckedIcon';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const OUTCOME = [
  {
    id: 1,
    title: 'Rapid Deployment',
    details:
      'Experience swift and seamless web app deployment, ensuring top-tier quality at every step.',
  },
  {
    id: 2,
    title: 'Initial Consultation',
    details:
      ' We engage in a thorough consultation to understand your business requirements and objectives before development begins.',
  },
  {
    id: 3,
    title: 'Competitive Pricing',
    details:
      'Our pricing model is designed to offer excellent value, ensuring high-quality service without breaking the bank.',
  },

  {
    id: 4,
    title: 'Reliable Partner ',
    details:
      'As a reliable partner, our proven track record highlights our commitment to success and customer satisfaction.',
  },
  {
    id: 5,
    title: 'On-Time Delivery',
    details:
      'We pride ourselves on delivering projects on schedule, ensuring timely completion and success.',
  },
  {
    id: 6,
    title: '24/7 Support',
    details:
      ' Our 24/7 support guarantees you continuous assistance and peace of mind throughout your project s lifecycle.',
  },
];

const ChooseUs = () => {
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
    <div className="container mx-auto px-4 pb-20">
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
      <div className="flex flex-col md:flex-row md:justify-between items-center">
        <div
          ref={sectionRef}
          className={`animated-section ${
            isVisible ? 'slideInLeft' : ''
          } grid grid-cols-1 md:grid-cols-2 gap-4 w-full md:w-1/2 mb-8 md:mb-0 `}
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

export default ChooseUs;
