import AboutUsicon from '@/icons/AboutUsicon';
import { useState, useRef, useEffect } from 'react';

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

const AboutHeroSection = () => {
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
    <div className="h-full relative bg-res-hero-pattern md:bg-hero-pattern bg-cover bg-center  md:px-0 overflow-hidden">
      <div className="container w-full mx-auto text-white md:pt-52 px-5 pt-32 md:pb-32 pb-20 flex flex-col items-center text-center slideInDown">
        <div className="w-full flex flex-col items-center">
          <h1 className="font-medium text-[36px] md:text-[50px] leading-[48px]">
            Experience The True Technology At
          </h1>
          <h1 className="font-medium text-[36px] md:text-[50px] leading-[48px] md:leading-[69px]">
            Pr
            <span
              className="font-medium text-[36px] md:text-[50px] leading-[48px] md:leading-[69px] bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  'linear-gradient(90deg, #27AAE1 0%, #27AAE1 19.31%, #FFFFFF 46.77%, #066A9D 76.49%, #1C75BC 100%)',
              }}
            >
              o
            </span>
            MoonSoft
          </h1>

          <div>
            <AboutUsicon />
          </div>

          <p className="text-xl font-normal leading-[20px] md:leading-[25px] pt-4">
            A result oriented and trusted company to partner with.
          </p>
        </div>
      </div>
      <div
        ref={sectionRef}
        className={`animated-section about-colors-background md:block hidden ${
          isVisible ? 'slideInDown' : ''
        }`}
      >
        <div className="container mx-auto text-black md:block hidden">
          <div className="flex flex-wrap justify-center items-center border-l border-gray-500">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex flex-col justify-center items-center w-full md:w-1/2 lg:w-1/4 p-5 border-b md:border-b-0 border-r border-gray-500 slideInDown"
              >
                <h4 className="text-4xl font-bold text-black">{item.title}</h4>
                <p className="mt-2.5 text-xl leading-7 text- text-center">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHeroSection;
