import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';

const Services = () => {
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
          <div className="flex flex-col py-10 md:py-20 lg:py-[95px]">
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
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Services;
