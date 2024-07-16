import { useHiring } from '@/context/Hiring-Context';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import PositionIcon from '@/icons/PositionIcon';
import DarkPositionIcon from '@/icons/DarkPositionIcon';
import RightArrow from '@/icons/RightArrow';
import Position1Image from '@/public/assets/Position1Image.png';
import Position2Image from '@/public/assets/Position2Image.png';
import Position3Image from '@/public/assets/Position3Image.png';
import { StaticImageData } from 'next/image';

const POSITIONS: {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  positonImage: StaticImageData;
  darkIcon: React.ReactNode;
}[] = [
  {
    id: 1,
    title: 'Position 1',
    description:
      'The employer is expected to reach out to our team and make a request. Conversations about the role specifics will then start between our Talent delivery associate and the employer.',
    icon: <PositionIcon />,
    darkIcon: <DarkPositionIcon />,
    positonImage: Position1Image,
  },
  {
    id: 2,
    title: 'Position 2',
    description:
      'The next step is for our Talent Delivery Associate to review and interview candidates that fit the needs of the employer. Then proceed to initiate a conversation between the client and selected candidates, Introductory interviews & further assessments could be required.',
    icon: <PositionIcon />,
    darkIcon: <DarkPositionIcon />,
    positonImage: Position2Image,
  },
  {
    id: 3,
    title: 'Position 3',
    description:
      'The employer is expected to reach out to our team and make a request. Conversations about the role specifics will then start between our Talent delivery associate and the employer.',
    icon: <PositionIcon />,
    darkIcon: <DarkPositionIcon />,
    positonImage: Position3Image,
  },
];

const Positions: React.FC = () => {
  const { isHiring } = useHiring();
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { setIsHiring } = useHiring();

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

  return (
    <section
      className="select-none scroll-mt-70px"
      id="position"
    >
      <div
        ref={sectionRef}
        className={`animated-section ${
          isVisible ? 'slideInDown' : ''
        } w-full py-[31px] bg-borderBlack`}
      >
        <p className="text-center font-bold text-textPrimary text-xl md:text-2xl lg:text-3xl dark:text-white">
          We are hiring (Positions)
        </p>
      </div>
      <div className="container mx-auto w-full p-4 md:p-0">
        <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-1 md:grid-rows-3 gap-8 lg:gap-24 py-4 md:py-24">
          {POSITIONS.map(
            ({ description, icon, id, positonImage, title, darkIcon }) => (
              <div
                key={id}
                className="flex flex-col md:flex-row w-full justify-center md:justify-between items-center gap-16"
              >
                <div className="flex flex-col justify-center md:flex-row md:items-start md:w-1/2 items-center">
                  <div className="md:pr-3 dark:hidden block">{icon}</div>
                  <div className="md:pr-3 dark:block hidden">{darkIcon}</div>
                  <div className="flex flex-col justify-center md:items-start items-center gap-3 md:gap-3">
                    <p className="text-textPrimary text-2xl lg:text-28px dark:text-white">
                      {title}
                    </p>
                    <p className="text-center lg:text-base text-textSecondary md:text-start dark:text-darkTextPrimary">
                      {description}
                    </p>
                    <button className="bg-send-bg-btn rounded-full text-center lg:text-xl text-white px-12 py-2 md:py-4 lg:px-14 lg:py-4">
                      <Link
                        href={`/hiringform`}
                        className="flex gap-3"
                      >
                        Get Started
                        <RightArrow />
                      </Link>
                    </button>
                  </div>
                </div>
                <div className="md:w-1/2 md:flex md:justify-center">
                  <Image
                    src={positonImage}
                    alt={title}
                  />
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Positions;
