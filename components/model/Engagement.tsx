import React, { useEffect, useRef, useState } from 'react';
import { IoMdAdd } from 'react-icons/io';
import { FiMinus } from 'react-icons/fi';

const OPSITIONMENU = [
  {
    id: 1,
    title: 'Time and material based',
    subtitle:
      'When the scope of your idea is not clear, we tend to go with the T&M based model to provide you with more efficiency as we continue with your project.',
  },
  {
    id: 2,
    title: 'Dedicated Teams',
    subtitle:
      'To give you control over your project, the dedicated teams will be there at your disposal. We aim to give you a sense of comfort as we work on your idea and our dedicated teams make sure that you do feel that sense of control',
  },
];

const Engagement = () => {
  const [open, setOpen] = useState(0);
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

  const handleonopen = (id: React.SetStateAction<number>) => {
    setOpen(open === id ? 0 : id);
  };

  return (
    <div className="container mx-auto lg:pb-24">
      <div className="flex justify-between lg:flex-row flex-col px-5 md:px-12 xl:px-5 ">
        <div
          ref={sectionRef}
          className={`animated-section ${
            isVisible ? 'slideInLeft' : ''
          } flex flex-col text-white `}
        >
          <h2 className="text-4xl pb-6">Engagement Models</h2>
          <p className="text-lg pb-4">
            We aim to deliver excellence at every step of projects and finish
            our job with the top level of efficiency and dedication.
          </p>
        </div>
        <div
          ref={sectionRef}
          className={`animated-section ${
            isVisible ? 'slideInRight' : ''
          } flex lg:flex-col flex-row text-white w-full `}
        >
          <div className="rounded-lg shadow-solid-8 w-full">
            {OPSITIONMENU.map(({ id, title, subtitle }) => (
              <div
                key={id}
                className="flex flex-col dark:text-white w-full"
              >
                <div className="border-t dark:border-blackBlue" />
                <button
                  onClick={() => handleonopen(id)}
                  className="flex items-center justify-between lg:px-6 py-5 font-medium  text-black dark:text-white lg:py-7 text-[18px] w-full"
                >
                  {title}
                  <div className="items-center h-[10px]">
                    {open === id ? (
                      <FiMinus className="h-9 w-9" />
                    ) : (
                      <IoMdAdd className="h-9 w-9" />
                    )}
                  </div>
                </button>
                {open === id && (
                  <div className="px-6 py-5 lg:px-9 text-[18px] dark:text-white w-full">
                    {subtitle}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Engagement;
