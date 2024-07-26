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
  const [activeMenuId, setActiveMenuId] = useState(1);

  const handleMenuClick = (id: number) => {
    setActiveMenuId(id);
  };

  return (
    <>
      <div className="md:hidden flex flex-row justify-center items-center">
        <div className="flex flex-row">
          <ul className="flex flex-row space-x-10">
            {res_NAV_MENUES.map(({ id, menu, path }) => (
              <li
                key={id}
                onClick={() => handleMenuClick(id)}
                className={`hover:transition duration-300 dark:text-white text-base text-center font-semibold hover:font-bold ease-in ${
                  activeMenuId === id ? 'text-blue' : ''
                }`}
              >
                <Link href={path}>
                  <div className="block relative">
                    <div
                      className={`rounded-full absolute -top-3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center justify-center flex items-center text-black w-8 h-8 ${
                        activeMenuId === id ? 'bg-sky-500' : 'bg-white'
                      }`}
                    >
                      {id}
                    </div>
                  </div>
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
