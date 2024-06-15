import DarkDownArrow from '@/icons/DarkDownArrow';
import DownArrow from '@/icons/DownArrow';
import { useState } from 'react';
import Positions from './Position';

const Benefit = () => {
  const [open, setIsOpen] = useState(0);
  const CAREER_BENIFITS: {
    id: number;
    title: string;
    description: string;
  }[] = [
    {
      id: 1,
      title: 'Professional development opportunities',
      description:
        "Professional development may be geared toward improving an area “in need of improvement” from a previous evaluation or related to an employee's new responsibilities or future career goals.",
    },
    {
      id: 2,
      title: 'Performance-based promotions and salary increases',
      description:
        'It can act as an incentive to increase employee performance and efficiency, through goal-setting, as employees want to achieve the best pay increase. It can improve motivation, focus and morale in the workplace. It can assist to achieve a strong bond between employee and company.',
    },
    {
      id: 3,
      title: 'Job flexibility',
      description:
        'Workplace flexibility is the existence of certain opportunities at a job. It typically refers to the ability of employees to choose their own hours instead of having to work within a traditional 9-to-5 schedule.',
    },
    {
      id: 4,
      title: 'Health and wellness benefits',
      description:
        "It's a win-win situation, as it leads to many benefits for the company. Wellness programs don't just increase productivity but also lead to increased engagement, improved employee morale and retention, and reduced health risks.",
    },
    {
      id: 5,
      title: 'Employee recognition programs',
      description:
        'Companies can implement programs to recognize and reward employees for their hard work and achievements,which can help boost morale and motivation.',
    },
  ];

  const handleOpen = (value: number) => {
    setIsOpen(open === value ? 0 : value);
  };

  return (
    <section className="md:py-10">
      <div className="max-w-screen-xl w-90% mx-auto">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:py-24 gap-10">
          <div className="flex flex-col lg:w-1/2 justify-center items-center lg:items-start lg:justify-start lg:gap-4">
            <p className="text-textPrimary dark:text-white text-center lg:text-left text-xl md:text-2xl lg:text-32px font-semibold">
              Wellness and benefit
            </p>
            <p className="text-textSecondary dark:text-darkTextPrimary lg:text-xl text-center lg:text-left">
              As part of our pursuit to lead impactful,
              <br className="hidden lg:block" /> fulfilling lives, we take
              benefits pretty seriously.
            </p>
          </div>
          <div className="lg:w-1/2">
            <ul>
              {CAREER_BENIFITS.map(({ title, description, id }) => {
                return (
                  <div
                    onClick={() => {
                      handleOpen(id);
                    }}
                    className={`flex justify-between ${
                      open === id ? 'items-start' : 'items-center'
                    } border-b w-full border-black dark:border-darkBorder pr-1 py-3 first:pb-3`}
                  >
                    <li className="py-2 select-none lg:text-xl text-base cursor-pointer lg:font-medium  text-textPrimary dark:text-white w-[95%] ">
                      {title}

                      <div
                        className={`overflow-hidden  increaseHeight ${
                          open !== id ? 'h-0 ' : 'h-full'
                        } pt-1`}
                      >
                        <p className="text-textSecondary dark:text-darkTextPrimary lg:text-lg lg:font-normal font-medium text-sm">
                          {description}
                        </p>
                      </div>
                    </li>
                    <div
                      className={` dark:hidden block ${
                        open === id ? 'downArrowRound dark:hidden block' : ''
                      } `}
                    >
                      <DownArrow />
                    </div>
                    <div
                      className={` hidden dark:block ${
                        open === id ? 'downArrowRound hidden dark:block' : ''
                      } `}
                    >
                      <DarkDownArrow />
                    </div>
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <Positions />
    </section>
  );
};

export default Benefit;
