import React from 'react';

const Devolpment = () => {
  const OBJECTIVE = [
    {
      id: 1,
      title:
        'Catering the requirement for frontend, backend, web services, and API development integration.',
    },
    {
      id: 2,
      title: 'Prepare a strategy for Agile Scrum methodology',
    },
    {
      id: 3,
      title:
        'Factor the aspects of multi-tenancy, scalability, 3rd party integration',
    },
    {
      id: 4,
      title: 'To set up a 2-3 week frequency for sprints/milestones',
    },
    {
      id: 5,
      title: 'Crafting an optimized clean code structure',
    },
    {
      id: 6,
      title: 'Involve client review in each sprint/milestone',
    },
  ];
  const WEBTECHNOLOGIES = [
    {
      id: 1,
      title: 'Back-end. : Laravel, Ruby, Python, Node.JS, Java',
    },
    {
      id: 2,
      title: 'Front-end. : AngularJS, ReactJS, VueJS Html5, CSS',
    },
    {
      id: 3,
      title: 'Database. : MongoDB, Mysql, PostgreSQL, Firebase',
    },
    {
      id: 4,
      title: 'OpenSource : Drupal, Magento, Wordpress',
    },
  ];
  const MOBILE_TECHNOLOGIES = [
    {
      id: 1,
      title: 'iOS : ObjectiveC, Swift, xCode',
    },
    {
      id: 2,
      title: 'Android. : Java, Android studio',
    },
    {
      id: 3,
      title: 'Hybrid. : Ionic, ReactNative',
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
      title: 'Front-End Developers',
    },
    {
      id: 4,
      title: 'Back-End Developers',
    },
    {
      id: 5,
      title: 'QA Engineer',
    },
  ];
  return (
    <>
      <section className="md:pt-12">
        <div
          id="planing"
          className=" bg-[#F3F4F6] w-full pb-8  lg:rounded-l-xl rounded-xl "
        >
          <h1 className="md:hidden block text-sky-500 font-bold text-3xl py-8 px-5 ">
            Devolpment
          </h1>
          <h2 className=" md:pt-8 font-bold text-textPrimary text-base relative w-fit mb-4 pl-8 text-bold">
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
            <h2 className="font-bold text-textPrimary text-base mb-4 relative w-fit text-bold pl-6">
              WEB TECHNOLOGIES
              <div className="border-animation ml-6 " />
            </h2>
            <ul className=" pl-12">
              {WEBTECHNOLOGIES.map(({ title, id }) => (
                <li
                  key={id}
                  className="text-textPrimary text-lg mb-4 pl-4 list-disc "
                >
                  {title}
                </li>
              ))}
            </ul>

            <h2 className="font-bold text-textPrimary text-base mb-4 pl-6  relative w-fit text-bold ">
              MOBILE TECHNOLOGIES
              <div className="border-animation ml-6 " />
            </h2>
            <ul className=" pl-12">
              {MOBILE_TECHNOLOGIES.map(({ title, id }) => (
                <li
                  key={id}
                  className="text-textPrimary text-lg mb-4 pl-4 list-disc "
                >
                  {title}
                </li>
              ))}
            </ul>

            <h2 className="font-bold text-textPrimary text-base mb-4 pl-6 w-fit relative text-bold ">
              TEAM MEMBERS INVOLVED
              <div className="border-animation ml-6 " />
            </h2>
            <ul className=" pl-12">
              {TEAM_MEMBERS_INVOLVED.map(({ title, id }) => (
                <li
                  key={id}
                  className="text-textPrimary text-lg mt-4 pl-4 list-disc "
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

export default Devolpment;
