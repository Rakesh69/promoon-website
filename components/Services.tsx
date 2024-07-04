import Link from 'next/link';
import FacebookIcon from '@/icons/FacebookIcon';
import TwitterIcon from '@/icons/TwitterIcon';
import InstragramIcon from '@/icons/InstragramIcon';
import LinkedinIcon from '@/icons/LinkedinIcon';
import AddressPopup from './AddressPopup';
import { useState, useRef, useEffect } from 'react';

const Services = () => {
  const FOOTER_SERVICE: { id: number; name: string; route: string }[] = [
    { id: 1, name: 'Technology', route: 'technology' },
    { id: 2, name: 'Website development', route: 'website-development' },
    { id: 3, name: 'Project development', route: 'project-development' },
    { id: 4, name: 'Mobile app development', route: 'mobile-app-development' },
  ];
  const FOOTER_RESOURCES: { id: number; name: string; route: string }[] = [
    { id: 1, name: 'Success Stories', route: 'success-stories' },
    { id: 2, name: 'Get in Touch', route: 'get-in-touch' },
    { id: 3, name: 'About ProMoon', route: 'about-ProMoon' },
    { id: 4, name: 'Blog', route: 'blog' },
  ];
  const FOOTER_INFORMATION: { id: number; name: string; route: string }[] = [
    { id: 1, name: 'Careers', route: 'career' },
    { id: 2, name: 'FAQ', route: 'faq' },
    { id: 3, name: 'Privacy Policy', route: 'privacy-policy' },
    {
      id: 4,
      name: 'Do Not Sell My Personal Information',
      route: 'do-not-sell-my-personal-information',
    },
    {
      id: 5,
      name: 'Terms of Use',
      route: 'terms-of-use',
    },
    { id: 6, name: 'Sitemap', route: 'sitemap' },
  ];

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
    <footer className="w-full bg-white">
      <div className="bg-footer-background bg-no-repeat">
        <div className="max-w-screen-xl w-90% m-auto">
          <div className="flex flex-col pt-10 md:pt-20 lg:pt-[109px]">
            <div className="flex flex-col md:flex-row md:justify-between bg-blackBlue dark:bg-bg-colors-background shadow-2xl shadow-shadow/50 py-10 px-5  md:py-[49px] md:px-[47px]  rounded-rounded-13.33px">
              <div
                ref={sectionRef}
                className={`animated-section ${
                  isVisible ? 'slideInLeft' : ''
                } flex flex-col justify-start items-start md:justify-start md:items-start`}
              >
                <h3 className="text-white font-normal text-xl md:leading-9 md:text-3xl lg:text-2xl pb-3">
                  Let’s Discuss Your Project Needs
                </h3>
                <p className="text-white font-light text-base lg:text-base lg:tracking-[0.34px] lg:leading-8 md:pb-0 pb-5">
                  Web and mobile development service
                </p>
              </div>

              <div
                ref={sectionRef}
                className={`animated-section ${
                  isVisible ? 'slideInRight' : ''
                } flex items-center`}
              >
                <Link
                  href={'/contactus'}
                  className="lg:py-4 lg:px-[67px] md:py-2 px-6 font-normal lg:text-[15px] py-1 md:px-12 shadow-customShadow  bg-white rounded-full text-textPrimary"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <div
              ref={sectionRef}
              className={`animated-section ${
                isVisible ? 'slideInDown' : ''
              } pt-[74px] pb-11 flex flex-col gap-10 lg:gap-11 sm:grid sm:grid-cols-2 lg:grid lg:grid-cols-4 lg:grid-rows-1`}
            >
              <div className="flex flex-col w-full group">
                <div className="group-hover:flex hidden">
                  <AddressPopup />
                </div>

                <p className="text-blackBlue text-[15px] w-fit font-medium tracking-1% leading-8 mb-7 border-b-2 border-blackBlue">
                  Address
                </p>
                <p className="font-normal text-[15px] tracking-1% leading-8 hover:w-full hover:h-full hover: text-blackBlue">
                  ProMoon Software
                  <br />
                  Service <br />
                  408,Silver stone
                  <br /> Arcade, Singanpor Rd,
                  <br /> Omkar Society, Riddhi
                  <br />
                  Siddhi Society, Singanpor, Surat
                </p>
              </div>
              <div className="flex flex-col  w-full">
                <p className="text-blackBlue text-[15px] w-fit font-medium tracking-1% leading-8 mb-7 border-b-2 border-blackBlue">
                  Services
                </p>

                <ul className="font-normal text-[15px] tracking-1% leading-8 text-blackBlue">
                  {FOOTER_SERVICE.map(({ id, name, route }) => {
                    return (
                      <li
                        key={id}
                        className="lg:mb-2.5 hover:text-blue transition-colors duration-100 ease-in-out"
                      >
                        <Link href={`/${route}`}>{name}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="flex flex-col w-full">
                <p className="text-blackBlue text-[15xl] w-fit font-medium leading-6 mb-7 tracking-1% border-b-2 border-blackBlue">
                  Resources
                </p>

                <ul className="font-normal text-[15px] tracking-1% leading-8 text-blackBlue">
                  {FOOTER_RESOURCES.map(({ id, name, route }) => {
                    return (
                      <li
                        key={id}
                        className="lg:mb-2.5 hover:text-blue transition-colors duration-100 ease-in-out"
                      >
                        <Link href={`/${route}`}>{name}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="flex flex-col w-full">
                <p className="text-blackBlue text-[15px] w-fit font-medium leading-6 mb-7 tracking-1% border-b-2 border-blackBlue">
                  Information
                </p>

                <ul className="font-normal text-[15px] w-full tracking-1% leading-6 text-blackBlue">
                  {FOOTER_INFORMATION.map(({ id, name, route }) => {
                    return (
                      <li
                        key={id}
                        className="lg:mb-2.5 hover:text-blue transition-colors duration-100 ease-in-out pb-1"
                      >
                        <Link href={`/${route}`}>{name}</Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Services;
