import React, { useEffect, useRef, useState } from 'react';
import MeanIcon from '@/icons/meanIcon';
import MernIcon from './../../icons/mernIcon';
import NextJsIcon from './../../icons/NextJsIcon';
import NuxtjsIcon from './../../icons/NuxtjsIcon';
import JumxIcon from '@/icons/JumxIcon';
import ReactIcon from './../../icons/ReactIcon';
import Angular from './../../icons/Angular';
import VueIcon from './../../icons/VueIcon';
import JavaIcon from './../../icons/JavaIcon';
import Nodejs from './../../icons/Nodejs';

const Tools = () => {
  const [heading, setHeading] = useState('Web App');
  const [selectedItem, setSelectedItem] = useState('01');
  const [selectedDetailId, setSelectedDetailId] = useState('');
  const items = [
    {
      id: '01',
      heading: 'Web App',
      details: [
        {
          id: '01',
          icon: <NextJsIcon />,
          subtitle: 'LAMP',
          text: 'Leveraging the robust LAMP stack (Linux, Apache, MySQL, PHP), we create dynamic web applications known for their reliability and versatility',
        },
        {
          id: '02',
          icon: <MeanIcon />,
          subtitle: 'MEAN',
          text: 'Our expertise lies in harnessing the MEAN stack (MongoDB, Express.js, Angular, Node.js) to build agile, scalable web solutions that drive results.',
        },
        {
          id: '03',
          icon: <MernIcon />,
          subtitle: 'MERN',
          text: 'We specialize in developing modern web applications using the MERN stack (MongoDB, Express.js, React, Node.js), ensuring speed, flexibility, and top-notch user experiences.',
        },
        {
          id: '04',
          icon: <NextJsIcon />,
          subtitle: 'Next.js',
          text: 'With Next.js, we craft lightning-fast, SEO- friendly web applications that excel in performance and provide seamless user interactions',
        },
        {
          id: '05',
          icon: <NuxtjsIcon />,
          subtitle: 'Nuxt.js',
          text: 'We optimize Vue.js with Nuxt.js, enabling server-side rendering and dynamic web applications that prioritize speed, SEO, and user engagement.',
        },
        {
          id: '06',
          icon: <JumxIcon />,
          subtitle: 'JAMStack',
          text: 'We embrace the JAMstack architecture, leveraging JavaScript, APIs, and pre-built markup to deliver secure, high-performance websites that scale with ease.',
        },
      ],
    },
    {
      id: '02',
      heading: 'Front End',
      details: [
        {
          id: '01',
          icon: <ReactIcon />,
          subtitle: 'React',
          text: 'A JavaScript library for building dynamic and interactive web interfaces, known for its component-based architecture.',
        },
        {
          id: '02',
          subtitle: 'Angular',
          icon: <Angular />,
          text: 'A comprehensive TypeScript framework for creating scalable and maintainable web applications, offering powerful tools for development',
        },
        {
          id: '03',
          subtitle: 'Vue',
          icon: <VueIcon />,
          text: 'A progressive JavaScript framework for building flexible and high-performance front-end applications, favored for its simplicity and ease of integration.',
        },
      ],
    },
    {
      id: '03',
      heading: 'Back End',
      details: [
        {
          id: '01',
          icon: <JavaIcon />,
          subtitle: 'Java Spring Boot',
          text: 'Robust Java framework for enterprise web app development, renowned for scalability, security, and extensive tooling.',
        },
        {
          id: '02',
          icon: <Nodejs />,
          subtitle: 'Node.js',
          text: 'JavaScript runtime for building fast, scalable web apps, APIs, and real-time applications with non-blocking I/O',
        },
        {
          id: '03',
          icon: <JavaIcon />,
          subtitle: 'Express.js',
          text: 'Minimalist Node.js framework, lauded for its simplicity and flexibility in creating RESTful APIs and web apps.',
        },
        {
          id: '04',
          icon: <NextJsIcon />,
          subtitle: 'Next.js',
          text: 'TypeScript-based Node.js framework for building scalable and maintainable server- side applications, leveraging decorators and modules',
        },
        {
          id: '05',
          subtitle: 'Next.js',
          icon: <NextJsIcon />,
          text: 'A React framework for creating speedy, SEO- friendly web apps, simplifying server-side rendering, routing, and state management, boosting performance',
        },
        {
          id: '06',
          subtitle: 'Nuxt.js',
          icon: <NuxtjsIcon />,
          text: 'Vue.js framework for server-rendered and static websites, streamlining Vue development for efficient, SEO-friendly web apps.',
        },
      ],
    },
  ];

  const handleClick = (headingText: string, index: string) => {
    setHeading(headingText);
    setSelectedItem(index);
    setSelectedDetailId('');
  };

  const handleDetailClick = (detailId: string) => {
    setSelectedDetailId(detailId);
  };

  const getBorderStyle = (id: string) => {
    if (selectedItem === id) {
      return ' text-blue-600 border-b-4 before:absolute before:bottom-0 before:left-0  before:h-1 before:w-full  dark:text-white rounded-md border-b-2';
    }
    return '';
  };

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const selectedDetails =
    items.find((item) => item.id === selectedItem)?.details || [];

  useEffect(() => {
    const section = sectionRef.current;
    const handleScroll = () => {
      if (section && !isVisible) {
        const top = section?.getBoundingClientRect().top;
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
    <div className="container pb-20 mx-auto p-4">
      <div
        ref={sectionRef}
        className=" mx-auto pt-16 "
      >
        <div className="flex flex-col justify-center items-center pb-12">
          <h2
            ref={sectionRef}
            className={`animated-section ${
              isVisible ? 'slideInDown' : ''
            } font-bold text-4xl text-textPrimary text-center `}
          >
            <div className="relative inline-block">
              <span className="text-blue pr-2 ">Tools & Technologies</span>
              <div className="hidden md:block border-animation" />
            </div>
            That We Use
          </h2>
          <h3 className="text-textSecondary text-base text-center max-w-[668px] pt-5">
            At our web app development service, we leverage a robust arsenal of
            cutting-edge tools and technologies to craft innovative, secure, and
            scalable solutions tailored to your specific requirements.
          </h3>
        </div>
        <div>
          <div className="px-4 md:flex-row flex  justify-center rounded-[10px]  dark:bg-[#1c2136] md:flex-nowrap md:items-center lg:gap-4 xl:gap-12">
            {items.map((item) => (
              <div
                key={item.id}
                className={`flex relative items-center gap-8 my-4 px-3 dark:text-white cursor-pointer`}
                onClick={() => handleClick(item.heading, item.id)}
              >
                <div
                  className={`flex justify-between w-full ${
                    selectedItem === item.id ? 'py-2' : ''
                  }`}
                >
                  <div>{item.heading}</div>
                  {selectedItem === item.id && (
                    <div className="border-animation1" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:grid lg:grid-cols-3  md:grid-cols-2 grid grid-cols-1 gap-5 py-10 ">
          {selectedDetails.map((detail) => (
            <div
              key={detail.id}
              onClick={() => handleDetailClick(detail.id)}
              onMouseEnter={() => handleDetailClick(detail.id)}
              className={`flex flex-col justify-between gap-4 w-full pt-5 border border-sky-500 rounded-md mb-5 ${
                selectedDetailId === detail.id ? 'border-blue-600' : ''
              }`}
            >
              <div className="flex relative flex-col justify-between items-center gap-4 w-full pt-5">
                <p className="absolute -top-11 flex items-center justify-center border bg-white border-sky-400 rounded-full w-12 h-12">
                  {detail.icon}
                </p>
                <h4 className="text-lg font-semibold text-textPrimary text-center">
                  {detail.subtitle}
                </h4>
                <p className="mt-2.5 text-base leading-7 text-textSecondary text-center px-4 ">
                  {detail.text}
                </p>
              </div>
              <div
                className={`h-2 ${
                  selectedDetailId === detail.id
                    ? 'bg-send-bg-btn rounded-b scaleToBothSide'
                    : 'bg-transparent'
                }`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tools;
