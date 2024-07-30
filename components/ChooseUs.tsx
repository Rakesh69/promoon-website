import RightArrow from '@/icons/RightArrow';
import React, { useEffect, useRef, useState } from 'react';
import ContactModal from './PopUpModal/ContactModal';
import PrototypingIcon from '@/icons/PrototypingIcon';
import RoundedIcon from '@/icons/RoundedIcon';
import DeliveryIcon from '@/icons/DeliveryIcon';
import LowPriceIcon from './../icons/LowPriceIcon';
import ContinuousSupport from './../icons/ContinuousSupport';
import ClearDeadlines from './../icons/ClearDeadlines';
import ConstantIcon from './../icons/ConstantIcon';

const items = [
  {
    id: 1,
    icon: <PrototypingIcon />,
    description: 'Fast Prototyping',
  },
  {
    id: 2,
    icon: <DeliveryIcon />,
    description: 'Timely Delivery',
  },
  {
    id: 3,
    icon: <LowPriceIcon />,
    description: 'Transparent Costs',
  },
  {
    id: 4,
    icon: <ContinuousSupport />,
    description: 'Continuous Support',
  },
  {
    id: 5,
    icon: <ClearDeadlines />,
    description: 'Clear Deadlines',
  },
  {
    id: 6,
    icon: <ConstantIcon />,
    description: 'Constant Updates',
  },
];

const ChooseUs = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState<boolean>(false);
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

  const openModal = () => {
    setIsContactModalOpen(true);
  };

  const closeModal = () => {
    setIsContactModalOpen(false);
  };

  return (
    <div className="pb-20 container mx-auto px-5 xl:px-5 md:px-12 ">
      <div className="items-center text-center">
        <h2
          ref={sectionRef}
          className={`animated-section ${
            isVisible ? 'slideInDown' : ''
          } text-4xl font-bold text-white`}
        >
          Why Choose Us?
        </h2>
        <p className="text-white text-xl py-10">
          We are a team of some new and old hand developers and designers who
          are committed to delivering the task on time with efficiency. We
          improve customer experience with the outcome of our work, and we don't
          forget to have some fun at work.
        </p>

        <div
          ref={sectionRef}
          className={`animated-section ${
            isVisible ? 'slideInDown' : ''
          } flex flex-wrap justify-center pt-10 gap-5`}
        >
          {items.map((item) => (
            <div
              key={item.id}
              className="w-full md:w-1/4 lg:max-w-[150px]"
            >
              <div className="bg-send-bg-btn rounded-t-lg flex justify-center items-center h-24">
                {item.icon}
              </div>
              <div className="rounded-b-lg border border-gray-500 p-5">
                <p className="text-xl leading-7 text-white text-center">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-center pt-4">
          <RoundedIcon />
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
