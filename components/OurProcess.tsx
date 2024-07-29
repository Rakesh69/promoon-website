import React, { useState } from 'react';
import WorkShop from './model/WorkShop';
import Planing from './model/Planing';
import Design from './model/Design';
import Devolpment from './model/Devolpment';
import Maintenance from './model/Maintenance';
import Testing from './model/Testing';
import Communication from './model/Communication';
import Collaboration from './model/Collaboration';
import Engagement from './model/Engagement';
import Link from 'next/link';
import Image from 'next/image';

const res_NAV_MENUES = [
  { id: 1, menu: ' Discovery Workshop', path: '#workshop' },
  { id: 2, menu: ' Planning', path: '#planning' },
  { id: 3, menu: ' Design', path: '#design' },
  { id: 4, menu: ' Development', path: '#development' },
  { id: 5, menu: ' Testing', path: '#testing' },
  { id: 6, menu: 'Maintenance', path: '#maintenance' },
];

const OurProcess = () => {
  const [activeMenuId, setActiveMenuId] = useState(1);

  const handleMenuClick = (id: number) => {
    setActiveMenuId(id);
  };

  return (
    <>
      <div className="w-full  lg:p-0 p-4 ">
        <div className="container mx-auto lg:p-0 p-4  ">
          <div className="flex flex-col lg:flex-row justify-between md:pt-10">
            <div className="flex flex-col w-full lg:w-1/2 slideInLeft">
              <h2 className="text-white lg:pt-24 pt-12 tracking-[4px] font-bold text-lg mb-7 leading-3">
                HOW WE WORK
              </h2>
              <p className="text-white font-bold text-2xl lg:text-3xl lg:leading-[52px] max-w-[690px]">
                The process is defined as a sequence of steps. When followed, it
                helps to achieve a goal. We consider it - the art of thinking
                through.
              </p>

              <h2 className="text-white lg:text-4xl text-[27px] pt-8 font-normal lg:text-start text-center">
                Let’s talk about the specifics
              </h2>
            </div>
            <div className="flex flex-col lg:flex-row justify-between">
              <div className="text-black slideInRight lg:w-1/2  justify-center hidden lg:flex">
                <Image
                  src={'/assets/Process.png'}
                  alt={'image'}
                  width={400}
                  height={300}
                  className="max-w-[700px] max-h-[700px]"
                />
              </div>
              <div className="text-black flex justify-center lg:hidden">
                <Image
                  src={'/assets/Process.png'}
                  alt={'image'}
                  width={400}
                  height={300}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="lg:pt-12 pt-4 pb-10 lg:pb-10">
          <div className=" z-10 flex flex-col container mx-auto  ">
            <div className="w-full relative md:block hidden">
              <nav className=" !top-[700px]  !sticky">
                <div className="w-full">
                  <div className="relative flex flex-col items-center mt-8">
                    <ul className="relative flex justify-between w-full">
                      {res_NAV_MENUES.map(({ id, menu, path }) => (
                        <li
                          key={id}
                          onClick={() => handleMenuClick(id)}
                          className={`flex z-10 flex-col items-center cursor-pointer text-base font-semibold hover:font-bold transition duration-300 ${
                            activeMenuId === id ? 'text-blue' : 'text-white'
                          } ${id % 2 === 1 ? 'mt-20' : 'mb-8'} text-center`}
                        >
                          <div className="pb-4 pl-4 pt-4 relative">
                            {id % 2 === 1 && (
                              <div
                                className={`rounded-full absolute -top-3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center justify-center flex items-center text-black w-8 h-8 ${
                                  activeMenuId === id
                                    ? 'bg-sky-500'
                                    : 'bg-white'
                                }`}
                              >
                                {id}
                              </div>
                            )}

                            <div>{menu}</div>
                            <div className="relative">
                              {id % 2 !== 1 && (
                                <div
                                  className={`rounded-full absolute top-7 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center justify-center flex items-center text-black w-8 h-8 ${
                                    activeMenuId === id
                                      ? 'bg-sky-500'
                                      : 'bg-white'
                                  }`}
                                >
                                  {id}
                                </div>
                              )}
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                    <div className="absolute left-0 right-0 h-0.5 border-white border top-1/2 transform"></div>
                  </div>
                </div>
              </nav>
            </div>

            <div className="md:hidden flex flex-row justify-center items-center pb-6">
              <div className="flex flex-row">
                <ul className="flex flex-row space-x-10">
                  {res_NAV_MENUES.map(({ id, menu, path }) => (
                    <li
                      key={id}
                      onClick={() => handleMenuClick(id)}
                      className={`hover:transition duration-300 dark:text-white gap-x-8 text-base text-center font-semibold hover:font-bold ease-in ${
                        activeMenuId === id ? 'text-blue' : ''
                      }`}
                    >
                      <div className="block relative">
                        <div
                          className={`rounded-full absolute -top-3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center justify-center flex items-center text-black w-8 h-8 ${
                            activeMenuId === id ? 'bg-sky-500' : 'bg-white'
                          }`}
                        >
                          {id}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className=" w-full h-full ">
              {activeMenuId === 1 && (
                <section>
                  <WorkShop />
                </section>
              )}
              {activeMenuId === 2 && (
                <section>
                  <Planing />
                </section>
              )}
              {activeMenuId === 3 && (
                <section>
                  <Design />
                </section>
              )}
              {activeMenuId === 4 && (
                <section>
                  <Devolpment />
                </section>
              )}
              {activeMenuId === 5 && (
                <section>
                  <Testing />
                </section>
              )}
              {activeMenuId === 6 && (
                <section>
                  <Maintenance />
                </section>
              )}
            </div>
          </div>
        </div>
        <div>
          <section id="Communication">
            <Communication />
          </section>

          <Collaboration />
          <Engagement />
        </div>
      </div>
    </>
  );
};

export default OurProcess;

// import Conversation from './model/Conversation';
{
  /* <Conversation /> */
}
