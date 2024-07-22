import React, { useEffect, useRef, useState } from 'react';
import IosIcon from './../../icons/IosIcon';
import AndroidIcon from './../../icons/AndroidIcon';
import ReactNativeIcon from './../../icons/ReactNativeIcon';
import HybriedIcon from './../../icons/HybriedIcon';
import CrossIcon from './../../icons/CrossIcon';
import UxIcon from './../../icons/UxIcon';

const OUR_SPECIALITY = [
  {
    id: 1,
    icon: <IosIcon />,
    title: 'iOS App Development',
    description:
      ' As a premier mobile app development firm, we specialize in creating exceptional iOS applications for iPhone, iPad, Apple Watch, and Apple TV. Our innovative solutions enhance customer engagement, boost sales, and optimize operational costs for businesses.',
  },
  {
    id: 2,
    icon: <AndroidIcon />,
    title: 'Android App Development ',
    description:
      ' Our expertise lies in developing high-quality, high-performance Android applications. We tailor our native Android app development services to align with your business objectives, covering areas such as eCommerce, augmented reality, and seamless integrations for optimal outcomes.',
  },
  {
    id: 3,
    icon: <ReactNativeIcon />,
    title: 'React Native App Development ',
    description:
      ' WeeTech Solution stands out as a leading React Native app development company in India, offering exceptional services for hiring skilled React Native developers to bring your vision to life.',
  },
  {
    id: 4,
    icon: <HybriedIcon />,
    title: 'Hybrid App Development',
    description:
      'Our hybrid app development approach leverages the advantages of both Android and iOS platforms. We deliver robust, fully functional hybrid apps, transforming your business vision into reality with assured quality and timely delivery through transparent project management.',
  },
  {
    id: 5,
    icon: <CrossIcon />,
    title: 'Cross-Platform Mobile Apps',
    description:
      'Expand your reach with custom Android and iPhone applications. Our cross-platform development ensures quick, cost-effective solutions without compromising on quality, allowing your app to reach users promptly.',
  },

  {
    id: 6,
    icon: <UxIcon />,
    title: 'UI/UX Design',
    description:
      ' We offer comprehensive mobile UI/UX design services, creating visually stunning, user-friendly, and enjoyable mobile apps. Our experienced design team collaborates with you to understand your needs and deliver a UI/UX design that achieves your goals.',
  },
];

const DevlopmentService = () => {
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
    <div className="dark:bg-[#F3F4F6] md:pt-[100px] pt-5">
      <section className="bg-[url('/assets/CompanyWorkWave.png')] dark:bg-dark-header-waves pb-14 md:pb-[96px] bg-no-repeat bg-top bg-cover w-full h-full">
        <div className="container mx-auto w-full">
          <div className="flex flex-col justify-center items-center">
            <h2
              ref={sectionRef}
              className={`animated-section ${
                isVisible ? 'slideInDown' : ''
              } font-bold text-4xl text-textPrimary text-center  `}
            >
              Mobile App
              <div className="relative inline-block">
                <span className="text-blue pb-2 pl-2 ">
                  {' '}
                  Development Services
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
            <div className="part1 w-full grid grid-cols-1 grid-rows-4 lg:w-full gap-10 md:grid-cols-3 md:grid-rows-2 place-items-start ">
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

export default DevlopmentService;
