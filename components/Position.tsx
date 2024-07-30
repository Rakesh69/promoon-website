import { useEffect, useRef, useState } from 'react';
import RightArrow from '@/icons/RightArrow';
import JsonData from '@/components/json/Position.json';
import HiringModal from './PopUpModal/HiringModal';

const Positions: React.FC = () => {
  const [isHiringModalOpen, setisHiringModalOpen] = useState<boolean>(false);
  const [open, setIsOpen] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const positions = JsonData.positions;

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current && !isVisible) {
        const top = sectionRef.current.getBoundingClientRect().top;
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

  const handleOpen = (value: number) => {
    setIsOpen(open === value ? null : value);
  };

  const openModal = () => {
    setisHiringModalOpen(true);
  };

  const closeModal = () => {
    setisHiringModalOpen(false);
  };

  return (
    <section
      className="select-none scroll-mt-[70px]"
      id="position"
    >
      <div
        ref={sectionRef}
        className={`animated-section ${
          isVisible ? 'slideInDown' : ''
        } w-full py-[31px] bg-bg-colors-background`}
      >
        <p className="text-center font-bold text-white text-xl md:text-2xl lg:text-3xl ">
          {positions.length > 0
            ? 'We are hiring (Positions)'
            : 'No positions available at the moment'}
        </p>
      </div>
      {positions.length > 0 && (
        <div className="container mx-auto w-full p-5 md:px-12 xl:p-5 ">
          <ul>
            {positions.map((position) => (
              <li
                key={position.id}
                className={`flex flex-col md:flex-row justify-between items-start border rounded-md w-full border-blue pr-1 py-6  px-4 mb-3 cursor-pointer ${
                  open === position.id ? 'open' : ''
                }`}
                onClick={() => handleOpen(position.id)}
              >
                <div className="lg:text-xl text-base flex flex-col w-[95%]">
                  <div className="flex md:flex-row flex-col justify-between w-full">
                    <div className="flex flex-col">
                      <div className="font-bold text-2xl text-white pb-2">
                        {position.positionTitle}
                      </div>
                      <div className="flex md:flex-row flex-col gap-4">
                        {position.JobType && (
                          <div className="md:border-r flex md:flex-row flex-col pr-4 md:border-sky-500">
                            <div className="text-white font-semibold ">
                              {position.JobType}:
                            </div>
                            <div className="text-white pl-2">
                              {position.JobTypeName}
                            </div>
                          </div>
                        )}
                        <div className="flex flex-row md:pb-0 pb-4 ">
                          <div className="text-white font-bold">
                            {position.Positions}:
                          </div>
                          <div className="text-white">
                            {position.NumberOfPositions}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex md:justify-center">
                      <button
                        onClick={openModal}
                        className="flex items-center bg-send-bg-btn rounded-md text-center text-base text-white px-4 py-2 md:py-4 h-10 md:h-12 w-fit md:w-auto"
                      >
                        Apply Now
                        <RightArrow />
                      </button>
                    </div>
                  </div>
                  {open === position.id && (
                    <div className="overflow-hidden pt-1 mt-4 border-t border-blue">
                      {position.Description && (
                        <p className="text-white font-bold text-xl pt-4">
                          {position.Description}
                        </p>
                      )}
                      {position.JobDescription && (
                        <p className="text-white text-base font-medium pt-2">
                          {position.JobDescription}
                        </p>
                      )}
                      {position.Responsibilities && (
                        <p className="text-white font-bold text-xl py-4">
                          {position.Responsibilities}
                        </p>
                      )}
                      {position.ResponsibilitiesName && (
                        <div
                          className={`text-white text-base font-medium py-2 ${
                            position.ResponsibilitiesName.length > 0
                              ? 'pl-8'
                              : ''
                          }`}
                        >
                          {position.ResponsibilitiesName.map(
                            (Responsibility, index) => (
                              <ul key={index}>
                                <li className="list-disc pb-4">
                                  {Responsibility}
                                </li>
                              </ul>
                            )
                          )}
                        </div>
                      )}
                      {position.QualificationsAndSkills && (
                        <p className="text-white font-bold text-xl py-4">
                          {position.QualificationsAndSkills}
                        </p>
                      )}
                      {position.QualificationsAndSkillsName && (
                        <div
                          className={`text-white text-base font-medium py-2 ${
                            position.QualificationsAndSkillsName.length > 0
                              ? 'pl-8'
                              : ''
                          }`}
                        >
                          {position.QualificationsAndSkillsName.map(
                            (Qualification, index) => (
                              <ul key={index}>
                                <li className="list-disc pb-4">
                                  {Qualification}
                                </li>
                              </ul>
                            )
                          )}
                        </div>
                      )}
                      {position.Requirements && (
                        <p className="text-white font-bold text-xl py-4">
                          {position.Requirements}
                        </p>
                      )}
                      {position.RequirementsName && (
                        <div
                          className={`text-white text-base font-medium py-2 ${
                            position.RequirementsName.length > 0 ? 'pl-8' : ''
                          }`}
                        >
                          {position.RequirementsName.map(
                            (requirement, index) => (
                              <ul key={index}>
                                <li className="list-disc pb-4">
                                  {requirement}
                                </li>
                              </ul>
                            )
                          )}
                        </div>
                      )}
                      {position.WhatWeOffer && (
                        <p className="text-white font-bold text-xl py-4">
                          {position.WhatWeOffer}
                        </p>
                      )}
                      {position.WhatWeOfferName && (
                        <div
                          className={`text-white text-base font-medium py-2 ${
                            position.WhatWeOfferName.length > 0 ? 'pl-8' : ''
                          }`}
                        >
                          {position.WhatWeOfferName.map((offer, index) => (
                            <ul key={index}>
                              <li className="list-disc pb-3">{offer}</li>
                            </ul>
                          ))}
                        </div>
                      )}
                      <div className="flex justify-center pb-8">
                        <button
                          onClick={openModal}
                          className="flex items-center gap-3 bg-send-bg-btn cursor-pointer rounded-md text-base text-white py-2 px-4"
                        >
                          Apply Now
                          <RightArrow />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
          <HiringModal
            isHiringModalOpen={isHiringModalOpen}
            closeModal={closeModal}
          />
        </div>
      )}
    </section>
  );
};

export default Positions;
