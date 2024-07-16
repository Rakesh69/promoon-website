import React, { useRef } from 'react';
import SaidMenu from './model/SaidMenu';
import Home from '@/pages';
import CompanyWork from './CompanyWork';
import ContactUs from '@/pages/contactus';
import WorkShop from './model/WorkShop';
import Planing from './model/Planing';
import Design from './model/Design';
import Devolpment from './model/Devolpment';
import Maintenance from './model/Maintenance';
import Testing from './model/Testing';
import Communication from './model/Communication';
import Collaboration from './model/Collaboration';
import Engagement from './model/Engagement';
import Conversation from './model/Conversation';

const OurProcess = () => {
  return (
    <>
      <div className="w-full  lg:p-0 p-4">
        <div className="container mx-auto lg:p-0 p-4 slideInDown">
          <h2 className="text-white lg:pt-24 pt-12 tracking-[4px] font-bold text-lg mb-7 leading-3">
            HOW WE WORK
          </h2>
          <p className="text-white font-bold text-2xl lg:text-3xl lg:leading-[52px] max-w-[690px]">
            The process is defined as a sequence of steps. When followed, it
            helps to achieve a goal. We consider it - the art of thinking
            through.
          </p>
        </div>
        <div className="lg:pt-12 pt-4 pb-10 lg:pb-10">
          <div className="top-24 z-10 flex flex-col lg:flex-row">
            <div className="lg:w-1/3 w-full pb-6 lg:pb-0">
              <SaidMenu />
            </div>
            <div
              id="content"
              className="md:w-5/6 w-full h-full overflow-hidden "
            >
              <section id="workshop">
                <WorkShop />
              </section>
              <section id="planning">
                <Planing />
              </section>
              <section id="design">
                <Design />
              </section>
              <section id="development">
                <Devolpment />
              </section>
              <section id="testing">
                <Testing />
              </section>
              <section id="maintenance">
                <Maintenance />
              </section>
            </div>
          </div>
        </div>
        <div>
          <section id="Communication">
            <Communication />
          </section>

          <Collaboration />
          <Engagement />
          <Conversation />
        </div>
      </div>
    </>
  );
};

export default OurProcess;
