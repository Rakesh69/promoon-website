import React, { useEffect, useRef, useState } from 'react';

const items = [
  {
    id: 1,
    title: '13',
    description: 'Team Members',
  },
  {
    id: 2,
    title: '2',
    description: 'Years in business',
  },
  {
    id: 3,
    title: '6',
    description: 'Clients Worldwide',
  },
  {
    id: 4,
    title: '20',
    description: 'Projects Completed',
  },
];

const Member = () => {
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
    <div
      ref={sectionRef}
      className={`animated-section ${
        isVisible ? 'slideInDown' : ''
      } border-y border-gray-500 md:hidden block `}
    >
      <div className="container mx-auto text-white md:hidden block ">
        <div className="flex flex-wrap justify-center items-center border-l border-gray-500">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-center items-center w-full md:w-1/2 lg:w-1/4 p-5 border-b md:border-b-0 border-r border-gray-500 slideInDown"
            >
              <h4 className="text-4xl font-bold text-white">{item.title}</h4>
              <p className="mt-2.5 text-xl leading-7 text-white text-center">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Member;
