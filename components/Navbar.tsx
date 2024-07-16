import Link from 'next/link';
import { useHiring } from '@/context/Hiring-Context';
import { useTheme } from '@/context/ThemeContext';
import PromoonLogo from '@/icons/ProMoonLogo';
import ProMoonLogoDark from '@/icons/ProMoonLogoDark';
import ResponsiveNavbar from '@/icons/ResponsiveNavbar';
import ResponsiveCloseIcon from '@/icons/ResponsiveCloseIcon';
import { useState } from 'react';
import { useMenu } from '@/context/menu-context';
import { useRouter } from 'next/router';

const NAV_MENUES = [
  { id: 1, menu: 'Home', path: '/' },
  { id: 2, menu: 'Our Process', path: '/ourprocess' },
  { id: 3, menu: 'Contact US', path: '/contactus' },
  { id: 4, menu: 'Careers', path: '/career' },
  { id: 5, menu: 'About Us', path: '/aboutus' },
];

const Navbar: React.FC = () => {
  const { currentUser, setCurrentUser } = useMenu();
  const { isHiring } = useHiring();
  const { theme } = useTheme();
  const [active, setActive] = useState<number | null>(null);
  const router = useRouter();

  const handleClick = (index: number) => {
    setActive(index);
  };

  return (
    <nav
      className={`w-full bg-white dark:bg-bg-colors-background top-0 border-b border-blackBlue/20 z-50 fixed`}
    >
      <div className="container mx-auto w-full py-5 flex md:px-0 px-4 sticky">
        <div className="w-full flex items-center justify-between">
          <Link href="/">
            {theme === 'light' ? <PromoonLogo /> : <ProMoonLogoDark />}
          </Link>
          <div className="">
            <ul className="px-7 lg:flex hidden gap-9 text-textPrimary rounded-full">
              {NAV_MENUES.map(({ menu, path }, index) => (
                <li
                  key={index}
                  className="py-2.5 hover:transition duration-300 dark:text-white text-sm font-semibold hover:font-bold ease-in"
                >
                  <Link
                    className='  data-tooltip-target="tooltip-light" data-tooltip-style="light" '
                    onClick={() => handleClick(index)}
                    style={{ color: active === index ? '#00B4FF' : 'white' }}
                    href={path}
                  >
                    {menu}
                    {menu === 'Careers' && isHiring && (
                      <div
                        onClick={() => {
                          handleClick(4);
                          router.push('/career');
                        }}
                        id="tooltip-light"
                        role="tooltip"
                        className="absolute z-10  inline-block px-1  text-sm font-medium top-3 right-24 text-gray-900 bg-white border border-gray-200 rounded-lg shadow-sm "
                      >
                        we're hiring
                        <div
                          className="tooltip-arrow"
                          data-popper-arrow
                        ></div>
                      </div>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:hidden">
            <div className="lg:hidden">
              <button
                onClick={() => {
                  setCurrentUser(!currentUser);
                }}
              >
                {currentUser ? <ResponsiveCloseIcon /> : <ResponsiveNavbar />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
