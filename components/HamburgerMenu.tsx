import { useMenu } from '@/context/menu-context';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { useHiring } from '@/context/Hiring-Context';

const HamburgerMenu: React.FC = () => {
  const { theme, toggleMode } = useTheme();
  const router = useRouter();
  const { currentUser, setCurrentUser } = useMenu();
  const { isHiring } = useHiring();
  const [active, setActive] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = (index: number) => {
    setActive(index);
  };

  return (
    <>
      {currentUser && (
        <div
          className={`fixed top-70px border-t z-40 bg-white dark:bg-bg-colors-background h-full w-full lg:hidden
             ${isOpen ? ' slideInLeft ' : 'slideInRight'}`}
        >
          <div className="max-w-screen-xl w-90% m-auto">
            <ul className="text-xl leading-30px font-medium md:leading-48px">
              <li className="my-6">
                <button
                  onClick={() => {
                    setCurrentUser(false);
                    router.push('/');
                  }}
                  className="dark:hover:text-blue hover:text-bold dark:text-white hover:text-blue"
                >
                  Home
                </button>
              </li>
              <li className="my-6">
                <button
                  onClick={() => {
                    setCurrentUser(false);
                    router.push('/ourprocess');
                  }}
                  className="dark:hover:text-blue dark:text-white hover:text-blue"
                >
                  Our Process
                </button>
              </li>
              <li className="my-6">
                <button
                  onClick={() => {
                    setCurrentUser(false);
                    router.push('/contactus');
                  }}
                  className="dark:hover:text-blue dark:text-white hover:text-blue"
                >
                  Contact Us
                </button>
              </li>
              <li className="my-6">
                <button
                  className="relative data-tooltip-target='tooltip-light' data-tooltip-style='light'"
                  onClick={() => {
                    handleClick(4);
                    setCurrentUser(false);
                    router.push('/career');
                  }}
                  style={{ color: active === 4 ? '#00B4FF' : 'white' }}
                >
                  Careers
                  {isHiring && (
                    <div
                      onClick={() => {
                        handleClick(4);
                        router.push('/career');
                      }}
                      id="tooltip-light"
                      role="tooltip"
                      className="ml-2 z-10 inline-block px-1 text-sm font-medium  text-gray-900 bg-white border border-gray-200 rounded-lg shadow-sm"
                    >
                      we're hiring
                    </div>
                  )}
                </button>
              </li>
              <li className="my-6">
                <button
                  onClick={() => {
                    setCurrentUser(false);
                    router.push('/about');
                  }}
                  className="dark:hover:text-blue dark:text-white hover:text-blue"
                >
                  About Us
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
