import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import JiraIcon from './../../icons/JiraIcon';
import SlackIcon from '@/icons/SlackIcon';
import GithubIcon from '@/icons/GithubIcon';
import AsanaIcon from './../../icons/AsanaIcon';
import VisionIcon from '@/icons/VisionIcon';
import AxureIcon from './../../icons/AxureIcon';
import ZeplinIcon from '@/icons/ZeplinIcon';
import OfficeIcon from './../../icons/OfficeIcon';
import ZoomIcon from './../../icons/ZoomIcon';
import SkypeIcon from './../../icons/SkypeIcon';

const OBJECTIVE = [
  {
    id: 1,
    icon: <JiraIcon />,
  },
  {
    id: 2,
    icon: <SlackIcon />,
  },
  {
    id: 3,
    icon: <GithubIcon />,
  },
  {
    id: 4,
    icon: <AsanaIcon />,
  },
  {
    id: 5,
    icon: <VisionIcon />,
  },
  {
    id: 6,
    icon: <AxureIcon />,
  },
  {
    id: 7,
    icon: <ZeplinIcon />,
  },
  {
    id: 8,
    icon: <OfficeIcon />,
  },
  {
    id: 9,
    icon: <ZoomIcon />,
  },
  {
    id: 10,
    icon: <SkypeIcon />,
  },
];

const Collaboration = () => {
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
    <div className="container mx-auto lg:py-24 py-7">
      <div
        ref={sectionRef}
        className={`animated-section ${
          isVisible ? 'slideInDown' : ''
        } flex justify-between lg:flex-row flex-col `}
      >
        <div className="flex flex-col text-white px-4">
          <h2 className="text-4xl pb-6">Collaboration Tools</h2>
          <p className="text-lg pb-4">
            We make sure to use the tools that are top of the market to bring
            your ideas into reality. Our careful selection of tools makes sure
            that your ideas are executed with the highest level of efficiency.
          </p>
        </div>
        <div className="flex justify-start">
          <ul className="flex justify-evenly flex-wrap pb-4 gap-9">
            {OBJECTIVE.map(({ icon, id }) => (
              <li
                key={id}
                className="m-4"
              >
                {icon}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Collaboration;
