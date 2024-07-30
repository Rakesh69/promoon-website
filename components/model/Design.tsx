import FrameIcon from '@/icons/FrameIcon';
import Illustrator from '@/icons/Illustrator';
import InvisionIcon from '@/icons/InvisionIcon';
import PhotoshopIcon from '@/icons/PhotoshopIcon';
import SketchIcon from '@/icons/SketchIcon';

import XdIcon from '@/icons/XdIcon';
import React from 'react';

const Design = () => {
  const OBJECTIVE = [
    {
      id: 1,
      title:
        'UI Design of all the project screens based on the approved wire-frames and design guidelines',
    },
    {
      id: 2,
      title: 'Web, Tablet and Mobile specific designs.',
    },
    {
      id: 3,
      title: 'Getting system UI Designs approved and confirmed by the client.',
    },
  ];
  const DELIVERABLES = [
    {
      id: 1,
      title: 'UI Designs of the projects',
    },
    {
      id: 2,
      title: 'Clickable prototype on Invision platform -> example link',
    },
    {
      id: 3,
      title: 'Source files in either Photoshop or Sketch format',
    },
  ];
  const TEAM_MEMBERS_INVOLVED = [
    {
      id: 1,
      title: 'Project Manager',
    },
    {
      id: 2,
      title: 'IA & UX Lead',
    },
    {
      id: 3,
      title: 'UI Design Lead',
    },
    {
      id: 4,
      title: 'UI Designer',
    },
  ];
  return (
    <>
      <section className="md:pt-12">
        <div className="bg-[#F3F4F6] w-full pb-8  lg:rounded-l-xl rounded-xl  ">
          <h1 className="md:hidden block text-sky-500 font-bold text-3xl py-8 px-5 ">
            Design
          </h1>
          <h2 className=" md:pt-8 font-bold text-textPrimary text-base mb-4 pl-8 text-bold relative w-fit">
            OBJECTIVE
            <div className="border-animation ml-8 " />
          </h2>
          <ul className=" pl-12">
            {OBJECTIVE.map(({ title, id }) => (
              <li
                key={id}
                className="text-textPrimary text-lg mb-4 lg:pl-4 list-disc "
              >
                {title}
              </li>
            ))}
          </ul>

          <div className=" w-full lg:px-4">
            <h2 className="font-bold text-textPrimary text-base mb-4 pl-6 text-bold relative w-fit lg:pt-0">
              DELIVERABLES
              <div className="border-animation ml-6 " />
            </h2>
            <ul className=" pl-12">
              {DELIVERABLES.map(({ title, id }) => (
                <li
                  key={id}
                  className="text-textPrimary text-lg mb-4 pl-4 list-disc "
                >
                  {title}
                </li>
              ))}
            </ul>

            <h2 className="font-bold text-textPrimary text-base relative w-fit mb-4 pl-6 text-bold ">
              TEAM MEMBERS INVOLVED
              <div className="border-animation ml-6 " />
            </h2>
            <ul className=" pl-12">
              {TEAM_MEMBERS_INVOLVED.map(({ title, id }) => (
                <li
                  key={id}
                  className="text-textPrimary text-lg mb-4 pl-4 list-disc "
                >
                  {title}
                </li>
              ))}
            </ul>

            <div className=" px-8  lg:pb-0">
              <h2 className="font-bold text-textPrimary text-xl mb-4 leading-tight relative w-fit text-bold">
                Tools
                <div className="border-animation  " />
              </h2>
              <div className="flex gap-8">
                <Illustrator />
                <XdIcon />
                <SketchIcon />
                <InvisionIcon />
                <FrameIcon />
                <PhotoshopIcon />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Design;
