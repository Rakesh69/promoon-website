import AnalysisIcon from '@/icons/AnalysisIcon';
import BlueLine from '@/icons/blueline';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import PlanningIcon from '@/icons/PlanningIcon';
import DevelopmentIcon from '@/icons/DevelopmentIcon';
import SetupIcon from '@/icons/SetupIcon';
import ExecutionIcon from '@/icons/ExecutionIcon';
import ReportingIcon from '@/icons/ReportingIcon';

const NAV_MENUS = [
  {
    id: 1,
    menu: 'Requirement Analysis',
    path: '#Analysis',
    icon: <AnalysisIcon />,
  },
  { id: 2, menu: 'Test Planning', path: '#planning', icon: <PlanningIcon /> },
  {
    id: 3,
    menu: 'Test Design & Development',
    path: '#Development',
    icon: <DevelopmentIcon />,
  },
  {
    id: 4,
    menu: 'Test Environment Setup',
    path: '#Setup',
    icon: <SetupIcon />,
  },
  {
    id: 5,
    menu: 'Test Execution',
    path: '#Execution',
    icon: <ExecutionIcon />,
  },
  {
    id: 6,
    menu: 'Test Reporting',
    path: '#TestReporting',
    icon: <ReportingIcon />,
  },
];

const Analysis = [
  {
    id: 1,
    title: 'Requirement Analysis',
    details: [
      { id: 1, data: 'Understand the software requirements' },
      {
        id: 2,
        data: 'Identify the testing scope',
      },
      {
        id: 3,
        data: 'Analyze the requirements for completeness, consistency, and feasibility',
      },
      { id: 4, data: 'Prioritize the requirements' },
      { id: 5, data: 'Document the requirements' },
    ],
  },
];

const planning = [
  {
    id: 1,
    title: 'Test Planning',
    details: [
      { id: 1, data: 'Define the test strategy' },
      {
        id: 2,
        data: 'Identify the test cases',
      },
      { id: 3, data: 'Estimate the resources needed' },
      { id: 4, data: 'Create a test schedule' },
      { id: 5, data: 'Define the entry and exit criteria for the test phase' },
    ],
  },
];

const Development = [
  {
    id: 1,
    title: 'Test Design & Development',
    details: [
      { id: 1, data: 'Identify the test scenarios' },
      {
        id: 2,
        data: 'Define the test conditions',
      },
      { id: 3, data: 'Create the test cases' },
      { id: 4, data: 'Develop test data' },
      { id: 5, data: 'Document the test cases' },
    ],
  },
];

const Setup = [
  {
    id: 1,
    title: 'Test Environment Setup',
    details: [
      { id: 1, data: 'Install the necessary hardware and software' },
      {
        id: 2,
        data: 'Configure the operating system and network',
      },
      { id: 3, data: 'Deploy the software under test' },
      { id: 4, data: 'Create test data' },
      { id: 5, data: 'Verify the test environment' },
    ],
  },
];

const Execution = [
  {
    id: 1,
    title: 'Test Execution',
    details: [
      { id: 1, data: 'Execute the test cases' },
      {
        id: 2,
        data: 'Record the test results',
      },
      { id: 3, data: 'Identify any defects' },
      { id: 4, data: 'Report the test results to the development team' },
      { id: 5, data: 'Retest any fixed defects' },
    ],
  },
];

const TestReporting = [
  {
    id: 1,
    title: 'Test Reporting',
    details: [
      { id: 1, data: 'Analyze the test results' },
      {
        id: 2,
        data: 'Generate a test report',
      },
      { id: 3, data: 'Communicate the test results to stakeholders' },
      { id: 4, data: 'Provide recommendations for improvement' },
      { id: 5, data: 'Archive the test report' },
    ],
  },
];

const OurTesting = () => {
  const [activeMenuId, setActiveMenuId] = useState(1);
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
    <div className="container mx-auto py-20 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col justify-center items-center text-center">
        <h2
          ref={sectionRef}
          className={`animated-section ${
            isVisible ? 'slideInDown' : ''
          } font-bold text-3xl md:text-4xl text-textPrimary`}
        >
          Our Testing
          <div className="relative inline-block">
            <span className="text-blue pb-2 pl-2"> Life Cycle</span>
            <div className="hidden md:block border-animation" />
          </div>
        </h2>
      </div>
      <div className="flex flex-col md:flex-row justify-start gap-6 md:gap-12 w-full pt-8">
        <div className="flex flex-col justify-start w-full md:w-1/4">
          <ul>
            {NAV_MENUS.map(({ id, menu, path, icon }) => (
              <li
                className={`py-4 flex items-center text-black text-base font-semibold hover:font-bold transition duration-300 ease-in pl-6 ${
                  activeMenuId === id ? 'border-black font-bold' : ''
                }`}
                key={id}
                onClick={() => setActiveMenuId(id)}
              >
                <Link href={path}>
                  <div className="flex items-center gap-2">
                    {icon}
                    <span>{menu}</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white border border-sky-400 rounded-md w-full md:w-3/4 h-full py-16 px-4">
          <div className="text-black">
            {activeMenuId === 1 && (
              <div className="flex gap-4">
                <div>
                  <h3 className="font-bold text-xl md:text-2xl pb-8">
                    {Analysis[0].title}
                  </h3>
                  <ul className="flex flex-col gap-5 pl-6 list-disc">
                    {Analysis[0].details.map(({ id, data }) => (
                      <li key={id}>{data}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
            {activeMenuId === 2 && (
              <div>
                <h3 className="font-bold text-xl md:text-2xl pb-8">
                  {planning[0].title}
                </h3>
                <ul className="flex flex-col gap-5 pl-6 list-disc">
                  {planning[0].details.map(({ id, data }) => (
                    <li key={id}>{data}</li>
                  ))}
                </ul>
              </div>
            )}
            {activeMenuId === 3 && (
              <div>
                <h3 className="font-bold text-xl md:text-2xl pb-8">
                  {Development[0].title}
                </h3>
                <ul className="flex flex-col gap-5 pl-6 list-disc">
                  {Development[0].details.map(({ id, data }) => (
                    <li key={id}>{data}</li>
                  ))}
                </ul>
              </div>
            )}
            {activeMenuId === 4 && (
              <div>
                <h3 className="font-bold text-xl md:text-2xl pb-8">
                  {Setup[0].title}
                </h3>
                <ul className="flex flex-col gap-5 pl-6 list-disc">
                  {Setup[0].details.map(({ id, data }) => (
                    <li key={id}>{data}</li>
                  ))}
                </ul>
              </div>
            )}
            {activeMenuId === 5 && (
              <div>
                <h3 className="font-bold text-xl md:text-2xl pb-8">
                  {Execution[0].title}
                </h3>
                <ul className="flex flex-col gap-5 pl-6 list-disc">
                  {Execution[0].details.map(({ id, data }) => (
                    <li key={id}>{data}</li>
                  ))}
                </ul>
              </div>
            )}
            {activeMenuId === 6 && (
              <div>
                <h3 className="font-bold text-xl md:text-2xl pb-8">
                  {TestReporting[0].title}
                </h3>
                <ul className="flex flex-col gap-5 pl-6 list-disc">
                  {TestReporting[0].details.map(({ id, data }) => (
                    <li key={id}>{data}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTesting;
