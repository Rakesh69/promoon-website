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
      <section className="md:pt-12 ">
        <div
          id="planing"
          className="bg-[#F3F4F6] w-full pb-4 lg:rounded-l-xl rounded-xl  "
        >
          <h1 className="md:hidden block text-sky-500 font-bold text-3xl py-8 px-5 ">
            Planing
          </h1>
          <h2 className="md:pt-8 font-bold text-textPrimary  text-base mb-4 pl-8 text-bold relative w-fit ">
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

          <div className=" w-full lg:px-4 pb-0">
            <h2 className="font-bold text-textPrimary text-base mb-4 pl-6 text-bold relative w-fit ">
              OUTCOME
              <div className="border-animation ml-6 " />
            </h2>
            <ul className=" pl-12">
              {OUTCOME.map(({ title, id }) => (
                <li
                  key={id}
                  className="text-textPrimary text-lg mb-4 pl-4 list-disc "
                >
                  {title}
                </li>
              ))}
            </ul>

            <h2 className="font-bold text-textPrimary text-base mb-4 pl-6 relative w-fit text-bold ">
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

            <h2 className="font-bold text-textPrimary  text-base mb-4 pl-6 text-bold relative w-fit ">
              TEAM MEMBERS INVOLVED
              <div className="border-animation ml-6 " />
            </h2>
            <ul className=" pl-12">
              {TEAM_MEMBERS_INVOLVED.map(({ title, id }) => (
                <li
                  key={id}
                  className="text-textPrimary  text-lg mb-4 pl-4 list-disc "
                >
                  {title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Planing;
