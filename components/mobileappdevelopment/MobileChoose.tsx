import BlurCheckedIcon from '@/icons/BlurCheckedIcon';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const OUTCOME = [
  {
    id: 1,
    title: 'Expertise Across Platforms',
    details:
      'Our team excels in developing high-quality mobile apps for both iOS and Android platforms. Whether it s native, cross-platform, or hybrid solutions, we have the expertise to deliver outstanding results.',
  },
  {
    id: 2,
    title: 'Customized Solutions',
    details:
      ' We understand that every business is unique. Our tailored development approach ensures that your app meets your specific business needs and objectives, providing a personalized experience for your users.',
  },
  {
    id: 3,
    title: 'Cutting-Edge Technologies ',
    details:
      'We stay ahead of the curve by utilizing the latest technologies and development frameworks, such as React Native and Flutter, ensuring your app is built with the most advanced and efficient tools available.',
  },
  {
    id: 4,
    title: 'Transparent Process',
    details:
      ' Our transparent project management approach keeps you informed at every stage of development. We value open communication and collaboration, ensuring that your vision is realized with precision.',
  },
  {
    id: 5,
    title: 'On-Time Delivery',
    details:
      'We understand the importance of deadlines. Our team is committed to delivering your project on time, without compromising on quality.',
  },
  {
    id: 6,
    title: 'Ongoing Support',
    details:
      ' Our relationship doesn’t end with the launch of your app. We offer ongoing support and maintenance to ensure your app continues to perform optimally and evolves with your business needs.',
  },
];

const MobileChooseUs = () => {
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
    <div className="container mx-auto px-5 md:px-12 xl:px-5 pb-20">
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

      <div className="flex flex-col lg:flex-row lg:justify-between  items-center ">
        <div
          ref={sectionRef}
          className={`animated-section ${
            isVisible ? 'slideInLeft' : ''
          } grid grid-cols-1 lg:grid-cols-2 gap-4 w-full lg:w-1/2 mb-8 md:mb-0`}
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
            className=" max-w-[500px] max-h-[500px]  "
          />
        </div>
      </div>
    </div>
  );
};

export default MobileChooseUs;
