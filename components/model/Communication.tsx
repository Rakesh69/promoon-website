import React, { useEffect, useRef, useState } from 'react';
const Communications = [
  {
    title: 'Daily Scrum Standup',
    subtitle:
      'Check previous day’s work, current day’s plans, any queries, hurdles etc',
    detail: 'Project Manager with the entire Project Team',
    day: 'Mon -Fri',
    time: '30 minutes',
  },
  {
    title: 'Weekly Review',
    subtitle: 'Improvements to process (No finger pointing!)',
    detail: 'Client along with the Project Manager & Team Lead',
    day: 'Weekly',
    time: '45-60 minutes',
  },
  {
    title: 'Sprint Delivery',
    subtitle: 'Demonstration for the client.',
    detail: 'Client along with the Project Manager & Team Lead.',
    day: '2-3 weeks',
    time: '1-2 hours',
  },
  {
    title: 'Code Reviews',
    subtitle: 'Code Review',
    detail: 'Tech Lead',
    day: 'Bi-Weekly',
    time: '3-4 hours',
  },
];

const Communication = ({}) => {
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
      id="Communication"
      className="container mx-auto lg:py-4 py-4"
    >
      <div
        ref={sectionRef}
        className={`animated-section ${
          isVisible ? 'slideInDown' : ''
        } items-center justify-center`}
      >
        <h1 className="text-center font-bold text-[30px] lg:text-[40px] text-white pb-11">
          Project Communication Structure
        </h1>
      </div>
      <div className="flex justify-between">
        <div className="">
          <div className=" flex flex-wrap justify-center  gap-7 xl:flex-nowrap">
            {Communications.map(
              ({ title, subtitle, day, time, detail }, index) => (
                <div className="bg-white md:w-1/3 lg:w-1/3 py-6 px-5 w-72 rounded-xl shadow-xl shadow-sky-300/25">
                  <h3 className="pb-5 font-bold text-black text-[28px]">
                    {title}
                  </h3>
                  <p className="text-black text-lg">{day}</p>
                  <p className="text-black text-lg pb-5">{time}</p>
                  <div className="border-b border-blackBlue" />
                  <p className="text-base py-5 h-20">{subtitle}</p>
                  <div className="border-b border-blackBlue" />
                  <p className="text-base py-5">{detail}</p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Communication;
