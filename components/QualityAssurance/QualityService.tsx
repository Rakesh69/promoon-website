import React, { useEffect, useRef, useState } from 'react';
import IosIcon from './../../icons/IosIcon';
import AndroidIcon from './../../icons/AndroidIcon';
import ReactNativeIcon from './../../icons/ReactNativeIcon';
import HybriedIcon from './../../icons/HybriedIcon';
import CrossIcon from './../../icons/CrossIcon';
import UxIcon from './../../icons/UxIcon';
import AutoMationTesting from '@/icons/AutoMationTesting';
import MobileIcon from './../../icons/MobileIcon';
import MobileAppTesting from './../../icons/MobileAppTesting';
import IotTesting from './../../icons/IotTesting';
import AutoMationIcon from './../../icons/AutoMationIcon';
import ManualTestingIcon from './../../icons/ManualTestingIcon';
import EmbedIcon from './../../icons/EmbedIcon';

const OUR_SPECIALITY = [
  {
    id: 1,
    icon: <MobileIcon />,
    title: 'Desktop and Web Application Testing',
    description:
      'We test desktop and web applications comprehensively to guarantee flawless functionality, user-friendliness, and adherence to quality standards for an optimal user experience.',
  },
  {
    id: 2,
    icon: <MobileAppTesting />,
    title: 'Mobile Application Testing',
    description:
      ' Our mobile application testing services ensure that your apps adhere to high-quality standards, delivering a smooth, intuitive, and enjoyable experience for users.',
  },
  {
    id: 3,
    icon: <EmbedIcon />,
    title: 'Embedded Software Testing ',
    description:
      ' We perform rigorous embedded software testing to ensure that the internal operations of your devices are flawless, preventing malfunctions and ensuring seamless performance.',
  },
  {
    id: 4,
    icon: <AutoMationIcon />,
    title: 'Automation Testing',
    description:
      'Our automation testing services streamline the testing process by using advanced tools and scripts to perform repetitive and complex test scenarios efficiently. By automating repetitive tasks, we help identify issues faster and more accurately, enhancing the quality and performance of your software while reducing time and costs.',
  },
  {
    id: 5,
    icon: <IotTesting />,
    title: 'IoT Testing',
    description:
      'Our IoT testing ensures that all your smart devices integrate seamlessly, enhancing automation and convenience for a more connected and efficient lifestyle.',
  },

  {
    id: 6,
    icon: <ManualTestingIcon />,
    title: 'Manual Testing',
    description:
      ' In manual testing, our experts meticulously simulate user interactions to identify and resolve issues, ensuring that your software operates correctly and meets user expectations.',
  },
];

const QualityService = () => {
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
    <div className="dark:bg-[#F3F4F6] md:pt-[52px] pt-5">
      <section className="bg-[url('/assets/CompanyWorkWave.png')] dark:bg-dark-header-waves pb-14 md:pb-[52px] bg-no-repeat bg-top bg-cover w-full h-full">
        <div className="container mx-auto w-full">
          <div className="flex flex-col justify-center items-center">
            <h2
              ref={sectionRef}
              className={`animated-section ${
                isVisible ? 'slideInDown' : ''
              } font-bold text-4xl text-textPrimary text-center  `}
            >
              Quality
              <div className="relative inline-block">
                <span className="text-blue pb-2 pl-2 ">
                  {' '}
                  Assurance Services
                </span>
                <div className="hidden md:block border-animation" />
              </div>
            </h2>
          </div>

          <div
            className={`animated-section ${
              isVisible ? 'slideInDown' : ''
            } section-container flex flex-col h-full w-full items-center lg:flex-row bg-top pt-8 `}
          >
            <div className="part1 w-full grid grid-cols-1  lg:w-full gap-10 xl:grid-cols-3  md:grid-cols-2  place-items-start ">
              {OUR_SPECIALITY.map(({ description, icon, id, title }) => (
                <div
                  key={id}
                  className="w-full px-5 flex flex-col justify-center"
                >
                  <div className="flex justify-center md:block min-h-16 ">
                    {icon}
                  </div>
                  <h3 className="text-lg font-semibold text-center md:text-left w-full text-textPrimary">
                    {title}
                  </h3>
                  <p className="text-base pt-1 text-center text-textSecondary md:text-left w-full">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QualityService;
