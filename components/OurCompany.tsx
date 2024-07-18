import React, { useEffect, useRef, useState } from 'react';

const OurCompany = () => {
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
        isVisible ? 'slideInLeft1' : ''
      } container mx-auto py-20 px-4 md:px-0 `}
    >
      <div className="flex flex-col border-l-4 border-blue">
        <div className="pl-8">
          <p className="font-bold text-xl text-blue pb-3">About Our Company</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Problems We Will Help You Solve
          </h2>
        </div>
      </div>
      <p className="font-normal text-base md:text-lg text-white pt-8">
        We believe in learning and growing together as a tears. Our team does
        not just deliver app but adds value to your business as well to enhance
        your customer engagement and shoots up your ROI graph. We believe in the
        perfect blend of life, fun & work for our team. We motivate our
        employees with rewards & recognition as they are an integral part of the
        business. Because we appreciate and recognize the importance of hard
        work, our team always pushes that extra mile to ensure they produce top
        notch & creative outcomes for our clients.
      </p>
    </div>
  );
};

export default OurCompany;
