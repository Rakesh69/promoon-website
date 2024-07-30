import React, { useEffect, useRef, useState } from 'react';
import IosIcon from './../../icons/IosIcon';
import AndroidIcon from './../../icons/AndroidIcon';
import ReactNativeIcon from './../../icons/ReactNativeIcon';
import HybriedIcon from './../../icons/HybriedIcon';
import CrossIcon from './../../icons/CrossIcon';
import UxIcon from './../../icons/UxIcon';
import OnsiteIcon from './../../icons/OnsiteIcon';
import OffPageIcon from './../../icons/OffPageIcon';
import TechniIcon from './../../icons/TechniIcon';
import LocalSeoIcon from './../../icons/LocalSeoIcon';
import EcommersSeoIcon from '@/icons/EcommersSeoIcon';
import InternationalSeo from './../../icons/InternationalSeo';
import KeyWordIcon from '@/icons/KeyWordIcon';
import AuditsIcon from '@/icons/AuditsIcon';

const OUR_SPECIALITY = [
  {
    id: 1,
    icon: <OnsiteIcon />,
    title: 'On-Site SEO',
    description:
      'Our SEO services include optimizing your website’s on-site content for better search engine visibility. We use a hub-and-spoke approach for content clustering, addressing page structure, metadata, headers, internal links, and calls to action. Our goal is to improve your organic search rankings and ensure your content meets your specific needs.',
  },
  {
    id: 2,
    icon: <OffPageIcon />,
    title: 'Off-Page SEO',
    description:
      'Enhance your online presence beyond your website with our comprehensive off-page SEO services. Our strategies focus on building a robust backlink profile, increasing brand visibility, and improving your sites authority.',
  },
  {
    id: 3,
    icon: <TechniIcon />,
    title: 'Technical SEO ',
    description:
      ' A solid foundation is essential for SEO success. Our SEO services begin with a thorough technical SEO audit and user experience analysis. We identify and resolve any technical issues that could hinder your site’s performance. With a focus on website speed and usability, our team ensures quick improvements that enhance your search engine ranking.',
  },

  {
    id: 4,
    icon: <LocalSeoIcon />,
    title: 'Local SEO',
    description:
      'Improve your local search visibility with our targeted local SEO services. We help you optimize your Google Business Profile, gather reviews, maintain consistent NAP (name, address, phone number) information, and ensure your site is mobile-friendly. Our local SEO strategies are designed to enhance your presence in your local market.',
  },

  {
    id: 5,
    icon: <EcommersSeoIcon />,
    title: 'Ecommerce SEO',
    description:
      'Our specialized SEO services cater to ecommerce platforms like Shopify, WooCommerce, BigCommerce, and Magento. We understand the unique challenges of ecommerce SEO and tailor our strategies to drive growth for your online store.',
  },
  {
    id: 6,
    icon: <InternationalSeo />,
    title: 'International SEO',
    description:
      ' For businesses with a global reach, our international SEO services provide market-specific strategies to align with local search intents. We have the expertise to develop and implement effective SEO plans that ensure your website performs well in different countries.',
  },
  {
    id: 7,
    icon: <KeyWordIcon />,
    title: 'Keyword Research and SEO Strategy',
    description:
      'Our SEO firm excels in boosting your online presence with premier SEO services. We start by identifying the keywords people use in searches and then craft a tailored strategy to get your website noticed. Understanding your competition and search trends is crucial, and our comprehensive SEO services are designed to give you a competitive edge.',
  },
  {
    id: 8,
    icon: <AuditsIcon />,
    title: 'SEO Audits ',
    description:
      'Achieving top-tier search engine performance begins with a thorough understanding of your current website status. Our comprehensive SEO audits provide a detailed analysis of your site s strengths and weaknesses By examining technical aspects, content quality, and user experience, we identify key areas for improvement.',
  },
];

const OurSEOServices = () => {
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
    <div className="dark:bg-[#F3F4F6] md:pt-[52px] pt-5 overflow-hidden">
      <section className="bg-[url('/assets/CompanyWorkWave.png')] dark:bg-dark-header-waves pb-14 md:pb-[52px] bg-no-repeat bg-top bg-cover w-full h-full">
        <div className="container mx-auto w-full px-5 md:px-12 xl:px-5">
          <div className="flex flex-col justify-center items-center">
            <h2
              ref={sectionRef}
              className={`animated-section ${
                isVisible ? 'slideInDown' : ''
              } font-bold  text-2xl md:text-4xl text-textPrimary text-center  `}
            >
              Our
              <div className="relative inline-block">
                <span className="text-blue pb-2 pl-2 "> SEO Services</span>
                <div className="hidden md:block border-animation" />
              </div>
            </h2>
          </div>

          <div
            className={`animated-section ${
              isVisible ? 'slideInDown' : ''
            } section-container flex flex-col h-full w-full items-center lg:flex-row bg-top pt-8 `}
          >
            <div className="part1 w-full grid grid-cols-1  lg:w-full gap-10 xl:grid-cols-3  md:grid-cols-2  place-items-start ">
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

export default OurSEOServices;
