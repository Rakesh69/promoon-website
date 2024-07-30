import React, { useState, useRef, useEffect } from 'react';
import MarketPlaceIcon from '@/icons/MarketPlaceIcon';
import Education from './../../icons/Education';
import LogisticsIcon from './../../icons/LogisticsIcon';
import EcommerceIcon from './../../icons/EcommerceIcon';
import EntertainmentIcon from './../../icons/EntertainmentIcon';
import FashionIcon from './../../icons/FashionIcon';
import HealthcareIcon from './../../icons/HealthcareIcon';
import RealEstateIcon from './../../icons/RealEstateIcon';
import Fintech from './../../icons/Fintech';
import SocialMediaIcon from './../../icons/SocialMediaIcon';
import FoodIcon from './../../icons/FoodIcon';
import EventsIcon from './../../icons/EventsIcon';

const DEVLOPMENT_CIRCLE = [
  {
    id: 1,
    icon: <MarketPlaceIcon />,
    title: 'Online marketplaces',
    detalis:
      'We develop comprehensive two-sided marketplaces for services and products, enabling users to quickly find the ideal contractor for any task or purchase the necessary goods with ease.',
  },
  {
    id: 2,
    icon: <Education />,
    title: 'Education',
    detalis:
      'Unleash limitless learning opportunities with our innovative web applications, offering users an intuitive platform for effortless skill development and knowledge improvement.',
  },
  {
    id: 3,
    icon: <LogisticsIcon />,
    title: 'Logistics',
    detalis:
      'Improve logistical efficiency with our web app development services, streamlining fleet management, order fulfillment, warehousing, and daily operational workflows.',
  },
  {
    id: 4,
    icon: <EcommerceIcon />,
    title: 'Ecommerce',
    detalis:
      'We excel in creating e-commerce applications that enhance shopping experiences, empowering businesses to boost sales and engage customers.',
  },
  {
    id: 5,
    icon: <EntertainmentIcon />,
    title: 'Entertainment',
    detalis:
      'We assist clients in captivating their audience with custom web applications for gaming, video streaming, and social networking.',
  },
  {
    id: 6,
    icon: <FashionIcon />,
    title: 'Fashion',
    detalis:
      'With a visually stunning and modern fashion web application, companies have the unique opportunity to display their beauty products and services.',
  },
  {
    id: 7,
    icon: <HealthcareIcon />,
    title: 'Healthcare',
    detalis:
      'Healthcare web applications provide doctors with an efficient platform to interact with patients and empower users to manage their health more effectively.',
  },
  {
    id: 8,
    icon: <RealEstateIcon />,
    title: 'Real Estate',
    detalis:
      'We assist rental companies in enhancing their online presence, enabling users to quickly and easily find the perfect apartment with our rental web solutions.',
  },
  {
    id: 9,
    icon: <Fintech />,
    title: 'Fintech',
    detalis:
      'We enhance the online presence of rental companies, providing users with the fastest way to find suitable apartments through our rental web solutions.',
  },
  {
    id: 10,
    icon: <SocialMediaIcon />,
    title: 'Social Media & Dating',
    detalis:
      'We enhance the online presence of rental companies, enabling users to quickly find suitable apartments with our advanced rental web solutions.',
  },
  {
    id: 11,
    icon: <FoodIcon />,
    title: 'Food & Travel',
    detalis:
      'We specialize in enhancing the online presence of rental companies, providing users with streamlined access to find the ideal apartment quickly through our innovative rental web solutions.',
  },
  {
    id: 12,
    icon: <EventsIcon />,
    title: 'Events',
    detalis:
      'We partner with rental companies to enhance their online visibility, offering users a streamlined experience to find their ideal apartment swiftly through our cutting-edge rental web solutions.',
  },
];

const Industries = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const top = sectionRef.current.getBoundingClientRect().top;
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
  }, []);

  return (
    <section className="bg-bg-colors-background w-full p-4  md:p-0 mb-20">
      <div
        ref={sectionRef}
        className={`animated-section ${
          isVisible ? 'slideInDown' : ''
        } container w-full mx-auto  px-5 md:px-12 xl:px-5 py-[52px]`}
      >
        <div className="flex flex-col gap-4 mb-[40px] justify-center items-center">
          <h3 className="text-white text-center font-semibold tracking-0.14px leading-2 text-3xl lg:leading-48px">
            Industries{' '}
            <div className="relative inline-block">
              <span className="text-blue">We Serve</span>
              <div className="border-animation" />
            </div>
          </h3>
        </div>
        <div className="flex flex-col justify-center">
          <div className="h-1px w-full bg-blue" />
          <div className="grid grid-cols-1 w-full grid-rows-5 md:grid-cols-2 md:grid-rows-3 lg:grid-cols-4 lg:grid-rows-1 gap-6 my-6">
            {DEVLOPMENT_CIRCLE.map(({ icon, id, title, detalis }) => (
              <div
                key={id}
                className="relative overflow-hidden bg-white text-textPrimary transition duration-500 transform hover:-translate-y-2 hover:bg-opacity-95 hover:shadow-lg rounded-rounded-10px pt-4"
              >
                <div className="flex flex-col justify-center items-center text-center h-[200px]">
                  <div className="text-center">{icon}</div>{' '}
                  <p className="my-4 text-xl md:font-medium text-center ">
                    {title}
                  </p>
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-30 backdrop-blur-md opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="p-4">
                    <p className="text-white text-lg font-normal">{detalis}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="h-1px w-full bg-borderbg" />
        </div>
      </div>
    </section>
  );
};

export default Industries;
