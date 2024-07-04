import Link from 'next/link';
import { useMenu } from '@/context/menu-context';
import { useRouter } from 'next/router';
import PromoonLogo from '@/icons/ProMoonLogo';
import { useTheme } from '@/context/ThemeContext';
import ProMoonLogoDark from '@/icons/ProMoonLogoDark';
import ResponsiveNavbar from '@/icons/ResponsiveNavbar';
import ResponsiveCloseIcon from '@/icons/ResponsiveCloseIcon';
import { useState } from 'react';

const NAV_MENUES: {
  id: number;
  menu: string;
  path: string;
}[] = [
  {
    id: 1,
    menu: 'Home',
    path: '/',
  },
  {
    id: 2,
    menu: 'Our Process',
    path: '/ourprocess',
  },
  {
    id: 3,
    menu: 'Contact US',
    path: '/contactus',
  },
  {
    id: 4,
    menu: 'Careers',
    path: '/career',
  },
];

const Navbar: React.FC = () => {
  const { currentUser, setCurrentUser } = useMenu();
  const { theme } = useTheme();

  const [active, setActive] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActive(index);
  };

  return (
    <>
      <nav
        className={`w-full  bg-white dark:bg-bg-colors-background top-0 border-b border-blackBlue/20 z-50 fixed`}
      >
        <div className="container mx-auto w-full py-5 flex md:px-0 px-4 sticky">
          <div className="w-full flex items-center justify-between">
            <Link href={'/'}>
              {theme === 'light' ? <PromoonLogo /> : <ProMoonLogoDark />}
            </Link>
            <div className="">
              <ul className=" px-7 lg:flex hidden gap-9 text-textPrimary rounded-full ">
                {NAV_MENUES &&
                  NAV_MENUES.length &&
                  NAV_MENUES.map(({ menu, path }, index) => {
                    return (
                      <li
                        className="py-2.5 hover:transition duration-300 dark:text-white text-sm font-semibold hover:font-bold ease-in"
                        key={index}
                      >
                        <Link
                          onClick={() => {
                            handleClick(index);
                          }}
                          style={{
                            color: active === index ? '#00B4FF' : 'white',
                          }}
                          key={index}
                          href={path}
                        >
                          {menu}
                        </Link>
                      </li>
                    );
                  })}
              </ul>
            </div>
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
      </nav>
    </>
  );
};

export default Navbar;
