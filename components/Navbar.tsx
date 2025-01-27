import Link from 'next/link';
import { useTheme } from '@/context/ThemeContext';
import PromoonLogo from '@/icons/ProMoonLogo';
import ProMoonLogoDark from '@/icons/ProMoonLogoDark';
import ResponsiveNavbar from '@/icons/ResponsiveNavbar';
import ResponsiveCloseIcon from '@/icons/ResponsiveCloseIcon';
import { useState, useEffect } from 'react';
import { useMenu } from '@/context/menu-context';
import { useRouter } from 'next/router';
import DropDownIcon from '@/icons/DropDownIcon';
import JsonData from '@/components/json/Position.json';

const NAV_MENUES = [
  { id: 1, menu: 'Home', path: '/' },
  {
    id: 2,
    menu: 'Services',
    path: '/service',
    dropdown: [
      {
        id: 1,
        menu: 'Website Development',
        path: '/service/websitedevelopment',
      },
      {
        id: 2,
        menu: 'Mobile App Development',
        path: '/service/mobileappdevelopment',
      },
      {
        id: 3,
        menu: 'Search Engine Optimization',
        path: '/service/SearchEngineOptimization',
      },
      { id: 4, menu: 'Quality Assurance', path: '/service/QualityAssurance' },
    ],
  },
  { id: 3, menu: 'Our Process', path: '/ourprocess' },
  {
    id: 4,
    menu: 'Company',
    path: 'company',
    dropdown: [{ id: 1, menu: 'About Us', path: '/company/aboutus' }],
  },
  { id: 5, menu: 'Careers', path: '/career' },
];

const Navbar: React.FC = () => {
  const { currentUser, setCurrentUser } = useMenu();
  const { theme } = useTheme();
  const [active, setActive] = useState<number | null>(null);
  const router = useRouter();

  const hasPositions = JsonData.positions.length > 0;

  const handleClick = (index: number) => {
    setActive(index);
  };

  const isActive = (path: string) => router.pathname === path;

  return (
    <nav className="w-full bg-white dark:bg-bg-colors-background top-0 border-b border-blackBlue/20 z-50 fixed px-5">
      <div className="container mx-auto w-full py-5 flex md:px-0 px-4 sticky">
        <div className="w-full flex items-center justify-between">
          <Link href="/">
            {theme === 'light' ? <PromoonLogo /> : <ProMoonLogoDark />}
          </Link>
          <div className="flex justify-between gap-20">
            <ul className="px-7 lg:flex items-center justify-between hidden gap-9 text-textPrimary rounded-full">
              {NAV_MENUES.map(({ id, menu, path, dropdown }) => (
                <li
                  key={id}
                  className="relative group py-2.5 dark:text-white text-sm font-semibold hover:font-bold"
                >
                  {dropdown ? (
                    <>
                      <div className="flex items-center cursor-pointer">
                        <span
                          onClick={() => handleClick(id)}
                          style={{
                            color: router.pathname.includes(path)
                              ? '#00B4FF'
                              : 'white',
                          }}
                        >
                          {menu}
                        </span>
                        <button className="ml-2">
                          <DropDownIcon />
                        </button>
                      </div>

                      <ul className="absolute hidden group-hover:block bg-white hover:text-sky-600 shadow-lg rounded-md cursor-pointer mt-2">
                        {dropdown.map((item) => (
                          <li
                            key={item.id}
                            style={{
                              color:
                                router.pathname === path ? '#00B4FF' : 'white',
                            }}
                            className={` py-2 px-4  ${
                              item.id === 4 ? '' : ' p-0 '
                            }`}
                          >
                            <Link href={item.path}>
                              <div
                                className={` text-textPrimary hover:text-sky-600  whitespace-nowrap ${
                                  item.id === 4 ? '' : 'p-0'
                                }`}
                              >
                                {item.menu}
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link
                      onClick={() => handleClick(id)}
                      style={{
                        color: router.pathname === path ? '#00B4FF' : 'white',
                      }}
                      href={path}
                    >
                      <div>
                        {menu}
                        {menu === 'Careers' && hasPositions && (
                          <span
                            id="tooltip-light"
                            role="tooltip"
                            className="absolute z-10 inline-block  text-sm mx-1
                             font-medium -top-4 -right-8 text-gray-900 bg-white border border-gray-200 rounded-lg shadow-sm"
                          >
                            We're hiring
                            <div
                              className="tooltip-arrow"
                              data-popper-arrow
                            ></div>
                          </span>
                        )}
                        {menu === 'Careers' && !hasPositions && (
                          <span
                            id="tooltip-light"
                            role="tooltip"
                            className="absolute z-10 inline-block px-1 text-sm font-medium -top-5 -right-8 text-gray-900 bg-white border border-gray-200 rounded-lg shadow-sm"
                          >
                            No hiring at the moment
                            <div
                              className="tooltip-arrow"
                              data-popper-arrow
                            ></div>
                          </span>
                        )}
                      </div>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <div className="bg-send-bg-btn cursor-pointer rounded-full lg:text-base text-white py-2 px-4 lg:flex hidden">
              <button
                onClick={() => {
                  router.push('/contactus');
                  setActive(0);
                }}
                className="flex items-end gap-3"
              >
                Contact Us
              </button>
            </div>
          </div>
          <div className="lg:hidden">
            <button onClick={() => setCurrentUser(!currentUser)}>
              {currentUser ? <ResponsiveCloseIcon /> : <ResponsiveNavbar />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
