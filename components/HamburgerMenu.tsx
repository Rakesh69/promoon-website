import { useMenu } from '@/context/menu-context';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { useHiring } from '@/context/Hiring-Context';
import DropDownIcon from '@/icons/DropDownIcon';

const FOOTER_OPTIONS = [
  {
    id: 1,
    option: 'Service',
    subOptions: [
      { id: 1, menu: 'Website Development', path: '/websitedevelopment' },
      { id: 2, menu: 'Mobile App Development', path: '/mobileappdevelopment' },
      {
        id: 3,
        menu: 'Search Engine Optimization',
        path: '/SearchEngineOptimization',
      },
      { id: 4, menu: 'Quality Assurance', path: '/QualityAssurance' },
    ],
  },
];

const COMPANY = [
  {
    id: 1,
    option: 'Company',
    subOptions: [{ id: 1, menu: 'About Us', path: '/aboutus' }],
  },
];

const HamburgerMenu: React.FC = () => {
  const [clickedId, setClickedId] = useState<number | null>(null);
  const [open, setOpen] = useState<number | null>(null);

  const toggleMenu = (id: number) => {
    setClickedId(clickedId === id ? null : id);
  };

  const openMenu = (id: number) => {
    setOpen(open === id ? null : id);
  };

  const { theme, toggleMode } = useTheme();
  const router = useRouter();
  const { currentUser, setCurrentUser } = useMenu();
  const { isHiring } = useHiring();
  const [active, setActive] = useState<number | null>(null);

  const handleClick = (index: number, path: string) => {
    setActive(index);
    setCurrentUser(false);
    router.push(path);
  };

  return (
    <>
      {currentUser && (
        <div
          className={`fixed top-70px border-t z-40 bg-white dark:bg-bg-colors-background h-full w-full lg:hidden 
             ${currentUser ? 'slideInLeft' : 'slideInRight'}`}
        >
          <div className="max-w-screen-xl w-90% m-auto">
            <ul className="text-xl leading-30px font-medium md:leading-48px ">
              <li className="my-6 border-b pb-2 border-blackBlue ">
                <button
                  onClick={() => handleClick(0, '/')}
                  className="dark:hover:text-blue hover:text-bold dark:text-white hover:text-blue "
                >
                  Home
                </button>
              </li>
              <div className="container relative mx-auto flex flex-col ">
                {FOOTER_OPTIONS.map(({ id, option, subOptions }) => (
                  <div
                    key={id}
                    className="relative"
                  >
                    <div
                      onClick={() => toggleMenu(id)}
                      className="flex w-full cursor-pointer items-center justify-between rounded border-b pb-2 border-blackBlue "
                    >
                      <p className="leading-6 dark:hover:text-blue dark:text-white hover:text-blue ">
                        {option}
                      </p>
                      <div
                        className={`absolute right-3 ${
                          clickedId === id ? '' : 'rotate-down'
                        }`}
                      >
                        <button
                          className={`${
                            clickedId === id
                              ? ' transition-all'
                              : 'transition-all '
                          }`}
                        >
                          <DropDownIcon />
                        </button>
                      </div>
                    </div>
                    {clickedId === id && (
                      <div
                        className={`fade-in left-0 top-full z-30 mt-1 w-full rounded`}
                      >
                        {subOptions.map((subOption) => (
                          <div
                            key={subOption.id}
                            onClick={() =>
                              handleClick(subOption.id, subOption.path)
                            }
                            className="-tracking-3% text-xl py-4 cursor-pointer text-white font-normal leading-5 dark:hover:text-blue hover:text-bold dark:text-white hover:text-blue"
                          >
                            {subOption.menu}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <li className="my-6 border-b pb-2 border-blackBlue ">
                <button
                  onClick={() => handleClick(1, '/ourprocess')}
                  className="dark:hover:text-blue dark:text-white hover:text-blue"
                >
                  Our Process
                </button>
              </li>
              <li className="my-6 border-b pb-2 border-blackBlue ">
                <button
                  onClick={() => handleClick(2, '/career')}
                  className="relative data-tooltip-target='tooltip-light' data-tooltip-style='light'"
                  style={{ color: active === 2 ? '#00B4FF' : 'white' }}
                >
                  Careers
                  {isHiring && (
                    <div
                      onClick={() => handleClick(2, '/career')}
                      id="tooltip-light"
                      role="tooltip"
                      className="ml-2 z-10 inline-block px-1 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg shadow-sm"
                    >
                      we're hiring
                    </div>
                  )}
                </button>
              </li>
              <div className="container relative mx-auto flex flex-col ">
                {COMPANY.map(({ id, option, subOptions }) => (
                  <div
                    key={id}
                    className="relative"
                  >
                    <div
                      onClick={() => openMenu(id)}
                      className="flex w-full cursor-pointer items-center justify-between rounded border-b pb-2 border-blackBlue "
                    >
                      <p className="leading-6 dark:hover:text-blue hover:text-bold dark:text-white hover:text-blue ">
                        {option}
                      </p>
                      <div
                        className={`absolute right-3 ${
                          clickedId === id ? '' : 'rotate-down'
                        }`}
                      >
                        <button
                          className={`${
                            clickedId === id
                              ? ' transition-all'
                              : 'transition-all '
                          }`}
                        >
                          <DropDownIcon />
                        </button>
                      </div>
                    </div>
                    {open === id && (
                      <div
                        className={`fade-in left-0 top-full z-30 mt-1 w-full rounded`}
                      >
                        {subOptions.map((subOption) => (
                          <div
                            key={subOption.id}
                            onClick={() =>
                              handleClick(subOption.id, subOption.path)
                            }
                            className="-tracking-3% text-xl py-4 cursor-pointer text-white font-medium leading-5 dark:hover:text-blue hover:text-bold dark:text-white hover:text-blue"
                          >
                            {subOption.menu}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <li className="my-6">
                <button
                  onClick={() => handleClick(3, '/contactus')}
                  className="dark:hover:text-blue dark:text-white hover:text-blue bg-send-bg-btn cursor-pointer rounded-full px-5  "
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default HamburgerMenu;
