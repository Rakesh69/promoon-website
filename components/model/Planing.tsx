import React from 'react';

const Planing = () => {
  const OBJECTIVE = [
    {
      id: 1,
      title:
        'Creation of all relevant documentation required for successful execution of the project',
    },
    {
      id: 2,
      title:
        'Getting confirmation and approval from the client on the documents and materials',
    },
    {
      id: 3,
      title: 'Defining the project plan',
    },
    {
      id: 4,
      title: 'Defining the design and branding guidelines of the project',
    },
  ];
  const OUTCOME = [
    {
      id: 1,
      title:
        'To get everything documented in detail, leaving nothing for chance or assumption',
    },
    {
      id: 2,
      title:
        'To get client’s approval and signoff on the documentation and project plan',
    },
    {
      id: 3,
      title: 'To have a well-defined and precise planning of the project',
    },
  ];
  const DELIVERABLES = [
    {
      id: 1,
      title: 'Detailed technical Specification',
    },
    {
      id: 2,
      title: 'Wire-frames',
    },
    {
      id: 3,
      title: 'User Stories',
    },
    {
      id: 4,
      title: 'Project plan with detailed milestone/sprint planning',
    },
    {
      id: 5,
      title: 'Test cases and scenarios',
    },
  ];
  const TEAM_MEMBERS_INVOLVED = [
    {
      id: 1,
      title: 'Project Manager',
    },
    {
      id: 2,
      title: 'Tech Lead',
    },
    {
      id: 3,
      title: 'IA & UX Lead',
    },
    {
      id: 4,
      title: 'UI Design Lead',
    },
    {
      id: 5,
      title: 'Test Lead',
    },
  ];
  return (
    <>
      <section
        id="planning"
        className="md:pt-20"
      >
        <div
          id="planing"
          className=" bg-[#F3F4F6] w-full pb-4 lg:rounded-l-xl rounded-xl "
        >
          <h2 className=" pt-8 font-bold text-textPrimary  text-base mb-4 pl-8 text-bold ">
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

        <div className=" w-full py-10 lg:px-4 pb-0">
          <h2 className="font-bold text-white text-base mb-4 pl-6 text-bold ">
            OUTCOME
          </h2>
          <ul className=" pl-12">
            {OUTCOME.map(({ title, id }) => (
              <li
                key={id}
                className="text-white text-lg mb-4 pl-4 list-disc "
              >
                {title}
              </li>
            ))}
          </ul>

          <h2 className="font-bold text-white text-base mb-4 pl-6 text-bold pt-6 lg:pt-9">
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

          <h2 className="font-bold text-white text-base mb-4 pl-6 text-bold pt-6 lg:pt-9">
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

export default Planing;
