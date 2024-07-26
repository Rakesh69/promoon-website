import React from 'react';

const WorkShop = () => {
  const OBJECTIVE = [
    {
      id: 1,
      title:
        'Run through the entire project with the client based on the initial proposal and agreement.',
    },
    {
      id: 2,
      title:
        'Establish a detailed idea about the goals and business objectives of the client.',
    },
    {
      id: 3,
      title: 'Understanding the competitive landscape.',
    },
    {
      id: 4,
      title: 'Understanding the target audience, market & geography',
    },
    {
      id: 5,
      title:
        'Clarifying all queries and doubts which the team has, post initial analysis.',
    },
    {
      id: 6,
      title:
        'Understanding and documenting client’s design and branding preferences',
    },
    {
      id: 7,
      title: 'Laying down assumptions and constraints!',
    },
    {
      id: 8,
      title: 'Coming with a high level epic mapping.',
    },
  ];
  const OUTCOME = [
    {
      id: 1,
      title:
        'Have a precise and clear idea about the client’s and project’s goals',
    },
    {
      id: 2,
      title: 'Have a clear idea about the likes and dislikes of the client.',
    },
    {
      id: 3,
      title:
        'Getting client’s inputs and clarification on all open-ended points',
    },
    {
      id: 4,
      title: 'Having all the information required for the planning phase.',
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
      title: 'Project Owner / Client',
    },
    {
      id: 5,
      title: 'Business Analyst',
    },
  ];
  return (
    <>
      <section className=" md:pt-12">
        <div className="bg-[#F3F4F6] w-full pb-4 lg:rounded-l-xl rounded-xl ">
          <h1 className="md:hidden block text-sky-500 font-bold text-3xl py-8 px-5 ">
            Discovery Workshop
          </h1>
          <h2 className=" md:pt-8 font-bold text-textPrimary text-base mb-4 pl-8 text-bold relative transition-all duration-300 pr-8 w-fit ">
            OBJECTIVE
            <div className="border-animation ml-8 " />
          </h2>
          <ul className="pl-12">
            {OBJECTIVE.map(({ title, id }) => (
              <li
                key={id}
                className="text-textPrimary text-lg mb-4 lg:pl-4 list-disc "
              >
                {title}
              </li>
            ))}
          </ul>

          <div className=" w-full  lg:px-4">
            <h2 className="font-bold text-textPrimary text-base mb-4 pl-6 text-bold relative w-fit">
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

            <h2 className="font-bold text-textPrimary text-base mb-4 pl-6 text-bold relative w-fit ">
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
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkShop;
