import SolutionModel from './model/SolutionModel';
import AnalyticsIcon from '@/icons/SolutionIcons/AnalyticsIcon';
import ContentManagment from '@/icons/SolutionIcons/ContentManagment';
import CustomeWebDesign from '@/icons/SolutionIcons/CustomeWebDesign';
import CustomMobileApp from '@/icons/SolutionIcons/CustomMobileApp';
import EcommersSiteIcon from '@/icons/SolutionIcons/EcommersSiteIcon';
import MaintenanceIcon from '@/icons/SolutionIcons/MaintenanceIcon';
import MobileAppDevlopment from '@/icons/SolutionIcons/MobileAppDevlopment';
import SearchEngineIcon from '@/icons/SolutionIcons/SearchEngineIcon';
import WebHosting from '@/icons/SolutionIcons/WebHosting';
import { SetStateAction, useEffect, useState } from 'react';

const Solutions = () => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const [yScroll, setYScroll] = useState<number>(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window?.addEventListener('scroll', () => {
        setYScroll(window?.pageYOffset);
      });
    }
  }, [yScroll]);

  const items = [
    {
      id: 1,
      icon: <CustomeWebDesign />,
      title: 'Custom web design and development',
      description:
        'Our expert web app developers are skilled in using technologies and frame-work to create interactive and feature-rich web applications. They have a strong understanding of back-end technologies.',
    },
    {
      id: 2,
      icon: <MobileAppDevlopment />,
      title: 'Mobile app development',
      description:
        'We offer mobile app development for various platforms using technologies. We also have expertise in cross-platform frameworks, Our process includes planning, design and testing to deliver high-quality apps that meet client needs.',
    },
    {
      id: 3,
      icon: <EcommersSiteIcon />,
      title: 'E-commerce website development',
      description:
        'Our e-commerce website development team specializes in platforms. We build custom websites with useful features for a positive and secure shopping experience.',
    },
    {
      id: 4,
      icon: <SearchEngineIcon />,
      title: 'Search engine optimization',
      description:
        'We offer search engine optimization (SEO) service to improve the visibility and ranking of websites in search engine results pages. Our team uses different techniques to attract organic traffic.',
    },
    {
      id: 5,
      icon: <ContentManagment />,
      title: 'Content management systems',
      description:
        'Our content management system (CMS) is a tool for creating, managing and publishing digital content. It is user-friendly and customizable with features for managing text, image and videos.',
    },
    {
      id: 6,
      icon: <WebHosting />,
      title: 'Web hosting',
      description:
        'We offer hosting services with many options. Our services include unlimited bandwidth, high-performance servers and automatic backups. We can help choose the right hosting plan and provide ongoing support and maintenance.',
    },
    {
      id: 7,
      icon: <AnalyticsIcon />,
      title: 'Analytics and reporting',
      description:
        'Our analytics and reporting team uses tools and technologies to gather, analyze and visualize data from various sources. We help clients make informed decisions and track the performance of websites, opps and digital platforms.',
    },
    {
      id: 8,
      icon: <MaintenanceIcon />,
      title: 'Maintenance and support',
      description:
        'Our maintenance and support team provides updates, bug fixes, security patches and technical support to ensure that clients digital platforms are running smoothly. Our team is skilled and available to assist with any issues.',
    },
  ];

  const handleClick = (id: number | null) => {
    setSelectedItem(id);
  };
  return (
    <section className="bg-gray-100 md:py-[82px] py-10">
      <div className="container mx-auto p-4 md:p-0">
        <div className="flex flex-col justify-center items-center pb-12 ">
          <h2 className=" font-medium text-4xl font-poppins text-textPrimary text-center">
            We Provide Services
          </h2>
          <h3 className="text-textSecondary text-base font-normal text-center max-w-[668px] pt-5">
            We pride ourselves in delivering highly-customized and responsive
            solutions that help companies succeed
          </h3>
        </div>

        <div className="lg:grid lg:grid-cols-3  md:grid-rows-2 md:grid-cols-2  lg:grid-rows-3 grid grid-cols-1 grid-rows-9 gap-5">
          {items.map((item) => (
            <div
              key={item.id}
              className={`flex flex-col justify-between gap-4 w-full pt-5 border border-slate-300 rounded-md`}
              onMouseEnter={() => handleClick(item.id)}
              onMouseLeave={() => handleClick(null)}
            >
              <div className="flex flex-col px-5">
                <div className="flex items-center justify-between gap-2">
                  <h4 className="text-lg font-semibold text-textPrimary">
                    {item.title}
                  </h4>
                  {item.icon}
                </div>
                <p className="mt-2.5 text-base leading-7 text-textSecondary">
                  {item.description}
                </p>
              </div>

              <div
                className={`h-2 ${
                  selectedItem === item.id
                    ? 'bg-send-bg-btn rounded-b scaleToBothSide'
                    : 'bg-transparent'
                }`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
