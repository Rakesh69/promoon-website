import RightArrow from '@/icons/RightArrow';
import React, { useEffect, useRef, useState } from 'react';
import ContactModal from './PopUpModal/ContactModal';
import { FaHandshake } from 'react-icons/fa';

const ProjectIdea = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState<boolean>(false);
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

  const openModal = () => {
    setIsContactModalOpen(true);
  };

  const closeModal = () => {
    setIsContactModalOpen(false);
  };

  return (
    <div className="flex justify-center items-center pb-20 container mx-auto md:px-0 px-8">
      <div
        ref={sectionRef}
        className={`animated-section ${
          isVisible ? 'slideInRight1' : ''
        } w-full bg-white rounded-xl`}
      >
        <div className="flex justify-center items-center bg-send-bg-btn w-fit font-bold rounded-b-xl mx-auto px-4">
          <div className="mr-3 flex justify-center items-center">
            <FaHandshake className="h-14 w-8 text-center" />
          </div>
          <div
            className="flex items-center gap-3 py-1 text-white"
          >
            SAY HELLO
          </div>
        </div>

        <h2 className="text-center text-textPrimary font-normal text-2xl py-8">
          Share Your <span className="text-black font-bold">Project Idea</span>{' '}
          With Our Experts
        </h2>
        <div className="flex justify-center pb-8">
          <button
            onClick={openModal}
            className="flex items-center gap-3 bg-send-bg-btn cursor-pointer rounded-full text-base text-white py-2 px-4"
          >
            LET'S CONNECT
            <RightArrow />
          </button>
        </div>
      </div>
      <ContactModal
        isContactModalOpen={isContactModalOpen}
        closeModal={closeModal}
      />
    </div>
  );
};

export default ProjectIdea;
