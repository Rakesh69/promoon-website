import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import CreditCardIcon from '@/icons/CreditCardIcon';
import RocketIcon from '@/icons/RocketIcon';
import MessageIcon from '@/icons/MessageIcon';
import ToolsIcon from '@/icons/ToolsIcon';
import FrontendDevelopmentIcon from './../../icons/FrontendDevelopmentIcon';
import BackendDevelopmentIcon from './../../icons/BackendDevelopmentIcon';
import ECommercedevelopmentIcon from './../../icons/ECommercedevelopmentIcon';
import CustomSoftwareDevelopmentIcon from './../../icons/CustomSoftwareDevelopmentIcon';
import CmsIcon from '@/icons/CmsIcon';
import SupportsIcon from './../../icons/SupportsIcon';

const OUR_SPECIALITY: {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}[] = [
  {
    id: Math.random(),
    icon: <FrontendDevelopmentIcon />,
    title: 'Front-end Development',
    description:
      'Our team crafts user-friendly interfaces that captivate, ensuring your brand shines in exceptional web experiences that leave a lasting impression.',
  },
  {
    id: Math.random(),
    icon: <BackendDevelopmentIcon />,
    title: 'Back-end Development',
    description:
      'We specialize in building secure, scalable foundations for powerful web apps, guaranteeing unwavering reliability and top-tier performance.',
  },
  {
    id: Math.random(),
    icon: <ECommercedevelopmentIcon />,
    title: 'Powerful software platform',
    description:
      'Elevate online sales with our meticulously tailored solutions, offering seamless transactions and sustainable business growth opportunities.',
  },
  {
    id: Math.random(),
    icon: <CustomSoftwareDevelopmentIcon />,
    title: 'Custom Software Development',
    description:
      'Transform unique ideas into innovative software, gaining a distinct competitive edge and tailored solutions that precisely match your needs.',
  },
  {
    id: Math.random(),
    icon: <CmsIcon />,
    title: 'CMS',
    description:
      'Simplify content management effortlessly, granting you efficient control of your online presence, while our expertise supports your journey.',
  },
  {
    id: Math.random(),
    icon: <SupportsIcon />,
    title: 'Website Support & Maintenance',
    description:
      'Trust us to keep your online presence robust; we handle the tech, allowing you to focus on your businesss continued success and growth.',
  },
];
const ServicesWeb = () => {
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
    <>
      <>
        <div className="dark:bg-[#F3F4F6] md:pt-[52px] pt-5 ">
          <section className="bg-[url('/assets/CompanyWorkWave.png')] dark:bg-dark-header-waves pb-14 md:pb-[52px] bg-no-repeat bg-top bg-cover w-full h-full ">
            <div className="container mx-auto  w-full px-5 ">
              <div className="flex flex-col justify-center items-center">
                <h2
                  ref={sectionRef}
                  className={`animated-section ${
                    isVisible ? 'slideInDown' : ''
                  } text-center text-4xl font-bold text-black pb-10  `}
                >
                  Our Web Application Development Services
                </h2>

                <p className="text-lg text-center font-normal text-black pb-10">
                  Our web app developers at ProMoon Software Solution possess
                  significant expertise and comprehensive knowledge in creating
                  customer-oriented business applications and software
                  solutions. If you're looking to develop sturdy web apps,
                  consider hiring our team to enjoy our premium custom web
                  application development services.
                </p>
              </div>
              <div
                ref={sectionRef}
                className={`animated-section ${
                  isVisible ? 'slideInDown' : ''
                } section-container flex flex-col h-full w-full items-center lg:flex-row bg-top`}
              >
                <div className="part1 w-full grid grid-cols-1 grid-rows-4 lg:w-full gap-10 md:grid-cols-3 md:grid-rows-2 ">
                  {OUR_SPECIALITY.map(({ description, icon, id, title }) => (
                    <div
                      key={id}
                      className="w-full px-5 flex flex-col justify-center"
                    >
                      <div className="flex justify-center md:block">{icon}</div>

                      <h3 className="text-lg pt-3 font-semibold text-center md:text-left w-full text-textPrimary">
                        {title}
                      </h3>
                      <p className=" text-base  pt-1 text-center text-textSecondary md:text-left w-full">
                        {description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    </>
  );
};

export default ServicesWeb;
