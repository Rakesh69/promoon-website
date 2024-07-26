import { useHiring } from '@/context/Hiring-Context';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import RightArrow from '@/icons/RightArrow';
import JsonData from '@/components/json/Position.json';

const Positions: React.FC = () => {
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

  return (
    <section
      className="select-none scroll-mt-70px"
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
              positonTitle,
              description,
              id,
              Experience,
              Location,
              postedDate,
              NoOfPositions,
              Positions,
              LocationName,
              Experienceyear,
              Date,
            }) => (
              <li
                key={id}
                className={`flex justify-between items-start border rounded-md w-full border-blue pr-1 py-6 first:pb-3 px-4 mb-3 cursor-pointer ${
                  open === id ? 'open' : ''
                }`}
                onClick={() => handleOpen(id)}
              >
                <div className="lg:text-xl text-base flex flex-col w-[95%]">
                  <div className="flex flex-row justify-between w-full">
                    <div className="font-medium text-white">{positonTitle}</div>
                    <button className="bg-send-bg-btn rounded-md text-center text-base text-white px-4 py-2 md:py-4">
                      <Link
                        href={`/hiringform`}
                        className="flex gap-3"
                      >
                        Apply Now
                        <RightArrow />
                      </Link>
                    </button>
                  </div>

                  <div className="flex flex-row gap-4 ">
                    <div className="text-white font-bold">{Positions} :</div>
                    <div className="text-white">{NoOfPositions}</div>
                  </div>
                  {open === id && (
                    <div className="overflow-hidden pt-1 mt-4 border-t  border-blue">
                      <p className="text-white  font-medium text-xl pt-4 ">
                        {description}
                      </p>
                      <div className="flex flex-row gap-4  py-2">
                        <div className="text-white text-base font-bold ">
                          {Experience} :
                        </div>
                        <div className="text-white text-base">
                          {Experienceyear}
                        </div>
                      </div>

                      <div className="flex flex-row gap-4  py-2 ">
                        <div className="text-white text-base font-bold ">
                          {Date} :
                        </div>
                        <div className="text-white text-base">{postedDate}</div>
                      </div>

                      <div className="flex flex-row gap-4  py-2">
                        <div className="text-white text-base font-bold">
                          {' '}
                          {LocationName} :
                        </div>
                        <div className="text-white text-base">{Location}</div>
                      </div>
                    </div>
                  )}
                </div>
              </li>
            )
          )}
        </ul>
      </div>
    </section>
  );
};

export default Positions;
