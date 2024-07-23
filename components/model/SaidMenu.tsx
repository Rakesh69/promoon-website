import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const NAV_MENUES = [
  { id: 1, menu: '1. Discovery Workshop', path: '#workshop' },
  { id: 2, menu: '2. Planning', path: '#planning' },
  { id: 3, menu: '3. Design', path: '#design' },
  { id: 4, menu: '4. Development', path: '#development' },
  { id: 5, menu: '5. Testing', path: '#testing' },
  { id: 6, menu: '6. Maintenance', path: '#maintenance' },
];

const res_NAV_MENUES = [
  { id: 1, menu: '1', path: '#workshop' },
  { id: 2, menu: '2', path: '#planning' },
  { id: 3, menu: '3', path: '#design' },
  { id: 4, menu: '4', path: '#development' },
  { id: 5, menu: '5', path: '#testing' },
  { id: 6, menu: '6', path: '#maintenance' },
];

const SaidMenu = () => {
  const [active, setActive] = useState<string>('#workshop');
  const [lineHeight, setLineHeight] = useState('0%');

  const smoothScrollTo = (path: string) => {
    const element = document.querySelector(path);
    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.scrollY,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let found = false;
      let newLineHeight = '0%';

      sections.forEach((current) => {
        const currentElement = current as HTMLElement;
        const sectionHeight = currentElement.offsetHeight;
        const sectionTop = currentElement.offsetTop - 200;
        const sectionId = current.getAttribute('id');

        if (
          window.scrollY > sectionTop &&
          window.scrollY <= sectionTop + sectionHeight
        ) {
          setActive(`#${sectionId}`);
          found = true;
        }

        const documentHeight =
          document.documentElement.scrollHeight - window.innerHeight;
        const scrollPosition = window.scrollY;
        newLineHeight = `${(scrollPosition / documentHeight) * 99}%`;
      });

      if (!found) setActive('#workshop');
      setLineHeight(newLineHeight);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div
        id="sidebarWrap"
        className="min-w-48 border-blackBlue relative lg:block hidden overflow-hidden h-fit"
      >
        <div
          id="sidebar"
          className="pt-6 xl:pl-60"
        >
          <ul>
            {NAV_MENUES.map(({ id, menu, path }) => (
              <li
                className={`py-10 hover:transition duration-300 dark:text-white text-base font-semibold hover:font-bold ease-in pl-4 border-l-2  h-[125px] border-white ${
                  active === path
                    ? 'dark:text-sky-600 font-semibold '
                    : 'text-white'
                }`}
                key={id}
                onClick={() => smoothScrollTo(path)}
              >
                <div>
                  <div
                    className="absolute h-full bg-blue ml-[-18px] "
                    style={{
                      width: '2px',
                      top: '0',

                      transformOrigin: 'top-25px',
                      height: lineHeight,
                      transition: 'height 0.1s ease',
                      marginTop: '150px',
                    }}
                  />
                </div>
                <Link href={path}>
                  <div>{menu}</div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="lg:hidden flex flex-row justify-center items-center">
        <div className="flex flex-row">
          <ul className="flex flex-row space-x-10">
            {res_NAV_MENUES.map(({ id, menu, path }) => (
              <li
                className={`hover:transition duration-300 dark:text-white text-base text-center font-semibold hover:font-bold ease-in ${
                  active === path
                    ? 'rounded-full bg-sky-500 px-2'
                    : 'text-white'
                }`}
                key={id}
                onClick={() => smoothScrollTo(path)}
              >
                <Link href={path}>
                  <div>{menu}</div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default SaidMenu;
