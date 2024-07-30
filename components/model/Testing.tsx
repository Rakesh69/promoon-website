import JiraIcon from '@/icons/JiraIcon';
import React from 'react';
import MantisIcon from '@/icons/MantisIcon';
import FirebaseIcon from '@/icons/FirebaseIcon';
import JemeterIcon from '@/icons/JemeterIcon';
import GtmetrixIcon from './../../icons/GtnaiIcon';
import SeleniumIcon from '@/icons/SeleniumIcon';

const Testing = () => {
  const OBJECTIVE = [
    {
      id: 1,
      title: 'Each sprint/milestone is tested manually.',
    },
    {
      id: 2,
      title: 'Bugs are reported and added to product backlog.',
    },
    {
      id: 3,
      title:
        'Upon bug fixing, quality release is provided and then the final demo of the sprint is sent to the client for approval.',
    },
    {
      id: 4,
      title:
        'Regression testing after each sprint to ensure proper functioning of the previous approved sprints/milestones.',
    },
  ];
  const TYPES_OF_TESTING = [
    {
      id: 1,
      title: 'Unit Testing',
    },
    {
      id: 2,
      title: 'Manual Testing',
    },
    {
      id: 3,
      title: 'Regression Testing',
    },
    {
      id: 4,
      title: 'Security Testing',
    },
    {
      id: 5,
      title: 'Automation Testing',
    },
    {
      id: 6,
      title: 'Load & Stress Testing',
    },
    {
      id: 7,
      title: 'Performance',
    },
    {
      id: 8,
      title: 'Code Review',
    },
  ];
  const TEAM_MEMBERS_INVOLVED = [
    {
      id: 1,
      title: 'Account Manager',
    },
    {
      id: 2,
      title: 'Project Manager',
    },
    {
      id: 3,
      title: 'QA',
    },
  ];

  const OBJECTIVES = [
    {
      id: 1,
      icon: <JiraIcon />,
    },
    {
      id: 2,
      icon: <MantisIcon />,
    },
    {
      id: 3,
      icon: <FirebaseIcon />,
    },
    {
      id: 4,
      icon: <JemeterIcon />,
    },
    {
      id: 5,
      icon: <GtmetrixIcon />,
    },
    {
      id: 3,
      icon: <SeleniumIcon />,
    },
  ];

  return (
    <>
      <section className="md:pt-12">
        <div className=" bg-[#F3F4F6] w-full pb-8 lg:rounded-l-xl rounded-xl ">
          <h1 className="md:hidden block text-sky-500 font-bold text-3xl py-8 px-5 ">
            Testing
          </h1>
          <h2 className=" md:pt-8  font-bold text-textPrimary text-base relative w-fit mb-4 pl-8 text-bold">
            OBJECTIVE
            <div className="border-animation ml-8 " />
          </h2>
          <ul className=" pl-12">
            {OBJECTIVE.map(({ title, id }) => (
              <li
                key={id}
                className="text-textPrimary text-lg mb-4 lg:pl-4 list-disc "
              >
                {title}
              </li>
            ))}
          </ul>

          <div className=" w-full  lg:px-4">
            <h2 className="font-bold text-textPrimary text-base mb-4 pl-6 text-bold relative w-fit ">
              <div className="border-animation ml-6 " />
              TYPES OF TESTING
            </h2>
            <ul className=" pl-12">
              {TYPES_OF_TESTING.map(({ title, id }) => (
                <li
                  key={id}
                  className="text-textPrimary text-lg mb-4 pl-4 list-disc "
                >
                  {title}
                </li>
              ))}
            </ul>

            <h2 className="font-bold text-textPrimary text-base mb-4 pl-6 relative w-fit text-bold ">
              TEAM MEMBERS INVOLVED
              <div className="border-animation ml-6 " />
            </h2>
            <ul className=" pl-12">
              {TEAM_MEMBERS_INVOLVED.map(({ title, id }) => (
                <li
                  key={id}
                  className="text-textPrimary text-lg mb-4 pl-4 list-disc "
                >
                  {title}
                </li>
              ))}
            </ul>

            <div className="pl-8  lg:pb-0 ">
              <h2 className=" font-bold text-textPrimary text-xl mb-4 relative w-fit text-bold">
                Tools
                <div className="border-animation" />
              </h2>
              <div className="flex lg:gap-x-16 lg:gap-y-12 gap-12 max-w-[446px] lg:max-w-full flex-wrap ">
                {OBJECTIVES.map(({ icon, id }) => (
                  <div key={id}>{icon}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testing;
