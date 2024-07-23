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
      <section
        id="design"
        className="md:pt-24"
      >
        <div className=" bg-[#F3F4F6] w-full pb-4 lg:rounded-l-xl rounded-xl ">
          <h2 className="pt-8 font-bold text-textPrimary text-base mb-4 pl-8 text-bold">
            OBJECTIVE
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
        </div>

        <div className=" w-full py-10 lg:px-4">
          <h2 className="font-bold text-white text-base mb-4 pl-6 text-bold pt-6 lg:pt-0">
            DELIVERABLES
          </h2>
          <ul className=" pl-12">
            {DELIVERABLES.map(({ title, id }) => (
              <li
                key={id}
                className="text-white text-lg mb-4 pl-4 list-disc "
              >
                {title}
              </li>
            ))}
          </ul>

          <div className=" px-8 pb-8 lg:pb-0">
            <h2 className="pt-10 font-bold text-white text-xl mb-4 leading-tight text-bold">
              Tools
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

          <h2 className="font-bold text-white text-base mb-4 pl-6 text-bold pt-10 ">
            TEAM MEMBERS INVOLVED
          </h2>
          <ul className=" pl-12">
            {TEAM_MEMBERS_INVOLVED.map(({ title, id }) => (
              <li
                key={id}
                className="text-white text-lg mb-4 pl-4 list-disc "
              >
                {title}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};
export default Design;
