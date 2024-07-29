import { useHiring } from '@/context/Hiring-Context';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import RightArrow from '@/icons/RightArrow';
import JsonData from '@/components/json/Position.json';
import HiringModal from './PopUpModal/HiringModal';

const Positions: React.FC = () => {
  const [isHiringModalOpen, setisHiringModalOpen] = useState<boolean>(false);
  const [open, setIsOpen] = useState<number | null>(null);
  const { isHiring } = useHiring();
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const sectionRef = useRef<HTMLDivElement | null>(null);

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

  if (!isHiring) return null;

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
        <p className="text-center font-bold text-textPrimary text-xl md:text-2xl lg:text-3xl dark:text-white">
          We are hiring (Positions)
        </p>
      </div>
      <div className="container mx-auto w-full p-4 md:p-0">
        <ul>
          {JsonData.positions.map(
            ({
              positionTitle,
              Description,
              id,
              NumberOfPositions,
              Positions,
              JobType,
              JobTypeName,
              JobDescription,
              qualificationsAndSkills,
              responsibilities,
              responsibilitiesName,
              qualificationsAndSkillsName,
              whatWeOffer,
              whatWeOfferName,
              Requirements,
              RequirementsName,
            }) => (
              <li
                key={id}
                className={`flex flex-col md:flex-row justify-between items-start border rounded-md w-full border-blue pr-1 py-6 first:pb-3 px-4 mb-3 cursor-pointer ${
                  open === id ? 'open' : ''
                }`}
                onClick={() => handleOpen(id)}
              >
                <div className="lg:text-xl text-base flex flex-col w-[95%]">
                  <div className="flex md:flex-row flex-col justify-between w-full">
                    <div className="flex flex-col">
                      <div className="font-medium text-white pb-2">
                        {positionTitle}
                      </div>
                      <div className="flex md:flex-row flex-col gap-4">
                        {JobType && (
                          <div className="md:border-r flex md:flex-row flex-col pr-4 md:border-sky-500">
                            <div className="text-white font-bold">
                              {JobType}:
                            </div>
                            <div className="text-white">{JobTypeName}</div>
                          </div>
                        )}
                        <div className="flex flex-row md:pb-0 pb-4 ">
                          <div className="text-white font-bold">
                            {Positions}:
                          </div>

                          <div className="text-white">{NumberOfPositions}</div>
                        </div>
                      </div>
                    </div>
                    <button className="bg-send-bg-btn rounded-md text-center text-base text-white px-4 py-2 md:py-4 h-10 md:h-12 w-fit md:w-auto">
                      <Link
                        href={`/hiringform`}
                        className="flex gap-3 items-center h-full w-fit"
                      >
                        Apply Now
                        <RightArrow />
                      </Link>
                    </button>
                  </div>

                  {open === id && (
                    <div className="overflow-hidden pt-1 mt-4 border-t border-blue">
                      {Description && (
                        <p className="text-white font-bold text-xl pt-4">
                          {Description}
                        </p>
                      )}
                      {JobDescription && (
                        <p className="text-white text-base font-medium pt-2">
                          {JobDescription}
                        </p>
                      )}
                      {responsibilities && (
                        <p className="text-white font-bold text-xl py-4">
                          {responsibilities}
                        </p>
                      )}
                      {responsibilitiesName && (
                        <div
                          className={`text-white text-base font-medium py-2 ${
                            responsibilitiesName.length > 0 ? 'pl-8' : ''
                          }`}
                        >
                          {responsibilitiesName.map((responsibility, index) => (
                            <ul key={index}>
                              <li className="list-disc pb-4">
                                {responsibility}
                              </li>
                            </ul>
                          ))}
                        </div>
                      )}
                      {qualificationsAndSkills && (
                        <p className="text-white font-bold text-xl py-4">
                          {qualificationsAndSkills}
                        </p>
                      )}
                      {qualificationsAndSkillsName && (
                        <div
                          className={`text-white text-base font-medium py-2 ${
                            qualificationsAndSkillsName.length > 0 ? 'pl-8' : ''
                          }`}
                        >
                          {qualificationsAndSkillsName.map(
                            (qualification, index) => (
                              <ul key={index}>
                                <li className="list-disc pb-4">
                                  {qualification}
                                </li>
                              </ul>
                            )
                          )}
                        </div>
                      )}
                      {Requirements && (
                        <p className="text-white font-bold text-xl py-4">
                          {Requirements}
                        </p>
                      )}
                      {RequirementsName && (
                        <div
                          className={`text-white text-base font-medium py-2 ${
                            RequirementsName.length > 0 ? 'pl-8' : ''
                          }`}
                        >
                          {RequirementsName.map((requirement, index) => (
                            <ul key={index}>
                              <li className="list-disc pb-4">{requirement}</li>
                            </ul>
                          ))}
                        </div>
                      )}
                      {whatWeOffer && (
                        <p className="text-white font-bold text-xl py-4">
                          {whatWeOffer}
                        </p>
                      )}
                      {whatWeOfferName && (
                        <div
                          className={`text-white text-base font-medium py-2 ${
                            whatWeOfferName.length > 0 ? 'pl-8' : ''
                          }`}
                        >
                          {whatWeOfferName.map((offer, index) => (
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
            )
          )}
        </ul>
        <HiringModal
          isHiringModalOpen={isHiringModalOpen}
          closeModal={closeModal}
        />
      </div>
    </section>
  );
};

export default Positions;
